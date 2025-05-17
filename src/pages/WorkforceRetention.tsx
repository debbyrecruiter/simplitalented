import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BackButton } from "@/components/ui/back-button";
import { Users, Award, BarChart2, Briefcase, Badge, TrendingDown, UserX } from "lucide-react";
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
  genderYearOverYearData,
  recruiterAttritionData,
  recruiterYearOverYearData,
  departmentAttritionData,
  departmentYearOverYearData
} from "@/data/demographicsData";

// Reorganized data structure to group managers by departments
const managersByDepartmentData = [
  {
    department: "Engineering",
    managers: [
      { name: "Sarah Johnson", attrition: 15 },
      { name: "Michael Chen", attrition: 20 },
      { name: "David Kim", attrition: 10 }
    ]
  },
  {
    department: "Sales",
    managers: [
      { name: "Michael Chen", attrition: 22 },
      { name: "Jennifer Wong", attrition: 27 }
    ]
  },
  {
    department: "Marketing",
    managers: [
      { name: "Priya Patel", attrition: 18 },
      { name: "Jennifer Wong", attrition: 12 }
    ]
  },
  {
    department: "HR",
    managers: [
      { name: "Priya Patel", attrition: 14 }
    ]
  },
  {
    department: "Product",
    managers: [
      { name: "Sarah Johnson", attrition: 12 },
      { name: "David Kim", attrition: 19 }
    ]
  },
  {
    department: "Finance",
    managers: [
      { name: "David Kim", attrition: 11 }
    ]
  }
];

// Transform data for the horizontal bar chart
const prepareManagerDepartmentData = () => {
  const result = [];
  
  managersByDepartmentData.forEach(dept => {
    // Add the department as a category
    result.push({
      name: dept.department,
      isGroup: true,
      attrition: null
    });
    
    // Add managers under their department
    dept.managers.forEach(manager => {
      result.push({
        name: manager.name,
        parent: dept.department,
        attrition: manager.attrition
      });
    });
  });
  
  return result;
};

// Mock data for manager attrition rates (kept for backward compatibility)
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

// Departments and their colors (kept for backward compatibility)
const departments = [
  { name: "Engineering", color: "#8B5CF6" },
  { name: "Sales", color: "#EC4899" },
  { name: "Marketing", color: "#F97316" },
  { name: "HR", color: "#0EA5E9" },
  { name: "Product", color: "#10B981" },
  { name: "Finance", color: "#F59E0B" }
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
  }
];

// Year-over-year attrition data
const yearOverYearData = [
  { year: 2020, attritionRate: 19.2, voluntaryRate: 12.1, involuntaryRate: 7.1 },
  { year: 2021, attritionRate: 17.8, voluntaryRate: 10.5, involuntaryRate: 7.3 },
  { year: 2022, attritionRate: 18.3, voluntaryRate: 10.9, involuntaryRate: 7.4 },
  { year: 2023, attritionRate: 17.2, voluntaryRate: 9.7, involuntaryRate: 7.5 },
  { year: 2024, attritionRate: 16.5, voluntaryRate: 8.9, involuntaryRate: 7.6 }
];

const overallAttritionRate = 16.5; // Company-wide attrition rate

// New company-wide attrition data by department
const companyAttritionData = [
  { department: "Engineering", attritionRate: 18.7, industryAverage: 15.2, difference: 3.5 },
  { department: "Sales", attritionRate: 22.3, industryAverage: 20.1, difference: 2.2 },
  { department: "Marketing", attritionRate: 14.9, industryAverage: 16.8, difference: -1.9 },
  { department: "HR", attritionRate: 11.2, industryAverage: 12.5, difference: -1.3 },
  { department: "Product", attritionRate: 17.6, industryAverage: 14.7, difference: 2.9 },
  { department: "Finance", attritionRate: 13.5, industryAverage: 11.9, difference: 1.6 }
];

