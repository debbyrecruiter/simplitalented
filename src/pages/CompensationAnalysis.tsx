
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
        <div className="space-y-4">
          {/* First row - 2 cards */}
          <div className="flex flex-wrap gap-4 justify-center">
            <CompensationCard
              title="Comp By Job Grade & Performance"
              icon={BarChart4}
              onClick={() => handleCardClick('performance-compensation')}
            />
            <CompensationCard
              title="Performance Relative to Starting PIR Salary"
              icon={DollarSign}
              onClick={() => handleCardClick('pir-salary')}
            />
          </div>
          
          {/* Second row - 1 card centered */}
          <div className="flex justify-center">
            <CompensationCard
              title="Performance Relative to Starting PIR by Race & Gender"
              icon={Users}
              onClick={() => handleCardClick('pir-race-gender')}
            />
          </div>
          
          {/* Third row - 2 cards */}
          <div className="flex flex-wrap gap-4 justify-center">
            <CompensationCard
              title="Starting PIR by Race"
              icon={BarChart}
              onClick={() => handleCardClick('pir-race')}
            />
            <CompensationCard
              title="Starting PIR by Gender"
              icon={ArrowDownUp}
              onClick={() => handleCardClick('pir-gender')}
            />
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default CompensationAnalysis;
