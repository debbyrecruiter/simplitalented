
import React from "react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ageData, departmentAgeData, ageHistoricalData, agePromotionData } from "@/data/demographicsData";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const COLORS = ['#22C55E', '#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B'];

const AgeDemographics = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-2 border-[#840DD7] bg-white shadow-sm">
          <CardHeader>
            <CardTitle>Company Age Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] bg-white">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={ageData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {ageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-[#840DD7] bg-white shadow-sm">
          <CardHeader>
            <CardTitle>Age Distribution by Department</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] bg-white">
              <ChartContainer config={{
                '18-24': { label: "18-24", theme: { light: "#22C55E", dark: "#22C55E" } },
                '25-34': { label: "25-34", theme: { light: "#3B82F6", dark: "#3B82F6" } },
                '35-44': { label: "35-44", theme: { light: "#8B5CF6", dark: "#8B5CF6" } },
                '45-54': { label: "45-54", theme: { light: "#EC4899", dark: "#EC4899" } },
                '55+': { label: "55+", theme: { light: "#F59E0B", dark: "#F59E0B" } }
              }}>
                <BarChart 
                  data={departmentAgeData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="department" />
                  <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="18-24" name="18-24" stackId="a" fill="#22C55E" />
                  <Bar dataKey="25-34" name="25-34" stackId="a" fill="#3B82F6" />
                  <Bar dataKey="35-44" name="35-44" stackId="a" fill="#8B5CF6" />
                  <Bar dataKey="45-54" name="45-54" stackId="a" fill="#EC4899" />
                  <Bar dataKey="55+" name="55+" stackId="a" fill="#F59E0B" />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="border-2 border-[#840DD7] bg-white shadow-sm">
        <CardHeader>
          <CardTitle>Age Demographics Year-Over-Year</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] bg-white">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={ageHistoricalData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="year" />
                <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="18-24" stroke="#22C55E" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="25-34" stroke="#3B82F6" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="35-44" stroke="#8B5CF6" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="45-54" stroke="#EC4899" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="55+" stroke="#F59E0B" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-2 border-[#840DD7] bg-white shadow-sm">
        <CardHeader>
          <CardTitle>Promotion Percentage by Age Group</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] bg-white">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={agePromotionData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
                <Bar dataKey="percentage" name="Promotion Rate" fill="#9B87F5">
                  {agePromotionData.map((entry, index) => {
                    const matchingAge = ageData.find(age => age.name === entry.name);
                    return <Cell key={`cell-${index}`} fill={matchingAge ? matchingAge.color : "#9B87F5"} />;
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1">
        <Card className="border-2 border-[#840DD7] bg-white shadow-sm">
          <CardHeader>
            <CardTitle>Detailed Department Age Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Department</th>
                    <th className="text-center p-2">18-24 (%)</th>
                    <th className="text-center p-2">25-34 (%)</th>
                    <th className="text-center p-2">35-44 (%)</th>
                    <th className="text-center p-2">45-54 (%)</th>
                    <th className="text-center p-2">55+ (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {departmentAgeData.map((dept, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="p-2 font-medium">{dept.department}</td>
                      <td className="text-center p-2">{dept['18-24']}%</td>
                      <td className="text-center p-2">{dept['25-34']}%</td>
                      <td className="text-center p-2">{dept['35-44']}%</td>
                      <td className="text-center p-2">{dept['45-54']}%</td>
                      <td className="text-center p-2">{dept['55+']}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AgeDemographics;
