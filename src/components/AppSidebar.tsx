
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { SidebarLogo } from "@/components/sidebar/SidebarLogo";
import { SidebarMenuItemComponent } from "@/components/sidebar/SidebarMenuItem";
import { menuItems } from "@/config/sidebarMenu";
import { Menu } from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border">
      <SidebarLogo />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[#512888] font-bold text-[110%]">
            <Menu className="h-5 w-5 text-[#512888]" />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItemComponent key={item.title} {...item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
