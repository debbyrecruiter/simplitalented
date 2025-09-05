
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Star, MessageSquare, ThumbsUp, Calendar, Users, BarChart2 } from "lucide-react";

export function GoalsTeamFeed() {
  const feedItems = [
    {
      id: 1,
      type: "milestone" as const,
      title: "Design System Implementation Milestone",
      date: "June 10, 2025",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop",
      author: "Team Design",
      authorRole: "Cross-functional team",
      content: "Team has completed 85% of the design system implementation. Component library is now available for all developers.",
    },
    {
      id: 2,
      type: "achievement" as const,
      title: "Bug Backlog Reduction",
      date: "May 15, 2025",
      avatar: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&h=400&auto=format&fit=crop",
      author: "QA Team",
      authorRole: "Quality Assurance",
      content: "The team has successfully reduced the bug backlog by 35% ahead of the Q3 deadline.",
      skills: ["Debugging", "Code Quality", "Collaboration"]
    },
    {
      id: 3,
      type: "planning" as const,
      title: "API Integration Strategy Meeting",
      date: "April 28, 2025",
      avatar: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?q=80&w=400&h=400&auto=format&fit=crop",
      author: "Architecture Team",
      authorRole: "Technical Planning",
      content: "Team planning session for the new API integration strategy completed. Action items have been distributed.",
      videoThumbnail: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      type: "achievement" as const,
      title: "User Satisfaction Metrics",
      date: "March 30, 2025",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&auto=format&fit=crop",
      author: "UX Research Team",
      authorRole: "User Experience",
      content: "Customer satisfaction scores improved by 15% after implementing the new onboarding flow.",
      skills: ["User Research", "UI Design"]
    },
    {
      id: 5,
      type: "milestone" as const,
      title: "Knowledge Sharing Initiative",
      date: "February 20, 2025",
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&h=400&auto=format&fit=crop",
      author: "Development Team",
      authorRole: "Team Growth",
      content: "Weekly knowledge sharing sessions have been established with 70% team participation rate."
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
    type: "milestone" | "achievement" | "planning";
    title: string;
    date: string;
    avatar: string;
    author: string;
    authorRole: string;
    content: string;
    skills?: string[];
    videoThumbnail?: string;
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
        
        {item.type === "achievement" && item.skills && (
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
        
        {item.type === "planning" && item.videoThumbnail && (
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
    case "milestone":
      return <Star className="h-5 w-5 text-purple-500" />;
    case "achievement":
      return <BarChart2 className="h-5 w-5 text-green-500" />;
    case "planning":
      return <Users className="h-5 w-5 text-blue-500" />;
    default:
      return null;
  }
}

function getBorderColor(type: string) {
  switch (type) {
    case "milestone":
      return "#840DD7"; // Purple to match the left card
    case "achievement":
      return "#840DD7"; // Purple to match the left card
    case "planning":
      return "#840DD7"; // Purple to match the left card
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
