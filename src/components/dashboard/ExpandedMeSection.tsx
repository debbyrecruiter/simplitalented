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
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {/* My Goals Card */}
        <Card 
          className="shadow-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-all duration-300 transform rotate-1 hover:rotate-0"
          style={{ 
            background: 'linear-gradient(135deg, var(--gradient-green-start), var(--gradient-green-end))',
            aspectRatio: '16/9',
            marginTop: '0px'
          }}
          onClick={onGoalsCardClick}
        >
          <CardHeader className="flex flex-row items-start justify-between p-4">
            <div className="flex flex-col">
              <CardTitle className="text-white text-xl font-bold">
                My Goals
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
          className="shadow-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-all duration-300 transform -rotate-1 hover:rotate-0"
          style={{ 
            background: 'linear-gradient(135deg, var(--gradient-blue-start), var(--gradient-blue-end))',
            aspectRatio: '16/9',
            marginTop: '16px'
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
          className="shadow-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-all duration-300 transform rotate-2 hover:rotate-0"
          style={{ 
            background: 'linear-gradient(135deg, var(--gradient-purple-start), var(--gradient-purple-end))',
            aspectRatio: '16/9',
            marginTop: '-8px'
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

        {/* My Reviews Card */}
        <Card 
          className="shadow-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-all duration-300 transform -rotate-2 hover:rotate-0"
          style={{ 
            background: 'linear-gradient(135deg, var(--gradient-pink-start), var(--gradient-pink-end))',
            aspectRatio: '16/9',
            marginTop: '24px'
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
          className="shadow-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-all duration-300 transform rotate-1 hover:rotate-0"
          style={{ 
            background: 'linear-gradient(135deg, var(--gradient-orange-start), var(--gradient-orange-end))',
            aspectRatio: '16/9',
            marginTop: '8px'
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

        {/* Past 1:1s Card */}
        <Card 
          className="shadow-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-all duration-300 transform -rotate-1 hover:rotate-0"
          style={{ 
            background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
            aspectRatio: '16/9',
            marginTop: '-12px'
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
              <MessageSquare className="h-6 w-6 text-cyan-600" />
            </div>
          </CardHeader>
        </Card>

        {/* My To Do Card */}
        <Card 
          className="shadow-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-all duration-300 transform rotate-2 hover:rotate-0"
          style={{ 
            background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
            aspectRatio: '16/9',
            marginTop: '16px'
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
  );
}