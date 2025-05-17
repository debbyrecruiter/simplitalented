
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
      className={`border-12 ${isActive ? 'border-blue-600' : 'border-[#840DD7]'} bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square cursor-pointer hover:border-blue-600 transition-colors`}
      onClick={handleClick}
    >
      <div className="flex flex-col items-center justify-center h-full p-4 text-center">
        <div className="flex items-center justify-center mb-3">
          <Icon className="h-8 w-8 text-[#512888]" />
        </div>
        <h3 className="text-2xl font-semibold text-[#512888] mb-3 px-4">{title}</h3>
      </div>
    </Card>
  );
};

export default CategoryCard;
