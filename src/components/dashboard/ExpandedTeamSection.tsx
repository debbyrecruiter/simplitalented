
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
      className="shadow-lg relative cursor-pointer hover:scale-105 transition-all duration-300 w-[300px]"
      style={{
        ...gradientStyle,
        aspectRatio: '16/9'
      }}
    >
      <CardHeader className="flex flex-row items-start justify-between p-4">
        <div className="flex flex-col">
          <CardTitle className="text-white text-xl font-bold">
            {name}
          </CardTitle>
          <div className="text-white text-sm opacity-90">
            {role}
          </div>
          <div className="text-white text-xs opacity-75 mt-1">
            {level === "manager" ? "Team Manager" : "Direct Report"}
          </div>
        </div>
        <div className="bg-white rounded-full p-2 shadow-md">
          <Avatar className="h-8 w-8">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback className="bg-primary text-white font-bold text-sm">{initials}</AvatarFallback>
          </Avatar>
        </div>
      </CardHeader>
    </Card>
  );
};

export const ExpandedTeamSection = () => {
  return (
    <div className="p-4">
      {/* Brick pattern layout using flexbox */}
      <div className="flex flex-wrap gap-4">
        {/* First row */}
        <div className="flex flex-wrap gap-4 w-full">
          <TeamMemberCard
            name="Alex Morgan"
            role="Senior Developer"
            level="manager"
            avatarUrl={teamMembers[0].avatarUrl}
            initials={teamMembers[0].initials}
          />
          {teamMembers.slice(1, 3).map((member) => (
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

        {/* Second row - offset for brick pattern */}
        <div 
          className="flex flex-wrap gap-4 w-full"
          style={{ marginLeft: 'calc(33.333% + 0.5rem)' }}
        >
          {teamMembers.slice(3, 6).map((member) => (
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

        {/* Third row - normal alignment */}
        <div className="flex flex-wrap gap-4 w-full">
          {teamMembers.slice(6).map((member) => (
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
    </div>
  );
};
