
import { Card, CardContent } from "@/components/ui/card";
import { UserRound, UsersRound } from "lucide-react";

interface MainMetricsGridProps {
  onMeCardClick: () => void;
  onTeamCardClick: () => void;
  onDirectReportsClick: () => void;
}

export const MainMetricsGrid = ({ 
  onMeCardClick, 
  onTeamCardClick, 
  onDirectReportsClick 
}: MainMetricsGridProps) => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4">
      <Card className="relative cursor-pointer hover:border-primary/50 transition-colors" onClick={onMeCardClick}>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <h3 className="font-semibold text-lg text-primary">Me</h3>
            <div className="flex-1 flex items-center justify-end">
              <div className="p-2 rounded-full bg-primary/10">
                <UserRound className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
          <p className="mt-2 text-xl font-bold">Senior Developer</p>
          <p className="text-sm text-muted-foreground">5 years experience</p>
          <div className="mt-2 text-xs text-primary">Last promoted 6 months ago</div>
        </CardContent>
      </Card>

      <Card className="relative cursor-pointer hover:border-primary/50 transition-colors" onClick={onTeamCardClick}>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <h3 className="font-semibold text-lg text-primary">My Team</h3>
            <div className="flex-1 flex items-center justify-end">
              <div className="p-2 rounded-full bg-primary/10">
                <UsersRound className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
          <p className="mt-2 text-xl font-bold">8 Members</p>
          <p className="text-sm text-muted-foreground">Frontend Development</p>
          <div className="mt-2 text-xs text-primary">+2 this quarter</div>
        </CardContent>
      </Card>

      <Card className="relative cursor-pointer hover:border-primary/50 transition-colors" onClick={onDirectReportsClick}>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <h3 className="font-semibold text-lg text-primary">My Direct Reports</h3>
            <div className="flex-1 flex items-center justify-end">
              <div className="p-2 rounded-full bg-primary/10">
                <UsersRound className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
          <p className="mt-2 text-xl font-bold">5 Members</p>
          <p className="text-sm text-muted-foreground">Across 2 teams</p>
          <div className="mt-2 text-xs text-primary">+1 this month</div>
        </CardContent>
      </Card>
    </div>
  );
};
