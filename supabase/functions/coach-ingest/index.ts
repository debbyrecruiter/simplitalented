import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface IngestRequest {
  title: string;
  content: string;
  type: 'policy' | 'rubric' | 'leveling_guide' | 'template';
  metadata?: Record<string, any>;
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
    const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')

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

    // Get user's organization and check admin role
    const { data: userData } = await supabase
      .from('users')
      .select('org_id, role')
      .eq('id', user.id)
      .single()

    if (!userData || userData.role !== 'admin') {
      return new Response(JSON.stringify({ error: 'Admin access required' }), {
        status: 403,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    // Parse request body
    const { title, content, type, metadata }: IngestRequest = await req.json()

    if (!title || !content || !type) {
      return new Response(JSON.stringify({ error: 'Title, content, and type are required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    // Insert knowledge into database
    const { data: knowledgeItem, error: insertError } = await supabase
      .from('knowledge_base')
      .insert({
        org_id: userData.org_id,
        title,
        content,
        type,
        metadata: metadata || {}
      })
      .select('id')
      .single()

    if (insertError) {
      throw new Error(`Failed to insert knowledge: ${insertError.message}`)
    }

    // Log the action
    await supabase
      .from('audit_log')
      .insert({
        org_id: userData.org_id,
        user_id: user.id,
        action: 'knowledge_ingested',
        resource_type: 'knowledge_base',
        resource_id: knowledgeItem.id,
        details: { title, type, content_length: content.length }
      })

    return new Response(JSON.stringify({
      success: true,
      id: knowledgeItem.id,
      message: `Successfully ingested ${type}: ${title}`
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