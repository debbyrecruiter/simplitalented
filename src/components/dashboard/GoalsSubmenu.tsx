
import { useNavigate } from "react-router-dom";

export function GoalsSubmenu() {
  const navigate = useNavigate();
  
  const handleMyGoalsClick = () => {
    navigate("/my-goals");
  };
  
  const handleTeamGoalsClick = () => {
    navigate("/team-goals");
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex flex-wrap md:flex-nowrap gap-6 justify-center mt-8">
        {/* My Goals Circle */}
        <div 
          className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden w-full max-w-md aspect-square flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors"
          onClick={handleMyGoalsClick}
        >
          <div className="flex flex-col items-center justify-center text-center pb-0 pt-6">
            <div className="text-5xl font-small text-[#9320E7] truncate">
              My Goals
            </div>
          </div>
          <div className="p-8 flex-1 flex flex-col justify-center text-center">
            <div className="text-4xl font-bold truncate">
              Your Goals
            </div>
            <p className="text-lg text-muted-foreground truncate">
              Your progress
            </p>
          </div>
        </div>

        {/* Team Goals Circle */}
        <div 
          className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden w-full max-w-md aspect-square flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors"
          onClick={handleTeamGoalsClick}
        >
          <div className="flex flex-col items-center justify-center text-center pb-0 pt-6">
            <div className="text-5xl font-small text-[#9320E7] truncate">
              Team Goals
            </div>
          </div>
          <div className="p-8 flex-1 flex flex-col justify-center text-center">
            <div className="text-4xl font-bold truncate">
              Team Performance Goals
            </div>
            <p className="text-lg text-muted-foreground truncate">
              Team progress overview
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
