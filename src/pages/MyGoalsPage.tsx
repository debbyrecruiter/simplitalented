
import { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { BackButton } from "@/components/ui/back-button";
import { useNavigate } from "react-router-dom";
import { GoalTracker } from "@/components/GoalTracker";
import { Button } from "@/components/ui/button";
import { ListCheck, PlusCircle } from "lucide-react";

const MyGoalsPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  // Sample goals data for the tracker
  const goals = [
    {
      id: 1,
      title: "Complete Leadership Training",
      progress: 75,
      category: "Professional Development",
      dueDate: "July 15"
    },
    {
      id: 2,
      title: "Improve Team Collaboration",
      progress: 60,
      category: "Team Management",
      dueDate: "August 30"
    },
    {
      id: 3,
      title: "Learn React Advanced Patterns",
      progress: 40,
      category: "Technical Skills",
      dueDate: "September 10"
    },
    {
      id: 4,
      title: "Implement Design System",
      progress: 25,
      category: "Project Goals",
      dueDate: "October 5"
    },
    {
      id: 5,
      title: "Mentor Junior Developers",
      progress: 90,
      category: "Leadership",
      dueDate: "Ongoing"
    }
  ];

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader title="My Goals" />
      <div className="flex-1 p-4 overflow-auto rounded-sm bg-[#DBE1F3]">
        <div className="mb-4">
          <BackButton />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-[#512888]">My Goals</h2>
            <Button className="bg-[#9320E7] hover:bg-[#7E69AB]" size="sm">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add New Goal
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg border-[3px] border-[#840DD7] mb-4">
            <div className="flex items-center gap-2 mb-3">
              <ListCheck className="h-5 w-5 text-[#512888]" />
              <h3 className="text-xl font-semibold text-[#512888]">My Active Goals</h3>
            </div>
            <GoalTracker goals={goals} className="bg-white border-none shadow-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyGoalsPage;
