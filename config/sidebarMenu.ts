
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
  Goal,
  Star,
  ListCheck,
  FileBarChart,
  DollarSign,
  Activity
} from "lucide-react";

export const menuItems = [
  { title: "Dashboard", icon: Home, path: "/" },
  { 
    title: "Me", 
    icon: Users, 
    path: "/me",
    submenu: [
      { 
        title: "My Skills", 
        icon: Star, 
        path: "/me/skills",
        className: "text-[#17202A]" 
      },
      {
        title: "My To Do",
        icon: ListCheck,
        path: "/me/todo",
        className: "text-[#17202A]"
      },
      {
        title: "My Learning",
        icon: Activity,
        path: "/me/learning",
        className: "text-[#17202A]"
      }
    ]
  },
  { title: "Employees", icon: Users, path: "/employees" },
  { title: "Performance", icon: BarChart2, path: "/performance" },
  { 
    title: "Reviews", 
    icon: FileText, 
    path: "/reviews"
  },
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
        title: "Transcripts", 
        icon: Search, 
        path: "/past-1-1s/transcript",
        className: "text-[#17202A]" 
      }
    ]
  },
  { 
    title: "Company Reports", 
    icon: FileBarChart, 
    path: "/reports",
    submenu: [
      { 
        title: "All Reports", 
        icon: FileBarChart, 
        path: "/reports",
        className: "text-[#17202A]" 
      },
      { 
        title: "Workforce Analytics", 
        icon: BarChart2, 
        path: "/reports/workforce-analytics",
        className: "text-[#17202A]" 
      },
      { 
        title: "Compensation Analysis", 
        icon: DollarSign, 
        path: "/reports/compensation-analysis",
        className: "text-[#17202A]" 
      }
    ]
  },
  { title: "Settings", icon: Settings, path: "/settings" }
];
