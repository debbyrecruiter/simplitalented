
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

  // Randomly assign gradient styles based on position and title
  const getGradientStyle = () => {
    const gradients = ['var(--gradient-1)', 'var(--gradient-2)', 'var(--gradient-3)', 'var(--gradient-4)', 'var(--gradient-5)', 'var(--gradient-6)', 'var(--gradient-7)'];
    // Create variety by using different factors for each card type
    let seed = title.length;
    if (title.includes("Companywide")) seed += 1;
    if (title.includes("Manager")) seed += 2;
    if (title.includes("Performance")) seed += 3;
    if (title.includes("Race")) seed += 4;
    if (title.includes("Gender")) seed += 5;
    if (title.includes("Recruiter")) seed += 6;
    if (title.includes("Regrettable")) seed += 7;
    if (title.includes("Cost")) seed += 8;
    return { background: gradients[seed % gradients.length] };
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
