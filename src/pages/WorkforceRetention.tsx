
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BackButton } from "@/components/ui/back-button";
import { Users, Award, BarChart2, LineChart, Briefcase, Badge } from "lucide-react";

const WorkforceRetention = () => {
  return (
    <div className="container p-4 mx-auto">
      <div className="mb-6">
        <BackButton fallbackPath="/reports/workforce-analytics" label="Back" />
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Workforce Retention</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square">
          <div className="flex flex-col items-center justify-center h-full p-4 text-center">
            <div className="flex items-center justify-center mb-3">
              <Users className="h-8 w-8 text-[#512888]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#512888] mb-3 px-4">Company Attrition</h3>
            <CardContent className="p-0 w-full">
              <div className="h-24 sm:h-32 flex items-center justify-center bg-gray-100 rounded-md mx-4">
                <p className="text-muted-foreground text-sm px-2 text-center">Company attrition data visualization will appear here</p>
              </div>
            </CardContent>
          </div>
        </Card>

        <Card className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square">
          <div className="flex flex-col items-center justify-center h-full p-4 text-center">
            <div className="flex items-center justify-center mb-3">
              <Briefcase className="h-8 w-8 text-[#512888]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#512888] mb-3 px-4">Attrition by&#10;Manager</h3>
            <CardContent className="p-0 w-full">
              <div className="h-24 sm:h-32 flex items-center justify-center bg-gray-100 rounded-md mx-4">
                <p className="text-muted-foreground text-sm px-2 text-center">Manager-based attrition data visualization will appear here</p>
              </div>
            </CardContent>
          </div>
        </Card>

        <Card className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square">
          <div className="flex flex-col items-center justify-center h-full p-4 text-center">
            <div className="flex items-center justify-center mb-3">
              <Award className="h-8 w-8 text-[#512888]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#512888] mb-3 px-4">Attrition by&#10;Performance Score</h3>
            <CardContent className="p-0 w-full">
              <div className="h-24 sm:h-32 flex items-center justify-center bg-gray-100 rounded-md mx-4">
                <p className="text-muted-foreground text-sm px-2 text-center">Performance-based attrition data visualization will appear here</p>
              </div>
            </CardContent>
          </div>
        </Card>

        <Card className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square">
          <div className="flex flex-col items-center justify-center h-full p-4 text-center">
            <div className="flex items-center justify-center mb-3">
              <BarChart2 className="h-8 w-8 text-[#512888]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#512888] mb-3 px-4">Attrition by Race</h3>
            <CardContent className="p-0 w-full">
              <div className="h-24 sm:h-32 flex items-center justify-center bg-gray-100 rounded-md mx-4">
                <p className="text-muted-foreground text-sm px-2 text-center">Race-based attrition data visualization will appear here</p>
              </div>
            </CardContent>
          </div>
        </Card>

        <Card className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square">
          <div className="flex flex-col items-center justify-center h-full p-4 text-center">
            <div className="flex items-center justify-center mb-3">
              <LineChart className="h-8 w-8 text-[#512888]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#512888] mb-3 px-4">Attrition by Gender</h3>
            <CardContent className="p-0 w-full">
              <div className="h-24 sm:h-32 flex items-center justify-center bg-gray-100 rounded-md mx-4">
                <p className="text-muted-foreground text-sm px-2 text-center">Gender-based attrition data visualization will appear here</p>
              </div>
            </CardContent>
          </div>
        </Card>

        <Card className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square">
          <div className="flex flex-col items-center justify-center h-full p-4 text-center">
            <div className="flex items-center justify-center mb-3">
              <Badge className="h-8 w-8 text-[#512888]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#512888] mb-3 px-4">Attrition by&#10;Recruiter</h3>
            <CardContent className="p-0 w-full">
              <div className="h-24 sm:h-32 flex items-center justify-center bg-gray-100 rounded-md mx-4">
                <p className="text-muted-foreground text-sm px-2 text-center">Recruiter-based attrition data visualization will appear here</p>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WorkforceRetention;
