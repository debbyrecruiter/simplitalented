
import { teamMembers } from "@/data/dashboardData";
import { MetricCard } from "@/components/MetricCard";
import { UserRound } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  level: "manager" | "direct-report";
}

const TeamMemberCard = ({ name, role, level }: TeamMemberCardProps) => {
  return (
    <MetricCard
      title={name}
      value={role}
      description={level === "manager" ? "Team Manager" : "Direct Report"}
      icon={UserRound}
      className={`${level === "direct-report" ? "mt-8" : ""}`}
    />
  );
};

export const ExpandedTeamSection = () => {
  return (
    <div className="mt-4 space-y-4">
      <div className="flex justify-center">
        <TeamMemberCard
          name="Alex Morgan"
          role="Senior Developer"
          level="manager"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
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

