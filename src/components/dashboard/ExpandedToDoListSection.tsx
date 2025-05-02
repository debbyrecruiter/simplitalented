import { useState } from "react";
import { ListCheck, MessageSquare, User, UserCheck } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Define types for our review items
interface ReviewToWrite {
  id: string;
  reviewee: {
    name: string;
    role: string;
    avatarUrl: string;
    initials: string;
  };
  dueDate: string;
  completed: boolean;
}

interface ReviewToRespond {
  id: string;
  reviewer: {
    name: string;
    role: string;
    avatarUrl: string;
    initials: string;
  };
  submittedDate: string;
  completed: boolean;
}

export function ExpandedToDoSection() {
  // Reviews that the user needs to write
  const [reviewsToWrite, setReviewsToWrite] = useState<ReviewToWrite[]>([
    {
      id: '1',
      reviewee: {
        name: 'Alex Johnson',
        role: 'UX Designer',
        avatarUrl: '',
        initials: 'AJ',
      },
      dueDate: '2025-05-20',
      completed: false,
    },
    {
      id: '2',
      reviewee: {
        name: 'Morgan Smith',
        role: 'Product Manager',
        avatarUrl: '',
        initials: 'MS',
      },
      dueDate: '2025-05-15',
      completed: false,
    },
    {
      id: '3',
      reviewee: {
        name: 'Jamie Lee',
        role: 'Frontend Developer',
        avatarUrl: '',
        initials: 'JL',
      },
      dueDate: '2025-05-18',
      completed: false,
    },
    {
      id: '4',
      reviewee: {
        name: 'Taylor Roberts',
        role: 'Team Manager',
        avatarUrl: '',
        initials: 'TR',
      },
      dueDate: '2025-05-10',
      completed: false,
    },
  ]);

  // Reviews that others have written about the user
  const [reviewsToRespond, setReviewsToRespond] = useState<ReviewToRespond[]>([
    {
      id: '1',
      reviewer: {
        name: 'Chris Wilson',
        role: 'Developer',
        avatarUrl: '',
        initials: 'CW',
      },
      submittedDate: '2025-04-28',
      completed: false,
    },
    {
      id: '2',
      reviewer: {
        name: 'Jordan Patel',
        role: 'Designer',
        avatarUrl: '',
        initials: 'JP',
      },
      submittedDate: '2025-04-30',
      completed: false,
    },
    {
      id: '3',
      reviewer: {
        name: 'Riley Chen',
        role: 'QA Engineer',
        avatarUrl: '',
        initials: 'RC',
      },
      submittedDate: '2025-05-01',
      completed: false,
    },
    {
      id: '4',
      reviewer: {
        name: 'Sam Garcia',
        role: 'Manager',
        avatarUrl: '',
        initials: 'SG',
      },
      submittedDate: '2025-04-27',
      completed: false,
    },
  ]);

  const toggleReviewToWriteStatus = (id: string) => {
    setReviewsToWrite(reviews =>
      reviews.map(review =>
        review.id === id ? { ...review, completed: !review.completed } : review
      )
    );
  };

  const toggleReviewToRespondStatus = (id: string) => {
    setReviewsToRespond(reviews =>
      reviews.map(review =>
        review.id === id ? { ...review, completed: !review.completed } : review
      )
    );
  };

  // Format date from YYYY-MM-DD to Month Day format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(date);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-[#F1F0FB] rounded-full">
          <ListCheck className="h-6 w-6 text-[#512888]" />
        </div>
        <h2 className="text-3xl font-bold text-[#512888]">My To Do</h2>
      </div>
      
      <Separator className="my-4 bg-gray-200" />
      
      {/* Reviews I Need To Write Section */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg border-[3px] border-[#840DD7] shadow-sm mb-8">
        <div className="flex items-center gap-3 mb-4">
          <UserCheck className="h-5 w-5 text-[#512888]" />
          <h3 className="text-xl font-semibold">Reviews I Need To Write</h3>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">Status</TableHead>
              <TableHead>Reviewee</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">Due Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reviewsToWrite.map((review) => (
              <TableRow key={review.id} className={cn(review.completed && "bg-gray-50")}>
                <TableCell>
                  <Button
                    variant="outline"
                    size="icon"
                    className={cn(
                      "h-6 w-6 rounded-full p-0 border-2",
                      review.completed 
                        ? "bg-[#840DD7] border-[#840DD7] text-white" 
                        : "border-gray-300"
                    )}
                    onClick={() => toggleReviewToWriteStatus(review.id)}
                  >
                    {review.completed && <UserCheck className="h-3 w-3" />}
                  </Button>
                </TableCell>
                <TableCell className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={review.reviewee.avatarUrl} />
                    <AvatarFallback>{review.reviewee.initials}</AvatarFallback>
                  </Avatar>
                  <span className={cn(
                    "font-medium",
                    review.completed && "line-through text-gray-500"
                  )}>
                    {review.reviewee.name}
                  </span>
                </TableCell>
                <TableCell className={cn(
                  review.completed && "text-gray-500"
                )}>
                  {review.reviewee.role}
                </TableCell>
                <TableCell className={cn(
                  "text-right",
                  review.completed && "text-gray-500",
                  new Date(review.dueDate) < new Date() && !review.completed && "text-red-500 font-medium"
                )}>
                  {formatDate(review.dueDate)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Reviews Of Me That I Need To Respond To Section */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg border-[3px] border-[#840DD7] shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <MessageSquare className="h-5 w-5 text-[#512888]" />
          <h3 className="text-xl font-semibold">Reviews Of Me That I Need To Respond To</h3>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">Status</TableHead>
              <TableHead>Reviewer</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">Submitted</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reviewsToRespond.map((review) => (
              <TableRow key={review.id} className={cn(review.completed && "bg-gray-50")}>
                <TableCell>
                  <Button
                    variant="outline"
                    size="icon"
                    className={cn(
                      "h-6 w-6 rounded-full p-0 border-2",
                      review.completed 
                        ? "bg-[#840DD7] border-[#840DD7] text-white" 
                        : "border-gray-300"
                    )}
                    onClick={() => toggleReviewToRespondStatus(review.id)}
                  >
                    {review.completed && <User className="h-3 w-3" />}
                  </Button>
                </TableCell>
                <TableCell className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={review.reviewer.avatarUrl} />
                    <AvatarFallback>{review.reviewer.initials}</AvatarFallback>
                  </Avatar>
                  <span className={cn(
                    "font-medium",
                    review.completed && "line-through text-gray-500"
                  )}>
                    {review.reviewer.name}
                  </span>
                </TableCell>
                <TableCell className={cn(
                  review.completed && "text-gray-500"
                )}>
                  {review.reviewer.role}
                </TableCell>
                <TableCell className={cn(
                  "text-right",
                  review.completed && "text-gray-500"
                )}>
                  {formatDate(review.submittedDate)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
