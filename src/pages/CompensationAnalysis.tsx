
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell, Tooltip
} from "recharts";
import { BackButton } from "@/components/ui/back-button";
import { PieChartIcon, TableIcon, Percent } from "lucide-react";
import { teamMembers } from "@/data/dashboardData";
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell 
} from "@/components/ui/table";

// Filter only direct reports from team members (excluding the first member who is the manager)
const directReports = teamMembers.filter(member => member.id !== 1);

// Enhanced compensation data with job codes
const compensationData = [
  { name: 'Jamie Chen', base: 120000, bonus: 15000, equity: 30000, total: 165000, role: 'Senior Designer', department: 'Design', jobCode: 'D-42' },
  { name: 'Alex Morgan', base: 135000, bonus: 20000, equity: 40000, total: 195000, role: 'Tech Lead', department: 'Engineering', jobCode: 'E-33' },
  { name: 'Taylor Smith', base: 115000, bonus: 12000, equity: 25000, total: 152000, role: 'QA Engineer', department: 'Engineering', jobCode: 'Q-28' },
  { name: 'Jordan Riley', base: 142000, bonus: 18000, equity: 35000, total: 195000, role: 'Tech Lead', department: 'Engineering', jobCode: 'E-33' },
  { name: 'Casey Johnson', base: 118000, bonus: 13000, equity: 24000, total: 155000, role: 'QA Engineer', department: 'Engineering', jobCode: 'Q-28' },
];

// Calculate averages by job code
const jobCodeAverages = compensationData.reduce((acc, employee) => {
  if (!acc[employee.jobCode]) {
    acc[employee.jobCode] = { totalSum: 0, count: 0 };
  }
  acc[employee.jobCode].totalSum += employee.total;
  acc[employee.jobCode].count += 1;
  return acc;
}, {});

Object.keys(jobCodeAverages).forEach(jobCode => {
  jobCodeAverages[jobCode].average = 
    jobCodeAverages[jobCode].totalSum / jobCodeAverages[jobCode].count;
});

// Enhanced compensation data with peer comparison
const enhancedCompensationData = compensationData.map(employee => {
  const jobCodeAvg = jobCodeAverages[employee.jobCode].average;
  const peerDiffPercentage = ((employee.total - jobCodeAvg) / jobCodeAvg) * 100;
  return {
    ...employee,
    peerDiffPercentage: peerDiffPercentage
  };
});

// Transform compensation data for pie charts
const pieChartsData = compensationData.slice(0, 3).map(item => {
  const total = item.total;
  return {
    name: item.name,
    role: item.role,
    data: [
      { name: 'Base Salary', value: item.base, color: '#0067D9', percentage: Math.round((item.base / total) * 100) },
      { name: 'Annual Bonus', value: item.bonus, color: '#FF6B6B', percentage: Math.round((item.bonus / total) * 100) },
      { name: 'Equity', value: item.equity, color: '#9320E7', percentage: Math.round((item.equity / total) * 100) }
    ],
    total: total
  };
});

// Custom pie chart label that only shows for segments large enough to contain text
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, value, percentage }) => {
  // Only show labels for segments that are large enough (e.g., > 10%)
  if (percentage < 10) return null;
  
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      className="text-xs font-medium"
    >
      {`${percentage}%`}
    </text>
  );
};

// Enhanced comparative data for the cleaner view
const enhancedCompData = compensationData.map(item => {
  const maxValue = Math.max(...compensationData.map(d => d.total));
  const percentageOfHighest = Math.round((item.total / maxValue) * 100);
  return {
    name: item.name,
    role: item.role,
    base: item.base,
    bonus: item.bonus,
    equity: item.equity,
    total: item.total,
    percentageOfHighest,
    basePercentage: Math.round((item.base / item.total) * 100),
    bonusPercentage: Math.round((item.bonus / item.total) * 100),
    equityPercentage: Math.round((item.equity / item.total) * 100),
  };
});

const COLORS = ['#0067D9', '#FF6B6B', '#9320E7'];

