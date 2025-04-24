
import { Video, BookOpen, Search } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";

export function Past11Metrics() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mb-4 animate-in fade-in-50 mt-2">
      <MetricCard
        title="Video"
        value="8 Recordings"
        description="From last month"
        icon={Video}
        trend="neutral"
        trendValue="Latest: 2 days ago"
        className="scale-[0.45] origin-top"
      />
      <MetricCard
        title="My Learning"
        value="3 Insights"
        description="From recordings"
        icon={BookOpen}
        trend="up"
        trendValue="2 new points"
        className="scale-[0.45] origin-top"
      />
      <MetricCard
        title="Searchable Transcript"
        value="12 Documents"
        description="All meetings"
        icon={Search}
        trend="neutral"
        trendValue="Updated daily"
        className="scale-[0.45] origin-top"
      />
    </div>
  );
}
