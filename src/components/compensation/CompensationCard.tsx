
import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CompensationCardProps {
  title: string;
  icon: LucideIcon;
  onClick: () => void;
}

export const CompensationCard: React.FC<CompensationCardProps> = ({
  title,
  icon: Icon,
  onClick
}) => {
  // Define gradient styles based on card title
  const getGradientStyle = () => {
    if (title.includes("Job Grade & Performance")) return { background: 'var(--gradient-3)' };
    if (title.includes("PIR Salary")) return { background: 'var(--gradient-1)' };
    if (title.includes("Race & Gender")) return { background: 'var(--gradient-6)' };
    if (title.includes("PIR by Race")) return { background: 'var(--gradient-4)' };
    if (title.includes("PIR by Gender")) return { background: 'var(--gradient-2)' };
    return { background: 'var(--gradient-5)' };
  };

  const gradientStyle = getGradientStyle();

  return (
    <Card 
      className="shadow-lg relative cursor-pointer hover:scale-105 transition-all duration-300 h-80 w-full flex flex-col flex-shrink-0"
      onClick={onClick}
      style={gradientStyle}
    >
      <div className="flex flex-col items-center text-center pt-6 pb-3 flex-shrink-0">
        <div className="bg-white/20 rounded-full p-4 mb-4 shadow-md">
          <Icon className="h-10 w-10 text-white" />
        </div>
        <CardTitle className="text-lg font-bold text-white px-4 whitespace-pre-line leading-tight">
          {title}
        </CardTitle>
      </div>
      <div className="px-4 pb-6 flex-1 flex flex-col justify-center text-center">
        <p className="text-white/80 text-sm">
          {title.includes("Job Grade & Performance") && "Analyze compensation by job grade and performance levels"}
          {title.includes("PIR Salary") && "Compare performance relative to starting salary"}
          {title.includes("Race & Gender") && "View compensation equity by demographics"}
          {title.includes("PIR by Race") && "Analyze starting salary by racial demographics"}
          {title.includes("PIR by Gender") && "Compare starting salary by gender"}
        </p>
      </div>
    </Card>
  );
};
