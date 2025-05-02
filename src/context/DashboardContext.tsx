import React, { createContext, useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

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
  
  // Helper function to update section
  const updateSection = (section: ExpandedSectionType) => {
    setExpandedSection(section);
    
    // Add to browser history
    if (section) {
      // Create a new URL with the section as a query parameter
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set('section', section);
      
      // Push the new state to browser history
      window.history.pushState(
        { section }, 
        "", 
        newUrl.toString()
      );
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
      const newUrl = new URL(window.location.href);
      newUrl.search = '';
      window.history.pushState({}, "", newUrl.toString());
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
