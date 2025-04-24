
import { DashboardHeader } from "@/components/DashboardHeader";
import { useState } from "react";
import { HeaderMetrics } from "@/components/dashboard/HeaderMetrics";
import { PersonalMetrics } from "@/components/dashboard/PersonalMetrics";
import { Past11Metrics } from "@/components/dashboard/Past11Metrics";

const Dashboard = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const handleMeCardClick = () => {
    setExpandedSection(expandedSection === "me" ? null : "me");
  };

  const handlePast11CardClick = () => {
    setExpandedSection(expandedSection === "past11s" ? null : "past11s");
  };

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
