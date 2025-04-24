import { DashboardHeader } from "@/components/DashboardHeader";
import { MetricCard } from "@/components/MetricCard";
import { Calendar, UserRound, UsersRound } from "lucide-react";

// Sample data
const performanceData = [
  { month: 'Jan', performance: 65, average: 60 },
  { month: 'Feb', performance: 68, average: 61 },
  { month: 'Mar', performance: 75, average: 62 },
  { month: 'Apr', performance: 73, average: 63 },
  { month: 'May', performance: 70, average: 64 },
  { month: 'Jun', performance: 78, average: 65 },
  { month: 'Jul', performance: 82, average: 66 },
];

const goals = [
  // Goals removed as per user request
];

const teamMembers = [
  { 
    id: 1, 
    name: "Alex Morgan", 
    role: "Product Manager", 
    avatarUrl: "https://i.pravatar.cc/300?u=alex@example.com", 
    initials: "AM", 
    status: "active" as const
  },
  { 
    id: 2, 
    name: "Jamie Chen", 
    role: "UI/UX Designer", 
    avatarUrl: "https://i.pravatar.cc/300?u=jamie@example.com", 
    initials: "JC", 
    status: "review" as const
  },
  { 
    id: 3, 
    name: "Taylor Smith", 
    role: "Developer", 
    avatarUrl: "https://i.pravatar.cc/300?u=taylor@example.com", 
    initials: "TS", 
    status: "new" as const
  },
];

const upcomingReviews = [
  { 
    id: 1, 
    reviewee: {
      name: "Jamie Chen", 
      avatarUrl: "https://i.pravatar.cc/300?u=jamie@example.com", 
      initials: "JC"
    }, 
    type: "Quarterly Review", 
    date: "May 12", 
    time: "2:00 PM" 
  },
  { 
    id: 2, 
    reviewee: {
      name: "Ryan Johnson", 
      avatarUrl: "https://i.pravatar.cc/300?u=ryan@example.com", 
      initials: "RJ"
    }, 
    type: "Performance Evaluation", 
    date: "May 15", 
    time: "10:30 AM" 
  },
];

const Dashboard = () => {
  const handleMeCardClick = () => {
    window.open('/profile', '_blank');
  };

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader title="Dashboard" />
      <div className="flex-1 p-4 overflow-auto">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-4">
          <MetricCard
            title="Me"
            value="Senior Developer"
            description="5 years experience"
            icon={UserRound}
            trend="up"
            trendValue="Last promoted 6 months ago"
            onClick={handleMeCardClick}
          />
          <MetricCard
            title="My Team"
            value="8 Members"
            description="Frontend Development"
            icon={UsersRound}
            trend="up"
            trendValue="+2 this quarter"
          />
          <MetricCard
            title="My Direct Reports"
            value="5 Members"
            description="Across 2 teams"
            icon={UsersRound}
            trend="up"
            trendValue="+1 this month"
          />
          <MetricCard
            title="Upcoming Reviews"
            value="12"
            description="Due in the next 14 days"
            icon={Calendar}
            trend="up"
            trendValue="+3 from last period"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
