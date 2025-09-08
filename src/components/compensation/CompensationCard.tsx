
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
  // Assign varied gradients based on specific titles
  const getGradientStyle = () => {
    const gradientMap: { [key: string]: string } = {
      'Job Grade &\nPerformance': 'linear-gradient(135deg, #f403d1, #64b5f6)',
      'PIR Salary\nAnalysis': 'var(--gradient-1)', 
      'Race & Gender\nEquity Analysis': 'linear-gradient(135deg, #f403d1, #64b5f6)',
      'PIR by Race': 'linear-gradient(135deg, #f403d1, #64b5f6)',
      'PIR by Gender': 'linear-gradient(135deg, #f403d1, #64b5f6)',
    };
    
    // Find matching title or use a fallback rotation
    const normalizedTitle = title.replace(/\s+/g, ' ').trim();
    for (const [key, gradient] of Object.entries(gradientMap)) {
      if (normalizedTitle.includes(key.replace('\n', ' ')) || title.includes(key.split('\n')[0])) {
        return { background: gradient };
      }
    }
    
    // Fallback for unmatched titles
    const gradients = ['linear-gradient(135deg, #f403d1, #64b5f6)', 'var(--gradient-7)'];
    return { background: gradients[title.length % gradients.length] };
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
