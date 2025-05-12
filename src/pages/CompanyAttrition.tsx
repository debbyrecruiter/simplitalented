
import React, { useState } from "react";
import { BackButton } from "@/components/ui/back-button";
import { Card } from "@/components/ui/card";
import { departmentAttritionData, departmentYearOverYearData } from "@/data/demographicsData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CompanyAttrition = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  
  // Define color constants
  const VIVID_PURPLE = "#8B5CF6";   // For total attrition
  const MAGENTA_PINK = "#D946EF";   // For voluntary attrition
  const BRIGHT_ORANGE = "#F97316";  // For involuntary attrition

  // Calculate overall attrition rates as averages from department data
  const overallAttritionRate = parseFloat((departmentAttritionData.reduce((sum, dept) => sum + dept.attritionRate, 0) / departmentAttritionData.length).toFixed(1));
  const overallVoluntaryRate = parseFloat((departmentAttritionData.reduce((sum, dept) => sum + dept.voluntaryRate, 0) / departmentAttritionData.length).toFixed(1));
  const overallInvoluntaryRate = parseFloat((departmentAttritionData.reduce((sum, dept) => sum + dept.involuntaryRate, 0) / departmentAttritionData.length).toFixed(1));

  return (
    <div className="container p-4 mx-auto">
      <div className="mb-6">
        <BackButton fallbackPath="/reports/workforce-retention" label="Back" />
      </div>
      
      <h1 className="text-3xl font-bold mb-6 text-[#512888]">Company Attrition Analysis</h1>
      
      <div className="space-y-6 p-4">
        {/* Overall attrition rate cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6 text-center bg-white border border-[#8B5CF6] rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-[#512888]">Overall Attrition Rate</h3>
            <p className="text-4xl font-bold mt-2 text-[#8B5CF6]">{overallAttritionRate}%</p>
          </Card>
          
          <Card className="p-6 text-center bg-white border border-[#D946EF] rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-[#512888]">Voluntary Attrition</h3>
            <p className="text-4xl font-bold mt-2 text-[#D946EF]">{overallVoluntaryRate}%</p>
          </Card>
          
          <Card className="p-6 text-center bg-white border border-[#F97316] rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-[#512888]">Involuntary Attrition</h3>
            <p className="text-4xl font-bold mt-2 text-[#F97316]">{overallInvoluntaryRate}%</p>
          </Card>
        </div>
        
        <Tabs defaultValue="breakdown" className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="breakdown">Department Breakdown</TabsTrigger>
            <TabsTrigger value="trends">Historical Trends</TabsTrigger>
          </TabsList>
          
          <TabsContent value="breakdown">
            <Card className="p-6 bg-white border border-[#8B5CF6] rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-[#512888] mb-4">Attrition by Department</h3>
              <p className="mb-4 text-gray-600">
                {selectedDepartment ? 
                  `Showing detailed data for ${selectedDepartment}. Click the bar again to show all departments.` : 
                  'Select a department to see detailed data.'}
              </p>
              
              {/* Removed graph placeholder */}
              <div className="bg-white rounded-lg p-8 text-center">
                <p className="text-lg text-gray-500">Graphs have been completely removed</p>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="trends">
            <Card className="p-6 bg-white border border-[#8B5CF6] rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-[#512888] mb-4">Department Attrition Trends (2020-2024)</h3>
              <p className="mb-4 text-gray-600">
                {selectedDepartment 
                  ? `Showing historical trends for ${selectedDepartment}. Select a department on the Breakdown tab to change view.` 
                  : 'Showing overall trends. Select a department on the Breakdown tab to see specific trends.'}
              </p>
              
              {/* Removed graph placeholder */}
              <div className="bg-white rounded-lg p-8 text-center">
                <p className="text-lg text-gray-500">Graphs have been completely removed</p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="text-sm text-muted-foreground mt-2">
          <p>* Attrition rates calculated as the percentage of employees who left the company in the past 12 months.</p>
          <p>* Voluntary attrition refers to employees who resigned. Involuntary attrition refers to terminations.</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyAttrition;
