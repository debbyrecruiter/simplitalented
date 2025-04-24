
import { DashboardHeader } from "@/components/DashboardHeader";
import { HeaderMetrics } from "@/components/dashboard/HeaderMetrics";
import { PersonalMetrics } from "@/components/dashboard/PersonalMetrics";
import { Past11Metrics } from "@/components/dashboard/Past11Metrics";
import { useDashboardState } from "@/hooks/useDashboardState";

const Dashboard = () => {
  const { expandedSection, handleMeCardClick, handlePast11CardClick } = useDashboardState();

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader title="Dashboard" />
      <div className="flex-1 p-4 overflow-auto">
        <HeaderMetrics />
        {expandedSection === "me" && (
          <PersonalMetrics onPast11Click={handlePast11CardClick} />
        )}
        {expandedSection === "past11s" && <Past11Metrics />}
      </div>
    </div>
  );
};

export default Dashboard;
