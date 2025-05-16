
import React, { useState } from "react";
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
    setSelectedChart(null);
  };

  return (
    <div className="flex-1 p-4 overflow-auto">
      <div className="mb-4">
        <BackButton fallbackPath="/reports" />
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Compensation Analysis</h1>
      
      {selectedChart === 'performance-compensation' ? (
        <div className="mb-6">
          <PerformanceCompensationChart onBack={handleBackClick} />
        </div>
      ) : selectedChart === 'pir-salary' ? (
        <div className="mb-6">
          <PIRSalaryCard onBack={handleBackClick} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {/* First Card */}
          <CompensationCard
            title="Comp By Job Grade & Performance"
            icon={BarChart4}
            onClick={() => handleCardClick('performance-compensation')}
          />
          
          {/* Second Card */}
          <CompensationCard
            title="Performance Relative to Starting PIR Salary"
            icon={DollarSign}
            onClick={() => handleCardClick('pir-salary')}
          />
          
          {/* Third Card */}
          <CompensationCard
            title="Performance Relative to Starting PIR by Race & Gender"
            icon={Users}
            onClick={() => handleCardClick('pir-race-gender')}
          />
          
          {/* Fourth Card */}
          <CompensationCard
            title="Starting PIR by Race"
            icon={BarChart}
            onClick={() => handleCardClick('pir-race')}
          />
          
          {/* Fifth Card */}
          <CompensationCard
            title="Starting PIR by Gender"
            icon={ArrowDownUp}
            onClick={() => handleCardClick('pir-gender')}
          />
        </div>
      )}
    </div>
  );
};

export default CompensationAnalysis;
