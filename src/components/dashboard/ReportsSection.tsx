
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarChart2, DollarSign, FileText } from "lucide-react";

export const ReportsSection: React.FC = () => {
  return (
    <div className="p-4">
      {/* Brick-style staggered layout */}
      <div className="space-y-6">
        {/* Row 1 - Full alignment */}
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="w-[300px]">
            <Link to="/reports/workforce-analytics">
              <Card 
                className="shadow-lg relative cursor-pointer hover:scale-105 transition-all duration-300 w-full flex flex-col flex-shrink-0"
                style={{ 
                  background: 'linear-gradient(135deg, #f403d1, #64b5f6)',
                  aspectRatio: '16/9'
                }}
              >
                <CardHeader className="flex flex-row items-start justify-between p-4">
                  <div className="flex flex-col">
                    <CardTitle className="text-white text-xl font-bold">
                      Workforce Analytics
                    </CardTitle>
                    <div className="text-white text-sm opacity-90">
                      Performance insights
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-full p-2 shadow-md">
                    <BarChart2 className="h-6 w-6 text-white" />
                  </div>
                </CardHeader>
              </Card>
            </Link>
          </div>
          
          <div className="w-[300px]">
            <Link to="/reports/compensation-analysis">
              <Card 
                className="shadow-lg relative cursor-pointer hover:scale-105 transition-all duration-300 w-full flex flex-col flex-shrink-0"
                style={{ 
                  background: 'linear-gradient(135deg, #F7EAFB, #A076AD)',
                  aspectRatio: '16/9'
                }}
              >
                <CardHeader className="flex flex-row items-start justify-between p-4">
                  <div className="flex flex-col">
                    <CardTitle className="text-white text-xl font-bold">
                      Compensation Analysis
                    </CardTitle>
                    <div className="text-white text-sm opacity-90">
                      Salary benchmarking
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-full p-2 shadow-md">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>

        {/* Row 2 - Offset by half tile width (brick pattern) */}
        <div className="flex flex-wrap gap-4 justify-center pl-[150px]">
          <div className="w-[300px]">
            <Card 
              className="shadow-lg relative cursor-pointer hover:scale-105 transition-all duration-300 w-full flex flex-col flex-shrink-0 opacity-60"
              style={{ 
                background: 'linear-gradient(135deg, #f403d1, #64b5f6)',
                aspectRatio: '16/9'
              }}
            >
              <CardHeader className="flex flex-row items-start justify-between p-4">
                <div className="flex flex-col">
                  <CardTitle className="text-white text-xl font-bold">
                    Custom Reports
                  </CardTitle>
                  <div className="text-white text-sm opacity-90">
                    Coming Soon
                  </div>
                </div>
                <div className="bg-white/20 rounded-full p-2 shadow-md">
                  <FileText className="h-6 w-6 text-white" />
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
