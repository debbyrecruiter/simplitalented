
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BackButton } from "@/components/ui/back-button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MessageSquare, ThumbsUp, BookOpen, Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const MyLearningPage = () => {
  // Mock data for upcoming training courses
  const upcomingCourses = [
    {
      id: 1,
      title: "Advanced Project Management",
      date: "June 15, 2025",
      duration: "4 weeks",
      platform: "Coursera",
      priority: "High"
    },
    {
      id: 2,
      title: "AI for Business Leaders",
      date: "July 3, 2025",
      duration: "2 days",
      platform: "Internal Training",
      priority: "Medium"
    },
    {
      id: 3,
      title: "Agile Leadership Workshop",
      date: "August 10, 2025",
      duration: "1 week",
      platform: "LinkedIn Learning",
      priority: "Low"
    }
  ];

  // Mock data for training recommendations
  const recommendedCourses = [
    {
      id: 1,
      title: "Strategic Decision Making",
      match: "98%",
      reason: "Based on your career path",
      platform: "Harvard Online",
      duration: "6 weeks"
    },
    {
      id: 2,
      title: "Advanced Data Visualization",
      match: "95%",
      reason: "Based on your recent skills",
      platform: "Udemy",
      duration: "4 weeks"
    },
    {
      id: 3,
      title: "Effective Team Leadership",
      match: "92%",
      reason: "Based on your role",
      platform: "LinkedIn Learning",
      duration: "3 weeks"
    },
    {
      id: 4,
      title: "Negotiation Mastery",
      match: "87%",
      reason: "Based on peer learning paths",
      platform: "Coursera",
      duration: "5 weeks"
    }
  ];

  // Mock data for completed training courses
  const completedCourses = [
    {
      id: 1,
      title: "Introduction to Product Management",
      date: "May 2, 2025",
      platform: "Coursera",
      instructor: "Sarah Johnson",
      instructorRole: "Senior Product Manager",
      instructorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop",
      duration: "4 weeks",
      description: "Completed the introduction to product management course with distinction. Learned about product lifecycle, user research, and market analysis techniques.",
      certificate: true,
      skills: ["Product Strategy", "User Research", "Market Analysis"]
    },
    {
      id: 2,
      title: "Advanced Leadership Workshop",
      date: "April 15, 2025",
      platform: "Internal Training",
      instructor: "Michael Chen",
      instructorRole: "VP of Operations",
      instructorAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&auto=format&fit=crop",
      duration: "2 days",
      description: "Participated in an intensive leadership workshop focusing on team management, conflict resolution, and strategic decision making.",
      certificate: false,
      skills: ["Leadership", "Conflict Resolution", "Strategic Thinking"]
    },
    {
      id: 3,
      title: "Data Analysis with Python",
      date: "March 20, 2025",
      platform: "Udemy",
      instructor: "David Wilson",
      instructorRole: "Data Science Instructor",
      instructorAvatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&h=400&auto=format&fit=crop",
      duration: "6 weeks",
      description: "Completed a comprehensive course on data analysis using Python. Built several projects including a customer segmentation analysis and a predictive model for sales forecasting.",
      certificate: true,
      skills: ["Python", "Data Analysis", "Predictive Modeling"]
    },
    {
      id: 4,
      title: "Effective Communication Strategies",
      date: "February 10, 2025",
      platform: "LinkedIn Learning",
      instructor: "Jennifer Lee",
      instructorRole: "Communications Specialist",
      instructorAvatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&h=400&auto=format&fit=crop",
      duration: "3 weeks",
      description: "Learned techniques for effective written and verbal communication in professional settings. Focused on presentation skills and stakeholder management.",
      certificate: true,
      skills: ["Communication", "Presentation Skills", "Stakeholder Management"]
    },
    {
      id: 5,
      title: "Design Thinking Workshop",
      date: "January 5, 2025",
      platform: "Internal Training",
      instructor: "Priya Patel",
      instructorRole: "UX Design Lead",
      instructorAvatar: "https://images.unsplash.com/photo-1548449112-96a38a643324?q=80&w=400&h=400&auto=format&fit=crop",
      duration: "1 week",
      description: "Participated in a hands-on design thinking workshop, learning methods to identify user needs, ideate solutions, and prototype concepts.",
      certificate: false,
      skills: ["Design Thinking", "User-Centered Design", "Prototyping"]
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

  return (
    <div className="container p-4 mx-auto">
      <div className="mb-6">
        <BackButton fallbackPath="/" label="Back to Dashboard" />
      </div>
      
      <h1 className="text-3xl font-bold mb-6 text-[#512888]">My Learning</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-18">
        {/* Left Sidebar with Upcoming Training and Recommendations */}
        <div className="space-y-6 md:col-span-1">
          {/* Upcoming Training Section */}
          <Card className="bg-white border border-[#9b87f5] rounded-lg shadow-sm">
            <CardHeader className="bg-[#F1F0FB] border-b border-[#9b87f5]">
              <CardTitle className="text-xl text-[#512888] flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Training
              </CardTitle>
            </CardHeader>
            <CardContent className="divide-y">
              {upcomingCourses.map((course) => (
                <div key={course.id} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-[#512888]">{course.title}</h3>
                      <div className="text-sm text-muted-foreground mt-1">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{course.date}</span>
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <Clock className="h-3 w-3" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="mt-1">{course.platform}</div>
                      </div>
                    </div>
                    <Badge variant={course.priority === "High" ? "destructive" : course.priority === "Medium" ? "default" : "secondary"}>
                      {course.priority}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Simpli Recommendations Section */}
          <Card className="bg-white border border-[#9b87f5] rounded-lg shadow-sm">
            <CardHeader className="bg-[#F1F0FB] border-b border-[#9b87f5]">
              <CardTitle className="text-xl text-[#512888] flex items-center gap-2">
                <Star className="h-5 w-5" /> 
                Simpli Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="divide-y">
              {recommendedCourses.map((course) => (
                <div key={course.id} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-[#512888]">{course.title}</h3>
                    <Badge className="bg-[#512888]">{course.match}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground italic mt-1">{course.reason}</p>
                  <div className="text-sm text-muted-foreground mt-2">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3" />
                      <span>{course.platform}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <Clock className="h-3 w-3" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Main Content - Completed Training Feed */}
        <div className="space-y-6 md:col-span-2">
          <Card className="p-4 bg-white border border-[#9b87f5] rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-[#512888]">Learning Summary</h2>
                <p className="text-muted-foreground">Your completed courses and certifications</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#512888]">5</div>
                <div className="text-sm text-muted-foreground">Completed Courses</div>
              </div>
            </div>
          </Card>
          
          <h2 className="text-2xl font-bold text-[#512888] mt-4 mb-2">Completed Learning</h2>
          <Separator className="my-4 bg-[#9b87f5]" />
          
          <div className="space-y-6">
            {completedCourses.map((course) => (
              <Card 
                key={course.id}
                className="overflow-hidden border-[3px] border-[#840DD7] hover:shadow-md transition-shadow animate-fade-in bg-white"
              >
                <CardHeader className="pb-3 flex flex-row justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border border-gray-200">
                      <AvatarImage src={course.instructorAvatar} alt={course.instructor} />
                      <AvatarFallback>{getInitials(course.instructor)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{course.instructor}</div>
                      <div className="text-xs text-muted-foreground">{course.instructorRole}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {course.date}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <CardTitle className="text-lg text-[#512888]">{course.title}</CardTitle>
                    <div className="flex items-center mt-1 text-sm text-muted-foreground">
                      <Badge variant="outline" className="mr-2">
                        {course.platform}
                      </Badge>
                      <Clock className="h-3 w-3 mr-1" />
                      {course.duration}
                      {course.certificate && (
                        <Badge variant="secondary" className="ml-2 bg-[#F1F0FB] text-[#512888]">
                          Certificate
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-sm mb-4">{course.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {course.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-2 py-1 bg-[#F1F0FB] text-[#512888] rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between mt-4 pt-3 border-t border-gray-100">
                    <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-[#512888]">
                      <ThumbsUp className="h-4 w-4" /> 
                      Recommend
                    </button>
                    <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-[#512888]">
                      <MessageSquare className="h-4 w-4" /> 
                      Leave feedback
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
};

export default MyLearningPage;
