
import { DashboardHeader } from "@/components/DashboardHeader";
import { useState } from "react";
import { MainMetricsGrid } from "@/components/dashboard/MainMetricsGrid";
import { ExpandedMeSection } from "@/components/dashboard/ExpandedMeSection";
import { Past11sSubmenu } from "@/components/dashboard/Past11sSubmenu";

type ExpandedSectionType = "me" | "past11s" | null;

const Dashboard = () => {
  const [expandedSection, setExpandedSection] = useState<ExpandedSectionType>(null);

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
        <MainMetricsGrid onMeCardClick={handleMeCardClick} />

        {expandedSection === "me" && (
          <ExpandedMeSection onPast11CardClick={handlePast11CardClick} />
        )}

        {expandedSection === "past11s" && <Past11sSubmenu />}
      </div>
    </div>
  );
};

export default Dashboard;
