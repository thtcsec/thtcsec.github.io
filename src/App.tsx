import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import ImmersivePage from "./pages/ImmersivePage";
import NotFound from "./pages/NotFound";
import { initGA } from "./lib/ga4";
import { useHumanActivity } from "./hooks/useHumanActivity";
import PageTracker from "./components/PageTracker";
import ScrollToTop from "./components/ScrollToTop";
import { AudioProvider } from "./context/AudioContext";
import MiniPlayer from "./components/portfolio/MiniPlayer";

import ArcadePage from "./pages/ArcadePage";
import { useArcadeSecret } from "./hooks/useArcadeSecret";

const queryClient = new QueryClient();

const RouteScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

const ArcadeListener = () => {
  useArcadeSecret();
  return null;
};

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
          <ArcadeListener />
          <AudioProvider>
            <RouteScrollToTop />
            <PageTracker />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<ProjectDetailPage />} />
              <Route path="/certificates" element={<CertificatesPage />} />

              <Route path="/services" element={<PricingPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/silentpipe" element={<SilentPipePage />} />
              <Route path="/silentpipe/" element={<SilentPipePage />} />
              <Route path="/pentestlab" element={<PentestLabPage />} />
              <Route path="/pentestlab/" element={<PentestLabPage />} />
              <Route path="/research" element={<BlogPage />} />
              <Route path="/research/:id" element={<BlogDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/prisma" element={<PrismaPage />} />
              <Route path="/immersive" element={<ImmersivePage />} />
              <Route path="/arcade" element={<ArcadePage />} />
              <Route path="/game" element={<ArcadePage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ScrollToTop />
            <MiniPlayer />
          </AudioProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
