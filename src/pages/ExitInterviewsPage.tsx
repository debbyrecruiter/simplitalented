
import React, { useEffect } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { ChatbotButton } from "@/components/Simpli/ChatbotButton";
import { useState } from "react";
import { ChatbotDialog } from "@/components/Simpli/ChatbotDialog";
import { ExitInterviewCalendar } from "@/components/ExitInterviews/ExitInterviewCalendar";
import { BackButton } from "@/components/ui/back-button";

const ExitInterviewsPage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Open the chatbot automatically when the page loads
  useEffect(() => {
    setIsChatOpen(true);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader title="Exit Interviews" />
      <div className="flex-1 p-4 overflow-auto">
        <div className="space-y-6">
          <div className="mb-6">
            <BackButton fallbackPath="/" />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-[#512888]">Exit Interview Scheduling</h2>
            <p className="text-muted-foreground">
              Simpli AI will help you schedule and conduct exit interviews for departing team members.
            </p>
          </div>
          
          <div className="w-full">
            <ExitInterviewCalendar />
          </div>
        </div>
      </div>
      
      {/* Custom chatbot dialog that opens automatically with exit interview message */}
      <ChatbotDialog 
        open={isChatOpen} 
        onOpenChange={setIsChatOpen}
        initialMessage="Hi there! Since we meet here again, can I assume that you would like for me to do an exit interview for you?"
      />
    </div>
  );
};

export default ExitInterviewsPage;
