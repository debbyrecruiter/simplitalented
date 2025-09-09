import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Search } from "lucide-react";
import { useDashboard } from "@/context/DashboardContext";

export const Past11sSubmenu = () => {
  const { updateSection } = useDashboard();
  
  const handleVideoClick = () => {
    console.log("Video card clicked!");
    updateSection("past11s-video");
  };
  
  const handleTranscriptClick = () => {
    console.log("Transcript card clicked!");  
    updateSection("past11s-transcript");
  };
  return (
    <div className="col-span-full flex justify-center items-center gap-16 mt-72 animate-fade-in">
      <div className="w-[300px]">
        <div className="relative">
          <div 
            className="absolute top-0 left-0 w-full h-full rounded-2xl opacity-70 blur-xl"
            style={{
              background: 'linear-gradient(-45deg, #b84fce 0%, #d4acfb 100%)',
              transform: 'translate(25px, 27px) scale(0.95)',
              zIndex: -1
            }}
          ></div>
          <Card 
            className="shadow-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-all duration-300 w-full flex flex-col flex-shrink-0 z-10"
            style={{ 
              background: 'linear-gradient(135deg, #f403d1, #64b5f6)',
              aspectRatio: '16/9'
            }}
            onClick={handleVideoClick}
          >
            <CardHeader className="flex flex-row items-start justify-between p-4">
              <div className="flex flex-col">
                <CardTitle className="text-white text-xl font-bold">
                  Video
                </CardTitle>
                <div className="text-white text-sm opacity-90">
                  8 Recordings • From last month
                </div>
                <div className="text-white text-xs opacity-70 mt-1">
                  Latest: 2 days ago
                </div>
              </div>
              <div className="bg-white rounded-full p-2 shadow-md">
                <Video className="h-6 w-6 text-red-600" />
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>

      <div className="w-[300px]">
        <div className="relative">
          <div 
            className="absolute top-0 left-0 w-full h-full rounded-2xl opacity-70 blur-xl"
            style={{
              background: 'linear-gradient(-45deg, #b84fce 0%, #d4acfb 100%)',
              transform: 'translate(25px, 27px) scale(0.95)',
              zIndex: -1
            }}
          ></div>
          <Card 
            className="shadow-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-all duration-300 w-full flex flex-col flex-shrink-0 z-10"
            style={{ 
              background: 'linear-gradient(135deg, #C698EB, #571B88)',
              aspectRatio: '16/9'
            }}
            onClick={handleTranscriptClick}
          >
            <CardHeader className="flex flex-row items-start justify-between p-4">
              <div className="flex flex-col">
                <CardTitle className="text-white text-xl font-bold">
                  Transcripts
                </CardTitle>
                <div className="text-white text-sm opacity-90">
                  12 Documents • All meetings
                </div>
                <div className="text-white text-xs opacity-70 mt-1">
                  Updated daily
                </div>
              </div>
              <div className="bg-white rounded-full p-2 shadow-md">
                <Search className="h-6 w-6 text-blue-600" />
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}