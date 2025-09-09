import React from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { BackButton } from "@/components/ui/back-button";
import RegrettableDeparturesCard from "@/components/workforce-retention/RegrettableDeparturesCard";

const RegrettableDeparturesReport = () => {
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
      <DashboardHeader title="Regrettable Departures Report" />
      <div className="flex-1 p-4 overflow-auto bg-background">
        <div className="mb-6">
          <BackButton onClick={handleBackClick} label="Back to Retention Menu" />
        </div>
        
        <RegrettableDeparturesCard />
      </div>
    </div>
  );
};

export default RegrettableDeparturesReport;