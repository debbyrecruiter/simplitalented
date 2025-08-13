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
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 max-w-4xl mx-auto">
        {/* My Goals Card */}
        <Card 
          className="shadow-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-all duration-300 transform rotate-1 hover:rotate-0"
          style={{ 
            background: 'linear-gradient(135deg, var(--gradient-green-start), var(--gradient-green-end))',
            aspectRatio: '16/9',
            marginTop: '0px'
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
          className="shadow-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-all duration-300 transform -rotate-1 hover:rotate-0"
          style={{ 
            background: 'linear-gradient(135deg, var(--gradient-blue-start), var(--gradient-blue-end))',
            aspectRatio: '16/9',
            marginTop: '16px'
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
  );
}