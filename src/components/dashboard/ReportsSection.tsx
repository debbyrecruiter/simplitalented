
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarChart2, DollarSign, FileText } from "lucide-react";

export const ReportsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card 
        className="shadow-lg relative cursor-pointer hover:scale-105 transition-all duration-300 h-80 w-full flex flex-col flex-shrink-0"
        style={{ background: 'linear-gradient(135deg, var(--gradient-purple-start), var(--gradient-purple-end))' }}
      >
        <CardHeader className="flex flex-col items-center text-center pt-6 pb-3 flex-shrink-0">
          <div className="bg-white/20 rounded-full p-4 mb-4 shadow-md">
            <BarChart2 className="h-12 w-12 text-white" />
          </div>
          <CardTitle className="text-xl font-bold text-white mb-2">
            Workforce Analytics
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-6 flex-1 flex flex-col justify-end text-center">
          <p className="text-white/80 text-sm mb-4">
            Comprehensive insights into workforce trends and performance metrics
          </p>
          <Button 
            asChild
            className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
          >
            <Link to="/reports/workforce-analytics">View Reports</Link>
          </Button>
        </CardContent>
      </Card>
      
      <Card 
        className="shadow-lg relative cursor-pointer hover:scale-105 transition-all duration-300 h-80 w-full flex flex-col flex-shrink-0"
        style={{ background: 'linear-gradient(135deg, var(--gradient-orange-start), var(--gradient-orange-end))' }}
      >
        <CardHeader className="flex flex-col items-center text-center pt-6 pb-3 flex-shrink-0">
          <div className="bg-white/20 rounded-full p-4 mb-4 shadow-md">
            <DollarSign className="h-12 w-12 text-white" />
          </div>
          <CardTitle className="text-xl font-bold text-white mb-2">
            Compensation Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-6 flex-1 flex flex-col justify-end text-center">
          <p className="text-white/80 text-sm mb-4">
            Detailed compensation data and salary benchmarking insights
          </p>
          <Button 
            asChild
            className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
          >
            <Link to="/reports/compensation-analysis">View Reports</Link>
          </Button>
        </CardContent>
      </Card>

      <Card 
        className="shadow-lg relative cursor-pointer hover:scale-105 transition-all duration-300 h-80 w-full flex flex-col flex-shrink-0"
        style={{ background: 'linear-gradient(135deg, var(--gradient-teal-start), var(--gradient-teal-end))' }}
      >
        <CardHeader className="flex flex-col items-center text-center pt-6 pb-3 flex-shrink-0">
          <div className="bg-white/20 rounded-full p-4 mb-4 shadow-md">
            <FileText className="h-12 w-12 text-white" />
          </div>
          <CardTitle className="text-xl font-bold text-white mb-2">
            Custom Reports
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-6 flex-1 flex flex-col justify-end text-center">
          <p className="text-white/80 text-sm mb-4">
            Build personalized reports tailored to your specific needs
          </p>
          <Button 
            variant="outline"
            className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
          >
            Coming Soon
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
