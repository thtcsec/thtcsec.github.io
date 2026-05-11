import { ArrowDown, Github, Linkedin, Mail, Terminal, FileText, Facebook } from "lucide-react";
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
              {siteConfig.bio}
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

          <div className="cinema-reveal lg:justify-self-end" style={{ ["--reveal-delay" as string]: "140ms" }}>
            <div className="cinema-card rounded-3xl p-6">
              <div className="flex items-center justify-between gap-2 text-sm font-medium text-muted-foreground">
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
                  <DialogContent className="max-w-3xl h-[85vh] flex flex-col p-0 overflow-hidden">
                    <div className="p-6 pb-2">
                      <DialogHeader>
                        <DialogTitle>Academic Performance - Year 3</DialogTitle>
                        <DialogDescription>
                          Detailed results for the 2025-2026 academic year. (Calculated based on available grades)
                        </DialogDescription>
                      </DialogHeader>
                    </div>
                    
                    <ScrollArea className="flex-1 px-6 pb-6">
                      <div className="space-y-6">
                        {/* HK01 */}
                        <div className="rounded-xl border border-border bg-muted/30 overflow-hidden">
                          <div className="bg-muted px-4 py-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            Năm học: 2025-2026 - Học kỳ: HK01
                          </div>
                          <div className="overflow-x-auto">
                            <Table className="min-w-[550px]">
                              <TableHeader>
                                <TableRow>
                                  <TableHead className="w-[100px]">Mã HP</TableHead>
                                  <TableHead>Tên học phần</TableHead>
                                  <TableHead className="text-center">Tín chỉ</TableHead>
                                  <TableHead className="text-center">Điểm</TableHead>
                                  <TableHead className="text-right">Kết quả</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {[
                                  { code: "1010762", name: "Giáo dục thể chất 1 (Bóng bàn 1)", credits: "2.0", grade: "8.8", letter: "A" },
                                  { code: "1210164", name: "Blockchain và ứng dụng", credits: "4.0", grade: "9.9", letter: "A+" },
                                  { code: "1230274", name: "Quản trị mạng", credits: "4.0", grade: "9.3", letter: "A+" },
                                  { code: "1250013", name: "Tiếng Anh chuyên ngành 1", credits: "3.0", grade: "9.3", letter: "A+" },
                                  { code: "1250114", name: "Điều tra tấn công", credits: "4.0", grade: "8.9", letter: "A" },
                                ].map((item) => (
                                  <TableRow key={item.code} className="text-xs">
                                    <TableCell className="font-mono text-muted-foreground">{item.code}</TableCell>
                                    <TableCell className="font-medium">{item.name}</TableCell>
                                    <TableCell className="text-center">{item.credits}</TableCell>
                                    <TableCell className="text-center font-bold text-primary">{item.grade}</TableCell>
                                    <TableCell className="text-right font-bold">{item.letter}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>
                          <div className="p-3 bg-muted/20 border-t border-border flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-muted-foreground uppercase font-bold">
                            <span>TC Đạt: 15</span>
                            <span>GPA HK: 4.00</span>
                            <span>GPA Tích lũy: 3.44</span>
                            <span className="text-primary">DRL: 85.00 (Tốt)</span>
                          </div>
                        </div>

                        {/* HK02 */}
                        <div className="rounded-xl border border-border bg-muted/30 overflow-hidden">
                          <div className="bg-muted px-4 py-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            Năm học: 2025-2026 - Học kỳ: HK02
                          </div>
                          <div className="overflow-x-auto">
                            <Table className="min-w-[550px]">
                              <TableHeader>
                                <TableRow>
                                  <TableHead className="w-[100px]">Mã HP</TableHead>
                                  <TableHead>Tên học phần</TableHead>
                                  <TableHead className="text-center">Tín chỉ</TableHead>
                                  <TableHead className="text-center">Điểm</TableHead>
                                  <TableHead className="text-right">Kết quả</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {[
                                  { code: "1010873", name: "Giáo dục thể chất 2 (Bóng bàn 2)", credits: "3.0", grade: "9.2", letter: "A+" },
                                  { code: "1250023", name: "Tiếng Anh chuyên ngành 2", credits: "3.0", grade: "9.5", letter: "A+" },
                                  { code: "1250244", name: "Mạng không dây", credits: "4.0", grade: "9.3", letter: "A+" },
                                  { code: "1250254", name: "Penetration testing", credits: "4.0", grade: "-", letter: "-" },
                                  { code: "1250264", name: "Quản trị hệ thống bảo mật", credits: "4.0", grade: "9.4", letter: "A+" },
                                  { code: "1250374", name: "Dịch ngược", credits: "4.0", grade: "-", letter: "-" },
                                ].map((item) => (
                                  <TableRow key={item.code} className="text-xs">
                                    <TableCell className="font-mono text-muted-foreground">{item.code}</TableCell>
                                    <TableCell className="font-medium">{item.name}</TableCell>
                                    <TableCell className="text-center">{item.credits}</TableCell>
                                    <TableCell className="text-center font-bold text-primary">{item.grade}</TableCell>
                                    <TableCell className="text-right font-bold">{item.letter}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>
                          <div className="p-3 bg-muted/20 border-t border-border flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-muted-foreground uppercase font-bold">
                            <span>TC Đạt: 14</span>
                            <span>GPA HK: 4.00</span>
                            <span>GPA Tích lũy: 3.50</span>
                          </div>
                        </div>
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-border/80 bg-muted/30 p-4">
                  <div className="cinema-meta">What I build</div>
                  <p className="mt-2 text-sm leading-6 text-foreground">
                    Scalable backends, robust CI/CD pipelines, and high-performance full-stack applications.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border p-4">
                    <div className="cinema-meta">University</div>
                    <div className="mt-2 text-sm font-semibold text-foreground">{siteConfig.university}</div>
                  </div>
                  <div className="rounded-2xl border border-border p-4">
                    <div className="cinema-meta">Location</div>
                    <div className="mt-2 text-sm font-semibold text-foreground">Ho Chi Minh City</div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border p-4">
                  <div className="flex items-center justify-between cinema-meta">
                    <span>Academic journey</span>
                    <span>68.8%</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-primary" style={{ width: `68.8%` }} />
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Semester {siteConfig.academic.currentSemester}/{siteConfig.academic.totalSemesters} • GPA {siteConfig.academic.gpa}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center lg:justify-start">
          <button
            onClick={() => handleScrollToSection("about")}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowDown size={16} />
            Scroll to overview
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;