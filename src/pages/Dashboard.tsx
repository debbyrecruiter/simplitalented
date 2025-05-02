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
import { ExpandedToDoSection } from "@/components/dashboard/ExpandedToDoListSection";

type ExpandedSectionType = "me" | "past11s" | "team" | "direct-reports" | "goals" | "company-goals" | "my-skills" | "reviews" | "todo-list" | "reports" | null;

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
  
  const handleReportsClick = () => {
    setExpandedSection(expandedSection === "reports" ? null : "reports");
  };
  
  const handleBackClick = () => {
    // If we're in past11s, goals, my-skills, or todo-list submenu, go back to "me" section
    if (expandedSection === "past11s" || expandedSection === "goals" || 
        expandedSection === "my-skills" || expandedSection === "todo-list") {
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
        
        {expandedSection === "reviews" && <ExpandedReviewsSection />}
        
        {expandedSection === "todo-list" && <ExpandedToDoSection />}
        
        {expandedSection === "reports" && (
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Company Reports</h2>
            <p className="text-muted-foreground mb-8">
              This section is only visible to the People Team and contains company-wide HR analytics and reports.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-4 border shadow-sm">
                <CardHeader>
                  <CardTitle>Workforce Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>View detailed reports about employee demographics, retention rates, and organizational structure.</p>
                </CardContent>
              </Card>
              <Card className="p-4 border shadow-sm">
                <CardHeader>
                  <CardTitle>Compensation Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Review salary benchmarks, equity distribution, and compensation trends across departments.</p>
                </CardContent>
              </Card>
              <Card className="p-4 border shadow-sm">
                <CardHeader>
                  <CardTitle>Diversity & Inclusion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Monitor diversity metrics and inclusion initiatives throughout the organization.</p>
                </CardContent>
              </Card>
              <Card className="p-4 border shadow-sm">
                <CardHeader>
                  <CardTitle>Performance Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Analyze performance review data and identify patterns across teams and departments.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
