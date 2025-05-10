
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
}

export function MetricCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  trendValue,
  className,
  onClick
}: MetricCardProps) {
  // Determine if this is one of the specific menu items we need to adjust
  const isMenuCard = ["My Goals", "My Learning", "My Reviews", "My Schedule", "Past 1:1s"].includes(title);
  
  return (
    <Card 
      className={cn(
        "border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center", 
        onClick && "cursor-pointer hover:border-blue-600 transition-colors",
        className
      )}
      onClick={onClick}
    >
      <div className="flex flex-col items-center justify-center h-full p-4 text-center">
        <CardTitle className={cn(
          "font-small text-[#9320E7] text-center w-full whitespace-pre-line mb-1",
          isMenuCard ? "text-4xl" : "text-5xl" // Sized appropriately for menu cards
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
          <div className="absolute right-6 top-6 h-12 w-12 rounded-full bg-[#FAFFCB]/50 flex items-center justify-center">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
        )}
      </div>
    </Card>
  );
}
