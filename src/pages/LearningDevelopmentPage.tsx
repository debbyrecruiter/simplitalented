
import React from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { BackButton } from "@/components/ui/back-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LearningDevelopmentPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader title="Learning & Development" />
      <div className="flex-1 p-4 overflow-auto">
        <div className="space-y-6">
          <div className="mb-6">
            <BackButton fallbackPath="/" />
          </div>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              <Card 
                className="shadow-lg relative cursor-pointer hover:scale-105 transition-all duration-300 h-80 w-full flex flex-col flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #f403d1, #64b5f6)' }}
              >
                <CardHeader className="flex flex-col items-center text-center pt-6 pb-3 flex-shrink-0">
                  <div className="bg-white/20 rounded-full p-4 mb-4 shadow-md">
                    <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-bold text-white mb-2">
                    Learning & Development Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-6 flex-1 flex flex-col justify-center text-center">
                  <p className="text-white/80 text-sm">
                    Track learning progress and development metrics across the organization
                  </p>
                </CardContent>
              </Card>

              <Card 
                className="shadow-lg relative cursor-pointer hover:scale-105 transition-all duration-300 h-80 w-full flex flex-col flex-shrink-0"
                style={{ background: 'var(--gradient-1)' }}
              >
                <CardHeader className="flex flex-col items-center text-center pt-6 pb-3 flex-shrink-0">
                  <div className="bg-white/20 rounded-full p-4 mb-4 shadow-md">
                    <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-bold text-white mb-2">
                    Assign Training
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-6 flex-1 flex flex-col justify-center text-center">
                  <p className="text-white/80 text-sm">
                    Manage and assign training courses to employees across departments
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningDevelopmentPage;
