
import React from "react";
import { BackButton } from "@/components/ui/back-button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const overallAttritionRate = 16.5; // Company-wide attrition rate
const overallVoluntaryRate = 9.7;   // Company-wide voluntary attrition
const overallInvoluntaryRate = 6.8; // Company-wide involuntary attrition

const CompanyAttrition = () => {
  return (
    <div className="container p-4 mx-auto">
      <div className="mb-6">
        <BackButton fallbackPath="/reports/workforce-retention" label="Back" />
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Company Attrition Analysis</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Overall Attrition Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-[#840DD7]">{overallAttritionRate}%</p>
            <p className="text-sm text-muted-foreground">Company-wide annual attrition rate</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Voluntary Attrition</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-amber-500">{overallVoluntaryRate}%</p>
            <p className="text-sm text-muted-foreground">Employees who chose to leave</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Involuntary Attrition</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-rose-500">{overallInvoluntaryRate}%</p>
            <p className="text-sm text-muted-foreground">Layoffs and terminations</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Understanding Attrition Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <strong>Attrition Rate</strong>: The percentage of employees who leave the organization over a specific period. This includes both voluntary and involuntary departures.
            </p>
            <p className="mb-2">
              <strong>Voluntary Attrition</strong>: Occurs when employees choose to leave the organization on their own accord, such as for a new job opportunity, retirement, or personal reasons.
            </p>
            <p>
              <strong>Involuntary Attrition</strong>: Occurs when the organization initiates the separation, such as through layoffs, terminations for cause, or restructuring.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompanyAttrition;
