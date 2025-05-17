
import React from "react";
import { Card } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  Legend,
  Line,
  ComposedChart
} from "recharts";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";

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

const PerformanceAttritionCard: React.FC = () => {
  // Create an array of tick values in increments of 5 up to 40 for X axis
  const xAxisTicks = Array.from({ length: 9 }, (_, index) => index * 5);

  return (
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
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="attritionRate" 
                  name="Total"
                  stroke="#512888" 
                  strokeWidth={3}
                  dot={{ r: 6, fill: "#512888" }}
                  activeDot={{ r: 8 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="voluntaryRate" 
                  name="Voluntary"
                  stroke="#9b87f5" 
                  strokeWidth={3}
                  dot={{ r: 6, fill: "#9b87f5" }}
                  activeDot={{ r: 8 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="involuntaryRate" 
                  name="Involuntary"
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
  );
};

export default PerformanceAttritionCard;
