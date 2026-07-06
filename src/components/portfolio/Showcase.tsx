import { useState } from "react";
import { ExternalLink, Github, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ImageModal from "@/components/ImageModal";
import CredlyBadge from "@/components/CredlyBadge";
import { featuredProjects, type Project } from "@/data/projects";
import { featuredCertificates, featuredAchievements } from "@/data/certificates";

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
  const [activeTab, setActiveTab] = useState<"projects" | "certificates">("projects");
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
          <span className="cinema-kicker mb-4">Showcase</span>
          <h2 className="cinema-title mb-4">Featured Work & Credentials</h2>
          <p className="cinema-subtitle">
            A selection of my best projects, verified certificates, and competition outcomes.
          </p>
        </div>

        {/* Tab Switcher Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl bg-muted/65 p-1.5 border border-border/50 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === "projects"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              💻 Featured Projects
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === "certificates"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              🏆 Certificates & Awards
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "projects" ? (
          <div className="animate-fade-in">
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
            <div className="text-center">
              <Button size="lg" variant="outline" asChild className="group">
                <Link to="/projects">
                  View All Projects
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className="animate-fade-in space-y-12">
            <div>
              <h3 className="mb-6 text-xl font-bold text-foreground">Certificates</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredCertificates.map((cert) => (
                  <div
                    key={cert.id}
                    className="cinema-card group relative cursor-pointer overflow-hidden transition-colors hover:border-primary/50"
                    onClick={() => {
                      if (!cert.credlyBadgeId) {
                        setModalImage({ src: cert.image, alt: cert.title });
                      }
                    }}
                  >
                    <div 
                      className="relative overflow-hidden aspect-[4/3] flex items-center justify-center bg-muted/20"
                      style={cert.credlyBadgeId ? { 
                        backgroundImage: 'url(/images/certificates/credly_frame.png)', 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center' 
                      } : {}}
                    >
                      {cert.credlyBadgeId ? (
                        <div className="relative z-10 scale-90 md:scale-105">
                          <CredlyBadge badgeId={cert.credlyBadgeId} />
                        </div>
                      ) : (
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/placeholder.svg";
                          }}
                        />
                      )}
                    </div>
                    <div className="p-4">
                      <div className="mb-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">{cert.issuer}</div>
                      <h4 className="text-base font-bold text-foreground transition-colors group-hover:text-primary">
                        {cert.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-xl font-bold text-foreground">Awards and prizes</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {featuredAchievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="cinema-card group flex cursor-pointer flex-col gap-4 overflow-hidden transition-colors hover:border-primary/50 md:flex-row"
                    onClick={() => setModalImage({ src: achievement.image, alt: achievement.title })}
                  >
                    <div className="md:w-48 aspect-video md:aspect-square overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-full object-contain bg-neutral-900 p-2 transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/placeholder.svg";
                        }}
                      />
                    </div>
                    <div className="p-4 flex flex-col justify-center flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{achievement.issuer}</div>
                        {achievement.link && (
                          <a 
                            href={achievement.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all hover:scale-110"
                            title="Visit project website"
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                      <h4 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                        {achievement.title}
                      </h4>
                      {achievement.description && (
                        <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
                          {achievement.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center pt-4">
              <Button size="lg" variant="outline" asChild className="group">
                <Link to="/certificates">
                  View All Certificates & Awards
                  <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Image Modal */}
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
          <span>{(project.github || (project.githubLinks && project.githubLinks.length > 0)) ? "Code available" : project.demo ? "Live demo" : "Private"}</span>
        </div>

        <div className="mt-5 flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
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

export default Showcase;
