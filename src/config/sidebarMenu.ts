
import {
  Award,
  BarChart2,
  Calendar,
  FileText,
  Home,
  Settings,
  Users,
  Video,
  Search,
  Goal
} from "lucide-react";

export const menuItems = [
  { title: "Dashboard", icon: Home, path: "/" },
  { title: "Employees", icon: Users, path: "/employees" },
  { title: "Performance", icon: BarChart2, path: "/performance" },
  { title: "Reviews", icon: FileText, path: "/reviews" },
  { title: "Goals", icon: Award, path: "/goals" },
  { title: "Company Goals", icon: Goal, path: "/company-goals" },
  { title: "Schedule", icon: Calendar, path: "/schedule" },
  {
    title: "Past 1:1s",
    icon: Calendar,
    path: "/past-1-1s",
    submenu: [
      { 
        title: "Video", 
        icon: Video, 
        path: "/past-1-1s/video",
        className: "text-[#17202A]" 
      },
      { 
        title: "Transcript", 
        icon: Search, 
        path: "/past-1-1s/transcript",
        className: "text-[#17202A]" 
      }
    ]
  },
  { title: "Settings", icon: Settings, path: "/settings" }
];
