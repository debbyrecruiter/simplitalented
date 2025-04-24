
import { MetricCard } from "@/components/MetricCard";
import { UserRound, UsersRound } from "lucide-react";

interface MainMetricsGridProps {
  onMeCardClick: () => void;
  onTeamCardClick: () => void;
}

export const MainMetricsGrid = ({ onMeCardClick, onTeamCardClick }: MainMetricsGridProps) => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4">
      <MetricCard
        title="Me"
        value="Senior Developer"
        description="5 years experience"
        icon={UserRound}
        trend="up"
        trendValue="Last promoted 6 months ago"
        onClick={onMeCardClick}
      />
      <MetricCard
        title="My Team"
        value="8 Members"
        description="Frontend Development"
        icon={UsersRound}
        trend="up"
        trendValue="+2 this quarter"
        onClick={onTeamCardClick}
      />
      <MetricCard
        title="My Direct Reports"
        value="5 Members"
        description="Across 2 teams"
        icon={UsersRound}
        trend="up"
        trendValue="+1 this month"
      />
    </div>
  );
};

