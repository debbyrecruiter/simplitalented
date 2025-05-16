
import React, { useState } from "react";
import { BackButton } from "@/components/ui/back-button";
import { Users, ArrowDownUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MetricCard } from "@/components/MetricCard";

const WorkforceAnalytics = () => {
  const navigate = useNavigate();
  // Add the missing state variable
  const [activeView, setActiveView] = useState<'demographics' | 'retention' | null>(null);

  const navigateToDemographics = () => {
    setActiveView('demographics');
    navigate('/reports/workforce-demographics');
  };

  const navigateToRetention = () => {
    setActiveView('retention');
    navigate('/reports/workforce-retention');
  };

  return (
    <div className="container p-4 mx-auto max-w-screen-xl">
      <div className="mb-6">
        <BackButton fallbackPath="/reports" label="Back" />
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Workforce Analytics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <MetricCard
          title="Demographics"
          value=""
          icon={Users}
          onClick={navigateToDemographics}
          className={`border-12 border-[#840DD7] ${activeView === 'demographics' ? 'ring-4 ring-blue-500' : ''}`}
        />
        <MetricCard
          title="Retention"
          value=""
          icon={ArrowDownUp}
          onClick={navigateToRetention}
          className={`border-12 border-[#840DD7] ${activeView === 'retention' ? 'ring-4 ring-blue-500' : ''}`}
        />
      </div>
    </div>
  );
};

export default WorkforceAnalytics;
