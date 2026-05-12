import { useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, FileText, Facebook, Globe, Trophy, Terminal } from "lucide-react";
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
    <section id="home" className="cinema-section cinema-stage min-h-screen pt-40 lg:pt-48 pb-16">
      <div className="absolute inset-x-0 top-0 h-px bg-border/60" />
      <div className="pointer-events-none absolute inset-0 -z-[1]">
        <div className="absolute right-[-12%] top-[8%] h-[520px] w-[520px] rounded-full border-2 border-primary/40 bg-gradient-to-br from-primary/35 to-primary/8 blur-3xl animate-[spin_24s_linear_infinite] shadow-[0_0_120px_30px_hsl(var(--primary)/0.3)]" />
        <div className="absolute left-[-8%] top-[38%] h-[400px] w-[400px] rounded-full border-2 border-accent/35 bg-gradient-to-br from-accent/32 to-accent/8 blur-3xl animate-[spin_32s_linear_infinite_reverse] shadow-[0_0_100px_25px_hsl(var(--accent)/0.28)]" />
      </div>

      <div className="container relative mx-auto px-4 max-w-5xl">
        {/* Top: Avatar + Name + Subtitle */}
        <div className="cinema-reveal flex flex-col sm:flex-row items-start gap-6 sm:gap-8 mb-8" style={{ ["--reveal-delay" as string]: "60ms" }}>
          <div className="relative group flex-shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <img
              src="/images/avatar.jpg"
              alt={siteConfig.author}
              className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl object-cover border border-border"
              loading="lazy"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              {siteConfig.authorEn}
            </h1>
            <p className="mt-1 text-base sm:text-lg md:text-xl text-foreground/70 font-medium">
              DevOps, Fullstack, Software Engineer.
            </p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xl">
              {siteConfig.bio}{" "}
              <Link to="/about" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                Read full journey <ArrowDown size={12} className="-rotate-90" />
              </Link>
            </p>
          </div>
        </div>

        {/* Info cards row */}
        <div className="cinema-reveal cinema-stagger grid gap-3 sm:grid-cols-3 mb-6" style={{ ["--reveal-delay" as string]: "120ms" }}>
          <div className="cinema-card p-4">
            <div className="cinema-meta">Focus</div>
            <div className="mt-1.5 text-sm font-semibold text-foreground">Security + Systems</div>
          </div>
          <div className="cinema-card p-4">
            <div className="cinema-meta">Progress</div>
            <div className="mt-1.5 text-sm font-semibold text-foreground">{progressPercentage}% to graduation</div>
          </div>
          <div className="cinema-card p-4">
            <div className="cinema-meta">Timeline</div>
            <div className="mt-1.5 text-sm font-semibold text-foreground">{daysRemaining} days left</div>
          </div>
        </div>

        {/* Actions + Tags */}
        <div className="cinema-reveal flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6" style={{ ["--reveal-delay" as string]: "180ms" }}>
          <div className="flex gap-3">
            <Button size="default" onClick={() => handleScrollToSection("projects")}>
              View Projects
            </Button>
            <Button variant="outline" size="default" asChild>
              <Link to="/resume">
                <FileText size={16} className="mr-1.5" />
                Resume
              </Link>
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">HUFLIT</span>
            <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">Cybersecurity</span>
            <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">Cloud / DevSecOps</span>
          </div>
        </div>

        {/* Socials */}
        <div className="cinema-reveal cinema-stagger flex items-center gap-3 mb-10" style={{ ["--reveal-delay" as string]: "220ms" }}>
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
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card transition-colors hover:border-primary hover:bg-primary/5"
              aria-label={label}
            >
              <Icon size={17} className="text-muted-foreground" />
            </a>
          ))}
        </div>

        {/* Profile snapshot — horizontal card */}
        <div className="cinema-reveal cinema-card rounded-2xl p-5 md:p-6" style={{ ["--reveal-delay" as string]: "280ms" }}>
          <div className="flex items-center justify-between gap-2 text-sm font-medium text-muted-foreground mb-4">
            <div className="flex items-center gap-2">
              <Terminal size={14} />
              Profile snapshot
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <button className="flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-primary/80">
                  <FileText size={12} />
                  View Transcript
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
                        Detailed results for the 2025-2026 academic year.
                      </DialogDescription>
                    </DialogHeader>
                    <Button variant="outline" size="sm" onClick={() => setIsEnglish(!isEnglish)} className="flex items-center gap-2 border-primary/30 hover:bg-primary/5">
                      <Globe size={14} className="text-primary" />
                      {isEnglish ? "Tiếng Việt" : "English"}
                    </Button>
                  </div>
                </div>
                <ScrollArea className="flex-1 px-6 pb-6">
                  <div className="space-y-8 pt-6">
                    <div className="rounded-2xl border border-border bg-muted/20 overflow-hidden">
                      <div className="bg-muted px-5 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border">
                        {isEnglish ? "Semester: HK01 (2025-2026)" : "Học kỳ: HK01 (2025-2026)"}
                      </div>
                      <div className="overflow-x-auto">
                        <Table className="min-w-[700px]">
                          <TableHeader>
                            <TableRow className="hover:bg-transparent">
                              <TableHead className="w-[100px] font-bold">{isEnglish ? "Code" : "Mã HP"}</TableHead>
                              <TableHead className="font-bold">{isEnglish ? "Course" : "Học phần"}</TableHead>
                              <TableHead className="text-center font-bold">{isEnglish ? "Credits" : "TC"}</TableHead>
                              <TableHead className="text-center font-bold">{isEnglish ? "Grade" : "Điểm"}</TableHead>
                              <TableHead className="text-right font-bold">{isEnglish ? "Result" : "KQ"}</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {[
                              { code: "1010762", vi: "Giáo dục thể chất 1", en: "Physical Education 1", credits: "2.0", grade: "8.8", letter: "A" },
                              { code: "1210164", vi: "Blockchain và ứng dụng", en: "Blockchain and Applications", credits: "4.0", grade: "9.9", letter: "A+" },
                              { code: "1230274", vi: "Quản trị mạng", en: "Network Administration", credits: "4.0", grade: "9.3", letter: "A+" },
                              { code: "1250013", vi: "Tiếng Anh chuyên ngành 1", en: "Technical English 1", credits: "3.0", grade: "9.3", letter: "A+" },
                              { code: "1250114", vi: "Điều tra tấn công", en: "Attack Investigation", credits: "4.0", grade: "8.9", letter: "A" },
                            ].map((item) => (
                              <TableRow key={item.code} className="text-sm">
                                <TableCell className="font-mono text-muted-foreground">{item.code}</TableCell>
                                <TableCell className="font-semibold">{isEnglish ? item.en : item.vi}</TableCell>
                                <TableCell className="text-center">{item.credits}</TableCell>
                                <TableCell className="text-center font-bold text-primary">{item.grade}</TableCell>
                                <TableCell className="text-right font-bold">{item.letter}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                      <div className="p-4 bg-muted/40 border-t border-border flex flex-wrap gap-x-6 gap-y-2 text-sm">
                        <span className="text-muted-foreground text-xs">Credits: <strong className="text-foreground">15</strong></span>
                        <span className="text-muted-foreground text-xs">GPA: <strong className="text-primary">4.00</strong></span>
                        <span className="text-muted-foreground text-xs">Cumulative: <strong className="text-foreground">3.44</strong></span>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-border bg-muted/20 overflow-hidden">
                      <div className="bg-muted px-5 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border">
                        {isEnglish ? "Semester: HK02 (2025-2026)" : "Học kỳ: HK02 (2025-2026)"}
                      </div>
                      <div className="overflow-x-auto">
                        <Table className="min-w-[700px]">
                          <TableHeader>
                            <TableRow className="hover:bg-transparent">
                              <TableHead className="w-[100px] font-bold">{isEnglish ? "Code" : "Mã HP"}</TableHead>
                              <TableHead className="font-bold">{isEnglish ? "Course" : "Học phần"}</TableHead>
                              <TableHead className="text-center font-bold">{isEnglish ? "Credits" : "TC"}</TableHead>
                              <TableHead className="text-center font-bold">{isEnglish ? "Grade" : "Điểm"}</TableHead>
                              <TableHead className="text-right font-bold">{isEnglish ? "Result" : "KQ"}</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {[
                              { code: "1010873", vi: "Giáo dục thể chất 2", en: "Physical Education 2", credits: "3.0", grade: "9.2", letter: "A+" },
                              { code: "1250023", vi: "Tiếng Anh chuyên ngành 2", en: "Technical English 2", credits: "3.0", grade: "9.5", letter: "A+" },
                              { code: "1250244", vi: "Mạng không dây", en: "Wireless Networking", credits: "4.0", grade: "9.3", letter: "A+" },
                              { code: "1250254", vi: "Kiểm thử xâm nhập", en: "Penetration Testing", credits: "4.0", grade: "-", letter: "-" },
                              { code: "1250264", vi: "Quản trị hệ thống bảo mật", en: "Security Systems Admin", credits: "4.0", grade: "9.4", letter: "A+" },
                              { code: "1250374", vi: "Dịch ngược", en: "Reverse Engineering", credits: "4.0", grade: "-", letter: "-" },
                            ].map((item) => (
                              <TableRow key={item.code} className="text-sm">
                                <TableCell className="font-mono text-muted-foreground">{item.code}</TableCell>
                                <TableCell className="font-semibold">{isEnglish ? item.en : item.vi}</TableCell>
                                <TableCell className="text-center">{item.credits}</TableCell>
                                <TableCell className="text-center font-bold text-primary">{item.grade}</TableCell>
                                <TableCell className="text-right font-bold">{item.letter}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                      <div className="p-4 bg-muted/40 border-t border-border flex flex-wrap gap-x-6 gap-y-2 text-sm">
                        <span className="text-muted-foreground text-xs">Credits: <strong className="text-foreground">14</strong></span>
                        <span className="text-muted-foreground text-xs">GPA: <strong className="text-primary">4.00</strong></span>
                        <span className="text-muted-foreground text-xs">Cumulative: <strong className="text-foreground">3.50</strong></span>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 mb-4">
            <div className="rounded-xl border border-border/80 bg-muted/20 p-4">
              <div className="cinema-meta">What I build</div>
              <p className="mt-2 text-sm leading-5 text-foreground">Scalable backends, CI/CD pipelines & full-stack apps</p>
            </div>
            <div className="rounded-xl border border-border/80 bg-muted/20 p-4">
              <div className="cinema-meta">University</div>
              <p className="mt-2 text-sm font-semibold text-foreground">{siteConfig.university} — {siteConfig.location}</p>
            </div>
            <div className="rounded-xl border border-border/80 bg-muted/20 p-4">
              <div className="cinema-meta">Academic progress</div>
              <div className="mt-2">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
                  <span>Semester {siteConfig.academic.currentSemester}/{siteConfig.academic.totalSemesters}</span>
                  <span>GPA {siteConfig.academic.gpa}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${progressPercentage}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => handleScrollToSection("projects")}
            className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowDown size={14} />
            Scroll to projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
