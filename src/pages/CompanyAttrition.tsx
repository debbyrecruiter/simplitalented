
import React, { useState } from "react";
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
  Cell,
  LineChart,
  Line,
  Legend
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { departmentAttritionData, departmentYearOverYearData } from "@/data/demographicsData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const overallAttritionRate = 16.5; // Company-wide attrition rate
const overallVoluntaryRate = 9.7;   // Company-wide voluntary attrition
const overallInvoluntaryRate = 6.8; // Company-wide involuntary attrition

const CompanyAttrition = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  
  // Define color constants to match Attrition by Recruiter graph
  const VIVID_PURPLE = "#8B5CF6";   // For total attrition
  const MAGENTA_PINK = "#D946EF";   // For voluntary attrition
  const BRIGHT_ORANGE = "#F97316";  // For involuntary attrition
  
  const chartConfig = {
    attrition: { color: VIVID_PURPLE },
    voluntary: { color: MAGENTA_PINK },
    involuntary: { color: BRIGHT_ORANGE }
  };

  // Create an array of tick values in increments of 2 up to 40
  const yAxisTicks = Array.from({ length: 21 }, (_, index) => index * 2);

  const handleBarClick = (data: any) => {
    setSelectedDepartment(selectedDepartment === data.department ? null : data.department);
  };

  // Filter year-over-year data for the selected department or show all departments
  const filteredYearOverYearData = departmentYearOverYearData.map(yearData => {
    if (selectedDepartment) {
      return {
        year: yearData.year,
        [selectedDepartment]: yearData[selectedDepartment as keyof typeof yearData],
        [`${selectedDepartment}-voluntary`]: yearData[`${selectedDepartment}-voluntary` as keyof typeof yearData],
        [`${selectedDepartment}-involuntary`]: yearData[`${selectedDepartment}-involuntary` as keyof typeof yearData],
      };
    }
    return yearData;
  });

  const departmentNames = departmentAttritionData.map(item => item.department);
  // Updated department colors to be more consistent with new color scheme
  const departmentColors = [VIVID_PURPLE, MAGENTA_PINK, BRIGHT_ORANGE, "#0EA5E9", "#10B981", "#F59E0B"];

  return (
    <div className="container p-4 mx-auto">
      <div className="mb-6">
        <BackButton fallbackPath="/reports/workforce-retention" label="Back" />
      </div>
      
      <h1 className="text-3xl font-bold mb-6 text-[#512888]">Company Attrition Analysis</h1>
      
      <div className="space-y-6 p-4">
        {/* Overall attrition rate cards - updated border colors to match new scheme */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className={`p-6 text-center bg-white border border-[${VIVID_PURPLE}] rounded-lg shadow-sm`}>
            <h3 className="text-xl font-medium text-[#512888]">Overall Attrition Rate</h3>
            <p className={`text-4xl font-bold mt-2 text-[${VIVID_PURPLE}]`}>{overallAttritionRate}%</p>
          </Card>
          
          <Card className={`p-6 text-center bg-white border border-[${MAGENTA_PINK}] rounded-lg shadow-sm`}>
            <h3 className="text-xl font-medium text-[#512888]">Voluntary Attrition</h3>
            <p className={`text-4xl font-bold mt-2 text-[${MAGENTA_PINK}]`}>{overallVoluntaryRate}%</p>
          </Card>
          
          <Card className={`p-6 text-center bg-white border border-[${BRIGHT_ORANGE}] rounded-lg shadow-sm`}>
            <h3 className="text-xl font-medium text-[#512888]">Involuntary Attrition</h3>
            <p className={`text-4xl font-bold mt-2 text-[${BRIGHT_ORANGE}]`}>{overallInvoluntaryRate}%</p>
          </Card>
        </div>
        
        <Tabs defaultValue="breakdown" className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="breakdown">Department Breakdown</TabsTrigger>
            <TabsTrigger value="trends">Historical Trends</TabsTrigger>
          </TabsList>
          
          <TabsContent value="breakdown">
            <Card className={`p-6 bg-white border border-[${VIVID_PURPLE}] rounded-lg shadow-sm`}>
              <h3 className="text-xl font-medium text-[#512888] mb-4">Attrition by Department</h3>
              <p className="mb-4 text-sm text-gray-600">
                {selectedDepartment ? `Showing detailed data for ${selectedDepartment}. Click the bar again to show all departments.` : 'Click on a department bar to see its historical trend.'}
              </p>
              
              <div className="bg-white rounded-lg w-full h-full">
                <ChartContainer config={chartConfig}>
                  <div className="h-[500px] w-full bg-white">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart 
                        data={departmentAttritionData} 
                        margin={{ top: 5, right: 30, left: 20, bottom: 100 }}
                        className="bg-white"
                        barCategoryGap={20}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis 
                          dataKey="department" 
                          axisLine={true}
                          tickLine={false}
                          tick={{ fill: '#512888', fontSize: 16, fontWeight: 600 }}
                          angle={-45}
                          textAnchor="end"
                          height={80}
                          dy={20}
                        />
                        <YAxis
                          axisLine={true}
                          tickLine={false}
                          tick={{ fill: '#512888', fontSize: 16, fontWeight: 600 }}
                          tickFormatter={(value) => `${value}%`}
                          domain={[0, 40]}
                          ticks={yAxisTicks}
                        />
                        <ChartTooltip
                          content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                              const data = payload[0].payload;
                              return (
                                <div className={`bg-white border border-[${VIVID_PURPLE}] shadow-md p-4 rounded`}>
                                  <p className="font-medium text-lg">{data.department}</p>
                                  <p className="text-gray-600">Employees: {data.count}</p>
                                  <div className="mt-2 space-y-1">
                                    <p style={{color: VIVID_PURPLE}} className="font-bold">{`Total: ${data.attritionRate}%`}</p>
                                    <p style={{color: MAGENTA_PINK}}>{`Voluntary: ${data.voluntaryRate}%`}</p>
                                    <p style={{color: BRIGHT_ORANGE}}>{`Involuntary: ${data.involuntaryRate}%`}</p>
                                  </div>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <Bar 
                          dataKey="involuntaryRate" 
                          name="Involuntary" 
                          stackId="a" 
                          fill={BRIGHT_ORANGE}
                          onClick={handleBarClick}
                          cursor="pointer"
                        />
                        <Bar 
                          dataKey="voluntaryRate" 
                          name="Voluntary" 
                          stackId="a" 
                          fill={MAGENTA_PINK}
                          onClick={handleBarClick}
                          cursor="pointer"
                        />
                        <Legend 
                          verticalAlign="top" 
                          height={36}
                          iconSize={16}
                          formatter={(value) => <span className="text-gray-700">{value}</span>}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </ChartContainer>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="trends">
            <Card className={`p-6 bg-white border border-[${VIVID_PURPLE}] rounded-lg shadow-sm`}>
              <h3 className="text-xl font-medium text-[#512888] mb-4">Department Attrition Trends (2020-2024)</h3>
              <p className="mb-4 text-sm text-gray-600">
                {selectedDepartment 
                  ? `Showing historical trends for ${selectedDepartment}. Click a bar on the Breakdown tab to change department.` 
                  : 'Showing overall trends. Select a department on the Breakdown tab to see specific trends.'}
              </p>
              
              <div className="bg-white rounded-lg w-full h-full">
                <ChartContainer config={chartConfig}>
                  <div className="h-[500px] w-full bg-white">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart 
                        data={filteredYearOverYearData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis 
                          dataKey="year" 
                          axisLine={true}
                          tickLine={false}
                          tick={{ fill: '#512888', fontSize: 16, fontWeight: 600 }}
                        />
                        <YAxis
                          axisLine={true}
                          tickLine={false}
                          tick={{ fill: '#512888', fontSize: 16, fontWeight: 600 }}
                          tickFormatter={(value) => `${value}%`}
                          domain={[0, 40]}
                          ticks={yAxisTicks}
                        />
                        <ChartTooltip
                          content={({ active, payload, label }) => {
                            if (active && payload && payload.length) {
                              return (
                                <div className={`bg-white border border-[${VIVID_PURPLE}] shadow-md p-4 rounded`}>
                                  <p className="font-medium text-lg">{label}</p>
                                  <div className="mt-2 space-y-1">
                                    {payload.map((entry, index) => {
                                      const name = entry.name as string;
                                      // Extract department name without -voluntary/-involuntary suffix
                                      const displayName = name.includes("-voluntary")
                                        ? `${name.split("-voluntary")[0]} (Voluntary)`
                                        : name.includes("-involuntary")
                                          ? `${name.split("-involuntary")[0]} (Involuntary)`
                                          : name;
                                          
                                      return (
                                        <p 
                                          key={`item-${index}`} 
                                          style={{ color: entry.color }}
                                          className="font-medium"
                                        >
                                          {`${displayName}: ${entry.value}%`}
                                        </p>
                                      );
                                    })}
                                  </div>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        
                        {selectedDepartment ? (
                          // Show only selected department data with voluntary/involuntary breakdown
                          <>
                            <Line
                              type="monotone"
                              dataKey={selectedDepartment}
                              name={selectedDepartment}
                              stroke={VIVID_PURPLE}
                              strokeWidth={3}
                              dot={{ r: 4 }}
                              activeDot={{ r: 6 }}
                            />
                            <Line
                              type="monotone"
                              dataKey={`${selectedDepartment}-voluntary`}
                              name={`${selectedDepartment}-voluntary`}
                              stroke={MAGENTA_PINK}
                              strokeWidth={2}
                              dot={{ r: 3 }}
                            />
                            <Line
                              type="monotone"
                              dataKey={`${selectedDepartment}-involuntary`}
                              name={`${selectedDepartment}-involuntary`}
                              stroke={BRIGHT_ORANGE}
                              strokeWidth={2}
                              dot={{ r: 3 }}
                            />
                          </>
                        ) : (
                          // Show all departments
                          departmentNames.map((dept, index) => (
                            <Line
                              key={dept}
                              type="monotone"
                              dataKey={dept}
                              name={dept}
                              stroke={departmentColors[index % departmentColors.length]}
                              strokeWidth={2}
                              dot={{ r: 3 }}
                              activeDot={{ r: 5 }}
                            />
                          ))
                        )}
                        <Legend 
                          verticalAlign="top" 
                          height={36}
                          iconSize={16}
                          formatter={(value) => {
                            // Format legend labels to be more user-friendly
                            const displayValue = value.includes("-voluntary") 
                              ? `${value.split("-voluntary")[0]} (Voluntary)`
                              : value.includes("-involuntary") 
                                ? `${value.split("-involuntary")[0]} (Involuntary)`
                                : value;
                            return <span className="text-gray-700">{displayValue}</span>;
                          }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </ChartContainer>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="text-sm text-muted-foreground mt-2">
          <p>* Attrition rates calculated as the percentage of employees who left the company in the past 12 months.</p>
          <p>* Voluntary attrition refers to employees who resigned. Involuntary attrition refers to terminations.</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyAttrition;
