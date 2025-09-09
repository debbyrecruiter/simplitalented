import { Card, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value?: string;
  description?: string;
  icon?: LucideIcon;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  className?: string;
  onClick?: () => void;
  titleClassName?: string;
}

export function MetricCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  trendValue,
  className,
  onClick,
  titleClassName
}: MetricCardProps) {
  // Determine if this is one of the specific menu items we need to adjust
  const isMenuCard = ["My Goals", "My Learning", "My Reviews", "My Schedule", "Past 1:1s"].includes(title);
  const isPast11sCard = ["Video", "Transcripts"].includes(title);
  
  // Determine gradient based on title for workforce analytics cards
  const getGradientStyle = () => {
    if (title === "Demographics") {
      return { background: 'linear-gradient(135deg, #C698EB, #571B88)' };
    }
    if (title === "Retention") {
      return { background: 'var(--gradient-2)' };
    }
    if (title === "Video") {
      return { background: 'var(--gradient-3)' };
    }
    if (title === "Transcripts") {
      return { background: 'var(--gradient-6)' };
    }
    return undefined;
  };
  
  const gradientStyle = getGradientStyle();
  const isWorkforceCard = title === "Demographics" || title === "Retention";
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  
  return (
    <Card 
      className={cn(
        isWorkforceCard 
          ? "card-modern cursor-pointer w-full shadow-lg"
          : isPast11sCard
          ? "card-modern cursor-pointer"
          : "border-12 border-[#840DD7] bg-[#FFFFFF] shadow-sm overflow-hidden flex flex-col justify-center aspect-square",
        onClick && !isWorkforceCard && !isPast11sCard && "cursor-pointer hover:border-blue-600 transition-colors",
        className
      )}
      onClick={handleClick}
      style={gradientStyle}
    >
      {isWorkforceCard ? (
        <div className="flex flex-row items-start justify-between p-4">
          <div className="flex flex-col">
            <CardTitle className="text-white text-xl font-bold">
              {title}
            </CardTitle>
            <div className="text-white text-sm opacity-90">
              {title === "Demographics" 
                ? "Workforce composition"
                : "Employee turnover"
              }
            </div>
          </div>
          {Icon && (
            <div className="card-icon">
              <Icon className="h-6 w-6 text-primary" />
            </div>
          )}
        </div>
      ) : isPast11sCard ? (
        <div className="flex flex-row items-start justify-between p-4">
          <div className="flex flex-col">
            <CardTitle className="text-white text-xl font-bold">
              {title}
            </CardTitle>
            {value && (
              <div className="text-white text-2xl font-semibold mb-1">
                {value}
              </div>
            )}
            {description && (
              <div className="text-white text-xs opacity-80">
                {description}
              </div>
            )}
            {trendValue && (
              <div className="text-white text-xs opacity-70 mt-1">
                {trendValue}
              </div>
            )}
          </div>
          {Icon && (
            <div className="card-icon">
              <Icon className="h-6 w-6 text-primary" />
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full p-4 text-center">
          <CardTitle className={cn(
            "font-small text-[#9320E7] text-center w-full whitespace-pre-line mb-1",
            isMenuCard ? "text-4xl" : "text-5xl",
            titleClassName
          )}>
            {title}
          </CardTitle>
          
          {value && (
            <div className="mt-2 text-2xl font-bold">{value}</div>
          )}
          
          {description && (
            <div className="mt-1 text-sm text-muted-foreground">{description}</div>
          )}
          
          {trend && (
            <div className="flex items-center justify-center mt-1">
              <span
                className={cn(
                  "font-small text-center whitespace-pre-line",
                  isMenuCard ? "text-xs" : "text-sm",
                  trend === "up" && "text-green-600",
                  trend === "down" && "text-red-600",
                  trend === "neutral" && "text-muted-foreground"
                )}
              >
                {trendValue}
              </span>
            </div>
          )}
          
          {Icon && !isWorkforceCard && (
            <div className="absolute right-6 top-6 h-12 w-12 rounded-full bg-[#FAFFCB]/50 flex items-center justify-center">
              <Icon className="h-6 w-6 text-blue-600" />
            </div>
          )}
        </div>
      )}
    </Card>
  );
}