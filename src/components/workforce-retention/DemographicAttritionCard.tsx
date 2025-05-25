
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
  recruiterAttritionData,
  recruiterTenureData,
  recruiterTimeToHireData
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

      {/* Additional charts for recruiter type */}
      {type === "recruiter" && (
        <>
          {/* Average Tenure by Recruiter Chart */}
          <div className="mb-4">
            <h4 className="text-lg font-medium text-[#512888] mb-3">Average Tenure of Hires by Recruiter</h4>
          </div>
          
          <div className="bg-white rounded-lg w-full h-full mb-8">
            <ChartContainer config={{
              averageTenure: { color: "#9b87f5" }
            }}>
              <div className="h-[400px] w-full bg-white">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={recruiterTenureData} 
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 150, bottom: 20 }}
                    className="bg-white"
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                    <YAxis 
                      dataKey="recruiter" 
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
                      tickFormatter={(value) => `${value} mo`}
                      domain={[0, 35]}
                      ticks={[0, 5, 10, 15, 20, 25, 30, 35]}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-white border border-[#9b87f5] shadow-md p-3 rounded">
                              <p className="font-medium">{data.recruiter}</p>
                              <p className="font-bold text-[#512888]">{`Average Tenure: ${data.averageTenure} months`}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar 
                      dataKey="averageTenure" 
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
                          {value} mo
                        </text>
                      )}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ChartContainer>
          </div>

          {/* Average Time to Hire by Recruiter Chart */}
          <div className="mb-4">
            <h4 className="text-lg font-medium text-[#512888] mb-3">Average Time to Hire by Recruiter</h4>
          </div>
          
          <div className="bg-white rounded-lg w-full h-full mb-8">
            <ChartContainer config={{
              averageTimeToHire: { color: "#6E59A5" }
            }}>
              <div className="h-[400px] w-full bg-white">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={recruiterTimeToHireData} 
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 150, bottom: 20 }}
                    className="bg-white"
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                    <YAxis 
                      dataKey="recruiter" 
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
                      tickFormatter={(value) => `${value} days`}
                      domain={[0, 60]}
                      ticks={[0, 10, 20, 30, 40, 50, 60]}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-white border border-[#9b87f5] shadow-md p-3 rounded">
                              <p className="font-medium">{data.recruiter}</p>
                              <p className="font-bold text-[#512888]">{`Average Time to Hire: ${data.averageTimeToHire} days`}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar 
                      dataKey="averageTimeToHire" 
                      fill="#6E59A5" 
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
                          {value} days
                        </text>
                      )}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ChartContainer>
          </div>
        </>
      )}
      
      <div className="text-sm text-muted-foreground mt-4">
        <p>* Attrition rates calculated as the percentage of employees who left the company in the past 12 months</p>
        <p>* Industry averages based on benchmarking data from similar companies in our sector</p>
        <p>* Voluntary terminations are employee-initiated, while involuntary terminations are company-initiated</p>
        {type === "recruiter" && (
          <>
            <p>* Average tenure measured from hire date to departure date for employees who have left</p>
            <p>* Time to hire measured from job posting date to offer acceptance date</p>
          </>
        )}
      </div>
    </Card>
  );
};

export default DemographicAttritionCard;
