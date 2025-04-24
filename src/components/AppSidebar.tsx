
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

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border">
      <SidebarLogo />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[#17202A] font-bold text-[110%]">Main Menu</SidebarGroupLabel>
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

