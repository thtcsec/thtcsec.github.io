import { ArrowDown, Github, Linkedin, Mail, Terminal, FileText, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { siteConfig, getAcademicProgress, getDaysRemaining } from "@/data/config";

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
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Terminal size={14} />
                Profile snapshot
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
                    <span>{progressPercentage}%</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${progressPercentage}%` }} />
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