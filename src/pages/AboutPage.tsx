import { useEffect } from "react";
import ProjectHeader from "@/components/portfolio/ProjectHeader";
import Footer from "@/components/portfolio/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import {
  Trophy,
  Code,
  Cpu,
  Globe,
  Shield,
  Terminal,
  Rocket,
  Award,
  Zap,
  Database,
  Brain,
  BarChart,
  Lightbulb,
  HeartPulse,
  LineChart,
  ExternalLink,
  Github
} from "lucide-react";
import { communities } from "@/data/communities";

const competitions = [
  {
    name: "VinUniversity - The Gridbreakers Datathon 2026",
    date: "May 2026",
    role: "Top 10 Finalist (Team GenCore)",
    icon: <BarChart className="w-5 h-5 text-purple-400 group-hover:animate-pulse" />,
    bgGradient: "from-purple-500/10 to-transparent",
    borderClass: "border-purple-500/20 group-hover:border-purple-500/50 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]",
    textClass: "group-hover:text-purple-400 transition-colors text-foreground"
  },
  {
    name: "Alibaba Cloud x GenAIFund - Qwen AI Build Day Vietnam",
    date: "April 2026",
    role: "Top 10 Finalist",
    icon: <Brain className="w-5 h-5 text-cyan-400 group-hover:animate-pulse" />,
    bgGradient: "from-cyan-500/10 to-transparent",
    borderClass: "border-cyan-500/20 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]",
    textClass: "group-hover:text-cyan-400 transition-colors text-foreground"
  },
  {
    name: "Tasco x GenAIFund - Tasco Wash3000 Hackathon",
    date: "May 2026",
    role: "Top 10 Finalist",
    icon: <Trophy className="w-5 h-5 text-indigo-400 group-hover:animate-pulse" />,
    bgGradient: "from-indigo-500/10 to-transparent",
    borderClass: "border-indigo-500/20 group-hover:border-indigo-500/50 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]",
    textClass: "group-hover:text-indigo-400 transition-colors text-foreground"
  },
  {
    name: "AI Ready ASEAN Youth Challenge",
    date: "May 2026",
    role: "Participant",
    icon: <Globe className="w-5 h-5 text-blue-400 group-hover:animate-pulse" />,
    bgGradient: "from-blue-500/10 to-transparent",
    borderClass: "border-blue-500/20 group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]",
    textClass: "group-hover:text-blue-400 transition-colors text-foreground"
  },
  {
    name: "Kaggle - AI Mathematical Olympiad",
    date: "Nov 2025 - Apr 2026",
    role: "Competitor",
    icon: <Brain className="w-5 h-5 text-amber-400 group-hover:animate-pulse" />,
    bgGradient: "from-amber-500/10 to-transparent",
    borderClass: "border-amber-500/20 group-hover:border-amber-500/50 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.3)]",
    textClass: "group-hover:text-amber-400 transition-colors text-foreground"
  },
  {
    name: "Kaggle - March Machine Learning Mania",
    date: "March 2026",
    role: "Competitor",
    icon: <BarChart className="w-5 h-5 text-sky-400 group-hover:animate-pulse" />,
    bgGradient: "from-sky-500/10 to-transparent",
    borderClass: "border-sky-500/20 group-hover:border-sky-500/50 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]",
    textClass: "group-hover:text-sky-400 transition-colors text-foreground"
  },
  {
    name: "VNG - LotusHacks x HackHarvard x GenAI Fund Vietnam Hackathon",
    date: "March 2026",
    role: "Participant",
    icon: <Code className="w-5 h-5 text-green-400 group-hover:animate-pulse" />,
    bgGradient: "from-green-500/10 to-transparent",
    borderClass: "border-green-500/20 group-hover:border-green-500/50 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]",
    textClass: "group-hover:text-green-400 transition-colors text-foreground"
  },
  {
    name: "Hack2Skill India - Innovate4FinLit",
    date: "Jan - Mar 2026",
    role: "Participant",
    icon: <Lightbulb className="w-5 h-5 text-lime-400 group-hover:animate-pulse" />,
    bgGradient: "from-lime-500/10 to-transparent",
    borderClass: "border-lime-500/20 group-hover:border-lime-500/50 group-hover:shadow-[0_0_15px_rgba(163,230,53,0.3)]",
    textClass: "group-hover:text-lime-400 transition-colors text-foreground"
  },
  {
    name: "Kaggle - Predicting Heart Disease",
    date: "February 2026",
    role: "Competitor",
    icon: <HeartPulse className="w-5 h-5 text-rose-400 group-hover:animate-pulse" />,
    bgGradient: "from-rose-500/10 to-transparent",
    borderClass: "border-rose-500/20 group-hover:border-rose-500/50 group-hover:shadow-[0_0_15px_rgba(244,63,94,0.3)]",
    textClass: "group-hover:text-rose-400 transition-colors text-foreground"
  },
  {
    name: "Kaggle - Google DeepMind - Vibe Code with Gemini 3 Pro",
    date: "December 2025",
    role: "Competitor",
    icon: <LineChart className="w-5 h-5 text-teal-400 group-hover:animate-pulse" />,
    bgGradient: "from-teal-500/10 to-transparent",
    borderClass: "border-teal-500/20 group-hover:border-teal-500/50 group-hover:shadow-[0_0_15px_rgba(45,212,191,0.3)]",
    textClass: "group-hover:text-teal-400 transition-colors text-foreground"
  },
  {
    name: "VNUHCM UIT - WannaGame Championship CTF 2025",
    date: "December 2025",
    role: "Participant",
    icon: <Shield className="w-5 h-5 text-emerald-400 group-hover:animate-pulse" />,
    bgGradient: "from-emerald-500/10 to-transparent",
    borderClass: "border-emerald-500/20 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]",
    textClass: "group-hover:text-emerald-400 transition-colors text-foreground"
  },
  {
    name: "Viettel - Viettel AI Race",
    date: "December 2025",
    role: "Participant",
    icon: <Rocket className="w-5 h-5 text-orange-400 group-hover:animate-pulse" />,
    bgGradient: "from-orange-500/10 to-transparent",
    borderClass: "border-orange-500/20 group-hover:border-orange-500/50 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]",
    textClass: "group-hover:text-orange-400 transition-colors text-foreground"
  },
  {
    name: "VNPT - VNPT AI Hackathon",
    date: "December 2025",
    role: "Participant",
    icon: <Cpu className="w-5 h-5 text-red-400 group-hover:animate-pulse" />,
    bgGradient: "from-red-500/10 to-transparent",
    borderClass: "border-red-500/20 group-hover:border-red-500/50 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]",
    textClass: "group-hover:text-red-400 transition-colors text-foreground"
  },
  {
    name: "VNG - Cursor Hackathon",
    date: "December 2025",
    role: "Participant",
    icon: <Terminal className="w-5 h-5 text-purple-400 group-hover:animate-pulse" />,
    bgGradient: "from-purple-500/10 to-transparent",
    borderClass: "border-purple-500/20 group-hover:border-purple-500/50 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]",
    textClass: "group-hover:text-purple-400 transition-colors text-foreground"
  },
  {
    name: "Hack2Skill India - AI For Good Hackathon",
    date: "November 2025",
    role: "Participant",
    icon: <Code className="w-5 h-5 text-blue-300 group-hover:animate-pulse" />,
    bgGradient: "from-blue-400/10 to-transparent",
    borderClass: "border-blue-400/20 group-hover:border-blue-400/50 group-hover:shadow-[0_0_15px_rgba(96,165,250,0.3)]",
    textClass: "group-hover:text-blue-300 transition-colors text-foreground"
  },
  {
    name: "VNG - VNG Code Tour 2025",
    date: "October 2025",
    role: "Participant",
    icon: <Award className="w-5 h-5 text-pink-400 group-hover:animate-pulse" />,
    bgGradient: "from-pink-500/10 to-transparent",
    borderClass: "border-pink-500/20 group-hover:border-pink-500/50 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]",
    textClass: "group-hover:text-pink-400 transition-colors text-foreground"
  },
  {
    name: "Hoa Sen University - HSU Vibe Coding Talent",
    date: "October 2025",
    role: "Winner",
    icon: <Zap className="w-5 h-5 text-yellow-400 group-hover:animate-pulse" />,
    bgGradient: "from-yellow-500/10 to-transparent",
    borderClass: "border-yellow-500/20 group-hover:border-yellow-500/50 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]",
    textClass: "group-hover:text-yellow-400 transition-colors text-foreground"
  },
  {
    name: "VPBank - VPBank Technology Hackathon",
    date: "May - Nov 2025",
    role: "Participant",
    icon: <Trophy className="w-5 h-5 text-cyan-400 group-hover:animate-pulse" />,
    bgGradient: "from-cyan-500/10 to-transparent",
    borderClass: "border-cyan-500/20 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]",
    textClass: "group-hover:text-cyan-400 transition-colors text-foreground"
  }
];

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30">
      <ProjectHeader />

      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in animate-text-glow text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary">
            My Journey
          </h1>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <p className="text-lg md:text-xl italic font-medium leading-relaxed text-muted-foreground border-l-2 border-primary/40 pl-4">
              "Every day without a breakthrough is a day standing still — and standing still means falling behind."
            </p>
          </div>

          <div className="mt-28 animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "forwards", opacity: 0 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-text-glow text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary">Hackathons & Competitions</h2>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-0 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-primary/50 via-purple-500/50 to-transparent -translate-x-1/2 hidden md:block"></div>

              <div className="space-y-8 relative">
                {competitions.map((comp, index) => (
                  <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary items-center justify-center z-10 shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    </div>

                    <div className={`w-full md:w-[calc(50%-2rem)] md:px-8 mt-4 md:mt-0`}>
                      <div className={`glass relative overflow-hidden rounded-xl p-6 border ${comp.borderClass} hover:-translate-y-1 transition-all duration-300 group`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${comp.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm font-semibold text-primary/80 bg-primary/10 px-3 py-1 rounded-full border border-primary/20 shadow-sm shadow-primary/10">
                              {comp.date}
                            </span>
                            <div className="flex items-center gap-3">
                              {comp.role !== "Participant" && comp.role !== "Competitor" && (
                                <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/20 px-2 py-1 rounded-md border border-primary/40 animate-pulse shadow-[0_0_10px_rgba(var(--primary),0.3)]">
                                  <Trophy size={10} />
                                  Special
                                </div>
                              )}
                              <div className={`p-2 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 transition-colors`}>
                                {comp.icon}
                              </div>
                            </div>
                          </div>
                          <h3 className={`text-xl font-bold mb-1 ${comp.textClass}`}>{comp.name}</h3>
                          <p className={`text-sm font-medium ${comp.role !== "Participant" && comp.role !== "Competitor" ? 'text-primary animate-text-glow' : 'text-muted-foreground'}`}>
                            {comp.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28 animate-fade-in" style={{ animationDelay: "0.6s", animationFillMode: "forwards", opacity: 0 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-text-glow text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary">Community & Impact</h2>

          <div className="space-y-4 mb-16 max-w-4xl mx-auto px-2">
            {communities.map((community) => (
              <div
                key={community.id}
                className="group flex items-center gap-5 p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <img
                  src={community.image}
                  alt={community.title}
                  className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {community.title}
                    </h3>
                    {community.link && (
                      <a
                        href={community.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors shrink-0"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {community.description}
                  </p>
                </div>
                <div className="hidden sm:flex flex-wrap gap-1.5 shrink-0 max-w-[180px] justify-end">
                  {community.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* GitHub Contributions — compact */}
          <div className="rounded-2xl overflow-hidden bg-card border border-border p-5 md:p-6 hover:border-primary/50 transition-all duration-300 max-w-3xl mx-auto">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Github size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">Open Source Activity</h3>
                  <p className="text-muted-foreground text-xs">Contributions to the developer ecosystem</p>
                </div>
              </div>
              <a
                href="https://github.com/thtcsec"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-xs font-medium"
              >
                Profile
                <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
            <div className="w-full overflow-x-auto">
              <img
                src="https://ghchart.rshah.org/8A2BE2/thtcsec"
                alt="thtcsec's GitHub Contributions"
                className="min-w-[600px] w-full filter brightness-90 contrast-125 opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </main>


      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AboutPage;
