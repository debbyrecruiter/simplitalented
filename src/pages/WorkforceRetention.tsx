
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackButton } from "@/components/ui/back-button";
import { Users, Award, BarChart2, LineChart } from "lucide-react";

const WorkforceRetention = () => {
  return (
    <div className="container p-4 mx-auto">
      <div className="mb-6">
        <BackButton fallbackPath="/reports/workforce-analytics" label="Back" />
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Workforce Retention</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-lg shadow-sm p-4">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5 text-[#512888]" />
              Company Attrition
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-100 rounded-md">
              <p className="text-muted-foreground">Company attrition data visualization will appear here</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-lg shadow-sm p-4">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="mr-2 h-5 w-5 text-[#512888]" />
              Attrition by Performance Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-100 rounded-md">
              <p className="text-muted-foreground">Performance-based attrition data visualization will appear here</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-lg shadow-sm p-4">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart2 className="mr-2 h-5 w-5 text-[#512888]" />
              Attrition by Race
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-100 rounded-md">
              <p className="text-muted-foreground">Race-based attrition data visualization will appear here</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-lg shadow-sm p-4">
          <CardHeader>
            <CardTitle className="flex items-center">
              <LineChart className="mr-2 h-5 w-5 text-[#512888]" />
              Attrition by Gender
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-100 rounded-md">
              <p className="text-muted-foreground">Gender-based attrition data visualization will appear here</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WorkforceRetention;
