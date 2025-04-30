
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in-50">
      <Card 
        className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center transform origin-center scale-75"
      >
        <div className="flex flex-col items-center justify-center p-8 text-center h-full">
          <h3 className="text-5xl font-medium text-[#9320E7] mb-4">
            Increase Enterprise Sales
          </h3>
          <p className="text-3xl font-bold mb-5">+15%</p>
          
          <div className="w-full max-w-[80%] mb-4">
            <Progress value={enterpriseSalesProgress} className="h-5 bg-gray-200" />
          </div>
          
          <div className="flex items-center justify-center mt-3 gap-2">
            <CircleDot className="h-6 w-6 text-[#7E69AB]" />
            <span className="font-bold text-3xl">{enterpriseSalesProgress}%</span>
            <span className="text-base text-muted-foreground">complete</span>
          </div>
          
          <div className="mt-6 flex flex-col items-center">
            <div className="flex items-center space-x-2 text-base">
              <span className="font-medium">Target:</span>
              <span>Q2 2025</span>
            </div>
          </div>
        </div>
      </Card>
      
      <Card 
        className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center transform origin-center scale-75"
      >
        <div className="flex flex-col items-center justify-center p-8 text-center h-full">
          <h3 className="text-5xl font-medium text-[#9320E7] mb-4">
            Improve User Experience
          </h3>
          <p className="text-3xl font-bold mb-5">+25%</p>
          
          <div className="w-full max-w-[80%] mb-4">
            <Progress value={userExperienceProgress} className="h-5 bg-gray-200" />
          </div>
          
          <div className="flex items-center justify-center mt-3 gap-2">
            <CircleDot className="h-6 w-6 text-[#7E69AB]" />
            <span className="font-bold text-3xl">{userExperienceProgress}%</span>
            <span className="text-base text-muted-foreground">complete</span>
          </div>
          
          <div className="mt-6 flex flex-col items-center">
            <div className="flex items-center space-x-2 text-base">
              <span className="font-medium">Target:</span>
              <span>Q3 2025</span>
            </div>
          </div>
        </div>
      </Card>

      <Card 
        className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center transform origin-center scale-75"
      >
        <div className="flex flex-col items-center justify-center p-8 text-center h-full">
          <h3 className="text-5xl font-medium text-[#9320E7] mb-4">
            Increase Market Share
          </h3>
          <p className="text-3xl font-bold mb-5">+10%</p>
          
          <div className="w-full max-w-[80%] mb-4">
            <Progress value={marketShareProgress} className="h-5 bg-gray-200" />
          </div>
          
          <div className="flex items-center justify-center mt-3 gap-2">
            <CircleDot className="h-6 w-6 text-[#7E69AB]" />
            <span className="font-bold text-3xl">{marketShareProgress}%</span>
            <span className="text-base text-muted-foreground">complete</span>
          </div>
          
          <div className="mt-6 flex flex-col items-center">
            <div className="flex items-center space-x-2 text-base">
              <span className="font-medium">Target:</span>
              <span>Q4 2025</span>
            </div>
          </div>
        </div>
      </Card>
      
      <Card 
        className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-full shadow-sm overflow-hidden aspect-square flex flex-col justify-center transform origin-center scale-75"
      >
        <div className="flex flex-col items-center justify-center p-8 text-center h-full">
          <h3 className="text-5xl font-medium text-[#9320E7] mb-4">
            Increase Employee Satisfaction
          </h3>
          <p className="text-3xl font-bold mb-5">+10%</p>
          
          <div className="w-full max-w-[80%] mb-3">
            <div className="text-base text-left mb-1">Transparency Score</div>
            <Progress value={transparencyScoreProgress} className="h-4 bg-gray-200" />
            <div className="flex items-center mt-2 mb-4 text-base">
              <CircleDot className="h-5 w-5 text-[#7E69AB] mr-2" />
              <span>{transparencyScoreProgress}%</span>
            </div>
          </div>
          
          <div className="w-full max-w-[80%]">
            <div className="text-base text-left mb-1">Communication Score</div>
            <Progress value={communicationScoreProgress} className="h-4 bg-gray-200" />
            <div className="flex items-center mt-2 text-base">
              <CircleDot className="h-5 w-5 text-[#7E69AB] mr-2" />
              <span>{communicationScoreProgress}%</span>
            </div>
          </div>
          
          <div className="mt-5 flex flex-col items-center">
            <div className="flex items-center space-x-2 text-base">
              <span className="font-medium">Target:</span>
              <span>Q4 2025</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

