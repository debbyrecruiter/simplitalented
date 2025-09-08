import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Target, Users } from "lucide-react";

export function GoalsSubmenu() {
  const navigate = useNavigate();
  
  const handleMyGoalsClick = () => {
    navigate("/my-goals");
  };
  
  const handleTeamGoalsClick = () => {
    navigate("/team-goals");
  };

  return (
    <div className="p-4">
      {/* Centered brick-style layout */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* My Goals Card */}
          <Card 
            className="shadow-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-all duration-300"
            style={{ 
              background: 'linear-gradient(135deg, #F7EAFB, #A076AD)',
              aspectRatio: '16/9'
            }}
            onClick={handleMyGoalsClick}
          >
            <CardHeader className="flex flex-row items-start justify-between p-4">
              <div className="flex flex-col">
                <CardTitle className="text-white text-xl font-bold">
                  My Goals
                </CardTitle>
                <div className="text-white text-sm opacity-90">
                  Your Goals • Track your progress
                </div>
              </div>
              <div className="bg-white rounded-full p-2 shadow-md">
                <Target className="h-6 w-6 text-green-600" />
              </div>
            </CardHeader>
          </Card>

          {/* Team Goals Card */}
          <Card 
            className="shadow-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-all duration-300"
            style={{ 
              background: 'linear-gradient(135deg, #f403d1, #64b5f6)',
              aspectRatio: '16/9'
            }}
            onClick={handleTeamGoalsClick}
          >
            <CardHeader className="flex flex-row items-start justify-between p-4">
              <div className="flex flex-col">
                <CardTitle className="text-white text-xl font-bold">
                  Team Goals
                </CardTitle>
                <div className="text-white text-sm opacity-90">
                  Team Performance • Progress overview
                </div>
              </div>
              <div className="bg-white rounded-full p-2 shadow-md">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}