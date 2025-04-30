
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function GoalsSubmenu() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-[#512888] mb-2">My Goals</h2>
        <p className="text-muted-foreground">View and manage your different goals</p>
      </div>

      <Tabs defaultValue="department" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-[#F0E6FF]">
          <TabsTrigger value="department" className="data-[state=active]:bg-[#840DD7] data-[state=active]:text-white">
            Department Goals
          </TabsTrigger>
          <TabsTrigger value="individual" className="data-[state=active]:bg-[#840DD7] data-[state=active]:text-white">
            Individual Goals
          </TabsTrigger>
          <TabsTrigger value="professional" className="data-[state=active]:bg-[#840DD7] data-[state=active]:text-white">
            Professional Development
          </TabsTrigger>
        </TabsList>

        <TabsContent value="department" className="mt-6">
          <Card className="bg-[#FAFFCB] border-[#840DD7] border-12">
            <CardHeader>
              <CardTitle>Department Goals</CardTitle>
              <CardDescription>Goals related to your department's objectives</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Your department goals will be displayed here.</p>
              {/* Department goals content will go here */}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="individual" className="mt-6">
          <Card className="bg-[#FAFFCB] border-[#840DD7] border-12">
            <CardHeader>
              <CardTitle>Individual Goals</CardTitle>
              <CardDescription>Your personal performance goals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Your individual goals will be displayed here.</p>
              {/* Individual goals content will go here */}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="professional" className="mt-6">
          <Card className="bg-[#FAFFCB] border-[#840DD7] border-12">
            <CardHeader>
              <CardTitle>Professional Development Goals</CardTitle>
              <CardDescription>Goals for your career growth and development</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Your professional development goals will be displayed here.</p>
              {/* Professional development goals content will go here */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
