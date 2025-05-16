
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend
} from "recharts";
import { ChartTooltip } from "./ChartTooltip";
import { CHART_COLORS, salaryPerformanceData } from "@/data/compensationData";

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
        <div className="h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                type="number"
                dataKey="performance"
                name="Performance Rating"
                domain={[0, 5.5]}
                label={{ value: 'Performance Rating', position: 'bottom' }}
                ticks={[1, 2, 3, 4, 5]}
              />
              <YAxis
                type="number"
                dataKey="salary"
                name="Salary"
                unit="$"
                label={{ value: 'Salary ($)', angle: -90, position: 'left' }}
                tickFormatter={(value) => `${(value/1000).toFixed(0)}k`}
              />
              <Tooltip content={<ChartTooltip />} cursor={{ strokeDasharray: '3 3' }} />
              <Legend />
              <Scatter name="Employee Compensation" data={salaryPerformanceData} fill="#9320E7">
                {salaryPerformanceData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={CHART_COLORS[index % CHART_COLORS.length]}
                  />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-[#9320E7] text-white rounded-md hover:bg-[#7D00D2] transition-colors"
          onClick={onBack}
        >
          Back to Compensation Cards
        </button>
      </CardContent>
    </Card>
  );
};
