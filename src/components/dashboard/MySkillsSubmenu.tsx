
import { Card } from "@/components/ui/card";
import { Star, Code } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function MySkillsSubmenu() {
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

  return (
    <div className="space-y-6 animate-in fade-in-50">
      <h2 className="text-3xl font-bold text-primary">My Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <Card key={skill.name} className="p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-2">
              {skill.name === "Python" ? (
                <Code className="h-5 w-5 text-[#9320E7] mr-2" />
              ) : skill.name === "React" ? (
                <Code className="h-5 w-5 text-[#9320E7] mr-2" />
              ) : skill.name === "Scala" ? (
                <Code className="h-5 w-5 text-[#9320E7] mr-2" />
              ) : skill.name === "AWS" ? (
                <Code className="h-5 w-5 text-[#9320E7] mr-2" />
              ) : (
                <Star className="h-5 w-5 text-[#9320E7] mr-2" />
              )}
              <h3 className="text-xl font-medium">{skill.name}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{skill.description}</p>
            
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Endorsements</span>
                <span className="text-sm text-muted-foreground">{skill.endorsements.length}</span>
              </div>
              <div className="flex -space-x-2">
                {skill.endorsements.map((endorser, idx) => (
                  <Avatar key={`${skill.name}-${endorser.name}-${idx}`} className="border-2 border-background w-8 h-8">
                    <AvatarImage src={endorser.avatarUrl} alt={endorser.name} />
                    <AvatarFallback>{endorser.initials}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
