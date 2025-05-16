
import React from "react";
import { TooltipProps } from "recharts";

// Custom tooltip props type definition
interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean;
  payload?: Array<{
    payload: {
      name: string;
      jobGrade: string;
      salary: number;
      pir: number;
      performance: number;
    };
  }>;
}

export const ChartTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-3 border border-gray-200 rounded shadow-lg">
        <p className="font-bold">{data.name}</p>
        <p className="text-sm text-gray-600">{data.jobGrade}</p>
        <p className="text-sm">Salary: ${data.salary.toLocaleString()}</p>
        <p className="text-sm">PIR: {data.pir}%</p>
        <p className="text-sm">Performance: {data.performance}/5</p>
      </div>
    );
  }

  return null;
};
