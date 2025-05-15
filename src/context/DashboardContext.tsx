
import React, { createContext, useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Define the expanded section types
export type ExpandedSectionType = 
  | "me" 
  | "past11s" 
  | "team" 
  | "direct-reports" 
  | "goals" 
  | "company-goals" 
  | "my-skills" 
  | "reviews" 
  | "todo-list" 
  | "reports" 
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
  const [expandedSection, setExpandedSection] = useState<ExpandedSectionType>(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Helper function to update section
  const updateSection = (section: ExpandedSectionType) => {
    // First update the state
    setExpandedSection(section);
    
    // Then update URL without causing navigation
    if (section) {
      window.history.replaceState(null, "", `/?section=${section}`);
    }
  };
  
  const handleBackClick = () => {
    // If we're in past11s, goals, my-skills, or todo-list submenu, go back to "me" section
    if (expandedSection === "past11s" || expandedSection === "goals" || 
        expandedSection === "my-skills" || expandedSection === "todo-list") {
      updateSection("me");
    } else {
      // Otherwise, go back to the main dashboard
      setExpandedSection(null);
      // Remove query parameters from URL
      window.history.replaceState(null, "", "/");
    }
  };

  // Check URL params on initial load and when location changes to set the correct section
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const sectionParam = searchParams.get('section') as ExpandedSectionType | null;
    
    if (sectionParam) {
      setExpandedSection(sectionParam);
    }
  }, [location]);
  
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
