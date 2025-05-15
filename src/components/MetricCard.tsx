
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  description?: string;
  icon?: LucideIcon;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  className?: string;
  onClick?: () => void;
  titleClassName?: string; // Added prop for title-specific styling
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
  titleClassName // New prop
}: MetricCardProps) {
  // Determine if this is one of the specific menu items we need to adjust
  const isMenuCard = ["My Goals", "My Learning", "My Reviews", "My Schedule", "Past 1:1s"].includes(title);
  
  return (
    <Card 
      className={cn(
        "border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden w-[110px] h-[110px] flex flex-col justify-center", 
        onClick && "cursor-pointer hover:border-blue-600 transition-colors",
        className
      )}
      onClick={onClick}
    >
      <div className="flex flex-col items-center justify-center h-full p-2 text-center">
        <CardTitle className={cn(
          "font-small text-[#9320E7] text-center w-full whitespace-pre-line mb-1",
          isMenuCard ? "text-sm" : "text-lg", // Sized appropriately for menu cards
          titleClassName // Apply title-specific class if provided
        )}>
          {title}
        </CardTitle>
        
        {trend && (
          <div className="flex items-center justify-center mt-1">
            <span
              className={cn(
                "font-small text-center whitespace-pre-line",
                isMenuCard ? "text-xs" : "text-sm", // Sized appropriately for menu cards
                trend === "up" && "text-green-600",
                trend === "down" && "text-red-600",
                trend === "neutral" && "text-muted-foreground"
              )}
            >
              {trendValue}
            </span>
          </div>
        )}
        
        {Icon && (
          <div className="absolute right-2 top-2 h-5 w-5 rounded-full bg-[#FAFFCB]/50 flex items-center justify-center">
            <Icon className="h-3 w-3 text-blue-600" />
          </div>
        )}
      </div>
    </Card>
  );
}
