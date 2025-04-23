
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatarUrl: string;
  initials: string;
  status: "active" | "review" | "new";
}

interface TeamMembersCardProps {
  members: TeamMember[];
  className?: string;
}

export function TeamMembersCard({ members, className }: TeamMembersCardProps) {
  return (
    <Card className={cn("border shadow-sm", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base">Team Members</CardTitle>
        <Button variant="ghost" size="sm" asChild>
          <Link to="/employees" className="flex items-center gap-1 text-sm">
            View all <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {members.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between py-2"
            >
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={member.avatarUrl} />
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              </div>
              <Badge
                variant="outline"
                className={cn(
                  "ml-auto",
                  member.status === "active" && "border-green-500 text-green-500",
                  member.status === "review" && "border-amber-500 text-amber-500",
                  member.status === "new" && "border-brand-teal text-brand-teal"
                )}
              >
                {member.status === "active" && "Active"}
                {member.status === "review" && "In Review"}
                {member.status === "new" && "New Hire"}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
