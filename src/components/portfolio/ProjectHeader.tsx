import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";

interface ProjectHeaderProps {
  backLink?: string;
  backLabel?: string;
}

const ProjectHeader = ({ backLink = "/", backLabel = "Home" }: ProjectHeaderProps) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        
        handleScroll(); // Check initial state
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
                isScrolled
                    ? "w-[90%] md:w-[600px]"
                    : "w-[95%] md:w-[90%] max-w-7xl"
            }`}
        >
            <div
                className={`transition-all duration-500 ${
                    isScrolled
                        ? "bg-background/80 dark:bg-background/80 backdrop-blur-xl border border-border/50 shadow-lg shadow-black/5 dark:shadow-black/20 rounded-full px-4 py-2"
                        : "bg-background/40 dark:bg-background/40 backdrop-blur-md border border-border/30 rounded-2xl px-6 py-3"
                }`}
            >
                <div className="flex items-center justify-between">
                    <Link
                        to="/"
                        className="flex items-center gap-2 group transition-opacity hover:opacity-80"
                    >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-sm shadow-sm">
                            T
                        </div>
                        <span className="font-semibold text-sm tracking-tight text-foreground hidden sm:inline-block">
                            Trịnh Hoàng Tú
                        </span>
                    </Link>

                    <div className="flex items-center gap-3">
                        <Button
                            variant="ghost"
                            size="sm"
                            asChild
                            className="text-muted-foreground hover:text-foreground text-xs gap-1.5"
                        >
                            <Link to={backLink}>
                                <Icon icon="lucide:arrow-left" className="w-3.5 h-3.5" />
                                {backLabel}
                            </Link>
                        </Button>
                        <div className="h-4 w-px bg-border/60" />
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default ProjectHeader;

