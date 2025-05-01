
import { useNavigate } from "react-router-dom";
import { ListCheck } from "lucide-react";

export function ExpandedReviewsSection() {
  const navigate = useNavigate();
  
  const handleMyGoalsTimelineClick = () => {
    navigate("/my-goals");
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-[#512888] mb-2">Reviews</h2>
        <p className="text-muted-foreground">View and manage your different reviews and goals</p>
      </div>

      <div className="flex flex-nowrap gap-6 justify-center mt-8">
        {/* My Goals Timeline Circle */}
        <div 
          className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center flex-shrink-0 cursor-pointer hover:border-blue-600 transition-colors"
          style={{ width: "437.5px", height: "437.5px" }}
          onClick={handleMyGoalsTimelineClick}
        >
          <div className="flex flex-col items-center justify-center text-center pb-0 pt-6">
            <div className="text-4xl font-small text-[#9320E7] truncate">
              My Goals
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col justify-center text-center">
            <div className="text-3xl font-bold truncate">
              Timeline
            </div>
            <p className="text-sm text-muted-foreground truncate">
              Track your goal progress over time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
