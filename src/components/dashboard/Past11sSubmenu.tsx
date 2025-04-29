
import { MetricCard } from "@/components/MetricCard";
import { Video, BookOpen, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
        className="aspect-square rounded-full scale-50 origin-center" 
        avatar={
          <Avatar className="h-10 w-10 border-2 border-[#42376a]">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>VR</AvatarFallback>
          </Avatar>
        }
      />
      <MetricCard
        title="My Learning"
        value="3 Insights"
        description="From recordings"
        icon={BookOpen}
        trend="up"
        trendValue="2 new points"
        className="aspect-square rounded-full scale-50 origin-center"
        avatar={
          <Avatar className="h-10 w-10 border-2 border-[#42376a]">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>ML</AvatarFallback>
          </Avatar>
        }
      />
      <MetricCard
        title="Searchable Transcript"
        value="12 Documents"
        description="All meetings"
        icon={Search}
        trend="neutral"
        trendValue="Updated daily"
        className="aspect-square rounded-full scale-50 origin-center"
        avatar={
          <Avatar className="h-10 w-10 border-2 border-[#42376a]">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>ST</AvatarFallback>
          </Avatar>
        }
      />
    </div>
  );
}
