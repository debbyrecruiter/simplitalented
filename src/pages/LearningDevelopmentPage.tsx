
import React from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { BackButton } from "@/components/ui/back-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LearningDevelopmentPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader title="Learning & Development" />
      <div className="flex-1 p-4 overflow-auto">
        <div className="space-y-6">
          <div className="mb-6">
            <BackButton fallbackPath="/" />
          </div>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              <Card 
                className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors"
              >
                <CardHeader className="flex flex-col items-center justify-center text-center pb-0 pt-10">
                  <CardTitle className="text-5xl font-small text-[#9320E7] leading-tight">
                    Learning &<br />Development<br />Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 flex-1 flex flex-col justify-center text-center">
                  <div className="text-2xl font-bold truncate">
                    View Progress
                  </div>
                  <p className="text-sm text-muted-foreground truncate">
                    Track learning metrics
                  </p>
                </CardContent>
              </Card>

              <Card 
                className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center cursor-pointer hover:border-blue-600 transition-colors"
              >
                <CardHeader className="flex flex-col items-center justify-center text-center pb-0 pt-10">
                  <CardTitle className="text-5xl font-small text-[#9320E7] leading-tight">
                    Assign<br />Training
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 flex-1 flex flex-col justify-center text-center">
                  <div className="text-2xl font-bold truncate">
                    Manage Training
                  </div>
                  <p className="text-sm text-muted-foreground truncate">
                    Assign courses to employees
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningDevelopmentPage;
