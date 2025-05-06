
import { teamMembers } from "@/data/dashboardData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserRound, ListCheck } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { GoalTracker } from "@/components/GoalTracker";

export const ExpandedDirectReportsSection = () => {
  // Filter only direct reports from team members (excluding the first member who is the manager)
  const directReports = teamMembers.filter(member => member.id !== 1);
  
  // Sample team goals data for the tracker
  const teamGoals = [
    {
      id: 1,
      title: "Implement New Design System",
      progress: 85,
      category: "Team Project",
      dueDate: "July 20"
    },
    {
      id: 2,
      title: "Reduce Bug Backlog by 50%",
      progress: 65,
      category: "Quality Assurance",
      dueDate: "August 15"
    },
    {
      id: 3,
      title: "API Integration Strategy",
      progress: 30,
      category: "Architecture",
      dueDate: "September 5"
    }
  ];
  
  // Sample individual goals for team members
  const memberGoals = {
    2: [ // Jamie Chen
      {
        id: 1,
        title: "Frontend Component Library",
        progress: 70,
        category: "Development",
        dueDate: "July 15"
      },
      {
        id: 2,
        title: "A11y Improvements",
        progress: 45,
        category: "User Experience",
        dueDate: "August 10"
      }
    ],
    3: [ // Alex Morgan
      {
        id: 1,
        title: "Backend API Refactoring",
        progress: 55,
        category: "Development",
        dueDate: "July 30"
      },
      {
        id: 2,
        title: "Database Performance",
        progress: 80,
        category: "Infrastructure",
        dueDate: "June 25"
      }
    ],
    4: [ // Taylor Smith
      {
        id: 1,
        title: "QA Test Suite",
        progress: 90,
        category: "Testing",
        dueDate: "July 5"
      },
      {
        id: 2,
        title: "CI/CD Pipeline",
        progress: 60,
        category: "DevOps",
        dueDate: "August 20"
      }
    ]
  };

  return (
    <div className="mt-4 relative">
      {/* Watermark - made more visible */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <p className="text-7xl font-bold text-purple-500/40 transform -rotate-12 select-none">
          Manager View Only
        </p>
      </div>
      
      {/* Team Goals Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#512888] mb-4">Team Goals</h2>
        <div className="bg-white p-6 rounded-lg border-[3px] border-[#840DD7] mb-4">
          <div className="flex items-center gap-2 mb-3">
            <ListCheck className="h-5 w-5 text-[#512888]" />
            <h3 className="text-xl font-semibold text-[#512888]">Active Team Goals</h3>
          </div>
          <GoalTracker goals={teamGoals} className="bg-white border-none shadow-none" />
        </div>
      </div>
      
      {/* Individual Goals Section */}
      <h2 className="text-3xl font-bold text-[#512888] mb-4">Individual Team Member Goals</h2>
      
      <div className="space-y-8">
        {directReports.map((member) => (
          <div key={member.id} className="bg-white rounded-lg border-[3px] border-[#840DD7] p-6">
            <div className="flex items-start gap-4 mb-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={member.avatarUrl} alt={member.name} />
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold text-[#512888]">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
                <p className="text-sm">Status: <span className={`font-medium ${member.status === "active" ? "text-green-600" : member.status === "review" ? "text-amber-600" : "text-blue-600"}`}>{member.status}</span></p>
              </div>
            </div>
            
            <div className="pl-4 border-l-2 border-[#840DD7]">
              <h4 className="text-lg font-medium text-[#512888] mb-2">Goals Progress</h4>
              {memberGoals[member.id] && (
                <GoalTracker 
                  goals={memberGoals[member.id]} 
                  className="bg-white border-none shadow-none" 
                />
              )}
              {!memberGoals[member.id] && (
                <p className="text-muted-foreground italic">No active goals</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
