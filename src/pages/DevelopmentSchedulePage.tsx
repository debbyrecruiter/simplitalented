
import React, { useEffect } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { ChatbotButton } from "@/components/Simpli/ChatbotButton";
import { useState } from "react";
import { ChatbotDialog } from "@/components/Simpli/ChatbotDialog";
import { DevelopmentScheduleCalendar } from "@/components/DevelopmentSchedule/DevelopmentScheduleCalendar";
import { BackButton } from "@/components/ui/back-button";

const DevelopmentSchedulePage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Open the chatbot automatically when the page loads
  useEffect(() => {
    setIsChatOpen(true);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader title="My Development Schedule" />
      <div className="flex-1 p-4 overflow-auto">
        <div className="space-y-6">
          <div className="mb-6">
            <BackButton fallbackPath="/?section=me" />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-[#512888]">Development Schedule</h2>
            <p className="text-muted-foreground">
              Your upcoming trainings, 1:1 meetings, and Simpli AI coaching sessions.
            </p>
          </div>
          
          <div className="w-full">
            <DevelopmentScheduleCalendar />
          </div>
        </div>
      </div>
      
      {/* Custom chatbot dialog that opens automatically with development schedule message */}
      <ChatbotDialog 
        open={isChatOpen} 
        onOpenChange={setIsChatOpen}
        initialMessage="Hi! I see you're checking your development schedule. I'm here every Monday morning for our 15-minute coaching sessions. Would you like me to help you prepare for any upcoming sessions or discuss your development goals?"
      />
    </div>
  );
};

export default DevelopmentSchedulePage;
