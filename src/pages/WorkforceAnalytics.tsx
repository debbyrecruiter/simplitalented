
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
        
        <div className="p-4">
          {/* Brick-style staggered layout */}
          <div className="space-y-6">
            {/* Row 1 - Full alignment */}
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex-1 min-w-[300px] max-w-[400px]">
                <MetricCard
                  title="Demographics"
                  value=""
                  icon={Users}
                  onClick={navigateToDemographics}
                />
              </div>
            </div>
            
            {/* Row 2 - Offset by half tile width (brick pattern) */}
            <div className="flex flex-wrap gap-4 justify-center pl-[calc(50%/3)]">
              <div className="flex-1 min-w-[300px] max-w-[400px]">
                <MetricCard
                  title="Retention"
                  value=""
                  icon={ArrowDownUp}
                  onClick={navigateToRetention}
                  className={activeView === 'retention' ? 'ring-4 ring-blue-500' : ''}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkforceAnalytics;
