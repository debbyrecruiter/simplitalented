
import React from "react";
import { ReportsSection } from "@/components/dashboard/ReportsSection";
import { BackButton } from "@/components/ui/back-button";
import { useNavigate } from "react-router-dom";

const Reports = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="container p-4 mx-auto max-w-screen-xl">
      <div className="mb-6">
        <BackButton onClick={handleBackClick} label="Back" />
      </div>
      <h1 className="text-3xl font-bold mb-6">Reports</h1>
      <ReportsSection />
    </div>
  );
};

export default Reports;
