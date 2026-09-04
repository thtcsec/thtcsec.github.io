import { useState, useEffect } from "react";
import { ExternalLink, Github, ChevronRight, Trophy, Layers, Cpu, Cloud, ShieldCheck, Boxes } from "lucide-react";
import { Button } from "@/components/ui/button";
import { allProjects, type Project, categoryLabels, projectCategoryOrder, type ProjectCategory } from "@/data/projects";
import { Link } from "react-router-dom";
import ProjectHeader from "@/components/portfolio/ProjectHeader";

const categoryIcons: Record<string, typeof Layers> = {
    all: Layers,
    "ai-cv": Cpu,
    "cloud-systems": Cloud,
    "cybersecurity": ShieldCheck,
    "saas": Boxes,
};

const ProjectsPage = () => {
    const [activeCategory, setActiveCategory] = useState<string>("all");
    const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({});

    const filteredProjects = activeCategory === "all"
        ? allProjects
        : allProjects.filter(p => p.category === activeCategory);

    const categories = projectCategoryOrder;

    const handleImageLoad = (id: string) => {
        setImageLoaded(prev => ({ ...prev, [id]: true }));
    };

    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <ProjectHeader />

            <main className="pt-36 sm:pt-40 md:pt-44 pb-20">
                <div className="container mx-auto px-4">
                    {/* Page Header */}
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                            Engineering Portfolio
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground tracking-tight">
                            All Systems & Projects
                        </h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Production platforms, research frameworks, AI/ML pipelines, and security infrastructure
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-2.5 mb-12">
                        {categories.map((category) => {
                            const IconComponent = categoryIcons[category] || Layers;
                            const isActive = activeCategory === category;
                            return (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${isActive
                                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/25 scale-[1.02]"
                                        : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border/80"
                                        }`}
                                >
                                    <IconComponent size={15} className={isActive ? "text-primary-foreground" : "text-muted-foreground"} />
                                    <span>{categoryLabels[category]}</span>
                                </button>
                            );
                        })}
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
                            <p className="text-muted-foreground">No projects found in this domain.</p>
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
    const CategoryIcon = categoryIcons[project.category] || Layers;

    return (
        <div
            className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 flex flex-col h-full"
        >
            {/* Image */}
            <Link to={`/projects/${project.id}`} className="relative block aspect-video overflow-hidden bg-muted cursor-pointer">
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted-foreground/10 animate-pulse" />
                )}
                {project.isMobileApp ? (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-zinc-900 to-black p-2.5">
                        <div className="h-full aspect-[9/18.5] rounded-xl overflow-hidden border-2 border-neutral-700/80 bg-black shadow-lg">
                            <img
                                src={project.image}
                                alt={project.title}
                                className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${imageLoaded ? "opacity-100" : "opacity-0"
                                    }`}
                                loading="lazy"
                                onLoad={onImageLoad}
                            />
                        </div>
                    </div>
                ) : (
                    <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${imageLoaded ? "opacity-100" : "opacity-0"
                            }`}
                        loading="lazy"
                        onLoad={onImageLoad}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 pointer-events-none" />
            </Link>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-3 text-xs mb-2.5">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-primary font-medium px-2 py-0.5 rounded-md bg-primary/10 border border-primary/20">
                        <CategoryIcon size={12} className="shrink-0" />
                        {categoryLabels[project.category] || project.category}
                    </span>
                    {project.awardBadge && (
                        <span className="font-mono text-[11px] text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1">
                            <Trophy size={11} className="text-amber-500" />
                            {project.awardBadge}
                        </span>
                    )}
                </div>
                <Link to={`/projects/${project.id}`}>
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                </Link>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                    <ul className="mb-4 space-y-1">
                        {project.highlights.slice(0, 3).map((highlight, i) => (
                            <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                                <span className="text-primary mt-0.5">•</span>
                                <span className="line-clamp-1">{highlight}</span>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 5).map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 5 && (
                        <span className="px-2 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground">
                            +{project.technologies.length - 5}
                        </span>
                    )}
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

                    {project.githubLinks?.map((link, idx) => (
                        <Button key={idx} variant="outline" size="sm" asChild className="gap-2">
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                                <Github size={16} />
                                {link.label}
                            </a>
                        </Button>
                    ))}

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

                    {!project.github && !(project.githubLinks && project.githubLinks.length > 0) && !project.demo && !project.isPrivate && (
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
