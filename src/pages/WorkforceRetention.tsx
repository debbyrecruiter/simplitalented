import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BackButton } from "@/components/ui/back-button";
import { Users, Award, BarChart2, Briefcase, Badge } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend,
  Cell,
  Line,
  ComposedChart,
  LineChart
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { 
  raceAttritionData, 
  raceYearOverYearData,
  genderAttritionData,
  genderYearOverYearData
} from "@/data/demographicsData";

// Mock data for manager attrition rates
const managerAttritionData = [
  { 
    manager: "Sarah Johnson", 
    engineering: 15, 
    sales: 0, 
    marketing: 0, 
    hr: 0,
    product: 12, 
    finance: 0
  },
  { 
    manager: "Michael Chen", 
    engineering: 20, 
    sales: 22, 
    marketing: 0, 
    hr: 0,
    product: 0, 
    finance: 0
  },
  { 
    manager: "Priya Patel", 
    engineering: 0, 
    sales: 0, 
    marketing: 18, 
    hr: 14,
    product: 0, 
    finance: 0
  },
  { 
    manager: "David Kim", 
    engineering: 10, 
    sales: 0, 
    marketing: 0, 
    hr: 0,
    product: 19, 
    finance: 11
  },
  { 
    manager: "Jennifer Wong", 
    engineering: 0, 
    sales: 27, 
    marketing: 12, 
    hr: 0,
    product: 0, 
    finance: 0
  }
];

// Transform data for recharts
const transformedData = managerAttritionData.map(item => {
  return {
    manager: item.manager,
    Engineering: item.engineering || null,
    Sales: item.sales || null,
    Marketing: item.marketing || null,
    HR: item.hr || null,
    Product: item.product || null,
    Finance: item.finance || null
  };
});

// Departments and their colors
const departments = [
  { name: "Engineering", color: "#8B5CF6" },
  { name: "Sales", color: "#EC4899" },
  { name: "Marketing", color: "#F97316" },
  { name: "HR", color: "#0EA5E9" },
  { name: "Product", color: "#10B981" },
  { name: "Finance", color: "#F59E0B" }
];

// Company attrition data
const departmentAttritionData = [
  { department: "Engineering", attritionRate: 18 },
  { department: "Sales", attritionRate: 22 },
  { department: "Marketing", attritionRate: 15 },
  { department: "HR", attritionRate: 10 },
  { department: "Product", attritionRate: 20 },
  { department: "Finance", attritionRate: 12 },
];

// Performance score attrition data - updated with both voluntary and involuntary data
const performanceScoreData = [
  { 
    score: "5 - Excellent", 
    count: 42, 
    attritionRate: 5,
    voluntaryRate: 3,
    involuntaryRate: 2 
  },
  { 
    score: "4 - Very Good", 
    count: 78, 
    attritionRate: 12,
    voluntaryRate: 8,
    involuntaryRate: 4 
  },
  { 
    score: "3 - Satisfactory", 
    count: 56, 
    attritionRate: 18,
    voluntaryRate: 10,
    involuntaryRate: 8 
  },
  { 
    score: "2 - Needs Improvement", 
    count: 34, 
    attritionRate: 27,
    voluntaryRate: 9,
    involuntaryRate: 18 
  },
  { 
    score: "1 - Poor", 
    count: 12, 
    attritionRate: 38,
    voluntaryRate: 6,
    involuntaryRate: 32 
  },
];

// Year-over-year attrition data
const yearOverYearData = [
  { year: 2020, attritionRate: 19.2, voluntaryRate: 12.1, involuntaryRate: 7.1 },
  { year: 2021, attritionRate: 17.8, voluntaryRate: 10.5, involuntaryRate: 7.3 },
  { year: 2022, attritionRate: 18.3, voluntaryRate: 10.9, involuntaryRate: 7.4 },
  { year: 2023, attritionRate: 17.2, voluntaryRate: 9.7, involuntaryRate: 7.5 },
  { year: 2024, attritionRate: 16.5, voluntaryRate: 8.9, involuntaryRate: 7.6 },
];

const overallAttritionRate = 16.5; // Company-wide attrition rate

