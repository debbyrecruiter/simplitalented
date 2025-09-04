// Utility functions for calling the coaching API

interface ChatResponse {
  message: string;
  sessionId: string;
  timestamp: string;
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

interface GrowthPlanRequest {
  employeeName: string;
  currentRole: string;
  targetRole?: string;
  strengths?: string;
  developmentAreas?: string;
  careerGoals?: string;
  timeline?: string;
}

interface KnowledgeRequest {
  title: string;
  content: string;
  type: 'policy' | 'rubric' | 'leveling_guide' | 'template';
  metadata?: Record<string, any>;
}

// Get auth token - adjust this based on your auth implementation
const getAuthToken = () => {
  return localStorage.getItem('supabase.auth.token') || '';
};

// Base API call function
const makeApiCall = async (endpoint: string, data: any) => {
  const response = await fetch(`/functions/v1/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAuthToken()}`
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Network error' }));
    throw new Error(error.error || 'API call failed');
  }

  return response.json();
};

// Coaching API functions
export const coachingApi = {
  // Send a chat message to the coaching assistant
  sendChatMessage: async (message: string, sessionId?: string): Promise<ChatResponse> => {
    return makeApiCall('coach-chat', { message, sessionId });
  },

  // Generate a performance review draft
  generateReviewDraft: async (data: ReviewDraftRequest) => {
    return makeApiCall('coach-review-draft', data);
  },

  // Generate a growth plan
  generateGrowthPlan: async (data: GrowthPlanRequest) => {
    return makeApiCall('coach-growth-plan', data);
  },

  // Ingest knowledge into the knowledge base
  ingestKnowledge: async (data: KnowledgeRequest) => {
    return makeApiCall('coach-ingest', data);
  }
};

// Quick coaching helpers for integration into existing pages
export const quickCoaching = {
  // Quick goal coaching - can be integrated into goal pages
  getGoalCoaching: async (goal: string, currentProgress?: string) => {
    const message = `I'm working on this goal: "${goal}". ${currentProgress ? `My current progress is: ${currentProgress}.` : ''} Can you help me with next steps using the GROW framework?`;
    return coachingApi.sendChatMessage(message);
  },

  // Quick 1:1 preparation - can be integrated into 1:1 pages
  get11Preparation: async (employeeName: string, topics?: string[]) => {
    const topicsList = topics ? `Topics to cover: ${topics.join(', ')}.` : '';
    const message = `I'm preparing for a 1:1 with ${employeeName}. ${topicsList} Can you help me prepare effective coaching questions and structure for this conversation?`;
    return coachingApi.sendChatMessage(message);
  },

  // Quick review coaching - can be integrated into review pages
  getReviewCoaching: async (reviewType: string, employeeName?: string) => {
    const message = `I need help with ${reviewType}${employeeName ? ` for ${employeeName}` : ''}. Can you guide me through best practices and key questions to ask?`;
    return coachingApi.sendChatMessage(message);
  }
};