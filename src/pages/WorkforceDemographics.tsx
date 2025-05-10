
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackButton } from "@/components/ui/back-button";
import { Users } from "lucide-react";

const WorkforceDemographics = () => {
  return (
    <div className="container p-4 mx-auto">
      <div className="mb-6">
        <BackButton fallbackPath="/reports/workforce-analytics" label="Back" />
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Workforce Demographics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-lg shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5 text-[#512888]" />
              Gender
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 text-center h-64 flex items-center justify-center">
              <p className="text-muted-foreground">
                Gender distribution data coming soon.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-lg shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5 text-[#512888]" />
              Race
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 text-center h-64 flex items-center justify-center">
              <p className="text-muted-foreground">
                Race distribution data coming soon.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-lg shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5 text-[#512888]" />
              Age
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 text-center h-64 flex items-center justify-center">
              <p className="text-muted-foreground">
                Age distribution data coming soon.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WorkforceDemographics;
