
import React from "react";
import { BackButton } from "@/components/ui/back-button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { MetricCard } from "@/components/MetricCard";
import { BarChart2, TrendingDown, Users } from "lucide-react";

const WorkforceRetention = () => {
  const navigate = useNavigate();

  const navigateToCompanyAttrition = () => {
    navigate('/reports/workforce-retention/company-attrition');
  };

  return (
    <div className="container p-4 mx-auto">
      <div className="mb-6">
        <BackButton fallbackPath="/reports/workforce-analytics" label="Back" />
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Workforce Retention Analysis</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <MetricCard
          title="Company&#10;Attrition"
          value=""
          icon={TrendingDown}
          onClick={navigateToCompanyAttrition}
          className=""
        />
        <MetricCard
          title="Retention&#10;Strategies"
          value=""
          icon={BarChart2}
          onClick={() => {}}
          className=""
        />
        <MetricCard
          title="Employee&#10;Tenure"
          value=""
          icon={Users}
          onClick={() => {}}
          className=""
        />
      </div>

      <div className="mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Retention Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Click on any of the cards above to explore detailed retention metrics and analyses.
              The Company Attrition section provides in-depth analysis of employee turnover rates
              across departments, performance levels, and time periods.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WorkforceRetention;
