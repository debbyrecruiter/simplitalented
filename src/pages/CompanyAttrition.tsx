
import React from "react";
import { BackButton } from "@/components/ui/back-button";
import { Card } from "@/components/ui/card";

const overallAttritionRate = 16.5; // Company-wide attrition rate
const overallVoluntaryRate = 9.7;   // Company-wide voluntary attrition
const overallInvoluntaryRate = 6.8; // Company-wide involuntary attrition

const CompanyAttrition = () => {
  return (
    <div className="container p-4 mx-auto">
      <div className="mb-6">
        <BackButton fallbackPath="/reports/workforce-retention" label="Back" />
      </div>
      
      <h1 className="text-3xl font-bold mb-6 text-[#512888]">Company Attrition Analysis</h1>
      
      <div className="space-y-6 p-4">
        {/* Overall attrition rate cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6 text-center bg-white border border-[#9b87f5] rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-[#512888]">Overall Attrition Rate</h3>
            <p className="text-4xl font-bold mt-2 text-[#512888]">{overallAttritionRate}%</p>
          </Card>
          
          <Card className="p-6 text-center bg-white border border-[#6E59A5] rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-[#512888]">Voluntary Attrition</h3>
            <p className="text-4xl font-bold mt-2 text-[#6E59A5]">{overallVoluntaryRate}%</p>
          </Card>
          
          <Card className="p-6 text-center bg-white border border-[#D6BCFA] rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-[#512888]">Involuntary Attrition</h3>
            <p className="text-4xl font-bold mt-2 text-[#D6BCFA]">{overallInvoluntaryRate}%</p>
          </Card>
        </div>
        
        <div className="text-sm text-muted-foreground mt-2">
          <p>* Attrition rates calculated as the percentage of employees who left the company in the past 12 months.</p>
          <p>* Voluntary attrition refers to employees who resigned. Involuntary attrition refers to terminations.</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyAttrition;
