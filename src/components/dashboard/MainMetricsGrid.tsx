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
              className="card-modern cursor-pointer w-full"
              style={{ 
                '--card-gradient-start': 'var(--gradient-green-start)',
                '--card-gradient-end': 'var(--gradient-green-end)'
              } as React.CSSProperties}
              onClick={handleMeClick}
            >
              <CardHeader className="flex flex-row items-start justify-between p-4">
                <div className="flex flex-col">
                  <CardTitle className="text-white text-xl font-bold">
                    Me
                  </CardTitle>
                  <div className="text-white text-sm opacity-100">
                    Personal dashboard
                  </div>
                </div>
                <div className="card-icon">
                  <User className="h-6 w-6 text-primary" />
                </div>
              </CardHeader>
            </Card>
          </div>
          
          <div className="flex-1 min-w-[300px] max-w-[400px]">
            {/* Team Card */}
            <Card 
              className="card-modern cursor-pointer w-full"
              style={{ 
                '--card-gradient-start': 'var(--gradient-blue-start)',
                '--card-gradient-end': 'var(--gradient-blue-end)'
              } as React.CSSProperties}
              onClick={onTeamCardClick}
            >
              <CardHeader className="flex flex-row items-start justify-between p-4">
                <div className="flex flex-col">
                  <CardTitle className="text-white text-xl font-bold">
                    Team
                  </CardTitle>
                  <div className="text-white text-sm opacity-100">
                    Team overview
                  </div>
                </div>
                <div className="card-icon">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </CardHeader>
            </Card>
          </div>
          
          <div className="flex-1 min-w-[300px] max-w-[400px]">
            {/* Direct Reports Card */}
            <Card 
              className="card-modern cursor-pointer w-full"
              style={{ 
                '--card-gradient-start': 'var(--gradient-purple-start)',
                '--card-gradient-end': 'var(--gradient-purple-end)'
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
                  <div className="text-white text-sm opacity-100">
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
              className="card-modern cursor-pointer w-full"
              style={{ 
                '--card-gradient-start': 'var(--gradient-pink-start)',
                '--card-gradient-end': 'var(--gradient-pink-end)'
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
                  <div className="text-white text-sm opacity-100">
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
              className="card-modern cursor-pointer w-full"
              style={{ 
                '--card-gradient-start': 'var(--gradient-orange-start)',
                '--card-gradient-end': 'var(--gradient-orange-end)'
              } as React.CSSProperties}
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
                  <div className="text-white text-sm opacity-100">
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
              className="card-modern cursor-pointer w-full"
              style={{ 
                '--card-gradient-start': 'var(--gradient-teal-start)',
                '--card-gradient-end': 'var(--gradient-teal-end)'
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
                  <div className="text-white text-sm opacity-100">
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