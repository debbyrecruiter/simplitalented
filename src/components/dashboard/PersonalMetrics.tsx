
import { Award, BookOpen, Star, Calendar, Users } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";

interface PersonalMetricsProps {
  onPast11Click: () => void;
}

export function PersonalMetrics({ onPast11Click }: PersonalMetricsProps) {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mb-4 animate-in fade-in-50">
      <MetricCard
        title="My Goals"
        value="4 Active"
        description="2 completed this quarter"
        icon={Award}
        trend="up"
        trendValue="On track"
        className="scale-[0.65] origin-top"
      />
      <MetricCard
        title="My Learning"
        value="3 Courses"
        description="Frontend Development"
        icon={BookOpen}
        trend="neutral"
        trendValue="In progress"
        className="scale-[0.65] origin-top"
      />
      <MetricCard
        title="My Reviews"
        value="Next: May 15"
        description="Quarterly Performance"
        icon={Star}
        trend="up"
        trendValue="Last: 4.5/5"
        className="scale-[0.65] origin-top"
      />
      <MetricCard
        title="My Schedule"
        value="3 Upcoming"
        description="This week's meetings"
        icon={Calendar}
        trend="neutral"
        trendValue="2 tomorrow"
        className="scale-[0.65] origin-top"
      />
      <MetricCard
        title="Past 1:1s"
        value="12 Total"
        description="Last month"
        icon={Users}
        trend="up"
        trendValue="+3 from previous"
        className="scale-[0.65] origin-top"
        onClick={onPast11Click}
      />
    </div>
  );
}
