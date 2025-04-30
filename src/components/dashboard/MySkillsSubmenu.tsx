
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Star, Code, Laptop, BrainCircuit, Cloud } from "lucide-react";

export function MySkillsSubmenu() {
  const skills = [
    { name: "Leadership", level: 80, description: "Leading teams and projects" },
    { name: "Python", level: 85, description: "Python programming language" },
    { name: "Technical", level: 90, description: "Domain expertise" },
    { name: "Problem-solving", level: 75, description: "Critical thinking" },
    { name: "React", level: 88, description: "Frontend development" },
    { name: "Scala", level: 70, description: "Functional programming" },
    { name: "AWS", level: 82, description: "Cloud infrastructure" }
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
                <Laptop className="h-5 w-5 text-[#9320E7] mr-2" />
              ) : skill.name === "Scala" ? (
                <BrainCircuit className="h-5 w-5 text-[#9320E7] mr-2" />
              ) : skill.name === "AWS" ? (
                <Cloud className="h-5 w-5 text-[#9320E7] mr-2" />
              ) : (
                <Star className="h-5 w-5 text-[#9320E7] mr-2" />
              )}
              <h3 className="text-xl font-medium">{skill.name}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{skill.description}</p>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Proficiency</span>
              <span className="text-sm font-medium">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </Card>
        ))}
      </div>
    </div>
  );
}
