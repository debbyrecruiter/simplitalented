
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ChevronsRight } from "lucide-react";

export function SidebarLogo() {
  return (
    <div className="p-4 flex items-center">
      <SidebarTrigger className="text-[#512888] hover:bg-purple-100 rounded-md p-1">
        <ChevronsRight className="h-5 w-5" />
      </SidebarTrigger>
    </div>
  );
}
