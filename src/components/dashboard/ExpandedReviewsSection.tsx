
import { useNavigate } from "react-router-dom";
import { ListCheck } from "lucide-react";

export function ExpandedReviewsSection() {
  const navigate = useNavigate();
  
  const handleGoalsTimelineClick = () => {
    navigate("/my-reviews/timeline");
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div 
          onClick={handleGoalsTimelineClick}
          className="bg-white p-6 rounded-lg border-[3px] border-[#840DD7] shadow-sm cursor-pointer hover:shadow-md transition-all flex flex-col gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#F1F0FB] rounded-full">
              <ListCheck className="h-6 w-6 text-[#512888]" />
            </div>
            <h3 className="text-xl font-semibold text-[#512888]">Goals Timeline</h3>
          </div>
          <p className="text-muted-foreground">
            Track your goal progress over time with your personal goals timeline
          </p>
        </div>
      </div>
    </div>
  );
}
