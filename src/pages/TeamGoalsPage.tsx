
import { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { BackButton } from "@/components/ui/back-button";
import { useNavigate } from "react-router-dom";
import { GoalsTeamFeed } from "@/components/goals/GoalsTeamFeed";
import { GoalTracker } from "@/components/GoalTracker";
import { ListCheck } from "lucide-react";

const TeamGoalsPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  // Sample team goals data for the tracker
  const teamGoals = [
    {
      id: 1,
      title: "Implement New Design System",
      progress: 85,
      category: "Team Project",
      dueDate: "July 20"
    },
    {
      id: 2,
      title: "Reduce Bug Backlog by 50%",
      progress: 65,
      category: "Quality Assurance",
      dueDate: "August 15"
    },
    {
      id: 3,
      title: "API Integration Strategy",
      progress: 30,
      category: "Architecture",
      dueDate: "September 5"
    },
    {
      id: 4,
      title: "Customer Satisfaction Improvement",
      progress: 55,
      category: "User Experience",
      dueDate: "October 10"
    },
    {
      id: 5,
      title: "Team Knowledge Sharing Sessions",
      progress: 70,
      category: "Team Development",
      dueDate: "Ongoing"
    }
  ];

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader title="Team Goals" />
      <div className="flex-1 p-4 overflow-auto rounded-sm bg-[#DBE1F3]">
        <div className="mb-4">
          <BackButton onClick={handleBackClick} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Left column - Team Goals tracker */}
          <div className="md:col-span-1">
            <div className="bg-white p-4 rounded-lg border-[3px] border-[#840DD7] mb-4">
              <div className="flex items-center gap-2 mb-3">
                <ListCheck className="h-5 w-5 text-[#512888]" />
                <h3 className="text-xl font-semibold text-[#512888]">Active Team Goals</h3>
              </div>
              <GoalTracker goals={teamGoals} className="bg-white border-none shadow-none" />
            </div>
          </div>
          
          {/* Right column - Feed */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-[#512888] mb-6">Team Goals Timeline</h2>
            <GoalsTeamFeed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamGoalsPage;
