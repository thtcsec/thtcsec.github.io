import { useState } from "react";
import { ExternalLink, Github, ArrowRight, Trophy, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ImageModal from "@/components/ImageModal";
import { featuredProjects, allProjects, type Project, categoryLabels } from "@/data/projects";
import { topHonors } from "@/data/certificates";

const Showcase = () => {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);
  const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({});

  const handleImageLoad = (id: string) => {
    setImageLoaded(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="showcase" className="cinema-section py-20 bg-background/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="cinema-reveal text-center mb-12">
          <span className="cinema-kicker mb-4 flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-amber-500 animate-pulse" />
            Engineering & Honors
          </span>
          <h2 className="cinema-title mb-4">
            Featured Systems & Honors
          </h2>
          <p className="cinema-subtitle">
            Production-grade architecture, research-grade engineering, and verified competition outcomes.
          </p>
        </div>

        {/* 🏆 Key Competition Honors: Clean Images Without Chips */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 shrink-0">
                <Trophy size={22} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold text-foreground tracking-tight">
                  Key Competition Honors
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                  National & International awards in Quantum Computing, AI Security, and AutoTech
                </p>
              </div>
            </div>

            <Link
              to="/certificates"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline shrink-0"
            >
              <span>View All 12+ Awards & Certs</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* 4 Cards Grid - Fully Balanced, Clean Visuals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {topHonors.map((honor) => (
              <div
                key={honor.id}
                onClick={() => setModalImage({ src: honor.image, alt: honor.title })}
                className="group relative rounded-2xl border border-border/80 bg-card/60 hover:bg-card hover:border-amber-500/50 p-3.5 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-full pointer-events-none" />

                <div>
                  {/* Clean Certificate Picture - No floating chips */}
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black/80 mb-3 border border-border/60">
                    <img
                      src={honor.image}
                      alt={honor.title}
                      className="w-full h-full object-contain p-1.5 group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                      {honor.badge}
                    </span>
                    <span className="text-[11px] font-mono text-muted-foreground truncate">
                      {honor.issuer}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                    {honor.title}
                  </h4>
                </div>

                <div className="mt-3.5 pt-2.5 border-t border-border/50 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground/70 font-mono text-[11px]">Inspect proof</span>
                  <span className="text-amber-600 dark:text-amber-400 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1 text-[11px]">
                    View Proof <ArrowRight size={11} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 💻 Featured Engineering Projects */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="cinema-kicker mb-2">Core Engineering</span>
              <h3 className="text-xl md:text-2xl font-extrabold text-foreground tracking-tight">
                Featured Production Systems
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">
                Scalable enterprise SaaS, quantum-classical hybrid engines, and research architectures
              </p>
            </div>
            <Button variant="outline" size="sm" asChild className="hidden sm:inline-flex shrink-0">
              <Link to="/projects">
                View All Projects ({allProjects.length})
                <ArrowRight size={14} className="ml-1.5" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.slice(0, 3).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                imageLoaded={imageLoaded[project.id] || false}
                onImageLoad={() => handleImageLoad(project.id)}
              />
            ))}
          </div>

          {/* Bottom Call to Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button size="lg" asChild className="group">
              <Link to="/projects">
                Explore All Projects ({allProjects.length})
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/certificates">
                View All Certificates & Honors
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Image Modal Lightbox */}
      <ImageModal
        isOpen={!!modalImage}
        imageSrc={modalImage?.src || ""}
        imageAlt={modalImage?.alt || ""}
        onClose={() => setModalImage(null)}
      />
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  imageLoaded: boolean;
  onImageLoad: () => void;
}

const ProjectCard = ({ project, imageLoaded, onImageLoad }: ProjectCardProps) => {
  return (
    <div className="cinema-card group relative flex h-full flex-col overflow-hidden transition-colors hover:border-primary/40">
      {/* Clean Cover Image - No floating chips */}
      <div className="relative overflow-hidden bg-muted aspect-video">
        <Link to={`/projects/${project.id}`} className="block absolute inset-0 z-10 cursor-pointer">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted-foreground/10 animate-pulse" />
          )}
          {project.isMobileApp ? (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-zinc-900 to-black p-2.5">
              <div className="h-full aspect-[9/18.5] rounded-xl overflow-hidden border-2 border-neutral-700/80 bg-black shadow-lg">
                <img
                  src={project.image}
                  alt={`${project.title} Cover`}
                  className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  loading="lazy"
                  onLoad={onImageLoad}
                />
              </div>
            </div>
          ) : (
            <img
              src={project.image}
              alt={`${project.title} Cover`}
              className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
              onLoad={onImageLoad}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-70 transition-opacity group-hover:opacity-80 pointer-events-none" />
        </Link>
      </div>

      <div className="flex flex-1 flex-col p-6">
        {/* Clean meta line - No chip on image */}
        <div className="cinema-meta flex items-center justify-between gap-3 text-xs">
          <span className="font-mono text-[11px] text-primary font-medium px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
            {categoryLabels[project.category] || project.category}
          </span>
          {project.awardBadge ? (
            <span className="font-mono text-[11px] text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1">
              <Trophy size={11} className="text-amber-500" />
              {project.awardBadge}
            </span>
          ) : (
            <span className="flex items-center gap-1.5 font-mono text-[11px]">
              <span className={`w-1.5 h-1.5 rounded-full ${project.isPrivate ? "bg-amber-500/80" : "bg-emerald-500/80"}`} />
              {project.isPrivate ? "Private Repo" : "Public Repo"}
            </span>
          )}
        </div>

        <Link to={`/projects/${project.id}`}>
          <h3 className="mt-3 text-xl font-bold text-foreground transition-colors group-hover:text-primary leading-snug line-clamp-2">
            {project.title}
          </h3>
        </Link>
        <p className="mt-2.5 text-sm leading-6 text-muted-foreground line-clamp-3">
          {project.description}
        </p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="mt-4 space-y-1.5 border-t border-border/70 pt-3.5">
            {project.highlights.slice(0, 2).map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                <span className="line-clamp-2 leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border/80 bg-muted/60 px-2 py-0.5 text-[11px] font-medium text-foreground/80 font-mono"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="rounded-md border border-border/80 bg-muted/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground font-mono">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="mt-auto pt-5 flex items-center justify-between gap-2 border-t border-border/40" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center gap-2">
            {project.github && (
              <Button variant="outline" size="sm" asChild className="gap-1.5 h-8 text-xs">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github size={14} />
                  Code
                </a>
              </Button>
            )}

            {project.githubLinks?.map((link, idx) => (
              <Button key={idx} variant="outline" size="sm" asChild className="gap-1.5 h-8 text-xs">
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <Github size={14} />
                  {link.label}
                </a>
              </Button>
            ))}

            {project.demo && (
              <Button size="sm" asChild className="gap-1.5 h-8 text-xs">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={14} />
                  Demo
                </a>
              </Button>
            )}
          </div>

          <Button variant="ghost" size="sm" asChild className="gap-1 text-xs text-muted-foreground hover:text-foreground h-8 px-2">
            <Link to={`/projects/${project.id}`}>
              Details
              <ArrowRight size={12} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
