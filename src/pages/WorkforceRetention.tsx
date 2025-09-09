
import React from "react";
import { useNavigate } from "react-router-dom";
import { DashboardHeader } from "@/components/DashboardHeader";
import { BackButton } from "@/components/ui/back-button";
import { 
  Users, 
  Award, 
  BarChart2, 
  Briefcase, 
  Badge, 
  TrendingDown, 
  UserX,
  DollarSign
} from "lucide-react";
import CategoryCard from "@/components/workforce-retention/CategoryCard";
import { useToast } from "@/hooks/use-toast";

const WorkforceRetention = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  // Function to handle card clicks - navigate to new pages
  const handleCardClick = (cardName: string) => {
    console.log(`Card clicked: ${cardName}`);
    
    const reportUrls = {
      company: "/reports/workforce-retention/company-attrition",
      manager: "/reports/workforce-retention/manager-attrition", 
      performance: "/reports/workforce-retention/performance-attrition",
      race: "/reports/workforce-retention/race-attrition",
      gender: "/reports/workforce-retention/gender-attrition",
      regrettable: "/reports/workforce-retention/regrettable-departures",
      cost: "/reports/workforce-retention/cost-analysis"
    };
    
    const url = reportUrls[cardName as keyof typeof reportUrls];
    if (url) {
      // Navigate to new page
      navigate(url);
    }
    
    // Show a toast notification to confirm the click was registered
    toast({
      title: `${cardName.charAt(0).toUpperCase() + cardName.slice(1)} report`,
      description: "Loading report...",
      duration: 2000,
    });
  };

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader title="Workforce Retention" />
      <div className="flex-1 p-4 overflow-auto bg-background">
        <div className="mb-6">
          <BackButton fallbackPath="/reports/workforce-analytics" label="Back" />
        </div>
        
      {/* Brick-style staggered layout */}
      <div className="space-y-24 mb-8">
        {/* Row 1 - Full alignment */}
        <div className="flex flex-wrap gap-16 justify-center">
          <div className="flex-1 min-w-[300px] max-w-[400px]">
            <CategoryCard 
              title="Companywide Attrition" 
              icon={TrendingDown} 
              onClick={() => handleCardClick('company')}
              isActive={false}
            />
          </div>
          
          <div className="flex-1 min-w-[300px] max-w-[400px]">
            <CategoryCard 
              title="Attrition by Manager" 
              icon={Briefcase} 
              onClick={() => handleCardClick('manager')}
              isActive={false}
            />
          </div>
          
          <div className="flex-1 min-w-[300px] max-w-[400px]">
            <CategoryCard 
              title="Attrition by Performance Score" 
              icon={Award} 
              onClick={() => handleCardClick('performance')}
              isActive={false}
            />
          </div>
        </div>
        
        {/* Row 2 - Offset by half tile width (brick pattern) */}
        <div className="flex flex-wrap gap-16 justify-center pl-[calc(50%/3)]">
          <div className="flex-1 min-w-[300px] max-w-[400px]">
            <CategoryCard 
              title="Attrition by Race" 
              icon={BarChart2} 
              onClick={() => handleCardClick('race')}
              isActive={false}
            />
          </div>
          
          <div className="flex-1 min-w-[300px] max-w-[400px]">
            <CategoryCard 
              title="Attrition by Gender" 
              icon={Users} 
              onClick={() => handleCardClick('gender')}
              isActive={false}
            />
          </div>
        </div>
        
        {/* Row 3 - Full alignment */}
        <div className="flex flex-wrap gap-16 justify-center">
          <div className="flex-1 min-w-[300px] max-w-[400px]">
            <CategoryCard 
              title="Regrettable Departures" 
              icon={UserX} 
              onClick={() => handleCardClick('regrettable')}
              isActive={false}
            />
          </div>

          <div className="flex-1 min-w-[300px] max-w-[400px]">
            <CategoryCard 
              title="Cost Analysis" 
              icon={DollarSign} 
              onClick={() => handleCardClick('cost')}
              isActive={false}
            />
          </div>
        </div>
      </div>

      {/* Note: Individual reports now open in separate windows */}
      </div>
    </div>
  );
};

export default WorkforceRetention;
