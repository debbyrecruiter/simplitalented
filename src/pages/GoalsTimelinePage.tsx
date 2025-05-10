
import { DashboardHeader } from "@/components/DashboardHeader";
import { BackButton } from "@/components/ui/back-button";
import { GoalsFeed } from "@/components/goals/GoalsFeed";
import { ListCheck } from "lucide-react";

const GoalsTimelinePage = () => {
  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader title="Goals Timeline" />
      <div className="flex-1 p-4 overflow-auto rounded-sm bg-[#DBE1F3]">
        <div className="mb-4">
          <BackButton />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#F1F0FB] rounded-full">
              <ListCheck className="h-6 w-6 text-[#512888]" />
            </div>
            <h2 className="text-3xl font-bold text-[#512888]">Goals Timeline</h2>
          </div>
          
          <GoalsFeed />
        </div>
      </div>
    </div>
  );
};

export default GoalsTimelinePage;
