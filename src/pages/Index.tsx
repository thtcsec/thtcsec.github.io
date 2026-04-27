import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Certificates from "@/components/portfolio/Certificates";
import RecentBlogs from "@/components/portfolio/RecentBlogs";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <RecentBlogs />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
