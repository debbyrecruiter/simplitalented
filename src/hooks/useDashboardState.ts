
import { useState } from "react";

export type ExpandedSection = "me" | "past11s" | null;

export const useDashboardState = () => {
  const [expandedSection, setExpandedSection] = useState<ExpandedSection>(null);

  const handleMeCardClick = () => {
    setExpandedSection(expandedSection === "me" ? null : "me");
  };

  const handlePast11CardClick = () => {
    setExpandedSection(expandedSection === "past11s" ? null : "past11s");
  };

  return {
    expandedSection,
    handleMeCardClick,
    handlePast11CardClick,
  };
};
