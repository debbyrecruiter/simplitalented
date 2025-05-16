
import React, { useState } from "react";
import { BackButton } from "@/components/ui/back-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart4, DollarSign, Users, ArrowDownUp, BarChart } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { 
  ScatterChart, 
  Scatter, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  Legend,
  TooltipProps
} from "recharts";

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

// New salary data from the uploaded image
const salaryPerformanceData = [
  { name: "Ashton English", jobGrade: "SWE-1", salary: 152000, pir: 50, performance: 5 },
  { name: "Amelie Bartlett", jobGrade: "SWE-1", salary: 178000, pir: 70, performance: 3 },
  { name: "Kye Richardson", jobGrade: "SWE-2", salary: 212000, pir: 90, performance: 2 },
  { name: "Halle Caldwell", jobGrade: "SWE-2", salary: 157000, pir: 37, performance: 5 },
  { name: "Rex Woodward", jobGrade: "SWE-2", salary: 225000, pir: 101, performance: 1 },
  { name: "Elena Schmidt", jobGrade: "SWE-3", salary: 375000, pir: 115, performance: 3 },
  { name: "Sabrina White", jobGrade: "SWE-3", salary: 312000, pir: 95, performance: 5 },
  { name: "Keith Lam", jobGrade: "MKT-1", salary: 170000, pir: 70, performance: 4 },
  { name: "Madeleine Wu", jobGrade: "MKT-1", salary: 210000, pir: 90, performance: 3 },
  { name: "Emmy Mckenzie", jobGrade: "SLS-1", salary: 150000, pir: 55, performance: 2 },
  { name: "Liam Mack", jobGrade: "SLS-1", salary: 175000, pir: 80, performance: 3 },
];

const COLORS = ['#9320E7', '#F9E79F', '#58D68D', '#EC7063', '#5DADE2', '#AF7AC5'];

const CompensationAnalysis = () => {
  const [selectedChart, setSelectedChart] = useState<string | null>(null);

  const handleCardClick = (chartType: string) => {
    setSelectedChart(chartType === selectedChart ? null : chartType);
  };

  return (
    <div className="flex-1 p-4 overflow-auto">
      <div className="mb-4">
        <BackButton fallbackPath="/reports" label="Back" />
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Compensation Analysis</h1>
      
      {selectedChart === 'performance-compensation' ? (
        <div className="mb-6">
          <Card className="border shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl text-center">Compensation Relative to Performance Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[500px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      type="number" 
                      dataKey="performance" 
                      name="Performance Rating" 
                      domain={[0, 5.5]} 
                      label={{ value: 'Performance Rating', position: 'bottom' }}
                      ticks={[1, 2, 3, 4, 5]}
                    />
                    <YAxis 
                      type="number" 
                      dataKey="salary" 
                      name="Salary" 
                      unit="$"
                      label={{ value: 'Salary ($)', angle: -90, position: 'left' }}
                      tickFormatter={(value) => `${(value/1000).toFixed(0)}k`}
                    />
                    <Tooltip 
                      content={<CustomTooltip />} 
                      cursor={{ strokeDasharray: '3 3' }} 
                    />
                    <Legend />
                    <Scatter 
                      name="Employee Compensation" 
                      data={salaryPerformanceData} 
                      fill="#9320E7"
                    >
                      {salaryPerformanceData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]} 
                        />
                      ))}
                    </Scatter>
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
              <button 
                className="mt-4 px-4 py-2 bg-[#9320E7] text-white rounded-md hover:bg-[#7D00D2] transition-colors"
                onClick={() => setSelectedChart(null)}
              >
                Back to Compensation Cards
              </button>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {/* First Card */}
          <Card 
            className="border-4 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors"
            onClick={() => handleCardClick('performance-compensation')}
          >
            <CardHeader className="flex flex-col items-center justify-center h-full text-center pb-0 pt-0">
              <BarChart4 className="h-10 w-10 text-[#9320E7] mb-2" />
              <CardTitle className="text-lg font-small text-[#9320E7] px-4 whitespace-pre-line">
                Compensation Relative to Performance Analysis
              </CardTitle>
            </CardHeader>
          </Card>
          
          {/* Second Card */}
          <Card 
            className="border-4 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors"
            onClick={() => handleCardClick('pir-salary')}
          >
            <CardHeader className="flex flex-col items-center justify-center h-full text-center pb-0 pt-0">
              <DollarSign className="h-10 w-10 text-[#9320E7] mb-2" />
              <CardTitle className="text-lg font-small text-[#9320E7] px-4 whitespace-pre-line">
                Performance Relative to Starting PIR Salary
              </CardTitle>
            </CardHeader>
          </Card>
          
          {/* Third Card */}
          <Card 
            className="border-4 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors"
            onClick={() => handleCardClick('pir-race-gender')}
          >
            <CardHeader className="flex flex-col items-center justify-center h-full text-center pb-0 pt-0">
              <Users className="h-10 w-10 text-[#9320E7] mb-2" />
              <CardTitle className="text-lg font-small text-[#9320E7] px-4 whitespace-pre-line">
                Performance Relative to Starting PIR by Race & Gender
              </CardTitle>
            </CardHeader>
          </Card>
          
          {/* Fourth Card */}
          <Card 
            className="border-4 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors"
            onClick={() => handleCardClick('pir-race')}
          >
            <CardHeader className="flex flex-col items-center justify-center h-full text-center pb-0 pt-0">
              <BarChart className="h-10 w-10 text-[#9320E7] mb-2" />
              <CardTitle className="text-lg font-small text-[#9320E7] px-4 whitespace-pre-line">
                Starting PIR by Race
              </CardTitle>
            </CardHeader>
          </Card>
          
          {/* Fifth Card */}
          <Card 
            className="border-4 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors"
            onClick={() => handleCardClick('pir-gender')}
          >
            <CardHeader className="flex flex-col items-center justify-center h-full text-center pb-0 pt-0">
              <ArrowDownUp className="h-10 w-10 text-[#9320E7] mb-2" />
              <CardTitle className="text-lg font-small text-[#9320E7] px-4 whitespace-pre-line">
                Starting PIR by Gender
              </CardTitle>
            </CardHeader>
          </Card>
        </div>
      )}
    </div>
  );
};

// Fixed CustomTooltip component with proper TypeScript typing
interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean;
  payload?: Array<{
    payload: {
      name: string;
      jobGrade: string;
      salary: number;
      pir: number;
      performance: number;
    };
  }>;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-3 border border-gray-200 rounded shadow-lg">
        <p className="font-bold">{data.name}</p>
        <p className="text-sm text-gray-600">{data.jobGrade}</p>
        <p className="text-sm">Salary: ${data.salary.toLocaleString()}</p>
        <p className="text-sm">PIR: {data.pir}%</p>
        <p className="text-sm">Performance: {data.performance}/5</p>
      </div>
    );
  }

  return null;
};

export default CompensationAnalysis;
