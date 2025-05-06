
import { teamMembers } from "@/data/dashboardData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserRound } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface TeamMemberCardProps {
  name: string;
  role: string;
  level: "manager" | "direct-report";
  avatarUrl?: string;
  initials: string;
}

const TeamMemberCard = ({ name, role, level, avatarUrl, initials }: TeamMemberCardProps) => {
  return (
    <Card 
      className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center flex-shrink-0"
      style={{ width: "380.5px", height: "437.5px" }}
    >
      <CardHeader className="flex flex-col items-center justify-center text-center pb-0 pt-6">
        <Avatar className="h-20 w-20 mb-2">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-4xl font-small text-[#9320E7] truncate">
          {name}
        </CardTitle>
        {level === "manager" && (
          <div className="absolute right-6 h-12 w-12 rounded-full bg-[#FAFFCB]/50 flex items-center justify-center">
            <UserRound className="h-6 w-6 text-blue-600" />
          </div>
        )}
      </CardHeader>
      <CardContent className="p-6 flex-1 flex flex-col justify-center text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <Button 
            size="sm" 
            className="bg-[#001BC4] hover:bg-[#001BC4]/80 text-white"
          >
            Endorse
          </Button>
          <Button 
            size="sm" 
            className="bg-[#001BC4] hover:bg-[#001BC4]/80 text-white"
          >
            Review
          </Button>
        </div>
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
    <div className="mt-4">
      <div className="flex flex-nowrap overflow-x-auto gap-6 pb-4 justify-center">
        <TeamMemberCard
          name="Alex Morgan"
          role="Senior Developer"
          level="manager"
          avatarUrl={teamMembers[0].avatarUrl}
          initials={teamMembers[0].initials}
        />
        {teamMembers.slice(1).map((member) => (
          <TeamMemberCard
            key={member.id}
            name={member.name}
            role={member.role}
            level="direct-report"
            avatarUrl={member.avatarUrl}
            initials={member.initials}
          />
        ))}
      </div>
    </div>
  );
};
