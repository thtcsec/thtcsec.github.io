import { useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, FileText, Facebook, Globe, Trophy, Terminal, Disc, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { siteConfig, getAcademicProgress, getDaysRemaining } from "@/data/config";
import { useArcadeSecret } from "@/hooks/useArcadeSecret";
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

const year3Semesters = [
  {
    id: "hk01",
    labelEn: "Semester: HK01 (2025-2026)",
    labelVi: "Học kỳ: HK01 (2025-2026)",
    credits: "15",
    gpa: "4.00",
    cumulative: "3.44",
    courses: [
      { code: "1010762", vi: "Giáo dục thể chất 1", en: "Physical Education 1", credits: "2.0", grade: "8.8", letter: "A" },
      { code: "1210164", vi: "Blockchain và ứng dụng", en: "Blockchain and Applications", credits: "4.0", grade: "9.9", letter: "A+" },
      { code: "1230274", vi: "Quản trị mạng", en: "Network Administration", credits: "4.0", grade: "9.3", letter: "A+" },
      { code: "1250013", vi: "Tiếng Anh CN 1", en: "Technical English 1", credits: "3.0", grade: "9.3", letter: "A+" },
      { code: "1250114", vi: "Điều tra tấn công", en: "Attack Investigation", credits: "4.0", grade: "8.9", letter: "A" },
    ],
  },
  {
    id: "hk02",
    labelEn: "Semester: HK02 (2025-2026)",
    labelVi: "Học kỳ: HK02 (2025-2026)",
    credits: "19",
    gpa: "3.89",
    cumulative: "3.50",
    courses: [
      { code: "1010873", vi: "GDTC 2 (Bóng bàn 2)", en: "Physical Education 2 (Table Tennis)", credits: "3.0", grade: "9.2", letter: "A+" },
      { code: "1250023", vi: "Tiếng Anh CN 2", en: "Technical English 2", credits: "3.0", grade: "9.5", letter: "A+" },
      { code: "1250244", vi: "Mạng không dây", en: "Wireless Networking", credits: "4.0", grade: "9.3", letter: "A+" },
      { code: "1250254", vi: "Penetration testing", en: "Penetration Testing", credits: "4.0", grade: "9.5", letter: "A+" },
      { code: "1250264", vi: "Quản trị hệ thống bảo mật", en: "Security Systems Admin", credits: "4.0", grade: "9.4", letter: "A+" },
      { code: "1250374", vi: "Dịch ngược", en: "Reverse Engineering", credits: "4.0", grade: "8.4", letter: "B+" },
    ],
  },
  {
    id: "hk03",
    labelEn: "Semester: HK03 (2025-2026)",
    labelVi: "Học kỳ: HK03 (2025-2026)",
    credits: "10",
    gpa: "3.70",
    cumulative: "3.52",
    courses: [
      { code: "1230166", vi: "Khóa luận tốt nghiệp", en: "Graduation Thesis", credits: "6.0", grade: "8.0", letter: "B+" },
      { code: "1250234", vi: "Điện toán đám mây", en: "Cloud Computing", credits: "4.0", grade: "9.8", letter: "A+" },
    ],
  },
] as const;

const Hero = () => {
  const [isEnglish, setIsEnglish] = useState(true);
  const progressPercentage = getAcademicProgress();
  const daysRemaining = getDaysRemaining();
  const { handleSecretClick } = useArcadeSecret();

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
          <div className="relative group flex-shrink-0 mx-auto sm:mx-0 cursor-pointer" onClick={handleSecretClick} title="??? Avatar">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-primary via-violet-500 to-accent rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500 animate-[pulse_3s_ease-in-out_infinite]"></div>
            <img
              src="/images/avatar.png"
              alt={siteConfig.author}
              className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-3xl object-cover object-top border-2 border-border/80 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] select-none"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              {siteConfig.authorEn}
            </h1>
            <p className="mt-1 text-base sm:text-lg md:text-xl text-foreground/70 font-medium">
              {siteConfig.headline}
            </p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xl">
              {siteConfig.bio}
            </p>
            <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-2">
              {["HUFLIT", "Tsinghua", "VinUni", "Grab", "VETC"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-border/70 bg-muted/40 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-5 flex">
              <Link to="/about" className="group inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary/15 hover:border-primary/50 hover:shadow-[0_0_15px_-3px_hsl(var(--primary)/0.2)]">
                Read my full journey
                <ArrowDown size={14} className="-rotate-90 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Actions + Tags */}
        <div className="cinema-reveal flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6" style={{ ["--reveal-delay" as string]: "120ms" }}>
          <div className="flex flex-wrap gap-3">
            <Button size="default" onClick={() => handleScrollToSection("showcase")}>
              View Projects
            </Button>
            <Button variant="outline" size="default" className="border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 gap-1.5 font-medium shadow-[0_0_15px_-3px_rgba(16,185,129,0.2)]" onClick={() => handleScrollToSection("research")}>
              <BookOpen size={16} className="text-emerald-500" />
              Research
            </Button>
            <Button variant="outline" size="default" asChild>
              <Link to="/resume">
                <FileText size={16} className="mr-1.5" />
                Resume
              </Link>
            </Button>
            <Button variant="outline" size="default" className="border-violet-500/20 bg-violet-500/5 hover:bg-violet-500/10 text-violet-600 dark:text-violet-400 gap-1.5" asChild>
              <Link to="/immersive">
                <Disc size={16} className="animate-[spin_4s_linear_infinite]" />
                Zen Space
              </Link>
            </Button>
          </div>
        </div>

        {/* Socials */}
        <div className="cinema-reveal cinema-stagger flex items-center gap-3 mb-10" style={{ ["--reveal-delay" as string]: "180ms" }}>
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
        <div className="cinema-reveal cinema-card rounded-2xl p-5 md:p-6" style={{ ["--reveal-delay" as string]: "220ms" }}>
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
                        {isEnglish
                          ? "HUFLIT Cybersecurity · 2025–2026 results (HK01–HK03)."
                          : "CNTT An ninh mạng HUFLIT · Kết quả 2025–2026 (HK01–HK03)."}
                      </DialogDescription>
                    </DialogHeader>
                    <Button variant="outline" size="sm" onClick={() => setIsEnglish(!isEnglish)} className="flex items-center gap-2 border-primary/30 hover:bg-primary/5">
                      <Globe size={14} className="text-primary" />
                      {isEnglish ? "Tiếng Việt" : "English"}
                    </Button>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto overflow-x-hidden px-6 pb-6">
                  <div className="space-y-6 pt-5">
                    {/* Year summary strip */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: isEnglish ? "Year GPA" : "GPA năm", value: "3.89" },
                        { label: isEnglish ? "Cumulative" : "Tích lũy", value: "3.52" },
                        { label: isEnglish ? "Credits" : "Tín chỉ TL", value: "138" },
                      ].map((stat) => (
                        <div key={stat.label} className="rounded-xl border border-border/80 bg-muted/30 px-3 py-3 text-center">
                          <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{stat.label}</div>
                          <div className="mt-1 text-xl font-extrabold text-primary tabular-nums">{stat.value}</div>
                        </div>
                      ))}
                    </div>

                    {year3Semesters.map((sem) => (
                      <div key={sem.id} className="rounded-2xl border border-border bg-muted/20 overflow-hidden">
                        <div className="bg-muted px-5 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border flex flex-wrap items-center justify-between gap-2">
                          <span>{isEnglish ? sem.labelEn : sem.labelVi}</span>
                          <span className="font-mono normal-case tracking-normal text-[11px] text-foreground/70">
                            GPA {sem.gpa} · Cumul. {sem.cumulative}
                          </span>
                        </div>
                        <div className="overflow-x-auto touch-pan-x" style={{ WebkitOverflowScrolling: "touch" }}>
                          <Table className="min-w-[580px]">
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
                              {sem.courses.map((item) => (
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
                          <span className="text-muted-foreground text-xs">
                            {isEnglish ? "GPA credits" : "TC tính GPA"}: <strong className="text-foreground">{sem.credits}</strong>
                          </span>
                          <span className="text-muted-foreground text-xs">
                            GPA: <strong className="text-primary">{sem.gpa}</strong>
                          </span>
                          <span className="text-muted-foreground text-xs">
                            {isEnglish ? "Cumulative" : "Tích lũy"}: <strong className="text-foreground">{sem.cumulative}</strong>
                          </span>
                        </div>
                      </div>
                    ))}

                    {/* Upcoming internship — no grades yet */}
                    <div className="rounded-2xl border border-dashed border-border/80 bg-muted/10 px-5 py-4">
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                        {isEnglish ? "Upcoming · HK01 (2026-2027)" : "Sắp tới · HK01 (2026-2027)"}
                      </div>
                      <p className="text-sm text-foreground font-medium">
                        {isEnglish ? "Industrial Internship" : "Thực tập công nghiệp"}
                        <span className="text-muted-foreground font-normal"> · 1230633 · 3.0 {isEnglish ? "credits" : "TC"}</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {isEnglish ? "Grade not published yet." : "Chưa nhập điểm."}
                      </p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 mb-4">
            <div className="rounded-xl border border-border/80 bg-muted/20 p-4">
              <div className="cinema-meta">What I build</div>
              <p className="mt-2 text-sm leading-relaxed text-foreground font-medium">Scalable backends, CI/CD pipelines, Zalo Mini App, full-stack apps, distributed systems, computer vision apps & RAG</p>
            </div>
            <div className="rounded-xl border border-border/80 bg-muted/20 p-4">
              <div className="cinema-meta">Tech & Language</div>
              <div className="mt-2 text-xs sm:text-sm space-y-1 text-foreground">
                <div><span className="text-muted-foreground font-medium">Language:</span> C#, Java, Python</div>
                <div><span className="text-muted-foreground font-medium">Cloud:</span> GCP, Cloudflare, AWS</div>
                <div><span className="text-muted-foreground font-medium">English:</span> Intermediate</div>
              </div>
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
            onClick={() => handleScrollToSection("showcase")}
            className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowDown size={14} />
            Explore work & systems
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
