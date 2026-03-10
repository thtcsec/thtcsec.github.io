import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";

interface ProjectHeaderProps {
  backLink?: string;
  backLabel?: string;
}

const ProjectHeader = ({ backLink = "/", backLabel = "Trang chủ" }: ProjectHeaderProps) => {
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
                        ? "bg-background/70 dark:bg-background/40 backdrop-blur-xl border border-border/50 dark:border-white/10 rounded-full shadow-xl dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] py-2 px-4 md:px-6"
                        : "bg-background/30 dark:bg-background/20 backdrop-blur-sm border border-transparent rounded-full py-3 md:py-4 px-4 md:px-6"
                }`}
            >
                <div className="flex items-center justify-between">
                    <Link
                        to="/"
                        className={`font-bold transition-all duration-300 ease-out whitespace-nowrap ${
                            isScrolled ? "text-base md:text-lg" : "text-lg md:text-xl"
                        }`}
                    >
                        hoangtu<span className="text-primary">.dev</span>
                    </Link>

                    <div className={`flex items-center transition-all duration-500 ${isScrolled ? "gap-1" : "gap-2"}`}>
                        <ThemeToggle />
                        {backLink !== "none" && (
                            <Button
                                size={isScrolled ? "sm" : "default"}
                                variant="ghost"
                                className="transition-all duration-500 hover:scale-105"
                                asChild
                            >
                                <Link to={backLink} className="flex items-center gap-2">
                                    <Icon icon="mdi:arrow-left" className={`${isScrolled ? "w-4 h-4" : "w-5 h-5"}`} />
                                    <span className={`hidden sm:inline ${isScrolled ? "text-sm" : ""}`}>{backLabel}</span>
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default ProjectHeader;
