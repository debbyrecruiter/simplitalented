
import React, { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { BackButton } from "@/components/ui/back-button";
import { BarChart4, DollarSign, Users, ArrowDownUp, BarChart } from "lucide-react";
import { CompensationCard } from "@/components/compensation/CompensationCard";
import { PerformanceCompensationChart } from "@/components/compensation/PerformanceCompensationChart";
import { PIRSalaryCard } from "@/components/compensation/PIRSalaryCard";

const CompensationAnalysis = () => {
  const [selectedChart, setSelectedChart] = useState<string | null>(null);

  const handleCardClick = (chartType: string) => {
    setSelectedChart(chartType === selectedChart ? null : chartType);
  };

  const handleBackClick = () => {
    // Explicitly set selectedChart to null to return to the main compensation analysis view
    setSelectedChart(null);
  };

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader title="Compensation Analysis" />
      <div className="flex-1 p-4 overflow-auto bg-background">
        <div className="mb-4">
          <BackButton fallbackPath="/reports" />
        </div>
        
        {selectedChart === 'performance-compensation' ? (
        <div className="mb-6">
          <PerformanceCompensationChart onBack={handleBackClick} />
        </div>
      ) : selectedChart === 'pir-salary' ? (
        <div className="mb-6">
          <PIRSalaryCard onBack={handleBackClick} />
        </div>
      ) : (
        <div className="space-y-24">
          {/* Row 1 - Full alignment */}
          <div className="flex flex-wrap gap-16 justify-start">
            <div className="w-[300px]">
              <CompensationCard
                title="Comp By Job Grade & Performance"
                icon={BarChart4}
                onClick={() => handleCardClick('performance-compensation')}
              />
            </div>
            <div className="w-[300px]">
              <CompensationCard
                title="Performance Relative to Starting PIR Salary"
                icon={DollarSign}
                onClick={() => handleCardClick('pir-salary')}
              />
            </div>
            <div className="w-[300px]">
              <CompensationCard
                title="Performance Relative to Starting PIR by Race & Gender"
                icon={Users}
                onClick={() => handleCardClick('pir-race-gender')}
              />
            </div>
          </div>
          
          {/* Row 2 - Offset by half tile width (brick pattern) */}
          <div className="flex flex-wrap gap-16 justify-start ml-[150px]">
            <div className="w-[300px]">
              <CompensationCard
                title="Starting PIR by Race"
                icon={BarChart}
                onClick={() => handleCardClick('pir-race')}
              />
            </div>
            <div className="w-[300px]">
              <CompensationCard
                title="Starting PIR by Gender"
                icon={ArrowDownUp}
                onClick={() => handleCardClick('pir-gender')}
              />
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default CompensationAnalysis;
