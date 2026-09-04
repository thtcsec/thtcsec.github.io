import { useParams, Link } from "react-router-dom";
import { allProjects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowLeft, Home } from "lucide-react";
import { Icon } from "@iconify/react";
import { useEffect, useState, useRef } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import NotFound from "@/pages/NotFound";
import ImageModal from "@/components/ImageModal";
import Header from "@/components/portfolio/Header";

const LazyImage = ({ src, alt, fit = "cover" }: { src: string; alt: string; fit?: "cover" | "contain" }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "200px" }
        );
        if (imgRef.current) observer.observe(imgRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={imgRef} className={`w-full h-full bg-muted ${isLoaded ? "" : "animate-pulse"}`}>
            {isInView && (
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                    onLoad={() => setIsLoaded(true)}
                    className={`w-full h-full transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"} ${fit === "contain" ? "object-contain bg-zinc-950" : "object-cover"}`}
                />
            )}
        </div>
    );
};

const ProjectDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const normalizedId = id === "ct-smartcam" ? "ctsmartcam" : id;
    const project = allProjects.find(p => p.id === normalizedId || p.id === id);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const hasImages = project?.images && project.images.length > 0;
    const galleryImages = hasImages ? project.images! : (project ? [project.image] : []);
    const isMobile = project?.category === "mobile";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return <NotFound />;
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Unified Header */}
            <Header backLink="/projects" backLabel="Back to Projects" />

            <main className="pt-32 sm:pt-36 md:pt-40 pb-20">
                {/* Hero Section: Adaptive for Mobile Apps vs Desktop Systems */}
                {isMobile ? (
                    <section className="relative w-full overflow-hidden bg-gradient-to-b from-muted/30 via-background to-background pt-6 pb-14 border-b border-border/40">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
                                {/* Details Column */}
                                <div className="flex-1 text-center lg:text-left">
                                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-5">
                                        <span className="px-3.5 py-1 rounded-full bg-primary/15 border border-primary/30 text-xs font-semibold text-primary uppercase tracking-wider">
                                            📱 Zalo Mini App / Mobile SaaS
                                        </span>
                                        {project.featured && (
                                            <span className="px-3.5 py-1 rounded-full bg-accent/90 border border-accent/20 text-xs font-medium text-white shadow-sm">
                                                ⭐ Featured
                                            </span>
                                        )}
                                        {project.isPrivate && (
                                            <span className="px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-xs font-medium text-amber-500 flex items-center gap-1.5">
                                                <Icon icon="mdi:lock" className="w-3.5 h-3.5" /> Enterprise Private
                                            </span>
                                        )}
                                    </div>

                                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-5">
                                        {project.title}
                                    </h1>

                                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                                        {project.technologies.map(tech => (
                                            <span key={tech} className="px-3 py-1 rounded-lg border border-border bg-card/80 text-xs font-mono text-muted-foreground font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Smartphone Device Frame Showcase */}
                                <div className="shrink-0 relative">
                                    <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 via-sky-500/20 to-indigo-500/30 rounded-[3.5rem] blur-2xl opacity-60" />
                                    <div className="relative w-[260px] sm:w-[280px] aspect-[9/19] rounded-[2.8rem] p-3 bg-neutral-900 border-4 border-neutral-700/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] ring-1 ring-white/15">
                                        {/* Dynamic Island Notch */}
                                        <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                                            <div className="w-2.5 h-2.5 rounded-full bg-neutral-800 ml-auto mr-2" />
                                        </div>
                                        {/* Phone Screen */}
                                        <div className="w-full h-full rounded-[2.2rem] overflow-hidden bg-black relative">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover select-none"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    <section className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] w-full overflow-hidden bg-muted">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
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
                )}

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

                            {project.videos && project.videos.length > 0 && (
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                        <Icon icon="mdi:play-circle" className="text-primary" />
                                        Demo Videos
                                    </h2>
                                    <div className="grid gap-6 md:grid-cols-2">
                                        {project.videos.map((videoUrl, i) => (
                                            <div key={i} className="rounded-xl overflow-hidden border border-border bg-black shadow-md group relative">
                                                <video 
                                                    src={videoUrl} 
                                                    controls 
                                                    preload="metadata"
                                                    className="w-full aspect-video object-contain"
                                                >
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {project.images && project.images.length > 0 && (
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-2xl font-bold">
                                            {isMobile ? "App Screens & Workflow" : "Gallery"}
                                        </h2>
                                        <span className="text-xs font-mono text-muted-foreground">{project.images.length} screens</span>
                                    </div>

                                    {isMobile ? (
                                        /* Portrait Mobile App Screens (9:18.5 smartphone ratio) */
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
                                            {project.images.map((img, i) => (
                                                <div
                                                    key={i}
                                                    onClick={() => setSelectedImageIndex(i)}
                                                    className="group relative rounded-2xl overflow-hidden border border-border/80 bg-neutral-950 p-2 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col"
                                                >
                                                    <div className="relative aspect-[9/18.5] w-full rounded-xl overflow-hidden bg-black">
                                                        <LazyImage src={img} alt={`${project.title} - Screen ${i + 1}`} fit="cover" />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-3">
                                                            <span className="text-[11px] font-semibold text-white px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md flex items-center gap-1">
                                                                <Icon icon="mdi:fullscreen" className="w-3.5 h-3.5" /> Zoom
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 text-center">
                                                        <span className="text-[11px] font-mono text-muted-foreground group-hover:text-primary transition-colors">
                                                            Screen 0{i + 1}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        /* Desktop Gallery */
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                            {project.images.map((img, i) => {
                                                const screenshotGallery = project.id === "securecoating-vision";
                                                return (
                                                    <div
                                                        key={i}
                                                        onClick={() => setSelectedImageIndex(i)}
                                                        className={`relative overflow-hidden rounded-xl border border-border bg-muted cursor-pointer group hover:border-primary/50 transition-all ${screenshotGallery ? "aspect-video" : "aspect-[4/3]"}`}
                                                    >
                                                        <LazyImage src={img} alt={`${project.title} - ${i + 1}`} fit={screenshotGallery ? "contain" : "cover"} />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                            <div className="p-2 rounded-full bg-black/50 backdrop-blur-sm">
                                                                <Icon icon="mdi:fullscreen" className="w-5 h-5 text-white" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            )}
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

                                    {project.github && (
                                        <Button variant="outline" className="w-full gap-2 text-base h-12" asChild>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Github size={18} />
                                                View Source Code
                                            </a>
                                        </Button>
                                    )}

                                    {project.githubLinks?.map((link, idx) => (
                                        <Button key={idx} variant="outline" className="w-full gap-2 text-base h-12" asChild>
                                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                                                <Github size={18} />
                                                {link.label} Code
                                            </a>
                                        </Button>
                                    ))}

                                    {!project.github && !(project.githubLinks && project.githubLinks.length > 0) && (
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

            <ImageModal
                isOpen={selectedImageIndex !== null}
                images={galleryImages}
                initialIndex={selectedImageIndex || 0}
                imageAlt={project.title}
                onClose={() => setSelectedImageIndex(null)}
            />
        </div>
    );
};

export default ProjectDetailPage;
