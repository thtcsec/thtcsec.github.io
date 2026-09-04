import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { Link, useLocation } from "react-router-dom";
import { useArcadeSecret } from "@/hooks/useArcadeSecret";

export interface HeaderProps {
  backLink?: string;
  backLabel?: string;
}

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Showcase", href: "#showcase" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

const Header = ({ backLink, backLabel }: HeaderProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastScrollYRef = useRef(0);
  const { handleSecretClick } = useArcadeSecret();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;

      setIsScrolled(currentScrollY > 28);

      // Hide header when reading downward, reveal on upward intent.
      if (!isMobileMenuOpen) {
        if (currentScrollY > 140 && currentScrollY > lastScrollY + 6) {
          setIsHeaderHidden(true);
        } else if (currentScrollY < lastScrollY - 6 || currentScrollY < 48) {
          setIsHeaderHidden(false);
        }
      }

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? Math.min(currentScrollY / maxScroll, 1) : 0);
      lastScrollYRef.current = currentScrollY;

      if (isHomePage) {
        const sections = navItems.map(item => item.href.substring(1));
        let found = false;
        for (const section of sections.reverse()) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100) {
              setActiveSection(section);
              found = true;
              break;
            }
          }
        }
        if (!found && window.scrollY < 100) {
          setActiveSection("home");
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen, isHomePage]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsHeaderHidden(false);
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    if (!isHomePage && href.startsWith("#")) {
      window.location.href = `/${href}`;
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const defaultBackLink = location.pathname.startsWith("/projects/") ? "/projects" : "/";
  const defaultBackLabel = location.pathname.startsWith("/projects/") ? "Back to Projects" : "Back to Home";
  const effectiveBackLink = backLink || defaultBackLink;
  const effectiveBackLabel = backLabel || defaultBackLabel;

  return (
    <header
      className={`fixed left-1/2 z-50 w-[96%] -translate-x-1/2 transition-all duration-400 ${
        isScrolled ? "top-3 max-w-6xl md:top-4" : "top-4 max-w-7xl md:top-6"
      } ${isHeaderHidden ? "-translate-y-[120%]" : "translate-y-0"}`}
    >
      <div
        className={`rounded-full px-4 py-3 backdrop-blur-xl transition-all duration-400 md:px-6 ${
          isScrolled
            ? "border border-border/80 bg-background/86 shadow-[0_20px_54px_-30px_hsl(var(--foreground)/0.8)]"
            : "border border-border/65 bg-background/72 shadow-[0_14px_34px_-24px_hsl(var(--foreground)/0.65)]"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="whitespace-nowrap text-lg font-bold text-foreground transition-colors hover:text-primary md:text-xl"
            onClick={e => {
              if (isHomePage) {
                e.preventDefault();
                handleNavClick("#home");
              }
            }}
          >
            hoangtu<span className="text-primary">.dev</span>
          </Link>

          {/* Center Navigation: ONLY ON HOMEPAGE */}
          {isHomePage && (
            <nav className="hidden items-center md:flex">
              <div className="flex items-center gap-1">
                {navItems.map(item => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={e => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      activeSection === item.href.substring(1)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
          )}

          {/* Right Controls */}
          <div className="hidden items-center gap-3 md:flex">
            {!isHomePage && (
              <Button variant="outline" size="sm" asChild className="gap-2 text-xs font-medium">
                <Link to={effectiveBackLink}>
                  <ArrowLeft size={14} />
                  {effectiveBackLabel}
                </Link>
              </Button>
            )}
            <ThemeToggle />
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            {!isHomePage && (
              <Button variant="ghost" size="sm" asChild className="h-8 px-2.5 text-xs gap-1.5">
                <Link to={effectiveBackLink}>
                  <ArrowLeft size={14} />
                  Back
                </Link>
              </Button>
            )}
            <ThemeToggle />
            {isHomePage && (
              <button
                className="p-2 text-foreground hover:bg-muted/50 rounded-full transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="pointer-events-none absolute inset-x-6 bottom-[2px] h-[2px] overflow-hidden rounded-full">
          <div
            className="h-full rounded-full bg-primary/70 transition-[width] duration-150"
            style={{ width: `${Math.max(scrollProgress * 100, 4)}%` }}
          />
        </div>
      </div>

      {/* Mobile Navigation (Only on Home) */}
      {isHomePage && isMobileMenuOpen && (
        <div className="mt-3 overflow-hidden rounded-3xl border border-border/70 bg-background/94 p-5 shadow-[0_22px_64px_-32px_hsl(var(--foreground)/0.85)] backdrop-blur-2xl md:hidden animate-fade-in">
          <div className="flex flex-col gap-2 text-center">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={e => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`rounded-2xl px-4 py-3 text-base font-semibold transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "bg-primary/12 text-primary"
                    : "text-foreground/80 hover:bg-muted/45 hover:text-foreground"
                }`}
                style={{ animationDelay: `${index * 35}ms` }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;