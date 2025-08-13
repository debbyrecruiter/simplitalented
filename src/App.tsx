
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import MyLearningPage from "./pages/MyLearningPage";
import MyGoalsPage from "./pages/MyGoalsPage";
import LearningDevelopmentPage from "./pages/LearningDevelopmentPage";
import ExitInterviewsPage from "./pages/ExitInterviewsPage";
import DevelopmentSchedulePage from "./pages/DevelopmentSchedulePage";
import Reports from "./pages/Reports";
import WorkforceAnalytics from "./pages/WorkforceAnalytics";
import WorkforceDemographics from "./pages/WorkforceDemographics";
import WorkforceRetention from "./pages/WorkforceRetention";
import CompensationAnalysis from "./pages/CompensationAnalysis";
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
              <Route path="learning-development" element={<LearningDevelopmentPage />} />
              <Route path="exit-interviews" element={<ExitInterviewsPage />} />
              <Route path="development-schedule" element={<DevelopmentSchedulePage />} />
              <Route path="reports" element={<Reports />} />
              <Route path="reports/workforce-analytics" element={<WorkforceAnalytics />} />
              <Route path="reports/workforce-demographics" element={<WorkforceDemographics />} />
              <Route path="reports/workforce-retention" element={<WorkforceRetention />} />
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
