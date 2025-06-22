import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { DollarSign, TrendingUp, Users, AlertTriangle } from "lucide-react";
import DateRangeSelector, { DateRange, DateRangeType } from "./DateRangeSelector";

const CostAnalysisCard = () => {
  const [selectedRange, setSelectedRange] = useState<DateRangeType>("YTD");
  const [customDateRange, setCustomDateRange] = useState<DateRange | null>(null);

  const handleRangeSelect = (range: DateRangeType, customRange?: DateRange) => {
    setSelectedRange(range);
    if (customRange) {
      setCustomDateRange(customRange);
    }
    console.log(`Date range selected: ${range}`, customRange);
  };

  // Attrition cost data
  const attritionCosts = [
    { department: "Engineering", departures: 12, avgSalary: 120000, recruitmentCost: 25000, trainingCost: 15000, totalCost: 1920000 },
    { department: "Sales", departures: 8, avgSalary: 85000, recruitmentCost: 20000, trainingCost: 12000, totalCost: 1136000 },
    { department: "Marketing", departures: 5, avgSalary: 75000, recruitmentCost: 18000, trainingCost: 10000, totalCost: 565000 },
    { department: "Product", departures: 4, avgSalary: 110000, recruitmentCost: 22000, trainingCost: 14000, totalCost: 584000 },
    { department: "HR", departures: 2, avgSalary: 70000, recruitmentCost: 15000, trainingCost: 8000, totalCost: 186000 },
  ];

  // Investment in at-risk employees
  const investmentData = [
    { category: "Performance Coaching", cost: 145000, employees: 28 },
    { category: "Skills Training", cost: 98000, employees: 35 },
    { category: "Leadership Development", cost: 67000, employees: 15 },
    { category: "Mentorship Programs", cost: 34000, employees: 22 },
    { category: "Career Counseling", cost: 28000, employees: 18 },
  ];

  // Chart data for attrition costs by department
  const chartData = attritionCosts.map(dept => ({
    department: dept.department,
    cost: dept.totalCost / 1000 // Convert to thousands for better readability
  }));

  // Pie chart data for investment breakdown
  const pieData = investmentData.map(item => ({
    name: item.category,
    value: item.cost,
    employees: item.employees
  }));

  const COLORS = ['#840DD7', '#9320E7', '#A855F7', '#C084FC', '#DDD6FE'];

  const totalAttritionCost = attritionCosts.reduce((sum, dept) => sum + dept.totalCost, 0);
  const totalInvestmentCost = investmentData.reduce((sum, item) => sum + item.cost, 0);
  const totalEmployeesSupported = investmentData.reduce((sum, item) => sum + item.employees, 0);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Date Range Selector */}
      <Card className="border-2 border-purple-200">
        <CardContent className="p-4">
          <DateRangeSelector
            selectedRange={selectedRange}
            customDateRange={customDateRange}
            onRangeSelect={handleRangeSelect}
          />
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-2 border-red-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-8 w-8 text-red-600" />
              <div>
                <p className="text-sm font-medium text-red-600">Total Attrition Cost</p>
                <p className="text-2xl font-bold text-red-700">{formatCurrency(totalAttritionCost)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-sm font-medium text-green-600">Investment in At-Risk</p>
                <p className="text-2xl font-bold text-green-700">{formatCurrency(totalInvestmentCost)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-blue-600">Employees Supported</p>
                <p className="text-2xl font-bold text-blue-700">{totalEmployeesSupported}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-purple-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-sm font-medium text-purple-600">Cost per Employee</p>
                <p className="text-2xl font-bold text-purple-700">{formatCurrency(totalInvestmentCost / totalEmployeesSupported)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attrition Costs Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-red-700">Attrition Costs by Department</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="department" />
                <YAxis />
                <Tooltip 
                  formatter={(value) => [`$${value}K`, 'Cost']}
                  labelStyle={{ color: '#374151' }}
                />
                <Bar dataKey="cost" fill="#DC2626" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Investment Breakdown Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-green-700">Investment Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => formatCurrency(Number(value))} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attrition Cost Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-red-700">Detailed Attrition Costs</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Department</TableHead>
                  <TableHead>Departures</TableHead>
                  <TableHead>Avg Salary</TableHead>
                  <TableHead>Total Cost</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {attritionCosts.map((dept) => (
                  <TableRow key={dept.department}>
                    <TableCell className="font-medium">{dept.department}</TableCell>
                    <TableCell>{dept.departures}</TableCell>
                    <TableCell>{formatCurrency(dept.avgSalary)}</TableCell>
                    <TableCell className="font-semibold text-red-600">
                      {formatCurrency(dept.totalCost)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Investment Details */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-green-700">Investment in At-Risk Employees</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Program</TableHead>
                  <TableHead>Employees</TableHead>
                  <TableHead>Cost</TableHead>
                  <TableHead>Cost/Employee</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {investmentData.map((item) => (
                  <TableRow key={item.category}>
                    <TableCell className="font-medium">{item.category}</TableCell>
                    <TableCell>{item.employees}</TableCell>
                    <TableCell className="font-semibold text-green-600">
                      {formatCurrency(item.cost)}
                    </TableCell>
                    <TableCell>{formatCurrency(item.cost / item.employees)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Key Insights */}
      <Card className="border-2 border-purple-200">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-purple-700">Key Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-red-700">Attrition Impact:</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Engineering has the highest attrition cost at {formatCurrency(1920000)}</li>
                <li>• Average cost per departure: {formatCurrency(totalAttritionCost / attritionCosts.reduce((sum, dept) => sum + dept.departures, 0))}</li>
                <li>• Recruitment and training costs add significant overhead</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-green-700">Investment ROI:</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Investment of {formatCurrency(totalInvestmentCost)} supports {totalEmployeesSupported} at-risk employees</li>
                <li>• Preventing just 1 engineering departure saves ~{formatCurrency(160000)}</li>
                <li>• Current investment is {((totalInvestmentCost / totalAttritionCost) * 100).toFixed(1)}% of attrition costs</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CostAnalysisCard;
