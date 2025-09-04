import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ChatRequest {
  message: string;
  sessionId?: string;
  context?: Record<string, any>;
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Get environment variables
    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY')
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
    const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')

    if (!OPENAI_API_KEY) {
      throw new Error('OpenAI API key not configured')
    }

    // Initialize Supabase client
    const supabase = createClient(SUPABASE_URL!, SUPABASE_ANON_KEY!)

    // Get user from auth header
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      return new Response(JSON.stringify({ error: 'Missing authorization' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(
      authHeader.replace('Bearer ', '')
    )

    if (authError || !user) {
      return new Response(JSON.stringify({ error: 'Invalid authorization' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    // Parse request body
    const { message, sessionId, context }: ChatRequest = await req.json()

    if (!message) {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    // Get user's organization
    const { data: userData } = await supabase
      .from('users')
      .select('org_id, role')
      .eq('id', user.id)
      .single()

    if (!userData) {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    // Get relevant knowledge base content for context
    const { data: knowledgeBase } = await supabase
      .from('knowledge_base')
      .select('title, content, type')
      .eq('org_id', userData.org_id)
      .limit(5)

    // Build system prompt with GROW methodology and knowledge context
    let systemPrompt = `You are a professional executive coach specialized in the GROW methodology (Goal, Reality, Options, Will). 

Your coaching style should be:
- Ask powerful, thought-provoking questions
- Listen actively and reflect what you hear
- Help the person discover their own solutions
- Focus on action and accountability
- Be supportive yet challenging

GROW Framework:
- Goal: What do they want to achieve?
- Reality: What is the current situation?
- Options: What possibilities and alternatives exist?
- Will: What will they do? When? What might get in the way?

Always end responses with a specific next-step suggestion or question to move them forward.`

    if (knowledgeBase && knowledgeBase.length > 0) {
      systemPrompt += '\n\nRelevant organizational context:\n'
      knowledgeBase.forEach(kb => {
        systemPrompt += `- ${kb.type}: ${kb.title}\n${kb.content.substring(0, 200)}...\n`
      })
    }

    // Get or create coaching session
    let currentSessionId = sessionId
    if (!currentSessionId) {
      const { data: newSession, error: sessionError } = await supabase
        .from('coaching_sessions')
        .insert({
          org_id: userData.org_id,
          user_id: user.id,
          session_type: 'chat',
          messages: [],
          context: context || {}
        })
        .select('id')
        .single()

      if (sessionError) {
        throw new Error(`Failed to create session: ${sessionError.message}`)
      }
      currentSessionId = newSession.id
    }

    // Get session history
    const { data: session } = await supabase
      .from('coaching_sessions')
      .select('messages')
      .eq('id', currentSessionId)
      .single()

    const previousMessages = session?.messages || []

    // Prepare messages for OpenAI
    const messages = [
      { role: 'system', content: systemPrompt },
      ...previousMessages,
      { role: 'user', content: message }
    ]

    // Call OpenAI API
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: messages,
        temperature: 0.7,
        max_tokens: 1000,
      }),
    })

    if (!openaiResponse.ok) {
      throw new Error(`OpenAI API error: ${openaiResponse.statusText}`)
    }

    const openaiData = await openaiResponse.json()
    const assistantMessage = openaiData.choices[0].message.content

    // Update session with new messages
    const updatedMessages = [
      ...previousMessages,
      { role: 'user', content: message, timestamp: new Date().toISOString() },
      { role: 'assistant', content: assistantMessage, timestamp: new Date().toISOString() }
    ]

    await supabase
      .from('coaching_sessions')
      .update({ messages: updatedMessages })
      .eq('id', currentSessionId)

    // Log the interaction
    await supabase
      .from('audit_log')
      .insert({
        org_id: userData.org_id,
        user_id: user.id,
        action: 'coaching_chat',
        resource_type: 'coaching_session',
        resource_id: currentSessionId,
        details: { message_length: message.length }
      })

    return new Response(JSON.stringify({
      message: assistantMessage,
      sessionId: currentSessionId,
      timestamp: new Date().toISOString()
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })

  } catch (error) {
    console.error('Error:', error)
    return new Response(JSON.stringify({ 
      error: 'Internal server error',
      details: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
})