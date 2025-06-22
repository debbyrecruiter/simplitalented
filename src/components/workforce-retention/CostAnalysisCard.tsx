
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend } from "recharts";
import { DollarSign, TrendingUp, Users, AlertTriangle, Calendar } from "lucide-react";
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

  // Year-over-year data showing SimpliTalented implementation impact
  const yearOverYearData = [
    { 
      year: 2022, 
      attritionCost: 5200000, 
      investmentCost: 280000, 
      totalCost: 5480000,
      costPerEmployee: 2740,
      period: "Pre-SimpliTalented"
    },
    { 
      year: 2023, 
      attritionCost: 4100000, 
      investmentCost: 320000, 
      totalCost: 4420000,
      costPerEmployee: 2210,
      period: "Implementation Year"
    },
    { 
      year: 2024, 
      attritionCost: 4391000, 
      investmentCost: 372000, 
      totalCost: 4763000,
      costPerEmployee: 2382,
      period: "Post-SimpliTalented"
    }
  ];

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

  // Calculate savings from SimpliTalented implementation
  const preImplementationCost = yearOverYearData[0].totalCost;
  const currentCost = yearOverYearData[2].totalCost;
  const totalSavings = preImplementationCost - currentCost;
  const savingsPercentage = ((totalSavings / preImplementationCost) * 100);

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

      {/* Year-over-Year Comparison - NEW SECTION */}
      <Card className="border-2 border-blue-200">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-blue-700 flex items-center gap-2">
            <Calendar className="h-6 w-6" />
            Year-over-Year Cost Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* YOY Chart */}
            <div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={yearOverYearData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
                  <Tooltip 
                    formatter={(value, name) => [
                      formatCurrency(Number(value)), 
                      name === 'attritionCost' ? 'Attrition Cost' : 
                      name === 'investmentCost' ? 'Investment Cost' : 'Total Cost'
                    ]}
                    labelStyle={{ color: '#374151' }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="attritionCost" 
                    stroke="#DC2626" 
                    strokeWidth={3}
                    name="Attrition Cost"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="investmentCost" 
                    stroke="#059669" 
                    strokeWidth={3}
                    name="Investment Cost"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="totalCost" 
                    stroke="#7C3AED" 
                    strokeWidth={3}
                    name="Total Cost"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* YOY Summary */}
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">SimpliTalented Implementation Impact</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Implementation Date:</span>
                    <span className="font-medium">January 2023</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pre-Implementation (2022):</span>
                    <span className="font-medium text-red-600">{formatCurrency(preImplementationCost)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Current Year (2024):</span>
                    <span className="font-medium text-green-600">{formatCurrency(currentCost)}</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between font-semibold">
                    <span>Total Savings:</span>
                    <span className="text-green-600">{formatCurrency(totalSavings)}</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Savings Percentage:</span>
                    <span className="text-green-600">{savingsPercentage.toFixed(1)}%</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-700 mb-2">Key Observations</h4>
                <ul className="text-sm space-y-1 text-yellow-800">
                  <li>• 21% reduction in total workforce costs since implementation</li>
                  <li>• Attrition costs decreased by 15.5% in first year</li>
                  <li>• Investment in retention increased by 33%</li>
                  <li>• ROI on SimpliTalented: 1,940% over 2 years</li>
                </ul>
              </div>
            </div>
          </div>

          {/* YOY Data Table */}
          <div className="mt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Year</TableHead>
                  <TableHead>Period</TableHead>
                  <TableHead>Attrition Cost</TableHead>
                  <TableHead>Investment Cost</TableHead>
                  <TableHead>Total Cost</TableHead>
                  <TableHead>Cost/Employee</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {yearOverYearData.map((row) => (
                  <TableRow key={row.year} className={row.year === 2023 ? "bg-blue-50" : ""}>
                    <TableCell className="font-medium">{row.year}</TableCell>
                    <TableCell>{row.period}</TableCell>
                    <TableCell className="text-red-600">{formatCurrency(row.attritionCost)}</TableCell>
                    <TableCell className="text-green-600">{formatCurrency(row.investmentCost)}</TableCell>
                    <TableCell className="font-semibold">{formatCurrency(row.totalCost)}</TableCell>
                    <TableCell>{formatCurrency(row.costPerEmployee)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
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
