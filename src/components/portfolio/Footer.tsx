import { siteConfig } from "@/data/config";
import { useState, useEffect } from "react";
import { Eye, Users, ExternalLink } from "lucide-react";
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
        <div className="mb-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-start gap-4">
            <img
              src="/images/huflit.png"
              alt="HUFLIT"
              className="w-16 h-16 object-contain shrink-0"
              loading="lazy"
            />
            <div>
              <h4 className="font-bold text-sm mb-1 text-foreground leading-snug">Ho Chi Minh City University of Foreign Languages - Information Technology</h4>
              <p className="text-xs text-muted-foreground">Faculty of Information Technology</p>
              <p className="text-xs text-muted-foreground mt-0.5">Major: {siteConfig.major}</p>
              <p className="text-xs text-muted-foreground mt-0.5">Expected: {siteConfig.academic.expectedGraduation}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img
              src="/images/tsinghua.png"
              alt="Tsinghua University"
              className="w-16 h-16 object-contain rounded-md border border-border/50 shrink-0"
              loading="lazy"
            />
            <div>
              <h4 className="font-bold text-sm mb-1 text-foreground leading-snug">Tsinghua University</h4>
              <p className="text-xs text-muted-foreground">AI & Innovation Digital Economy Program</p>
              <p className="text-xs text-muted-foreground mt-0.5">Spring 2026: Certificate (Completed)</p>
              <p className="text-xs text-muted-foreground mt-0.5">Autumn 2026: TA & Researcher</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-xl bg-white border border-slate-200 p-1.5 flex items-center justify-center shrink-0 shadow-sm">
              <img
                src="/images/vinuni.png"
                alt="VinUniversity"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div>
              <h4 className="font-bold text-sm mb-1 text-foreground leading-snug">VinUniversity & Vingroup</h4>
              <p className="text-xs text-muted-foreground">AI Practical Talent Program</p>
              <p className="text-xs text-muted-foreground mt-0.5">Cohort 3 & 4 (Enrolling Dec 2026)</p>
              <p className="text-xs text-primary/95 font-medium mt-0.5">Deferred Enrollment</p>
            </div>
          </div>

          <div>
            <h4 className="cinema-meta mb-4">OrangeCloud VN(Cloudflare)</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://onboarding.orangecloud.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group/link"
                >
                  <span>Cloudflare for Beginners</span>
                  <ExternalLink size={12} className="opacity-40 group-hover/link:opacity-80 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://blog.orangecloud.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group/link"
                >
                  <span>Cloudflare News & Blog</span>
                  <ExternalLink size={12} className="opacity-40 group-hover/link:opacity-80 transition-opacity" />
                </a>
              </li>
            </ul>
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
                  className="h-5"
                  loading="lazy"
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
