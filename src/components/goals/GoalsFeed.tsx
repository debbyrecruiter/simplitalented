import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Star, MessageSquare, ThumbsUp, Calendar, Tag } from "lucide-react";

export function GoalsFeed() {
  const feedItems = [
    {
      id: 0,
      type: "slack" as const,
      title: "Organized Team Lunch & Learn",
      date: "May 3, 2025", 
      avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=400&h=400&auto=format&fit=crop",
      author: "You",
      authorRole: "Team Member",
      content: "Successfully organized cross-team Lunch & Learn session on the new API integration strategy.",
      source: "Slack",
      tags: ["leadership"]
    },
    {
      id: 6,
      type: "jira" as const,
      title: "Completed Phase 1 of Design System Implementation",
      date: "May 1, 2025",
      avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=400&h=400&auto=format&fit=crop",
      author: "You",
      authorRole: "Team Member",
      content: "Successfully completed the first phase of our design system implementation, setting the foundation for consistent UI components across all products.",
      source: "Jira",
      tags: ["leadership"]
    },
    {
      id: 7,
      type: "zoom" as const,
      title: "Coordinated Team Trivia Night",
      date: "April 28, 2025",
      avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=400&h=400&auto=format&fit=crop",
      author: "You",
      authorRole: "Team Member",
      content: "Organized and hosted a virtual team trivia night to boost morale and team bonding. 15 team members participated.",
      source: "Zoom"
    },
    {
      id: 1,
      type: "review" as const,
      title: "Q2 Performance Review",
      date: "June 15, 2025",
      avatar: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=400&h=400&auto=format&fit=crop",
      author: "Sarah Johnson",
      authorRole: "Team Lead",
      content: "Excellent progress on the Q2 goals. Your leadership on the marketing campaign exceeded expectations and drove significant results.",
    },
    {
      id: 2,
      type: "endorsement" as const,
      title: "Skill Endorsement",
      date: "May 21, 2025",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&h=400&auto=format&fit=crop",
      author: "Michael Chen",
      authorRole: "Product Manager",
      content: "I'd like to endorse your outstanding project management skills demonstrated in the recent product launch.",
      skills: ["Project Management", "Leadership", "Communication"]
    },
    {
      id: 3,
      type: "video" as const,
      title: "Q1 Performance Video Review",
      date: "March 30, 2025",
      avatar: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=400&h=400&auto=format&fit=crop",
      author: "Jennifer Lee",
      authorRole: "Director",
      content: "Watch your Q1 performance review video discussing your achievements and areas for growth.",
      videoThumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      type: "endorsement" as const,
      title: "Skill Endorsement",
      date: "February 12, 2025",
      avatar: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=400&h=400&auto=format&fit=crop",
      author: "David Wilson",
      authorRole: "Senior Developer",
      content: "Your technical expertise and problem-solving abilities have been invaluable to the team.",
      skills: ["Technical Knowledge", "Problem Solving"]
    },
    {
      id: 5,
      type: "review" as const,
      title: "Goal Completion Review",
      date: "January 25, 2025",
      avatar: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=400&h=400&auto=format&fit=crop",
      author: "Amanda Rodriguez",
      authorRole: "HR Manager",
      content: "Congratulations on meeting your professional development goal for continuous learning."
    }
  ];

  return (
    <div className="space-y-6">
      {feedItems.map((item) => (
        <FeedItem key={item.id} item={item} />
      ))}
    </div>
  );
}

interface FeedItemProps {
  item: {
    id: number;
    type: "review" | "endorsement" | "video" | "slack" | "jira" | "zoom";
    title: string;
    date: string;
    avatar: string;
    author: string;
    authorRole: string;
    content: string;
    skills?: string[];
    videoThumbnail?: string;
    source?: string;
    tags?: string[];
  };
}

