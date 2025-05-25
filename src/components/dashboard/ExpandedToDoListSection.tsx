import { useState } from "react";
import { MessageSquare, User, UserCheck, Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

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
  rating: number | null;
  feedback: string;
  isConfidential?: boolean;
  revealIdentity?: boolean;
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
  response: string;
}

// Star rating labels
const ratingLabels = [
  "Lots Of Room For Improvement",
  "Opportunity For Improvement",
  "Pretty Good",
  "Above And Beyond",
  "Crushed it"
];

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
      rating: null,
      feedback: '',
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
      rating: null,
      feedback: '',
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
      rating: null,
      feedback: '',
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
      rating: null,
      feedback: '',
      isConfidential: true,
      revealIdentity: false,
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
      response: '',
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
      response: '',
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
      response: '',
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
      response: '',
    },
  ]);

  // State to track which review popover is open
  const [activeReviewId, setActiveReviewId] = useState<string | null>(null);
  const [activeResponseId, setActiveResponseId] = useState<string | null>(null);

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

  // Update rating for a review
  const setRating = (id: string, rating: number) => {
    setReviewsToWrite(reviews =>
      reviews.map(review =>
        review.id === id ? { ...review, rating } : review
      )
    );
  };

  // Update feedback for a review
  const setFeedback = (id: string, feedback: string) => {
    setReviewsToWrite(reviews =>
      reviews.map(review =>
        review.id === id ? { ...review, feedback } : review
      )
    );
  };

  // Update response for a review about me
  const setResponse = (id: string, response: string) => {
    setReviewsToRespond(reviews =>
      reviews.map(review =>
        review.id === id ? { ...review, response } : review
      )
    );
  };

  // Update reveal identity checkbox state
  const toggleRevealIdentity = (id: string) => {
    setReviewsToWrite(reviews =>
      reviews.map(review =>
        review.id === id ? { ...review, revealIdentity: !review.revealIdentity } : review
      )
    );
  };

  // Handle review submission
  const submitReview = (id: string) => {
    setReviewsToWrite(reviews =>
      reviews.map(review =>
        review.id === id ? { ...review, completed: true } : review
      )
    );
    setActiveReviewId(null);
  };

  // Handle response submission
  const submitResponse = (id: string) => {
    setReviewsToRespond(reviews =>
      reviews.map(review =>
        review.id === id ? { ...review, completed: true } : review
      )
    );
    setActiveResponseId(null);
  };

  // Format date from YYYY-MM-DD to Month Day format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(date);
  };

  // Render star rating component
  const StarRating = ({ reviewId, currentRating }: { reviewId: string, currentRating: number | null }) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <HoverCard key={star} openDelay={300} closeDelay={100}>
            <HoverCardTrigger asChild>
              <button
                onClick={() => setRating(reviewId, star)}
                className="focus:outline-none"
              >
                <Star
                  className={cn(
                    "h-5 w-5 transition-colors",
                    currentRating !== null && currentRating >= star
                      ? "text-[#840DD7] fill-[#840DD7]"
                      : "text-gray-300"
                  )}
                />
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="p-2 text-sm bg-white shadow-md border border-gray-200">
              {ratingLabels[star - 1]}
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
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
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reviewsToWrite.map((review) => (
              <TableRow 
                key={review.id} 
                className={cn(
                  review.completed && "bg-gray-50",
                  review.isConfidential && "bg-yellow-50"
                )}
              >
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
                  {review.isConfidential && (
                    <span className="ml-2 font-bold text-red-600">CONFIDENTIAL</span>
                  )}
                </TableCell>
                <TableCell className={cn(
                  "text-right",
                  review.completed && "text-gray-500",
                  new Date(review.dueDate) < new Date() && !review.completed && "text-red-500 font-medium"
                )}>
                  {formatDate(review.dueDate)}
                </TableCell>
                <TableCell className="text-right">
                  {!review.completed && (
                    <Popover open={activeReviewId === review.id} onOpenChange={(open) => {
                      if (open) setActiveReviewId(review.id);
                      else setActiveReviewId(null);
                    }}>
                      <PopoverTrigger asChild>
                        <Button variant="outline" size="sm">Rate & Review</Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80 p-4">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium mb-2">Rate {review.reviewee.name}</h4>
                            <StarRating reviewId={review.id} currentRating={review.rating} />
                          </div>
                          <div>
                            <label htmlFor={`feedback-${review.id}`} className="block text-sm font-medium mb-1">
                              Feedback
                            </label>
                            <Textarea
                              id={`feedback-${review.id}`}
                              placeholder="Write your feedback here..."
                              value={review.feedback}
                              onChange={(e) => setFeedback(review.id, e.target.value)}
                              className="min-h-[120px]"
                            />
                          </div>
                          {review.reviewee.role === 'Team Manager' && (
                            <div className="flex items-center space-x-2">
                              <Checkbox 
                                id={`reveal-identity-${review.id}`}
                                checked={review.revealIdentity}
                                onCheckedChange={() => toggleRevealIdentity(review.id)}
                              />
                              <label 
                                htmlFor={`reveal-identity-${review.id}`}
                                className="text-sm text-gray-700 leading-tight"
                              >
                                Your review is 100% anonymous. Check this box if you would like to reveal your identity to HR
                              </label>
                            </div>
                          )}
                          <Button 
                            className="w-full bg-[#840DD7] hover:bg-[#6b0ab0]"
                            onClick={() => submitReview(review.id)}
                            disabled={review.rating === null || !review.feedback.trim()}
                          >
                            Submit Review
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  )}
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
              <TableHead className="text-right">Action</TableHead>
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
                <TableCell className="text-right">
                  {!review.completed && (
                    <Popover open={activeResponseId === review.id} onOpenChange={(open) => {
                      if (open) setActiveResponseId(review.id);
                      else setActiveResponseId(null);
                    }}>
                      <PopoverTrigger asChild>
                        <Button variant="outline" size="sm">View & Respond</Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80 p-4">
                        <div className="space-y-4">
                          <Card className="border-gray-200">
                            <CardContent className="p-3 text-sm">
                              <p className="font-medium mb-1">Feedback from {review.reviewer.name}</p>
                              <p className="text-gray-600">
                                This is sample feedback text that would be provided by the reviewer. 
                                It would highlight your performance, areas of strength, and areas for growth.
                              </p>
                            </CardContent>
                          </Card>
                          <div>
                            <label htmlFor={`response-${review.id}`} className="block text-sm font-medium mb-1">
                              Your Response
                            </label>
                            <Textarea
                              id={`response-${review.id}`}
                              placeholder="Write your response here..."
                              value={review.response}
                              onChange={(e) => setResponse(review.id, e.target.value)}
                              className="min-h-[120px]"
                            />
                          </div>
                          <Button 
                            className="w-full bg-[#840DD7] hover:bg-[#6b0ab0]"
                            onClick={() => submitResponse(review.id)}
                            disabled={!review.response.trim()}
                          >
                            Submit Response
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
