
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarChart2, DollarSign, LineChart } from "lucide-react";

export const ReportsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="flex justify-center items-center">
        <Card 
          className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden w-[110px] h-[110px] flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors"
        >
          <CardHeader className="flex flex-col items-center justify-center h-full text-center pb-0 pt-0">
            <BarChart2 className="h-6 w-6 text-[#512888] mb-1" />
            <CardTitle className="text-sm font-small text-[#9320E7] px-2">
              Workforce Analytics
            </CardTitle>
            <CardContent className="p-1">
              <Button size="sm" className="text-xs h-6" asChild>
                <Link to="/reports/workforce-analytics">View</Link>
              </Button>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
      
      <div className="flex justify-center items-center">
        <Card 
          className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden w-[110px] h-[110px] flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors"
        >
          <CardHeader className="flex flex-col items-center justify-center h-full text-center pb-0 pt-0">
            <DollarSign className="h-6 w-6 text-[#512888] mb-1" />
            <CardTitle className="text-sm font-small text-[#9320E7] px-2">
              Compensation
            </CardTitle>
            <CardContent className="p-1">
              <Button size="sm" className="text-xs h-6" asChild>
                <Link to="/reports/compensation-analysis">View</Link>
              </Button>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
      
      <div className="flex justify-center items-center">
        <Card 
          className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden w-[110px] h-[110px] flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors"
        >
          <CardHeader className="flex flex-col items-center justify-center h-full text-center pb-0 pt-0">
            <LineChart className="h-6 w-6 text-[#512888] mb-1" />
            <CardTitle className="text-sm font-small text-[#9320E7] px-2">
              Performance
            </CardTitle>
            <CardContent className="p-1">
              <Button size="sm" className="text-xs h-6" variant="outline">Soon</Button>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};
