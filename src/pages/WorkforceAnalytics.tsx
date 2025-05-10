import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { BackButton } from "@/components/ui/back-button";

const demographicsData = [
  { name: 'Engineering', male: 65, female: 35, nonbinary: 10 },
  { name: 'Product', male: 40, female: 55, nonbinary: 5 },
  { name: 'Design', male: 30, female: 65, nonbinary: 8 },
  { name: 'Marketing', male: 35, female: 60, nonbinary: 12 },
  { name: 'Sales', male: 70, female: 30, nonbinary: 5 },
];

const retentionData = [
  { name: '0-6 months', rate: 92 },
  { name: '6-12 months', rate: 85 },
  { name: '1-2 years', rate: 78 },
  { name: '2-3 years', rate: 72 },
  { name: '3+ years', rate: 68 },
];

const chartConfig = {
  male: { label: "Male", theme: { light: "#0067D9", dark: "#0067D9" } },
  female: { label: "Female", theme: { light: "#FF6B6B", dark: "#FF6B6B" } },
  nonbinary: { label: "Non-binary", theme: { light: "#9320E7", dark: "#9320E7" } },
  rate: { label: "Retention Rate", theme: { light: "#0067D9", dark: "#0067D9" } }
};

const WorkforceAnalytics = () => {
  return (
    <div className="container p-4 mx-auto">
      <div className="mb-6">
        <div className="mb-4">
          <BackButton fallbackPath="/reports" />
        </div>
        
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
              <BreadcrumbPage>Workforce Analytics</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Workforce Analytics</h1>
      
      <Tabs defaultValue="demographics" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="retention">Retention</TabsTrigger>
          <TabsTrigger value="structure">Organizational Structure</TabsTrigger>
        </TabsList>
        
        <TabsContent value="demographics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Employee Demographics by Department</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ChartContainer config={chartConfig}>
                  <BarChart data={demographicsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="male" name="Male" fill="#0067D9" />
                    <Bar dataKey="female" name="Female" fill="#FF6B6B" />
                    <Bar dataKey="nonbinary" name="Non-binary" fill="#9320E7" />
                  </BarChart>
                </ChartContainer>
              </div>
              
              <div className="mt-6 border rounded-md">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Department</TableHead>
                      <TableHead>Male</TableHead>
                      <TableHead>Female</TableHead>
                      <TableHead>Non-binary</TableHead>
                      <TableHead>Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {demographicsData.map((dept) => (
                      <TableRow key={dept.name}>
                        <TableCell className="font-medium">{dept.name}</TableCell>
                        <TableCell>{dept.male}</TableCell>
                        <TableCell>{dept.female}</TableCell>
                        <TableCell>{dept.nonbinary}</TableCell>
                        <TableCell>{dept.male + dept.female + dept.nonbinary}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="retention" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Employee Retention Rates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ChartContainer config={chartConfig}>
                  <BarChart data={retentionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="rate" name="Retention Rate (%)" fill="#0067D9" />
                  </BarChart>
                </ChartContainer>
              </div>
              
              <div className="mt-6 border rounded-md">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tenure</TableHead>
                      <TableHead>Retention Rate (%)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {retentionData.map((item) => (
                      <TableRow key={item.name}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell>{item.rate}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="structure" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Organizational Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 text-center">
                <p className="text-muted-foreground">
                  Organizational chart visualization coming soon.
                </p>
                <p className="mt-4">
                  This section will include a hierarchical view of the company's structure, 
                  showing reporting relationships and team compositions.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WorkforceAnalytics;
