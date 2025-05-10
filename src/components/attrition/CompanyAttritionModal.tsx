
import React from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

interface CompanyAttritionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const departmentAttritionData = [
  { department: "Engineering", attritionRate: 18 },
  { department: "Sales", attritionRate: 22 },
  { department: "Marketing", attritionRate: 15 },
  { department: "HR", attritionRate: 10 },
  { department: "Product", attritionRate: 20 },
  { department: "Finance", attritionRate: 12 },
];

const overallAttritionRate = 16.5; // Company-wide attrition rate

export function CompanyAttritionModal({ isOpen, onClose }: CompanyAttritionModalProps) {
  const chartConfig = {
    attrition: { color: "#9b87f5" }, // Purple color that matches theme
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] bg-white border-2 border-[#840DD7]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-[#512888]">Company Attrition Analysis</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 p-4">
          {/* Overall attrition rate card */}
          <Card className="p-6 text-center border border-[#840DD7] rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-[#512888]">Overall Attrition Rate</h3>
            <p className="text-4xl font-bold mt-2">{overallAttritionRate}%</p>
            <p className="text-sm text-muted-foreground mt-1">Company-wide annual attrition</p>
          </Card>
          
          {/* Department breakdown chart */}
          <Card className="p-6 border border-[#840DD7] rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-[#512888] mb-4">Attrition by Department</h3>
            <div className="h-[300px]">
              <ChartContainer config={chartConfig}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={departmentAttritionData} margin={{ top: 5, right: 30, left: 20, bottom: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis 
                      dataKey="department" 
                      axisLine={true}
                      tickLine={false}
                      tick={{ fill: '#512888', fontSize: 12 }}
                      angle={-45}
                      textAnchor="end"
                    />
                    <YAxis
                      axisLine={true}
                      tickLine={false}
                      tick={{ fill: '#512888', fontSize: 12 }}
                      tickFormatter={(value) => `${value}%`}
                      domain={[0, 'dataMax + 5']}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <ChartTooltipContent
                              className="bg-white border border-[#840DD7] shadow-md"
                              formatter={(value) => [`${value}%`, 'Attrition Rate']}
                            />
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="attritionRate" name="Attrition Rate">
                      {departmentAttritionData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill="#9b87f5" />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </Card>
          
          <div className="text-sm text-muted-foreground mt-2">
            <p>* Attrition rates calculated as the percentage of employees who left the company in the past 12 months.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
