import { MetricCard } from "@/components/MetricCard";
import { Video, Search } from "lucide-react";

export const Past11sSubmenu = () => {
  return (
    <div className="col-span-full flex justify-center items-center gap-2 mt-72 animate-fade-in">
      <MetricCard
        title="Video"
        value="8 Recordings"
        description="From last month"
        icon={Video}
        trend="neutral"
        trendValue="Latest: 2 days ago"
        className="w-64 h-40"
      />
      <MetricCard
        title="Transcripts"
        value="12 Documents"
        description="All meetings"
        icon={Search}
        trend="neutral"
        trendValue="Updated daily"
        className="w-64 h-40"
      />
    </div>
  );
}