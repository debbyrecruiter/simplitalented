
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
import { genderData, departmentGenderData, genderHistoricalData, genderPromotionData } from "@/data/demographicsData";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const COLORS = ['#0067D9', '#FF6B8A', '#8B5CF6'];

const GenderDemographics = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-2 border-[#840DD7] bg-white shadow-sm">
          <CardHeader>
            <CardTitle>Company Gender Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] bg-white">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {genderData.map((entry, index) => (
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
            <CardTitle>Gender Distribution by Department</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] bg-white">
              <ChartContainer config={{
                male: { label: "Male", theme: { light: "#0067D9", dark: "#0067D9" } },
                female: { label: "Female", theme: { light: "#FF6B8A", dark: "#FF6B8A" } },
                nonbinary: { label: "Nonbinary", theme: { light: "#8B5CF6", dark: "#8B5CF6" } }
              }}>
                <BarChart 
                  data={departmentGenderData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="department" />
                  <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="male" name="Male" stackId="a" fill="#0067D9" />
                  <Bar dataKey="female" name="Female" stackId="a" fill="#FF6B8A" />
                  <Bar dataKey="nonbinary" name="Nonbinary" stackId="a" fill="#8B5CF6" />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="border-2 border-[#840DD7] bg-white shadow-sm">
        <CardHeader>
          <CardTitle>Gender Demographics Year-Over-Year</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] bg-white">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={genderHistoricalData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="year" />
                <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Male" stroke="#0067D9" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="Female" stroke="#FF6B8A" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="Nonbinary" stroke="#8B5CF6" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-2 border-[#840DD7] bg-white shadow-sm">
        <CardHeader>
          <CardTitle>Promotion Percentage by Gender</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] bg-white">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={genderPromotionData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
                <Bar dataKey="percentage" name="Promotion Rate" fill="#9B87F5">
                  {genderPromotionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={genderData[index].color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1">
        <Card className="border-2 border-[#840DD7] bg-white shadow-sm">
          <CardHeader>
            <CardTitle>Detailed Department Gender Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Department</th>
                    <th className="text-center p-2">Male (%)</th>
                    <th className="text-center p-2">Female (%)</th>
                    <th className="text-center p-2">Nonbinary (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {departmentGenderData.map((dept, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="p-2 font-medium">{dept.department}</td>
                      <td className="text-center p-2">{dept.male}%</td>
                      <td className="text-center p-2">{dept.female}%</td>
                      <td className="text-center p-2">{dept.nonbinary}%</td>
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

export default GenderDemographics;
