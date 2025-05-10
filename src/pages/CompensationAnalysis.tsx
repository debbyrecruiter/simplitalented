
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell, Tooltip, RadarChart, 
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar 
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, DollarSign, PieChart as PieChartIcon } from "lucide-react";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { teamMembers } from "@/data/dashboardData";

// Filter only direct reports from team members (excluding the first member who is the manager)
const directReports = teamMembers.filter(member => member.id !== 1);

// Sample compensation data
const compensationData = [
  { name: 'Jamie Chen', base: 120000, bonus: 15000, equity: 30000, total: 165000, role: 'Senior Designer', department: 'Design' },
  { name: 'Alex Morgan', base: 135000, bonus: 20000, equity: 40000, total: 195000, role: 'Tech Lead', department: 'Engineering' },
  { name: 'Taylor Smith', base: 115000, bonus: 12000, equity: 25000, total: 152000, role: 'QA Engineer', department: 'Engineering' },
];

// Transform compensation data for the grouped bar chart
const groupedCompData = compensationData.map(item => ({
  name: item.name,
  Base: item.base,
  Bonus: item.bonus,
  Equity: item.equity
}));

// Transform compensation data for pie charts
const pieChartsData = compensationData.map(item => {
  return {
    name: item.name,
    role: item.role,
    data: [
      { name: 'Base Salary', value: item.base, color: '#0067D9' },
      { name: 'Annual Bonus', value: item.bonus, color: '#FF6B6B' },
      { name: 'Equity', value: item.equity, color: '#9320E7' }
    ],
    total: item.total
  };
});

// Sample historical data for trends
const historicalData = [
  { year: '2021', Jamie: 142000, Alex: 170000, Taylor: 130000, benchmark: 150000 },
  { year: '2022', Jamie: 152000, Alex: 180000, Taylor: 138000, benchmark: 157000 },
  { year: '2023', Jamie: 158000, Alex: 185000, Taylor: 145000, benchmark: 162000 },
  { year: '2024', Jamie: 165000, Alex: 195000, Taylor: 152000, benchmark: 170000 },
];

// Sample market comparison data
const marketComparisonData = [
  { role: 'Senior Designer', internal: 165000, market: 170000, difference: -5000 },
  { role: 'Tech Lead', internal: 195000, market: 190000, difference: 5000 },
  { role: 'QA Engineer', internal: 152000, market: 155000, difference: -3000 },
];

const COLORS = ['#0067D9', '#FF6B6B', '#9320E7'];

const chartConfig = {
  base: { label: "Base Salary", theme: { light: "#0067D9", dark: "#0067D9" } },
  bonus: { label: "Annual Bonus", theme: { light: "#FF6B6B", dark: "#FF6B6B" } },
  equity: { label: "Equity (Annual)", theme: { light: "#9320E7", dark: "#9320E7" } },
  Jamie: { label: "Jamie Chen", theme: { light: "#0067D9", dark: "#0067D9" } },
  Alex: { label: "Alex Morgan", theme: { light: "#FF6B6B", dark: "#FF6B6B" } },
  Taylor: { label: "Taylor Smith", theme: { light: "#9320E7", dark: "#9320E7" } },
  benchmark: { label: "Industry Benchmark", theme: { light: "#17202A", dark: "#17202A" } },
  internal: { label: "Internal Salary", theme: { light: "#0067D9", dark: "#0067D9" } },
  market: { label: "Market Rate", theme: { light: "#FF6B6B", dark: "#FF6B6B" } },
  Base: { label: "Base Salary", theme: { light: "#0067D9", dark: "#0067D9" } },
  Bonus: { label: "Annual Bonus", theme: { light: "#FF6B6B", dark: "#FF6B6B" } },
  Equity: { label: "Equity (Annual)", theme: { light: "#9320E7", dark: "#9320E7" } }
};

