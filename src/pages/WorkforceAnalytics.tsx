
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackButton } from "@/components/ui/back-button";
import { LayoutGrid, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MetricCard } from "@/components/MetricCard";

const WorkforceAnalytics = () => {
  const [activeView, setActiveView] = useState<'structure'>('structure');
  const navigate = useNavigate();

  const navigateToDemographics = () => {
    navigate('/reports/workforce-demographics');
  };

  const renderContent = () => {
    switch (activeView) {
      case 'structure':
      default:
        return (
          <Card className="border-12 border-[#840DD7] bg-[#FFFFFF] rounded-lg shadow-sm">
            <CardHeader>
              <CardTitle>Organizational Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 text-center">
                <p className="text-muted-foreground">
                  Organizational chart visualization coming soon.
                </p>
                <p className="mt-4">
                  This section will include a hierarchical view of the company's structure, 
                  showing reporting relationships and team compositions.
                </p>
              </div>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <div className="container p-4 mx-auto">
      <div className="mb-6">
        <BackButton fallbackPath="/reports" label="Back" />
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Workforce Analytics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <MetricCard
          title="Demographics"
          value=""
          icon={Users}
          onClick={navigateToDemographics}
          className=""
        />
        <MetricCard
          title="Organizational&#10;Structure"
          value=""
          icon={LayoutGrid}
          onClick={() => setActiveView('structure')}
          className={activeView === 'structure' ? 'ring-4 ring-blue-500' : ''}
        />
      </div>
      
      {renderContent()}
    </div>
  );
};

export default WorkforceAnalytics;
