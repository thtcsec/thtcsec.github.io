import { siteConfig } from "@/data/config";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* University Info */}
          <div className="flex items-start gap-4">
            <img
              src="/images/huflit.png"
              alt="HUFLIT"
              className="w-16 h-16 object-contain"
              loading="lazy"
            />
            <div>
              <h4 className="font-bold mb-1 text-foreground">HUFLIT</h4>
              <p className="text-sm text-muted-foreground">Faculty of Information Technology</p>
              <p className="text-sm text-muted-foreground">Major: {siteConfig.major}</p>
              <p className="text-sm text-muted-foreground">Expected: {siteConfig.academic.expectedGraduation}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">Quick Links</h4>
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

          {/* Tech Stack */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">Built With</h4>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "TailwindCSS", "Vite", "shadcn/ui"].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {siteConfig.authorEn}. All rights reserved.
          </p>

          {/* Visitor Counter */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>👁️</span>
            <a
              href="https://github.com/thtcsec"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
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
    </footer>
  );
};

export default Footer;
