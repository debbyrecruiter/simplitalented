
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
  const gradientStyle = level === "manager" 
    ? { background: 'linear-gradient(135deg, var(--gradient-blue-start), var(--gradient-blue-end))' }
    : { background: 'linear-gradient(135deg, var(--gradient-green-start), var(--gradient-green-end))' };

  return (
    <Card 
      className="shadow-lg relative cursor-pointer hover:scale-105 transition-all duration-300 aspect-square flex flex-col flex-shrink-0"
      style={gradientStyle}
    >
      <CardHeader className="flex flex-col items-center text-center pt-6 pb-3 flex-shrink-0">
        <Avatar className="h-16 w-16 mb-3 shadow-md">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback className="bg-white text-primary font-bold">{initials}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-lg font-bold text-white truncate">
          {name}
        </CardTitle>
        {level === "manager" && (
          <div className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-md">
            <UserRound className="h-4 w-4 text-blue-600" />
          </div>
        )}
      </CardHeader>
      <CardContent className="px-4 pb-5 flex-1 flex flex-col justify-end text-center">
        <div className="flex justify-center space-x-2 mb-3">
          <Button 
            size="sm" 
            className="bg-white/20 hover:bg-white/30 text-white border border-white/30 text-xs px-3"
          >
            Endorse
          </Button>
          <Button 
            size="sm" 
            className="bg-white/20 hover:bg-white/30 text-white border border-white/30 text-xs px-3"
          >
            Review
          </Button>
        </div>
        <div className="text-base font-bold text-white/90 truncate mb-1">
          {role}
        </div>
        <p className="text-xs text-white/70 truncate">
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
