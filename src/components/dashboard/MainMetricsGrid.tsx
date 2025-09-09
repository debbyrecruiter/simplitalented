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
            <div className="relative">
              <div 
                className="absolute top-0 left-0 w-full h-full rounded-2xl opacity-70 blur-xl"
                style={{
                  background: 'linear-gradient(-45deg, #b84fce 0%, #d4acfb 100%)',
                  transform: 'translate(25px, 27px) scale(0.95)',
                  zIndex: -1
                }}
              ></div>
              <Card 
                className="card-modern cursor-pointer w-full shadow-lg relative z-10"
                style={{ 
                  background: 'linear-gradient(135deg, #F7EAFB, #A076AD)'
                } as React.CSSProperties}
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
                  <div className="card-icon">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
          
          <div className="flex-1 min-w-[300px] max-w-[400px]">
            <div className="relative">
              <div 
                className="absolute top-0 left-0 w-full h-full rounded-2xl opacity-70 blur-xl"
                style={{
                  background: 'linear-gradient(-45deg, #b84fce 0%, #d4acfb 100%)',
                  transform: 'translate(25px, 27px) scale(0.95)',
                  zIndex: -1
                }}
              ></div>
              <Card 
                className="card-modern cursor-pointer w-full shadow-lg relative z-10"
                style={{ 
                  background: 'linear-gradient(135deg, #f403d1, #64b5f6)'
                } as React.CSSProperties}
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
                  <div className="card-icon">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
          
          <div className="flex-1 min-w-[300px] max-w-[400px]">
            {/* Direct Reports Card */}
            <Card 
              className="card-modern card-shadow cursor-pointer w-full shadow-lg relative"
              style={{ 
                background: 'linear-gradient(135deg, #f403d1, #64b5f6)'
              } as React.CSSProperties}
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
                <div className="card-icon">
                  <UserCheck className="h-6 w-6 text-primary" />
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
              className="card-modern card-shadow cursor-pointer w-full shadow-lg relative"
              style={{ 
                background: 'var(--gradient-2)'
              } as React.CSSProperties}
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
                <div className="card-icon">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className="flex-1 min-w-[300px] max-w-[400px]">
            {/* Exit Interviews Card */}
            <Card 
              className="card-modern card-shadow cursor-pointer w-full shadow-lg relative"
            style={{ 
              background: 'linear-gradient(135deg, #C698EB, #571B88)'
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
                <div className="card-icon">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className="flex-1 min-w-[300px] max-w-[400px]">
            {/* Learning & Development Card */}
            <Card 
              className="card-modern card-shadow cursor-pointer w-full shadow-lg relative"
              style={{ 
                background: 'linear-gradient(135deg, #F7EAFB, #A076AD)'
              } as React.CSSProperties}
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
                <div className="card-icon">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}