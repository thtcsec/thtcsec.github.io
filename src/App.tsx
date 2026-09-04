import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Index from "./pages/Index";

// Lazy loaded secondary routes for optimal initial page load performance
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));
const CertificatesPage = lazy(() => import("./pages/CertificatesPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));
const SilentPipePage = lazy(() => import("./pages/SilentPipePage"));
const PentestLabPage = lazy(() => import("./pages/PentestLabPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const PrismaPage = lazy(() => import("./pages/PrismaPage"));
const ImmersivePage = lazy(() => import("./pages/ImmersivePage"));
const ArcadePage = lazy(() => import("./pages/ArcadePage"));
const PublicationsPage = lazy(() => import("./pages/PublicationsPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

import { initGA } from "./lib/ga4";
import { useHumanActivity } from "./hooks/useHumanActivity";
import PageTracker from "./components/PageTracker";
import ScrollToTop from "./components/ScrollToTop";
import { AudioProvider } from "./context/AudioContext";
import MiniPlayer from "./components/portfolio/MiniPlayer";
import { useArcadeSecret } from "./hooks/useArcadeSecret";

const PageFallback = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
      <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Loading...</span>
    </div>
  </div>
);

const queryClient = new QueryClient();

const RouteScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      const savedY = sessionStorage.getItem("home_scroll_y");
      if (savedY) {
        const y = parseInt(savedY, 10);
        setTimeout(() => {
          window.scrollTo({ top: y, left: 0, behavior: "instant" });
        }, 50);
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/") {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          sessionStorage.setItem("home_scroll_y", window.scrollY.toString());
        }
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
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

  // Prefetch high-priority routes during browser idle time for instant subpage transitions
  useEffect(() => {
    const prefetchRoutes = () => {
      import("./pages/ProjectsPage");
      import("./pages/PublicationsPage");
      import("./pages/ResumePage");
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const win = window as unknown as {
        requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number;
        cancelIdleCallback: (id: number) => void;
      };
      const handle = win.requestIdleCallback(prefetchRoutes, { timeout: 3500 });
      return () => win.cancelIdleCallback(handle);
    } else {
      const timer = setTimeout(prefetchRoutes, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

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
            <Suspense fallback={<PageFallback />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:id" element={<ProjectDetailPage />} />
                <Route path="/certificates" element={<CertificatesPage />} />

                <Route path="/services" element={<PricingPage />} />
                <Route path="/resume" element={<ResumePage />} />
                <Route path="/publications" element={<PublicationsPage />} />
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
            </Suspense>
            <ScrollToTop />
            <MiniPlayer />
          </AudioProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
