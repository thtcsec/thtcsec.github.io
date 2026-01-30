import { useState, useEffect } from "react";
import { ExternalLink, Github, ChevronRight, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { allProjects, type Project } from "@/data/projects";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

const categoryLabels: Record<string, string> = {
    all: "All",
    ai: "AI/ML",
    web: "Web",
    extension: "Extension",
    system: "System",
    desktop: "Desktop",
    mobile: "Mobile",
};

const categoryEmoji: Record<string, string> = {
    ai: "🤖",
    web: "🌐",
    extension: "🎯",
    system: "🐧",
    desktop: "📖",
    mobile: "📱",
};

const ProjectsPage = () => {
    const [activeCategory, setActiveCategory] = useState<string>("all");
    const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({});

    const filteredProjects = activeCategory === "all"
        ? allProjects
        : allProjects.filter(p => p.category === activeCategory);

    const categories = ["all", ...new Set(allProjects.map(p => p.category))];

    const handleImageLoad = (id: string) => {
        setImageLoaded(prev => ({ ...prev, [id]: true }));
    };

    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 glass py-4">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                        <ArrowLeft size={20} />
                        <span className="font-medium">Back to Home</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <Button variant="outline" size="sm" asChild>
                            <Link to="/">
                                <Home size={16} className="mr-2" />
                                Home
                            </Link>
                        </Button>
                    </div>
                </div>
            </header>

            <main className="pt-24 pb-20">
                <div className="container mx-auto px-4">
                    {/* Page Header */}
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                            Portfolio
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
                            All Projects
                        </h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            A comprehensive list of all projects I've worked on
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border"
                                    }`}
                            >
                                {category !== "all" && categoryEmoji[category]} {categoryLabels[category]}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                imageLoaded={imageLoaded[project.id] || false}
                                onImageLoad={() => handleImageLoad(project.id)}
                            />
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-muted-foreground">No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </main>

            {/* Footer */}
            <footer className="py-8 border-t border-border">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Trinh Hoang Tu. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

interface ProjectCardProps {
    project: Project;
    imageLoaded: boolean;
    onImageLoad: () => void;
}

const ProjectCard = ({ project, imageLoaded, onImageLoad }: ProjectCardProps) => {
    return (
        <div
            className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 flex flex-col h-full"
        >
            {/* Image */}
            <Link to={`/projects/${project.id}`} className="relative block aspect-video overflow-hidden bg-muted cursor-pointer">
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted-foreground/10 animate-pulse" />
                )}
                <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${imageLoaded ? "opacity-100" : "opacity-0"
                        }`}
                    loading="lazy"
                    onLoad={onImageLoad}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />

                {/* Badges */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-xs font-medium text-primary">
                    {categoryEmoji[project.category]} {categoryLabels[project.category]}
                </div>
                {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 text-xs font-medium text-accent">
                        ⭐ Featured
                    </div>
                )}
            </Link>

            {/* Content */}
            <div className="p-6">
                <Link to={`/projects/${project.id}`}>
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                </Link>
                <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                    <ul className="mb-4 space-y-1">
                        {project.highlights.map((highlight, i) => (
                            <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                                <span className="text-primary mt-0.5">•</span>
                                <span>{highlight}</span>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Actions - Stop propagation */}
                <div className="flex items-center gap-3 mt-auto" onClick={(e) => e.stopPropagation()}>
                    {project.github && (
                        <Button variant="outline" size="sm" asChild className="gap-2">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github size={16} />
                                Code
                            </a>
                        </Button>
                    )}

                    {/* Private Badge - Left of Demo */}
                    {project.isPrivate && (
                        <span className="text-xs text-muted-foreground flex items-center gap-1 border border-border px-2 py-1 rounded-md bg-muted/50">
                            <span className="text-xs">🔒</span>
                            Private Project
                        </span>
                    )}

                    {project.demo && (
                        <Button size="sm" asChild className="gap-2">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink size={16} />
                                Demo
                            </a>
                        </Button>
                    )}

                    {!project.github && !project.demo && !project.isPrivate && (
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <ChevronRight size={14} />
                            Private Project
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
