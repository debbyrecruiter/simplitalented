
import React, { useState } from "react";
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
    <div className="container p-4 mx-auto">
      <div className="mb-6">
        <BackButton fallbackPath="/reports/workforce-analytics" label="Back" />
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Workforce Demographics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card 
          className={`border-12 border-[#840DD7] bg-[#FFFFFF] shadow-sm overflow-hidden aspect-square flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors ${selectedCategory === "gender" ? "ring-4 ring-blue-500" : ""}`}
          onClick={() => handleCardClick("gender")}
        >
          <CardHeader className="text-center">
            <CardTitle className="flex flex-col items-center">
              <Users className="mb-2 h-8 w-8 text-[#512888]" />
              Gender
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <p className="text-muted-foreground text-center">
              Click to view gender distribution
            </p>
          </CardContent>
        </Card>

        <Card 
          className={`border-12 border-[#840DD7] bg-[#FFFFFF] shadow-sm overflow-hidden aspect-square flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors ${selectedCategory === "race" ? "ring-4 ring-blue-500" : ""}`}
          onClick={() => handleCardClick("race")}
        >
          <CardHeader className="text-center">
            <CardTitle className="flex flex-col items-center">
              <Users className="mb-2 h-8 w-8 text-[#512888]" />
              Race
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <p className="text-muted-foreground text-center">
              Click to view race distribution
            </p>
          </CardContent>
        </Card>

        <Card 
          className={`border-12 border-[#840DD7] bg-[#FFFFFF] shadow-sm overflow-hidden aspect-square flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors ${selectedCategory === "age" ? "ring-4 ring-blue-500" : ""}`}
          onClick={() => handleCardClick("age")}
        >
          <CardHeader className="text-center">
            <CardTitle className="flex flex-col items-center">
              <Users className="mb-2 h-8 w-8 text-[#512888]" />
              Age
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <p className="text-muted-foreground text-center">
              Click to view age distribution
            </p>
          </CardContent>
        </Card>
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
  );
};

export default WorkforceDemographics;
