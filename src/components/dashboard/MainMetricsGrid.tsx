
import { MetricCard } from "@/components/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <Card 
        className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors"
        onClick={handleMeClick}
      >
        <CardHeader className="flex flex-col items-center justify-center text-center pb-0 pt-10">
          <CardTitle className="text-6xl font-small text-[#9320E7] truncate">
            Me
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 flex-1 flex flex-col justify-center text-center">
          <div className="text-3xl font-bold truncate">
            Your metrics
          </div>
          <p className="text-sm text-muted-foreground truncate">
            Personal dashboard
          </p>
        </CardContent>
      </Card>
      <Card 
        className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors"
        onClick={onTeamCardClick}
      >
        <CardHeader className="flex flex-col items-center justify-center text-center pb-0 pt-10">
          <CardTitle className="text-6xl font-small text-[#9320E7] truncate">
            Team
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 flex-1 flex flex-col justify-center text-center">
          <div className="text-3xl font-bold truncate">
            Team overview
          </div>
          <p className="text-sm text-muted-foreground truncate">
            Performance metrics
          </p>
        </CardContent>
      </Card>
      <Card 
        className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors relative"
        onClick={onDirectReportsClick}
      >
        {/* Watermark for Direct Reports card */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <p className="text-4xl font-bold text-purple-500/40 transform -rotate-12 select-none">
            Manager View Only
          </p>
        </div>
        <CardHeader className="flex flex-col items-center justify-center text-center pb-0 pt-10">
          <CardTitle className="text-6xl font-small text-[#9320E7] leading-tight">
            Direct<br />Reports
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 flex-1 flex flex-col justify-center text-center">
          <div className="text-3xl font-bold truncate">
            Team members
          </div>
          <p className="text-sm text-muted-foreground truncate">
            Individual performance
          </p>
        </CardContent>
      </Card>
      
      {/* Reports Card with Watermark */}
      <Card 
        className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors relative"
        onClick={onReportsClick}
      >
        {/* Watermark for Reports card */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <p className="text-4xl font-bold text-purple-500/40 transform -rotate-12 select-none">
            People Team View Only
          </p>
        </div>
        <CardHeader className="flex flex-col items-center justify-center text-center pb-0 pt-10">
          <CardTitle className="text-6xl font-small text-[#9320E7] leading-tight">
            Reports
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 flex-1 flex flex-col justify-center text-center">
          <div className="text-3xl font-bold truncate">
            HR Analytics
          </div>
          <p className="text-sm text-muted-foreground truncate">
            Company-wide metrics
          </p>
        </CardContent>
      </Card>

      {/* Exit Interviews Card with Watermark */}
      <Card 
        className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors relative"
        onClick={onExitInterviewsClick}
      >
        {/* Watermark for Exit Interviews card */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <p className="text-4xl font-bold text-purple-500/40 transform -rotate-12 select-none">
            People Team View Only
          </p>
        </div>
        <CardHeader className="flex flex-col items-center justify-center text-center pb-0 pt-10">
          <CardTitle className="text-6xl font-small text-[#9320E7] leading-tight">
            Exit<br />Interviews
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 flex-1 flex flex-col justify-center text-center">
          <div className="text-3xl font-bold truncate">
            Upcoming Exits
          </div>
          <p className="text-sm text-muted-foreground truncate">
            For Scheduling by Simpli
          </p>
        </CardContent>
      </Card>

      {/* Learning & Development Card with Watermark */}
      <Card 
        className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors relative"
        onClick={handleLearningDevelopmentClick}
      >
        {/* Watermark for Learning & Development card */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <p className="text-4xl font-bold text-purple-500/40 transform -rotate-12 select-none">
            People Team View Only
          </p>
        </div>
        <CardHeader className="flex flex-col items-center justify-center text-center pb-0 pt-10">
          <CardTitle className="text-6xl font-small text-[#9320E7] leading-tight">
            Learning &<br />Development
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 flex-1 flex flex-col justify-center text-center">
          <div className="text-3xl font-bold truncate">
            Companywide L&D
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