const WorkforceRetention = () => {
  const navigate = useNavigate();
  const [showManagerAttrition, setShowManagerAttrition] = useState(false);
  const [showCompanyAttrition, setShowCompanyAttrition] = useState(false);
  const [showPerformanceAttrition, setShowPerformanceAttrition] = useState(false);
  const [showRaceAttrition, setShowRaceAttrition] = useState(false);
  const [showGenderAttrition, setShowGenderAttrition] = useState(false);

  const handleManagerCardClick = () => {
    setShowManagerAttrition(!showManagerAttrition);
    if (!showManagerAttrition) {
      setShowCompanyAttrition(false);
      setShowPerformanceAttrition(false);
      setShowRaceAttrition(false);
      setShowGenderAttrition(false);
    }
  };

  const handleCompanyCardClick = () => {
    setShowCompanyAttrition(!showCompanyAttrition);
    if (!showCompanyAttrition) {
      setShowManagerAttrition(false);
      setShowPerformanceAttrition(false);
      setShowRaceAttrition(false);
      setShowGenderAttrition(false);
    }
  };

  const handlePerformanceCardClick = () => {
    setShowPerformanceAttrition(!showPerformanceAttrition);
    if (!showPerformanceAttrition) {
      setShowManagerAttrition(false);
      setShowCompanyAttrition(false);
      setShowRaceAttrition(false);
      setShowGenderAttrition(false);
    }
  };

  const handleRaceCardClick = () => {
    setShowRaceAttrition(!showRaceAttrition);
    if (!showRaceAttrition) {
      setShowManagerAttrition(false);
      setShowCompanyAttrition(false);
      setShowPerformanceAttrition(false);
      setShowGenderAttrition(false);
    }
  };

  const handleGenderCardClick = () => {
    setShowGenderAttrition(!showGenderAttrition);
    if (!showGenderAttrition) {
      setShowManagerAttrition(false);
      setShowCompanyAttrition(false);
      setShowPerformanceAttrition(false);
      setShowRaceAttrition(false);
    }
  };

  // Create an array of tick values in increments of 2 up to 40
  const yAxisTicks = Array.from({ length: 21 }, (_, index) => index * 2);

  return (
    <div className="container p-4 mx-auto">
      <div className="mb-6">
        <BackButton fallbackPath="/reports/workforce-analytics" label="Back" />
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Workforce Retention</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card 
          className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square cursor-pointer hover:border-blue-600 transition-colors"
          onClick={handleCompanyCardClick}
        >
          <div className="flex flex-col items-center justify-center h-full p-4 text-center">
            <div className="flex items-center justify-center mb-3">
              <Users className="h-8 w-8 text-[#512888]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#512888] mb-3 px-4">Company Attrition</h3>
          </div>
        </Card>

        <Card 
          className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square cursor-pointer hover:border-blue-600 transition-colors"
          onClick={handleManagerCardClick}
        >
          <div className="flex flex-col items-center justify-center h-full p-4 text-center">
            <div className="flex items-center justify-center mb-3">
              <Briefcase className="h-8 w-8 text-[#512888]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#512888] mb-3 px-4">Attrition by Manager</h3>
          </div>
        </Card>

        <Card 
          className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square cursor-pointer hover:border-blue-600 transition-colors"
          onClick={handlePerformanceCardClick}
        >
          <div className="flex flex-col items-center justify-center h-full p-4 text-center">
            <div className="flex items-center justify-center mb-3">
              <Award className="h-8 w-8 text-[#512888]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#512888] mb-3 px-4">Attrition by Performance Score</h3>
          </div>
        </Card>

        <Card 
          className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square cursor-pointer hover:border-blue-600 transition-colors"
          onClick={handleRaceCardClick}
        >
          <div className="flex flex-col items-center justify-center h-full p-4 text-center">
            <div className="flex items-center justify-center mb-3">
              <BarChart2 className="h-8 w-8 text-[#512888]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#512888] mb-3 px-4">Attrition by Race</h3>
          </div>
        </Card>

        <Card 
          className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square cursor-pointer hover:border-blue-600 transition-colors"
          onClick={handleGenderCardClick}
        >
          <div className="flex flex-col items-center justify-center h-full p-4 text-center">
            <div className="flex items-center justify-center mb-3">
              <Users className="h-8 w-8 text-[#512888]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#512888] mb-3 px-4">Attrition by Gender</h3>
          </div>
        </Card>

        <Card className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square">
          <div className="flex flex-col items-center justify-center h-full p-4 text-center">
            <div className="flex items-center justify-center mb-3">
              <Badge className="h-8 w-8 text-[#512888]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#512888] mb-3 px-4">Attrition by Recruiter</h3>
          </div>
        </Card>
      </div>

      {/* Company Attrition Chart (shown conditionally) */}
      {showCompanyAttrition && (
        <Card className="p-6 bg-white border border-[#9b87f5] rounded-lg shadow-sm mb-8">
          <h3 className="text-xl font-medium text-[#512888] mb-4">Company Attrition Analysis</h3>
          
          {/* Overall attrition rate card */}
          <div className="p-4 text-center bg-white border border-[#9b87f5] rounded-lg shadow-sm mb-6">
            <h3 className="text-xl font-medium text-[#512888]">Overall Attrition Rate</h3>
            <p className="text-4xl font-bold mt-2 text-[#512888]">{overallAttritionRate}%</p>
            <p className="text-sm text-muted-foreground mt-1">Company-wide annual attrition</p>
          </div>
          
          <div className="bg-white rounded-lg w-full h-full">
            <ChartContainer config={{
              attrition: { color: "#9b87f5" } // Purple color that matches theme
            }}>
              <div className="h-[600px] w-full bg-white">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={departmentAttritionData} 
                    margin={{ top: 5, right: 30, left: 20, bottom: 100 }} // Increased bottom margin to accommodate labels
                    className="bg-white"
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis 
                      dataKey="department" 
                      axisLine={true}
                      tickLine={false}
                      tick={{ fill: '#512888', fontSize: 18, fontWeight: 700 }}
                      angle={-45}
                      textAnchor="end"
                      height={80} // Increased height for the x-axis
                      dy={20} // Move the labels down a bit
                    />
                    <YAxis
                      axisLine={true}
                      tickLine={false}
                      tick={{ fill: '#512888', fontSize: 18, fontWeight: 700 }}
                      tickFormatter={(value) => `${value}%`}
                      domain={[0, 40]}
                      ticks={yAxisTicks}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-white border border-[#9b87f5] shadow-md p-2 rounded">
                              <p className="font-medium">{data.department}</p>
                              <p className="text-[#512888] font-bold">{`${data.attritionRate}%`}</p>
                            </div>
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
          
          <div className="text-sm text-muted-foreground mt-4">
            <p>* Attrition rates calculated as the percentage of employees who left the company in the past 12 months.</p>
          </div>
        </Card>
      )}

      {/* Manager Attrition Chart (shown conditionally) */}
      {showManagerAttrition && (
        <Card className="p-6 bg-white border border-[#9b87f5] rounded-lg shadow-sm mb-8">
          <h3 className="text-xl font-medium text-[#512888] mb-4">Attrition by Manager & Department</h3>
          
          <div className="bg-white rounded-lg w-full h-full">
            <ChartContainer config={{
              engineering: { color: "#8B5CF6" },
              sales: { color: "#EC4899" },
              marketing: { color: "#F97316" },
              hr: { color: "#0EA5E9" },
              product: { color: "#10B981" },
              finance: { color: "#F59E0B" }
            }}>
              <div className="h-[600px] w-full bg-white">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={transformedData} 
                    margin={{ top: 5, right: 30, left: 20, bottom: 100 }}
                    className="bg-white"
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis 
                      dataKey="manager" 
                      axisLine={true}
                      tickLine={false}
                      tick={{ fill: '#512888', fontSize: 18, fontWeight: 700 }}
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      dy={20}
                    />
                    <YAxis
                      axisLine={true}
                      tickLine={false}
                      tick={{ fill: '#512888', fontSize: 18, fontWeight: 700 }}
                      tickFormatter={(value) => `${value}%`}
                      domain={[0, 40]}
                      ticks={Array.from({ length: 21 }, (_, index) => index * 2)}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload.filter(p => p.value !== null);
                          if (data.length === 0) return null;
                          
                          return (
                            <div className="bg-white border border-[#9b87f5] shadow-md p-3 rounded">
                              <p className="font-medium text-[#512888] mb-1">{data[0].payload.manager}</p>
                              {data.map((entry, index) => (
                                <p key={`item-${index}`} style={{ color: entry.color }} className="font-bold">
                                  {entry.name}: {entry.value}%
                                </p>
                              ))}
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    {departments.map((dept) => (
                      <Bar 
                        key={dept.name} 
                        dataKey={dept.name} 
                        stackId="a" 
                        fill={dept.color} 
                        radius={[4, 4, 0, 0]}
                      />
                    ))}
                    <Legend 
                      verticalAlign="bottom"
                      wrapperStyle={{ paddingTop: "20px" }}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ChartContainer>
          </div>
          
          <div className="text-sm text-muted-foreground mt-4">
            <p>* Attrition rates are calculated as the percentage of employees who left each manager's team in the past 12 months, broken down by department.</p>
            <p>* Managers only show data for departments they oversee.</p>
          </div>
        </Card>
      )}

      {/* Performance Score Attrition Chart (shown conditionally) */}
      {showPerformanceAttrition && (
        <Card className="p-6 bg-white border border-[#9b87f5] rounded-lg shadow-sm mb-8">
          <h3 className="text-xl font-medium text-[#512888] mb-4">Attrition by Performance Score</h3>
          
          <div className="bg-white rounded-lg w-full h-full mb-8">
            <ChartContainer config={{
              voluntary: { color: "#D0A3EE" },
              involuntary: { color: "#A3BAEE" }
            }}>
              <div className="h-[600px] w-full bg-white">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={performanceScoreData} 
                    margin={{ top: 5, right: 30, left: 20, bottom: 200 }}
                    className="bg-white"
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis 
                      dataKey="score" 
                      axisLine={true}
                      tickLine={false}
                      tick={{ fill: '#512888', fontSize: 18, fontWeight: 700 }}
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      dy={20}
                    />
                    <YAxis
                      axisLine={true}
                      tickLine={false}
                      tick={{ fill: '#512888', fontSize: 18, fontWeight: 700 }}
                      tickFormatter={(value) => `${value}%`}
                      domain={[0, 40]}
                      ticks={yAxisTicks}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-white border border-[#9b87f5] shadow-md p-3 rounded">
                              <p className="font-medium">{data.score}</p>
                              <p className="text-[#512888] font-bold">{`Total: ${data.attritionRate}%`}</p>
                              <p className="text-[#D0A3EE] font-bold">{`Voluntary: ${data.voluntaryRate}%`}</p>
                              <p className="text-[#A3BAEE] font-bold">{`Involuntary: ${data.involuntaryRate}%`}</p>
                              <p className="text-sm text-muted-foreground">{`${data.count} employees`}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar 
                      dataKey="voluntaryRate" 
                      name="Voluntary" 
                      stackId="a"
                      radius={[0, 0, 0, 0]} 
                      fill="#D0A3EE"
                    />
                    <Bar 
                      dataKey="involuntaryRate" 
                      name="Involuntary" 
                      stackId="a"
                      radius={[4, 4, 0, 0]} 
                      fill="#A3BAEE"
                      label={({ x, y, width, value }) => (
                        <text 
                          x={x + width / 2} 
                          y={y - 5} 
                          textAnchor="middle" 
                          fontSize={12}
                          fontWeight="bold"
                          fill="#512888"
                        >
                          {value}%
                        </text>
                      )}
                    />
                    <Legend 
                      verticalAlign="bottom"
                      wrapperStyle={{ paddingTop: "120px" }}
                      payload={[
                        { value: 'Voluntary Terminations', type: 'rect', color: '#D0A3EE' },
                        { value: 'Involuntary Terminations', type: 'rect', color: '#A3BAEE' }
                      ]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ChartContainer>
          </div>
          
          {/* Year-over-Year Attrition Line Chart */}
          <div className="mb-4">
            <h4 className="text-lg font-medium text-[#512888] mb-3">Year-over-Year Attrition Trends</h4>
          </div>
          
          <div className="bg-white rounded-lg w-full h-full">
            <ChartContainer config={{
              total: { color: "#512888" },
              voluntary: { color: "#D0A3EE" },
              involuntary: { color: "#A3BAEE" }
            }}>
              <div className="h-[400px] w-full bg-white">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart 
                    data={yearOverYearData} 
                    margin={{ top: 5, right: 30, left: 20, bottom: 30 }}
                    className="bg-white"
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis 
                      dataKey="year" 
                      axisLine={true}
                      tickLine={false}
                      tick={{ fill: '#512888', fontSize: 18, fontWeight: 700 }}
                    />
                    <YAxis
                      axisLine={true}
                      tickLine={false}
                      tick={{ fill: '#512888', fontSize: 18, fontWeight: 700 }}
                      tickFormatter={(value) => `${value}%`}
                      domain={[0, 25]}
                      ticks={[0, 5, 10, 15, 20, 25]}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-white border border-[#9b87f5] shadow-md p-3 rounded">
                              <p className="font-medium">{data.year}</p>
                              <p className="text-[#512888] font-bold">{`Total: ${data.attritionRate}%`}</p>
                              <p className="text-[#D0A3EE] font-bold">{`Voluntary: ${data.voluntaryRate}%`}</p>
                              <p className="text-[#A3BAEE] font-bold">{`Involuntary: ${data.involuntaryRate}%`}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="attritionRate" 
                      name="Total Attrition" 
                      stroke="#512888" 
                      strokeWidth={3}
                      dot={{ r: 6, fill: "#512888" }}
                      activeDot={{ r: 8 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="voluntaryRate" 
                      name="Voluntary" 
                      stroke="#D0A3EE" 
                      strokeWidth={3}
                      dot={{ r: 6, fill: "#D0A3EE" }}
                      activeDot={{ r: 8 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="involuntaryRate" 
                      name="Involuntary" 
                      stroke="#A3BAEE" 
                      strokeWidth={3}
                      dot={{ r: 6, fill: "#A3BAEE" }}
                      activeDot={{ r: 8 }}
                    />
                    <Legend
                      verticalAlign="bottom"
                      payload={[
                        { value: 'Total Attrition', type: 'line', color: '#512888' },
                        { value: 'Voluntary Terminations', type: 'line', color: '#D0A3EE' },
                        { value: 'Involuntary Terminations', type: 'line', color: '#A3BAEE' }
                      ]}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </ChartContainer>
          </div>
          
          <div className="text-sm text-muted-foreground mt-4">
            <p>* Attrition rates calculated as the percentage of employees who left the company in the past 12 months, by performance review score.</p>
            <p>* Performance scores are on a 1-5 scale, with 1 being poor performance and 5 being excellent.</p>
            <p>* Involuntary terminations are company-initiated, while voluntary terminations are employee-initiated.</p>
          </div>
        </Card>
      )}

      {/* Race Attrition Chart (shown conditionally) */}
      {showRaceAttrition && (
        <Card className="p-6 bg-white border border-[#9b87f5] rounded-lg shadow-sm mb-8">
          <h3 className="text-xl font-medium text-[#512888] mb-4">Attrition by Race</h3>
          
          <div className="bg-white rounded-lg w-full h-full mb-8">
            <ChartContainer config={{
              voluntary: { color: "#D0A3EE" },
              involuntary: { color: "#A3BAEE" }
            }}>
              <div className="h-[600px] w-full bg-white">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={raceAttritionData} 
                    margin={{ top: 5, right: 30, left: 20, bottom: 200 }}
                    className="bg-white"
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis 
                      dataKey="race" 
                      axisLine={true}
                      tickLine={false}
                      tick={{ fill: '#512888', fontSize: 18, fontWeight: 700 }}
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      dy={20}
                    />
                    <YAxis
                      axisLine={true}
                      tickLine={false}
                      tick={{ fill: '#512888', fontSize: 18, fontWeight: 700 }}
                      tickFormatter={(value) => `${value}%`}
                      domain={[0, 40]}
                      ticks={yAxisTicks}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-white border border-[#9b87f5] shadow-md p-3 rounded">
                              <p className="font-medium">{data.race}</p>
                              <p className="text-[#512888] font-bold">{`Total: ${data.attritionRate}%`}</p>
                              <p className="text-[#D0A3EE] font-bold">{`Voluntary: ${data.voluntaryRate}%`}</p>
                              <p className="text-[#A3BAEE] font-bold">{`Involuntary: ${data.involuntaryRate}%`}</p>
                              <p className="text-sm text-muted-foreground">{`${data.count} employees`}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar 
                      dataKey="voluntaryRate" 
                      name="Voluntary" 
                      stackId="a"
                      radius={[0, 0, 0, 0]} 
                      fill="#D0A3EE"
                    />
                    <Bar 
                      dataKey="involuntaryRate" 
                      name="Involuntary" 
                      stackId="a"
                      radius={[4, 4, 0, 0]} 
                      fill="#A3BAEE"
                      label={({ x, y, width, value }) => (
                        <text 
                          x={x + width / 2} 
                          y={y - 5} 
                          textAnchor="middle" 
                          fontSize={12}
                          fontWeight="bold"
                          fill="#512888"
                        >
                          {value}%
                        </text>
                      )}
                    />
                    <Legend 
                      verticalAlign="bottom"
                      wrapperStyle={{ paddingTop: "120px" }}
                      payload={[
                        { value: 'Voluntary Terminations', type: 'rect', color: '#D0A3EE' },
                        { value: 'Involuntary Terminations', type: 'rect', color: '#A3BAEE' }
                      ]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ChartContainer>
          </div>
          
          {/* Year-over-Year Race Attrition Line Chart */}
          <div className="mb-4">
            <h4 className="text-lg font-medium text-[#512888] mb-3">Year-over-Year Attrition by Race</h4>
          </div>
          
          <div className="bg-white rounded-lg w-full h-full">
            <ChartContainer config={{
              'White': { theme: { light: "#22C55E", dark: "#22C55E" } },
              'Asian': { theme: { light: "#3B82F6", dark: "#3B82F6" } },
              'Black': { theme: { light: "#8B5CF6", dark: "#8B5CF6" } },
              'Hispanic/Latino': { theme: { light: "#EC4899", dark: "#EC4899" } },
              'Other': { theme: { light: "#F59E0B", dark: "#F59E0B" } }
            }}>
              <div className="h-[400px] w-full bg-white">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart 
                    data={raceYearOverYearData} 
                    margin={{ top: 5, right: 30, left: 20, bottom: 30 }}
                    className="bg-white"
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis 
                      dataKey="year" 
                      axisLine={true}
                      tickLine={false}
                      tick={{ fill: '#512888', fontSize: 18, fontWeight: 700 }}
                    />
                    <YAxis
                      axisLine={true}
                      tickLine={false}
                      tick={{ fill: '#512888', fontSize: 18, fontWeight: 700 }}
                      tickFormatter={(value) => `${value}%`}
                      domain={[0, 25]}
                      ticks={[0, 5, 10, 15, 20, 25]}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          const year = data.year;
                          
                          // Group data by race
                          const raceGroups = {};
                          Object.keys(data).forEach(key => {
                            if (key !== 'year') {
                              const parts = key.split('-');
                              const race = parts[0];
                              const type = parts.length > 1 ? parts[1] : 'total';
                              
                              if (!raceGroups[race]) {
                                raceGroups[race] = { total: data[race] };
                              }
                              
                              if (type !== 'total') {
                                raceGroups[race][type] = data[key];
                              }
                            }
                          });
                          
                          return (
                            <div className="bg-white border border-[#9b87f5] shadow-md p-3 rounded max-w-xs">
                              <p className="font-medium text-center border-b pb-1 mb-2">{year}</p>
                              {Object.keys(raceGroups).map((race, idx) => {
                                // Find the matching race color
                                const raceColor = race === 'White' ? "#22C55E" :
                                              race === 'Asian' ? "#3B82F6" :
                                              race === 'Black' ? "#8B5CF6" :
                                              race === 'Hispanic/Latino' ? "#EC4899" : "#F59E0B";
                                
                                return (
                                  <div key={idx} className="mb-2 border-b pb-1 last:border-b-0">
                                    <p style={{color: raceColor}} className="font-bold">{race}</p>
                                    <p className="text-[#512888]">{`Total: ${raceGroups[race].total}%`}</p>
                                    {raceGroups[race].voluntary && (
                                      <p className="text-[#D0A3EE]">{`Voluntary: ${raceGroups[race].voluntary}%`}</p>
                                    )}
                                    {raceGroups[race].involuntary && (
                                      <p className="text-[#A3BAEE]">{`Involuntary: ${raceGroups[race].involuntary}%`}</p>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="White" 
                      name="White" 
                      stroke="#22C55E" 
                      strokeWidth={3}
                      dot={{ r: 5, fill: "#22C55E" }}
                      activeDot={{ r: 7 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="Asian" 
                      name="Asian" 
                      stroke="#3B82F6" 
                      strokeWidth={3}
                      dot={{ r: 5, fill: "#3B82F6" }}
                      activeDot={{ r: 7 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="Black" 
                      name="Black" 
                      stroke="#8B5CF6" 
                      strokeWidth={3}
                      dot={{ r: 5, fill: "#8B5CF6" }}
                      activeDot={{ r: 7 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="Hispanic/Latino" 
                      name="Hispanic/Latino" 
                      stroke="#EC4899" 
                      strokeWidth={3}
                      dot={{ r: 5, fill: "#EC4899" }}
                      activeDot={{ r: 7 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="Other" 
                      name="Other" 
                      stroke="#F59E0B" 
                      strokeWidth={3}
                      dot={{ r: 5, fill: "#F59E0B" }}
                      activeDot={{ r: 7 }}
                    />
                    <Legend />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </ChartContainer>
          </div>
          
          <div className="text-sm text-muted-foreground mt-4">
            <p>* Attrition rates calculated as the percentage of employees who left the company in the past 12 months, by race/ethnicity.</p>
            <p>* Involuntary terminations are company-initiated, while voluntary terminations are employee-initiated.</p>
          </div>
        </Card>
      )}

      {/* Gender Attrition Chart (shown conditionally) */}
      {showGenderAttrition && (
        <Card className="p-6 bg-white border border-[#9b87f5] rounded-lg shadow-sm mb-8">
          <h3 className="text-xl font-medium text-[#512888] mb-4">Attrition by Gender</h3>
          
          <div className="bg-white rounded-lg w-full h-full mb-8">
            <ChartContainer config={{
              voluntary: { color: "#D0A3EE" },
              involuntary: { color: "#A3BAEE" }
            }}>
              <div className="h-[600px] w-full bg-white">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={genderAttritionData} 
                    margin={{ top: 5, right: 30, left: 20, bottom: 200 }}
                    className="bg-white"
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis 
                      dataKey="gender" 
                      axisLine={true}
                      tickLine={false}
                      tick={{ fill: '#512888', fontSize: 18, fontWeight: 700 }}
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      dy={20}
                    />
                    <YAxis
                      axisLine={true}
                      tickLine={false}
                      tick={{ fill: '#512888', fontSize: 18, fontWeight: 700 }}
                      tickFormatter={(value) => `${value}%`}
                      domain={[0, 40]}
                      ticks={yAxisTicks}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-white border border-[#9b87f5] shadow-md p-3 rounded">
                              <p className="font-medium">{data.gender}</p>
                              <p className="text-[#512888] font-bold">{`Total: ${data.attritionRate}%`}</p>
                              <p className="text-[#D0A3EE] font-bold">{`Voluntary: ${data.voluntaryRate}%`}</p>
                              <p className="text-[#A3BAEE] font-bold">{`Involuntary: ${data.involuntaryRate}%`}</p>
                              <p className="text-sm text-muted-foreground">{`${data.count} employees`}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar 
                      dataKey="voluntaryRate" 
                      name="Voluntary" 
                      stackId="a"
                      radius={[0, 0, 0, 0]} 
                      fill="#D0A3EE"
                    />
                    <Bar 
                      dataKey="involuntaryRate" 
                      name="Involuntary" 
                      stackId="a"
                      radius={[4, 4, 0, 0]} 
                      fill="#A3BAEE"
                      label={({ x, y, width, value }) => (
                        <text 
                          x={x + width / 2} 
                          y={y - 5} 
                          textAnchor="middle" 
                          fontSize={12}
                          fontWeight="bold"
                          fill="#512888"
                        >
                          {value}%
                        </text>
                      )}
                    />
                    <Legend 
                      verticalAlign="bottom"
                      wrapperStyle={{ paddingTop: "120px" }}
                      payload={[
                        { value: 'Voluntary Terminations', type: 'rect', color: '#D0A3EE' },
                        { value: 'Involuntary Terminations', type: 'rect', color: '#A3BAEE' }
                      ]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ChartContainer>
          </div>
          
          {/* Year-over-Year Gender Attrition Line Chart */}
          <div className="mb-4">
            <h4 className="text-lg font-medium text-[#512888] mb-3">Year-over-Year Attrition by Gender</h4>
          </div>
          
          <div className="bg-white rounded-lg w-full h-full">
            <ChartContainer config={{
              'Male': { theme: { light: "#0067D9", dark: "#0067D9" } },
              'Female': { theme: { light: "#FF6B8A", dark: "#FF6B8A" } },
              'Nonbinary': { theme: { light: "#8B5CF6", dark: "#8B5CF6" } }
            }}>
              <div className="h-[400px] w-full bg-white">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart 
                    data={genderYearOverYearData} 
                    margin={{ top: 5, right: 30, left: 20, bottom: 30 }}
                    className="bg-white"
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis 
                      dataKey="year" 
                      axisLine={true}
                      tickLine={false}
                      tick={{ fill: '#512888', fontSize: 18, fontWeight: 700 }}
                    />
                    <YAxis
                      axisLine={true}
                      tickLine={false}
                      tick={{ fill: '#512888', fontSize: 18, fontWeight: 700 }}
                      tickFormatter={(value) => `${value}%`}
                      domain={[0, 25]}
                      ticks={[0, 5, 10, 15, 20, 25]}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          const year = data.year;
                          
                          // Group data by gender
                          const genderGroups = {};
                          Object.keys(data).forEach(key => {
                            if (key !== 'year') {
                              const parts = key.split('-');
                              const gender = parts[0];
                              const type = parts.length > 1 ? parts[1] : 'total';
                              
                              if (!genderGroups[gender]) {
                                genderGroups[gender] = { total: data[gender] };
                              }
                              
                              if (type !== 'total') {
                                genderGroups[gender][type] = data[key];
                              }
                            }
                          });
                          
                          return (
                            <div className="bg-white border border-[#9b87f5] shadow-md p-3 rounded max-w-xs">
                              <p className="font-medium text-center border-b pb-1 mb-2">{year}</p>
                              {Object.keys(genderGroups).map((gender, idx) => {
                                // Find the matching gender color
                                const genderColor = gender === 'Male' ? "#0067D9" :
                                              gender === 'Female' ? "#FF6B8A" : "#8B5CF6";
                                
                                return (
                                  <div key={idx} className="mb-2 border-b pb-1 last:border-b-0">
                                    <p style={{color: genderColor}} className="font-bold">{gender}</p>
                                    <p className="text-[#512888]">{`Total: ${genderGroups[gender].total}%`}</p>
                                    {genderGroups[gender].voluntary && (
                                      <p className="text-[#D0A3EE]">{`Voluntary: ${genderGroups[gender].voluntary}%`}</p>
                                    )}
                                    {genderGroups[gender].involuntary && (
                                      <p className="text-[#A3BAEE]">{`Involuntary: ${genderGroups[gender].involuntary}%`}</p>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="Male" 
                      name="Male" 
                      stroke="#0067D9" 
                      strokeWidth={3}
                      dot={{ r: 5, fill: "#0067D9" }}
                      activeDot={{ r: 7 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="Female" 
                      name="Female" 
                      stroke="#FF6B8A" 
                      strokeWidth={3}
                      dot={{ r: 5, fill: "#FF6B8A" }}
                      activeDot={{ r: 7 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="Nonbinary" 
                      name="Nonbinary" 
                      stroke="#8B5CF6" 
                      strokeWidth={3}
                      dot={{ r: 5, fill: "#8B5CF6" }}
                      activeDot={{ r: 7 }}
                    />
                    <Legend />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </ChartContainer>
          </div>
          
          <div className="text-sm text-muted-foreground mt-4">
            <p>* Attrition rates calculated as the percentage of employees who left the company in the past 12 months, by gender.</p>
            <p>* Involuntary terminations are company-initiated, while voluntary terminations are employee-initiated.</p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default WorkforceRetention;
