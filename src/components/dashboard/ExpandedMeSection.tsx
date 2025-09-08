import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Target, Brain, BookOpen, Calendar, MessageSquare, CheckSquare, User } from "lucide-react";

interface ExpandedMeSectionProps {
  onPast11CardClick: () => void;
  onGoalsCardClick: () => void;
  onMySkillsClick: () => void;
  onToDoListClick: () => void;
}

export function ExpandedMeSection({ 
  onPast11CardClick, 
  onGoalsCardClick,
  onMySkillsClick,
  onToDoListClick
}: ExpandedMeSectionProps) {
  const navigate = useNavigate();

  const handleMyLearningClick = () => {
    navigate("/me/learning");
  };

  const handleDevelopmentScheduleClick = () => {
    navigate("/development-schedule");
  };

  return (
    <div className="p-4">
      {/* Custom layout: 3-2-1-1 rows */}
      <div className="space-y-4">
        {/* First row - 3 cards */}
        <div className="flex flex-wrap gap-4 justify-center">
          {/* My Goals Card */}
          <Card 
            className="shadow-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-all duration-300 w-[300px]"
            style={{ 
              background: 'linear-gradient(135deg, #f403d1, #64b5f6)',
              aspectRatio: '16/9'
            }}
            onClick={onGoalsCardClick}
          >
            <CardHeader className="flex flex-row items-start justify-between p-4">
              <div className="flex flex-col">
                <CardTitle className="text-white text-xl font-bold">
                  Goals
                </CardTitle>
                <div className="text-white text-sm opacity-90">
                  3 Active • Track your progress
                </div>
              </div>
              <div className="bg-white rounded-full p-2 shadow-md">
                <Target className="h-6 w-6 text-green-600" />
              </div>
            </CardHeader>
          </Card>

          {/* My Skills Card */}
          <Card 
            className="shadow-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-all duration-300 w-[300px]"
            style={{ 
              background: 'var(--gradient-1)',
              aspectRatio: '16/9'
            }}
            onClick={onMySkillsClick}
          >
            <CardHeader className="flex flex-row items-start justify-between p-4">
              <div className="flex flex-col">
                <CardTitle className="text-white text-xl font-bold">
                  My Skills
                </CardTitle>
                <div className="text-white text-sm opacity-90">
                  5 Skills • View & develop
                </div>
              </div>
              <div className="bg-white rounded-full p-2 shadow-md">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
            </CardHeader>
          </Card>

          {/* My Learning Card */}
          <Card 
            className="shadow-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-all duration-300 w-[300px]"
            style={{ 
              background: 'linear-gradient(135deg, #f403d1, #64b5f6)',
              aspectRatio: '16/9'
            }}
            onClick={handleMyLearningClick}
          >
            <CardHeader className="flex flex-row items-start justify-between p-4">
              <div className="flex flex-col">
                <CardTitle className="text-white text-xl font-bold">
                  My Learning
                </CardTitle>
                <div className="text-white text-sm opacity-90">
                  2 Courses • In progress
                </div>
              </div>
              <div className="bg-white rounded-full p-2 shadow-md">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Second row - 2 cards */}
        <div className="flex flex-wrap gap-4 justify-center">
          {/* My Reviews Card */}
          <Card 
            className="shadow-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-all duration-300 w-[300px]"
            style={{ 
              background: 'linear-gradient(135deg, #f403d1, #64b5f6)',
              aspectRatio: '16/9'
            }}
          >
            <CardHeader className="flex flex-row items-start justify-between p-4">
              <div className="flex flex-col">
                <CardTitle className="text-white text-xl font-bold">
                  My Reviews
                </CardTitle>
                <div className="text-white text-sm opacity-90">
                  Next: Jun 15 • Performance review
                </div>
              </div>
              <div className="bg-white rounded-full p-2 shadow-md">
                <User className="h-6 w-6 text-pink-600" />
              </div>
            </CardHeader>
          </Card>

          {/* My Development Schedule Card */}
          <Card 
            className="shadow-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-all duration-300 w-[300px]"
            style={{ 
              background: 'var(--gradient-7)',
              aspectRatio: '16/9'
            }}
            onClick={handleDevelopmentScheduleClick}
          >
            <CardHeader className="flex flex-row items-start justify-between p-4">
              <div className="flex flex-col">
                <CardTitle className="text-white text-xl font-bold">
                  My Development Schedule
                </CardTitle>
                <div className="text-white text-sm opacity-90">
                  Today: 3 meetings • Upcoming events
                </div>
              </div>
              <div className="bg-white rounded-full p-2 shadow-md">
                <Calendar className="h-6 w-6 text-orange-600" />
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Third row - 1 card */}
        <div className="flex flex-wrap gap-4 justify-center">
          {/* Past 1:1s Card */}
          <Card 
            className="shadow-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-all duration-300 w-[300px]"
            style={{ 
              background: 'linear-gradient(135deg, #f403d1, #64b5f6)',
              aspectRatio: '16/9'
            }}
            onClick={onPast11CardClick}
          >
            <CardHeader className="flex flex-row items-start justify-between p-4">
              <div className="flex flex-col">
                <CardTitle className="text-white text-xl font-bold">
                  Past 1:1s
                </CardTitle>
                <div className="text-white text-sm opacity-90">
                  Last: Apr 28 • Meeting history
                </div>
              </div>
              <div className="bg-white rounded-full p-2 shadow-md">
                <MessageSquare className="h-6 w-6 text-yellow-600" />
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Fourth row - 1 card */}
        <div className="flex flex-wrap gap-4 justify-center">
          {/* My To Do Card */}
          <Card 
            className="shadow-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-all duration-300 w-[300px]"
            style={{ 
              background: 'linear-gradient(135deg, #f403d1, #64b5f6)',
              aspectRatio: '16/9'
            }}
            onClick={onToDoListClick}
          >
            <CardHeader className="flex flex-row items-start justify-between p-4">
              <div className="flex flex-col">
                <CardTitle className="text-white text-xl font-bold">
                  My To Do
                </CardTitle>
                <div className="text-white text-sm opacity-90">
                  Daily Tasks • Keep track of work
                </div>
              </div>
              <div className="bg-white rounded-full p-2 shadow-md">
                <CheckSquare className="h-6 w-6 text-violet-600" />
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}