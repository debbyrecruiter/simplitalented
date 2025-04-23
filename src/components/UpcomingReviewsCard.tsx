
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Review {
  id: number;
  reviewee: {
    name: string;
    avatarUrl: string;
    initials: string;
  };
  type: string;
  date: string;
  time: string;
}

interface UpcomingReviewsCardProps {
  reviews: Review[];
  className?: string;
}

export function UpcomingReviewsCard({ reviews, className }: UpcomingReviewsCardProps) {
  return (
    <Card className={cn("border shadow-sm", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Upcoming Reviews</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
            >
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={review.reviewee.avatarUrl} />
                  <AvatarFallback>{review.reviewee.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{review.reviewee.name}</p>
                  <p className="text-xs text-muted-foreground">{review.type}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <CalendarIcon className="h-3 w-3 mr-1" />
                      {review.date}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {review.time}
                    </div>
                  </div>
                </div>
              </div>
              <Button size="sm">Prepare</Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
