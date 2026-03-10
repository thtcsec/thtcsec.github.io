import { useEffect } from "react";
import ProjectHeader from "@/components/portfolio/ProjectHeader";
import Footer from "@/components/portfolio/Footer";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30">
      <ProjectHeader />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground animate-fade-in">
            My Journey
          </h1>
          
          <div className="prose prose-invert prose-lg md:prose-xl max-w-none animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <p>
              I'm a passionate cybersecurity enthusiast and developer. My journey began with a deep curiosity about how systems work and, more importantly, how they can be secured against evolving threats.
            </p>
            
            <h2>Education & Background</h2>
            <p>
              Currently pursuing my degree in Information Technology at HUFLIT. Throughout my academic career, I've focused heavily on practical security applications, DevSecOps pipelines, and robust software architecture.
            </p>
            
            <h2>Core Philosophy</h2>
            <p>
              I believe that security should never be an afterthought but rather an integral part of the development lifecycle. My goal is to bridge the gap between rapid software development and rigorous security standards.
            </p>
            
            <h2>Looking Ahead</h2>
            <p>
              I am constantly exploring new technologies, from advanced deep learning architectures to the latest in cloud infrastructure. I'm actively seeking opportunities to apply my skills in real-world environments and contribute to impactful projects.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
