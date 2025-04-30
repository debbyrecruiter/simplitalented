
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Goal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ExpandedCompanyGoalsSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-[#512888] mb-2">Company & Team Goals</h2>
        <p className="text-muted-foreground">Strategic objectives and key results</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-[#6E59A5]">Q2 Objectives</CardTitle>
              <Badge className="bg-[#9b87f5] hover:bg-[#7E69AB]">In Progress</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Goal className="h-5 w-5 text-[#7E69AB]" />
                <div>
                  <p className="font-medium">Improve User Experience</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="bg-gray-200 h-2 w-full rounded-full">
                      <div className="bg-[#6E59A5] h-2 w-3/4 rounded-full"></div>
                    </div>
                    <span className="text-xs text-muted-foreground">75%</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Goal className="h-5 w-5 text-[#7E69AB]" />
                <div>
                  <p className="font-medium">Expand Market Share</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="bg-gray-200 h-2 w-full rounded-full">
                      <div className="bg-[#6E59A5] h-2 w-1/2 rounded-full"></div>
                    </div>
                    <span className="text-xs text-muted-foreground">50%</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-[#6E59A5]">Department KPIs</CardTitle>
              <Badge className="bg-green-600 hover:bg-green-700">On Target</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Goal className="h-5 w-5 text-[#7E69AB]" />
                <div>
                  <p className="font-medium">Customer Satisfaction</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="bg-gray-200 h-2 w-full rounded-full">
                      <div className="bg-green-500 h-2 w-4/5 rounded-full"></div>
                    </div>
                    <span className="text-xs text-muted-foreground">80%</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Goal className="h-5 w-5 text-[#7E69AB]" />
                <div>
                  <p className="font-medium">Revenue Growth</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="bg-gray-200 h-2 w-full rounded-full">
                      <div className="bg-green-500 h-2 w-[85%] rounded-full"></div>
                    </div>
                    <span className="text-xs text-muted-foreground">85%</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
