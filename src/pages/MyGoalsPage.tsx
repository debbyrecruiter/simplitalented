
import { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { BackButton } from "@/components/ui/back-button";
import { useNavigate } from "react-router-dom";
import { GoalsFeed } from "@/components/goals/GoalsFeed";

const MyGoalsPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader title="My Goals" />
      <div className="flex-1 p-4 overflow-auto rounded-sm bg-[#DBE1F3]">
        <div className="mb-4">
          <BackButton onClick={handleBackClick} />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#512888] mb-6">My Goals Timeline</h2>
          <GoalsFeed />
        </div>
      </div>
    </div>
  );
};

export default MyGoalsPage;
