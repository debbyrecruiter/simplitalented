
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CompensationDataTable } from "./CompensationDataTable";

interface PerformanceCompensationChartProps {
  onBack: () => void;
}

export const PerformanceCompensationChart: React.FC<PerformanceCompensationChartProps> = ({
  onBack
}) => {
  return (
    <Card className="border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl text-center">Compensation Relative to Performance Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <CompensationDataTable onBack={onBack} />
      </CardContent>
    </Card>
  );
};
