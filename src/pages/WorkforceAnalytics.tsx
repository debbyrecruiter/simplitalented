
import React, { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { BackButton } from "@/components/ui/back-button";
import { Users, ArrowDownUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MetricCard } from "@/components/MetricCard";

const WorkforceAnalytics = () => {
  const [activeView, setActiveView] = useState<'retention'>('retention');
  const navigate = useNavigate();

  const navigateToDemographics = () => {
    console.log("Navigating to demographics");
    navigate('/reports/workforce-demographics');
  };

  const navigateToRetention = () => {
    console.log("Navigating to retention");
    navigate('/reports/workforce-retention');
  };

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader title="Workforce Analytics" />
      <div className="flex-1 p-4 overflow-auto bg-background">
        <div className="mb-6">
          <BackButton fallbackPath="/reports" label="Back" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <MetricCard
          title="Demographics"
          value=""
          icon={Users}
          onClick={navigateToDemographics}
          className="aspect-square"
        />
        <MetricCard
          title="Retention"
          value=""
          icon={ArrowDownUp}
          onClick={navigateToRetention}
          className={`aspect-square ${activeView === 'retention' ? 'ring-4 ring-blue-500' : ''}`}
        />
        </div>
      </div>
    </div>
  );
};

export default WorkforceAnalytics;
