
import React from "react";
import { BackButton } from "@/components/ui/back-button";
import { MetricCard } from "@/components/MetricCard";

// Enhanced compensation data with job codes
const compensationData = [
  { name: 'Jamie Chen', base: 120000, bonus: 15000, equity: 30000, total: 165000, role: 'Senior Designer', department: 'Design', jobCode: 'D-42' },
  { name: 'Alex Morgan', base: 135000, bonus: 20000, equity: 40000, total: 195000, role: 'Tech Lead', department: 'Engineering', jobCode: 'E-33' },
  { name: 'Taylor Smith', base: 115000, bonus: 12000, equity: 25000, total: 152000, role: 'QA Engineer', department: 'Engineering', jobCode: 'Q-28' },
  { name: 'Jordan Riley', base: 142000, bonus: 18000, equity: 35000, total: 195000, role: 'Tech Lead', department: 'Engineering', jobCode: 'E-33' },
  { name: 'Casey Johnson', base: 118000, bonus: 13000, equity: 24000, total: 155000, role: 'QA Engineer', department: 'Engineering', jobCode: 'Q-28' },
];

// Calculate averages by job code
const jobCodeAverages = compensationData.reduce((acc, employee) => {
  if (!acc[employee.jobCode]) {
    acc[employee.jobCode] = { totalSum: 0, count: 0 };
  }
  acc[employee.jobCode].totalSum += employee.total;
  acc[employee.jobCode].count += 1;
  return acc;
}, {});

Object.keys(jobCodeAverages).forEach(jobCode => {
  jobCodeAverages[jobCode].average = 
    jobCodeAverages[jobCode].totalSum / jobCodeAverages[jobCode].count;
});

// Enhanced compensation data with peer comparison
const enhancedCompensationData = compensationData.map(employee => {
  const jobCodeAvg = jobCodeAverages[employee.jobCode].average;
  const peerDiffPercentage = ((employee.total - jobCodeAvg) / jobCodeAvg) * 100;
  return {
    ...employee,
    peerDiffPercentage: peerDiffPercentage
  };
});

const CompensationAnalysis = () => {
  return (
    <div className="container p-2 mx-auto">
      <div className="mb-6">
        <BackButton fallbackPath="/reports" label="Back" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-40">
        <MetricCard
          title="Compensation Relative to Performance Analysis"
          value=""
          className="md:max-w-xs scale-150 transform origin-center text-[75%]" // Added text-[75%] to reduce font size by 25%
        />
      </div>
    </div>
  );
};

export default CompensationAnalysis;
