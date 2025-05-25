
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";

interface ChatbotDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialMessage?: string;
}

export function ChatbotDialog({ open, onOpenChange, initialMessage }: ChatbotDialogProps) {
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([]);

  // Initialize messages with either the initial message or default greeting
  useEffect(() => {
    const defaultMessage = "Hi there! I'm Simpli, your AI assistant. How can I help you today with talent management?";
    const messageToShow = initialMessage || defaultMessage;
    
    setMessages([{
      role: "assistant",
      content: messageToShow
    }]);
  }, [initialMessage]);

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;
    
    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: message }]);
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const responses = [
        "I can help you review employee performance metrics.",
        "I can suggest personalized development plans for your team members.",
        "Let me know if you need assistance with scheduling performance reviews.",
        "I can analyze team productivity trends based on your data.",
        "Need help with setting employee goals? I can provide templates and suggestions.",
        "I can help you schedule exit interviews and prepare the necessary documentation.",
        "Let me guide you through the exit interview process step by step."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setMessages((prev) => [...prev, { role: "assistant", content: randomResponse }]);
    }, 1000);
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
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
