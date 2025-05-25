
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
    <Card className="border-2 border-[#840DD7] bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl text-center text-[#512888]">Comp By Job Grade & Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <CompensationDataTable onBack={onBack} />
      </CardContent>
    </Card>
  );
};
