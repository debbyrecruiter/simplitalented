
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
        className="rounded-full scale-50 aspect-square" // Added rounded-full and scale-50 to match main menu
      />
      <MetricCard
        title="My Learning"
        value="3 Insights"
        description="From recordings"
        icon={BookOpen}
        trend="up"
        trendValue="2 new points"
        className="rounded-full scale-50 aspect-square" // Added rounded-full and scale-50 to match main menu
      />
      <MetricCard
        title="Searchable Transcript"
        value="12 Documents"
        description="All meetings"
        icon={Search}
        trend="neutral"
        trendValue="Updated daily"
        className="rounded-full scale-50 aspect-square" // Added rounded-full and scale-50 to match main menu
      />
    </div>
  );
}
