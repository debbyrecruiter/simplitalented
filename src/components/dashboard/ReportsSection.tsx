
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarChart2, Users, DollarSign, LineChart } from "lucide-react";

export const ReportsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-lg shadow-sm p-4">
        <CardHeader>
          <CardTitle className="flex items-center">
            <BarChart2 className="mr-2 h-5 w-5 text-[#512888]" />
            Workforce Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">View detailed reports about employee demographics, retention rates, and organizational structure.</p>
          <Button asChild>
            <Link to="/reports/workforce-analytics">View Reports</Link>
          </Button>
        </CardContent>
      </Card>
      <Card className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-lg shadow-sm p-4">
        <CardHeader>
          <CardTitle className="flex items-center">
            <DollarSign className="mr-2 h-5 w-5 text-[#512888]" />
            Compensation Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Review salary benchmarks, equity distribution, and compensation trends across departments.</p>
          <Button asChild>
            <Link to="/reports/compensation-analysis">View Reports</Link>
          </Button>
        </CardContent>
      </Card>
      <Card className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-lg shadow-sm p-4">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="mr-2 h-5 w-5 text-[#512888]" />
            Diversity & Inclusion
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Monitor diversity metrics and inclusion initiatives throughout the organization.</p>
          <Button variant="outline">Coming Soon</Button>
        </CardContent>
      </Card>
      <Card className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-lg shadow-sm p-4">
        <CardHeader>
          <CardTitle className="flex items-center">
            <LineChart className="mr-2 h-5 w-5 text-[#512888]" />
            Performance Trends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Analyze performance review data and identify patterns across teams and departments.</p>
          <Button variant="outline">Coming Soon</Button>
        </CardContent>
      </Card>
    </div>
  );
};
