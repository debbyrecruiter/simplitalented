import { useState, useMemo } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Plus } from "lucide-react";
import { skillsData, getSkillCategories } from "@/data/skillsData";

interface AddSkillDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddSkillDialog({ open, onOpenChange }: AddSkillDialogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = useMemo(() => ["All", ...getSkillCategories()], []);

  const filteredSkills = useMemo(() => {
    let filtered = skillsData;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(skill => skill.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(skill => 
        skill.name.toLowerCase().includes(query) ||
        skill.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const handleAddSkill = (skillName: string) => {
    // TODO: Implement actual skill addition logic
    console.log("Adding skill:", skillName);
    // Close dialog after adding
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Add New Skill</DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col gap-4 flex-1 min-h-0">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.slice(0, 6).map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/20"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
            {categories.length > 6 && (
              <Badge variant="outline" className="cursor-pointer">
                +{categories.length - 6} more
              </Badge>
            )}
          </div>

          {/* Skills List */}
          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-2">
              {filteredSkills.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No skills found matching your search.
                </div>
              ) : (
                filteredSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="font-medium">{skill.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {skill.category}
                      </div>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => handleAddSkill(skill.name)}
                      className="ml-4"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add
                    </Button>
                  </div>
                ))
              )}
            </div>
          </ScrollArea>

          {/* Results Count */}
          <div className="text-sm text-muted-foreground border-t pt-2">
            Showing {filteredSkills.length} of {skillsData.length} skills
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}