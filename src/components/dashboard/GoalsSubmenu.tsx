
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
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {/* My Goals Circle */}
        <div 
          className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden w-80 h-80 flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors"
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
          className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden w-80 h-80 flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors"
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
