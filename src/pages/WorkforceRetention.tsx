
import React, { useState, useEffect } from "react";
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
    <div className="container p-4 mx-auto">
      <div className="mb-6">
        <BackButton fallbackPath="/reports/workforce-analytics" label="Back" />
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Workforce Retention</h1>
      
      {/* Custom layout: 3-2-3 rows */}
      <div className="space-y-4 mb-8">
        {/* First row - 3 cards */}
        <div className="flex flex-wrap gap-4 justify-center">
          <CategoryCard 
            title="Companywide Attrition" 
            icon={TrendingDown} 
            onClick={() => handleCardClick('company')}
            isActive={activeCard === 'company'}
          />
          
          <CategoryCard 
            title="Attrition by Manager" 
            icon={Briefcase} 
            onClick={() => handleCardClick('manager')}
            isActive={activeCard === 'manager'}
          />
          
          <CategoryCard 
            title="Attrition by Performance Score" 
            icon={Award} 
            onClick={() => handleCardClick('performance')}
            isActive={activeCard === 'performance'}
          />
        </div>
        
        {/* Second row - 2 cards */}
        <div className="flex flex-wrap gap-4 justify-center">
          <CategoryCard 
            title="Attrition by Race" 
            icon={BarChart2} 
            onClick={() => handleCardClick('race')}
            isActive={activeCard === 'race'}
          />
          
          <CategoryCard 
            title="Attrition by Gender" 
            icon={Users} 
            onClick={() => handleCardClick('gender')}
            isActive={activeCard === 'gender'}
          />
        </div>
        
        {/* Third row - 3 cards */}
        <div className="flex flex-wrap gap-4 justify-center">
          <CategoryCard 
            title="Attrition by Recruiter" 
            icon={Badge} 
            onClick={() => handleCardClick('recruiter')}
            isActive={activeCard === 'recruiter'}
          />
          
          <CategoryCard 
            title="Regrettable Departures" 
            icon={UserX} 
            onClick={() => handleCardClick('regrettable')}
            isActive={activeCard === 'regrettable'}
          />

          <CategoryCard 
            title="Cost Analysis" 
            icon={DollarSign} 
            onClick={() => handleCardClick('cost')}
            isActive={activeCard === 'cost'}
          />
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
  );
};

export default WorkforceRetention;
