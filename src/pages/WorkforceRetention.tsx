import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BackButton } from "@/components/ui/back-button";
import { Users, Award, BarChart2, LineChart, Briefcase, Badge } from "lucide-react";
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
  Cell
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

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

// Performance score attrition data (mock data)
const performanceScoreData = [
  { score: "5 - Excellent", count: 42, attritionRate: 5 },
  { score: "4 - Very Good", count: 78, attritionRate: 12 },
  { score: "3 - Satisfactory", count: 56, attritionRate: 18 },
  { score: "2 - Needs Improvement", count: 34, attritionRate: 27 },
  { score: "1 - Poor", count: 12, attritionRate: 38 },
];

const overallAttritionRate = 16.5; // Company-wide attrition rate

const WorkforceRetention = () => {
  const navigate = useNavigate();
  const [showManagerAttrition, setShowManagerAttrition] = useState(false);
  const [showCompanyAttrition, setShowCompanyAttrition] = useState(false);
  const [showPerformanceAttrition, setShowPerformanceAttrition] = useState(false);

  const handleManagerCardClick = () => {
    setShowManagerAttrition(!showManagerAttrition);
    if (!showManagerAttrition) {
      setShowCompanyAttrition(false);
      setShowPerformanceAttrition(false);
    }
  };

  const handleCompanyCardClick = () => {
    setShowCompanyAttrition(!showCompanyAttrition);
    if (!showCompanyAttrition) {
      setShowManagerAttrition(false);
      setShowPerformanceAttrition(false);
    }
  };

  const handlePerformanceCardClick = () => {
    setShowPerformanceAttrition(!showPerformanceAttrition);
    if (!showPerformanceAttrition) {
      setShowManagerAttrition(false);
      setShowCompanyAttrition(false);
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

        <Card className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square">
          <div className="flex flex-col items-center justify-center h-full p-4 text-center">
            <div className="flex items-center justify-center mb-3">
              <BarChart2 className="h-8 w-8 text-[#512888]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#512888] mb-3 px-4">Attrition by Race</h3>
          </div>
        </Card>

        <Card className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square">
          <div className="flex flex-col items-center justify-center h-full p-4 text-center">
            <div className="flex items-center justify-center mb-3">
              <LineChart className="h-8 w-8 text-[#512888]" />
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
          
          <div className="bg-white rounded-lg w-full h-full">
            <ChartContainer config={{
              attrition: { color: "#9b87f5" }
            }}>
              <div className="h-[600px] w-full bg-white">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={performanceScoreData} 
                    margin={{ top: 5, right: 30, left: 20, bottom: 100 }}
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
                            <div className="bg-white border border-[#9b87f5] shadow-md p-2 rounded">
                              <p className="font-medium">{data.score}</p>
                              <p className="text-[#512888] font-bold">{`${data.attritionRate}%`}</p>
                              <p className="text-sm text-muted-foreground">{`${data.count} employees`}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="attritionRate" name="Attrition Rate" radius={[4, 4, 0, 0]}>
                      {performanceScoreData.map((_, index) => {
                        // Color gradient based on performance score (red to green)
                        const colors = ["#ef4444", "#f97316", "#facc15", "#84cc16", "#22c55e"];
                        return <Cell key={`cell-${index}`} fill={colors[index]} />;
                      })}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ChartContainer>
          </div>
          
          <div className="text-sm text-muted-foreground mt-4">
            <p>* Attrition rates calculated as the percentage of employees who left the company in the past 12 months, by performance review score.</p>
            <p>* Performance scores are on a 1-5 scale, with 1 being poor performance and 5 being excellent.</p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default WorkforceRetention;
