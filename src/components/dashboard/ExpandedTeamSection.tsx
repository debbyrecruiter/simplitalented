
import { teamMembers } from "@/data/dashboardData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserRound } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  level: "manager" | "direct-report";
}

const TeamMemberCard = ({ name, role, level }: TeamMemberCardProps) => {
  return (
    <Card 
      className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center"
    >
      <CardHeader className="flex flex-col items-center justify-center text-center pb-0 pt-10">
        <CardTitle className="text-6xl font-small text-[#9320E7] truncate">
          {name}
        </CardTitle>
        {level === "manager" && (
          <div className="absolute right-6 h-12 w-12 rounded-full bg-[#FAFFCB]/50 flex items-center justify-center">
            <UserRound className="h-6 w-6 text-blue-600" />
          </div>
        )}
      </CardHeader>
      <CardContent className="p-6 flex-1 flex flex-col justify-center text-center">
        <div className="text-3xl font-bold truncate">
          {role}
        </div>
        <p className="text-sm text-muted-foreground truncate">
          {level === "manager" ? "Team Manager" : "Direct Report"}
        </p>
      </CardContent>
    </Card>
  );
};

export const ExpandedTeamSection = () => {
  return (
    <div className="mt-4 space-y-8">
      <div className="flex justify-center">
        <TeamMemberCard
          name="Alex Morgan"
          role="Senior Developer"
          level="manager"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {teamMembers.slice(1).map((member) => (
          <TeamMemberCard
            key={member.id}
            name={member.name}
            role={member.role}
            level="direct-report"
          />
        ))}
      </div>
    </div>
  );
};
