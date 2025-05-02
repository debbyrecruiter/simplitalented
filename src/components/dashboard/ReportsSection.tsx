
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const ReportsSection: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Company Reports</h2>
      <p className="text-muted-foreground mb-8">
        This section is only visible to the People Team and contains company-wide HR analytics and reports.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-4 border shadow-sm">
          <CardHeader>
            <CardTitle>Workforce Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <p>View detailed reports about employee demographics, retention rates, and organizational structure.</p>
          </CardContent>
        </Card>
        <Card className="p-4 border shadow-sm">
          <CardHeader>
            <CardTitle>Compensation Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Review salary benchmarks, equity distribution, and compensation trends across departments.</p>
          </CardContent>
        </Card>
        <Card className="p-4 border shadow-sm">
          <CardHeader>
            <CardTitle>Diversity & Inclusion</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Monitor diversity metrics and inclusion initiatives throughout the organization.</p>
          </CardContent>
        </Card>
        <Card className="p-4 border shadow-sm">
          <CardHeader>
            <CardTitle>Performance Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Analyze performance review data and identify patterns across teams and departments.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
