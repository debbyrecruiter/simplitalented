
import { MetricCard } from "@/components/MetricCard";

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
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* Wrap each MetricCard in a div with flex centering and width control */}
        <div className="flex justify-center">
          <div className="w-4/5">
            <MetricCard
              title="My Goals"
              value="3 Active"
              description="Track your progress"
              onClick={onGoalsCardClick}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-4/5">
            <MetricCard
              title="My Skills"
              value="5 Skills"
              description=""
              onClick={onMySkillsClick}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-4/5">
            <MetricCard
              title="My Learning"
              value="2 Courses"
              description="In progress"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-4/5">
            <MetricCard
              title="My Reviews"
              value="Next: Jun 15"
              description="Performance review"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-4/5">
            <MetricCard
              title="My Schedule"
              value="Today: 3 meetings"
              description="Upcoming events"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-4/5">
            <MetricCard
              title="Past 1:1s"
              value="Last: Apr 28"
              description="Meeting history"
              onClick={onPast11CardClick}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-4/5">
            <MetricCard
              title="My To Do"
              value="Daily Tasks"
              description="Keep track of work"
              onClick={onToDoListClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
