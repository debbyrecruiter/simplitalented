
import React, { useState, useEffect } from "react";
import { BackButton } from "@/components/ui/back-button";
import { Users, ArrowDownUp } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { MetricCard } from "@/components/MetricCard";

const WorkforceAnalytics = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeView, setActiveView] = useState<'demographics' | 'retention' | null>(null);

  // Set active view based on current path when coming back from child pages
  useEffect(() => {
    if (location.pathname.includes('workforce-demographics')) {
      setActiveView('demographics');
    } else if (location.pathname.includes('workforce-retention')) {
      setActiveView('retention');
    }
  }, [location.pathname]);

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
        <div className="aspect-square w-full relative">
          <MetricCard
            title="Demographics"
            value=""
            icon={Users}
            onClick={navigateToDemographics}
            className={`border-12 border-[#840DD7] h-full ${activeView === 'demographics' ? 'ring-4 ring-blue-500' : ''}`}
            titleClassName="text-4xl"
          />
        </div>
        <div className="aspect-square w-full relative">
          <MetricCard
            title="Retention"
            value=""
            icon={ArrowDownUp}
            onClick={navigateToRetention}
            className={`border-12 border-[#840DD7] h-full ${activeView === 'retention' ? 'ring-4 ring-blue-500' : ''}`}
            titleClassName="text-4xl"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkforceAnalytics;
