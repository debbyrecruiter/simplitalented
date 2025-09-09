
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
        
        {/* Single row - all cards centered */}
        <div className="flex flex-wrap gap-16 justify-center mb-8">
          <div className="flex-1 min-w-[300px] max-w-[400px]">
            <div className="relative">
              <div 
                className="absolute top-0 left-0 w-full h-full rounded-2xl opacity-70 blur-xl"
                style={{
                  background: 'linear-gradient(-45deg, #b84fce 0%, #d4acfb 100%)',
                  transform: 'translate(25px, 27px) scale(0.95)',
                  zIndex: -1
                }}
              ></div>
              <Card 
                className={`card-modern cursor-pointer w-full shadow-lg relative z-10 ${selectedCategory === "gender" ? "ring-4 ring-white/50" : ""}`}
                onClick={() => handleCardClick("gender")}
                style={{ background: 'linear-gradient(135deg, #f403d1, #64b5f6)' } as React.CSSProperties}
              >
                <CardHeader className="flex flex-row items-start justify-between p-4">
                  <div className="flex flex-col">
                    <CardTitle className="text-white text-xl font-bold">
                      Gender
                    </CardTitle>
                    <div className="text-white text-sm opacity-90">
                      Distribution analysis
                    </div>
                  </div>
                  <div className="card-icon">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>

          <div className="flex-1 min-w-[300px] max-w-[400px]">
            <div className="relative">
              <div 
                className="absolute top-0 left-0 w-full h-full rounded-2xl opacity-70 blur-xl"
                style={{
                  background: 'linear-gradient(-45deg, #b84fce 0%, #d4acfb 100%)',
                  transform: 'translate(25px, 27px) scale(0.95)',
                  zIndex: -1
                }}
              ></div>
              <Card 
                className={`card-modern cursor-pointer w-full shadow-lg relative z-10 ${selectedCategory === "race" ? "ring-4 ring-white/50" : ""}`}
                onClick={() => handleCardClick("race")}
                style={{ background: 'linear-gradient(135deg, #f403d1, #64b5f6)' } as React.CSSProperties}
              >
                <CardHeader className="flex flex-row items-start justify-between p-4">
                  <div className="flex flex-col">
                    <CardTitle className="text-white text-xl font-bold">
                      Race
                    </CardTitle>
                    <div className="text-white text-sm opacity-90">
                      Diversity metrics
                    </div>
                  </div>
                  <div className="card-icon">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>

          <div className="flex-1 min-w-[300px] max-w-[400px]">
            <div className="relative">
              <div 
                className="absolute top-0 left-0 w-full h-full rounded-2xl opacity-70 blur-xl"
                style={{
                  background: 'linear-gradient(-45deg, #b84fce 0%, #d4acfb 100%)',
                  transform: 'translate(25px, 27px) scale(0.95)',
                  zIndex: -1
                }}
              ></div>
              <Card 
                className={`card-modern cursor-pointer w-full shadow-lg relative z-10 ${selectedCategory === "age" ? "ring-4 ring-white/50" : ""}`}
                onClick={() => handleCardClick("age")}
                style={{ background: 'linear-gradient(135deg, #f403d1, #64b5f6)' } as React.CSSProperties}
              >
                <CardHeader className="flex flex-row items-start justify-between p-4">
                  <div className="flex flex-col">
                    <CardTitle className="text-white text-xl font-bold">
                      Age
                    </CardTitle>
                    <div className="text-white text-sm opacity-90">
                      Generational trends
                    </div>
                  </div>
                  <div className="card-icon">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </CardHeader>
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
