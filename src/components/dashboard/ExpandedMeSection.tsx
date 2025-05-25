
import { MetricCard } from "@/components/MetricCard";
import { useNavigate } from "react-router-dom";

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <MetricCard
          title="My Goals"
          value="3 Active"
          description="Track your progress"
          onClick={onGoalsCardClick}
        />
        <MetricCard
          title="My Skills"
          value="5 Skills"
          description=""
          onClick={onMySkillsClick}
        />
        <MetricCard
          title="My Learning"
          value="2 Courses"
          description="In progress"
          onClick={handleMyLearningClick}
        />
        <MetricCard
          title="My Reviews"
          value="Next: Jun 15"
          description="Performance review"
        />
        <MetricCard
          title="My Development Schedule"
          value="Today: 3 meetings"
          description="Upcoming events"
          titleClassName="text-3xl"
          onClick={handleDevelopmentScheduleClick}
        />
        <MetricCard
          title="Past 1:1s"
          value="Last: Apr 28"
          description="Meeting history"
          onClick={onPast11CardClick}
        />
        <MetricCard
          title="My To Do"
          value="Daily Tasks"
          description="Keep track of work"
          onClick={onToDoListClick}
        />
      </div>
    </div>
  );
}
