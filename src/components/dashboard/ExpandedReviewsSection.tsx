
import { useNavigate } from "react-router-dom";
import { ListCheck } from "lucide-react";
import { GoalsFeed } from "@/components/goals/GoalsFeed";

export function ExpandedReviewsSection() {
  const navigate = useNavigate();
  
  const handleGoalsTimelineClick = () => {
    navigate("/my-reviews/timeline");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-[#F1F0FB] rounded-full">
          <ListCheck className="h-6 w-6 text-[#512888]" />
        </div>
        <h2 className="text-3xl font-bold text-[#512888]">Goals Timeline</h2>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <GoalsFeed />
      </div>
    </div>
  );
}
