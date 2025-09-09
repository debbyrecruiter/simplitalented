import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Play, MessageSquare, ThumbsUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export function Past11sVideoFeed() {
  // Mock data for past video meetings
  const videoMeetings = [
    {
      id: 1,
      manager: "Sarah Johnson",
      managerRole: "Engineering Manager",
      managerAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop",
      date: "May 28, 2025",
      duration: "45 min",
      meetingType: "Weekly 1:1",
      topics: ["Q2 Goals Review", "Career Development", "Project Updates"],
      keyPoints: [
        "Discussed progress on React migration project",
        "Set goals for Q2 performance review", 
        "Planned upcoming leadership training"
      ],
      actionItems: ["Complete React training module", "Schedule architecture review"],
      thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=400&h=225&auto=format&fit=crop",
      hasTranscript: true
    },
    {
      id: 2,
      manager: "Michael Chen",
      managerRole: "Senior Engineering Manager", 
      managerAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&auto=format&fit=crop",
      date: "May 21, 2025",
      duration: "38 min",
      meetingType: "Bi-weekly Check-in",
      topics: ["Team Collaboration", "Technical Challenges", "Mentoring"],
      keyPoints: [
        "Reviewed cross-team collaboration improvements",
        "Discussed technical debt reduction strategy",
        "Talked about mentoring junior developers"
      ],
      actionItems: ["Create technical documentation", "Schedule mentoring sessions"],
      thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&h=225&auto=format&fit=crop",
      hasTranscript: true
    },
    {
      id: 3,
      manager: "Jennifer Lee",
      managerRole: "VP of Engineering",
      managerAvatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&h=400&auto=format&fit=crop",
      date: "May 14, 2025", 
      duration: "52 min",
      meetingType: "Monthly Strategy",
      topics: ["Strategic Planning", "Team Growth", "Innovation"],
      keyPoints: [
        "Aligned on Q2 strategic initiatives",
        "Discussed team expansion plans",
        "Explored new technology adoption"
      ],
      actionItems: ["Draft hiring plan", "Research new frameworks"],
      thumbnail: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=400&h=225&auto=format&fit=crop",
      hasTranscript: false
    },
    {
      id: 4,
      manager: "Sarah Johnson", 
      managerRole: "Engineering Manager",
      managerAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop",
      date: "May 7, 2025",
      duration: "41 min", 
      meetingType: "Weekly 1:1",
      topics: ["Project Delivery", "Feedback", "Work-Life Balance"],
      keyPoints: [
        "Celebrated successful project delivery",
        "Received feedback on presentation skills",
        "Discussed workload and stress management"
      ],
      actionItems: ["Join public speaking group", "Plan vacation time"],
      thumbnail: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=400&h=225&auto=format&fit=crop",
      hasTranscript: true
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

  const handlePlayVideo = (videoId: number) => {
    console.log(`Playing video with ID: ${videoId}`);
    // In a real app, this would open the video player
  };

  const handleViewTranscript = (videoId: number) => {
    console.log(`Viewing transcript for video ID: ${videoId}`);
    // In a real app, this would open the transcript
  };

  return (
    <div className="container p-4 mx-auto">
      <div className="flex flex-col md:flex-row md:space-x-24">
        {/* Left Sidebar - Meeting Summary */}
        <div className="w-full md:w-1/3 space-y-6 mb-8 md:mb-0">
          <Card className="bg-white border border-[#9b87f5] rounded-lg shadow-sm">
            <CardHeader className="bg-[#F1F0FB] border-b border-[#9b87f5]">
              <CardTitle className="text-xl text-[#512888] flex items-center gap-2">
                <Play className="h-5 w-5" />
                Video Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold text-[#512888]">8</div>
                  <div className="text-sm text-muted-foreground">Total Recordings</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-[#512888]">6.2 hrs</div>
                  <div className="text-sm text-muted-foreground">Total Duration</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-[#512888]">Latest: 2 days ago</div>
                  <div className="text-sm text-muted-foreground">Last Meeting</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content - Video Feed */}
        <div className="w-full md:w-2/3 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#512888]">Video Recordings</h2>
              <p className="text-muted-foreground">Past 1:1 meetings with your manager</p>
            </div>
          </div>
          
          <Separator className="my-4 bg-[#9b87f5]" />
          
          {/* Video meetings feed */}
          <div className="space-y-6">
            {videoMeetings.map((meeting) => (
              <Card 
                key={meeting.id}
                className="overflow-hidden border-[3px] border-[#840DD7] hover:shadow-md transition-shadow animate-fade-in bg-white"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border border-gray-200">
                        <AvatarImage src={meeting.managerAvatar} alt={meeting.manager} />
                        <AvatarFallback>{getInitials(meeting.manager)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{meeting.manager}</div>
                        <div className="text-xs text-muted-foreground">{meeting.managerRole}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {meeting.date}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex gap-4">
                    {/* Video Thumbnail */}
                    <div className="relative flex-shrink-0">
                      <img 
                        src={meeting.thumbnail} 
                        alt="Meeting thumbnail"
                        className="w-32 h-20 object-cover rounded-lg"
                      />
                      <Button
                        size="sm"
                        className="absolute inset-0 m-auto w-8 h-8 rounded-full bg-white/80 hover:bg-white p-0"
                        onClick={() => handlePlayVideo(meeting.id)}
                      >
                        <Play className="h-4 w-4 text-[#512888] ml-0.5" />
                      </Button>
                    </div>
                    
                    {/* Meeting Details */}
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg text-[#512888]">{meeting.meetingType}</CardTitle>
                        <Badge variant="outline">{meeting.duration}</Badge>
                        {meeting.hasTranscript && (
                          <Badge variant="secondary" className="bg-[#F1F0FB] text-[#512888]">
                            Transcript
                          </Badge>
                        )}
                      </div>
                      
                      <div className="text-sm text-muted-foreground">
                        <strong>Topics:</strong> {meeting.topics.join(", ")}
                      </div>
                    </div>
                  </div>
                  
                  {/* Key Points */}
                  <div>
                    <h4 className="text-sm font-medium text-[#512888] mb-2">Key Discussion Points</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {meeting.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-[#512888] mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Action Items */}
                  <div>
                    <h4 className="text-sm font-medium text-[#512888] mb-2">Action Items</h4>
                    <div className="flex flex-wrap gap-2">
                      {meeting.actionItems.map((item, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                    <div className="flex gap-4">
                      <button 
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-[#512888]"
                        onClick={() => handlePlayVideo(meeting.id)}
                      >
                        <Play className="h-4 w-4" /> 
                        Watch Recording
                      </button>
                      {meeting.hasTranscript && (
                        <button 
                          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-[#512888]"
                          onClick={() => handleViewTranscript(meeting.id)}
                        >
                          <MessageSquare className="h-4 w-4" /> 
                          View Transcript
                        </button>
                      )}
                    </div>
                    <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-[#512888]">
                      <ThumbsUp className="h-4 w-4" /> 
                      Helpful
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