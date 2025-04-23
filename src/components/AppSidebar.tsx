
import React from 'react';
import {
  Award,
  BarChart2,
  Calendar,
  FileText,
  Home,
  Settings,
  Users,
  Video,
  Search
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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
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
  {
    title: "Past 1:1s",
    icon: Calendar,
    path: "/past-1-1s",
    submenu: [
      { title: "Video", icon: Video, path: "/past-1-1s/video" },
      { title: "Searchable Transcript", icon: Search, path: "/past-1-1s/transcript" }
    ]
  },
  { title: "Settings", icon: Settings, path: "/settings" }
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border">
      <div className="p-4 flex items-center gap-2">
        <h1 className="text-3xl font-bold font-comfortaa text-[#17202A]">SimpliTalented</h1>
        <SidebarTrigger className="ml-auto md:hidden" />
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[#17202A] font-medium">Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center gap-3 text-[#17202A]">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.submenu && (
                    <SidebarMenuSub>
                      {item.submenu.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <Link to={subItem.path} className="flex items-center gap-3 text-[#17202A]">
                              <subItem.icon className="h-4 w-4" />
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

