
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
  return (
    <Card 
      className={cn(
        "border-4 border-blue-500 bg-[#F0F0FF] rounded-full shadow-sm aspect-[2/1] flex flex-col scale-75", 
        onClick && "cursor-pointer hover:border-blue-600 transition-colors",
        className
      )}
      onClick={onClick}
    >
      <CardHeader className="flex flex-row items-center justify-center text-center pb-0 pt-12">
        <CardTitle className="text-4xl font-medium text-[#9320E7]">{title}</CardTitle>
        {Icon && (
          <div className="absolute right-6 h-8 w-8 rounded-full bg-[#F0F0FF]/50 flex items-center justify-center">
            <Icon className="h-4 w-4 text-blue-600" />
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-center text-center">
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
        {trend && (
          <div className="flex items-center justify-center mt-1">
            <span
              className={cn(
                "text-xs font-medium",
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
