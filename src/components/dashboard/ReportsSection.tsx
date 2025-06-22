
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarChart2, DollarSign, FileText } from "lucide-react";

export const ReportsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="flex justify-center items-center">
        <div className="w-4/5 h-0 pb-[80%] relative">
          <Card 
            className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden absolute inset-0 flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors"
          >
            <CardHeader className="flex flex-col items-center justify-center h-full text-center pb-0 pt-0">
              <BarChart2 className="h-12 w-12 text-[#512888] mb-2" />
              <CardTitle className="text-4xl font-small text-[#9320E7] px-8">
                Workforce Analytics
              </CardTitle>
              <CardContent className="p-4">
                <Button asChild>
                  <Link to="/reports/workforce-analytics">View Reports</Link>
                </Button>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
      </div>
      
      <div className="flex justify-center items-center">
        <div className="w-4/5 h-0 pb-[80%] relative">
          <Card 
            className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden absolute inset-0 flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors"
          >
            <CardHeader className="flex flex-col items-center justify-center h-full text-center pb-0 pt-0">
              <DollarSign className="h-12 w-12 text-[#512888] mb-2" />
              <CardTitle className="text-4xl font-small text-[#9320E7] px-8">
                Compensation Analysis
              </CardTitle>
              <CardContent className="p-4">
                <Button asChild>
                  <Link to="/reports/compensation-analysis">View Reports</Link>
                </Button>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-4/5 h-0 pb-[80%] relative">
          <Card 
            className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden absolute inset-0 flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors"
          >
            <CardHeader className="flex flex-col items-center justify-center h-full text-center pb-0 pt-0">
              <FileText className="h-12 w-12 text-[#512888] mb-2" />
              <CardTitle className="text-4xl font-small text-[#9320E7] px-8">
                Build A Custom Report
              </CardTitle>
              <CardContent className="p-4">
                <Button variant="outline">Coming Soon</Button>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};
