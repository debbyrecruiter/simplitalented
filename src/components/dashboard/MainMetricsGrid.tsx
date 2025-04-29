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
  return <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mb-4">
      <Card 
        className="relative cursor-pointer hover:border-primary/50 transition-colors aspect-square rounded-full flex flex-col items-center justify-center text-center overflow-hidden border-8 border-[#42376a] transform scale-50" 
        onClick={onMeCardClick}
      >
        <CardContent className="p-6 bg-[#C6B4E9] flex flex-col items-center justify-center h-full w-full">
          <div className="p-2 rounded-full bg-primary/10 mb-3">
            <UserRound className="h-9 w-9 text-primary" />
          </div>
          <h3 className="font-semibold text-2xl text-primary">Me</h3>
          <p className="mt-2 text-3xl font-bold">Senior Developer</p>
          <p className="text-base text-muted-foreground">5 years experience</p>
          <div className="mt-2 text-sm text-primary">Last promoted 6 months ago</div>
        </CardContent>
      </Card>

      <Card 
        className="relative cursor-pointer hover:border-primary/50 transition-colors aspect-square rounded-full flex flex-col items-center justify-center text-center overflow-hidden border-8 border-[#42376a] transform scale-50" 
        onClick={onTeamCardClick}
      >
        <CardContent className="p-6 bg-[#C6B4E9] flex flex-col items-center justify-center h-full w-full">
          <div className="p-2 rounded-full bg-primary/10 mb-3">
            <UsersRound className="h-9 w-9 text-primary" />
          </div>
          <h3 className="font-semibold text-2xl text-primary">My Team</h3>
          <p className="mt-2 text-3xl font-bold">8 Members</p>
          <p className="text-base text-muted-foreground">Frontend Development</p>
          <div className="mt-2 text-sm text-primary">+2 this quarter</div>
        </CardContent>
      </Card>

      <Card 
        className="relative cursor-pointer hover:border-primary/50 transition-colors aspect-square rounded-full flex flex-col items-center justify-center text-center overflow-hidden border-8 border-[#42376a] transform scale-50" 
        onClick={onDirectReportsClick}
      >
        <CardContent className="p-6 bg-[#C6B4E9] flex flex-col items-center justify-center h-full w-full">
          <div className="p-2 rounded-full bg-primary/10 mb-3">
            <UsersRound className="h-9 w-9 text-primary" />
          </div>
          <h3 className="font-semibold text-2xl text-primary">My Direct Reports</h3>
          <p className="mt-2 text-3xl font-bold">5 Members</p>
          <p className="text-base text-muted-foreground">Across 2 teams</p>
          <div className="mt-2 text-sm text-primary">+1 this month</div>
        </CardContent>
      </Card>
    </div>;
};
