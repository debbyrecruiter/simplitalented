import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CircleDot } from "lucide-react";

export function ExpandedCompanyGoalsSection() {
  // Progress values
  const enterpriseSalesProgress = 75;
  const userExperienceProgress = 60;
  const marketShareProgress = 45;
  const employeeSatisfactionProgress = 55;
  const transparencyScoreProgress = 70;
  const communicationScoreProgress = 40;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <Card 
        className="border-12 border-[#840DD7] bg-[#FAFFCB] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center"
      >
        <div className="flex flex-col items-center justify-center p-4 text-center h-full">
          <h3 className="text-3xl font-medium text-[#9320E7] mb-2">
            Increase Enterprise Sales
          </h3>
          <p className="text-xl font-bold mb-4">by 15%</p>
          
          <div className="w-full max-w-[80%] mb-2">
            <Progress value={enterpriseSalesProgress} className="h-3 bg-gray-200" />
          </div>
          
          <div className="flex items-center justify-center mt-1 gap-2">
            <CircleDot className="h-4 w-4 text-[#7E69AB]" />
            <span className="font-bold text-xl">{enterpriseSalesProgress}%</span>
            <span className="text-sm text-muted-foreground">complete</span>
          </div>
          
          <div className="mt-4 flex flex-col items-center">
            <div className="flex items-center space-x-1 text-sm">
              <span className="font-medium">Target:</span>
              <span>Q2 2025</span>
            </div>
          </div>
        </div>
      </Card>
      
      <Card 
        className="border-12 border-[#840DD7] bg-[#FAFFCB] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center"
      >
        <div className="flex flex-col items-center justify-center p-4 text-center h-full">
          <h3 className="text-3xl font-medium text-[#9320E7] mb-2">
            Improve User Experience
          </h3>
          <p className="text-xl font-bold mb-4">by 25%</p>
          
          <div className="w-full max-w-[80%] mb-2">
            <Progress value={userExperienceProgress} className="h-3 bg-gray-200" />
          </div>
          
          <div className="flex items-center justify-center mt-1 gap-2">
            <CircleDot className="h-4 w-4 text-[#7E69AB]" />
            <span className="font-bold text-xl">{userExperienceProgress}%</span>
            <span className="text-sm text-muted-foreground">complete</span>
          </div>
          
          <div className="mt-4 flex flex-col items-center">
            <div className="flex items-center space-x-1 text-sm">
              <span className="font-medium">Target:</span>
              <span>Q3 2025</span>
            </div>
          </div>
        </div>
      </Card>

      <Card 
        className="border-12 border-[#840DD7] bg-[#FAFFCB] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center"
      >
        <div className="flex flex-col items-center justify-center p-4 text-center h-full">
          <h3 className="text-3xl font-medium text-[#9320E7] mb-2">
            Increase Market Share
          </h3>
          <p className="text-xl font-bold mb-4">by 10%</p>
          
          <div className="w-full max-w-[80%] mb-2">
            <Progress value={marketShareProgress} className="h-3 bg-gray-200" />
          </div>
          
          <div className="flex items-center justify-center mt-1 gap-2">
            <CircleDot className="h-4 w-4 text-[#7E69AB]" />
            <span className="font-bold text-xl">{marketShareProgress}%</span>
            <span className="text-sm text-muted-foreground">complete</span>
          </div>
          
          <div className="mt-4 flex flex-col items-center">
            <div className="flex items-center space-x-1 text-sm">
              <span className="font-medium">Target:</span>
              <span>Q4 2025</span>
            </div>
          </div>
        </div>
      </Card>
      
      <Card 
        className="border-12 border-[#840DD7] bg-[#FAFFCB] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center"
      >
        <div className="flex flex-col items-center justify-center p-4 text-center h-full">
          <h3 className="text-3xl font-medium text-[#9320E7] mb-2">
            Increase Employee Satisfaction
          </h3>
          <p className="text-xl font-bold mb-3">by 10%</p>
          
          <div className="w-full max-w-[80%] mb-2">
            <div className="text-sm text-left mb-1">Transparency Score</div>
            <Progress value={transparencyScoreProgress} className="h-2.5 bg-gray-200" />
            <div className="flex items-center mt-1 mb-2 text-xs">
              <CircleDot className="h-3 w-3 text-[#7E69AB] mr-1" />
              <span>{transparencyScoreProgress}%</span>
            </div>
          </div>
          
          <div className="w-full max-w-[80%] mb-2">
            <div className="text-sm text-left mb-1">Communication Score</div>
            <Progress value={communicationScoreProgress} className="h-2.5 bg-gray-200" />
            <div className="flex items-center mt-1 text-xs">
              <CircleDot className="h-3 w-3 text-[#7E69AB] mr-1" />
              <span>{communicationScoreProgress}%</span>
            </div>
          </div>
          
          <div className="mt-3 flex flex-col items-center">
            <div className="flex items-center space-x-1 text-sm">
              <span className="font-medium">Target:</span>
              <span>Q4 2025</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
