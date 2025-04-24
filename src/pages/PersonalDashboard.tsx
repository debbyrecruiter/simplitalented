
import { DashboardHeader } from "@/components/DashboardHeader";
import { MetricCard } from "@/components/MetricCard";
import { Award, BookOpen, Star, Calendar, Users } from "lucide-react";

const PersonalDashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader title="Personal Dashboard" />
      <div className="flex-1 p-4 overflow-auto">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4">
          <MetricCard
            title="My Goals"
            value="4 Active"
            description="2 completed this quarter"
            icon={Award}
            trend="up"
            trendValue="On track"
          />
          <MetricCard
            title="My Learning"
            value="3 Courses"
            description="Frontend Development"
            icon={BookOpen}
            trend="neutral"
            trendValue="In progress"
          />
          <MetricCard
            title="My Reviews"
            value="Next: May 15"
            description="Quarterly Performance"
            icon={Star}
            trend="up"
            trendValue="Last: 4.5/5"
          />
          <MetricCard
            title="My Schedule"
            value="3 Upcoming"
            description="This week's meetings"
            icon={Calendar}
            trend="neutral"
            trendValue="2 tomorrow"
          />
          <MetricCard
            title="Past 1:1s"
            value="12 Total"
            description="Last month"
            icon={Users}
            trend="up"
            trendValue="+3 from previous"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalDashboard;
