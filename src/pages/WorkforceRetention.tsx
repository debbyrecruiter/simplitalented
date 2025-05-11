
import React from "react";
import { BackButton } from "@/components/ui/back-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import CompanyAttrition from "./CompanyAttrition";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  LineChart,
  Line,
  Legend
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { 
  genderAttritionData, 
  genderYearOverYearData, 
  raceAttritionData, 
  raceYearOverYearData,
  recruiterAttritionData,
  recruiterYearOverYearData
} from "@/data/demographicsData";

// This is the main component for the Workforce Retention page
const WorkforceRetention = () => {
  const [selectedGender, setSelectedGender] = React.useState<string | null>(null);
  const [selectedRace, setSelectedRace] = React.useState<string | null>(null);
  const [selectedRecruiter, setSelectedRecruiter] = React.useState<string | null>(null);
  
  const genderChartConfig = {
    male: { color: "#0067D9" },
    female: { color: "#FF6B8A" },
    nonbinary: { color: "#8B5CF6" }
  };
  
  const raceChartConfig = {
    white: { color: "#22C55E" },
    asian: { color: "#3B82F6" },
    black: { color: "#8B5CF6" },
    hispanic: { color: "#EC4899" },
    other: { color: "#F59E0B" }
  };
  
  const recruiterChartConfig = {
    jessica: { color: "#22C55E" },
    thomas: { color: "#3B82F6" },
    emily: { color: "#8B5CF6" },
    robert: { color: "#EC4899" },
    michelle: { color: "#F59E0B" }
  };

  // Create an array of tick values in increments of 2 up to 40
  const yAxisTicks = Array.from({ length: 21 }, (_, index) => index * 2);
  
  // Gender handlers
  const handleGenderBarClick = (data: any) => {
    setSelectedGender(selectedGender === data.gender ? null : data.gender);
  };
  
  // Filter year-over-year gender data for the selected gender or show all genders
  const filteredGenderYearOverYearData = genderYearOverYearData.map(yearData => {
    if (selectedGender) {
      return {
        year: yearData.year,
        [selectedGender]: yearData[selectedGender as keyof typeof yearData],
        [`${selectedGender}-voluntary`]: yearData[`${selectedGender}-voluntary` as keyof typeof yearData],
        [`${selectedGender}-involuntary`]: yearData[`${selectedGender}-involuntary` as keyof typeof yearData],
      };
    }
    return yearData;
  });
  
  // Race handlers
  const handleRaceBarClick = (data: any) => {
    setSelectedRace(selectedRace === data.race ? null : data.race);
  };
  
  // Filter year-over-year race data for the selected race or show all races
  const filteredRaceYearOverYearData = raceYearOverYearData.map(yearData => {
    if (selectedRace) {
      return {
        year: yearData.year,
        [selectedRace]: yearData[selectedRace as keyof typeof yearData],
        [`${selectedRace}-voluntary`]: yearData[`${selectedRace}-voluntary` as keyof typeof yearData],
        [`${selectedRace}-involuntary`]: yearData[`${selectedRace}-involuntary` as keyof typeof yearData],
      };
    }
    return yearData;
  });
  
  // Recruiter handlers
  const handleRecruiterBarClick = (data: any) => {
    setSelectedRecruiter(selectedRecruiter === data.recruiter ? null : data.recruiter);
  };
  
  // Filter year-over-year recruiter data for the selected recruiter or show all recruiters
  const filteredRecruiterYearOverYearData = recruiterYearOverYearData.map(yearData => {
    if (selectedRecruiter) {
      const recruiterShortName = selectedRecruiter.split(" ")[0];
      return {
        year: yearData.year,
        [recruiterShortName]: yearData[recruiterShortName as keyof typeof yearData],
        [`${recruiterShortName}-voluntary`]: yearData[`${recruiterShortName}-voluntary` as keyof typeof yearData],
        [`${recruiterShortName}-involuntary`]: yearData[`${recruiterShortName}-involuntary` as keyof typeof yearData],
      };
    }
    return yearData;
  });
  
  // For Recruiter data, get short names (first names)
  const recruiterNames = recruiterAttritionData.map(item => item.recruiter.split(" ")[0]);
  const recruiterColors = ["#22C55E", "#3B82F6", "#8B5CF6", "#EC4899", "#F59E0B"];

  return (
    <div className="container p-4 mx-auto">
      <div className="mb-6">
        <BackButton fallbackPath="/reports/workforce-analytics" label="Back" />
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Workforce Retention Analytics</h1>
      
      <div className="space-y-10">
        {/* Company-wide attrition */}
        <CompanyAttrition />
        
        {/* Gender-based attrition */}
        <Card className="p-6 bg-white shadow-sm border-[#9b87f5] border rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-[#512888]">Attrition by Gender</h2>
          
          <Tabs defaultValue="breakdown" className="w-full">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="breakdown">Gender Breakdown</TabsTrigger>
              <TabsTrigger value="trends">Historical Trends</TabsTrigger>
            </TabsList>
            
            <TabsContent value="breakdown">
              <div className="bg-white rounded-lg w-full">
                <p className="mb-4 text-sm text-gray-600">
                  {selectedGender ? `Showing detailed data for ${selectedGender}. Click the bar again to show all genders.` : 'Click on a gender bar to see its historical trend.'}
                </p>
                
                <ChartContainer config={genderChartConfig}>
                  <div className="h-[500px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart 
                        data={genderAttritionData} 
                        margin={{ top: 5, right: 30, left: 20, bottom: 50 }}
                        barCategoryGap={20}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis 
                          dataKey="gender" 
                          axisLine={true}
                          tickLine={false}
                          tick={{ fill: '#512888', fontSize: 16, fontWeight: 600 }}
                        />
                        <YAxis
                          axisLine={true}
                          tickLine={false}
                          tick={{ fill: '#512888', fontSize: 16, fontWeight: 600 }}
                          tickFormatter={(value) => `${value}%`}
                          domain={[0, 40]}
                          ticks={yAxisTicks}
                        />
                        <ChartTooltip
                          content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                              const data = payload[0].payload;
                              return (
                                <div className="bg-white border border-[#9b87f5] shadow-md p-4 rounded">
                                  <p className="font-medium text-lg">{data.gender}</p>
                                  <p className="text-gray-600">Employees: {data.count}</p>
                                  <div className="mt-2 space-y-1">
                                    <p className="text-[#9b87f5] font-bold">{`Total: ${data.attritionRate}%`}</p>
                                    <p className="text-[#6E59A5]">{`Voluntary: ${data.voluntaryRate}%`}</p>
                                    <p className="text-[#D6BCFA]">{`Involuntary: ${data.involuntaryRate}%`}</p>
                                  </div>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <Bar 
                          dataKey="involuntaryRate" 
                          name="Involuntary" 
                          stackId="a" 
                          fill="#D6BCFA" 
                          onClick={handleGenderBarClick}
                          cursor="pointer"
                        />
                        <Bar 
                          dataKey="voluntaryRate" 
                          name="Voluntary" 
                          stackId="a" 
                          fill="#6E59A5"
                          onClick={handleGenderBarClick}
                          cursor="pointer"
                        />
                        <Legend 
                          verticalAlign="top" 
                          height={36}
                          iconSize={16}
                          formatter={(value) => <span className="text-gray-700">{value}</span>}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </ChartContainer>
              </div>
            </TabsContent>
            
            <TabsContent value="trends">
              <div className="bg-white rounded-lg w-full">
                <p className="mb-4 text-sm text-gray-600">
                  {selectedGender 
                    ? `Showing historical trends for ${selectedGender}. Click a bar on the Breakdown tab to change gender.` 
                    : 'Showing overall trends. Select a gender on the Breakdown tab to see specific trends.'}
                </p>
                
                <ChartContainer config={genderChartConfig}>
                  <div className="h-[500px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart 
                        data={filteredGenderYearOverYearData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis 
                          dataKey="year" 
                          axisLine={true}
                          tickLine={false}
                          tick={{ fill: '#512888', fontSize: 16, fontWeight: 600 }}
                        />
                        <YAxis
                          axisLine={true}
                          tickLine={false}
                          tick={{ fill: '#512888', fontSize: 16, fontWeight: 600 }}
                          tickFormatter={(value) => `${value}%`}
                          domain={[0, 40]}
                          ticks={yAxisTicks}
                        />
                        <ChartTooltip
                          content={({ active, payload, label }) => {
                            if (active && payload && payload.length) {
                              return (
                                <div className="bg-white border border-[#9b87f5] shadow-md p-4 rounded">
                                  <p className="font-medium text-lg">{label}</p>
                                  <div className="mt-2 space-y-1">
                                    {payload.map((entry, index) => {
                                      const name = entry.name as string;
                                      // Extract gender name without -voluntary/-involuntary suffix
                                      const displayName = name.includes("-voluntary")
                                        ? `${name.split("-voluntary")[0]} (Voluntary)`
                                        : name.includes("-involuntary")
                                          ? `${name.split("-involuntary")[0]} (Involuntary)`
                                          : name;
                                          
                                      return (
                                        <p 
                                          key={`item-${index}`} 
                                          style={{ color: entry.color }}
                                          className="font-medium"
                                        >
                                          {`${displayName}: ${entry.value}%`}
                                        </p>
                                      );
                                    })}
                                  </div>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        
                        {selectedGender ? (
                          // Show only selected gender data with voluntary/involuntary breakdown
                          <>
                            <Line
                              type="monotone"
                              dataKey={selectedGender}
                              name={selectedGender}
                              stroke="#9b87f5"
                              strokeWidth={3}
                              dot={{ r: 4 }}
                              activeDot={{ r: 6 }}
                            />
                            <Line
                              type="monotone"
                              dataKey={`${selectedGender}-voluntary`}
                              name={`${selectedGender}-voluntary`}
                              stroke="#6E59A5"
                              strokeWidth={2}
                              dot={{ r: 3 }}
                            />
                            <Line
                              type="monotone"
                              dataKey={`${selectedGender}-involuntary`}
                              name={`${selectedGender}-involuntary`}
                              stroke="#D6BCFA"
                              strokeWidth={2}
                              dot={{ r: 3 }}
                            />
                          </>
                        ) : (
                          // Show all genders
                          ["Male", "Female", "Nonbinary"].map((gender, index) => (
                            <Line
                              key={gender}
                              type="monotone"
                              dataKey={gender}
                              name={gender}
                              stroke={
                                gender === "Male" ? "#0067D9" : 
                                gender === "Female" ? "#FF6B8A" : "#8B5CF6"
                              }
                              strokeWidth={2}
                              dot={{ r: 3 }}
                              activeDot={{ r: 5 }}
                            />
                          ))
                        )}
                        <Legend 
                          verticalAlign="top" 
                          height={36}
                          iconSize={16}
                          formatter={(value) => {
                            // Format legend labels to be more user-friendly
                            const displayValue = value.includes("-voluntary") 
                              ? `${value.split("-voluntary")[0]} (Voluntary)`
                              : value.includes("-involuntary") 
                                ? `${value.split("-involuntary")[0]} (Involuntary)`
                                : value;
                            return <span className="text-gray-700">{displayValue}</span>;
                          }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </ChartContainer>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
        
        {/* Race-based attrition */}
        <Card className="p-6 bg-white shadow-sm border-[#9b87f5] border rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-[#512888]">Attrition by Race</h2>
          
          <Tabs defaultValue="breakdown" className="w-full">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="breakdown">Race Breakdown</TabsTrigger>
              <TabsTrigger value="trends">Historical Trends</TabsTrigger>
            </TabsList>
            
            <TabsContent value="breakdown">
              <div className="bg-white rounded-lg w-full">
                <p className="mb-4 text-sm text-gray-600">
                  {selectedRace ? `Showing detailed data for ${selectedRace}. Click the bar again to show all races.` : 'Click on a race bar to see its historical trend.'}
                </p>
                
                <ChartContainer config={raceChartConfig}>
                  <div className="h-[500px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart 
                        data={raceAttritionData} 
                        margin={{ top: 5, right: 30, left: 20, bottom: 50 }}
                        barCategoryGap={20}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis 
                          dataKey="race" 
                          axisLine={true}
                          tickLine={false}
                          tick={{ fill: '#512888', fontSize: 16, fontWeight: 600 }}
                        />
                        <YAxis
                          axisLine={true}
                          tickLine={false}
                          tick={{ fill: '#512888', fontSize: 16, fontWeight: 600 }}
                          tickFormatter={(value) => `${value}%`}
                          domain={[0, 40]}
                          ticks={yAxisTicks}
                        />
                        <ChartTooltip
                          content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                              const data = payload[0].payload;
                              return (
                                <div className="bg-white border border-[#9b87f5] shadow-md p-4 rounded">
                                  <p className="font-medium text-lg">{data.race}</p>
                                  <p className="text-gray-600">Employees: {data.count}</p>
                                  <div className="mt-2 space-y-1">
                                    <p className="text-[#9b87f5] font-bold">{`Total: ${data.attritionRate}%`}</p>
                                    <p className="text-[#6E59A5]">{`Voluntary: ${data.voluntaryRate}%`}</p>
                                    <p className="text-[#D6BCFA]">{`Involuntary: ${data.involuntaryRate}%`}</p>
                                  </div>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <Bar 
                          dataKey="involuntaryRate" 
                          name="Involuntary" 
                          stackId="a" 
                          fill="#D6BCFA" 
                          onClick={handleRaceBarClick}
                          cursor="pointer"
                        />
                        <Bar 
                          dataKey="voluntaryRate" 
                          name="Voluntary" 
                          stackId="a" 
                          fill="#6E59A5"
                          onClick={handleRaceBarClick}
                          cursor="pointer"
                        />
                        <Legend 
                          verticalAlign="top" 
                          height={36}
                          iconSize={16}
                          formatter={(value) => <span className="text-gray-700">{value}</span>}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </ChartContainer>
              </div>
            </TabsContent>
            
            <TabsContent value="trends">
              <div className="bg-white rounded-lg w-full">
                <p className="mb-4 text-sm text-gray-600">
                  {selectedRace 
                    ? `Showing historical trends for ${selectedRace}. Click a bar on the Breakdown tab to change race.` 
                    : 'Showing overall trends. Select a race on the Breakdown tab to see specific trends.'}
                </p>
                
                <ChartContainer config={raceChartConfig}>
                  <div className="h-[500px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart 
                        data={filteredRaceYearOverYearData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis 
                          dataKey="year" 
                          axisLine={true}
                          tickLine={false}
                          tick={{ fill: '#512888', fontSize: 16, fontWeight: 600 }}
                        />
                        <YAxis
                          axisLine={true}
                          tickLine={false}
                          tick={{ fill: '#512888', fontSize: 16, fontWeight: 600 }}
                          tickFormatter={(value) => `${value}%`}
                          domain={[0, 40]}
                          ticks={yAxisTicks}
                        />
                        <ChartTooltip
                          content={({ active, payload, label }) => {
                            if (active && payload && payload.length) {
                              return (
                                <div className="bg-white border border-[#9b87f5] shadow-md p-4 rounded">
                                  <p className="font-medium text-lg">{label}</p>
                                  <div className="mt-2 space-y-1">
                                    {payload.map((entry, index) => {
                                      const name = entry.name as string;
                                      // Extract race name without -voluntary/-involuntary suffix
                                      const displayName = name.includes("-voluntary")
                                        ? `${name.split("-voluntary")[0]} (Voluntary)`
                                        : name.includes("-involuntary")
                                          ? `${name.split("-involuntary")[0]} (Involuntary)`
                                          : name;
                                          
                                      return (
                                        <p 
                                          key={`item-${index}`} 
                                          style={{ color: entry.color }}
                                          className="font-medium"
                                        >
                                          {`${displayName}: ${entry.value}%`}
                                        </p>
                                      );
                                    })}
                                  </div>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        
                        {selectedRace ? (
                          // Show only selected race data with voluntary/involuntary breakdown
                          <>
                            <Line
                              type="monotone"
                              dataKey={selectedRace}
                              name={selectedRace}
                              stroke="#9b87f5"
                              strokeWidth={3}
                              dot={{ r: 4 }}
                              activeDot={{ r: 6 }}
                            />
                            <Line
                              type="monotone"
                              dataKey={`${selectedRace}-voluntary`}
                              name={`${selectedRace}-voluntary`}
                              stroke="#6E59A5"
                              strokeWidth={2}
                              dot={{ r: 3 }}
                            />
                            <Line
                              type="monotone"
                              dataKey={`${selectedRace}-involuntary`}
                              name={`${selectedRace}-involuntary`}
                              stroke="#D6BCFA"
                              strokeWidth={2}
                              dot={{ r: 3 }}
                            />
                          </>
                        ) : (
                          // Show all races
                          ["White", "Asian", "Black", "Hispanic/Latino", "Other"].map((race, index) => (
                            <Line
                              key={race}
                              type="monotone"
                              dataKey={race}
                              name={race}
                              stroke={
                                race === "White" ? "#22C55E" : 
                                race === "Asian" ? "#3B82F6" :
                                race === "Black" ? "#8B5CF6" :
                                race === "Hispanic/Latino" ? "#EC4899" : "#F59E0B"
                              }
                              strokeWidth={2}
                              dot={{ r: 3 }}
                              activeDot={{ r: 5 }}
                            />
                          ))
                        )}
                        <Legend 
                          verticalAlign="top" 
                          height={36}
                          iconSize={16}
                          formatter={(value) => {
                            // Format legend labels to be more user-friendly
                            const displayValue = value.includes("-voluntary") 
                              ? `${value.split("-voluntary")[0]} (Voluntary)`
                              : value.includes("-involuntary") 
                                ? `${value.split("-involuntary")[0]} (Involuntary)`
                                : value;
                            return <span className="text-gray-700">{displayValue}</span>;
                          }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </ChartContainer>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
        
        {/* Recruiter-based attrition */}
        <Card className="p-6 bg-white shadow-sm border-[#9b87f5] border rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-[#512888]">Attrition by Recruiter</h2>
          
          <Tabs defaultValue="breakdown" className="w-full">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="breakdown">Recruiter Breakdown</TabsTrigger>
              <TabsTrigger value="trends">Historical Trends</TabsTrigger>
            </TabsList>
            
            <TabsContent value="breakdown">
              <div className="bg-white rounded-lg w-full">
                <p className="mb-4 text-sm text-gray-600">
                  {selectedRecruiter ? `Showing detailed data for ${selectedRecruiter}. Click the bar again to show all recruiters.` : 'Click on a recruiter bar to see their historical trend.'}
                </p>
                
                <ChartContainer config={recruiterChartConfig}>
                  <div className="h-[500px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart 
                        data={recruiterAttritionData} 
                        margin={{ top: 5, right: 30, left: 20, bottom: 50 }}
                        barCategoryGap={20}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis 
                          dataKey="recruiter" 
                          axisLine={true}
                          tickLine={false}
                          tick={{ fill: '#512888', fontSize: 16, fontWeight: 600 }}
                        />
                        <YAxis
                          axisLine={true}
                          tickLine={false}
                          tick={{ fill: '#512888', fontSize: 16, fontWeight: 600 }}
                          tickFormatter={(value) => `${value}%`}
                          domain={[0, 40]}
                          ticks={yAxisTicks}
                        />
                        <ChartTooltip
                          content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                              const data = payload[0].payload;
                              return (
                                <div className="bg-white border border-[#9b87f5] shadow-md p-4 rounded">
                                  <p className="font-medium text-lg">{data.recruiter}</p>
                                  <p className="text-gray-600">Employees: {data.count}</p>
                                  <div className="mt-2 space-y-1">
                                    <p className="text-[#9b87f5] font-bold">{`Total: ${data.attritionRate}%`}</p>
                                    <p className="text-[#6E59A5]">{`Voluntary: ${data.voluntaryRate}%`}</p>
                                    <p className="text-[#D6BCFA]">{`Involuntary: ${data.involuntaryRate}%`}</p>
                                  </div>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <Bar 
                          dataKey="involuntaryRate" 
                          name="Involuntary" 
                          stackId="a" 
                          fill="#D6BCFA" 
                          onClick={handleRecruiterBarClick}
                          cursor="pointer"
                        />
                        <Bar 
                          dataKey="voluntaryRate" 
                          name="Voluntary" 
                          stackId="a" 
                          fill="#6E59A5"
                          onClick={handleRecruiterBarClick}
                          cursor="pointer"
                        />
                        <Legend 
                          verticalAlign="top" 
                          height={36}
                          iconSize={16}
                          formatter={(value) => <span className="text-gray-700">{value}</span>}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </ChartContainer>
              </div>
            </TabsContent>
            
            <TabsContent value="trends">
              <div className="bg-white rounded-lg w-full">
                <p className="mb-4 text-sm text-gray-600">
                  {selectedRecruiter 
                    ? `Showing historical trends for ${selectedRecruiter}. Click a bar on the Breakdown tab to change recruiter.` 
                    : 'Showing overall trends. Select a recruiter on the Breakdown tab to see specific trends.'}
                </p>
                
                <ChartContainer config={recruiterChartConfig}>
                  <div className="h-[500px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart 
                        data={filteredRecruiterYearOverYearData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis 
                          dataKey="year" 
                          axisLine={true}
                          tickLine={false}
                          tick={{ fill: '#512888', fontSize: 16, fontWeight: 600 }}
                        />
                        <YAxis
                          axisLine={true}
                          tickLine={false}
                          tick={{ fill: '#512888', fontSize: 16, fontWeight: 600 }}
                          tickFormatter={(value) => `${value}%`}
                          domain={[0, 40]}
                          ticks={yAxisTicks}
                        />
                        <ChartTooltip
                          content={({ active, payload, label }) => {
                            if (active && payload && payload.length) {
                              return (
                                <div className="bg-white border border-[#9b87f5] shadow-md p-4 rounded">
                                  <p className="font-medium text-lg">{label}</p>
                                  <div className="mt-2 space-y-1">
                                    {payload.map((entry, index) => {
                                      const name = entry.name as string;
                                      // Extract recruiter name without -voluntary/-involuntary suffix
                                      const displayName = name.includes("-voluntary")
                                        ? `${name.split("-voluntary")[0]} (Voluntary)`
                                        : name.includes("-involuntary")
                                          ? `${name.split("-involuntary")[0]} (Involuntary)`
                                          : name;
                                          
                                      return (
                                        <p 
                                          key={`item-${index}`} 
                                          style={{ color: entry.color }}
                                          className="font-medium"
                                        >
                                          {`${displayName}: ${entry.value}%`}
                                        </p>
                                      );
                                    })}
                                  </div>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        
                        {selectedRecruiter ? (
                          // Show only selected recruiter data with voluntary/involuntary breakdown
                          <>
                            <Line
                              type="monotone"
                              dataKey={selectedRecruiter.split(" ")[0]}
                              name={selectedRecruiter}
                              stroke="#9b87f5"
                              strokeWidth={3}
                              dot={{ r: 4 }}
                              activeDot={{ r: 6 }}
                            />
                            <Line
                              type="monotone"
                              dataKey={`${selectedRecruiter.split(" ")[0]}-voluntary`}
                              name={`${selectedRecruiter}-voluntary`}
                              stroke="#6E59A5"
                              strokeWidth={2}
                              dot={{ r: 3 }}
                            />
                            <Line
                              type="monotone"
                              dataKey={`${selectedRecruiter.split(" ")[0]}-involuntary`}
                              name={`${selectedRecruiter}-involuntary`}
                              stroke="#D6BCFA"
                              strokeWidth={2}
                              dot={{ r: 3 }}
                            />
                          </>
                        ) : (
                          // Show all recruiters
                          recruiterNames.map((recruiterName, index) => (
                            <Line
                              key={recruiterName}
                              type="monotone"
                              dataKey={recruiterName}
                              name={recruiterName}
                              stroke={recruiterColors[index % recruiterColors.length]}
                              strokeWidth={2}
                              dot={{ r: 3 }}
                              activeDot={{ r: 5 }}
                            />
                          ))
                        )}
                        <Legend 
                          verticalAlign="top" 
                          height={36}
                          iconSize={16}
                          formatter={(value) => {
                            // Format legend labels to be more user-friendly
                            const displayValue = value.includes("-voluntary") 
                              ? `${value.split("-voluntary")[0]} (Voluntary)`
                              : value.includes("-involuntary") 
                                ? `${value.split("-involuntary")[0]} (Involuntary)`
                                : value;
                            return <span className="text-gray-700">{displayValue}</span>;
                          }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </ChartContainer>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
        
        <div className="text-sm text-muted-foreground mt-2">
          <p>* Attrition rates calculated as the percentage of employees who left the company in the past 12 months.</p>
          <p>* Voluntary attrition refers to employees who resigned. Involuntary attrition refers to terminations.</p>
        </div>
      </div>
    </div>
  );
};

export default WorkforceRetention;
