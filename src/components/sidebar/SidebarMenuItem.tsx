
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import {
  SidebarMenuItem as BaseSidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";

interface MenuSubItem {
  title: string;
  icon: LucideIcon;
  path: string;
  className?: string;
}

interface MenuItemProps {
  title: string;
  icon: LucideIcon;
  path: string;
  submenu?: MenuSubItem[];
}

export function SidebarMenuItemComponent({ title, icon: Icon, path, submenu }: MenuItemProps) {
  return (
    <BaseSidebarMenuItem key={title}>
      <SidebarMenuButton asChild>
        <Link to={path} className="flex items-center gap-3 text-[#512888] font-bold text-[110%]">
          <Icon className="h-5 w-5 text-[#512888]" />
          <span>{title}</span>
        </Link>
      </SidebarMenuButton>
      {submenu && (
        <SidebarMenuSub>
          {submenu.map((subItem) => (
            <SidebarMenuSubItem key={subItem.title}>
              <SidebarMenuSubButton asChild>
                <Link 
                  to={subItem.path} 
                  className={`flex items-center gap-3 font-bold text-[110%] text-[#512888] ${subItem.className || ''}`}
                >
                  <subItem.icon className="h-4 w-4 text-[#512888]" />
                  <span>{subItem.title}</span>
                </Link>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      )}
    </BaseSidebarMenuItem>
  );
}
