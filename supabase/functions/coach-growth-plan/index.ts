import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface GrowthPlanRequest {
  employeeName: string;
  currentRole: string;
  targetRole?: string;
  strengths?: string;
  developmentAreas?: string;
  careerGoals?: string;
  timeline?: string;
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
    const planData: GrowthPlanRequest = await req.json()

    if (!planData.employeeName || !planData.currentRole) {
      return new Response(JSON.stringify({ error: 'Employee name and current role are required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    // Get relevant leveling guides and development resources
    const { data: knowledgeBase } = await supabase
      .from('knowledge_base')
      .select('title, content, type')
      .eq('org_id', userData.org_id)
      .in('type', ['leveling_guide', 'template', 'policy'])

    let contextInfo = ''
    if (knowledgeBase && knowledgeBase.length > 0) {
      contextInfo = '\n\nOrganizational Resources:\n'
      knowledgeBase.forEach(kb => {
        contextInfo += `${kb.type.toUpperCase()}: ${kb.title}\n${kb.content}\n\n`
      })
    }

    // Build prompt for growth plan
    const prompt = `You are an expert career coach and HR professional. Create a comprehensive professional development and growth plan based on the following information:

Employee: ${planData.employeeName}
Current Role: ${planData.currentRole}
${planData.targetRole ? `Target Role: ${planData.targetRole}` : ''}
${planData.strengths ? `Current Strengths:\n${planData.strengths}` : ''}
${planData.developmentAreas ? `Development Areas:\n${planData.developmentAreas}` : ''}
${planData.careerGoals ? `Career Goals:\n${planData.careerGoals}` : ''}
${planData.timeline ? `Timeline: ${planData.timeline}` : ''}

${contextInfo}

Create a structured growth plan that includes:

1. **Development Objectives** (3-5 key areas for growth)
2. **Skill Development Plan** (specific competencies to build)
3. **Learning & Development Activities** (courses, training, experiences)
4. **Milestones & Success Metrics** (measurable goals and timelines)
5. **Resources & Support Needed** (mentoring, tools, budget)
6. **Action Steps** (specific next steps with deadlines)
7. **Review & Feedback Schedule** (check-in points and evaluation criteria)

The plan should be:
- Specific and actionable
- Aligned with career goals and organizational needs
- Realistic and achievable within the timeline
- Include both formal and experiential learning opportunities
- Consider the employee's current strengths and development areas

Format the plan clearly with headers and bullet points for easy reading and implementation.`

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
          { role: 'system', content: 'You are an expert career coach and professional development specialist with deep knowledge of creating effective growth plans.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.3,
        max_tokens: 2500,
      }),
    })

    if (!openaiResponse.ok) {
      throw new Error(`OpenAI API error: ${openaiResponse.statusText}`)
    }

    const openaiData = await openaiResponse.json()
    const growthPlan = openaiData.choices[0].message.content

    // Save the session
    const { data: session } = await supabase
      .from('coaching_sessions')
      .insert({
        org_id: userData.org_id,
        user_id: user.id,
        session_type: 'growth_plan',
        messages: [
          { role: 'user', content: JSON.stringify(planData), timestamp: new Date().toISOString() },
          { role: 'assistant', content: growthPlan, timestamp: new Date().toISOString() }
        ],
        context: { 
          employee: planData.employeeName, 
          currentRole: planData.currentRole,
          targetRole: planData.targetRole 
        }
      })
      .select('id')
      .single()

    // Log the action
    await supabase
      .from('audit_log')
      .insert({
        org_id: userData.org_id,
        user_id: user.id,
        action: 'growth_plan_generated',
        resource_type: 'coaching_session',
        resource_id: session?.id,
        details: { 
          employee: planData.employeeName, 
          currentRole: planData.currentRole,
          targetRole: planData.targetRole 
        }
      })

    return new Response(JSON.stringify({
      growthPlan,
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