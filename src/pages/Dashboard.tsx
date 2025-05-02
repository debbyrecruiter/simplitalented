
import { DashboardHeader } from "@/components/DashboardHeader";
import { useState } from "react";
import { MainMetricsGrid } from "@/components/dashboard/MainMetricsGrid";
import { ExpandedMeSection } from "@/components/dashboard/ExpandedMeSection";
import { Past11sSubmenu } from "@/components/dashboard/Past11sSubmenu";
import { ExpandedTeamSection } from "@/components/dashboard/ExpandedTeamSection";
import { ExpandedDirectReportsSection } from "@/components/dashboard/ExpandedDirectReportsSection";
import { BackButton } from "@/components/ui/back-button";
import { GoalsSubmenu } from "@/components/dashboard/GoalsSubmenu";
import { ExpandedCompanyGoalsSection } from "@/components/dashboard/ExpandedCompanyGoalsSection";
import { MySkillsSubmenu } from "@/components/dashboard/MySkillsSubmenu";
import { ExpandedReviewsSection } from "@/components/dashboard/ExpandedReviewsSection";
import { ExpandedToDoListSection } from "@/components/dashboard/ExpandedToDoListSection";

type ExpandedSectionType = "me" | "past11s" | "team" | "direct-reports" | "goals" | "company-goals" | "my-skills" | "reviews" | "todo-list" | null;

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

  const handleGoalsCardClick = () => {
    setExpandedSection(expandedSection === "goals" ? null : "goals");
  };
  
  const handleCompanyGoalsClick = () => {
    setExpandedSection(expandedSection === "company-goals" ? null : "company-goals");
  };
  
  const handleMySkillsClick = () => {
    setExpandedSection(expandedSection === "my-skills" ? null : "my-skills");
  };
  
  const handleReviewsClick = () => {
    setExpandedSection(expandedSection === "reviews" ? null : "reviews");
  };
  
  const handleToDoListClick = () => {
    setExpandedSection(expandedSection === "todo-list" ? null : "todo-list");
  };
  
  const handleBackClick = () => {
    // If we're in past11s, goals, or skills submenu, go back to "me" section
    if (expandedSection === "past11s" || expandedSection === "goals" || expandedSection === "my-skills") {
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
            onGoalsCardClick={handleGoalsCardClick}
            onCompanyGoalsClick={handleCompanyGoalsClick}
            onReviewsClick={handleReviewsClick}
            onToDoListClick={handleToDoListClick}
          />
        )}

        {expandedSection === "me" && (
          <ExpandedMeSection 
            onPast11CardClick={handlePast11CardClick} 
            onGoalsCardClick={handleGoalsCardClick}
            onMySkillsClick={handleMySkillsClick}
          />
        )}

        {expandedSection === "team" && <ExpandedTeamSection />}

        {expandedSection === "direct-reports" && <ExpandedDirectReportsSection />}

        {expandedSection === "past11s" && <Past11sSubmenu />}
        
        {expandedSection === "goals" && <GoalsSubmenu />}
        
        {expandedSection === "company-goals" && <ExpandedCompanyGoalsSection />}
        
        {expandedSection === "my-skills" && <MySkillsSubmenu />}
        
        {expandedSection === "reviews" && <ExpandedReviewsSection />}
        
        {expandedSection === "todo-list" && <ExpandedToDoListSection />}
      </div>
    </div>
  );
};

export default Dashboard;
