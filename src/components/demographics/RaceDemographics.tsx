
import React, { useState } from "react";
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
  Line,
  ComposedChart
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  raceData, 
  departmentRaceData, 
  raceHistoricalData, 
  racePromotionData,
  raceAttritionData,
  raceYearOverYearData
} from "@/data/demographicsData";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const COLORS = ['#22C55E', '#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B'];

const RaceDemographics = () => {
  const [showAttritionCharts, setShowAttritionCharts] = useState(false);

  // Create an array of tick values in increments of 2 up to 40
  const yAxisTicks = Array.from({ length: 21 }, (_, index) => index * 2);

  const handleToggleAttritionCharts = () => {
    setShowAttritionCharts(!showAttritionCharts);
  };

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
      
      <Card className="border-2 border-[#840DD7] bg-white shadow-sm">
        <CardHeader>
          <CardTitle>Race Demographics Year-Over-Year</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] bg-white">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={raceHistoricalData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="year" />
                <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="White" stroke="#22C55E" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="Asian" stroke="#3B82F6" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="Black" stroke="#8B5CF6" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="Hispanic/Latino" stroke="#EC4899" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="Other" stroke="#F59E0B" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-2 border-[#840DD7] bg-white shadow-sm">
        <CardHeader>
          <CardTitle>Promotion Percentage by Race</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] bg-white">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={racePromotionData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
                <Bar dataKey="percentage" name="Promotion Rate" fill="#9B87F5">
                  {racePromotionData.map((entry, index) => {
                    const matchingRace = raceData.find(race => race.name === entry.name);
                    return <Cell key={`cell-${index}`} fill={matchingRace ? matchingRace.color : "#9B87F5"} />;
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Attrition by Race Section */}
      <Card className="border-2 border-[#840DD7] bg-white shadow-sm cursor-pointer" onClick={handleToggleAttritionCharts}>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Attrition by Race</CardTitle>
          <div className="text-sm text-muted-foreground">
            {showAttritionCharts ? "Click to hide details" : "Click to view details"}
          </div>
        </CardHeader>
        {showAttritionCharts && (
          <CardContent className="space-y-8">
            <div className="bg-white rounded-lg w-full h-full mb-8">
              <ChartContainer config={{
                voluntary: { color: "#D0A3EE" },
                involuntary: { color: "#A3BAEE" }
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
                        ticks={yAxisTicks}
                      />
                      <ChartTooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            const data = payload[0].payload;
                            return (
                              <div className="bg-white border border-[#9b87f5] shadow-md p-3 rounded">
                                <p className="font-medium">{data.race}</p>
                                <p className="text-[#512888] font-bold">{`Total: ${data.attritionRate}%`}</p>
                                <p className="text-[#D0A3EE] font-bold">{`Voluntary: ${data.voluntaryRate}%`}</p>
                                <p className="text-[#A3BAEE] font-bold">{`Involuntary: ${data.involuntaryRate}%`}</p>
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
                        fill="#D0A3EE"
                      />
                      <Bar 
                        dataKey="involuntaryRate" 
                        name="Involuntary" 
                        stackId="a"
                        radius={[4, 4, 0, 0]} 
                        fill="#A3BAEE"
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
                          { value: 'Voluntary Terminations', type: 'rect', color: '#D0A3EE' },
                          { value: 'Involuntary Terminations', type: 'rect', color: '#A3BAEE' }
                        ]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </ChartContainer>
            </div>
            
            {/* Year-over-Year Race Attrition Line Chart */}
            <div className="mb-4">
              <h4 className="text-lg font-medium text-[#512888] mb-3">Year-over-Year Attrition by Race</h4>
            </div>
            
            <div className="bg-white rounded-lg w-full h-full">
              <ChartContainer config={{
                'White': { theme: { light: "#22C55E", dark: "#22C55E" } },
                'Asian': { theme: { light: "#3B82F6", dark: "#3B82F6" } },
                'Black': { theme: { light: "#8B5CF6", dark: "#8B5CF6" } },
                'Hispanic/Latino': { theme: { light: "#EC4899", dark: "#EC4899" } },
                'Other': { theme: { light: "#F59E0B", dark: "#F59E0B" } }
              }}>
                <div className="h-[400px] w-full bg-white">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart 
                      data={raceYearOverYearData} 
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
                            const year = data.year;
                            
                            // Group data by race
                            const raceGroups = {};
                            Object.keys(data).forEach(key => {
                              if (key !== 'year') {
                                const parts = key.split('-');
                                const race = parts[0];
                                const type = parts.length > 1 ? parts[1] : 'total';
                                
                                if (!raceGroups[race]) {
                                  raceGroups[race] = { total: data[race] };
                                }
                                
                                if (type !== 'total') {
                                  raceGroups[race][type] = data[key];
                                }
                              }
                            });
                            
                            return (
                              <div className="bg-white border border-[#9b87f5] shadow-md p-3 rounded max-w-xs">
                                <p className="font-medium text-center border-b pb-1 mb-2">{year}</p>
                                {Object.keys(raceGroups).map((race, idx) => {
                                  // Find the matching race color
                                  const raceColor = raceData.find(r => r.name === race)?.color || "#000";
                                  
                                  return (
                                    <div key={idx} className="mb-2 border-b pb-1 last:border-b-0">
                                      <p style={{color: raceColor}} className="font-bold">{race}</p>
                                      <p className="text-[#512888]">{`Total: ${raceGroups[race].total}%`}</p>
                                      {raceGroups[race].voluntary && (
                                        <p className="text-[#D0A3EE]">{`Voluntary: ${raceGroups[race].voluntary}%`}</p>
                                      )}
                                      {raceGroups[race].involuntary && (
                                        <p className="text-[#A3BAEE]">{`Involuntary: ${raceGroups[race].involuntary}%`}</p>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="White" 
                        name="White" 
                        stroke="#22C55E" 
                        strokeWidth={3}
                        dot={{ r: 5, fill: "#22C55E" }}
                        activeDot={{ r: 7 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="Asian" 
                        name="Asian" 
                        stroke="#3B82F6" 
                        strokeWidth={3}
                        dot={{ r: 5, fill: "#3B82F6" }}
                        activeDot={{ r: 7 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="Black" 
                        name="Black" 
                        stroke="#8B5CF6" 
                        strokeWidth={3}
                        dot={{ r: 5, fill: "#8B5CF6" }}
                        activeDot={{ r: 7 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="Hispanic/Latino" 
                        name="Hispanic/Latino" 
                        stroke="#EC4899" 
                        strokeWidth={3}
                        dot={{ r: 5, fill: "#EC4899" }}
                        activeDot={{ r: 7 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="Other" 
                        name="Other" 
                        stroke="#F59E0B" 
                        strokeWidth={3}
                        dot={{ r: 5, fill: "#F59E0B" }}
                        activeDot={{ r: 7 }}
                      />
                      <Legend />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </ChartContainer>
            </div>
            
            <div className="text-sm text-muted-foreground mt-4">
              <p>* Attrition rates calculated as the percentage of employees who left the company in the past 12 months, by race/ethnicity.</p>
              <p>* Involuntary terminations are company-initiated, while voluntary terminations are employee-initiated.</p>
            </div>
          </CardContent>
        )}
      </Card>
      
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
