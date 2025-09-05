
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
    if (title.includes("Performance")) return { background: 'var(--gradient-green)' };
    if (title.includes("Race")) return { background: 'linear-gradient(135deg, var(--gradient-teal-start), var(--gradient-teal-end))' };
    if (title.includes("Gender")) return { background: 'var(--gradient-pink)' };
    if (title.includes("Recruiter")) return { background: 'var(--gradient-orange)' };
    if (title.includes("Regrettable")) return { background: 'linear-gradient(135deg, var(--gradient-red-start), var(--gradient-red-end))' };
    if (title.includes("Cost")) return { background: 'linear-gradient(135deg, var(--gradient-yellow-start), var(--gradient-yellow-end))' };
    return { background: 'linear-gradient(135deg, var(--gradient-purple-start), var(--gradient-purple-end))' };
  };

  const gradientStyle = getGradientStyle();

  return (
    <Card 
      className={`shadow-lg relative cursor-pointer hover:scale-105 transition-all duration-300 w-[300px] h-32 ${isActive ? 'ring-4 ring-white/50' : ''}`}
      onClick={handleClick}
      style={gradientStyle}
    >
      <div className="flex flex-row items-start justify-between p-4 h-full">
        <div className="flex flex-col">
          <h3 className="text-white text-xl font-bold">
            {title}
          </h3>
          <div className="text-white text-sm opacity-90 mt-1">
            View analytics data
          </div>
        </div>
        <div className="bg-white rounded-full p-2 shadow-md">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </Card>
  );
};

export default CategoryCard;
