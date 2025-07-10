
import { Bell, Search, AlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSidebar } from "@/components/ui/sidebar";

interface DashboardHeaderProps {
  title: string;
}

export function DashboardHeader({ title }: DashboardHeaderProps) {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between py-4 px-6 border-b">
      <div className="flex items-center gap-4">
        <Button 
          onClick={toggleSidebar} 
          variant="ghost" 
          size="icon" 
          className="md:hidden aspect-square"
        >
          <AlignJustify className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <h1 className="text-3xl font-comfortaa">
          <span className="text-[#A171E5] font-bold italic">Simpli</span>
          <span className="text-black">Talented</span>
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative md:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-8 bg-background"
          />
        </div>
        <Button size="icon" variant="ghost" className="relative aspect-square">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>
        <Avatar className="aspect-square">
          <AvatarImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&h=400&auto=format&fit=crop" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
