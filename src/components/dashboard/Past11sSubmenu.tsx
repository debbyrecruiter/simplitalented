
import { MetricCard } from "@/components/MetricCard";
import { Video, BookOpen, Search } from "lucide-react";

export const Past11sSubmenu = () => {
  return (
    <div className="col-span-full grid gap-4 grid-cols-3 mt-4 animate-in fade-in-50">
      <MetricCard
        title="Video"
        value="8 Recordings"
        description="From last month"
        icon={Video}
        trend="neutral"
        trendValue="Latest: 2 days ago"
        className="origin-center scale-65" // Slightly bigger than 50% but still smaller than main menu
      />
      <MetricCard
        title="My Learning"
        value="3 Insights"
        description="From recordings"
        icon={BookOpen}
        trend="up"
        trendValue="2 new points"
        className="origin-center scale-65" // Slightly bigger than 50% but still smaller than main menu
      />
      <MetricCard
        title="Searchable Transcript"
        value="12 Documents"
        description="All meetings"
        icon={Search}
        trend="neutral"
        trendValue="Updated daily"
        className="origin-center scale-65" // Slightly bigger than 50% but still smaller than main menu
      />
    </div>
  );
}
