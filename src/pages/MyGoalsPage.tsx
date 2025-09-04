
import { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { BackButton } from "@/components/ui/back-button";
import { useNavigate } from "react-router-dom";
import { GoalTracker } from "@/components/GoalTracker";
import { Button } from "@/components/ui/button";
import { ListCheck, PlusCircle, MessageCircle, Sparkles } from "lucide-react";
import { GoalsFeed } from "@/components/goals/GoalsFeed";
import { quickCoaching } from "@/lib/coachingApi";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";

const MyGoalsPage = () => {
  const navigate = useNavigate();
  const [coachingResponse, setCoachingResponse] = useState<string>('');
  const [isLoadingCoaching, setIsLoadingCoaching] = useState(false);

  const handleBackClick = () => {
    navigate("/");
  };

  const getGoalCoaching = async (goal: any) => {
    setIsLoadingCoaching(true);
    try {
      const response = await quickCoaching.getGoalCoaching(
        goal.title, 
        `${goal.progress}% complete, due ${goal.dueDate}`
      );
      setCoachingResponse(response.message);
      toast.success('Coaching guidance received!');
    } catch (error) {
      toast.error('Failed to get coaching guidance');
      console.error('Coaching error:', error);
    } finally {
      setIsLoadingCoaching(false);
    }
  };

  // Sample goals data for the tracker
  const goals = [
    {
      id: 1,
      title: "Complete Leadership Training",
      progress: 75,
      category: "Professional Development",
      dueDate: "July 15"
    },
    {
      id: 2,
      title: "Improve Team Collaboration",
      progress: 60,
      category: "Team Management",
      dueDate: "August 30"
    },
    {
      id: 3,
      title: "Learn React Advanced Patterns",
      progress: 40,
      category: "Technical Skills",
      dueDate: "September 10"
    },
    {
      id: 4,
      title: "Implement Design System",
      progress: 25,
      category: "Project Goals",
      dueDate: "October 5"
    },
    {
      id: 5,
      title: "Mentor Junior Developers",
      progress: 90,
      category: "Leadership",
      dueDate: "Ongoing"
    }
  ];

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader title="My Goals" />
      <div className="flex-1 p-4 overflow-auto rounded-sm bg-background">
        <div className="mb-4">
          <BackButton />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 max-w-7xl mx-auto">
          {/* Left column - Goals tracker */}
          <div className="md:col-span-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-[#512888]">My Goals</h2>
              <Button className="bg-[#9320E7] hover:bg-[#7E69AB]" size="sm">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add New Goal
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg border-[3px] border-[#840DD7] mb-4">
              <div className="flex items-center gap-2 mb-3">
                <ListCheck className="h-5 w-5 text-[#512888]" />
                <h3 className="text-xl font-semibold text-[#512888]">My Active Goals</h3>
              </div>
              <GoalTracker goals={goals} className="bg-white border-none shadow-none" />
              
              {/* Quick Coaching Section */}
              <div className="mt-6 pt-4 border-t">
                <h4 className="text-lg font-semibold text-[#512888] mb-3 flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  AI Goal Coaching
                </h4>
                <div className="space-y-2">
                  {goals.slice(0, 3).map((goal) => (
                    <div key={goal.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium">{goal.title}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => getGoalCoaching(goal)}
                        disabled={isLoadingCoaching}
                        className="text-xs"
                      >
                        <MessageCircle className="h-3 w-3 mr-1" />
                        Coach Me
                      </Button>
                    </div>
                  ))}
                </div>
                <Button
                  className="w-full mt-3 bg-[#9320E7] hover:bg-[#7E69AB]"
                  onClick={() => navigate('/coaching')}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Open Full AI Coach
                </Button>
              </div>
            </div>
            
            {/* Coaching Response */}
            {coachingResponse && (
              <Card className="mb-4">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-[#512888] mb-2 flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Coaching Guidance
                  </h4>
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">{coachingResponse}</p>
                </CardContent>
              </Card>
            )}
          </div>
          
          {/* Right column - Feed */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-[#512888] mb-10">Goals Timeline</h2>
            <GoalsFeed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyGoalsPage;
