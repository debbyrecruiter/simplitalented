
import React from "react";
import { BackButton } from "@/components/ui/back-button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart4, DollarSign } from "lucide-react";

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
    <div className="flex-1 p-4 overflow-auto">
      <div className="mb-4">
        <BackButton fallbackPath="/reports" label="Back" />
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Compensation Analysis</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card 
          className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors transform origin-center scale-[0.525]"
          onClick={() => {}}
        >
          <CardHeader className="flex flex-col items-center justify-center text-center pb-0 pt-10">
            <BarChart4 className="h-12 w-12 text-[#9320E7] mb-2" />
            <CardTitle className="text-6xl font-small text-[#9320E7] truncate">
              Compensation Relative to Performance Analysis
            </CardTitle>
          </CardHeader>
        </Card>
        
        <Card 
          className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors transform origin-center scale-[0.525]"
          onClick={() => {}}
        >
          <CardHeader className="flex flex-col items-center justify-center text-center pb-0 pt-10">
            <DollarSign className="h-12 w-12 text-[#9320E7] mb-2" />
            <CardTitle className="text-6xl font-small text-[#9320E7] truncate">
              Performance Relative to Starting PIR Salary
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default CompensationAnalysis;
