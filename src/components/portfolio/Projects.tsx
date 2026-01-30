import { useState } from "react";
import { ExternalLink, Github, ChevronRight, ArrowRight } from "lucide-react";
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

const categoryEmoji: Record<string, string> = {
  ai: "🤖",
  web: "🌐",
  extension: "🎯",
  system: "🐧",
  desktop: "📖",
  mobile: "📱",
};

const Projects = () => {
  const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({});

  const handleImageLoad = (id: string) => {
    setImageLoaded(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my best projects
          </p>
        </div>

        {/* Projects Grid - Only Featured */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              imageLoaded={imageLoaded[project.id] || false}
              onImageLoad={() => handleImageLoad(project.id)}
            />
          ))}
        </div>

        {/* View All Button */}
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
      className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
    >
      <Link to={`/projects/${project.id}`} className="block relative overflow-hidden bg-muted cursor-pointer">
        {/* Placeholder/skeleton while loading */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted-foreground/10 animate-pulse" />
        )}
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full transition-all duration-500 group-hover:scale-110 ${imageLoaded ? "opacity-100" : "opacity-0"
            } ${project.category === 'mobile' ? 'object-contain bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900' : 'object-cover'}`}
          loading="lazy"
          onLoad={onImageLoad}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-xs font-medium text-primary">
          {categoryEmoji[project.category]} {categoryLabels[project.category]}
        </div>

        {/* Featured Badge */}
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
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Highlights if available */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="mb-4 space-y-1">
            {project.highlights.slice(0, 2).map((highlight, i) => (
              <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span className="line-clamp-1">{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Actions - Stop propagation to prevent modal open when clicking buttons */}
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

export default Projects;
