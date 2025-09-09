
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

  // Assign varied gradients based on specific card types
  const getGradientStyle = () => {
    const gradientMap: { [key: string]: string } = {
      'Companywide': 'linear-gradient(135deg, #C698EB, #571B88)',
      'Manager': 'linear-gradient(135deg, #f403d1, #64b5f6)', 
      'Performance': 'linear-gradient(135deg, #f403d1, #64b5f6)',
      'Race': 'linear-gradient(135deg, #C698EB, #571B88)',
      'Gender': 'linear-gradient(135deg, #f403d1, #64b5f6)',
      'Recruiter': 'linear-gradient(135deg, #f403d1, #64b5f6)',
      'Regrettable': 'linear-gradient(135deg, #f403d1, #64b5f6)',
      'Cost': 'linear-gradient(135deg, #C698EB, #571B88)',
    };
    
    // Find the first matching keyword
    for (const [keyword, gradient] of Object.entries(gradientMap)) {
      if (title.includes(keyword)) {
        return { background: gradient };
      }
    }
    
    // Fallback
    return { background: 'var(--gradient-7)' };
  };

  const gradientStyle = getGradientStyle();

  return (
    <div className="relative">
      <div 
        className="absolute top-0 left-0 w-full h-full rounded-2xl opacity-70 blur-xl"
        style={{
          background: 'linear-gradient(-45deg, #b84fce 0%, #d4acfb 100%)',
          transform: 'translate(25px, 27px) scale(0.95)',
          zIndex: -1
        }}
      ></div>
      <Card 
        className={`card-modern cursor-pointer w-full shadow-lg relative z-10 ${isActive ? 'ring-4 ring-white/50' : ''}`}
        onClick={handleClick}
        style={gradientStyle}
      >
        <div className="flex flex-row items-start justify-between p-4">
          <div className="flex flex-col">
            <h3 className="text-white text-xl font-bold">
              {title}
            </h3>
            <div className="text-white text-sm opacity-90">
              View analytics data
            </div>
          </div>
          <div className="card-icon">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CategoryCard;
