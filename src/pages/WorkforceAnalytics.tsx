
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { BackButton } from "@/components/ui/back-button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { MetricCard } from "@/components/MetricCard";
import { ArrowDownUp, LayoutGrid } from "lucide-react";

const retentionData = [
  { name: '0-6 months', rate: 92 },
  { name: '6-12 months', rate: 85 },
  { name: '1-2 years', rate: 78 },
  { name: '2-3 years', rate: 72 },
  { name: '3+ years', rate: 68 },
];

const chartConfig = {
  rate: { label: "Retention Rate", theme: { light: "#0067D9", dark: "#0067D9" } }
};

const WorkforceAnalytics = () => {
  const [activeView, setActiveView] = useState<'retention' | 'structure' | null>('retention');
  
  const handleCardClick = (view: 'retention' | 'structure') => {
    if (activeView === view) {
      // If the same card is clicked again, toggle the view off
      setActiveView(null);
    } else {
      setActiveView(view);
    }
  };

  const renderContent = () => {
    switch (activeView) {
      case 'retention':
        return (
          <Card className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-lg shadow-sm">
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
        );
      case 'structure':
        return (
          <Card className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-lg shadow-sm">
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
        );
      default:
        return null;
    }
  };

  return (
    <div className="container p-4 mx-auto">
      <div className="mb-6">
        <BackButton fallbackPath="/reports" label="Back" />
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Workforce Analytics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <MetricCard
          title="Retention"
          value=""
          icon={ArrowDownUp}
          onClick={() => handleCardClick('retention')}
          className={activeView === 'retention' ? 'ring-4 ring-blue-500' : ''}
        />
        <MetricCard
          title="Organizational&#10;Structure"
          value=""
          icon={LayoutGrid}
          onClick={() => handleCardClick('structure')}
          className={activeView === 'structure' ? 'ring-4 ring-blue-500' : ''}
        />
      </div>
      
      {renderContent()}
    </div>
  );
};

export default WorkforceAnalytics;
