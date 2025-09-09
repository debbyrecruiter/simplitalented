
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import MyLearningPage from "./pages/MyLearningPage";
import MyGoalsPage from "./pages/MyGoalsPage";
import TeamGoalsPage from "./pages/TeamGoalsPage";
import LearningDevelopmentPage from "./pages/LearningDevelopmentPage";
import ExitInterviewsPage from "./pages/ExitInterviewsPage";
import DevelopmentSchedulePage from "./pages/DevelopmentSchedulePage";
import Reports from "./pages/Reports";
import WorkforceAnalytics from "./pages/WorkforceAnalytics";
import WorkforceDemographics from "./pages/WorkforceDemographics";
import WorkforceRetention from "./pages/WorkforceRetention";
import CompanyAttritionReport from "./pages/reports/CompanyAttritionReport";
import ManagerAttritionReport from "./pages/reports/ManagerAttritionReport";
import PerformanceAttritionReport from "./pages/reports/PerformanceAttritionReport";
import RaceAttritionReport from "./pages/reports/RaceAttritionReport";
import GenderAttritionReport from "./pages/reports/GenderAttritionReport";
import RegrettableDeparturesReport from "./pages/reports/RegrettableDeparturesReport";
import CostAnalysisReport from "./pages/reports/CostAnalysisReport";
import CompensationAnalysis from "./pages/CompensationAnalysis";
import ReviewsPage from "./pages/ReviewsPage";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Index />} />
              <Route path="me/learning" element={<MyLearningPage />} />
              <Route path="my-goals" element={<MyGoalsPage />} />
              <Route path="team-goals" element={<TeamGoalsPage />} />
              <Route path="learning-development" element={<LearningDevelopmentPage />} />
              <Route path="exit-interviews" element={<ExitInterviewsPage />} />
              <Route path="development-schedule" element={<DevelopmentSchedulePage />} />
              <Route path="reviews" element={<ReviewsPage />} />
              <Route path="reports" element={<Reports />} />
              <Route path="reports/workforce-analytics" element={<WorkforceAnalytics />} />
              <Route path="reports/workforce-demographics" element={<WorkforceDemographics />} />
              <Route path="reports/workforce-retention" element={<WorkforceRetention />} />
              <Route path="reports/workforce-retention/company-attrition" element={<CompanyAttritionReport />} />
              <Route path="reports/workforce-retention/manager-attrition" element={<ManagerAttritionReport />} />
              <Route path="reports/workforce-retention/performance-attrition" element={<PerformanceAttritionReport />} />
              <Route path="reports/workforce-retention/race-attrition" element={<RaceAttritionReport />} />
              <Route path="reports/workforce-retention/gender-attrition" element={<GenderAttritionReport />} />
              <Route path="reports/workforce-retention/regrettable-departures" element={<RegrettableDeparturesReport />} />
              <Route path="reports/workforce-retention/cost-analysis" element={<CostAnalysisReport />} />
              <Route path="reports/compensation-analysis" element={<CompensationAnalysis />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
