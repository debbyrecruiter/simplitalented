
import { MetricCard } from "@/components/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MainMetricsGridProps {
  onMeCardClick: () => void;
  onTeamCardClick: () => void;
  onDirectReportsClick: () => void;
  onGoalsCardClick?: () => void;
  onCompanyGoalsClick?: () => void;
  onReviewsClick?: () => void;
}

export function MainMetricsGrid({ 
  onMeCardClick, 
  onTeamCardClick, 
  onDirectReportsClick,
  onGoalsCardClick,
  onCompanyGoalsClick,
  onReviewsClick
}: MainMetricsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <Card 
        className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors"
        onClick={onMeCardClick}
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
      <Card 
        className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors"
        onClick={onReviewsClick}
      >
        <CardHeader className="flex flex-col items-center justify-center text-center pb-0 pt-10">
          <CardTitle className="text-6xl font-small text-[#9320E7] leading-tight">
            Reviews
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 flex-1 flex flex-col justify-center text-center">
          <div className="text-3xl font-bold truncate">
            Performance
          </div>
          <p className="text-sm text-muted-foreground truncate">
            Reviews and goals
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