// Regrettable departures data
const regrettableDeparturesData = [
  { month: "Jan", count: 3, regrettable: 2, percentage: 66.7 },
  { month: "Feb", count: 5, regrettable: 3, percentage: 60.0 },
  { month: "Mar", count: 4, regrettable: 3, percentage: 75.0 },
  { month: "Apr", count: 7, regrettable: 4, percentage: 57.1 },
  { month: "May", count: 6, regrettable: 5, percentage: 83.3 },
  { month: "Jun", count: 4, regrettable: 2, percentage: 50.0 },
  { month: "Jul", count: 8, regrettable: 5, percentage: 62.5 },
  { month: "Aug", count: 5, regrettable: 4, percentage: 80.0 },
  { month: "Sep", count: 6, regrettable: 3, percentage: 50.0 },
  { month: "Oct", count: 7, regrettable: 5, percentage: 71.4 },
  { month: "Nov", count: 4, regrettable: 3, percentage: 75.0 },
  { month: "Dec", count: 3, regrettable: 2, percentage: 66.7 }
];

// Exit interview reasons data for regrettable departures
const exitReasonData = [
  { reason: "Better Compensation", percentage: 32 },
  { reason: "Career Growth", percentage: 28 },
  { reason: "Work-Life Balance", percentage: 18 },
  { reason: "Management Issues", percentage: 12 },
  { reason: "Company Culture", percentage: 7 },
  { reason: "Other", percentage: 3 }
];

