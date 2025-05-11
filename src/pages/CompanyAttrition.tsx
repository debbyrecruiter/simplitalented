
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
      
      