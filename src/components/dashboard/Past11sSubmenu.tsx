
import { MetricCard } from "@/components/MetricCard";
import { Video, Search, BookOpen } from "lucide-react";

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
        className="transform origin-center scale-65" // Explicitly adding transform
      />
      <MetricCard
        title="My Learning"
        value="3 Insights"
        description="From recordings"
        icon={BookOpen}
        trend="up"
        trendValue="2 new points"
        className="transform origin-center scale-65" // Explicitly adding transform
      />
      <MetricCard
        title="Transcripts"
        value="12 Documents"
        description="All meetings"
        icon={Search}
        trend="neutral"
        trendValue="Updated daily"
        className="transform origin-center scale-65" // Explicitly adding transform
      />
    </div>
  );
}
