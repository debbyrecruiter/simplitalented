
import { MetricCard } from "@/components/MetricCard";
import { Award, BookOpen, Star, Calendar, Users } from "lucide-react";

interface ExpandedMeSectionProps {
  onPast11CardClick: () => void;
}

export const ExpandedMeSection = ({ onPast11CardClick }: ExpandedMeSectionProps) => {
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-4 animate-in fade-in-50">
      <MetricCard
        title="My Goals"
        value="4 Active"
        description="2 completed this quarter"
        icon={Award}
        trend="up"
        trendValue="On track"
        className="scale-[0.65] origin-top border-[#DBC4EC]"
      />
      <MetricCard
        title="My Learning"
        value="3 Courses"
        description="Frontend Development"
        icon={BookOpen}
        trend="neutral"
        trendValue="In progress"
        className="scale-[0.65] origin-top border-[#DBC4EC]"
      />
      <MetricCard
        title="My Reviews"
        value="Next: May 15"
        description="Quarterly Performance"
        icon={Star}
        trend="up"
        trendValue="Last: 4.5/5"
        className="scale-[0.65] origin-top border-[#DBC4EC]"
      />
      <MetricCard
        title="My Schedule"
        value="3 Upcoming"
        description="This week's meetings"
        icon={Calendar}
        trend="neutral"
        trendValue="2 tomorrow"
        className="scale-[0.65] origin-top border-[#DBC4EC]"
      />
      <MetricCard
        title="Past 1:1s"
        value="12 Total"
        description="Last month"
        icon={Users}
        trend="up"
        trendValue="+3 from previous"
        className="scale-[0.65] origin-top border-[#DBC4EC]"
        onClick={onPast11CardClick}
      />
    </div>
  );
};
