
import { MetricCard } from "@/components/MetricCard";

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 animate-in fade-in-50">
      <MetricCard
        title="Me"
        value="Your metrics"
        description="Personal dashboard"
        className="border-12 border-[#840DD7]"
        onClick={onMeCardClick}
      />
      <MetricCard
        title="Team"
        value="Team overview"
        description="Performance metrics"
        className="border-12 border-[#840DD7]"
        onClick={onTeamCardClick}
      />
      <MetricCard
        title="Direct Reports"
        value="Team members"
        description="Individual performance"
        className="border-12 border-[#840DD7]"
        onClick={onDirectReportsClick}
      />
      <MetricCard
        title="Company Goals"
        value="2025"
        description="Strategic priorities"
        className="border-12 border-[#840DD7]"
        onClick={onCompanyGoalsClick}
      />
    </div>
  );
}
