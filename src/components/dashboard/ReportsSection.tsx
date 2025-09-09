
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarChart2, DollarSign, FileText } from "lucide-react";

export const ReportsSection: React.FC = () => {
  return (
    <div className="p-4">
      {/* Brick-style staggered layout */}
      <div className="space-y-24">
        {/* Row 1 - Full alignment */}
        <div className="flex flex-wrap gap-16 justify-center">
          <div className="flex-1 min-w-[300px] max-w-[400px]">
            <div className="relative">
              <div 
                className="absolute top-0 left-0 w-full h-full rounded-2xl opacity-70 blur-xl"
                style={{
                  background: 'linear-gradient(-45deg, #b84fce 0%, #d4acfb 100%)',
                  transform: 'translate(25px, 27px) scale(0.95)',
                  zIndex: -1
                }}
              ></div>
              <Link to="/reports/workforce-analytics">
                <Card 
                  className="card-modern cursor-pointer w-full shadow-lg relative z-10"
                  style={{ 
                    background: 'linear-gradient(135deg, #f403d1, #64b5f6)'
                  } as React.CSSProperties}
                >
                  <CardHeader className="flex flex-row items-start justify-between p-4">
                    <div className="flex flex-col">
                      <CardTitle className="text-white text-xl font-bold">
                        Workforce Analytics
                      </CardTitle>
                      <div className="text-white text-sm opacity-90">
                        Performance insights
                      </div>
                    </div>
                    <div className="card-icon">
                      <BarChart2 className="h-6 w-6 text-primary" />
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          </div>
          
          <div className="flex-1 min-w-[300px] max-w-[400px]">
            <div className="relative">
              <div 
                className="absolute top-0 left-0 w-full h-full rounded-2xl opacity-70 blur-xl"
                style={{
                  background: 'linear-gradient(-45deg, #b84fce 0%, #d4acfb 100%)',
                  transform: 'translate(25px, 27px) scale(0.95)',
                  zIndex: -1
                }}
              ></div>
              <Link to="/reports/compensation-analysis">
                <Card 
                  className="card-modern cursor-pointer w-full shadow-lg relative z-10"
                  style={{ 
                    background: 'linear-gradient(135deg, #F7EAFB, #A076AD)'
                  } as React.CSSProperties}
                >
                  <CardHeader className="flex flex-row items-start justify-between p-4">
                    <div className="flex flex-col">
                      <CardTitle className="text-white text-xl font-bold">
                        Compensation Analysis
                      </CardTitle>
                      <div className="text-white text-sm opacity-90">
                        Salary benchmarking
                      </div>
                    </div>
                    <div className="card-icon">
                      <DollarSign className="h-6 w-6 text-primary" />
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          </div>
        </div>

        {/* Row 2 - Offset by half tile width (brick pattern) */}
        <div className="flex flex-wrap gap-16 justify-center pl-[calc(50%/3)]">
          <div className="flex-1 min-w-[300px] max-w-[400px]">
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
                className="card-modern cursor-pointer w-full shadow-lg opacity-60 relative z-10"
                style={{ 
                  background: 'linear-gradient(135deg, #f403d1, #64b5f6)'
                } as React.CSSProperties}
              >
                <CardHeader className="flex flex-row items-start justify-between p-4">
                  <div className="flex flex-col">
                    <CardTitle className="text-white text-xl font-bold">
                      Custom Reports
                    </CardTitle>
                    <div className="text-white text-sm opacity-90">
                      Coming Soon
                    </div>
                  </div>
                  <div className="card-icon">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
