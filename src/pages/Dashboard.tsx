
import { DashboardHeader } from "@/components/DashboardHeader";
import { MetricCard } from "@/components/MetricCard";
import { GoalTracker } from "@/components/GoalTracker";
import { TeamMembersCard } from "@/components/TeamMembersCard";
import { UpcomingReviewsCard } from "@/components/UpcomingReviewsCard";
import { PerformanceChart } from "@/components/PerformanceChart";
import { Award, Calendar, Users, BarChart2 } from "lucide-react";

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
  { 
    id: 1, 
    title: "Increase team productivity", 
    progress: 75, 
    category: "Team Performance", 
    dueDate: "June 30" 
  },
  { 
    id: 2, 
    title: "Complete leadership training", 
    progress: 40, 
    category: "Professional Development", 
    dueDate: "July 15" 
  },
  { 
    id: 3, 
    title: "Implement new review process", 
    progress: 25, 
    category: "Process Improvement", 
    dueDate: "August 1" 
  },
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
  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader title="Dashboard" />
      <div className="flex-1 p-6 overflow-auto">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <MetricCard
            title="Total Employees"
            value="124"
            description="Across 6 departments"
            icon={Users}
            trend="up"
            trendValue="+4 this month"
          />
          <MetricCard
            title="Open Positions"
            value="8"
            description="3 in final interview stage"
            icon={Users}
            trend="neutral"
            trendValue="2 filled this month"
          />
          <MetricCard
            title="Upcoming Reviews"
            value="12"
            description="Due in the next 14 days"
            icon={Calendar}
            trend="up"
            trendValue="+3 from last period"
          />
          <MetricCard
            title="Team Performance"
            value="82%"
            description="Overall rating"
            icon={BarChart2}
            trend="up"
            trendValue="+5% since last quarter"
          />
        </div>
        
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 mb-6">
          <PerformanceChart 
            data={performanceData} 
            className="lg:col-span-2"
          />
          <GoalTracker goals={goals} />
        </div>
        
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
          <TeamMembersCard members={teamMembers} className="lg:col-span-2" />
          <UpcomingReviewsCard reviews={upcomingReviews} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
