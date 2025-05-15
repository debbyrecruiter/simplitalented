
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
    <div className="w-full flex justify-center">
      <Card 
        className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden w-[110px] h-[110px] flex flex-col justify-center"
      >
        <CardHeader className="flex flex-col items-center justify-center text-center pb-0 pt-1">
          <Avatar className="h-8 w-8 mb-1">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-sm font-small text-[#9320E7] truncate px-1">
            {name}
          </CardTitle>
          {level === "manager" && (
            <div className="absolute right-2 h-5 w-5 rounded-full bg-[#FAFFCB]/50 flex items-center justify-center">
              <UserRound className="h-3 w-3 text-blue-600" />
            </div>
          )}
        </CardHeader>
        <CardContent className="p-1 flex-1 flex flex-col justify-center text-center">
          <div className="flex justify-center space-x-1 mb-1">
            <Button 
              size="sm" 
              className="bg-[#001BC4] hover:bg-[#001BC4]/80 text-white h-5 text-xs px-1"
            >
              Endorse
            </Button>
            <Button 
              size="sm" 
              className="bg-[#001BC4] hover:bg-[#001BC4]/80 text-white h-5 text-xs px-1"
            >
              Review
            </Button>
          </div>
          <div className="text-xs font-bold truncate">
            {role}
          </div>
          <p className="text-[10px] text-muted-foreground truncate">
            {level === "manager" ? "Manager" : "Direct Report"}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export const ExpandedTeamSection = () => {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center">
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
