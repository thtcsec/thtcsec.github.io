import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, Terminal, Code2, Sparkles, FileText, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { siteConfig, getAcademicProgress, getDaysRemaining } from "@/data/config";

const titles = ["Cybersecurity Enthusiast", "Full-Stack Developer", "HUFLIT Student", "Tech Explorer"];

const codeLines = [
  { text: "const developer = {", delay: 0 },
  { text: `  name: "${siteConfig.author}",`, delay: 100 },
  { text: '  role: "Cybersecurity Enthusiast",', delay: 200 },
  { text: "  skills: ['C#', 'Java', 'Python', 'Security'],", delay: 300 },
  { text: "  passion: 'Securing the digital world',", delay: 400 },
  { text: "  available: true", delay: 500 },
  { text: "};", delay: 600 },
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [daysRemaining, setDaysRemaining] = useState(0);

  useEffect(() => {
    // Calculate dynamic progress
    setProgressPercentage(getAcademicProgress());
    setDaysRemaining(getDaysRemaining());
  }, []);

  useEffect(() => {
    codeLines.forEach((_, index) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, index]);
      }, 800 + index * 150);
    });
  }, []);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedTitle.length < currentTitle.length) {
          setDisplayedTitle(currentTitle.slice(0, displayedTitle.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedTitle.length > 0) {
          setDisplayedTitle(currentTitle.slice(0, displayedTitle.length - 1));
        } else {
          setIsDeleting(false);
          setTitleIndex(prev => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayedTitle, isDeleting, titleIndex]);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/25 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-[100px]" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/3 right-20 w-4 h-4 bg-accent/50 rounded-full animate-float opacity-30" style={{ animationDelay: "2.5s" }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary text-sm font-medium mb-6">
                <Sparkles size={16} className="animate-pulse" />
                Cybersecurity & DevSecOps
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 opacity-0 animate-fade-in leading-tight" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Hi, I'm{" "}
              <span className="text-gradient relative">
                {siteConfig.authorEn}
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C50 2 150 2 198 6" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                      <stop stopColor="hsl(var(--primary))" />
                      <stop offset="1" stopColor="hsl(var(--accent))" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 h-10 opacity-0 animate-fade-in flex items-center justify-center lg:justify-start" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              <Code2 size={28} className="text-primary mr-3" />
              <span className="font-mono">
                {displayedTitle}
                <span className="inline-block w-0.5 h-7 bg-primary ml-1 animate-blink" />
              </span>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 opacity-0 animate-fade-in leading-relaxed" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              {siteConfig.bio}
            </p>

            {/* Academic Progress - Dynamic */}
            <div className="mb-8 opacity-0 animate-fade-in max-w-md mx-auto lg:mx-0" style={{ animationDelay: "0.45s", animationFillMode: "forwards" }}>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Academic Journey</span>
                <span className="text-primary font-medium">{progressPercentage}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Semester {siteConfig.academic.currentSemester}/{siteConfig.academic.totalSemesters} • GPA {siteConfig.academic.gpa} • {daysRemaining} days to graduation
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              <Button size="lg" className="min-w-[180px] bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25" onClick={() => handleScrollToSection("projects")}>
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="min-w-[180px] border-primary/50 hover:bg-primary/10 hover:border-primary" asChild>
                <Link to="/resume">
                  <FileText size={18} className="mr-2" />
                  View Resume
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
              {[
                { icon: Github, href: siteConfig.social.github, label: "GitHub" },
                { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
                { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
                { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl bg-card/50 border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                  aria-label={label}
                >
                  <Icon size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Code Editor Mockup */}
          <div className="hidden lg:block opacity-0 animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl" />

              {/* Code Editor */}
              <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card/80 backdrop-blur-xl shadow-2xl">
                {/* Title Bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-muted text-xs text-muted-foreground">
                      <Terminal size={12} />
                      developer.ts
                    </div>
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-6 font-mono text-sm">
                  {codeLines.map((line, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-4 transition-all duration-500 ${visibleLines.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                        }`}
                    >
                      <span className="text-muted-foreground/50 select-none w-4 text-right">
                        {index + 1}
                      </span>
                      <span className="text-foreground">
                        {line.text.includes(":") ? (
                          <>
                            <span className="text-accent">{line.text.split(":")[0]}</span>
                            <span className="text-muted-foreground">:</span>
                            <span className="text-primary">{line.text.split(":").slice(1).join(":")}</span>
                          </>
                        ) : (
                          <span className="text-muted-foreground">{line.text}</span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 p-3 rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg animate-float">
                <Code2 size={24} className="text-primary-foreground" />
              </div>
              <div className="absolute -bottom-4 -left-4 p-3 rounded-xl bg-card border border-border shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                <Terminal size={20} className="text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
          <button onClick={() => handleScrollToSection("about")} className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
            <span className="text-sm font-medium">Scroll Down</span>
            <div className="p-2 rounded-full border border-border group-hover:border-primary transition-colors">
              <ArrowDown size={16} className="animate-bounce-subtle" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;