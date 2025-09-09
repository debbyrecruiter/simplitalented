import React from "react";
import { useNavigate } from "react-router-dom";
import { DashboardHeader } from "@/components/DashboardHeader";
import { BackButton } from "@/components/ui/back-button";
import DemographicAttritionCard from "@/components/workforce-retention/DemographicAttritionCard";

const RaceAttritionReport = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/reports/workforce-retention");
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