function FeedItem({ item }: FeedItemProps) {
  return (
    <Card 
      className="overflow-hidden border-[3px] hover:shadow-md transition-shadow animate-fade-in bg-white"
      style={{ borderColor: getBorderColor(item.type) }}
    >
      <CardHeader className="pb-3 flex flex-row justify-between items-center">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border border-gray-200">
            <AvatarImage src={item.avatar} alt={item.author} />
            <AvatarFallback>{getInitials(item.author)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{item.author}</div>
            <div className="text-xs text-muted-foreground">{item.authorRole}</div>
          </div>
        </div>
        <div className="flex items-center text-xs text-muted-foreground">
          <Calendar className="h-3 w-3 mr-1" />
          {item.date}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 mb-3">
          {getItemIcon(item.type)}
          <CardTitle className="text-lg">{item.title}</CardTitle>
        </div>
        
        <p className="text-sm mb-4">{item.content}</p>
        
        {item.type === "endorsement" && item.skills && (
          <div className="flex flex-wrap gap-2 mb-3">
            {item.skills.map((skill) => (
              <span 
                key={skill} 
                className="px-2 py-1 bg-[#F1F0FB] text-[#512888] rounded-full text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
        
        {item.type === "video" && item.videoThumbnail && (
          <div className="mt-3 relative cursor-pointer group">
            <img 
              src={item.videoThumbnail} 
              alt="Video thumbnail" 
              className="rounded-md w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-md flex items-center justify-center group-hover:bg-opacity-40 transition-opacity">
              <div className="h-12 w-12 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                <Video className="h-6 w-6 text-[#512888]" />
              </div>
            </div>
          </div>
        )}
        
        {(item.type === "slack" || item.type === "jira" || item.type === "zoom") && item.source && (
          <div className="flex flex-wrap gap-2 mb-3">
            {item.tags && item.tags.map((tag) => (
              <span 
                key={tag} 
                className="flex items-center gap-1 px-2 py-1 bg-[#F0F4FA] text-[#1264A3] rounded-full text-xs font-medium"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
            {item.source && (
              <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
                item.source === "Slack" ? "bg-[#E8F5FA] text-[#36C5F0]" :
                item.source === "Jira" ? "bg-[#E9F2FF] text-[#0052CC]" :
                item.source === "Zoom" ? "bg-[#E9F7FB] text-[#2D8CFF]" :
                "bg-gray-100 text-gray-600"
              }`}>
                {item.source === "Jira" && <MessageSquare className="h-3 w-3" />}
                {item.source === "Zoom" && <Video className="h-3 w-3" />}
                {item.source === "Slack" && <MessageSquare className="h-3 w-3" />}
                via {item.source}
              </span>
            )}
          </div>
        )}
        
        <div className="flex justify-between mt-4 pt-3 border-t border-gray-100">
          <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-[#512888]">
            <ThumbsUp className="h-4 w-4" /> 
            Acknowledge
          </button>
          <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-[#512888]">
            <MessageSquare className="h-4 w-4" /> 
            Comment
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

function getItemIcon(type: string) {
  switch (type) {
    case "review":
      return <Star className="h-5 w-5 text-yellow-500" />;
    case "endorsement":
      return <ThumbsUp className="h-5 w-5 text-blue-500" />;
    case "video":
      return <Video className="h-5 w-5 text-purple-500" />;
    case "slack":
      return <MessageSquare className="h-5 w-5 text-[#36C5F0]" />;
    case "jira":
      return <MessageSquare className="h-5 w-5 text-[#0052CC]" />;
    case "zoom":
      return <Video className="h-5 w-5 text-[#2D8CFF]" />;
    default:
      return null;
  }
}

function getBorderColor(type: string) {
  switch (type) {
    case "review":
      return "#840DD7"; // Purple to match the left card
    case "endorsement":
      return "#840DD7"; // Purple to match the left card
    case "video":
      return "#840DD7"; // Purple to match the left card
    case "slack":
      return "#840DD7"; // Purple to match the left card
    case "jira":
      return "#0052CC"; // Jira blue
    case "zoom":
      return "#2D8CFF"; // Zoom blue
    default:
      return "#840DD7"; // Default purple to match the left card
  }
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);
}
