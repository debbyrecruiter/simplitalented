
import React from "react";
import { BackButton } from "@/components/ui/back-button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  TooltipProps
} from "recharts";
import { departmentAttritionData, departmentYearOverYearData } from "@/data/demographicsData";
import { ChartContainer } from "@/components/ui/chart";

const overallAttritionRate = 16.5; // Company-wide attrition rate
const overallVoluntaryRate = 9.7;   // Company-wide voluntary attrition
const overallInvoluntaryRate = 6.8; // Company-wide involuntary attrition

// Performance score data - we're creating this as sample data
const attritionByPerformanceData = [
  { score: "Exceeds", attritionRate: 7.2, voluntaryRate: 6.5, involuntaryRate: 0.7 },
  { score: "Meets+", attritionRate: 10.8, voluntaryRate: 8.3, involuntaryRate: 2.5 },
  { score: "Meets", attritionRate: 14.6, voluntaryRate: 9.2, involuntaryRate: 5.4 },
  { score: "Needs Improvement", attritionRate: 28.5, voluntaryRate: 12.8, involuntaryRate: 15.7 },
  { score: "PIP", attritionRate: 65.3, voluntaryRate: 25.4, involuntaryRate: 39.9 }
];

const chartConfig = {
  attrition: { label: "Attrition", color: "#840DD7" },
  voluntary: { label: "Voluntary", color: "#F59E0B" },
  involuntary: { label: "Involuntary", color: "#EF4444" }
};

// Custom tooltip component for the bar charts
const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
        <p className="font-bold">{label}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} style={{ color: entry.color }}>
            {entry.name}: {entry.value}%
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const CompanyAttrition = () => {
  return (
    <div className="container p-4 mx-auto">
      <div className="mb-6">
        <BackButton fallbackPath="/reports/workforce-retention" label="Back" />
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Company Attrition Analysis</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Overall Attrition Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-[#840DD7]">{overallAttritionRate}%</p>
            <p className="text-sm text-muted-foreground">Company-wide annual attrition rate</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Voluntary Attrition</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-amber-500">{overallVoluntaryRate}%</p>
            <p className="text-sm text-muted-foreground">Employees who chose to leave</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Involuntary Attrition</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-rose-500">{overallInvoluntaryRate}%</p>
            <p className="text-sm text-muted-foreground">Layoffs and terminations</p>
          </CardContent>
        </Card>
      </div>

      {/* Year over Year Attrition Trends */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Year-over-Year Attrition Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={departmentYearOverYearData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis domain={[0, 30]} tickFormatter={(value) => `${value}%`} />
                <Tooltip formatter={(value) => [`${value}%`, "Attrition Rate"]} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Engineering"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="Sales"
                  stroke="#F97316"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="Marketing"
                  stroke="#10B981"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="HR"
                  stroke="#8B5CF6"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="Product"
                  stroke="#EC4899"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="Finance"
                  stroke="#6B7280"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Attrition by Performance Score */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Attrition by Performance Score</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={attritionByPerformanceData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="score" />
                <YAxis tickFormatter={(value) => `${value}%`} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="voluntaryRate" name="Voluntary" fill="#F59E0B" />
                <Bar dataKey="involuntaryRate" name="Involuntary" fill="#EF4444" stackId="a" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Employees with higher performance scores tend to have significantly lower attrition rates,
            with voluntary departures being the primary cause. Lower performers show higher involuntary attrition.
          </p>
        </CardContent>
      </Card>

      {/* Attrition by Department */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Attrition by Department</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={departmentAttritionData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="department" />
                <YAxis tickFormatter={(value) => `${value}%`} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="voluntaryRate" name="Voluntary" fill="#F59E0B" />
                <Bar dataKey="involuntaryRate" name="Involuntary" fill="#EF4444" stackId="a" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Sales and Product departments show the highest overall attrition rates,
            while HR has the lowest. Engineering shows balanced voluntary and involuntary rates.
          </p>
        </CardContent>
      </Card>
      
      <div className="mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Understanding Attrition Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <strong>Attrition Rate</strong>: The percentage of employees who leave the organization over a specific period. This includes both voluntary and involuntary departures.
            </p>
            <p className="mb-2">
              <strong>Voluntary Attrition</strong>: Occurs when employees choose to leave the organization on their own accord, such as for a new job opportunity, retirement, or personal reasons.
            </p>
            <p>
              <strong>Involuntary Attrition</strong>: Occurs when the organization initiates the separation, such as through layoffs, terminations for cause, or restructuring.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompanyAttrition;
