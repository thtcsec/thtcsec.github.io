import { useState, useEffect } from "react";
import { siteConfig } from "@/data/config";
import { Link } from "react-router-dom";
import { Eye, Users, ExternalLink, Gamepad2 } from "lucide-react";
import { Icon } from "@iconify/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [stats, setStats] = useState<{ views: number | string; visitors: number | string }>({
    views: "...",
    visitors: "..."
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // 1. Get or generate persistent visitor ID in localStorage (survives incognito F5)
        let visitorId = localStorage.getItem("portfolio_visitor_id");
        if (!visitorId) {
          visitorId = "v-" + Date.now().toString(36) + "-" + Math.random().toString(36).substring(2, 9);
          localStorage.setItem("portfolio_visitor_id", visitorId);
        }

        // 2. Prevent view inflation on SPA routing and F5 (sessionStorage persists on F5)
        const hasCountedSession = sessionStorage.getItem("portfolio_view_counted");

        const endpoint = hasCountedSession
          ? "https://portfolio-counter.sycu-lee.workers.dev/stats"
          : `https://portfolio-counter.sycu-lee.workers.dev/visit?visitorId=${visitorId}`;

        const res = await fetch(endpoint);
        if (res.ok) {
          const data = await res.json();
          setStats({
            views: data.views,
            visitors: data.visitors
          });

          if (!hasCountedSession) {
            sessionStorage.setItem("portfolio_view_counted", "true");
          }
        } else {
          throw new Error("Worker returned error status");
        }
      } catch (err) {
        console.error("Counter API error:", err);
        setStats({ views: "--", visitors: "--" });
      }
    };

    fetchStats();
  }, []);

  return (
    <footer className="border-t border-border/80 bg-card/15 py-12">
      <div className="container mx-auto px-4">
        {/* Top: 3 Academic Partners Grid */}
        <h2 className="sr-only">Academic Background and Affiliations</h2>
        <div className="mb-10 grid gap-8 grid-cols-1 md:grid-cols-3">
          <div className="flex items-start gap-4">
            <img
              src="/images/huflit.png"
              alt=""
              aria-hidden="true"
              className="w-14 h-14 object-contain shrink-0"
              loading="lazy"
            />
            <div>
              <h3 className="font-bold text-sm mb-1 text-foreground leading-snug">Ho Chi Minh City University of Foreign Languages - Information Technology</h3>
              <p className="text-xs text-muted-foreground">Faculty of Information Technology</p>
              <p className="text-xs text-muted-foreground mt-0.5">Major: {siteConfig.major}</p>
              <p className="text-xs text-muted-foreground mt-0.5">Expected: {siteConfig.academic.expectedGraduation}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img
              src="/images/tsinghua.png"
              alt=""
              aria-hidden="true"
              className="w-14 h-14 object-contain rounded-md border border-border/50 shrink-0"
              loading="lazy"
            />
            <div>
              <h3 className="font-bold text-sm mb-1 text-foreground leading-snug">Tsinghua University</h3>
              <p className="text-xs text-primary font-bold">Global Innovation Program Certified</p>
              <p className="text-xs text-muted-foreground mt-0.5">AI & Innovation Digital Economy Program</p>
              <p className="text-xs text-muted-foreground mt-0.5">Spring 2026: Certificate (Completed)</p>
              <p className="text-xs text-muted-foreground mt-0.5">Autumn 2026: Extended Teaching Assistant</p>
              <p className="text-[11px] text-primary font-medium mt-0.5 leading-tight">Supervised by Prof. Kris Singh (CEO at SRII, Ex-IBM/Intel)</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 p-1.5 flex items-center justify-center shrink-0 shadow-sm">
              <img
                src="/images/vinuni.png"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="font-bold text-sm mb-1 text-foreground leading-snug">VinUniversity</h3>
              <p className="text-xs text-primary font-bold">AI Practical Talent Program</p>
              <p className="text-xs text-muted-foreground mt-0.5">Cohort 1: Admitted Scholar</p>
              <p className="text-xs text-muted-foreground mt-0.5">Deferred Enrollment (Reserved until 2027)</p>
            </div>
          </div>
        </div>

                {/* Middle: OrangeCloud VN Ecosystem Horizontal Bar */}
        <div className="mb-8 p-3.5 sm:p-4 rounded-xl bg-card/30 border border-border/40 flex flex-col md:flex-row items-center justify-between gap-3.5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground shrink-0">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-[#F38020]/15 text-[#F38020] font-bold text-xs">
              ☁
            </span>
            <span>OrangeCloud VN</span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-1.5 sm:gap-2">
            {[
              { label: "thtcsec (Portfolio)", href: "https://thtcsec.orangecloud.vn", isSelf: true },
              { label: "Beginners Guide", href: "https://onboarding.orangecloud.vn", isSelf: false },
              { label: "Technical Blog", href: "https://blog.orangecloud.vn", isSelf: false },
              { label: "Go-Live Readiness", href: "https://ready.orangecloud.vn", isSelf: false },
              { label: "DocOps Platform", href: "https://docops.orangecloud.vn/", isSelf: false },
              { label: "Reputation Engine", href: "https://reputation.orangecloud.vn/", isSelf: false },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-medium transition-all duration-200 group ${
                  link.isSelf
                    ? 'bg-[#F38020]/10 text-[#F38020] border-[#F38020]/30 hover:bg-[#F38020]/20'
                    : 'bg-background/60 hover:bg-primary/5 border-border/40 hover:border-primary/40 text-muted-foreground hover:text-foreground'
                }`}
              >
                <span>{link.label}</span>
                <ExternalLink size={10} className={link.isSelf ? 'text-[#F38020]' : 'text-muted-foreground/70 group-hover:text-primary transition-colors'} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <div className="text-sm text-muted-foreground flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1">
            <span>© {currentYear} {siteConfig.authorEn}. All rights reserved.</span>
            <span className="hidden sm:inline text-muted-foreground/40">·</span>
            <a
              href="https://www.cloudflare.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:text-primary transition-colors font-medium flex items-center gap-1.5"
            >
              <Icon
                icon="simple-icons:cloudflare"
                className="w-3.5 h-3.5 text-muted-foreground group-hover:text-[#F38020] transition-colors duration-300 shrink-0"
              />
              <span>Protected by Cloudflare</span>
            </a>
            <span className="text-muted-foreground/40">·</span>
            <Link
              to="/arcade"
              className="group/arcade inline-flex items-center gap-1 text-xs text-muted-foreground/60 hover:text-primary transition-all duration-300 px-2 py-0.5 rounded-full border border-transparent hover:border-primary/30 hover:bg-primary/5"
              title="Secret Arcade Vault"
            >
              <Gamepad2 size={13} className="text-muted-foreground/60 group-hover/arcade:text-primary group-hover/arcade:scale-110 transition-all" />
              <span className="text-[11px] font-mono opacity-60 group-hover/arcade:opacity-100">arcade</span>
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 hover:text-foreground transition-colors duration-200" title="Total page views">
                <Eye size={15} className="text-primary" />
                <span className="text-xs uppercase tracking-wider">Page Views:</span>
                <span className="font-semibold text-foreground/90">{stats.views}</span>
              </div>
              <span className="text-muted-foreground/30">|</span>
              <div className="flex items-center gap-1.5 hover:text-foreground transition-colors duration-200" title="Unique visitors">
                <Users size={15} className="text-primary" />
                <span className="text-xs uppercase tracking-wider">Page Visitors:</span>
                <span className="font-semibold text-foreground/90">{stats.visitors}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 border-l border-border/80 pl-6 h-5">
              <span className="text-xs uppercase tracking-wider">GitHub Viewers:</span>
              <a
                href="https://github.com/thtcsec"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center"
              >
                <img
                  src="https://komarev.com/ghpvc/?username=thtcsec&label=Profile%20Views&color=3b82f6&style=flat"
                  alt="Profile Views"
                  width="120"
                  height="20"
                  className="h-5 w-auto"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = "none";
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
