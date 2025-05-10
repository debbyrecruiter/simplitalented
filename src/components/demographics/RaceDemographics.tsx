
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
  Cell
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { raceData, departmentRaceData } from "@/data/demographicsData";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const COLORS = ['#22C55E', '#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B'];

const RaceDemographics = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-2 border-[#840DD7] bg-white shadow-sm">
          <CardHeader>
            <CardTitle>Company Race Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] bg-white">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={raceData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {raceData.map((entry, index) => (
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
            <CardTitle>Race Distribution by Department</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] bg-white">
              <ChartContainer config={{
                'White': { label: "White", theme: { light: "#22C55E", dark: "#22C55E" } },
                'Asian': { label: "Asian", theme: { light: "#3B82F6", dark: "#3B82F6" } },
                'Black': { label: "Black", theme: { light: "#8B5CF6", dark: "#8B5CF6" } },
                'Hispanic/Latino': { label: "Hispanic/Latino", theme: { light: "#EC4899", dark: "#EC4899" } },
                'Other': { label: "Other", theme: { light: "#F59E0B", dark: "#F59E0B" } }
              }}>
                <BarChart 
                  data={departmentRaceData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="department" />
                  <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="White" name="White" stackId="a" fill="#22C55E" />
                  <Bar dataKey="Asian" name="Asian" stackId="a" fill="#3B82F6" />
                  <Bar dataKey="Black" name="Black" stackId="a" fill="#8B5CF6" />
                  <Bar dataKey="Hispanic/Latino" name="Hispanic/Latino" stackId="a" fill="#EC4899" />
                  <Bar dataKey="Other" name="Other" stackId="a" fill="#F59E0B" />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1">
        <Card className="border-2 border-[#840DD7] bg-white shadow-sm">
          <CardHeader>
            <CardTitle>Detailed Department Race Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Department</th>
                    <th className="text-center p-2">White (%)</th>
                    <th className="text-center p-2">Asian (%)</th>
                    <th className="text-center p-2">Black (%)</th>
                    <th className="text-center p-2">Hispanic/Latino (%)</th>
                    <th className="text-center p-2">Other (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {departmentRaceData.map((dept, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="p-2 font-medium">{dept.department}</td>
                      <td className="text-center p-2">{dept['White']}%</td>
                      <td className="text-center p-2">{dept['Asian']}%</td>
                      <td className="text-center p-2">{dept['Black']}%</td>
                      <td className="text-center p-2">{dept['Hispanic/Latino']}%</td>
                      <td className="text-center p-2">{dept['Other']}%</td>
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

export default RaceDemographics;
