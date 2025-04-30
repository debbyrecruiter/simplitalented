
import { teamMembers } from "@/data/dashboardData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserRound } from "lucide-react";

export const ExpandedDirectReportsSection = () => {
  // Filter only direct reports from team members (excluding the first member who is the manager)
  const directReports = teamMembers.filter(member => member.id !== 1);

  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {directReports.map((member) => (
          <Card 
            key={member.id}
            className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center"
          >
            <CardHeader className="flex flex-col items-center justify-center text-center pb-0 pt-10">
              <CardTitle className="text-6xl font-small text-[#9320E7] truncate">
                {member.name}
              </CardTitle>
              <div className="absolute right-6 h-12 w-12 rounded-full bg-[#FAFFCB]/50 flex items-center justify-center">
                <UserRound className="h-6 w-6 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-1 flex flex-col justify-center text-center">
              <div className="text-3xl font-bold truncate">
                {member.role}
              </div>
              <p className="text-sm text-muted-foreground truncate">
                Status: {member.status}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
