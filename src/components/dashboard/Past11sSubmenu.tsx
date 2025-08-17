
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Search } from "lucide-react";

export const Past11sSubmenu = () => {
  return (
    <div className="col-span-full grid gap-4 grid-cols-2 mt-4 animate-fade-in">
      <Card 
        className="card-modern cursor-pointer transform scale-[0.4] origin-center"
        style={{ 
          '--card-gradient-start': 'var(--gradient-blue-start)',
          '--card-gradient-end': 'var(--gradient-blue-end)'
        } as React.CSSProperties}
      >
        <CardHeader className="flex flex-row items-start justify-between p-4">
          <div className="flex flex-col">
            <CardTitle className="text-white text-lg font-bold">
              Video
            </CardTitle>
            <div className="text-white text-xl font-semibold mb-1">
              8 Recordings
            </div>
            <div className="text-white text-xs opacity-80">
              From last month
            </div>
            <div className="text-white text-xs opacity-70 mt-1">
              Latest: 2 days ago
            </div>
          </div>
          <div className="card-icon">
            <Video className="h-5 w-5 text-primary" />
          </div>
        </CardHeader>
      </Card>
      
      <Card 
        className="card-modern cursor-pointer transform scale-[0.4] origin-center"
        style={{ 
          '--card-gradient-start': 'var(--gradient-teal-start)',
          '--card-gradient-end': 'var(--gradient-teal-end)'
        } as React.CSSProperties}
      >
        <CardHeader className="flex flex-row items-start justify-between p-4">
          <div className="flex flex-col">
            <CardTitle className="text-white text-lg font-bold">
              Transcripts
            </CardTitle>
            <div className="text-white text-xl font-semibold mb-1">
              12 Documents
            </div>
            <div className="text-white text-xs opacity-80">
              All meetings
            </div>
            <div className="text-white text-xs opacity-70 mt-1">
              Updated daily
            </div>
          </div>
          <div className="card-icon">
            <Search className="h-5 w-5 text-primary" />
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
