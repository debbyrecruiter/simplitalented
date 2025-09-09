
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MessageSquare, ThumbsUp, FileText, Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function ExpandedReviewsSection() {
  const { toast } = useToast();
  
  // Mock data for upcoming reviews
  const upcomingReviews = [
    {
      id: 1,
      type: "Performance Review",
      date: "June 20, 2025",
      time: "2:00 PM",
      reviewer: "Sarah Johnson"
    },
    {
      id: 2,
      type: "Peer Review",
      date: "July 15, 2025", 
      time: "10:30 AM",
      reviewer: "Michael Chen"
    },
    {
      id: 3,
      type: "360 Review",
      date: "August 5, 2025",
      time: "3:00 PM", 
      reviewer: "Jennifer Lee"
    }
  ];

  // Mock data for past reviews 
  const pastReviews = [
    {
      id: 1,
      reviewer: "Sarah Johnson",
      reviewerRole: "Engineering Manager",
      reviewerAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop",
      date: "May 15, 2025",
      type: "Performance Review", 
      period: "Q1 2025",
      overallRating: 4.5,
      content: "Excellent performance this quarter. Shows strong leadership qualities and technical expertise. Consistently delivers high-quality work and mentors junior team members effectively.",
      strengths: ["Leadership", "Technical Skills", "Mentoring"],
      areasForGrowth: ["Public Speaking", "Cross-team Collaboration"],
      goals: ["Lead a major project next quarter", "Present at company all-hands"]
    },
    {
      id: 2,
      reviewer: "Michael Chen", 
      reviewerRole: "Senior Developer",
      reviewerAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&auto=format&fit=crop",
      date: "March 22, 2025",
      type: "Peer Review",
      period: "Project Alpha",
      overallRating: 4.2,
      content: "Great collaboration during Project Alpha. Always willing to help team members and provides thoughtful code reviews. Brought innovative solutions to complex problems.",
      strengths: ["Problem Solving", "Code Quality", "Team Collaboration"], 
      areasForGrowth: ["Time Management", "Documentation"],
      goals: ["Improve sprint planning", "Create better technical docs"]
    },
    {
      id: 3,
      reviewer: "Jennifer Lee",
      reviewerRole: "Product Manager", 
      reviewerAvatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&h=400&auto=format&fit=crop",
      date: "February 10, 2025",
      type: "Cross-functional Review",
      period: "Product Launch",
      overallRating: 4.7,
      content: "Outstanding work on the product launch. Excellent communication between engineering and product teams. Delivered features ahead of schedule with exceptional quality.",
      strengths: ["Communication", "Quality Focus", "Delivery"],
      areasForGrowth: ["User Research", "Analytics"],
      goals: ["Shadow user interviews", "Learn advanced analytics tools"]
    },
    {
      id: 4,
      reviewer: "David Wilson",
      reviewerRole: "Team Lead",
      reviewerAvatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&h=400&auto=format&fit=crop", 
      date: "January 18, 2025",
      type: "Leadership Review",
      period: "Q4 2024",
      overallRating: 4.3,
      content: "Shows great potential as a technical leader. Takes initiative in improving team processes and code quality. Mentors new team members with patience and clarity.",
      strengths: ["Initiative", "Process Improvement", "Mentoring"],
      areasForGrowth: ["Strategic Thinking", "Stakeholder Management"], 
      goals: ["Participate in architecture discussions", "Build relationships with key stakeholders"]
    }
  ];

  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  const handlePrepareReview = (reviewId: number) => {
    console.log(`Preparing for review with ID: ${reviewId}`);
    toast({
      title: "Review Preparation",
      description: "Opening review preparation materials.",
    });
  };

  const renderStarRating = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-1 text-sm font-medium">{rating}/5</span>
      </div>
    );
  };

  return (
    <div className="container p-4 mx-auto">
      <div className="flex flex-col md:flex-row md:space-x-24">
        {/* Left Sidebar with Upcoming Reviews */}
        <div className="w-full md:w-1/3 space-y-6 mb-8 md:mb-0">
          {/* Upcoming Reviews Section */}
          <Card className="bg-white border border-[#9b87f5] rounded-lg shadow-sm">
            <CardHeader className="bg-[#F1F0FB] border-b border-[#9b87f5]">
              <CardTitle className="text-xl text-[#512888] flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Reviews
              </CardTitle>
            </CardHeader>
            <CardContent className="divide-y">
              {upcomingReviews.map((review) => (
                <div key={review.id} className="py-3 first:pt-0 last:pb-0">
                  <div>
                    <h3 className="font-medium text-[#512888]">{review.type}</h3>
                    <div className="text-sm text-muted-foreground mt-1">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{review.date}</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" />
                        <span>{review.time}</span>
                      </div>
                      <div className="mt-1">With {review.reviewer}</div>
                    </div>
                    <div className="mt-3">
                      <Button 
                        size="sm" 
                        className="bg-[#2C52AB] text-white hover:bg-[#1A3B7D] transition-colors border-[#2C52AB]"
                        onClick={() => handlePrepareReview(review.id)}
                      >
                        <FileText className="mr-1 h-4 w-4" />
                        Prepare
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Main Content - Past Reviews Feed */}
        <div className="w-full md:w-2/3 space-y-6">
          {/* Reviews Summary card */}
          <Card className="p-4 bg-white border border-[#9b87f5] rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-[#512888]">Review Summary</h2>
                <p className="text-muted-foreground">Your performance reviews and feedback</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#512888]">4.4</div>
                <div className="text-sm text-muted-foreground">Avg Rating</div>
              </div>
            </div>
          </Card>
          
          <h2 className="text-2xl font-bold text-[#512888] mt-4 mb-2">Past Reviews</h2>
          <Separator className="my-4 bg-[#9b87f5]" />
          
          {/* Past reviews section */}
          <div className="space-y-6">
            {pastReviews.map((review) => (
              <Card 
                key={review.id}
                className="overflow-hidden border-[3px] border-[#840DD7] hover:shadow-md transition-shadow animate-fade-in bg-white"
              >
                <CardHeader className="pb-3 flex flex-row justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border border-gray-200">
                      <AvatarImage src={review.reviewerAvatar} alt={review.reviewer} />
                      <AvatarFallback>{getInitials(review.reviewer)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{review.reviewer}</div>
                      <div className="text-xs text-muted-foreground">{review.reviewerRole}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {review.date}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg text-[#512888]">{review.type}</CardTitle>
                      {renderStarRating(review.overallRating)}
                    </div>
                    <div className="flex items-center mt-1 text-sm text-muted-foreground">
                      <Badge variant="outline" className="mr-2">
                        {review.period}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-sm mb-4">{review.content}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-sm font-medium text-[#512888] mb-2">Strengths</h4>
                      <div className="flex flex-wrap gap-2">
                        {review.strengths.map((strength) => (
                          <span 
                            key={strength} 
                            className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium"
                          >
                            {strength}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-[#512888] mb-2">Growth Areas</h4>
                      <div className="flex flex-wrap gap-2">
                        {review.areasForGrowth.map((area) => (
                          <span 
                            key={area} 
                            className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-[#512888] mb-2">Goals</h4>
                      <div className="flex flex-wrap gap-2">
                        {review.goals.map((goal) => (
                          <span 
                            key={goal} 
                            className="px-2 py-1 bg-[#F1F0FB] text-[#512888] rounded-full text-xs font-medium"
                          >
                            {goal}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between mt-4 pt-3 border-t border-gray-100">
                    <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-[#512888]">
                      <ThumbsUp className="h-4 w-4" /> 
                      Acknowledge
                    </button>
                    <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-[#512888]">
                      <MessageSquare className="h-4 w-4" /> 
                      Respond
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
