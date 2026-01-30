import { useParams, Link } from "react-router-dom";
import { allProjects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowLeft, Home } from "lucide-react";
import { Icon } from "@iconify/react";
import { useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import NotFound from "@/pages/NotFound";

const ProjectDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const project = allProjects.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return <NotFound />;
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 glass py-4 border-b border-border/50">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <Link to="/projects" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                        <ArrowLeft size={20} />
                        <span className="font-medium">Back to Projects</span>
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
                {/* Hero Section */}
                <section className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] w-full overflow-hidden bg-muted">
                    <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full ${project.category === 'mobile' ? 'object-contain p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900' : 'object-cover'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-12">
                        <div className="container mx-auto">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-sm font-medium text-primary uppercase tracking-wider">
                                    {project.category}
                                </span>
                                {project.featured && (
                                    <span className="px-3 py-1 rounded-full bg-accent/90 backdrop-blur-sm border border-accent/20 text-sm font-medium text-white shadow-lg">
                                        ⭐ Featured
                                    </span>
                                )}
                                {project.isPrivate && (
                                    <span className="px-3 py-1 rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 text-sm font-medium text-orange-500 flex items-center gap-1">
                                        <Icon icon="mdi:lock" className="w-3 h-3" /> Private
                                    </span>
                                )}
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 drop-shadow-sm">
                                {project.title}
                            </h1>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto px-4 mt-8 md:mt-12">
                    <div className="grid md:grid-cols-3 gap-10">
                        {/* Main Content */}
                        <div className="md:col-span-2 space-y-8">
                            <div className="prose dark:prose-invert max-w-none">
                                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {project.highlights && project.highlights.length > 0 && (
                                <div>
                                    <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {project.highlights.map((highlight, i) => (
                                            <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                                                <div className="p-2 rounded-full bg-primary/10 text-primary mt-0.5 shrink-0">
                                                    <Icon icon="mdi:check" className="w-4 h-4" />
                                                </div>
                                                <span className="text-foreground/80">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Gallery Placeholder - In a real app, this would be a carousel or grid of more images */}
                            {/* For now, reusing the main image as a lightbox trigger or similar could be done, but simpler is fine for V1 */}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Actions Card */}
                            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
                                <h3 className="font-semibold mb-4 text-lg">Project Links</h3>
                                <div className="space-y-3">
                                    {project.demo ? (
                                        <Button className="w-full gap-2 text-base h-12" asChild>
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink size={18} />
                                                Visit Live Demo
                                            </a>
                                        </Button>
                                    ) : (
                                        <Button className="w-full gap-2 text-base h-12" disabled variant="secondary">
                                            <ExternalLink size={18} />
                                            Demo Not Available
                                        </Button>
                                    )}

                                    {project.github ? (
                                        <Button variant="outline" className="w-full gap-2 text-base h-12" asChild>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Github size={18} />
                                                View Source Code
                                            </a>
                                        </Button>
                                    ) : (
                                        <Button variant="outline" className="w-full gap-2 text-base h-12" disabled>
                                            <Github size={18} />
                                            Source Code Private
                                        </Button>
                                    )}
                                </div>

                                {project.isPrivate && (
                                    <div className="mt-4 p-3 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-sm flex items-start gap-2">
                                        <Icon icon="mdi:lock-outline" className="w-4 h-4 mt-0.5 shrink-0" />
                                        This project is private or proprietary. Code access may be restricted.
                                    </div>
                                )}
                            </div>

                            {/* Tech Stack */}
                            <div>
                                <h3 className="font-semibold mb-4 text-lg">Technologies Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 rounded-lg bg-muted text-sm font-medium text-foreground border border-border/50 hover:bg-primary/5 hover:border-primary/30 transition-colors cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="py-8 border-t border-border mt-12">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Trinh Hoang Tu. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default ProjectDetailPage;
