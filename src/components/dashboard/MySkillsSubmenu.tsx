
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Code, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SkillSelectionDialog } from "./SkillSelectionDialog";
import { useState } from "react";

export function MySkillsSubmenu() {
  const [isAddSkillDialogOpen, setIsAddSkillDialogOpen] = useState(false);
  
  const skills = [
    { 
      name: "Leadership", 
      description: "Leading teams and projects",
      endorsements: [
        { name: "Alex Morgan", avatarUrl: "https://i.pravatar.cc/300?u=alex@example.com", initials: "AM" },
        { name: "Jamie Chen", avatarUrl: "https://i.pravatar.cc/300?u=jamie@example.com", initials: "JC" },
        { name: "Taylor Smith", avatarUrl: "https://i.pravatar.cc/300?u=taylor@example.com", initials: "TS" },
      ]
    },
    { 
      name: "Python", 
      description: "Python programming language",
      endorsements: [
        { name: "Jamie Chen", avatarUrl: "https://i.pravatar.cc/300?u=jamie@example.com", initials: "JC" },
        { name: "Alex Morgan", avatarUrl: "https://i.pravatar.cc/300?u=alex@example.com", initials: "AM" },
      ]
    },
    { 
      name: "Problem-solving", 
      description: "Critical thinking",
      endorsements: [
        { name: "Taylor Smith", avatarUrl: "https://i.pravatar.cc/300?u=taylor@example.com", initials: "TS" },
        { name: "Alex Morgan", avatarUrl: "https://i.pravatar.cc/300?u=alex@example.com", initials: "AM" },
      ]
    },
    { 
      name: "React", 
      description: "Frontend development",
      endorsements: [
        { name: "Jamie Chen", avatarUrl: "https://i.pravatar.cc/300?u=jamie@example.com", initials: "JC" },
        { name: "Taylor Smith", avatarUrl: "https://i.pravatar.cc/300?u=taylor@example.com", initials: "TS" },
      ]
    },
    { 
      name: "Scala", 
      description: "Functional programming",
      endorsements: [
        { name: "Alex Morgan", avatarUrl: "https://i.pravatar.cc/300?u=alex@example.com", initials: "AM" },
      ]
    },
    { 
      name: "AWS", 
      description: "Cloud infrastructure",
      endorsements: [
        { name: "Jamie Chen", avatarUrl: "https://i.pravatar.cc/300?u=jamie@example.com", initials: "JC" },
        { name: "Taylor Smith", avatarUrl: "https://i.pravatar.cc/300?u=taylor@example.com", initials: "TS" },
        { name: "Alex Morgan", avatarUrl: "https://i.pravatar.cc/300?u=alex@example.com", initials: "AM" },
      ]
    }
  ];

  const gradients = [
    'var(--gradient-1)',
    'var(--gradient-2)',
    'var(--gradient-3)',
    'var(--gradient-4)',
    'var(--gradient-5)',
    'var(--gradient-6)',
    'var(--gradient-7)'
  ];

  return (
    <div className="space-y-6 animate-in fade-in-50">
      {/* Header section with title and Add New Skill button */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">My Skills</h2>
        <Button 
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
          onClick={() => setIsAddSkillDialogOpen(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New Skill
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {skills.map((skill, index) => (
          <Card 
            key={skill.name}
            className="shadow-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-all duration-300 h-32"
            style={{ 
              background: gradients[index % gradients.length]
            }}
          >
            <div className="p-4 h-full flex flex-col justify-between">
              <div className="flex flex-row items-start justify-between">
                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    {skill.name === "Python" || skill.name === "React" || skill.name === "Scala" || skill.name === "AWS" ? (
                      <Code className="h-6 w-6 text-white mr-2" />
                    ) : (
                      <Star className="h-6 w-6 text-white mr-2" />
                    )}
                    <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                  </div>
                  <p className="text-white text-sm opacity-90 mb-3">{skill.description}</p>
                </div>
              </div>
              
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-medium">Endorsements</span>
                  <span className="text-white opacity-90">{skill.endorsements.length}</span>
                </div>
                <div className="flex justify-start -space-x-2">
                  {skill.endorsements.slice(0, 3).map((endorser, idx) => (
                    <Avatar key={`${skill.name}-${endorser.name}-${idx}`} className="border-2 border-white w-8 h-8">
                      <AvatarImage src={endorser.avatarUrl} alt={endorser.name} />
                      <AvatarFallback className="text-xs bg-white text-gray-800">{endorser.initials}</AvatarFallback>
                    </Avatar>
                  ))}
                  {skill.endorsements.length > 3 && (
                    <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs font-medium">+{skill.endorsements.length - 3}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <SkillSelectionDialog 
        open={isAddSkillDialogOpen}
        onOpenChange={setIsAddSkillDialogOpen}
        mode="add"
      />
    </div>
  );
}
