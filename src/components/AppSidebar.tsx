
import {
  Award,
  BarChart2,
  Calendar,
  FileText,
  Home,
  Settings,
  Users
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

const menuItems = [
  { title: "Dashboard", icon: Home, path: "/" },
  { title: "Employees", icon: Users, path: "/employees" },
  { title: "Performance", icon: BarChart2, path: "/performance" },
  { title: "Reviews", icon: FileText, path: "/reviews" },
  { title: "Goals", icon: Award, path: "/goals" },
  { title: "Schedule", icon: Calendar, path: "/schedule" },
  { title: "Settings", icon: Settings, path: "/settings" }
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border">
      <div className="p-4 flex items-center gap-2">
        <div className="h-8 w-8 rounded-md bg-brand-teal flex items-center justify-center">
          <span className="text-white font-bold text-lg">T</span>
        </div>
        <h1 className="text-lg font-bold">TalentSpark</h1>
        <SidebarTrigger className="ml-auto md:hidden" />
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
