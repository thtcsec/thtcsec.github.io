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

import PricingPage from "./pages/PricingPage";
import ResumePage from "./pages/ResumePage";
import SilentPipePage from "./pages/SilentPipePage";
import PentestLabPage from "./pages/PentestLabPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import AboutPage from "./pages/AboutPage";
import PrismaPage from "./pages/PrismaPage";
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

            <Route path="/price" element={<PricingPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/silentpipe" element={<SilentPipePage />} />
            <Route path="/silentpipe/" element={<SilentPipePage />} />
            <Route path="/pentestlab" element={<PentestLabPage />} />
            <Route path="/pentestlab/" element={<PentestLabPage />} />
            <Route path="/research" element={<BlogPage />} />
            <Route path="/research/:id" element={<BlogDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/prisma" element={<PrismaPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
