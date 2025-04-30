
import { MetricCard } from "@/components/MetricCard";

interface ExpandedMeSectionProps {
  onPast11CardClick: () => void;
  onGoalsCardClick: () => void;
}

export function ExpandedMeSection({ onPast11CardClick, onGoalsCardClick }: ExpandedMeSectionProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-[#512888] mb-2">My Personal Dashboard</h2>
        <p className="text-muted-foreground">View and manage your performance metrics</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <MetricCard
          title="My Goals"
          value="3 Active"
          description="Track your progress"
          onClick={onGoalsCardClick}
        />
        <MetricCard
          title="My Learning"
          value="2 Courses"
          description="In progress"
        />
        <MetricCard
          title="My Reviews"
          value="Next: Jun 15"
          description="Performance review"
        />
        <MetricCard
          title="My Schedule"
          value="Today: 3 meetings"
          description="Upcoming events"
        />
        <MetricCard
          title="Past 1:1s"
          value="Last: Apr 28"
          description="Meeting history"
          onClick={onPast11CardClick}
        />
      </div>
    </div>
  );
}
