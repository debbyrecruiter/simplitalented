
import { FileText } from "lucide-react";
import { UpcomingReviewsCard } from "@/components/UpcomingReviewsCard";
import { Separator } from "@/components/ui/separator";

export function ExpandedReviewsSection() {
  // Sample reviews data
  const upcomingReviews = [
    {
      id: 1,
      reviewee: {
        name: "John Smith",
        avatarUrl: "/placeholder.svg",
        initials: "JS"
      },
      type: "Performance Review",
      date: "2024-01-15",
      time: "2:00 PM"
    },
    {
      id: 2,
      reviewee: {
        name: "Sarah Johnson",
        avatarUrl: "/placeholder.svg", 
        initials: "SJ"
      },
      type: "Mid-Year Review",
      date: "2024-01-18",
      time: "10:00 AM"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-[#F1F0FB] rounded-full">
          <FileText className="h-6 w-6 text-[#512888]" />
        </div>
        <h2 className="text-3xl font-bold text-[#512888]">My Reviews</h2>
      </div>
      
      <Separator className="my-4 bg-gray-200" />
      
      <div className="max-w-3xl mx-auto">
        <UpcomingReviewsCard reviews={upcomingReviews} />
      </div>
    </div>
  );
}
