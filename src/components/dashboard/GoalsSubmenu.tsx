
import { Card, CardContent } from "@/components/ui/card";

export function GoalsSubmenu() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-[#512888] mb-2">My Goals</h2>
        <p className="text-muted-foreground">View and manage your different goals</p>
      </div>

      <div className="flex flex-nowrap gap-6 justify-center mt-8">
        {/* My Goals Circle */}
        <div 
          className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center flex-shrink-0"
          style={{ width: "437.5px", height: "437.5px" }}
        >
          <div className="flex flex-col items-center justify-center text-center pb-0 pt-6">
            <div className="text-4xl font-small text-[#9320E7] truncate">
              My Goals
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col justify-center text-center">
            <div className="flex justify-center space-x-4 mb-4">
              <button 
                className="bg-[#001BC4] hover:bg-[#001BC4]/80 text-white h-9 rounded-md px-3 inline-flex items-center justify-center"
              >
                Endorse
              </button>
              <button 
                className="bg-[#001BC4] hover:bg-[#001BC4]/80 text-white h-9 rounded-md px-3 inline-flex items-center justify-center"
              >
                Review
              </button>
            </div>
            <div className="text-3xl font-bold truncate">
              Department Goals
            </div>
            <p className="text-sm text-muted-foreground truncate">
              Goals related to your department
            </p>
          </div>
        </div>

        {/* Team Goals Circle */}
        <div 
          className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center flex-shrink-0"
          style={{ width: "437.5px", height: "437.5px" }}
        >
          <div className="flex flex-col items-center justify-center text-center pb-0 pt-6">
            <div className="text-4xl font-small text-[#9320E7] truncate">
              Team Goals
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col justify-center text-center">
            <div className="flex justify-center space-x-4 mb-4">
              <button 
                className="bg-[#001BC4] hover:bg-[#001BC4]/80 text-white h-9 rounded-md px-3 inline-flex items-center justify-center"
              >
                Endorse
              </button>
              <button 
                className="bg-[#001BC4] hover:bg-[#001BC4]/80 text-white h-9 rounded-md px-3 inline-flex items-center justify-center"
              >
                Review
              </button>
            </div>
            <div className="text-3xl font-bold truncate">
              Individual Goals
            </div>
            <p className="text-sm text-muted-foreground truncate">
              Team performance goals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
