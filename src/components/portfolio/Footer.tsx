import { siteConfig } from "@/data/config";
import { useState, useEffect } from "react";
import { Eye, Users } from "lucide-react";

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
        const res = await fetch("https://portfolio-counter.thtcsec.workers.dev/visit", {
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
        <div className="mb-8 grid gap-8 md:grid-cols-3">
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
            <h4 className="cinema-meta mb-4">Built With</h4>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "TailwindCSS", "Vite", "shadcn/ui"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-muted px-2 py-1 text-xs font-medium text-foreground/80"
                >
                  {tech}
                </span>
              ))}
            </div>
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
              className="hover:text-primary transition-colors font-medium"
            >
              Protected by Cloudflare
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
