import { useState } from "react";
import { ExternalLink, Github, ArrowRight, Award, Trophy, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ImageModal from "@/components/ImageModal";
import { featuredProjects, type Project } from "@/data/projects";
import { featuredAchievements } from "@/data/certificates";

const categoryLabels: Record<string, string> = {
  all: "All",
  ai: "AI/ML",
  web: "Web",
  extension: "Extension",
  system: "System",
  desktop: "Desktop",
  mobile: "Mobile",
};

const Showcase = () => {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);
  const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({});

  const handleImageLoad = (id: string) => {
    setImageLoaded(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="showcase" className="cinema-section py-20 bg-background/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="cinema-reveal text-center mb-12">
          <span className="cinema-kicker mb-4 flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-amber-500 animate-pulse" />
            Spotlight & Engineering Portfolio
          </span>
          <h2 className="cinema-title mb-4">
            Honors & Featured Projects
          </h2>
          <p className="cinema-subtitle">
            Verified competition awards and production-grade engineering systems.
          </p>
        </div>

        {/* 🏆 TOP HIGHLIGHTS: Key Achievements & Honors Spotlight */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                <Trophy size={20} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold text-foreground tracking-tight">
                  Key Competition Honors
                </h3>
                <p className="text-xs text-muted-foreground">
                  Recognized nationally and internationally in AI, Quantum, and Cybersecurity
                </p>
              </div>
            </div>
            <Link
              to="/certificates"
              className="text-xs font-semibold text-primary hover:underline hidden sm:inline-flex items-center gap-1"
            >
              View all awards <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredAchievements.map((achievement) => (
              <div
                key={achievement.id}
                onClick={() => setModalImage({ src: achievement.image, alt: achievement.title })}
                className="group relative rounded-2xl border border-amber-500/25 bg-card/60 hover:bg-card/90 hover:border-amber-500/60 p-4 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-500/10 via-amber-500/5 to-transparent rounded-bl-full pointer-events-none" />

                <div>
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black/80 mb-3 border border-border/50">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/30 text-[10px] font-bold uppercase tracking-wider mb-2">
                    <Award size={12} />
                    <span>{achievement.issuer.split(',')[0]}</span>
                  </div>

                  <h4 className="text-sm font-extrabold text-foreground group-hover:text-amber-500 transition-colors leading-snug line-clamp-2">
                    {achievement.title}
                  </h4>
                </div>

                <p className="text-xs text-muted-foreground line-clamp-2 mt-2 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 💻 SECOND SECTION: Featured Engineering Projects */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-foreground tracking-tight">
                Featured Engineering Systems
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                Production-grade architecture, edge AI, and fullstack platforms
              </p>
            </div>
            <Button variant="outline" size="sm" asChild className="hidden sm:inline-flex">
              <Link to="/projects">
                View All Projects ({featuredProjects.length}+)
                <ArrowRight size={14} className="ml-1.5" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.slice(0, 6).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                imageLoaded={imageLoaded[project.id] || false}
                onImageLoad={() => handleImageLoad(project.id)}
              />
            ))}
          </div>

          {/* Bottom Call to Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button size="lg" asChild className="group">
              <Link to="/projects">
                Explore All Projects
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/certificates">
                View All Certificates & Awards
              </Link>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <Link to="/publications">
                Research Publications
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
      <div className="relative overflow-hidden bg-muted aspect-video">
        <Link to={`/projects/${project.id}`} className="block absolute inset-0 z-10 cursor-pointer">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted-foreground/10 animate-pulse" />
          )}
          <img
            src={project.image}
            alt={`${project.title} Cover`}
            className={`w-full h-full transition-all duration-500 group-hover:scale-105 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            } ${project.category === 'mobile' ? 'object-contain bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900' : 'object-cover'}`}
            loading="lazy"
            onLoad={onImageLoad}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-70 transition-opacity group-hover:opacity-80" />
        </Link>

        <div className="absolute top-3 left-3 rounded-full border border-border/60 bg-background/85 px-3 py-1 text-xs font-medium text-foreground/80 backdrop-blur-sm pointer-events-none">
          {categoryLabels[project.category]}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="cinema-meta flex items-center justify-between gap-3">
          <span>{categoryLabels[project.category]}</span>
          <span>{project.isPrivate ? "Private Repo" : "Public Repo"}</span>
        </div>

        <Link to={`/projects/${project.id}`}>
          <h3 className="mt-3 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
            {project.title}
          </h3>
        </Link>
        <p className="mt-3 text-sm leading-6 text-muted-foreground line-clamp-3">
          {project.description}
        </p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="mt-4 space-y-2 border-t border-border pt-4">
            {project.highlights.slice(0, 2).map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span className="line-clamp-2 leading-5">{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-muted px-2 py-1 text-xs font-medium text-foreground/80"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="rounded-md border border-border bg-muted px-2 py-1 text-xs font-medium text-foreground/80">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center gap-3 pt-2" onClick={(e) => e.stopPropagation()}>
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

          {project.isPrivate && (
            <span className="flex items-center gap-1 rounded-md border border-border bg-muted/50 px-2 py-1 text-xs text-muted-foreground">
              Private
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
        </div>
      </div>
    </div>
  );
};

export default Showcase;
