
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

  // Define gradient styles based on card type
  const getGradientStyle = () => {
    if (title.includes("Companywide")) return { background: 'linear-gradient(135deg, var(--gradient-purple-start), var(--gradient-purple-end))' };
    if (title.includes("Manager")) return { background: 'linear-gradient(135deg, var(--gradient-blue-start), var(--gradient-blue-end))' };
    if (title.includes("Performance")) return { background: 'linear-gradient(135deg, var(--gradient-green-start), var(--gradient-green-end))' };
    if (title.includes("Race")) return { background: 'linear-gradient(135deg, var(--gradient-teal-start), var(--gradient-teal-end))' };
    if (title.includes("Gender")) return { background: 'linear-gradient(135deg, var(--gradient-pink-start), var(--gradient-pink-end))' };
    if (title.includes("Recruiter")) return { background: 'linear-gradient(135deg, var(--gradient-orange-start), var(--gradient-orange-end))' };
    if (title.includes("Regrettable")) return { background: 'linear-gradient(135deg, var(--gradient-red-start), var(--gradient-red-end))' };
    if (title.includes("Cost")) return { background: 'linear-gradient(135deg, var(--gradient-yellow-start), var(--gradient-yellow-end))' };
    return { background: 'linear-gradient(135deg, var(--gradient-purple-start), var(--gradient-purple-end))' };
  };

  const gradientStyle = getGradientStyle();

  return (
    <Card 
      className={`shadow-lg relative cursor-pointer hover:scale-105 transition-all duration-300 aspect-square w-full flex flex-col ${isActive ? 'ring-4 ring-white/50' : ''}`}
      onClick={handleClick}
      style={gradientStyle}
    >
      <div className="flex flex-col items-center justify-center p-4 text-center h-full">
        <div className="bg-white/20 rounded-full p-3 mb-3 shadow-md">
          <Icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-sm font-semibold text-white leading-tight px-2">{title}</h3>
      </div>
    </Card>
  );
};

export default CategoryCard;
