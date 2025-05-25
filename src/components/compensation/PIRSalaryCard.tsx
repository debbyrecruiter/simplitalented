
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PIRSalaryDataTable } from "./PIRSalaryDataTable";

interface PIRSalaryCardProps {
  onBack: () => void;
}

export const PIRSalaryCard: React.FC<PIRSalaryCardProps> = ({
  onBack
}) => {
  return (
    <Card className="border-2 border-[#840DD7] bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl text-center text-[#512888]">Performance Relative to Starting PIR Salary</CardTitle>
      </CardHeader>
      <CardContent>
        <PIRSalaryDataTable onBack={onBack} />
      </CardContent>
    </Card>
  );
};
