import { useEffect, useRef } from "react";
import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Certificates from "@/components/portfolio/Certificates";
import Community from "@/components/portfolio/Community";
import RecentBlogs from "@/components/portfolio/RecentBlogs";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import ScrollToTop from "@/components/ScrollToTop";

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
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px",
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
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div ref={el => (sectionRefs.current[0] = el)}>
          <Hero />
        </div>
        <div ref={el => (sectionRefs.current[1] = el)}>
          <About />
        </div>
        <div ref={el => (sectionRefs.current[2] = el)}>
          <Projects />
        </div>
        <div ref={el => (sectionRefs.current[3] = el)}>
          <Certificates />
        </div>
        <div ref={el => (sectionRefs.current[4] = el)}>
          <Community />
        </div>
        <div ref={el => (sectionRefs.current[5] = el)}>
          <RecentBlogs />
        </div>
        <div ref={el => (sectionRefs.current[6] = el)}>
          <Contact />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
