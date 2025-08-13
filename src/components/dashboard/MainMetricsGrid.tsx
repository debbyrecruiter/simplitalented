import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { User, Users, FileText, UserCheck, MessageSquare, GraduationCap } from "lucide-react";

interface MainMetricsGridProps {
  onMeCardClick: () => void;
  onTeamCardClick: () => void;
  onDirectReportsClick: () => void;
  onGoalsCardClick?: () => void;
  onCompanyGoalsClick?: () => void;
  onToDoListClick?: () => void;
  onReportsClick?: () => void;
  onExitInterviewsClick?: () => void;
}

export function MainMetricsGrid({ 
  onMeCardClick, 
  onTeamCardClick, 
  onDirectReportsClick,
  onGoalsCardClick,
  onCompanyGoalsClick,
  onToDoListClick,
  onReportsClick,
  onExitInterviewsClick
}: MainMetricsGridProps) {
  const navigate = useNavigate();
  
  // Handle Me card click with extra debugging
  const handleMeClick = (e: React.MouseEvent) => {
    // Log the event
    console.log("Me card click event triggered");
    
    // Prevent the default action
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // Call the passed-in handler
    onMeCardClick();
    
    // Log after calling the handler
    console.log("Me card click handler completed");
  };

  const handleLearningDevelopmentClick = () => {
    navigate("/learning-development");
  };

  const handleReportsClick = () => {
    if (onReportsClick) {
      onReportsClick();
    }
  };

  return (
    <div className="p-4">
      {/* Brick-style layout matching reference image */}
      <div className="space-y-4">
        {/* Row 1 - Full alignment */}
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[300px] max-w-[400px]">
            {/* Me Card */}
            <Card 
              className="shadow-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-all duration-300 w-full"
              style={{ 
                background: 'linear-gradient(135deg, var(--gradient-green-start), var(--gradient-green-end))',
                aspectRatio: '16/9'
              }}
              onClick={handleMeClick}
            >
              <CardHeader className="flex flex-row items-start justify-between p-4">
                <div className="flex flex-col">
                  <CardTitle className="text-white text-xl font-bold">
                    Me
                  </CardTitle>
                  <div className="text-white text-sm opacity-90">
                    Personal dashboard
                  </div>
                </div>
                <div className="bg-white rounded-full p-2 shadow-md">
                  <User className="h-6 w-6 text-green-600" />
                </div>
              </CardHeader>
            </Card>
          </div>
          
          <div className="flex-1 min-w-[300px] max-w-[400px]">
            {/* Team Card */}
            <Card 
              className="shadow-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-all duration-300 w-full"
              style={{ 
                background: 'linear-gradient(135deg, var(--gradient-blue-start), var(--gradient-blue-end))',
                aspectRatio: '16/9'
              }}
              onClick={onTeamCardClick}
            >
              <CardHeader className="flex flex-row items-start justify-between p-4">
                <div className="flex flex-col">
                  <CardTitle className="text-white text-xl font-bold">
                    Team
                  </CardTitle>
                  <div className="text-white text-sm opacity-90">
                    Team overview
                  </div>
                </div>
                <div className="bg-white rounded-full p-2 shadow-md">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </CardHeader>
            </Card>
          </div>
          
          <div className="flex-1 min-w-[300px] max-w-[400px]">
            {/* Direct Reports Card */}
            <Card 
              className="shadow-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-all duration-300 w-full"
              style={{ 
                background: 'linear-gradient(135deg, var(--gradient-purple-start), var(--gradient-purple-end))',
                aspectRatio: '16/9'
              }}
              onClick={onDirectReportsClick}
            >
              {/* Watermark for Direct Reports card */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <p className="text-2xl font-bold text-white/20 transform -rotate-12 select-none">
                  Manager View Only
                </p>
              </div>
              <CardHeader className="flex flex-row items-start justify-between p-4">
                <div className="flex flex-col">
                  <CardTitle className="text-white text-xl font-bold">
                    Direct Reports
                  </CardTitle>
                  <div className="text-white text-sm opacity-90">
                    Team members
                  </div>
                </div>
                <div className="bg-white rounded-full p-2 shadow-md">
                  <UserCheck className="h-6 w-6 text-purple-600" />
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Row 2 - Offset by half tile width (brick pattern) */}
        <div className="flex flex-wrap gap-4 ml-[calc(50%/3)]">

          <div className="flex-1 min-w-[300px] max-w-[400px]">
            {/* Reports Card */}
            <Card 
              className="shadow-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-all duration-300 w-full"
              style={{ 
                background: 'linear-gradient(135deg, var(--gradient-pink-start), var(--gradient-pink-end))',
                aspectRatio: '16/9'
              }}
              onClick={handleReportsClick}
            >
              {/* Watermark for Reports card */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <p className="text-2xl font-bold text-white/20 transform -rotate-12 select-none">
                  People Team View Only
                </p>
              </div>
              <CardHeader className="flex flex-row items-start justify-between p-4">
                <div className="flex flex-col">
                  <CardTitle className="text-white text-xl font-bold">
                    Reports
                  </CardTitle>
                  <div className="text-white text-sm opacity-90">
                    HR Analytics
                  </div>
                </div>
                <div className="bg-white rounded-full p-2 shadow-md">
                  <FileText className="h-6 w-6 text-pink-600" />
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className="flex-1 min-w-[300px] max-w-[400px]">
            {/* Exit Interviews Card */}
            <Card 
              className="shadow-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-all duration-300 w-full"
              style={{ 
                background: 'linear-gradient(135deg, var(--gradient-orange-start), var(--gradient-orange-end))',
                aspectRatio: '16/9'
              }}
              onClick={onExitInterviewsClick}
            >
              {/* Watermark for Exit Interviews card */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <p className="text-2xl font-bold text-white/20 transform -rotate-12 select-none">
                  People Team View Only
                </p>
              </div>
              <CardHeader className="flex flex-row items-start justify-between p-4">
                <div className="flex flex-col">
                  <CardTitle className="text-white text-xl font-bold">
                    Exit Interviews
                  </CardTitle>
                  <div className="text-white text-sm opacity-90">
                    Upcoming Exits
                  </div>
                </div>
                <div className="bg-white rounded-full p-2 shadow-md">
                  <MessageSquare className="h-6 w-6 text-orange-600" />
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className="flex-1 min-w-[300px] max-w-[400px]">
            {/* Learning & Development Card */}
            <Card 
              className="shadow-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-all duration-300 w-full"
              style={{ 
                background: 'linear-gradient(135deg, var(--gradient-teal-start), var(--gradient-teal-end))',
                aspectRatio: '16/9'
              }}
              onClick={handleLearningDevelopmentClick}
            >
              {/* Watermark for Learning & Development card */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <p className="text-2xl font-bold text-white/20 transform -rotate-12 select-none">
                  People Team View Only
                </p>
              </div>
              <CardHeader className="flex flex-row items-start justify-between p-4">
                <div className="flex flex-col">
                  <CardTitle className="text-white text-xl font-bold">
                    Learning & Development
                  </CardTitle>
                  <div className="text-white text-sm opacity-90">
                    Companywide L&D
                  </div>
                </div>
                <div className="bg-white rounded-full p-2 shadow-md">
                  <GraduationCap className="h-6 w-6 text-yellow-600" />
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}