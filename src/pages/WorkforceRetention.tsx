
import React, { useState } from "react";
import { BackButton } from "@/components/ui/back-button";
import { 
  Users, 
  Award, 
  BarChart2, 
  Briefcase, 
  Badge, 
  TrendingDown, 
  UserX 
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "@/components/workforce-retention/CategoryCard";
import CompanyAttritionCard from "@/components/workforce-retention/CompanyAttritionCard";
import ManagerAttritionCard from "@/components/workforce-retention/ManagerAttritionCard";
import PerformanceAttritionCard from "@/components/workforce-retention/PerformanceAttritionCard";
import DemographicAttritionCard from "@/components/workforce-retention/DemographicAttritionCard";
import RegrettableDeparturesCard from "@/components/workforce-retention/RegrettableDeparturesCard";

const WorkforceRetention = () => {
  const navigate = useNavigate();
  const [showManagerAttrition, setShowManagerAttrition] = useState(false);
  const [showCompanyAttrition, setShowCompanyAttrition] = useState(false);
  const [showPerformanceAttrition, setShowPerformanceAttrition] = useState(false);
  const [showRaceAttrition, setShowRaceAttrition] = useState(false);
  const [showGenderAttrition, setShowGenderAttrition] = useState(false);
  const [showRecruiterAttrition, setShowRecruiterAttrition] = useState(false);
  const [showRegrettableDepartures, setShowRegrettableDepartures] = useState(false);

  // Improved click handlers
  const handleCompanyCardClick = () => {
    console.log("Company card clicked, toggling state");
    setShowCompanyAttrition(!showCompanyAttrition);
    
    // Hide other sections
    if (!showCompanyAttrition) {
      setShowManagerAttrition(false);
      setShowPerformanceAttrition(false);
      setShowRaceAttrition(false);
      setShowGenderAttrition(false);
      setShowRecruiterAttrition(false);
      setShowRegrettableDepartures(false);
    }
  };

  const handleManagerCardClick = () => {
    console.log("Manager card clicked, toggling state");
    setShowManagerAttrition(!showManagerAttrition);
    
    // Hide other sections
    if (!showManagerAttrition) {
      setShowCompanyAttrition(false);
      setShowPerformanceAttrition(false);
      setShowRaceAttrition(false);
      setShowGenderAttrition(false);
      setShowRecruiterAttrition(false);
      setShowRegrettableDepartures(false);
    }
  };

  const handlePerformanceCardClick = () => {
    console.log("Performance card clicked, toggling state");
    setShowPerformanceAttrition(!showPerformanceAttrition);
    
    // Hide other sections
    if (!showPerformanceAttrition) {
      setShowManagerAttrition(false);
      setShowCompanyAttrition(false);
      setShowRaceAttrition(false);
      setShowGenderAttrition(false);
      setShowRecruiterAttrition(false);
      setShowRegrettableDepartures(false);
    }
  };

  const handleRaceCardClick = () => {
    console.log("Race card clicked, toggling state");
    setShowRaceAttrition(!showRaceAttrition);
    
    // Hide other sections
    if (!showRaceAttrition) {
      setShowManagerAttrition(false);
      setShowCompanyAttrition(false);
      setShowPerformanceAttrition(false);
      setShowGenderAttrition(false);
      setShowRecruiterAttrition(false);
      setShowRegrettableDepartures(false);
    }
  };

  const handleGenderCardClick = () => {
    console.log("Gender card clicked, toggling state");
    setShowGenderAttrition(!showGenderAttrition);
    
    // Hide other sections
    if (!showGenderAttrition) {
      setShowManagerAttrition(false);
      setShowCompanyAttrition(false);
      setShowPerformanceAttrition(false);
      setShowRaceAttrition(false);
      setShowRecruiterAttrition(false);
      setShowRegrettableDepartures(false);
    }
  };

  const handleRecruiterCardClick = () => {
    console.log("Recruiter card clicked, toggling state");
    setShowRecruiterAttrition(!showRecruiterAttrition);
    
    // Hide other sections
    if (!showRecruiterAttrition) {
      setShowManagerAttrition(false);
      setShowCompanyAttrition(false);
      setShowPerformanceAttrition(false);
      setShowRaceAttrition(false);
      setShowGenderAttrition(false);
      setShowRegrettableDepartures(false);
    }
  };

  const handleRegrettableDeparturesClick = () => {
    console.log("Regrettable departures card clicked, toggling state");
    setShowRegrettableDepartures(!showRegrettableDepartures);
    
    // Hide other sections
    if (!showRegrettableDepartures) {
      setShowManagerAttrition(false);
      setShowCompanyAttrition(false);
      setShowPerformanceAttrition(false);
      setShowRaceAttrition(false);
      setShowGenderAttrition(false);
      setShowRecruiterAttrition(false);
    }
  };

  return (
    <div className="container p-4 mx-auto">
      <div className="mb-6">
        <BackButton fallbackPath="/reports/workforce-analytics" label="Back" />
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Workforce Retention</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Category cards */}
        <CategoryCard 
          title="Companywide Attrition" 
          icon={TrendingDown} 
          onClick={handleCompanyCardClick} 
        />
        
        <CategoryCard 
          title="Attrition by Manager" 
          icon={Briefcase} 
          onClick={handleManagerCardClick} 
        />
        
        <CategoryCard 
          title="Attrition by Performance Score" 
          icon={Award} 
          onClick={handlePerformanceCardClick} 
        />
        
        <CategoryCard 
          title="Attrition by Race" 
          icon={BarChart2} 
          onClick={handleRaceCardClick} 
        />
        
        <CategoryCard 
          title="Attrition by Gender" 
          icon={Users} 
          onClick={handleGenderCardClick} 
        />
        
        <CategoryCard 
          title="Attrition by Recruiter" 
          icon={Badge} 
          onClick={handleRecruiterCardClick} 
        />
        
        <CategoryCard 
          title="Regrettable Departures" 
          icon={UserX} 
          onClick={handleRegrettableDeparturesClick} 
        />
      </div>

      {/* Display the selected content */}
      {showCompanyAttrition && <CompanyAttritionCard />}
      {showManagerAttrition && <ManagerAttritionCard />}
      {showPerformanceAttrition && <PerformanceAttritionCard />}
      {showRaceAttrition && <DemographicAttritionCard type="race" title="Race" />}
      {showGenderAttrition && <DemographicAttritionCard type="gender" title="Gender" />}
      {showRecruiterAttrition && <DemographicAttritionCard type="recruiter" title="Recruiter" />}
      {showRegrettableDepartures && <RegrettableDeparturesCard />}
    </div>
  );
};

export default WorkforceRetention;
