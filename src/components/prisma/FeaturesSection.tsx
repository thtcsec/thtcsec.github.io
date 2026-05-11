import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight, Github, ExternalLink, Lock } from "lucide-react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";
import { featuredProjects } from "@/data/projects";

interface FeatureCardProps {
  children: React.ReactNode;
  index: number;
  className?: string;
}

const FeatureCard = ({ children, index, className = "" }: FeatureCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.08,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
};

const FeaturesSection = () => {
  // Take first 6 featured projects
  const displayProjects = featuredProjects.slice(0, 6);

  return (
    <section id="projects" className="min-h-screen bg-black relative px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 lg:py-36">
      {/* Noise background */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-14 md:mb-16 text-center">
          <WordsPullUpMultiStyle
            segments={[
              {
                text: "Projects built with security-first mindset.",
                className: "font-normal",
              },
            ]}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-2"
          />
          <WordsPullUpMultiStyle
            segments={[
              {
                text: "From cloud platforms to AI systems.",
                className: "font-normal text-gray-500",
              },
            ]}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal"
          />
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {displayProjects.map((project, index) => (
            <FeatureCard
              key={project.id}
              index={index}
              className="bg-[#212121] rounded-2xl overflow-hidden flex flex-col group"
            >
              {/* Project Image */}
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                    project.category === "mobile"
                      ? "object-contain bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]"
                      : "object-cover"
                  }`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#212121] via-transparent to-transparent" />

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[10px] sm:text-xs font-medium" style={{ color: "#E1E0CC" }}>
                    {project.category === "ai" && "🤖 AI/ML"}
                    {project.category === "web" && "🌐 Web"}
                    {project.category === "system" && "🐧 System"}
                    {project.category === "mobile" && "📱 Mobile"}
                    {project.category === "extension" && "🎯 Extension"}
                    {project.category === "desktop" && "📖 Desktop"}
                  </span>
                </div>

                {project.isPrivate && (
                  <div className="absolute top-3 right-3">
                    <span className="p-1.5 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center">
                      <Lock className="w-3 h-3 text-gray-400" />
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 flex flex-col flex-1">
                <h3 className="text-sm sm:text-base font-medium mb-2" style={{ color: "#E1E0CC" }}>
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="space-y-1.5 mb-4 flex-1">
                    {project.highlights.slice(0, 3).map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400 text-[11px] sm:text-xs line-clamp-1">{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-black/40 text-gray-400 text-[10px] sm:text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-black/40 text-gray-500 text-[10px] sm:text-xs">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary text-xs hover:opacity-80 transition-opacity"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary text-xs hover:opacity-80 transition-opacity"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Demo
                    </a>
                  )}
                  <a
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1 text-primary text-xs ml-auto hover:opacity-80 transition-opacity"
                  >
                    Details
                    <ArrowRight className="w-3.5 h-3.5" style={{ transform: "rotate(-45deg)" }} />
                  </a>
                </div>
              </div>
            </FeatureCard>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10 sm:mt-14">
          <a
            href="/projects"
            className="group inline-flex items-center gap-1.5 hover:gap-3 bg-primary rounded-full pl-5 sm:pl-6 pr-1.5 py-1.5 transition-all duration-300"
          >
            <span className="text-black font-medium text-sm sm:text-base">
              View all projects
            </span>
            <span className="bg-black rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <ArrowRight className="w-4 h-4" style={{ color: "#E1E0CC" }} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
