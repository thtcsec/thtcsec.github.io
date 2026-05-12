import { useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, Terminal, FileText, Facebook, Globe, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { siteConfig, getAcademicProgress, getDaysRemaining } from "@/data/config";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Hero = () => {
  const [isEnglish, setIsEnglish] = useState(true);
  const progressPercentage = getAcademicProgress();
  const daysRemaining = getDaysRemaining();

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="cinema-section cinema-stage min-h-screen pt-56 lg:pt-64 pb-16">
      <div className="absolute inset-x-0 top-0 h-px bg-border/60" />
      <div className="pointer-events-none absolute inset-0 -z-[1]">
        <div className="absolute right-[-12%] top-[8%] h-[520px] w-[520px] rounded-full border-2 border-primary/40 bg-gradient-to-br from-primary/35 to-primary/8 blur-3xl animate-[spin_24s_linear_infinite] shadow-[0_0_120px_30px_hsl(var(--primary)/0.3)]" />
        <div className="absolute left-[-8%] top-[38%] h-[400px] w-[400px] rounded-full border-2 border-accent/35 bg-gradient-to-br from-accent/32 to-accent/8 blur-3xl animate-[spin_32s_linear_infinite_reverse] shadow-[0_0_100px_25px_hsl(var(--accent)/0.28)]" />
        <div className="absolute right-[5%] bottom-[20%] h-[280px] w-[280px] rounded-full border border-primary/25 bg-primary/12 blur-2xl animate-[pulse_6s_ease-in-out_infinite]" />
      </div>
      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="cinema-reveal" style={{ ["--reveal-delay" as string]: "60ms" }}>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Trinh Hoang Tu
              <span className="mt-3 block text-foreground/80 text-xl font-medium md:text-2xl lg:text-3xl">
                DevOps, Fullstack, Software Engineer.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              {siteConfig.bio}{" "}
              <Link to="/about" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                Read full journey <ArrowDown size={14} className="-rotate-90" />
              </Link>
            </p>

            <div className="cinema-stagger mt-8 grid gap-3 sm:grid-cols-3">
              <div className="cinema-card p-4">
                <div className="cinema-meta">Focus</div>
                <div className="mt-2 text-sm font-semibold text-foreground">Security + systems</div>
              </div>
              <div className="cinema-card p-4">
                <div className="cinema-meta">Progress</div>
                <div className="mt-2 text-sm font-semibold text-foreground">{progressPercentage}% to graduation</div>
              </div>
              <div className="cinema-card p-4">
                <div className="cinema-meta">Timeline</div>
                <div className="mt-2 text-sm font-semibold text-foreground">{daysRemaining} days left</div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="min-w-[180px]" onClick={() => handleScrollToSection("projects")}>
                View Projects
              </Button>
              <Button variant="outline" size="lg" className="min-w-[180px]" asChild>
                <Link to="/resume">
                  <FileText size={18} className="mr-2" />
                  Resume
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="rounded-full border border-border px-3 py-1">HUFLIT</span>
              <span className="rounded-full border border-border px-3 py-1">Cybersecurity</span>
              <span className="rounded-full border border-border px-3 py-1">Cloud / DevSecOps</span>
            </div>

            <div className="cinema-stagger mt-8 flex items-center gap-3">
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
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card transition-colors hover:border-primary hover:bg-primary/5"
                  aria-label={label}
                >
                  <Icon size={18} className="text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>

          <div className="cinema-reveal relative lg:justify-self-end" style={{ ["--reveal-delay" as string]: "140ms" }}>
            <div className="relative w-full max-w-[360px] perspective-1000">
              {/* Premium Avatar Card */}
              <div className="relative group transition-all duration-700 hover:scale-[1.02]">
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 via-accent/20 to-primary/30 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                
                <div className="glass relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl flex flex-col">
                  {/* Avatar Container */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src="/images/avatar.jpg"
                      alt={siteConfig.author}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
                    
                    {/* Floating Status Tag */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md px-3 py-1.5 border border-white/10 shadow-lg">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-[10px] font-bold text-white uppercase tracking-wider">Available for Hire</span>
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="p-6 -mt-10 relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Student & Engineer</span>
                        <h4 className="text-2xl font-bold text-white tracking-tight">{siteConfig.author}</h4>
                      </div>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10 text-white transition-all hover:bg-primary/20 hover:border-primary/40 group/btn shadow-inner">
                            <FileText size={18} className="group-hover/btn:scale-110 transition-transform" />
                          </button>
                        </DialogTrigger>
                        <DialogContent className="w-[95vw] md:max-w-4xl h-[90vh] md:h-[85vh] flex flex-col p-0 overflow-hidden border-primary/20">
                          <div className="p-6 pb-2 border-b border-border/50">
                            <div className="flex items-center justify-between gap-4">
                              <DialogHeader className="flex-1">
                                <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                                  <Trophy className="text-yellow-500 w-6 h-6" />
                                  Academic Performance - Year 3
                                </DialogTitle>
                                <DialogDescription className="text-sm">
                                  Detailed results for the 2025-2026 academic year. (Calculated based on available grades)
                                </DialogDescription>
                              </DialogHeader>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => setIsEnglish(!isEnglish)}
                                className="flex items-center gap-2 border-primary/30 hover:bg-primary/5"
                              >
                                <Globe size={14} className="text-primary" />
                                {isEnglish ? "Tiếng Việt" : "English"}
                              </Button>
                            </div>
                          </div>
                          <ScrollArea className="flex-1 px-6 pb-6">
                            <div className="space-y-8 pt-6">
                              {/* HK01 content... (keeping table structure) */}
                              <div className="rounded-2xl border border-border bg-muted/20 overflow-hidden shadow-sm">
                                <div className="bg-muted px-5 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border">
                                  {isEnglish ? "Academic Year: 2025-2026 - Semester: HK01" : "Năm học: 2025-2026 - Học kỳ: HK01"}
                                </div>
                                <div className="overflow-x-auto w-full relative touch-pan-x">
                                  <Table className="min-w-[700px]">
                                    <TableHeader>
                                      <TableRow className="hover:bg-transparent">
                                        <TableHead className="w-[120px] font-bold">{isEnglish ? "Course ID" : "Mã HP"}</TableHead>
                                        <TableHead className="font-bold">{isEnglish ? "Course Name" : "Tên học phần"}</TableHead>
                                        <TableHead className="text-center font-bold">{isEnglish ? "Credits" : "Tín chỉ"}</TableHead>
                                        <TableHead className="text-center font-bold">{isEnglish ? "Grade" : "Điểm"}</TableHead>
                                        <TableHead className="text-right font-bold">{isEnglish ? "Result" : "Kết quả"}</TableHead>
                                      </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                      {[
                                        { code: "1010762", vi: "Giáo dục thể chất 1 (Bóng bàn 1)", en: "Physical Education 1 (Table Tennis 1)", credits: "2.0", grade: "8.8", letter: "A" },
                                        { code: "1210164", vi: "Blockchain và ứng dụng", en: "Blockchain and Applications", credits: "4.0", grade: "9.9", letter: "A+" },
                                        { code: "1230274", vi: "Quản trị mạng", en: "Network Administration", credits: "4.0", grade: "9.3", letter: "A+" },
                                        { code: "1250013", vi: "Tiếng Anh chuyên ngành 1", en: "Technical English 1", credits: "3.0", grade: "9.3", letter: "A+" },
                                        { code: "1250114", vi: "Điều tra tấn công", en: "Attack Investigation", credits: "4.0", grade: "8.9", letter: "A" },
                                      ].map((item) => (
                                        <TableRow key={item.code} className="text-sm">
                                          <TableCell className="font-mono text-muted-foreground">{item.code}</TableCell>
                                          <TableCell className="font-semibold">{isEnglish ? item.en : item.vi}</TableCell>
                                          <TableCell className="text-center font-medium">{item.credits}</TableCell>
                                          <TableCell className="text-center font-bold text-primary">{item.grade}</TableCell>
                                          <TableCell className="text-right font-bold">{item.letter}</TableCell>
                                        </TableRow>
                                      ))}
                                    </TableBody>
                                  </Table>
                                </div>
                                <div className="p-4 bg-muted/40 border-t border-border flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground font-semibold">
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs uppercase opacity-70">{isEnglish ? "Semester GPA:" : "GPA HK:"}</span>
                                    <span className="text-primary text-base">4.00</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs uppercase opacity-70">{isEnglish ? "Cumulative GPA:" : "GPA Tích lũy:"}</span>
                                    <span className="text-foreground text-base">3.44</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </ScrollArea>
                        </DialogContent>
                      </Dialog>
                    </div>

                    {/* Quick Info Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
                        <div className="text-[9px] uppercase tracking-[0.1em] text-primary font-bold mb-1 opacity-80">University</div>
                        <div className="text-xs font-bold text-white truncate">HUFLIT</div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
                        <div className="text-[9px] uppercase tracking-[0.1em] text-primary font-bold mb-1 opacity-80">Progress</div>
                        <div className="text-xs font-bold text-white">{progressPercentage}% Complete</div>
                      </div>
                    </div>

                    {/* GitHub activity (Integrated) */}
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4 overflow-hidden">
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/60 font-bold mb-3">
                        <Github size={12} />
                        <span>Code Activity</span>
                      </div>
                      <div className="w-full overflow-x-auto custom-scrollbar">
                        <img
                          src="https://ghchart.rshah.org/8A2BE2/thtcsec"
                          alt="GitHub Contributions"
                          className="min-w-[320px] h-auto filter brightness-110 contrast-125"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        <div className="mt-12 flex justify-center lg:justify-start">
          <button
            onClick={() => handleScrollToSection("projects")}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowDown size={16} />
            Scroll to projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;