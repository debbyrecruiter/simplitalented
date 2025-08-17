import { MetricCard } from "@/components/MetricCard";
import { Video, Search } from "lucide-react";

export const Past11sSubmenu = () => {
  return (
    <div className="col-span-full grid gap-2 grid-cols-2 mt-4 animate-fade-in">
      <MetricCard
        title="Video"
        value="8 Recordings"
        description="From last month"
        icon={Video}
        trend="neutral"
        trendValue="Latest: 2 days ago"
        className="transform origin-center scale-75 -mx-4"
      />
      <MetricCard
        title="Transcripts"
        value="12 Documents"
        description="All meetings"
        icon={Search}
        trend="neutral"
        trendValue="Updated daily"
        className="transform origin-center scale-75 -mx-4"
      />
    </div>
  );
}