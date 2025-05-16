
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
  return (
    <div className="aspect-square w-full">
      <Card 
        className="border-4 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden cursor-pointer hover:border-blue-600 transition-colors h-full w-full flex flex-col"
        onClick={onClick}
      >
        <CardHeader className="flex flex-col items-center justify-center h-full text-center pb-0 pt-4">
          <Icon className="h-10 w-10 text-[#9320E7] mb-2" />
          <CardTitle className="text-lg font-medium text-[#9320E7] px-4 whitespace-pre-line">
            {title}
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
};
