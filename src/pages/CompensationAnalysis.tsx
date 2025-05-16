
import React, { useState } from "react";
import { BackButton } from "@/components/ui/back-button";
import { BarChart4, DollarSign, Users, ArrowDownUp, BarChart } from "lucide-react";
import { CompensationCard } from "@/components/compensation/CompensationCard";
import { PerformanceCompensationChart } from "@/components/compensation/PerformanceCompensationChart";
import { PIRSalaryCard } from "@/components/compensation/PIRSalaryCard";
import { PIRRaceGenderCard } from "@/components/compensation/PIRRaceGenderCard";
import { PIRRaceCard } from "@/components/compensation/PIRRaceCard";
import { PIRGenderCard } from "@/components/compensation/PIRGenderCard";
import { useNavigate } from "react-router-dom";

const CompensationAnalysis = () => {
  const [selectedChart, setSelectedChart] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleCardClick = (chartType: string) => {
    setSelectedChart(chartType === selectedChart ? null : chartType);
  };

  const handleBackClick = () => {
    setSelectedChart(null);
  };

  const handleMainBackClick = () => {
    navigate("/reports");
  };

  return (
    <div className="container p-4 mx-auto max-w-screen-xl">
      <div className="mb-4">
        <BackButton onClick={handleMainBackClick} fallbackPath="/reports" label="Back" />
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
      ) : selectedChart === 'pir-race-gender' ? (
        <div className="mb-6">
          <PIRRaceGenderCard onBack={handleBackClick} />
        </div>
      ) : selectedChart === 'pir-race' ? (
        <div className="mb-6">
          <PIRRaceCard onBack={handleBackClick} />
        </div>
      ) : selectedChart === 'pir-gender' ? (
        <div className="mb-6">
          <PIRGenderCard onBack={handleBackClick} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {/* Cards with consistent layout */}
          <div className="aspect-square w-full relative">
            <CompensationCard
              title="Comp By Job Grade & Performance"
              icon={BarChart4}
              onClick={() => handleCardClick('performance-compensation')}
            />
          </div>
          
          <div className="aspect-square w-full relative">
            <CompensationCard
              title="Performance Relative to Starting PIR Salary"
              icon={DollarSign}
              onClick={() => handleCardClick('pir-salary')}
            />
          </div>
          
          <div className="aspect-square w-full relative">
            <CompensationCard
              title="Performance Relative to Starting PIR by Race & Gender"
              icon={Users}
              onClick={() => handleCardClick('pir-race-gender')}
            />
          </div>
          
          <div className="aspect-square w-full relative">
            <CompensationCard
              title="Starting PIR by Race"
              icon={BarChart}
              onClick={() => handleCardClick('pir-race')}
            />
          </div>
          
          <div className="aspect-square w-full relative">
            <CompensationCard
              title="Starting PIR by Gender"
              icon={ArrowDownUp}
              onClick={() => handleCardClick('pir-gender')}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CompensationAnalysis;
