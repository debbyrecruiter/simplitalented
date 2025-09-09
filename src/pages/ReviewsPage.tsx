import { DashboardHeader } from "@/components/DashboardHeader";
import { ExpandedReviewsSection } from "@/components/dashboard/ExpandedReviewsSection";

export default function ReviewsPage() {
  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader title="My Reviews" />
      <div className="flex-1 p-4 overflow-auto">
        <ExpandedReviewsSection />
      </div>
    </div>
  );
}