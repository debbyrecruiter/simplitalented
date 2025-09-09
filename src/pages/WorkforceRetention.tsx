
import React, { useState, useEffect } from "react";
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
import CompanyAttritionCard from "@/components/workforce-retention/CompanyAttritionCard";
import ManagerAttritionCard from "@/components/workforce-retention/ManagerAttritionCard";
import PerformanceAttritionCard from "@/components/workforce-retention/PerformanceAttritionCard";
import DemographicAttritionCard from "@/components/workforce-retention/DemographicAttritionCard";
import RegrettableDeparturesCard from "@/components/workforce-retention/RegrettableDeparturesCard";
import CostAnalysisCard from "@/components/workforce-retention/CostAnalysisCard";
import { useToast } from "@/hooks/use-toast";

const WorkforceRetention = () => {
  // Use a single activeCard state instead of multiple boolean states
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const { toast } = useToast();

  // Function to handle card clicks
  const handleCardClick = (cardName: string) => {
    console.log(`Card clicked: ${cardName}`);
    
    // Determine if we're toggling off or on
    const isTogglingOff = activeCard === cardName;
    
    // Toggle the card if it's already active, otherwise set it as active
    setActiveCard(prevCard => prevCard === cardName ? null : cardName);
    
    // Show a toast notification to confirm the click was registered
    toast({
      title: `${cardName.charAt(0).toUpperCase() + cardName.slice(1)} data`,
      description: isTogglingOff ? "Data hidden" : "Data displayed",
      duration: 2000,
    });
  };

  // Log state changes to help debug
  useEffect(() => {
    console.log(`Active card changed to: ${activeCard}`);
  }, [activeCard]);

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader title="Workforce Retention" />
      <div className="flex-1 p-4 overflow-auto bg-background">
        <div className="mb-6">
          <BackButton fallbackPath="/reports/workforce-analytics" label="Back" />
        </div>
        
      {/* Brick-style staggered layout */}
      <div className="space-y-6 mb-8">
        {/* Row 1 - Full alignment */}
        <div className="flex flex-wrap gap-4 justify-start">
          <div className="w-[300px]">
            <CategoryCard 
              title="Companywide Attrition" 
              icon={TrendingDown} 
              onClick={() => handleCardClick('company')}
              isActive={activeCard === 'company'}
            />
          </div>
          
          <div className="w-[300px]">
            <CategoryCard 
              title="Attrition by Manager" 
              icon={Briefcase} 
              onClick={() => handleCardClick('manager')}
              isActive={activeCard === 'manager'}
            />
          </div>
          
          <div className="w-[300px]">
            <CategoryCard 
              title="Attrition by Performance Score" 
              icon={Award} 
              onClick={() => handleCardClick('performance')}
              isActive={activeCard === 'performance'}
            />
          </div>
        </div>
        
        {/* Row 2 - Offset by half tile width (brick pattern) */}
        <div className="flex flex-wrap gap-4 justify-start ml-[150px]">
          <div className="w-[300px]">
            <CategoryCard 
              title="Attrition by Race" 
              icon={BarChart2} 
              onClick={() => handleCardClick('race')}
              isActive={activeCard === 'race'}
            />
          </div>
          
          <div className="w-[300px]">
            <CategoryCard 
              title="Attrition by Gender" 
              icon={Users} 
              onClick={() => handleCardClick('gender')}
              isActive={activeCard === 'gender'}
            />
          </div>
        </div>
        
        {/* Row 3 - Full alignment */}
        <div className="flex flex-wrap gap-4 justify-start">
          <div className="w-[300px]">
            <CategoryCard 
              title="Regrettable Departures" 
              icon={UserX} 
              onClick={() => handleCardClick('regrettable')}
              isActive={activeCard === 'regrettable'}
            />
          </div>

          <div className="w-[300px]">
            <CategoryCard 
              title="Cost Analysis" 
              icon={DollarSign} 
              onClick={() => handleCardClick('cost')}
              isActive={activeCard === 'cost'}
            />
          </div>
        </div>
      </div>

      {/* Display the selected content based on activeCard state */}
      <div className="mt-8">
        {activeCard === 'company' && <CompanyAttritionCard />}
        {activeCard === 'manager' && <ManagerAttritionCard />}
        {activeCard === 'performance' && <PerformanceAttritionCard />}
        {activeCard === 'race' && <DemographicAttritionCard type="race" title="Race" />}
        {activeCard === 'gender' && <DemographicAttritionCard type="gender" title="Gender" />}
        {activeCard === 'recruiter' && <DemographicAttritionCard type="recruiter" title="Recruiter" />}
        {activeCard === 'regrettable' && <RegrettableDeparturesCard />}
        {activeCard === 'cost' && <CostAnalysisCard />}
      </div>
      </div>
    </div>
  );
};

export default WorkforceRetention;
