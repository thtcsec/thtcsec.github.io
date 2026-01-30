import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import CertificatesPage from "./pages/CertificatesPage";
import PhonePage from "./pages/PhonePage";
import PricingPage from "./pages/PricingPage";
import NotFound from "./pages/NotFound";
import { initGA } from "./lib/ga4";
import { useHumanActivity } from "./hooks/useHumanActivity";
import PageTracker from "./components/PageTracker";

const queryClient = new QueryClient();

const App = () => {
  // Initialize GA4
  useEffect(() => {
    initGA();
  }, []);

  // Activate Human Activity Tracker
  useHumanActivity();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PageTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/phone" element={<PhonePage />} />
            <Route path="/price" element={<PricingPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
