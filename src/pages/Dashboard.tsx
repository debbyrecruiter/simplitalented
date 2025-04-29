import { DashboardHeader } from "@/components/DashboardHeader";
import { useState } from "react";
import { MainMetricsGrid } from "@/components/dashboard/MainMetricsGrid";
import { ExpandedMeSection } from "@/components/dashboard/ExpandedMeSection";
import { Past11sSubmenu } from "@/components/dashboard/Past11sSubmenu";
import { ExpandedTeamSection } from "@/components/dashboard/ExpandedTeamSection";
import { ExpandedDirectReportsSection } from "@/components/dashboard/ExpandedDirectReportsSection";
import { BackButton } from "@/components/ui/back-button";

type ExpandedSectionType = "me" | "past11s" | "team" | "direct-reports" | null;

const Dashboard = () => {
  const [expandedSection, setExpandedSection] = useState<ExpandedSectionType>(null);
  
  const handleMeCardClick = () => {
    setExpandedSection(expandedSection === "me" ? null : "me");
  };
  
  const handleTeamCardClick = () => {
    setExpandedSection(expandedSection === "team" ? null : "team");
  };
  
  const handleDirectReportsClick = () => {
    setExpandedSection(expandedSection === "direct-reports" ? null : "direct-reports");
  };
  
  const handlePast11CardClick = () => {
    setExpandedSection(expandedSection === "past11s" ? null : "past11s");
  };
  
  const handleBackClick = () => {
    // If we're in past11s, go back to "me" section
    if (expandedSection === "past11s") {
      setExpandedSection("me");
    } else {
      // Otherwise, go back to the main dashboard
      setExpandedSection(null);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader title="Dashboard" />
      <div className="flex-1 p-4 overflow-auto rounded-sm">
        {expandedSection && (
          <div className="mb-4">
            <BackButton onClick={handleBackClick} />
          </div>
        )}
        
        {!expandedSection && (
          <MainMetricsGrid 
            onMeCardClick={handleMeCardClick} 
            onTeamCardClick={handleTeamCardClick} 
            onDirectReportsClick={handleDirectReportsClick} 
          />
        )}

        {expandedSection === "me" && <ExpandedMeSection onPast11CardClick={handlePast11CardClick} />}

        {expandedSection === "team" && <ExpandedTeamSection />}

        {expandedSection === "direct-reports" && <ExpandedDirectReportsSection />}

        {expandedSection === "past11s" && <Past11sSubmenu />}
      </div>
    </div>
  );
};

export default Dashboard;
