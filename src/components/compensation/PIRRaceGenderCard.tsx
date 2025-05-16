
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PIRSalaryDataTable } from "./PIRSalaryDataTable";

interface PIRRaceGenderCardProps {
  onBack: () => void;
}

export const PIRRaceGenderCard: React.FC<PIRRaceGenderCardProps> = ({
  onBack
}) => {
  return (
    <Card className="border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl text-center">Performance Relative to Starting PIR by Race & Gender</CardTitle>
      </CardHeader>
      <CardContent>
        <PIRSalaryDataTable onBack={onBack} />
      </CardContent>
    </Card>
  );
};
