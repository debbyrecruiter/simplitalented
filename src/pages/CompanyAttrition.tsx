
import React from "react";
import { BackButton } from "@/components/ui/back-button";
import { Card } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const departmentAttritionData = [
  { department: "Engineering", attritionRate: 18 },
  { department: "Sales", attritionRate: 22 },
  { department: "Marketing", attritionRate: 15 },
  { department: "HR", attritionRate: 10 },
  { department: "Product", attritionRate: 20 },
  { department: "Finance", attritionRate: 12 },
];

const overallAttritionRate = 16.5; // Company-wide attrition rate

const CompanyAttrition = () => {
  const chartConfig = {
    attrition: { color: "#9b87f5" }, // Purple color that matches theme
  };

  // Create an array of tick values in increments of 2 up to 40
  const yAxisTicks = Array.from({ length: 21 }, (_, index) => index * 2);

  return (
    <div className="container p-4 mx-auto">
      <div className="mb-6">
        <BackButton fallbackPath="/reports/workforce-retention" label="Back" />
      </div>
      
      <h1 className="text-3xl font-bold mb-6 text-[#512888]">Company Attrition Analysis</h1>
      
      <div className="space-y-6 p-4">
        {/* Overall attrition rate card */}
        <Card className="p-6 text-center bg-white border border-[#9b87f5] rounded-lg shadow-sm">
          <h3 className="text-xl font-medium text-[#512888]">Overall Attrition Rate</h3>
          <p className="text-4xl font-bold mt-2 text-[#512888]">{overallAttritionRate}%</p>
          <p className="text-sm text-muted-foreground mt-1">Company-wide annual attrition</p>
        </Card>
        
        {/* Department breakdown chart */}
        <Card className="p-6 bg-white border border-[#9b87f5] rounded-lg shadow-sm">
          <h3 className="text-xl font-medium text-[#512888] mb-4">Attrition by Department</h3>
          
          {/* Chart container with white background */}
          <div className="bg-white rounded-lg w-full h-full">
            <ChartContainer config={chartConfig}>
              <div className="h-[600px] w-full bg-white">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={departmentAttritionData} 
                    margin={{ top: 5, right: 30, left: 20, bottom: 30 }}
                    className="bg-white"
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis 
                      dataKey="department" 
                      axisLine={true}
                      tickLine={false}
                      tick={{ fill: '#512888', fontSize: 12 }}
                      angle={-45}
                      textAnchor="end"
                    />
                    <YAxis
                      axisLine={true}
                      tickLine={false}
                      tick={{ fill: '#512888', fontSize: 12 }}
                      tickFormatter={(value) => `${value}%`}
                      domain={[0, 40]}
                      ticks={yAxisTicks}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <ChartTooltipContent
                              className="bg-white border border-[#9b87f5] shadow-md"
                              formatter={(value) => [`${value}%`, 'Attrition Rate']}
                            />
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="attritionRate" name="Attrition Rate" radius={[4, 4, 0, 0]}>
                      {departmentAttritionData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill="#9b87f5" />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ChartContainer>
          </div>
        </Card>
        
        <div className="text-sm text-muted-foreground mt-2">
          <p>* Attrition rates calculated as the percentage of employees who left the company in the past 12 months.</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyAttrition;
