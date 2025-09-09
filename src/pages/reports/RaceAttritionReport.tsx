import React from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { BackButton } from "@/components/ui/back-button";
import DemographicAttritionCard from "@/components/workforce-retention/DemographicAttritionCard";

const RaceAttritionReport = () => {
  const handleBackClick = () => {
    window.close();
    // Fallback if window.close() doesn't work (e.g., if not opened via window.open)
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/reports/workforce-retention";
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader title="Attrition by Race Report" />
      <div className="flex-1 p-4 overflow-auto bg-background">
        <div className="mb-6">
          <BackButton onClick={handleBackClick} label="Back to Retention Menu" />
        </div>
        
        <DemographicAttritionCard type="race" title="Race" />
      </div>
    </div>
  );
};

export default RaceAttritionReport;