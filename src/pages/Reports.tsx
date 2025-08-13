
import React from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { ReportsSection } from "@/components/dashboard/ReportsSection";
import { BackButton } from "@/components/ui/back-button";

const Reports = () => {
  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader title="Reports" />
      <div className="flex-1 p-4 overflow-auto bg-background">
        <div className="mb-6">
          <BackButton fallbackPath="/" />
        </div>
        
        <ReportsSection />
      </div>
    </div>
  );
};

export default Reports;
