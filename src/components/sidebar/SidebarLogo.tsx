
import { SidebarTrigger } from "@/components/ui/sidebar";

export function SidebarLogo() {
  return (
    <div className="p-4 flex items-center gap-2">
      <h1 className="text-3xl font-bold font-comfortaa">
        <span className="text-[#512888]">Simpli</span>
        <span className="text-black">Talented</span>
      </h1>
      <SidebarTrigger className="ml-auto md:hidden" />
    </div>
  );
}
