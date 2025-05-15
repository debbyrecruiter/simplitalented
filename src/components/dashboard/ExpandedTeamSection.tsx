
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
    <div className="w-[125px] h-[125px]">
      <Card 
        className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden w-full h-full flex flex-col justify-center"
      >
        <CardHeader className="flex flex-col items-center justify-center text-center pb-0 pt-6">
          <Avatar className="h-24 w-24 mb-3">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-4xl font-small text-[#9320E7] truncate px-4">
            {name}
          </CardTitle>
          {level === "manager" && (
            <div className="absolute right-8 h-14 w-14 rounded-full bg-[#FAFFCB]/50 flex items-center justify-center">
              <UserRound className="h-7 w-7 text-blue-600" />
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
    </div>
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
