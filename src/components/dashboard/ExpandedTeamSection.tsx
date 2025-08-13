
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
      className="shadow-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-all duration-300 aspect-square flex flex-col justify-center flex-shrink-0"
      style={gradientStyle}
    >
      <CardHeader className="flex flex-col items-center justify-center text-center pb-0 pt-6">
        <Avatar className="h-20 w-20 mb-2 shadow-md">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback className="bg-white text-primary font-bold">{initials}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl font-bold text-white truncate">
          {name}
        </CardTitle>
        {level === "manager" && (
          <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
            <UserRound className="h-5 w-5 text-blue-600" />
          </div>
        )}
      </CardHeader>
      <CardContent className="p-6 flex-1 flex flex-col justify-center text-center">
        <div className="flex justify-center space-x-2 mb-4">
          <Button 
            size="sm" 
            className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
          >
            Endorse
          </Button>
          <Button 
            size="sm" 
            className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
          >
            Review
          </Button>
        </div>
        <div className="text-lg font-bold text-white/90 truncate">
          {role}
        </div>
        <p className="text-sm text-white/70 truncate">
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