const CompensationAnalysis = () => {
  const formatCurrency = (value: number) => `$${value.toLocaleString()}`;
  
  return (
    <div className="container p-4 mx-auto">
      <div className="mb-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="h-4 w-4" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/reports">Reports</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Compensation Analysis</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Compensation Analysis</h1>
      
      <div className="p-4 bg-white rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          <DollarSign className="mr-2 h-5 w-5 text-[#512888]" />
          Direct Reports Compensation
        </h2>
        <p className="text-muted-foreground mb-4">
          Analyze the compensation breakdown of your direct reports, including base salary, bonus, and equity.
        </p>
      </div>
      
      <Tabs defaultValue="breakdown" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="breakdown">Compensation Breakdown</TabsTrigger>
          <TabsTrigger value="trends">Historical Trends</TabsTrigger>
          <TabsTrigger value="market">Market Comparison</TabsTrigger>
        </TabsList>
        
        <TabsContent value="breakdown" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <PieChartIcon className="mr-2 h-5 w-5 text-[#512888]" />
                Compensation Components by Team Member
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {pieChartsData.map((item, index) => (
                  <Card key={index} className="shadow-sm">
                    <CardHeader className="py-3">
                      <CardTitle className="text-base">{item.name} - {item.role}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[200px] flex justify-center">
                        <PieChart width={200} height={200}>
                          <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, '']} />
                          <Pie
                            data={item.data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {item.data.map((entry, i) => (
                              <Cell key={`cell-${i}`} fill={entry.color} />
                            ))}
                          </Pie>
                        </PieChart>
                      </div>
                      <div className="mt-2">
                        <div className="flex justify-center items-center space-x-4">
                          {item.data.map((entry, i) => (
                            <div key={i} className="flex items-center">
                              <div 
                                className="h-3 w-3 rounded mr-1" 
                                style={{ backgroundColor: entry.color }}
                              ></div>
                              <span className="text-xs">{entry.name}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 text-center">
                          <span className="text-sm font-semibold">Total: ${item.total.toLocaleString()}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Comparative View</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] w-full">
                    <ChartContainer config={chartConfig}>
                      <BarChart data={groupedCompData} layout="horizontal">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis tickFormatter={formatCurrency} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Bar dataKey="Base" name="Base Salary" fill="#0067D9" />
                        <Bar dataKey="Bonus" name="Annual Bonus" fill="#FF6B6B" />
                        <Bar dataKey="Equity" name="Equity (Annual)" fill="#9320E7" />
                      </BarChart>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead className="text-right">Base Salary</TableHead>
                      <TableHead className="text-right">Bonus</TableHead>
                      <TableHead className="text-right">Equity</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {compensationData.map((employee, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{employee.name}</TableCell>
                        <TableCell>{employee.role}</TableCell>
                        <TableCell className="text-right">${employee.base.toLocaleString()}</TableCell>
                        <TableCell className="text-right">${employee.bonus.toLocaleString()}</TableCell>
                        <TableCell className="text-right">${employee.equity.toLocaleString()}</TableCell>
                        <TableCell className="font-medium text-right">${employee.total.toLocaleString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="trends" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Compensation Trends (2021-2024)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ChartContainer config={chartConfig}>
                  <LineChart data={historicalData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line type="monotone" dataKey="Jamie" stroke="#0067D9" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Alex" stroke="#FF6B6B" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Taylor" stroke="#9320E7" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="benchmark" stroke="#17202A" strokeDasharray="5 5" />
                  </LineChart>
                </ChartContainer>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  The dashed line represents the industry benchmark for similar roles and experience levels.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="market" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Market Rate Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ChartContainer config={chartConfig}>
                  <BarChart data={marketComparisonData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="role" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="internal" name="Internal Salary" fill="#0067D9" />
                    <Bar dataKey="market" name="Market Rate" fill="#FF6B6B" />
                  </BarChart>
                </ChartContainer>
              </div>
              
              <div className="mt-8 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Internal Rate</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Market Rate</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Difference</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {marketComparisonData.map((item, i) => (
                      <tr key={i}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.role}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">${item.internal.toLocaleString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">${item.market.toLocaleString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                          <span className={item.difference >= 0 ? "text-green-600" : "text-red-600"}>
                            {item.difference >= 0 ? "+" : ""}{item.difference.toLocaleString()}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            Math.abs(item.difference) < 5000 
                              ? "bg-green-100 text-green-800" 
                              : Math.abs(item.difference) < 10000 
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}>
                            {Math.abs(item.difference) < 5000 
                              ? "Market Aligned" 
                              : Math.abs(item.difference) < 10000 
                                ? "Minor Gap"
                                : "Significant Gap"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CompensationAnalysis;
