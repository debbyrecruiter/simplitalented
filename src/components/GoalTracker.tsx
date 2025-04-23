
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface Goal {
  id: number;
  title: string;
  progress: number;
  category: string;
  dueDate: string;
}

interface GoalTrackerProps {
  goals: Goal[];
  className?: string;
}

export function GoalTracker({ goals, className }: GoalTrackerProps) {
  return (
    <Card className={cn("border shadow-sm", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Active Goals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {goals.map((goal) => (
            <div key={goal.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium">{goal.title}</h4>
                  <p className="text-xs text-muted-foreground">
                    {goal.category} · Due {goal.dueDate}
                  </p>
                </div>
                <span className="text-sm font-medium">{goal.progress}%</span>
              </div>
              <Progress value={goal.progress} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
