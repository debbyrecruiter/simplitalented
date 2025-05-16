
import React from "react";
import { ReportsSection } from "@/components/dashboard/ReportsSection";
import { BackButton } from "@/components/ui/back-button";

const Reports = () => {
  return (
    <div className="container p-4 mx-auto">
      <div className="mb-6">
        <BackButton fallbackPath="/" />
      </div>
      <h1 className="text-3xl font-bold mb-6">Reports</h1>
      <ReportsSection />
    </div>
  );
};

export default Reports;
