
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
        "border-8 border-[#42376a] bg-[#F0F0FF] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center", 
        onClick && "cursor-pointer hover:border-blue-600 transition-colors",
        className
      )}
      onClick={onClick}
    >
      <CardHeader className="flex flex-row items-center justify-center text-center pb-0 pt-10 px-2">
        <CardTitle className={cn(
          "font-small text-[#9320E7] truncate",
          isMenuCard ? "text-4xl" : "text-6xl" // Reduced by ~30% for menu cards
        )}>
          {title}
        </CardTitle>
        {Icon && (
          <div className="absolute right-6 h-12 w-12 rounded-full bg-[#F0F0FF]/50 flex items-center justify-center">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-center text-center p-2">
        <div className={cn(
          "font-bold truncate",
          isMenuCard ? "text-2xl" : "text-3xl" // Reduced by ~30% for menu cards
        )}>
          {value}
        </div>
        {description && (
          <p className={cn(
            "text-muted-foreground truncate",
            isMenuCard ? "text-xs" : "text-sm" // Reduced by ~30% for menu cards
          )}>
            {description}
          </p>
        )}
        {trend && (
          <div className="flex items-center justify-center mt-1">
            <span
              className={cn(
                "font-small truncate",
                isMenuCard ? "text-xs" : "text-sm", // Reduced by ~30% for menu cards
                trend === "up" && "text-green-600",
                trend === "down" && "text-red-600",
                trend === "neutral" && "text-muted-foreground"
              )}
            >
              {trendValue}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
