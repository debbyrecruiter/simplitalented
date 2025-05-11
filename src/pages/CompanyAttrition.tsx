
import React, { useState } from "react";
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
  
  const chartConfig = {
    attrition: { color: "#9b87f5" },
    voluntary: { color: "#6E59A5" },
    involuntary: { color: "#D6BCFA" }
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
  const departmentColors = ["#9b87f5", "#7E69AB", "#6E59A5", "#1A1F2C", "#D6BCFA", "#8566FF"];

  return (
    <Card className="p-6 bg-white shadow-sm border-[#9b87f5] border rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-[#512888]">Company Attrition Analysis</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="p-6 text-center bg-white border border-[#9b87f5] rounded-lg shadow-sm">
          <h3 className="text-xl font-medium text-[#512888]">Overall Attrition Rate</h3>
          <p className="text-4xl font-bold mt-2 text-[#512888]">{overallAttritionRate}%</p>
        </Card>
        
        <Card className="p-6 text-center bg-white border border-[#6E59A5] rounded-lg shadow-sm">
          <h3 className="text-xl font-medium text-[#512888]">Voluntary Attrition</h3>
          <p className="text-4xl font-bold mt-2 text-[#6E59A5]">{overallVoluntaryRate}%</p>
        </Card>
        
        <Card className="p-6 text-center bg-white border border-[#D6BCFA] rounded-lg shadow-sm">
          <h3 className="text-xl font-medium text-[#512888]">Involuntary Attrition</h3>
          <p className="text-4xl font-bold mt-2 text-[#D6BCFA]">{overallInvoluntaryRate}%</p>
        </Card>
      </div>
      
      <Tabs defaultValue="breakdown" className="w-full">
        <TabsList className="grid grid-cols-2 mb-4">
          <TabsTrigger value="breakdown">Department Breakdown</TabsTrigger>
          <TabsTrigger value="trends">Historical Trends</TabsTrigger>
        </TabsList>
        
        <TabsContent value="breakdown">
          <div className="bg-white rounded-lg w-full">
            <p className="mb-4 text-sm text-gray-600">
              {selectedDepartment ? `Showing detailed data for ${selectedDepartment}. Click the bar again to show all departments.` : 'Click on a department bar to see its historical trend.'}
            </p>
            
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
                            <div className="bg-white border border-[#9b87f5] shadow-md p-4 rounded">
                              <p className="font-medium text-lg">{data.department}</p>
                              <p className="text-gray-600">Employees: {data.count}</p>
                              <div className="mt-2 space-y-1">
                                <p className="text-[#9b87f5] font-bold">{`Total: ${data.attritionRate}%`}</p>
                                <p className="text-[#6E59A5]">{`Voluntary: ${data.voluntaryRate}%`}</p>
                                <p className="text-[#D6BCFA]">{`Involuntary: ${data.involuntaryRate}%`}</p>
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
                      fill="#D6BCFA" 
                      onClick={handleBarClick}
                      cursor="pointer"
                    />
                    <Bar 
                      dataKey="voluntaryRate" 
                      name="Voluntary" 
                      stackId="a" 
                      fill="#6E59A5"
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
        </TabsContent>
        
        <TabsContent value="trends">
          <div className="bg-white rounded-lg w-full">
            <p className="mb-4 text-sm text-gray-600">
              {selectedDepartment 
                ? `Showing historical trends for ${selectedDepartment}. Click a bar on the Breakdown tab to change department.` 
                : 'Showing overall trends. Select a department on the Breakdown tab to see specific trends.'}
            </p>
            
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
                            <div className="bg-white border border-[#9b87f5] shadow-md p-4 rounded">
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
                          stroke="#9b87f5"
                          strokeWidth={3}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                        <Line
                          type="monotone"
                          dataKey={`${selectedDepartment}-voluntary`}
                          name={`${selectedDepartment}-voluntary`}
                          stroke="#6E59A5"
                          strokeWidth={2}
                          dot={{ r: 3 }}
                        />
                        <Line
                          type="monotone"
                          dataKey={`${selectedDepartment}-involuntary`}
                          name={`${selectedDepartment}-involuntary`}
                          stroke="#D6BCFA"
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
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default CompanyAttrition;
