import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Disc } from "lucide-react";
import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import Experience from "@/components/portfolio/Experience";
import About from "@/components/portfolio/About";
import Showcase from "@/components/portfolio/Showcase";
import Community from "@/components/portfolio/Community";
import RecentBlogs from "@/components/portfolio/RecentBlogs";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";


const Index = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // Handle reveal animations for cinema-reveal and cinema-stagger elements
    const animatedElements = document.querySelectorAll<HTMLElement>(".cinema-reveal, .cinema-stagger");
    if (!animatedElements.length) {
      return;
    }

    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px 50px 0px",
      },
    );

    animatedElements.forEach(element => revealObserver.observe(element));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    // Handle section transition camera effects
    const sections = sectionRefs.current.filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const sectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const isCenter = entry.intersectionRatio > 0.5;
          if (isCenter) {
            entry.target.classList.remove("is-leaving");
            entry.target.classList.add("is-entering");
          } else if (entry.intersectionRatio > 0 && entry.intersectionRatio <= 0.5) {
            entry.target.classList.remove("is-entering");
            entry.target.classList.add("is-leaving");
          }
        });
      },
      {
        threshold: [0, 0.5, 1],
        rootMargin: "0px",
      },
    );

    sections.forEach(section => sectionObserver.observe(section));

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <main>
        <div ref={el => (sectionRefs.current[0] = el)}>
          <Hero />
        </div>
        <div ref={el => (sectionRefs.current[1] = el)}>
          <Experience />
        </div>
        <div ref={el => (sectionRefs.current[2] = el)}>
          <Showcase />
        </div>
        <div ref={el => (sectionRefs.current[3] = el)}>
          <RecentBlogs />
        </div>
        <div ref={el => (sectionRefs.current[4] = el)}>
          <Contact />
        </div>
      </main>
      <Footer />
      
      {/* Floating Zen Space Button */}
      <Link
        to="/immersive"
        className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-violet-600 text-white shadow-lg shadow-violet-600/25 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-violet-600/40 group flex items-center gap-2"
        aria-label="Enter Zen Space"
      >
        <Disc size={24} className="animate-[spin_4s_linear_infinite]" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out whitespace-nowrap text-sm font-semibold pr-1">
          Zen Space
        </span>
      </Link>
    </div>
  );
};

export default Index;
