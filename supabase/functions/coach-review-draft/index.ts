import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ReviewDraftRequest {
  employeeName: string;
  role: string;
  reviewPeriod: string;
  achievements?: string;
  challenges?: string;
  goals?: string;
  feedback?: string;
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
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

    // Parse request body
    const reviewData: ReviewDraftRequest = await req.json()

    if (!reviewData.employeeName || !reviewData.role || !reviewData.reviewPeriod) {
      return new Response(JSON.stringify({ error: 'Employee name, role, and review period are required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    // Get relevant review templates and rubrics
    const { data: knowledgeBase } = await supabase
      .from('knowledge_base')
      .select('title, content, type')
      .eq('org_id', userData.org_id)
      .in('type', ['rubric', 'template'])

    let contextInfo = ''
    if (knowledgeBase && knowledgeBase.length > 0) {
      contextInfo = '\n\nOrganizational Guidelines:\n'
      knowledgeBase.forEach(kb => {
        contextInfo += `${kb.type.toUpperCase()}: ${kb.title}\n${kb.content}\n\n`
      })
    }

    // Build prompt for review draft
    const prompt = `You are an expert HR professional helping to draft a performance review. Create a comprehensive, constructive, and professional performance review draft based on the following information:

Employee: ${reviewData.employeeName}
Role: ${reviewData.role}
Review Period: ${reviewData.reviewPeriod}

${reviewData.achievements ? `Key Achievements:\n${reviewData.achievements}\n` : ''}
${reviewData.challenges ? `Challenges/Areas for Improvement:\n${reviewData.challenges}\n` : ''}
${reviewData.goals ? `Goals for Next Period:\n${reviewData.goals}\n` : ''}
${reviewData.feedback ? `Additional Feedback:\n${reviewData.feedback}\n` : ''}

${contextInfo}

Please create a well-structured performance review that includes:
1. Executive Summary
2. Key Accomplishments
3. Areas of Strength
4. Development Opportunities
5. Goals for the Next Review Period
6. Manager Comments and Recommendations

The tone should be professional, constructive, and supportive of the employee's growth and development.`

    // Call OpenAI API
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: 'You are an expert HR professional specializing in performance reviews and employee development.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.3,
        max_tokens: 2000,
      }),
    })

    if (!openaiResponse.ok) {
      throw new Error(`OpenAI API error: ${openaiResponse.statusText}`)
    }

    const openaiData = await openaiResponse.json()
    const reviewDraft = openaiData.choices[0].message.content

    // Save the session
    const { data: session } = await supabase
      .from('coaching_sessions')
      .insert({
        org_id: userData.org_id,
        user_id: user.id,
        session_type: 'review_draft',
        messages: [
          { role: 'user', content: JSON.stringify(reviewData), timestamp: new Date().toISOString() },
          { role: 'assistant', content: reviewDraft, timestamp: new Date().toISOString() }
        ],
        context: { employee: reviewData.employeeName, role: reviewData.role }
      })
      .select('id')
      .single()

    // Log the action
    await supabase
      .from('audit_log')
      .insert({
        org_id: userData.org_id,
        user_id: user.id,
        action: 'review_draft_generated',
        resource_type: 'coaching_session',
        resource_id: session?.id,
        details: { employee: reviewData.employeeName, role: reviewData.role }
      })

    return new Response(JSON.stringify({
      reviewDraft,
      sessionId: session?.id,
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