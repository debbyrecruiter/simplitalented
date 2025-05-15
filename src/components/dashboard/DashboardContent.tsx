
import React from "react";
import { BackButton } from "@/components/ui/back-button";
import { MainMetricsGrid } from "@/components/dashboard/MainMetricsGrid";
import { ExpandedMeSection } from "@/components/dashboard/ExpandedMeSection";
import { Past11sSubmenu } from "@/components/dashboard/Past11sSubmenu";
import { ExpandedTeamSection } from "@/components/dashboard/ExpandedTeamSection";
import { ExpandedDirectReportsSection } from "@/components/dashboard/ExpandedDirectReportsSection";
import { GoalsSubmenu } from "@/components/dashboard/GoalsSubmenu";
import { ExpandedCompanyGoalsSection } from "@/components/dashboard/ExpandedCompanyGoalsSection";
import { MySkillsSubmenu } from "@/components/dashboard/MySkillsSubmenu";
import { ExpandedToDoSection } from "@/components/dashboard/ExpandedToDoListSection";
import { useDashboard, ExpandedSectionType } from "@/context/DashboardContext";
import { ReportsSection } from "@/components/dashboard/ReportsSection";

export const DashboardContent: React.FC = () => {
  const { expandedSection, updateSection, handleBackClick } = useDashboard();
  
  const handleMeCardClick = () => updateSection("me");
  const handlePast11CardClick = () => updateSection("past11s");
  const handleTeamCardClick = () => updateSection("team");
  const handleDirectReportsClick = () => updateSection("direct-reports");
  const handleGoalsCardClick = () => updateSection("goals");
  const handleCompanyGoalsClick = () => updateSection("company-goals");
  const handleMySkillsClick = () => updateSection("my-skills");
  const handleToDoListClick = () => updateSection("todo-list");
  const handleReportsClick = () => updateSection("reports");

  return (
    <div className="flex-1 px-6 py-4 overflow-auto rounded-sm max-w-[1400px] mx-auto w-full">
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
          onGoalsCardClick={handleGoalsCardClick}
          onCompanyGoalsClick={handleCompanyGoalsClick}
          onToDoListClick={handleToDoListClick}
          onReportsClick={handleReportsClick}
        />
      )}

      {expandedSection === "me" && (
        <ExpandedMeSection 
          onPast11CardClick={handlePast11CardClick} 
          onGoalsCardClick={handleGoalsCardClick}
          onMySkillsClick={handleMySkillsClick}
          onToDoListClick={handleToDoListClick}
        />
      )}

      {expandedSection === "team" && <ExpandedTeamSection />}

      {expandedSection === "direct-reports" && <ExpandedDirectReportsSection />}

      {expandedSection === "past11s" && <Past11sSubmenu />}
      
      {expandedSection === "goals" && <GoalsSubmenu />}
      
      {expandedSection === "company-goals" && <ExpandedCompanyGoalsSection />}
      
      {expandedSection === "my-skills" && <MySkillsSubmenu />}
      
      {expandedSection === "todo-list" && <ExpandedToDoSection />}
      
      {expandedSection === "reports" && <ReportsSection />}
    </div>
  );
};
