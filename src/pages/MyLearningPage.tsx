import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BackButton } from "@/components/ui/back-button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MessageSquare, ThumbsUp, BookOpen, Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const MyLearningPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Mock data for upcoming training courses
  const upcomingCourses = [
    {
      id: 1,
      title: "Advanced Project Management",
      date: "June 15, 2025",
      duration: "4 weeks",
      platform: "Coursera"
    },
    {
      id: 2,
      title: "AI for Business Leaders",
      date: "July 3, 2025",
      duration: "2 days",
      platform: "Internal Training"
    },
    {
      id: 3,
      title: "Agile Leadership Workshop",
      date: "August 10, 2025",
      duration: "1 week",
      platform: "LinkedIn Learning"
    }
  ];

  // Mock data for training recommendations
  const recommendedCourses = [
    {
      id: 1,
      title: "Strategic Decision Making",
      reason: "Based on your career path",
      platform: "Harvard Online",
      duration: "6 weeks"
    },
    {
      id: 2,
      title: "Advanced Data Visualization",
      reason: "Based on your recent skills",
      platform: "Udemy",
      duration: "4 weeks"
    },
    {
      id: 3,
      title: "Effective Team Leadership",
      reason: "Based on your role",
      platform: "LinkedIn Learning",
      duration: "3 weeks"
    },
    {
      id: 4,
      title: "Negotiation Mastery",
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

  const handleScheduleCourse = (courseId: number) => {
    console.log(`Scheduling course with ID: ${courseId}`);
    toast({
      title: "Course Scheduled",
      description: "The course has been added to your calendar.",
    });
    // In a real application, this would open a scheduling dialog or API call
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="container p-4 mx-auto">
      <div className="mb-6">
        <BackButton onClick={handleBackClick} />
      </div>

      <div className="flex flex-col md:flex-row md:space-x-24">
        {/* Left Sidebar with Upcoming Training and Recommendations */}
        <div className="w-full md:w-1/3 space-y-6 mb-8 md:mb-0">
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
                  <div>
                    <h3 className="font-medium text-[#512888]">{course.title}</h3>
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
                    <div className="mt-3">
                      <Button 
                        size="sm" 
                        className="bg-[#2C52AB] text-white hover:bg-[#1A3B7D] transition-colors border-[#2C52AB]"
                        onClick={() => handleScheduleCourse(course.id)}
                      >
                        <Calendar className="mr-1 h-4 w-4" />
                        Schedule It For Me
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Main Content - Completed Training Feed */}
        <div className="w-full md:w-2/3 space-y-6">
          {/* Learning Summary card */}
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
          
          {/* completed courses section */}
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
