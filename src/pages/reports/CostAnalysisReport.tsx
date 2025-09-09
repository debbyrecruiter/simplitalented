import React from "react";
import { useNavigate } from "react-router-dom";
import { DashboardHeader } from "@/components/DashboardHeader";
import { BackButton } from "@/components/ui/back-button";
import CostAnalysisCard from "@/components/workforce-retention/CostAnalysisCard";

const CostAnalysisReport = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/reports/workforce-retention");
  };

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader title="Cost Analysis Report" />
      <div className="flex-1 p-4 overflow-auto bg-background">
        <div className="mb-6">
          <BackButton onClick={handleBackClick} label="Back to Retention Menu" />
        </div>
        
        <CostAnalysisCard />
      </div>
    </div>
  );
};

export default CostAnalysisReport;