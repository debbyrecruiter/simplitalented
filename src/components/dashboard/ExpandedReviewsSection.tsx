
import { useNavigate } from "react-router-dom";
import { ListCheck } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function ExpandedReviewsSection() {
  const navigate = useNavigate();
  
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-[#F1F0FB] rounded-full">
          <ListCheck className="h-6 w-6 text-[#512888]" />
        </div>
        <h2 className="text-3xl font-bold text-[#512888]">Reviews</h2>
      </div>
      
      <Separator className="my-4 bg-gray-200" />
      
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg border-[3px] border-[#840DD7] shadow-sm">
        <p className="text-center text-lg">Performance review information will appear here.</p>
      </div>
    </div>
  );
}
