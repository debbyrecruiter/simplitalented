
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { coachingApi } from "@/lib/coachingApi";
import { toast } from "sonner";

interface ChatbotDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialMessage?: string;
}

export function ChatbotDialog({ open, onOpenChange, initialMessage }: ChatbotDialogProps) {
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([]);
  const [messageCount, setMessageCount] = useState(0);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isLoadingCoaching, setIsLoadingCoaching] = useState(false);

  // Initialize messages with either the initial message or default greeting
  useEffect(() => {
    const defaultMessage = "Hi there! I'm Simpli, your AI assistant. How can I help you today with talent management?";
    const messageToShow = initialMessage || defaultMessage;
    
    setMessages([{
      role: "assistant",
      content: messageToShow
    }]);
    setMessageCount(0);
  }, [initialMessage]);

  // Check if message should use AI coaching
  const isCoachingRequest = (message: string): boolean => {
    const coachingKeywords = [
      'coach', 'coaching', 'grow', 'goal', 'development', 'feedback', 'review', 'plan', 
      'growth', 'performance', 'career', '1:1', 'one on one', 'mentor', 'guidance',
      'advice', 'strategy', 'improvement', 'skill', 'learning', 'leadership', 'help me'
    ];
    return coachingKeywords.some(keyword => 
      message.toLowerCase().includes(keyword)
    );
  };

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;
    
    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: message }]);
    setMessageCount((prev) => prev + 1);
    
    // Check if this should use AI coaching or keep existing behavior
    if (isCoachingRequest(message)) {
      setIsLoadingCoaching(true);
      try {
        // Use the actual AI coaching API
        const response = await coachingApi.sendChatMessage(message, sessionId || undefined);
        
        setMessages((prev) => [...prev, { role: "assistant", content: response.message }]);
        setSessionId(response.sessionId);
        
      } catch (error) {
        console.error('Coaching API error:', error);
        
        // Fallback to original simulated response behavior
        setTimeout(() => {
          const fallbackResponse = "I'd love to help you with that! While I'm having some technical difficulties with my advanced coaching features right now, I can still provide some guidance. What specific area would you like to explore further?";
          setMessages((prev) => [...prev, { role: "assistant", content: fallbackResponse }]);
        }, 1000);
      } finally {
        setIsLoadingCoaching(false);
      }
    } else {
      // Keep EXACT same original behavior for non-coaching messages
      setTimeout(() => {
        // Check if this is an exit interview context based on the initial message
        const isExitInterviewContext = initialMessage?.includes("exit interview");
        
        let response;
        if (isExitInterviewContext) {
          if (messageCount === 0) {
            response = "Who should I schedule my exit interview with and what is their last day?";
          } else if (messageCount === 1) {
            response = "Got it. I will put myself on their calendar for an exit interview before their last day. Once it's confirmed, I will put it on the calendar so that you know that it's been confirmed and I will mark it as done once we've had our chat.";
          } else {
            response = "Is there anything else I can help you with regarding the exit interview process?";
          }
        } else {
          const responses = [
            "I can help you review employee performance metrics.",
            "I can suggest personalized development plans for your team members.",
            "Let me know if you need assistance with scheduling performance reviews.",
            "I can analyze team productivity trends based on your data.",
            "Need help with setting employee goals? I can provide templates and suggestions.",
            "I can help you schedule exit interviews and prepare the necessary documentation.",
            "Let me guide you through the exit interview process step by step."
          ];
          response = responses[Math.floor(Math.random() * responses.length)];
        }
        
        setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      }, 1000);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] h-[600px] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl font-comfortaa flex items-center gap-2">
            <span className="text-primary">Simpli</span> AI Assistant
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="flex-1 pr-4">
          <div className="flex flex-col gap-4 pb-4">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
          </div>
        </ScrollArea>
        
        <div className="mt-4">
          <ChatInput onSendMessage={handleSendMessage} isLoading={isLoadingCoaching} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
