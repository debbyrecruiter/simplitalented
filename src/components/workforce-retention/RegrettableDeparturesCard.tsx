
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

const RegrettableDeparturesCard: React.FC = () => {
  return (
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
  );
};

export default RegrettableDeparturesCard;
