
import React, { createContext, useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Define the expanded section types
export type ExpandedSectionType = 
  | "me" 
  | "past11s" 
  | "past11s-video"
  | "past11s-transcript"
  | "team" 
  | "direct-reports" 
  | "goals" 
  | "company-goals" 
  | "my-skills" 
  | "reviews" 
  | "todo-list" 
  | "reports" 
  | "exit-interviews"
  | null;

interface DashboardContextType {
  expandedSection: ExpandedSectionType;
  updateSection: (section: ExpandedSectionType) => void;
  handleBackClick: () => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};

export const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
  // Initialize with null (no expanded section)
  const [expandedSection, setExpandedSection] = useState<ExpandedSectionType>(null);
  const location = useLocation();
  
  // Simple update function that just updates state
  const updateSection = (section: ExpandedSectionType) => {
    console.log("Setting expanded section to:", section);
    setExpandedSection(section);
  };
  
  const handleBackClick = () => {
    console.log("Back button clicked, current section:", expandedSection);
    
    // If we're in past11s, goals, my-skills, or todo-list submenu, go back to "me" section
    if (expandedSection === "past11s" || expandedSection === "goals" || 
        expandedSection === "my-skills" || expandedSection === "todo-list") {
      setExpandedSection("me");
    }
    // If we're in past11s subsections, go back to past11s
    else if (expandedSection === "past11s-video" || expandedSection === "past11s-transcript") {
      setExpandedSection("past11s");
    } else {
      // Otherwise, go back to the main dashboard
      setExpandedSection(null);
    }
  };

  // Check URL params on mount only
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const sectionParam = searchParams.get('section') as ExpandedSectionType | null;
    
    if (sectionParam) {
      setExpandedSection(sectionParam);
    }
  }, []);
  
  return (
    <DashboardContext.Provider 
      value={{ 
        expandedSection, 
        updateSection, 
        handleBackClick 
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
