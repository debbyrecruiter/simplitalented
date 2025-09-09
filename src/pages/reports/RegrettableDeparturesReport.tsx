import React from "react";
import { useNavigate } from "react-router-dom";
import { DashboardHeader } from "@/components/DashboardHeader";
import { BackButton } from "@/components/ui/back-button";
import RegrettableDeparturesCard from "@/components/workforce-retention/RegrettableDeparturesCard";

const RegrettableDeparturesReport = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/reports/workforce-retention");
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