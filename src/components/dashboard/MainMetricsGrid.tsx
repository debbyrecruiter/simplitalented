
import { MetricCard } from "@/components/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MainMetricsGridProps {
  onMeCardClick: () => void;
  onTeamCardClick: () => void;
  onDirectReportsClick: () => void;
  onGoalsCardClick?: () => void;
  onCompanyGoalsClick?: () => void;
}

export function MainMetricsGrid({ 
  onMeCardClick, 
  onTeamCardClick, 
  onDirectReportsClick,
  onGoalsCardClick,
  onCompanyGoalsClick
}: MainMetricsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <MetricCard
        title="Me"
        value="Your metrics"
        description="Personal dashboard"
        onClick={onMeCardClick}
      />
      <MetricCard
        title="Team"
        value="Team overview"
        description="Performance metrics"
        onClick={onTeamCardClick}
      />
      <MetricCard
        title="Direct Reports"
        value="Team members"
        description="Individual performance"
        onClick={onDirectReportsClick}
      />
      <MetricCard
        title="Company Goals"
        value="Team objectives"
        description="Strategic priorities"
        onClick={onCompanyGoalsClick}
      />
    </div>
  );
}
