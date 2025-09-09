
import React, { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackButton } from "@/components/ui/back-button";
import { Users } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import GenderDemographics from "@/components/demographics/GenderDemographics";
import AgeDemographics from "@/components/demographics/AgeDemographics";
import RaceDemographics from "@/components/demographics/RaceDemographics";

const WorkforceDemographics = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>("gender");

  const handleCardClick = (category: string) => {
    setSelectedCategory(category);
  };

  const renderDemographicSection = () => {
    switch (selectedCategory) {
      case "gender":
        return <GenderDemographics />;
      case "race":
        return <RaceDemographics />;
      case "age":
        return <AgeDemographics />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader title="Workforce Demographics" />
      <div className="flex-1 p-4 overflow-auto bg-background">
        <div className="mb-6">
          <BackButton fallbackPath="/reports/workforce-analytics" label="Back" />
        </div>
        
        {/* Brick-style staggered layout */}
        <div className="space-y-6 mb-8">
          {/* Row 1 - Full alignment */}
          <div className="flex flex-wrap gap-4 justify-start">
            <div className="w-[300px]">
              <Card 
                className={`shadow-lg relative cursor-pointer hover:scale-105 transition-all duration-300 h-80 w-full flex flex-col flex-shrink-0 ${selectedCategory === "gender" ? "ring-4 ring-white/50" : ""}`}
                onClick={() => handleCardClick("gender")}
                style={{ background: 'linear-gradient(135deg, #f403d1, #64b5f6)' }}
              >
                <CardHeader className="flex flex-col items-center text-center pt-6 pb-3 flex-shrink-0">
                  <div className="bg-white/20 rounded-full p-4 mb-4 shadow-md">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white mb-2">
                    Gender
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-6 flex-1 flex flex-col justify-center text-center">
                  <p className="text-white/80 text-sm">
                    Analyze gender distribution across the organization
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="w-[300px]">
              <Card 
                className={`shadow-lg relative cursor-pointer hover:scale-105 transition-all duration-300 h-80 w-full flex flex-col flex-shrink-0 ${selectedCategory === "race" ? "ring-4 ring-white/50" : ""}`}
                onClick={() => handleCardClick("race")}
                style={{ background: 'linear-gradient(135deg, #f403d1, #64b5f6)' }}
              >
                <CardHeader className="flex flex-col items-center text-center pt-6 pb-3 flex-shrink-0">
                  <div className="bg-white/20 rounded-full p-4 mb-4 shadow-md">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white mb-2">
                    Race
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-6 flex-1 flex flex-col justify-center text-center">
                  <p className="text-white/80 text-sm">
                    View racial and ethnic diversity metrics
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Row 2 - Offset by half tile width (brick pattern) */}
          <div className="flex flex-wrap gap-4 justify-start ml-[150px]">
            <div className="w-[300px]">
              <Card 
                className={`shadow-lg relative cursor-pointer hover:scale-105 transition-all duration-300 h-80 w-full flex flex-col flex-shrink-0 ${selectedCategory === "age" ? "ring-4 ring-white/50" : ""}`}
                onClick={() => handleCardClick("age")}
                style={{ background: 'linear-gradient(135deg, #f403d1, #64b5f6)' }}
              >
                <CardHeader className="flex flex-col items-center text-center pt-6 pb-3 flex-shrink-0">
                  <div className="bg-white/20 rounded-full p-4 mb-4 shadow-md">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white mb-2">
                    Age
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-6 flex-1 flex flex-col justify-center text-center">
                  <p className="text-white/80 text-sm">
                    Explore age demographics and generational trends
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

      {/* Demographics content section */}
      <div className="mt-8">
        <Card className="border-2 border-[#840DD7] bg-white shadow-sm">
          <CardHeader>
            <CardTitle>
              {selectedCategory === "gender" && "Gender Demographics"}
              {selectedCategory === "race" && "Race Demographics"}
              {selectedCategory === "age" && "Age Demographics"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {renderDemographicSection()}
          </CardContent>
        </Card>
      </div>
      </div>
    </div>
  );
};

export default WorkforceDemographics;
