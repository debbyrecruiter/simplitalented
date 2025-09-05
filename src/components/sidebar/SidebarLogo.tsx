
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { ChevronsRight, ChevronsLeft } from "lucide-react";

export function SidebarLogo() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <div className="p-4 flex items-center">
      <SidebarTrigger className="text-[#512888] hover:bg-purple-100 rounded-md p-1">
        {isCollapsed ? (
          <ChevronsRight className="h-5 w-5" />
        ) : (
          <ChevronsLeft className="h-5 w-5" />
        )}
      </SidebarTrigger>
    </div>
  );
}

