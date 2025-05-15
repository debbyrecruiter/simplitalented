
import React, { useState } from "react";
import { BackButton } from "@/components/ui/back-button";
import { Users, ArrowDownUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MetricCard } from "@/components/MetricCard";

const WorkforceAnalytics = () => {
  const [activeView, setActiveView] = useState<'retention'>('retention');
  const navigate = useNavigate();

  const navigateToDemographics = () => {
    navigate('/reports/workforce-demographics');
  };

  const navigateToRetention = () => {
    navigate('/reports/workforce-retention');
  };

  return (
    <div className="container p-4 mx-auto">
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
          className=""
        />
        <MetricCard
          title="Retention"
          value=""
          icon={ArrowDownUp}
          onClick={navigateToRetention}
          className={activeView === 'retention' ? 'ring-4 ring-blue-500' : ''}
        />
      </div>
    </div>
  );
};

export default WorkforceAnalytics;
