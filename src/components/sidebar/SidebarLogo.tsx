
import { SidebarTrigger } from "@/components/ui/sidebar";

export function SidebarLogo() {
  return (
    <div className="p-4 flex items-center justify-end">
      <SidebarTrigger className="ml-auto md:hidden" />
    </div>
  );
}
