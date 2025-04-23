
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";

interface PerformanceDataPoint {
  month: string;
  performance: number;
  average: number;
}

interface PerformanceChartProps {
  data: PerformanceDataPoint[];
  className?: string;
}

export function PerformanceChart({ data, className }: PerformanceChartProps) {
  return (
    <Card className={cn("border shadow-sm", className)}>
      <CardHeader className="pb-0">
        <CardTitle className="text-base">Team Performance Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 5,
                right: 0,
                left: -20,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorPerformance" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2c7a7b" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#2c7a7b" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorAverage" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1a365d" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#1a365d" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                domain={[0, 100]}
              />
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="performance" 
                stroke="#2c7a7b" 
                fillOpacity={1} 
                fill="url(#colorPerformance)" 
                strokeWidth={2}
              />
              <Area 
                type="monotone" 
                dataKey="average" 
                stroke="#1a365d" 
                fillOpacity={1} 
                fill="url(#colorAverage)" 
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center mt-2 gap-4">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded bg-brand-teal mr-1"></div>
            <span className="text-xs">Team Performance</span>
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 rounded bg-brand-blue mr-1"></div>
            <span className="text-xs">Company Average</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
