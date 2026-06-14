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
        // Fetch from Cloudflare Worker counter endpoint
        const res = await fetch("https://portfolio-counter.sycu-lee.workers.dev/visit", {
          credentials: "include"
        });
        if (res.ok) {
          const data = await res.json();
          setStats({
            views: data.views,
            visitors: data.visitors
          });
        } else {
          throw new Error("Worker returned error status");
        }
      } catch (err) {
        console.error("Counter API error:", err);
        // Fallback placeholder if worker is not yet deployed
        setStats({ views: "--", visitors: "--" });
      }
    };

    fetchStats();
  }, []);

  return (
    <footer className="border-t border-border/80 bg-card/15 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex items-start gap-4">
            <img
              src="/images/huflit.png"
              alt="HUFLIT"
              className="w-16 h-16 object-contain"
              loading="lazy"
            />
            <div>
              <h4 className="font-bold mb-1 text-foreground">Ho Chi Minh City University of Foreign Languages - Information Technology</h4>
              <p className="text-sm text-muted-foreground">Faculty of Information Technology</p>
              <p className="text-sm text-muted-foreground">Major: {siteConfig.major}</p>
              <p className="text-sm text-muted-foreground">Expected: {siteConfig.academic.expectedGraduation}</p>
            </div>
          </div>

          <div>
            <h4 className="cinema-meta mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="cinema-meta mb-4">OrangeCloud VN</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://onboarding.orangecloud.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group/link"
                >
                  <span>Học Cloudflare từ con số 0</span>
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
                  <span>Tin tức Cloudflare</span>
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
                <span className="text-xs uppercase tracking-wider">Views:</span>
                <span className="font-semibold text-foreground/90">{stats.views}</span>
              </div>
              <span className="text-muted-foreground/30">|</span>
              <div className="flex items-center gap-1.5 hover:text-foreground transition-colors duration-200" title="Unique visitors">
                <Users size={15} className="text-primary" />
                <span className="text-xs uppercase tracking-wider">Visitors:</span>
                <span className="font-semibold text-foreground/90">{stats.visitors}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 border-l border-border/80 pl-6 h-5">
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
