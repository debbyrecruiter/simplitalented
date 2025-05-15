
import { MetricCard } from "@/components/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MainMetricsGridProps {
  onMeCardClick: () => void;
  onTeamCardClick: () => void;
  onDirectReportsClick: () => void;
  onGoalsCardClick?: () => void;
  onCompanyGoalsClick?: () => void;
  onToDoListClick?: () => void;
  onReportsClick?: () => void;
}

export function MainMetricsGrid({ 
  onMeCardClick, 
  onTeamCardClick, 
  onDirectReportsClick,
  onGoalsCardClick,
  onCompanyGoalsClick,
  onToDoListClick,
  onReportsClick
}: MainMetricsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <Card 
        className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden w-[110px] h-[110px] flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors"
        onClick={onMeCardClick}
      >
        <CardHeader className="flex flex-col items-center justify-center text-center pb-0 pt-2">
          <CardTitle className="text-2xl font-small text-[#9320E7] truncate">
            Me
          </CardTitle>
        </CardHeader>
        <CardContent className="p-2 flex-1 flex flex-col justify-center text-center">
          <div className="text-lg font-bold truncate">
            Your metrics
          </div>
          <p className="text-xs text-muted-foreground truncate">
            Personal
          </p>
        </CardContent>
      </Card>
      <Card 
        className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden w-[110px] h-[110px] flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors"
        onClick={onTeamCardClick}
      >
        <CardHeader className="flex flex-col items-center justify-center text-center pb-0 pt-2">
          <CardTitle className="text-2xl font-small text-[#9320E7] truncate">
            Team
          </CardTitle>
        </CardHeader>
        <CardContent className="p-2 flex-1 flex flex-col justify-center text-center">
          <div className="text-lg font-bold truncate">
            Overview
          </div>
          <p className="text-xs text-muted-foreground truncate">
            Metrics
          </p>
        </CardContent>
      </Card>
      <Card 
        className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden w-[110px] h-[110px] flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors relative"
        onClick={onDirectReportsClick}
      >
        {/* Watermark for Direct Reports card */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <p className="text-lg font-bold text-purple-500/40 transform -rotate-12 select-none">
            Manager
          </p>
        </div>
        <CardHeader className="flex flex-col items-center justify-center text-center pb-0 pt-2">
          <CardTitle className="text-lg font-small text-[#9320E7] leading-tight">
            Direct<br />Reports
          </CardTitle>
        </CardHeader>
        <CardContent className="p-2 flex-1 flex flex-col justify-center text-center">
          <div className="text-sm font-bold truncate">
            Team
          </div>
          <p className="text-xs text-muted-foreground truncate">
            Performance
          </p>
        </CardContent>
      </Card>
      
      {/* New Reports Card with Watermark */}
      <Card 
        className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden w-[110px] h-[110px] flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors relative"
        onClick={onReportsClick}
      >
        {/* Watermark for Reports card */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <p className="text-lg font-bold text-purple-500/40 transform -rotate-12 select-none">
            HR Only
          </p>
        </div>
        <CardHeader className="flex flex-col items-center justify-center text-center pb-0 pt-2">
          <CardTitle className="text-lg font-small text-[#9320E7] leading-tight">
            Reports
          </CardTitle>
        </CardHeader>
        <CardContent className="p-2 flex-1 flex flex-col justify-center text-center">
          <div className="text-sm font-bold truncate">
            Analytics
          </div>
          <p className="text-xs text-muted-foreground truncate">
            Metrics
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
