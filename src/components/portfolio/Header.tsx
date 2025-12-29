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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "glass py-2 shadow-lg shadow-background/20"
          : "py-6 bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        {/* Normal layout: logo left, nav right */}
        <div
          className={`flex items-center transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${isScrolled ? "justify-center" : "justify-between"
            }`}
        >
          {/* Logo */}
          <a
            href="#home"
            className={`font-bold text-gradient transition-all duration-500 ease-out ${isScrolled ? "text-lg absolute left-4" : "text-2xl"
              }`}
            onClick={e => {
              e.preventDefault();
              handleNavClick("#home");
            }}
          >
            hoangtu<span className="text-primary">.dev</span>
          </a>

          {/* Desktop Navigation - initially right, bounces to center when scrolled */}
          <nav
            className={`hidden md:flex items-center transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${isScrolled ? "" : ""
              }`}
          >
            <div
              className={`flex items-center transition-all duration-500 ${isScrolled
                  ? "gap-0.5 bg-muted/80 rounded-full px-3 py-1.5 backdrop-blur-sm"
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
                  className={`rounded-lg font-medium transition-all duration-500 ease-out ${activeSection === item.href.substring(1)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    } ${isScrolled
                      ? "px-2 py-1 text-xs"
                      : "px-3 py-2 text-sm"
                    }`}
                  style={{
                    transitionDelay: `${index * 30}ms`,
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Right side - Theme + Easter Egg */}
          <div
            className={`hidden md:flex items-center transition-all duration-500 ${isScrolled ? "gap-1 absolute right-4" : "gap-2"
              }`}
          >
            <ThemeToggle />
            <Button
              size={isScrolled ? "sm" : "default"}
              variant="ghost"
              className="transition-all duration-500"
              asChild
            >
              <Link to="/phone">
                <HelpCircle size={isScrolled ? 18 : 22} />
              </Link>
            </Button>
          </div>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="flex flex-col p-4 gap-2">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={e => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === item.href.substring(1)
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
            >
              {item.label}
            </a>
          ))}
          <Button className="mt-2" onClick={() => handleNavClick("#contact")}>
            Contact Me
          </Button>
          <Button variant="outline" className="mt-2" asChild>
            <a href="/cv/mycv.pdf" target="_blank" download>
              <Download size={16} className="mr-2" />
              Download CV
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;