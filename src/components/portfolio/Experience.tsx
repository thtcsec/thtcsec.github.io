import { Calendar, MapPin } from "lucide-react";
import { Icon } from "@iconify/react";

const Experience = () => {
  const experiences = [
    {
      company: "Cloudflare",
      logo: "simple-icons:cloudflare",
      logoColor: "text-[#F38020]",
      isBrandLogo: true,
      location: "Ho Chi Minh City (Remote)",
      period: "Jun 2026 – Present",
      roles: [
        {
          title: "Cloud Solutions Research Intern",
          period: "Jun 2026 – Present",
          description: "Researched Cloudflare's global network products and developer platform to design, prototype, and build secure cloud-native architectures.",
          highlights: [
            "Researched Cloudflare security and developer products to design secure, cloud-native proof-of-concept applications.",
            "Evaluated and configured cloud security configurations including WAF, Zero Trust access policies, and DNS.",
            "Built functional web application prototypes using Cloudflare Workers, Pages, and storage solutions (R2/D1).",
            "Collaborated on brainstorming technical architectures, system scaling, and cloud product use cases."
          ],
          technologies: ["Zero Trust", "DNS", "CDN", "WAF", "Cloudflare Workers", "Cloudflare Pages"]
        }
      ]
    },
    {
      company: "MVV Telecom",
      logo: "mdi:server-network-outline",
      logoColor: "text-primary",
      isBrandLogo: false,
      location: "Can Tho",
      period: "Dec 2025 – Apr 2026",
      roles: [
        {
          title: "Software Engineer",
          period: "Dec 2025 – Apr 2026",
          description: "Delivered real-time event monitoring features for multi-camera systems, improving system observability, security, and resource allocation in production environments.",
          highlights: [
            "Delivered real-time event monitoring features for multi-camera systems, improving system observability and responsiveness.",
            "Integrated AI inference services into the system to support automated detection and event generation workflows.",
            "Configured system processing pipelines with controlled frame rates to balance detection accuracy and infrastructure resource usage.",
            "Monitored system resource usage (CPU, GPU, memory) and adjusted processing configurations to optimize stability.",
            "Deployed containerized services in a production-like environment using Docker and Nginx reverse proxy architecture."
          ],
          technologies: ["React", "TypeScript", "ASP.NET Core", "Python", "Docker", "Nginx", "SignalR", "Suricata", "Wazuh"]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="cinema-section">
      <div className="container mx-auto px-4">
        <div className="cinema-reveal text-center mb-12">
          <span className="cinema-kicker mb-4">
            Journey
          </span>
          <h2 className="cinema-title mb-4">
            Work Experience
          </h2>
          <p className="cinema-subtitle text-base sm:text-lg">
            Professional roles and technical contract projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex flex-col h-full">
              <div
                className="cinema-card cinema-reveal group relative flex flex-col overflow-hidden p-6 md:p-8 transition-colors hover:border-primary/40 h-full flex-grow"
              >
                {/* Company Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/50 pb-5 mb-6">
                  <div className="flex items-center gap-4">
                    {/* Logo Container */}
                    <div className="w-12 h-12 rounded-xl bg-muted/50 border border-border flex items-center justify-center flex-shrink-0">
                      {exp.isBrandLogo ? (
                        <Icon icon={exp.logo} className={`w-8 h-8 ${exp.logoColor}`} />
                      ) : (
                        <Icon icon={exp.logo} className={`w-7 h-7 ${exp.logoColor}`} />
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-foreground tracking-tight">
                        {exp.company}
                      </h3>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-0.5">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-xs font-semibold text-primary">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Roles List */}
                <div className="relative pl-4 sm:pl-6 border-l-2 border-border/60 ml-3 sm:ml-6 space-y-10 flex-grow">
                  {exp.roles.map((role, rIdx) => (
                    <div key={rIdx} className="relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-[25px] sm:-left-[33px] top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background flex items-center justify-center shadow-[0_0_8px_rgba(var(--primary),0.3)]">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                        <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {role.title}
                        </h4>
                        <span className="text-sm text-muted-foreground italic font-medium">
                          {role.period}
                        </span>
                      </div>

                      {role.description && (
                        <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {role.description}
                        </p>
                      )}

                      <ul className="mt-4 space-y-2.5">
                        {role.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5 text-sm sm:text-[15px] text-muted-foreground">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {role.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-border/80 bg-muted/40 px-2.5 py-1 text-xs font-semibold text-foreground/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
