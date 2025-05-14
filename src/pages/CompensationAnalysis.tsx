
import React from "react";
import { Card } from "@/components/ui/card";
import { BackButton } from "@/components/ui/back-button";

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

// Enhanced comparative data for the cleaner view
const enhancedCompData = compensationData.map(item => {
  const maxValue = Math.max(...compensationData.map(d => d.total));
  const percentageOfHighest = Math.round((item.total / maxValue) * 100);
  return {
    name: item.name,
    role: item.role,
    base: item.base,
    bonus: item.bonus,
    equity: item.equity,
    total: item.total,
    percentageOfHighest,
    basePercentage: Math.round((item.base / item.total) * 100),
    bonusPercentage: Math.round((item.bonus / item.total) * 100),
    equityPercentage: Math.round((item.equity / item.total) * 100),
  };
});

const CompensationAnalysis = () => {
  return (
    <div className="container p-4 mx-auto">
      <div className="mb-6">
        <BackButton fallbackPath="/reports" label="Back" />
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Compensation Analysis</h1>
      
      <div className="space-y-6">
        {/* Simple total compensation comparison */}
        <Card className="border p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Total Compensation</h3>
          <div className="space-y-4">
            {enhancedCompData.sort((a, b) => b.total - a.total).map((item, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between items-center text-sm">
                  <div className="font-medium flex items-center">
                    <div 
                      className="h-2 w-2 rounded-full mr-2" 
                      style={{ backgroundColor: '#4CAF50' }}
                    ></div>
                    {item.name}
                  </div>
                  <span className="font-mono">${item.total.toLocaleString()}</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full"
                    style={{ 
                      width: `${item.percentageOfHighest}%`,
                      backgroundColor: '#4CAF50'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CompensationAnalysis;
