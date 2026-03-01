import { Link } from "react-router-dom";

const ProjectHeader = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link
                        to="/"
                        className="font-bold text-gradient text-lg sm:text-xl transition-all duration-300 hover:scale-105"
                    >
                        hoangtu<span className="text-primary">.dev</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default ProjectHeader;
