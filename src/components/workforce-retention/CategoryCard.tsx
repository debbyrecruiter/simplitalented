
import React from "react";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  onClick: () => void;
  isActive?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  title, 
  icon: Icon, 
  onClick,
  isActive = false 
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(`CategoryCard clicked: ${title}`);
    onClick();
  };

  return (
    <Card 
      className={`border-2 ${isActive ? 'border-blue-600' : 'border-[#840DD7]'} bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden cursor-pointer hover:border-blue-600 transition-colors aspect-square`}
      onClick={handleClick}
    >
      <div className="flex flex-col items-center justify-center p-2 text-center h-full">
        <div className="flex items-center justify-center mb-1">
          <Icon className="h-6 w-6 text-[#512888]" />
        </div>
        <h3 className="text-xs font-semibold text-[#512888] leading-tight px-1">{title}</h3>
      </div>
    </Card>
  );
};

export default CategoryCard;
