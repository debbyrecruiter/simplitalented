
import React from "react";
import { Card } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  Cell
} from "recharts";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";

// Reorganized data structure to group managers by departments
const managersByDepartmentData = [
  {
    department: "Engineering",
    managers: [
      { name: "Sarah Johnson", attrition: 15 },
      { name: "Michael Chen", attrition: 20 },
      { name: "David Kim", attrition: 10 }
    ]
  },
  {
    department: "Sales",
    managers: [
      { name: "Michael Chen", attrition: 22 },
      { name: "Jennifer Wong", attrition: 27 }
    ]
  },
  {
    department: "Marketing",
    managers: [
      { name: "Priya Patel", attrition: 18 },
      { name: "Jennifer Wong", attrition: 12 }
    ]
  },
  {
    department: "HR",
    managers: [
      { name: "Priya Patel", attrition: 14 }
    ]
  },
  {
    department: "Product",
    managers: [
      { name: "Sarah Johnson", attrition: 12 },
      { name: "David Kim", attrition: 19 }
    ]
  },
  {
    department: "Finance",
    managers: [
      { name: "David Kim", attrition: 11 }
    ]
  }
];

// Departments and their colors (kept for backward compatibility)
const departments = [
  { name: "Engineering", color: "#8B5CF6" },
  { name: "Sales", color: "#EC4899" },
  { name: "Marketing", color: "#F97316" },
  { name: "HR", color: "#0EA5E9" },
  { name: "Product", color: "#10B981" },
  { name: "Finance", color: "#F59E0B" }
];

// Transform data for the horizontal bar chart
const prepareManagerDepartmentData = () => {
  const result = [];
  
  managersByDepartmentData.forEach(dept => {
    // Add the department as a category
    result.push({
      name: dept.department,
      isGroup: true,
      attrition: null
    });
    
    // Add managers under their department
    dept.managers.forEach(manager => {
      result.push({
        name: manager.name,
        parent: dept.department,
        attrition: manager.attrition
      });
    });
  });
  
  return result;
};

const ManagerAttritionCard: React.FC = () => {
  // Create an array of tick values in increments of 5 up to 40 for X axis
  const xAxisTicks = Array.from({ length: 9 }, (_, index) => index * 5);

  return (
    <Card className="p-6 bg-white border border-[#9b87f5] rounded-lg shadow-sm mb-8">
      <h3 className="text-xl font-medium text-[#512888] mb-4">Attrition by Manager & Department</h3>
      
      <div className="bg-white rounded-lg w-full h-full">
        <ChartContainer config={{
          engineering: { color: "#9b87f5" },
          sales: { color: "#9b87f5" },
          marketing: { color: "#9b87f5" },
          hr: { color: "#9b87f5" },
          product: { color: "#9b87f5" },
          finance: { color: "#9b87f5" }
        }}>
          <div className="h-[600px] w-full bg-white">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={prepareManagerDepartmentData()} 
                layout="vertical"
                margin={{ top: 5, right: 30, left: 150, bottom: 20 }}
                className="bg-white"
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <YAxis 
                  dataKey="name" 
                  type="category"
                  axisLine={true}
                  tickLine={false}
                  tick={props => {
                    const { x, y, payload } = props;
                    const item = prepareManagerDepartmentData().find(d => d.name === payload.value);
                    
                    return (
                      <text 
                        x={x} 
                        y={y} 
                        dy={4} 
                        textAnchor="end" 
                        fill={item?.isGroup ? '#512888' : '#666'} 
                        fontWeight={item?.isGroup ? 700 : 400}
                        fontSize={item?.isGroup ? 16 : 14}
                      >
                        {item?.isGroup ? payload.value : `  ${payload.value}`}
                      </text>
                    );
                  }}
                  width={140}
                />
                <XAxis
                  type="number"
                  axisLine={true}
                  tickLine={false}
                  tick={{ fill: '#512888', fontSize: 14, fontWeight: 700 }}
                  tickFormatter={(value) => `${value}%`}
                  domain={[0, 40]}
                  ticks={xAxisTicks}
                />
                <ChartTooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      if (!data.attrition) return null;
                      
                      return (
                        <div className="bg-white border border-[#9b87f5] shadow-md p-3 rounded">
                          <p className="font-medium">{data.name}</p>
                          <p className="font-medium text-[#512888]">{data.parent}</p>
                          <p className="font-bold text-[#512888]">{`Attrition: ${data.attrition}%`}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar 
                  dataKey="attrition" 
                  fill="#9b87f5" 
                  radius={[0, 4, 4, 0]}
                  label={({ x, y, width, value }) => {
                    if (!value) return null;
                    return (
                      <text 
                        x={x + width + 5} 
                        y={y + 4} 
                        textAnchor="start" 
                        fontSize={12}
                        fontWeight="bold"
                        fill="#512888"
                      >
                        {value}%
                      </text>
                    );
                  }}
                >
                  {prepareManagerDepartmentData().map((entry, index) => {
                    if (!entry.attrition) return null;
                    
                    // Find the department color
                    const dept = managersByDepartmentData.find(d => d.department === entry.parent);
                    const deptIndex = departments.findIndex(d => d.name === entry.parent);
                    const color = "#9b87f5"; // Changed all colors to purple
                    
                    return <Cell key={`cell-${index}`} fill={color} />;
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartContainer>
      </div>
      
      <div className="text-sm text-muted-foreground mt-4">
        <p>* Attrition rates are calculated as the percentage of employees who left each manager's team in the past 12 months, broken down by department.</p>
        <p>* Managers only show data for departments they oversee.</p>
      </div>
    </Card>
  );
};

export default ManagerAttritionCard;
