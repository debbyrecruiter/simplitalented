
import { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { BackButton } from "@/components/ui/back-button";
import { GoalsTeamFeed } from "@/components/goals/GoalsTeamFeed";
import { GoalTracker } from "@/components/GoalTracker";
import { ListCheck, Users } from "lucide-react";
import { teamMembers } from "@/data/dashboardData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TeamGoalsPage = () => {
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
    },
    {
      id: 4,
      title: "Customer Satisfaction Improvement",
      progress: 55,
      category: "User Experience",
      dueDate: "October 10"
    },
    {
      id: 5,
      title: "Team Knowledge Sharing Sessions",
      progress: 70,
      category: "Team Development",
      dueDate: "Ongoing"
    }
  ];

  // Sample individual goals for team members
  const memberGoals = {
    // Alex Wong (Manager)
    "1": [
      {
        id: 1,
        title: "Complete Leadership Training",
        progress: 75,
        category: "Professional Development",
        dueDate: "July 15"
      },
      {
        id: 2,
        title: "Team Mentorship Program",
        progress: 60,
        category: "Team Development",
        dueDate: "August 30"
      }
    ],
    // Jamie Chen
    "2": [
      {
        id: 1,
        title: "Learn React Advanced Patterns",
        progress: 40,
        category: "Technical Skills",
        dueDate: "September 10"
      },
      {
        id: 2,
        title: "API Documentation",
        progress: 85,
        category: "Documentation",
        dueDate: "July 30"
      }
    ],
    // Taylor Smith
    "3": [
      {
        id: 1,
        title: "Implement Design System",
        progress: 25,
        category: "Project Goals",
        dueDate: "October 5"
      },
      {
        id: 2,
        title: "UX Research Report",
        progress: 90,
        category: "Research",
        dueDate: "June 25"
      }
    ],
    // Morgan Lee
    "4": [
      {
        id: 1,
        title: "QA Automation Framework",
        progress: 50,
        category: "Technical Skills",
        dueDate: "August 10"
      },
      {
        id: 2,
        title: "Testing Documentation",
        progress: 70,
        category: "Documentation",
        dueDate: "July 15"
      }
    ]
  };

  // Filter direct reports (excluding the manager)
  const directReports = teamMembers.filter(member => member.id !== 1);

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader title="Team Goals" />
      <div className="flex-1 p-4 overflow-auto rounded-sm bg-[#DBE1F3]">
        <div className="mb-4">
          <BackButton />
        </div>
        
        <div className="max-w-7xl mx-auto">
          {/* Team Goals Section - at the top */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-6">
              <Users className="h-6 w-6 text-[#512888]" />
              <h2 className="text-3xl font-bold text-[#512888]">Team Goals</h2>
            </div>
            
            <Card className="border-[3px] border-[#840DD7] bg-white mb-8">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <ListCheck className="h-5 w-5 text-[#512888]" />
                  <CardTitle className="text-xl font-semibold text-[#512888]">Team Goals Progress</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <GoalTracker goals={teamGoals} className="bg-white border-none shadow-none" />
              </CardContent>
            </Card>
            
            {/* Team Goals Timeline */}
            <h3 className="text-2xl font-bold text-[#512888] mb-4">Team Goals Timeline</h3>
            <GoalsTeamFeed />
          </div>
          
          {/* Individual Team Member Goals Section - below team goals */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-[#512888] mb-8">Individual Goals</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {directReports.map((member) => (
                <Card key={member.id} className="border border-gray-200">
                  <CardHeader className="pb-2 flex flex-row items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={member.avatarUrl} alt={member.name} />
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg font-semibold">{member.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {memberGoals[member.id.toString()] ? (
                      <GoalTracker 
                        goals={memberGoals[member.id.toString()]} 
                        className="bg-white border-none shadow-none" 
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground py-2">No active goals</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamGoalsPage;
