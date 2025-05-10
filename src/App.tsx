
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MyGoalsPage from "./pages/MyGoalsPage";
import TeamGoalsPage from "./pages/TeamGoalsPage";
import GoalsTimelinePage from "./pages/GoalsTimelinePage";
import Reports from "./pages/Reports";
import WorkforceAnalytics from "./pages/WorkforceAnalytics";
import WorkforceDemographics from "./pages/WorkforceDemographics";
import WorkforceRetention from "./pages/WorkforceRetention";
import CompensationAnalysis from "./pages/CompensationAnalysis";
import CompanyAttrition from "./pages/CompanyAttrition";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/my-goals" element={<MyGoalsPage />} />
            <Route path="/team-goals" element={<TeamGoalsPage />} />
            <Route path="/my-reviews/timeline" element={<GoalsTimelinePage />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/reports/workforce-analytics" element={<WorkforceAnalytics />} />
            <Route path="/reports/workforce-demographics" element={<WorkforceDemographics />} />
            <Route path="/reports/workforce-retention" element={<WorkforceRetention />} />
            <Route path="/reports/workforce-retention/company-attrition" element={<CompanyAttrition />} />
            <Route path="/reports/compensation-analysis" element={<CompensationAnalysis />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
