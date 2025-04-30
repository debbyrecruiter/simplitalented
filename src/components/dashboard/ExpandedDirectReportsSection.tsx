
import { teamMembers } from "@/data/dashboardData";
import { MetricCard } from "@/components/MetricCard";
import { UserRound } from "lucide-react";

export const ExpandedDirectReportsSection = () => {
  // Filter only direct reports from team members (excluding the first member who is the manager)
  const directReports = teamMembers.filter(member => member.id !== 1);

  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {directReports.map((member) => (
          <MetricCard
            key={member.id}
            title={member.name}
            value={member.role}
            description={`Status: ${member.status}`}
            icon={UserRound}
          />
        ))}
      </div>
    </div>
  );
};
