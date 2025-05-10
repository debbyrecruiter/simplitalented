
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackButton } from "@/components/ui/back-button";
import { Users } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const WorkforceDemographics = () => {
  return (
    <div className="container p-4 mx-auto">
      <div className="mb-6">
        <BackButton fallbackPath="/reports/workforce-analytics" label="Back" />
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Workforce Demographics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="relative">
          <AspectRatio ratio={1}>
            <Card className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm h-full w-full flex flex-col items-center justify-center">
              <CardHeader className="text-center pt-8">
                <CardTitle className="flex flex-col items-center">
                  <Users className="mb-2 h-8 w-8 text-[#512888]" />
                  Gender
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center flex-1">
                <p className="text-muted-foreground text-center">
                  Gender distribution data coming soon.
                </p>
              </CardContent>
            </Card>
          </AspectRatio>
        </div>

        <div className="relative">
          <AspectRatio ratio={1}>
            <Card className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm h-full w-full flex flex-col items-center justify-center">
              <CardHeader className="text-center pt-8">
                <CardTitle className="flex flex-col items-center">
                  <Users className="mb-2 h-8 w-8 text-[#512888]" />
                  Race
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center flex-1">
                <p className="text-muted-foreground text-center">
                  Race distribution data coming soon.
                </p>
              </CardContent>
            </Card>
          </AspectRatio>
        </div>

        <div className="relative">
          <AspectRatio ratio={1}>
            <Card className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm h-full w-full flex flex-col items-center justify-center">
              <CardHeader className="text-center pt-8">
                <CardTitle className="flex flex-col items-center">
                  <Users className="mb-2 h-8 w-8 text-[#512888]" />
                  Age
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center flex-1">
                <p className="text-muted-foreground text-center">
                  Age distribution data coming soon.
                </p>
              </CardContent>
            </Card>
          </AspectRatio>
        </div>
      </div>
    </div>
  );
};

export default WorkforceDemographics;
