
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarChart2, DollarSign, FileText } from "lucide-react";

export const ReportsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Link to="/reports/workforce-analytics">
        <Card 
          className="shadow-lg relative cursor-pointer hover:scale-105 transition-all duration-300 h-80 w-full flex flex-col flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #f403d1, #64b5f6)' }}
        >
          <CardHeader className="flex flex-col items-center text-center pt-6 pb-3 flex-shrink-0">
            <div className="bg-white/20 rounded-full p-4 mb-4 shadow-md">
              <BarChart2 className="h-12 w-12 text-white" />
            </div>
            <CardTitle className="text-xl font-bold text-white mb-2">
              Workforce Analytics
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-6 flex-1 flex flex-col justify-center text-center">
            <p className="text-white/80 text-sm">
              Comprehensive insights into workforce trends and performance metrics
            </p>
          </CardContent>
        </Card>
      </Link>
      
      <Link to="/reports/compensation-analysis">
        <Card 
          className="shadow-lg relative cursor-pointer hover:scale-105 transition-all duration-300 h-80 w-full flex flex-col flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #F7EAFB, #A076AD)' }}
        >
          <CardHeader className="flex flex-col items-center text-center pt-6 pb-3 flex-shrink-0">
            <div className="bg-white/20 rounded-full p-4 mb-4 shadow-md">
              <DollarSign className="h-12 w-12 text-white" />
            </div>
            <CardTitle className="text-xl font-bold text-white mb-2">
              Compensation Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-6 flex-1 flex flex-col justify-center text-center">
            <p className="text-white/80 text-sm">
              Detailed compensation data and salary benchmarking insights
            </p>
          </CardContent>
        </Card>
      </Link>

      <Card 
        className="shadow-lg relative cursor-pointer hover:scale-105 transition-all duration-300 h-80 w-full flex flex-col flex-shrink-0 opacity-60"
        style={{ background: 'linear-gradient(135deg, #f403d1, #64b5f6)' }}
      >
        <CardHeader className="flex flex-col items-center text-center pt-6 pb-3 flex-shrink-0">
          <div className="bg-white/20 rounded-full p-4 mb-4 shadow-md">
            <FileText className="h-12 w-12 text-white" />
          </div>
          <CardTitle className="text-xl font-bold text-white mb-2">
            Custom Reports
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-6 flex-1 flex flex-col justify-center text-center">
          <p className="text-white/80 text-sm mb-2">
            Build personalized reports tailored to your specific needs
          </p>
          <span className="text-white/60 text-xs font-medium">Coming Soon</span>
        </CardContent>
      </Card>
    </div>
  );
};
