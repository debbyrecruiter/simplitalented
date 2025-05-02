
import React, { useState, useEffect } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
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
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useNavigate, useLocation } from "react-router-dom";

type ExpandedSectionType = "me" | "past11s" | "team" | "direct-reports" | "goals" | "company-goals" | "my-skills" | "reviews" | "todo-list" | "reports" | null;

const Dashboard = () => {
  const [expandedSection, setExpandedSection] = useState<ExpandedSectionType>(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Helper function to update section and push state to history
  const updateSection = (section: ExpandedSectionType) => {
    setExpandedSection(section);
    
    // Only push to history if we're changing to a new section
    if (section) {
      window.history.pushState(
        { section, previousSection: expandedSection }, 
        "", 
        `${location.pathname}${section ? `?section=${section}` : ""}`
      );
    }
  };
  
  const handleMeCardClick = () => {
    updateSection("me");
  };
  
  const handleTeamCardClick = () => {
    updateSection("team");
  };
  
  const handleDirectReportsClick = () => {
    updateSection("direct-reports");
  };
  
  const handlePast11CardClick = () => {
    updateSection("past11s");
  };

  const handleGoalsCardClick = () => {
    updateSection("goals");
  };
  
  const handleCompanyGoalsClick = () => {
    updateSection("company-goals");
  };
  
  const handleMySkillsClick = () => {
    updateSection("my-skills");
  };
  
  const handleReviewsClick = () => {
    updateSection("reviews");
  };
  
  const handleToDoListClick = () => {
    updateSection("todo-list");
  };
  
  const handleReportsClick = () => {
    updateSection("reports");
  };
  
  const handleBackClick = () => {
    // If we're in past11s, goals, my-skills, or todo-list submenu, go back to "me" section
    if (expandedSection === "past11s" || expandedSection === "goals" || 
        expandedSection === "my-skills" || expandedSection === "todo-list") {
      updateSection("me");
    } else {
      // Otherwise, go back to the main dashboard
      setExpandedSection(null);
      window.history.back();
    }
  };

  // Listen for popstate events (when browser back button is clicked)
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.section) {
        setExpandedSection(event.state.section);
      } else {
        setExpandedSection(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Check URL params on initial load to set the correct section
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const sectionParam = searchParams.get('section') as ExpandedSectionType | null;
    
    if (sectionParam) {
      setExpandedSection(sectionParam);
    }
  }, [location]);

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