const WorkforceRetention = () => {
  const navigate = useNavigate();
  const [showManagerAttrition, setShowManagerAttrition] = useState(false);
  const [showCompanyAttrition, setShowCompanyAttrition] = useState(false);
  const [showPerformanceAttrition, setShowPerformanceAttrition] = useState(false);
  const [showRaceAttrition, setShowRaceAttrition] = useState(false);
  const [showGenderAttrition, setShowGenderAttrition] = useState(false);
  const [showRecruiterAttrition, setShowRecruiterAttrition] = useState(false);
  const [showRegrettableDepartures, setShowRegrettableDepartures] = useState(false);

  const handleManagerCardClick = () => {
    setShowManagerAttrition(!showManagerAttrition);
    if (!showManagerAttrition) {
      setShowCompanyAttrition(false);
      setShowPerformanceAttrition(false);
      setShowRaceAttrition(false);
      setShowGenderAttrition(false);
      setShowRecruiterAttrition(false);
      setShowRegrettableDepartures(false);
    }
  };

  const handleCompanyCardClick = () => {
    setShowCompanyAttrition(!showCompanyAttrition);
    if (!showCompanyAttrition) {
      setShowManagerAttrition(false);
      setShowPerformanceAttrition(false);
      setShowRaceAttrition(false);
      setShowGenderAttrition(false);
      setShowRecruiterAttrition(false);
      setShowRegrettableDepartures(false);
    }
  };

  const handlePerformanceCardClick = () => {
    setShowPerformanceAttrition(!showPerformanceAttrition);
    if (!showPerformanceAttrition) {
      setShowManagerAttrition(false);
      setShowCompanyAttrition(false);
      setShowRaceAttrition(false);
      setShowGenderAttrition(false);
      setShowRecruiterAttrition(false);
      setShowRegrettableDepartures(false);
    }
  };

  const handleRaceCardClick = () => {
    setShowRaceAttrition(!showRaceAttrition);
    if (!showRaceAttrition) {
      setShowManagerAttrition(false);
      setShowCompanyAttrition(false);
      setShowPerformanceAttrition(false);
      setShowGenderAttrition(false);
      setShowRecruiterAttrition(false);
      setShowRegrettableDepartures(false);
    }
  };

  const handleGenderCardClick = () => {
    setShowGenderAttrition(!showGenderAttrition);
    if (!showGenderAttrition) {
      setShowManagerAttrition(false);
      setShowCompanyAttrition(false);
      setShowPerformanceAttrition(false);
      setShowRaceAttrition(false);
      setShowRecruiterAttrition(false);
      setShowRegrettableDepartures(false);
    }
  };

  const handleRecruiterCardClick = () => {
    setShowRecruiterAttrition(!showRecruiterAttrition);
    if (!showRecruiterAttrition) {
      setShowManagerAttrition(false);
      setShowCompanyAttrition(false);
      setShowPerformanceAttrition(false);
      setShowRaceAttrition(false);
      setShowGenderAttrition(false);
      setShowRegrettableDepartures(false);
    }
  };

  const handleRegrettableDeparturesClick = () => {
    setShowRegrettableDepartures(!showRegrettableDepartures);
    if (!showRegrettableDepartures) {
      setShowManagerAttrition(false);
      setShowCompanyAttrition(false);
      setShowPerformanceAttrition(false);
      setShowRaceAttrition(false);
      setShowGenderAttrition(false);
      setShowRecruiterAttrition(false);
    }
  };

  // Create an array of tick values in increments of 5 up to 40 for X axis
  const xAxisTicks = Array.from({ length: 9 }, (_, index) => index * 5);

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
              <TrendingDown className="h-8 w-8 text-[#512888]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#512888] mb-3 px-4">Companywide Attrition</h3>
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

        <Card 
          className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square cursor-pointer hover:border-blue-600 transition-colors"
          onClick={handleRecruiterCardClick}
        >
          <div className="flex flex-col items-center justify-center h-full p-4 text-center">
            <div className="flex items-center justify-center mb-3">
              <Badge className="h-8 w-8 text-[#512888]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#512888] mb-3 px-4">Attrition by Recruiter</h3>
          </div>
        </Card>

        {/* New Regrettable Departures Card */}
        <Card 
          className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square cursor-pointer hover:border-blue-600 transition-colors"
          onClick={handleRegrettableDeparturesClick}
        >
          <div className="flex flex-col items-center justify-center h-full p-4 text-center">
            <div className="flex items-center justify-center mb-3">
              <UserX className="h-8 w-8 text-[#512888]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#512888] mb-3 px-4">Regrettable Departures</h3>
          </div>
        </Card>
      </div>

      {/* Companywide Attrition Card (shown conditionally) */}
      {showCompanyAttrition && (
        <Card className="p-6 bg-white border border-[#9b87f5] rounded-lg shadow-sm mb-8">
          <h3 className="text-xl font-medium text-[#512888] mb-4">Companywide Attrition</h3>
          
          <div className="bg-white rounded-lg w-full h-full mb-8">
            <div className="mb-6 flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-sm text-muted-foreground">Current Company-wide Attrition Rate</p>
                <p className="text-4xl font-bold text-[#512888]">{overallAttritionRate}%</p>
                <p className="text-sm text-muted-foreground mt-1">Last 12 months</p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-sm text-muted-foreground">Industry Average</p>
                <p className="text-3xl font-semibold text-[#6E59A5]">14.8%</p>
                <p className="text-sm text-red-500 font-medium mt-1">+1.7% above average</p>
              </div>
            </div>
          </div>

          {/* Department Attrition Chart */}
          <div className="mb-4">
            <h4 className="text-lg font-medium text-[#512888] mb-3">Attrition by Department</h4>
          </div>
          
          <div className="bg-white rounded-lg w-full h-full mb-8">
            <ChartContainer config={{
              voluntary: { color: "#9b87f5" },
              involuntary: { color: "#6E59A5" }
            }}>
              <div className="h-[600px] w-full bg-white">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={departmentAttritionData} 
                    margin={{ top: 5, right: 30, left: 20, bottom: 200 }}
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
                          const data = payload[0].payload;
                          return (
                            <div className="bg-white border border-[#9b87f5] shadow-md p-3 rounded">
                              <p className="font-medium">{data.department}</p>
                              <p className="text-[#512888] font-bold">{`Total: ${data.attritionRate}%`}</p>
                              <p className="text-[#9b87f5] font-bold">{`Voluntary: ${data.voluntaryRate}%`}</p>
                              <p className="text-[#6E59A5] font-bold">{`Involuntary: ${data.involuntaryRate}%`}</p>
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
                      fill="#9b87f5"
                    />
                    <Bar 
                      dataKey="involuntaryRate" 
                      name="Involuntary" 
                      stackId="a"
                      radius={[4, 4, 0, 0]} 
                      fill="#6E59A5"
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
                        { value: 'Voluntary Terminations', type: 'rect', color: '#9b87f5' },
                        { value: 'Involuntary Terminations', type: 'rect', color: '#6E59A5' }
                      ]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ChartContainer>
          </div>
          
          {/* Year-over-Year Department Attrition Line Chart */}
          <div className="mb-4">
            <h4 className="text-lg font-medium text-[#512888] mb-3">Year-over-Year Attrition by Department</h4>
          </div>
          
          <div className="bg-white rounded-lg w-full h-full">
            <ChartContainer config={{
              'Engineering': { theme: { light: "#8B5CF6", dark: "#8B5CF6" } },
              'Sales': { theme: { light: "#9b87f5", dark: "#9b87f5" } },
              'Marketing': { theme: { light: "#7E69AB", dark: "#7E69AB" } },
              'HR': { theme: { light: "#6E59A5", dark: "#6E59A5" } },
              'Product': { theme: { light: "#D6BCFA", dark: "#D6BCFA" } },
              'Finance': { theme: { light: "#E5DEFF", dark: "#E5DEFF" } }
            }}>
              <div className="h-[400px] w-full bg-white">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart 
                    data={departmentYearOverYearData} 
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
                    <ChartTooltip />
                    <Line 
                      type="monotone" 
                      dataKey="Engineering" 
                      stroke="#9b87f5" 
                      strokeWidth={3}
                      dot={{ r: 6, fill: "#9b87f5" }}
                      activeDot={{ r: 8 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="Sales" 
                      stroke="#9b87f5" 
                      strokeWidth={3}
                      dot={{ r: 6, fill: "#9b87f5" }}
                      activeDot={{ r: 8 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="Marketing" 
                      stroke="#9b87f5" 
                      strokeWidth={3}
                      dot={{ r: 6, fill: "#9b87f5" }}
                      activeDot={{ r: 8 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="HR" 
                      stroke="#9b87f5" 
                      strokeWidth={3}
                      dot={{ r: 6, fill: "#9b87f5" }}
                      activeDot={{ r: 8 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="Product" 
                      stroke="#9b87f5" 
                      strokeWidth={3}
                      dot={{ r: 6, fill: "#9b87f5" }}
                      activeDot={{ r: 8 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="Finance" 
                      stroke="#9b87f5" 
                      strokeWidth={3}
                      dot={{ r: 6, fill: "#9b87f5" }}
                      activeDot={{ r: 8 }}
                    />
                    <Legend
                      verticalAlign="bottom"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </ChartContainer>
          </div>
          
          <div className="text-sm text-muted-foreground mt-4">
            <p>* Attrition rates calculated as the percentage of employees who left the company in the past 12 months</p>
            <p>* Industry averages based on benchmarking data from similar companies in our sector</p>
            <p>* Voluntary terminations are employee-initiated, while involuntary terminations are company-initiated</p>
          </div>
        </Card>
      )}

      {/* Manager Attrition Chart (shown conditionally) */}
      {showManagerAttrition && (
        <Card className="p-6 bg-white border border-[#9b87f5] rounded-lg shadow-sm mb-8">
          <h3 className="text-xl font-medium text-[#512888] mb-4">Attrition by Manager & Department</h3>
          
          <div className="bg-white rounded-lg w-full h-full">
            <ChartContainer config={{
              engineering: { color: "#9b87f5" },
              sales: { color: "#9b87f5" },
              marketing: { color: "#9b87f5" },
              hr: { color: "#9b87f5" },
              product: { color: "#9b87f5" },
              finance: { color: "#9b87f5" }
            }}>
              <div className="h-[600px] w-full bg-white">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={prepareManagerDepartmentData()} 
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 150, bottom: 20 }}
                    className="bg-white"
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                    <YAxis 
                      dataKey="name" 
                      type="category"
                      axisLine={true}
                      tickLine={false}
                      tick={props => {
                        const { x, y, payload } = props;
                        const item = prepareManagerDepartmentData().find(d => d.name === payload.value);
                        
                        return (
                          <text 
                            x={x} 
                            y={y} 
                            dy={4} 
                            textAnchor="end" 
                            fill={item?.isGroup ? '#512888' : '#666'} 
                            fontWeight={item?.isGroup ? 700 : 400}
                            fontSize={item?.isGroup ? 16 : 14}
                          >
                            {item?.isGroup ? payload.value : `  ${payload.value}`}
                          </text>
                        );
                      }}
                      width={140}
                    />
                    <XAxis
                      type="number"
                      axisLine={true}
                      tickLine={false}
                      tick={{ fill: '#512888', fontSize: 14, fontWeight: 700 }}
                      tickFormatter={(value) => `${value}%`}
                      domain={[0, 40]}
                      ticks={xAxisTicks}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          if (!data.attrition) return null;
                          
                          return (
                            <div className="bg-white border border-[#9b87f5] shadow-md p-3 rounded">
                              <p className="font-medium">{data.name}</p>
                              <p className="font-medium text-[#512888]">{data.parent}</p>
                              <p className="font-bold text-[#512888]">{`Attrition: ${data.attrition}%`}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar 
                      dataKey="attrition" 
                      fill="#9b87f5" 
                      radius={[0, 4, 4, 0]}
                      label={({ x, y, width, value }) => {
                        if (!value) return null;
                        return (
                          <text 
                            x={x + width + 5} 
                            y={y + 4} 
                            textAnchor="start" 
                            fontSize={12}
                            fontWeight="bold"
                            fill="#512888"
                          >
                            {value}%
                          </text>
                        );
                      }}
                    >
                      {prepareManagerDepartmentData().map((entry, index) => {
                        if (!entry.attrition) return null;
                        
                        // Find the department color
                        const dept = managersByDepartmentData.find(d => d.department === entry.parent);
                        const deptIndex = departments.findIndex(d => d.name === entry.parent);
                        const color = "#9b87f5"; // Changed all colors to purple
                        
                        return <Cell key={`cell-${index}`} fill={color} />;
                      })}
                    </Bar>
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
              voluntary: { color: "#9b87f5" },
              involuntary: { color: "#6E59A5" }
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
                      ticks={xAxisTicks}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-white border border-[#9b87f5] shadow-md p-3 rounded">
                              <p className="font-medium">{data.score}</p>
                              <p className="text-[#512888] font-bold">{`Total: ${data.attritionRate}%`}</p>
                              <p className="text-[#9b87f5] font-bold">{`Voluntary: ${data.voluntaryRate}%`}</p>
                              <p className="text-[#6E59A5] font-bold">{`Involuntary: ${data.involuntaryRate}%`}</p>
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
                      fill="#9b87f5"
                    />
                    <Bar 
                      dataKey="involuntaryRate" 
                      name="Involuntary" 
                      stackId="a"
                      radius={[4, 4, 0, 0]} 
                      fill="#6E59A5"
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
                        { value: 'Voluntary Terminations', type: 'rect', color: '#9b87f5' },
                        { value: 'Involuntary Terminations', type: 'rect', color: '#6E59A5' }
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
              voluntary: { color: "#9b87f5" },
              involuntary: { color: "#6E59A5" }
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
                              <p className="text-[#9b87f5] font-bold">{`Voluntary: ${data.voluntaryRate}%`}</p>
                              <p className="text-[#6E59A5] font-bold">{`Involuntary: ${data.involuntaryRate}%`}</p>
                              <p className="text-sm text-muted-foreground">{`${data.count} employees`}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="total" 
                      stroke="#512888" 
                      strokeWidth={3}
                      dot={{ r: 6, fill: "#512888" }}
                      activeDot={{ r: 8 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="voluntary" 
                      stroke="#9b87f5" 
                      strokeWidth={3}
                      dot={{ r: 6, fill: "#9b87f5" }}
                      activeDot={{ r: 8 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="involuntary" 
                      stroke="#6E59A5" 
                      strokeWidth={3}
                      dot={{ r: 6, fill: "#6E59A5" }}
                      activeDot={{ r: 8 }}
                    />
                    <Legend
                      verticalAlign="bottom"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </ChartContainer>
          </div>
          
          <div className="text-sm text-muted-foreground mt-4">
            <p>* Attrition rates calculated as the percentage of employees who left the company in the past 12 months</p>
            <p>* Industry averages based on benchmarking data from similar companies in our sector</p>
            <p>* Voluntary terminations are employee-initiated, while involuntary terminations are company-initiated</p>
          </div>
        </Card>
      )}

      {/* Race Attrition Chart (shown conditionally) */}
      {showRaceAttrition && (
        <Card className="p-6 bg-white border border-[#9b87f5] rounded-lg shadow-sm mb-8">
          <h3 className="text-xl font-medium text-[#512888] mb-4">Attrition by Race</h3>
          
          <div className="bg-white rounded-lg w-full h-full mb-8">
            <ChartContainer config={{
              voluntary: { color: "#9b87f5" },
              involuntary: { color: "#6E59A5" }
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
                      ticks={xAxisTicks}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-white border border-[#9b87f5] shadow-md p-3 rounded">
                              <p className="font-medium">{data.race}</p>
                              <p className="text-[#512888] font-bold">{`Total: ${data.attritionRate}%`}</p>
                              <p className="text-[#9b87f5] font-bold">{`Voluntary: ${data.voluntaryRate}%`}</p>
                              <p className="text-[#6E59A5] font-bold">{`Involuntary: ${data.involuntaryRate}%`}</p>
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
                      fill="#9b87f5"
                    />
                    <Bar 
                      dataKey="involuntaryRate" 
                      name="Involuntary" 
                      stackId="a"
                      radius={[4, 4, 0, 0]} 
                      fill="#6E59A5"
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
                        { value: 'Voluntary Terminations', type: 'rect', color: '#9b87f5' },
                        { value: 'Involuntary Terminations', type: 'rect', color: '#6E59A5' }
                      ]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ChartContainer>
          </div>
          
          <div className="text-sm text-muted-foreground mt-4">
            <p>* Attrition rates calculated as the percentage of employees who left the company in the past 12 months</p>
            <p>* Industry averages based on benchmarking data from similar companies in our sector</p>
            <p>* Voluntary terminations are employee-initiated, while involuntary terminations are company-initiated</p>
          </div>
        </Card>
      )}

      {/* Gender Attrition Chart (shown conditionally) */}
      {showGenderAttrition && (
        <Card className="p-6 bg-white border border-[#9b87f5] rounded-lg shadow-sm mb-8">
          <h3 className="text-xl font-medium text-[#512888] mb-4">Attrition by Gender</h3>
          
          <div className="bg-white rounded-lg w-full h-full mb-8">
            <ChartContainer config={{
              voluntary: { color: "#9b87f5" },
              involuntary: { color: "#6E59A5" }
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
                      ticks={xAxisTicks}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-white border border-[#9b87f5] shadow-md p-3 rounded">
                              <p className="font-medium">{data.gender}</p>
                              <p className="text-[#512888] font-bold">{`Total: ${data.attritionRate}%`}</p>
                              <p className="text-[#9b87f5] font-bold">{`Voluntary: ${data.voluntaryRate}%`}</p>
                              <p className="text-[#6E59A5] font-bold">{`Involuntary: ${data.involuntaryRate}%`}</p>
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
                      fill="#9b87f5"
                    />
                    <Bar 
                      dataKey="involuntaryRate" 
                      name="Involuntary" 
                      stackId="a"
                      radius={[4, 4, 0, 0]} 
                      fill="#6E59A5"
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
                        { value: 'Voluntary Terminations', type: 'rect', color: '#9b87f5' },
                        { value: 'Involuntary Terminations', type: 'rect', color: '#6E59A5' }
                      ]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ChartContainer>
          </div>
          
          <div className="text-sm text-muted-foreground mt-4">
            <p>* Attrition rates calculated as the percentage of employees who left the company in the past 12 months</p>
            <p>* Industry averages based on benchmarking data from similar companies in our sector</p>
            <p>* Voluntary terminations are employee-initiated, while involuntary terminations are company-initiated</p>
          </div>
        </Card>
      )}

      {/* Recruiter Attrition Chart (shown conditionally) */}
      {showRecruiterAttrition && (
        <Card className="p-6 bg-white border border-[#9b87f5] rounded-lg shadow-sm mb-8">
          <h3 className="text-xl font-medium text-[#512888] mb-4">Attrition by Recruiter</h3>
          
          <div className="bg-white rounded-lg w-full h-full mb-8">
            <ChartContainer config={{
              voluntary: { color: "#9b87f5" },
              involuntary: { color: "#6E59A5" }
            }}>
              <div className="h-[600px] w-full bg-white">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={recruiterAttritionData} 
                    margin={{ top: 5, right: 30, left: 20, bottom: 200 }}
                    className="bg-white"
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis 
                      dataKey="recruiter" 
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
                      ticks={xAxisTicks}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-white border border-[#9b87f5] shadow-md p-3 rounded">
                              <p className="font-medium">{data.recruiter}</p>
                              <p className="text-[#512888] font-bold">{`Total: ${data.attritionRate}%`}</p>
                              <p className="text-[#9b87f5] font-bold">{`Voluntary: ${data.voluntaryRate}%`}</p>
                              <p className="text-[#6E59A5] font-bold">{`Involuntary: ${data.involuntaryRate}%`}</p>
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
                      fill="#9b87f5"
                    />
                    <Bar 
                      dataKey="involuntaryRate" 
                      name="Involuntary" 
                      stackId="a"
                      radius={[4, 4, 0, 0]} 
                      fill="#6E59A5"
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
                        { value: 'Voluntary Terminations', type: 'rect', color: '#9b87f5' },
                        { value: 'Involuntary Terminations', type: 'rect', color: '#6E59A5' }
                      ]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ChartContainer>
          </div>
          
          <div className="text-sm text-muted-foreground mt-4">
            <p>* Attrition rates calculated as the percentage of employees who left the company in the past 12 months</p>
            <p>* Industry averages based on benchmarking data from similar companies in our sector</p>
            <p>* Voluntary terminations are employee-initiated, while involuntary terminations are company-initiated</p>
          </div>
        </Card>
      )}

      {/* Regrettable Departures Chart (shown conditionally) */}
      {showRegrettableDepartures && (
        <Card className="p-6 bg-white border border-[#9b87f5] rounded-lg shadow-sm mb-8">
          <h3 className="text-xl font-medium text-[#512888] mb-4">Regrettable Departures Analysis</h3>
          
          <div className="bg-white rounded-lg w-full h-full mb-8">
            <div className="mb-6 flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-sm text-muted-foreground">Average Regrettable Departure Rate</p>
                <p className="text-4xl font-bold text-[#512888]">67.5%</p>
                <p className="text-sm text-muted-foreground mt-1">of total departures</p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-sm text-muted-foreground">Industry Average</p>
                <p className="text-3xl font-semibold text-[#6E59A5]">54.2%</p>
                <p className="text-sm text-red-500 font-medium mt-1">+13.3% above average</p>
              </div>
            </div>
          </div>

          {/* Monthly Regrettable Departures Chart */}
          <div className="mb-4">
            <h4 className="text-lg font-medium text-[#512888] mb-3">Monthly Regrettable Departures</h4>
          </div>
          
          <div className="bg-white rounded-lg w-full h-full mb-8">
            <ChartContainer config={{
              total: { color: "#6E59A5" },
              regrettable: { color: "#9b87f5" }
            }}>
              <div className="h-[400px] w-full bg-white">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart 
                    data={regrettableDeparturesData} 
                    margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
                    className="bg-white"
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis 
                      dataKey="month" 
                      axisLine={true}
                      tickLine={false}
                      tick={{ fill: '#512888', fontSize: 14, fontWeight: 600 }}
                    />
                    <YAxis
                      yAxisId="left"
                      axisLine={true}
                      tickLine={false}
                      tick={{ fill: '#512888', fontSize: 14, fontWeight: 600 }}
                      domain={[0, 10]}
                      ticks={[0, 2, 4, 6, 8, 10]}
                      label={{ value: 'Number of Departures', angle: -90, position: 'insideLeft', fill: '#512888', fontSize: 12, offset: 5 }}
                    />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      axisLine={true}
                      tickLine={false}
                      tick={{ fill: '#512888', fontSize: 14, fontWeight: 600 }}
                      domain={[0, 100]}
                      ticks={[0, 20, 40, 60, 80, 100]}
                      tickFormatter={(value) => `${value}%`}
                      label={{ value: 'Regrettable %', angle: 90, position: 'insideRight', fill: '#512888', fontSize: 12, offset: 5 }}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-white border border-[#9b87f5] shadow-md p-3 rounded">
                              <p className="font-medium">{data.month}</p>
                              <p className="text-[#6E59A5] font-bold">{`Total Departures: ${data.count}`}</p>
                              <p className="text-[#9b87f5] font-bold">{`Regrettable: ${data.regrettable}`}</p>
                              <p className="text-[#512888] font-bold">{`Percentage: ${data.percentage}%`}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar 
                      yAxisId="left"
                      dataKey="count" 
                      name="Total Departures" 
                      fill="#6E59A5"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar 
                      yAxisId="left"
                      dataKey="regrettable" 
                      name="Regrettable Departures" 
                      fill="#9b87f5"
                      radius={[4, 4, 0, 0]}
                    />
                    <Line 
                      yAxisId="right"
                      type="monotone" 
                      dataKey="percentage" 
                      stroke="#512888" 
                      strokeWidth={3}
                      dot={{ r: 6, fill: "#512888" }}
                      activeDot={{ r: 8 }}
                      name="Regrettable %"
                    />
                    <Legend 
                      verticalAlign="bottom"
                      wrapperStyle={{ paddingTop: "20px" }}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </ChartContainer>
          </div>

          {/* Exit Interview Reasons Chart */}
          <div className="mb-4">
            <h4 className="text-lg font-medium text-[#512888] mb-3">Exit Interview Reasons (Regrettable Departures)</h4>
          </div>
          
          <div className="bg-white rounded-lg w-full h-full">
            <ChartContainer config={{
              percentage: { color: "#9b87f5" }
            }}>
              <div className="h-[400px] w-full bg-white">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={exitReasonData} 
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 150, bottom: 20 }}
                    className="bg-white"
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                    <YAxis 
                      dataKey="reason" 
                      type="category"
                      axisLine={true}
                      tickLine={false}
                      tick={{ fill: '#512888', fontSize: 14, fontWeight: 600 }}
                      width={140}
                    />
                    <XAxis
                      type="number"
                      axisLine={true}
                      tickLine={false}
                      tick={{ fill: '#512888', fontSize: 14, fontWeight: 600 }}
                      tickFormatter={(value) => `${value}%`}
                      domain={[0, 40]}
                      ticks={[0, 10, 20, 30, 40]}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-white border border-[#9b87f5] shadow-md p-3 rounded">
                              <p className="font-medium">{data.reason}</p>
                              <p className="font-bold text-[#512888]">{`${data.percentage}% of regrettable departures`}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar 
                      dataKey="percentage" 
                      fill="#9b87f5" 
                      radius={[0, 4, 4, 0]}
                      label={({ x, y, width, value }) => (
                        <text 
                          x={x + width + 5} 
                          y={y + 4} 
                          textAnchor="start" 
                          fontSize={12}
                          fontWeight="bold"
                          fill="#512888"
                        >
                          {value}%
                        </text>
                      )}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ChartContainer>
          </div>
          
          <div className="text-sm text-muted-foreground mt-4">
            <p>* Regrettable departures are defined as high-performing employees who voluntarily left the company</p>
            <p>* Data is collected from exit interviews and manager feedback</p>
            <p>* Industry averages based on benchmarking data from similar companies in our sector</p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default WorkforceRetention;
