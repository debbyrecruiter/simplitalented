
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PIRSalaryDataTable } from "./PIRSalaryDataTable";

interface PIRGenderCardProps {
  onBack: () => void;
}

export const PIRGenderCard: React.FC<PIRGenderCardProps> = ({
  onBack
}) => {
  return (
    <Card className="border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl text-center">Starting PIR by Gender</CardTitle>
      </CardHeader>
      <CardContent>
        <PIRSalaryDataTable onBack={onBack} />
      </CardContent>
    </Card>
  );
};
