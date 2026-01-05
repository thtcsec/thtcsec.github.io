import { useState, useEffect } from "react";
import { Menu, X, Download, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${isScrolled
          ? "w-[90%] md:w-[700px]"
          : "w-[95%] md:w-[90%] max-w-7xl"
        }`}
    >
      <div
        className={`transition-all duration-500 ${isScrolled
            ? "bg-background/70 dark:bg-background/40 backdrop-blur-xl border border-border/50 dark:border-white/10 rounded-full shadow-xl dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] py-2 px-4 md:px-6"
            : "bg-background/30 dark:bg-background/20 backdrop-blur-sm border border-transparent rounded-full py-3 md:py-4 px-4 md:px-6"
          }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo - Hidden when scrolled on desktop, visible on mobile */}
          <a
            href="#home"
            className={`font-bold text-gradient transition-all duration-300 ease-out whitespace-nowrap ${isScrolled ? "md:opacity-0 md:pointer-events-none text-base md:text-lg" : "text-lg md:text-xl"
              }`}
            onClick={e => {
              e.preventDefault();
              handleNavClick("#home");
            }}
          >
            hoangtu<span className="text-primary">.dev</span>
          </a>

          {/* Desktop Navigation - Takes full space when scrolled */}
          <nav className={`hidden md:flex items-center transition-all duration-500 ${isScrolled ? "mx-auto" : ""}`}>
            <div
              className={`flex items-center transition-all duration-500 ${isScrolled
                  ? "gap-0.5"
                  : "gap-1"
                }`}
            >
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={e => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`rounded-full font-medium transition-all duration-500 ease-out hover:scale-105 whitespace-nowrap ${activeSection === item.href.substring(1)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    } ${isScrolled
                      ? "px-3 py-1.5 text-xs"
                      : "px-4 py-2 text-sm"
                    }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Right side - Theme + Easter Egg */}
          <div
            className={`hidden md:flex items-center transition-all duration-500 ${isScrolled ? "gap-1" : "gap-2"
              }`}
          >
            <ThemeToggle />
            <Button
              size={isScrolled ? "sm" : "default"}
              variant="ghost"
              className="transition-all duration-500 hover:scale-105"
              asChild
            >
              <Link to="/phone">
                <HelpCircle size={isScrolled ? 18 : 22} />
              </Link>
            </Button>
          </div>

          {/* Mobile: Help + Theme Toggle + Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              size="sm"
              variant="ghost"
              className="transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/phone">
                <HelpCircle size={20} />
              </Link>
            </Button>
            <ThemeToggle />
            <button
              className="p-2 text-foreground hover:bg-muted/50 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-background/95 dark:bg-background/95 backdrop-blur-3xl pt-24 px-6 flex flex-col gap-6 animate-fade-in md:hidden text-center">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={e => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={`text-2xl font-bold hover:text-primary py-4 border-b border-border/50 animate-slide-up ${activeSection === item.href.substring(1)
                  ? "text-primary"
                  : "text-foreground/80"
                }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.label}
            </a>
          ))}
          <Button 
            className="mt-4 w-full py-6 text-lg shadow-xl animate-slide-up" 
            onClick={() => handleNavClick("#contact")}
            style={{ animationDelay: `${navItems.length * 50}ms` }}
          >
            Contact Me
          </Button>
          <Button 
            variant="outline" 
            className="w-full py-6 text-lg animate-slide-up" 
            asChild
            style={{ animationDelay: `${(navItems.length + 1) * 50}ms` }}
          >
            <a href="/cv/mycv.pdf" target="_blank" download>
              <Download size={20} className="mr-2" />
              Download CV
            </a>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;