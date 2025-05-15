
import React from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardContent } from "@/components/dashboard/DashboardContent";
import { DashboardProvider } from "@/context/DashboardContext";

const Dashboard = () => {
  console.log("Rendering Dashboard component");
  
  return (
    <DashboardProvider>
      <div className="flex flex-col h-screen">
        <DashboardHeader title="Dashboard" />
        <DashboardContent />
      </div>
    </DashboardProvider>
  );
};

export default Dashboard;
