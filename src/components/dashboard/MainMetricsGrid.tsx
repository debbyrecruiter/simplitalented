import { MetricCard } from "@/components/MetricCard";
import { Calendar, UserRound, UsersRound } from "lucide-react";

interface MainMetricsGridProps {
  onMeCardClick: () => void;
}

export const MainMetricsGrid = ({ onMeCardClick }: MainMetricsGridProps) => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-4">
      <MetricCard
        title="Me"
        value="Senior Developer"
        description="5 years experience"
        icon={UserRound}
        trend="up"
        trendValue="Last promoted 6 months ago"
        onClick={onMeCardClick}
        className="border-[#DBC4EC]"
      />
      <MetricCard
        title="My Team"
        value="8 Members"
        description="Frontend Development"
        icon={UsersRound}
        trend="up"
        trendValue="+2 this quarter"
      />
      <MetricCard
        title="My Direct Reports"
        value="5 Members"
        description="Across 2 teams"
        icon={UsersRound}
        trend="up"
        trendValue="+1 this month"
      />
      <MetricCard
        title="Upcoming Reviews"
        value="12"
        description="Due in the next 14 days"
        icon={Calendar}
        trend="up"
        trendValue="+3 from last period"
      />
    </div>
  );
};
