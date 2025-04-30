
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const isSelected = location.pathname === path;
  const textColor = isSelected ? "text-[#512888]" : "text-[#8E9196]";

  return (
    <BaseSidebarMenuItem key={title}>
      <SidebarMenuButton asChild>
        <Link to={path} className={`flex items-center gap-3 font-bold text-[110%] ${textColor} transition-colors duration-200`}>
          <Icon className={`h-5 w-5 ${textColor} transition-colors duration-200`} />
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
                  className={`flex items-center gap-3 text-[110%] text-[#0067D9] ${subItem.className || ''}`}
                >
                  <subItem.icon className="h-5 w-5 text-[#0067D9]" />
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
