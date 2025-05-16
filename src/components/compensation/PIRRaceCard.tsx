
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PIRSalaryDataTable } from "./PIRSalaryDataTable";

interface PIRRaceCardProps {
  onBack: () => void;
}

export const PIRRaceCard: React.FC<PIRRaceCardProps> = ({
  onBack
}) => {
  return (
    <Card className="border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl text-center">Starting PIR by Race</CardTitle>
      </CardHeader>
      <CardContent>
        <PIRSalaryDataTable onBack={onBack} />
      </CardContent>
    </Card>
  );
};
