
import React from "react";
import { Card } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  Legend
} from "recharts";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { 
  raceAttritionData, 
  genderAttritionData,
  recruiterAttritionData
} from "@/data/demographicsData";

interface DemographicAttritionCardProps {
  type: "race" | "gender" | "recruiter";
  title: string;
}

const DemographicAttritionCard: React.FC<DemographicAttritionCardProps> = ({ type, title }) => {
  // Get the appropriate data based on the type
  const getData = () => {
    switch (type) {
      case "race":
        return raceAttritionData;
      case "gender":
        return genderAttritionData;
      case "recruiter":
        return recruiterAttritionData;
      default:
        return [];
    }
  };

  const data = getData();
  const dataKey = type === "recruiter" ? "recruiter" : type;
  
  // Create an array of tick values in increments of 5 up to 40 for X axis
  const xAxisTicks = Array.from({ length: 9 }, (_, index) => index * 5);

  return (
    <Card className="p-6 bg-white border border-[#9b87f5] rounded-lg shadow-sm mb-8">
      <h3 className="text-xl font-medium text-[#512888] mb-4">Attrition by {title}</h3>
      
      <div className="bg-white rounded-lg w-full h-full mb-8">
        <ChartContainer config={{
          voluntary: { color: "#9b87f5" },
          involuntary: { color: "#6E59A5" }
        }}>
          <div className="h-[600px] w-full bg-white">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={data} 
                margin={{ top: 5, right: 30, left: 20, bottom: 200 }}
                className="bg-white"
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey={dataKey} 
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
                          <p className="font-medium">{data[dataKey]}</p>
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
  );
};

export default DemographicAttritionCard;