const CompensationAnalysis = () => {
  const formatCurrency = (value: number) => `$${value.toLocaleString()}`;
  
  const formatPercentage = (value: number) => {
    const sign = value > 0 ? '+' : '';
    return `${sign}${value.toFixed(1)}%`;
  };
  
  return (
    <div className="container p-4 mx-auto">
      <div className="mb-6">
        <BackButton fallbackPath="/reports" label="Back" />
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Compensation Analysis</h1>
      
      <div className="space-y-6">
        <Card className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-lg shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center">
              <PieChartIcon className="mr-2 h-5 w-5 text-[#512888]" />
              Compensation Components by Team Member
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {pieChartsData.map((item, index) => (
                <Card key={index} className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-lg shadow-sm overflow-hidden">
                  <CardHeader className="py-3 bg-white border-b">
                    <CardTitle className="text-base">{item.name} - {item.role}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="h-[220px] flex justify-center items-center pt-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Tooltip 
                            formatter={(value, name) => [`$${value.toLocaleString()}`, name]}
                            contentStyle={{ 
                              backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                              borderRadius: '6px',
                              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                              border: '1px solid rgba(0,0,0,0.05)',
                              padding: '8px 12px'
                            }}
                          />
                          <Pie
                            data={item.data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={75}
                            fill="#8884d8"
                            dataKey="value"
                            animationDuration={800}
                            animationEasing="ease-out"
                          >
                            {item.data.map((entry, i) => (
                              <Cell 
                                key={`cell-${i}`} 
                                fill={entry.color} 
                                stroke="white" 
                                strokeWidth={1}
                              />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <div className="bg-white p-3 border-t">
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-sm font-semibold">Total: ${item.total.toLocaleString()}</p>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {item.data.map((entry, i) => (
                          <div key={i} className="flex flex-col items-center p-1 rounded bg-white border">
                            <div className="flex items-center gap-1">
                              <div 
                                className="h-2 w-2 rounded-full" 
                                style={{ backgroundColor: entry.color }}
                              ></div>
                              <span className="text-xs font-medium">{entry.name}</span>
                            </div>
                            <div className="text-xs mt-1 flex flex-col items-center">
                              <span className="font-medium">${entry.value.toLocaleString()}</span>
                              <span className="text-muted-foreground">{entry.percentage}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-lg shadow-sm">
              <CardHeader>
                <CardTitle className="text-base flex items-center">
                  <TableIcon className="mr-2 h-4 w-4 text-[#512888]" />
                  Compensation Details
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-1 xl:grid-cols-6 gap-6">
                  {/* Simple total compensation comparison */}
                  <div className="xl:col-span-2 border rounded-lg p-4 bg-gray-50">
                    <h3 className="text-sm font-medium text-center mb-4">Total Compensation</h3>
                    <div className="space-y-4">
                      {enhancedCompData.sort((a, b) => b.total - a.total).map((item, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex justify-between items-center text-xs">
                            <div className="font-medium flex items-center">
                              <div 
                                className="h-2 w-2 rounded-full mr-2" 
                                style={{ backgroundColor: '#4CAF50' }}
                              ></div>
                              {item.name}
                            </div>
                            <span className="font-mono">${item.total.toLocaleString()}</span>
                          </div>
                          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full rounded-full"
                              style={{ 
                                width: `${item.percentageOfHighest}%`,
                                backgroundColor: '#4CAF50'  // Changed to green
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Updated Data Table with Total column and Peer Comparison */}
                  <div className="xl:col-span-4 bg-white border rounded-lg p-4">
                    <div className="mb-3">
                      <div className="flex items-center gap-2">
                        <Percent className="h-4 w-4 text-[#512888]" />
                        <span className="text-sm font-medium">Peer comparison shows how an employee's compensation compares to the average for their job code</span>
                      </div>
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="font-semibold">Name</TableHead>
                          <TableHead className="font-semibold">Job Code</TableHead>
                          <TableHead className="text-right font-semibold">Base Salary</TableHead>
                          <TableHead className="text-right font-semibold">Bonus (Annual)</TableHead>
                          <TableHead className="text-right font-semibold">Equity (Annual)</TableHead>
                          <TableHead className="text-right font-semibold">Total</TableHead>
                          <TableHead className="text-right font-semibold">vs. Peers</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {enhancedCompensationData.map((employee, idx) => (
                          <TableRow key={idx}>
                            <TableCell className="font-medium">{employee.name}</TableCell>
                            <TableCell>{employee.jobCode}</TableCell>
                            <TableCell className="text-right">{formatCurrency(employee.base)}</TableCell>
                            <TableCell className="text-right">{formatCurrency(employee.bonus)}</TableCell>
                            <TableCell className="text-right">{formatCurrency(employee.equity)}</TableCell>
                            <TableCell className="text-right font-medium">{formatCurrency(employee.total)}</TableCell>
                            <TableCell className="text-right">
                              <span 
                                className={`font-medium ${
                                  employee.peerDiffPercentage > 0 ? 'text-green-600' : 
                                  employee.peerDiffPercentage < 0 ? 'text-red-600' : 'text-gray-600'
                                }`}
                              >
                                {formatPercentage(employee.peerDiffPercentage)}
                              </span>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompensationAnalysis;
