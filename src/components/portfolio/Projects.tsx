import { useState } from "react";
import { ExternalLink, Github, ChevronRight, ChevronLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredProjects, type Project } from "@/data/projects";
import { Link } from "react-router-dom";

const categoryLabels: Record<string, string> = {
  all: "All",
  ai: "AI/ML",
  web: "Web",
  extension: "Extension",
  system: "System",
  desktop: "Desktop",
  mobile: "Mobile",
};

const Projects = () => {
  const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({});

  const handleImageLoad = (id: string) => {
    setImageLoaded(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="projects" className="cinema-section">
      <div className="container mx-auto px-4">
        <div className="cinema-reveal text-center mb-12">
          <span className="cinema-kicker mb-4">
            Projects
          </span>
          <h2 className="cinema-title mb-4">
            Featured Work
          </h2>
          <p className="cinema-subtitle">
            A selection of my best projects
          </p>
        </div>

        <div className="cinema-stagger grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              imageLoaded={imageLoaded[project.id] || false}
              onImageLoad={() => handleImageLoad(project.id)}
            />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild className="group">
            <Link to="/projects">
              View All Projects
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
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
    <div
      className="cinema-card group relative flex h-full flex-col overflow-hidden transition-colors hover:border-primary/40"
    >
      <div className="relative overflow-hidden bg-muted aspect-video">
        <Link to={`/projects/${project.id}`} className="block absolute inset-0 z-10 cursor-pointer">
          {/* Placeholder/skeleton while loading */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted-foreground/10 animate-pulse" />
          )}
          <img
            src={project.image}
            alt={`${project.title} Cover`}
            className={`w-full h-full transition-all duration-500 group-hover:scale-105 ${imageLoaded ? "opacity-100" : "opacity-0"
              } ${project.category === 'mobile' ? 'object-contain bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900' : 'object-cover'}`}
            loading="lazy"
            onLoad={onImageLoad}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-70 transition-opacity group-hover:opacity-80" />
        </Link>

        <div className="absolute top-4 left-4 rounded-full border border-border/60 bg-background/85 px-3 py-1 text-xs font-medium text-foreground/80 backdrop-blur-sm pointer-events-none">
          {categoryLabels[project.category]}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="cinema-meta flex items-center justify-between gap-3">
          <span>{categoryLabels[project.category]}</span>
          <span>{project.isPrivate ? "Private" : "Public"}</span>
        </div>

        <Link to={`/projects/${project.id}`}>
          <h3 className="mt-3 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
            {project.title}
          </h3>
        </Link>
        <p className="mt-3 text-sm leading-6 text-muted-foreground line-clamp-3">
          {project.description}
        </p>

        {/* Highlights if available */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="mt-4 space-y-2 border-t border-border pt-4">
            {project.highlights.slice(0, 2).map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="line-clamp-2 leading-5">{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack */}
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

        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span>{project.technologies.length} technologies listed</span>
          <span>{project.github ? "Code available" : project.demo ? "Live demo" : "Private"}</span>
        </div>

        {/* Actions - Stop propagation to prevent modal open when clicking buttons */}
        <div className="mt-5 flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
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
            <span className="flex items-center gap-1 rounded-md border border-border bg-muted/50 px-2 py-1 text-xs text-muted-foreground">
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

export default Projects;
