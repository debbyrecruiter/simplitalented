import React from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { BackButton } from "@/components/ui/back-button";
import { CoachingInterface } from "@/components/coaching/CoachingInterface";

const CoachingPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader title="AI Coaching Assistant" />
      <div className="flex-1 p-4 overflow-auto">
        <div className="space-y-6">
          <div className="mb-6">
            <BackButton fallbackPath="/" />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-[#512888]">AI Coaching Assistant</h2>
            <p className="text-muted-foreground">
              Get personalized coaching, generate review drafts, create growth plans, and manage your knowledge base.
            </p>
          </div>
          
          <CoachingInterface />
        </div>
      </div>
    </div>
  );
};

export default CoachingPage;