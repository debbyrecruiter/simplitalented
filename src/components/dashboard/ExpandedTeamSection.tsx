import { teamMembers } from "@/data/dashboardData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserRound } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SkillSelectionDialog } from "./SkillSelectionDialog";
import { useState } from "react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  level: "manager" | "direct-report";
  avatarUrl?: string;
  initials: string;
  onEndorse: (memberName: string) => void;
}

const TeamMemberCard = ({ name, role, level, avatarUrl, initials, onEndorse }: TeamMemberCardProps) => {
  // Create varied gradients based on name to ensure different colors
  const gradients = ['linear-gradient(135deg, #C698EB, #571B88)', 'linear-gradient(135deg, #F7EAFB, #A076AD)', 'linear-gradient(135deg, #f403d1, #64b5f6)', 'linear-gradient(135deg, #f403d1, #64b5f6)', 'linear-gradient(135deg, #f403d1, #64b5f6)', 'linear-gradient(135deg, #f403d1, #64b5f6)', 'var(--gradient-7)'];
  const nameHash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const gradientStyle = { background: gradients[nameHash % gradients.length] };

  return (
    <Card 
      className="shadow-lg relative cursor-pointer hover:scale-105 transition-all duration-300 flex-1 min-w-[300px] max-w-[400px]"
      style={{
        ...gradientStyle
      }}
    >
      <CardHeader className="flex flex-row items-start justify-between p-4">
        <div className="flex flex-col">
          <CardTitle className="text-white text-xl font-bold">
            {name}
          </CardTitle>
          <div className="text-white text-sm opacity-90">
            {role}
          </div>
          <div className="text-white text-xs opacity-75 mt-1">
            {level === "manager" ? "Team Manager" : "Direct Report"}
          </div>
        </div>
        <div className="bg-white rounded-full p-2 shadow-md">
          <Avatar className="h-8 w-8">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback className="bg-primary text-white font-bold text-sm">{initials}</AvatarFallback>
          </Avatar>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex gap-2 justify-end">
          <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
            Review
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            onClick={() => onEndorse(name)}
          >
            Endorse
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export const ExpandedTeamSection = () => {
  const [isEndorseDialogOpen, setIsEndorseDialogOpen] = useState(false);
  const [selectedMemberName, setSelectedMemberName] = useState<string>("");

  const handleEndorse = (memberName: string) => {
    setSelectedMemberName(memberName);
    setIsEndorseDialogOpen(true);
  };

  return (
    <div className="p-4">
      {/* Brick-style staggered layout */}
      <div className="space-y-24">
        {/* Row 1 - Full alignment */}
        <div className="flex flex-wrap gap-16 justify-center">
          <div className="flex-1 min-w-[300px] max-w-[400px]">
            <div className="relative">
              <div 
                className="absolute top-0 left-0 w-full h-full rounded-2xl opacity-70 blur-xl"
                style={{
                  background: 'linear-gradient(-45deg, #b84fce 0%, #d4acfb 100%)',
                  transform: 'translate(25px, 27px) scale(0.95)',
                  zIndex: -1
                }}
              ></div>
              <TeamMemberCard
                name="Alex Morgan"
                role="Senior Developer"
                level="manager"
                avatarUrl={teamMembers[0].avatarUrl}
                initials={teamMembers[0].initials}
                onEndorse={handleEndorse}
              />
            </div>
          </div>
          {teamMembers.slice(1, 3).map((member) => (
            <div key={member.id} className="flex-1 min-w-[300px] max-w-[400px]">
              <div className="relative">
                <div 
                  className="absolute top-0 left-0 w-full h-full rounded-2xl opacity-70 blur-xl"
                  style={{
                    background: 'linear-gradient(-45deg, #b84fce 0%, #d4acfb 100%)',
                    transform: 'translate(25px, 27px) scale(0.95)',
                    zIndex: -1
                  }}
                ></div>
                <TeamMemberCard
                  name={member.name}
                  role={member.role}
                  level="direct-report"
                  avatarUrl={member.avatarUrl}
                  initials={member.initials}
                  onEndorse={handleEndorse}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - Offset by half tile width (brick pattern) */}
        <div className="flex flex-wrap gap-16 justify-center pl-[150px]">
          {teamMembers.slice(3, 6).map((member) => (
            <div key={member.id} className="flex-1 min-w-[300px] max-w-[400px]">
              <div className="relative">
                <div 
                  className="absolute top-0 left-0 w-full h-full rounded-2xl opacity-70 blur-xl"
                  style={{
                    background: 'linear-gradient(-45deg, #b84fce 0%, #d4acfb 100%)',
                    transform: 'translate(25px, 27px) scale(0.95)',
                    zIndex: -1
                  }}
                ></div>
                <TeamMemberCard
                  name={member.name}
                  role={member.role}
                  level="direct-report"
                  avatarUrl={member.avatarUrl}
                  initials={member.initials}
                  onEndorse={handleEndorse}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Row 3 - Full alignment */}
        <div className="flex flex-wrap gap-16 justify-center">
          {teamMembers.slice(6).map((member) => (
            <div key={member.id} className="flex-1 min-w-[300px] max-w-[400px]">
              <div className="relative">
                <div 
                  className="absolute top-0 left-0 w-full h-full rounded-2xl opacity-70 blur-xl"
                  style={{
                    background: 'linear-gradient(-45deg, #b84fce 0%, #d4acfb 100%)',
                    transform: 'translate(25px, 27px) scale(0.95)',
                    zIndex: -1
                  }}
                ></div>
                <TeamMemberCard
                  name={member.name}
                  role={member.role}
                  level="direct-report"
                  avatarUrl={member.avatarUrl}
                  initials={member.initials}
                  onEndorse={handleEndorse}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <SkillSelectionDialog 
        open={isEndorseDialogOpen}
        onOpenChange={setIsEndorseDialogOpen}
        mode="endorse"
        targetPersonName={selectedMemberName}
      />
    </div>
  );
};