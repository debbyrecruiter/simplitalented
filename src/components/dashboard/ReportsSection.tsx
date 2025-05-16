
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarChart2, DollarSign, LineChart } from "lucide-react";

export const ReportsSection: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  // Common card component to ensure consistency
  const ReportCard = ({ 
    title, 
    icon: Icon, 
    path, 
    comingSoon = false 
  }: { 
    title: string; 
    icon: React.ElementType; 
    path?: string; 
    comingSoon?: boolean;
  }) => (
    <div className="aspect-square w-full relative">
      <Card 
        className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden absolute inset-0 flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors"
        onClick={() => !comingSoon && path && handleCardClick(path)}
      >
        <CardHeader className="flex flex-col items-center justify-center h-full text-center pb-0 pt-0">
          <Icon className="h-12 w-12 text-[#512888] mb-2" />
          <CardTitle className="text-3xl font-medium text-[#9320E7] px-4">
            {title}
          </CardTitle>
          <CardContent className="p-4">
            <Button variant={comingSoon ? "outline" : "default"}>
              {comingSoon ? "Coming Soon" : "View Reports"}
            </Button>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ReportCard 
        title="Workforce Analytics" 
        icon={BarChart2} 
        path="/reports/workforce-analytics" 
      />
      
      <ReportCard 
        title="Compensation Analysis" 
        icon={DollarSign} 
        path="/reports/compensation-analysis" 
      />
      
      <ReportCard 
        title="Performance Trends" 
        icon={LineChart} 
        comingSoon={true} 
      />
    </div>
  );
};
