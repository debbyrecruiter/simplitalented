
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackButton } from "@/components/ui/back-button";
import { MetricCard } from "@/components/MetricCard";
import { Users } from "lucide-react";

const Demographics = () => {
  const [activeView, setActiveView] = useState<'gender' | 'race' | 'age' | null>(null);
  
  const renderContent = () => {
    if (!activeView) {
      return null;
    }

    return (
      <Card className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-lg shadow-sm mt-6">
        <CardHeader>
          <CardTitle>{activeView.charAt(0).toUpperCase() + activeView.slice(1)} Demographics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 text-center">
            <p className="text-muted-foreground">
              {activeView.charAt(0).toUpperCase() + activeView.slice(1)} demographic data visualization coming soon.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="container p-4 mx-auto">
      <div className="mb-6">
        <BackButton fallbackPath="/reports" label="Back" />
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Demographics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <MetricCard
          title="Gender"
          value=""
          icon={Users}
          onClick={() => setActiveView('gender')}
          className={activeView === 'gender' ? 'ring-4 ring-blue-500' : ''}
        />
        <MetricCard
          title="Race"
          value=""
          icon={Users}
          onClick={() => setActiveView('race')}
          className={activeView === 'race' ? 'ring-4 ring-blue-500' : ''}
        />
        <MetricCard
          title="Age"
          value=""
          icon={Users}
          onClick={() => setActiveView('age')}
          className={activeView === 'age' ? 'ring-4 ring-blue-500' : ''}
        />
      </div>
      
      {renderContent()}
    </div>
  );
};

export default Demographics;
