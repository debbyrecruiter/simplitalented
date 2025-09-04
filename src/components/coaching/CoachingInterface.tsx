import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export function CoachingInterface() {
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Review Draft State
  const [reviewData, setReviewData] = useState({
    employeeName: '',
    role: '',
    reviewPeriod: '',
    achievements: '',
    challenges: '',
    goals: '',
    feedback: ''
  });

  // Growth Plan State
  const [growthPlanData, setGrowthPlanData] = useState({
    employeeName: '',
    currentRole: '',
    targetRole: '',
    strengths: '',
    developmentAreas: '',
    careerGoals: '',
    timeline: ''
  });

  // Knowledge Ingestion State
  const [knowledgeData, setKnowledgeData] = useState({
    title: '',
    content: '',
    type: 'policy' as 'policy' | 'rubric' | 'leveling_guide' | 'template',
    metadata: {}
  });

  const [generatedContent, setGeneratedContent] = useState<string>('');

  // Get auth token (you may need to adjust this based on your auth implementation)
  const getAuthToken = () => {
    // Replace with your actual auth token retrieval logic
    return localStorage.getItem('supabase.auth.token') || '';
  };

  const sendChatMessage = async () => {
    if (!currentMessage.trim() || isLoading) return;

    setIsLoading(true);
    try {
      const response = await fetch('/functions/v1/coach-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getAuthToken()}`
        },
        body: JSON.stringify({
          message: currentMessage,
          sessionId: sessionId
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();
      
      setChatMessages(prev => [
        ...prev,
        { role: 'user', content: currentMessage, timestamp: new Date().toISOString() },
        { role: 'assistant', content: data.message, timestamp: data.timestamp }
      ]);
      
      setSessionId(data.sessionId);
      setCurrentMessage('');
      toast.success('Message sent successfully');
    } catch (error) {
      toast.error('Failed to send message');
      console.error('Chat error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const generateReviewDraft = async () => {
    if (!reviewData.employeeName || !reviewData.role || !reviewData.reviewPeriod) {
      toast.error('Please fill in required fields');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/functions/v1/coach-review-draft', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getAuthToken()}`
        },
        body: JSON.stringify(reviewData)
      });

      if (!response.ok) {
        throw new Error('Failed to generate review draft');
      }

      const data = await response.json();
      setGeneratedContent(data.reviewDraft);
      toast.success('Review draft generated successfully');
    } catch (error) {
      toast.error('Failed to generate review draft');
      console.error('Review draft error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const generateGrowthPlan = async () => {
    if (!growthPlanData.employeeName || !growthPlanData.currentRole) {
      toast.error('Please fill in required fields');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/functions/v1/coach-growth-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getAuthToken()}`
        },
        body: JSON.stringify(growthPlanData)
      });

      if (!response.ok) {
        throw new Error('Failed to generate growth plan');
      }

      const data = await response.json();
      setGeneratedContent(data.growthPlan);
      toast.success('Growth plan generated successfully');
    } catch (error) {
      toast.error('Failed to generate growth plan');
      console.error('Growth plan error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const ingestKnowledge = async () => {
    if (!knowledgeData.title || !knowledgeData.content) {
      toast.error('Please fill in title and content');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/functions/v1/coach-ingest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getAuthToken()}`
        },
        body: JSON.stringify(knowledgeData)
      });

      if (!response.ok) {
        throw new Error('Failed to ingest knowledge');
      }

      const data = await response.json();
      toast.success(data.message);
      
      // Reset form
      setKnowledgeData({
        title: '',
        content: '',
        type: 'policy',
        metadata: {}
      });
    } catch (error) {
      toast.error('Failed to ingest knowledge');
      console.error('Knowledge ingestion error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>AI Coaching Assistant</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="chat" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="chat">Chat</TabsTrigger>
              <TabsTrigger value="review">Review Draft</TabsTrigger>
              <TabsTrigger value="growth">Growth Plan</TabsTrigger>
              <TabsTrigger value="knowledge">Knowledge Base</TabsTrigger>
            </TabsList>
            
            <TabsContent value="chat" className="space-y-4">
              <div className="h-96 overflow-y-auto border rounded-lg p-4 space-y-4">
                {chatMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {new Date(message.timestamp).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex space-x-2">
                <Input
                  placeholder="Type your coaching question..."
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                  disabled={isLoading}
                />
                <Button onClick={sendChatMessage} disabled={isLoading || !currentMessage.trim()}>
                  {isLoading ? 'Sending...' : 'Send'}
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="review" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="employeeName">Employee Name *</Label>
                    <Input
                      id="employeeName"
                      value={reviewData.employeeName}
                      onChange={(e) => setReviewData(prev => ({ ...prev, employeeName: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="role">Role *</Label>
                    <Input
                      id="role"
                      value={reviewData.role}
                      onChange={(e) => setReviewData(prev => ({ ...prev, role: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="reviewPeriod">Review Period *</Label>
                    <Input
                      id="reviewPeriod"
                      placeholder="e.g., Q4 2024"
                      value={reviewData.reviewPeriod}
                      onChange={(e) => setReviewData(prev => ({ ...prev, reviewPeriod: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="achievements">Key Achievements</Label>
                    <Textarea
                      id="achievements"
                      value={reviewData.achievements}
                      onChange={(e) => setReviewData(prev => ({ ...prev, achievements: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="challenges">Challenges/Areas for Improvement</Label>
                    <Textarea
                      id="challenges"
                      value={reviewData.challenges}
                      onChange={(e) => setReviewData(prev => ({ ...prev, challenges: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="goals">Goals for Next Period</Label>
                    <Textarea
                      id="goals"
                      value={reviewData.goals}
                      onChange={(e) => setReviewData(prev => ({ ...prev, goals: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="feedback">Additional Feedback</Label>
                    <Textarea
                      id="feedback"
                      value={reviewData.feedback}
                      onChange={(e) => setReviewData(prev => ({ ...prev, feedback: e.target.value }))}
                    />
                  </div>
                </div>
              </div>
              <Button onClick={generateReviewDraft} disabled={isLoading} className="w-full">
                {isLoading ? 'Generating...' : 'Generate Review Draft'}
              </Button>
            </TabsContent>

            <TabsContent value="growth" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="empName">Employee Name *</Label>
                    <Input
                      id="empName"
                      value={growthPlanData.employeeName}
                      onChange={(e) => setGrowthPlanData(prev => ({ ...prev, employeeName: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="currentRole">Current Role *</Label>
                    <Input
                      id="currentRole"
                      value={growthPlanData.currentRole}
                      onChange={(e) => setGrowthPlanData(prev => ({ ...prev, currentRole: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="targetRole">Target Role</Label>
                    <Input
                      id="targetRole"
                      value={growthPlanData.targetRole}
                      onChange={(e) => setGrowthPlanData(prev => ({ ...prev, targetRole: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="timeline">Timeline</Label>
                    <Input
                      id="timeline"
                      placeholder="e.g., 6 months, 1 year"
                      value={growthPlanData.timeline}
                      onChange={(e) => setGrowthPlanData(prev => ({ ...prev, timeline: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="strengths">Current Strengths</Label>
                    <Textarea
                      id="strengths"
                      value={growthPlanData.strengths}
                      onChange={(e) => setGrowthPlanData(prev => ({ ...prev, strengths: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="devAreas">Development Areas</Label>
                    <Textarea
                      id="devAreas"
                      value={growthPlanData.developmentAreas}
                      onChange={(e) => setGrowthPlanData(prev => ({ ...prev, developmentAreas: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="careerGoals">Career Goals</Label>
                    <Textarea
                      id="careerGoals"
                      value={growthPlanData.careerGoals}
                      onChange={(e) => setGrowthPlanData(prev => ({ ...prev, careerGoals: e.target.value }))}
                    />
                  </div>
                </div>
              </div>
              <Button onClick={generateGrowthPlan} disabled={isLoading} className="w-full">
                {isLoading ? 'Generating...' : 'Generate Growth Plan'}
              </Button>
            </TabsContent>

            <TabsContent value="knowledge" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="knowledgeTitle">Title *</Label>
                  <Input
                    id="knowledgeTitle"
                    value={knowledgeData.title}
                    onChange={(e) => setKnowledgeData(prev => ({ ...prev, title: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="knowledgeType">Type *</Label>
                  <Select 
                    value={knowledgeData.type} 
                    onValueChange={(value) => setKnowledgeData(prev => ({ ...prev, type: value as any }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="policy">Policy</SelectItem>
                      <SelectItem value="rubric">Rubric</SelectItem>
                      <SelectItem value="leveling_guide">Leveling Guide</SelectItem>
                      <SelectItem value="template">Template</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="knowledgeContent">Content *</Label>
                  <Textarea
                    id="knowledgeContent"
                    rows={8}
                    value={knowledgeData.content}
                    onChange={(e) => setKnowledgeData(prev => ({ ...prev, content: e.target.value }))}
                  />
                </div>
                <Button onClick={ingestKnowledge} disabled={isLoading} className="w-full">
                  {isLoading ? 'Adding...' : 'Add to Knowledge Base'}
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          {generatedContent && (
            <div className="mt-6">
              <Label>Generated Content:</Label>
              <div className="mt-2 p-4 border rounded-lg bg-muted">
                <pre className="whitespace-pre-wrap text-sm">{generatedContent}</pre>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}