import { useState } from "react";
import { Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { Icon } from "@iconify/react";

const calculateDuration = (period: string): string => {
  const normalizedPeriod = period.replace(/[\u2013\u2014]/g, "-");
  const parts = normalizedPeriod.split("-").map(p => p.trim());
  if (parts.length < 2) return "";

  const startPart = parts[0];
  const endPart = parts[1];

  const parseMonthYear = (str: string) => {
    if (str.toLowerCase() === "present") {
      return new Date();
    }
    const tokens = str.split(/\s+/);
    if (tokens.length < 2) return new Date();
    const months: Record<string, number> = {
      Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
      Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
    };
    const monthStr = tokens[0].substring(0, 3);
    const month = months[monthStr] !== undefined ? months[monthStr] : 0;
    const year = parseInt(tokens[1], 10);
    return new Date(year, month, 1);
  };

  try {
    const start = parseMonthYear(startPart);
    const end = parseMonthYear(endPart);
    const yearDiff = end.getFullYear() - start.getFullYear();
    const monthDiff = end.getMonth() - start.getMonth();
    const totalMonths = yearDiff * 12 + monthDiff + 1;

    if (totalMonths <= 0) return "1 mo";

    const years = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;

    const result: string[] = [];
    if (years > 0) {
      result.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
    }
    if (remainingMonths > 0) {
      result.push(`${remainingMonths} ${remainingMonths === 1 ? "mo" : "mos"}`);
    }
    return result.length > 0 ? result.join(" ") : "1 mo";
  } catch (e) {
    return "";
  }
};

const Experience = () => {
  const experiences = [
    {
      company: "Next Step Technology",
      imageLogo: "/images/next-step.png",
      isBrandLogo: false,
      location: "Ho Chi Minh City (Hybrid)",
      period: "Jun 2026 – Present",
      roles: [
        {
          title: "Cloud & AI Infrastructure Research Intern",
          period: "Jun 2026 – Present",
          highlights: [
            "Research and prototype serverless integration pipelines using Cloudflare Workers, D1, R2, Vectorize, and Workers AI.",
            "Design RAG-based knowledge retrieval workflows for internal documentation and cloud/security use cases.",
            "Explore multi-tenant storage patterns, API routing strategies, and event-driven orchestration using Redis Streams.",
            "Document cloud architecture options and technical trade-offs for Cloudflare-based solution proposals."
          ],
          technologies: ["Cloudflare Workers", "Cloudflare D1", "Cloudflare R2", "Cloudflare Vectorize", "Workers AI", "Redis Streams", "Serverless", "RAG"]
        }
      ]
    },
    {
      company: "AWS Study Group VN",
      imageLogo: "/images/forums/aws-fcaj.png",
      isBrandLogo: false,
      location: "Ho Chi Minh City (Hybrid)",
      period: "Sep 2025 – Present",
      roles: [
        {
          title: "FCAJ Cloud Trainee - Cloud Security Builder",
          period: "Sep 2025 – Present",
          highlights: [
            "Designed and implemented a Serverless Security Orchestration, Automation, and Response (SOAR) architecture using AWS native services.",
            "Orchestrated automated incident containment workflows using AWS Step Functions, AWS Lambda, EventBridge, and SQS.",
            "Built event-driven security pipelines integrating AWS GuardDuty for continuous threat detection and real-time response.",
            "Developed automated playbooks for resource isolation, security group updates, and IAM privilege containment."
          ],
          technologies: ["AWS", "Terraform", "Serverless", "Step Functions", "Lambda", "GuardDuty", "EventBridge"]
        }
      ]
    },
    {
      company: "MVV Telecom",
      logo: "mdi:server-network-outline",
      logoColor: "text-primary",
      isBrandLogo: false,
      location: "Can Tho (Remote)",
      period: "Dec 2025 – Apr 2026",
      roles: [
        {
          title: "Software Engineer",
          period: "Dec 2025 – Apr 2026",
          highlights: [
            "Delivered real-time event monitoring features for multi-camera systems, improving system observability, security, and resource allocation in production environments.",
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

  // State to track expanded cards. By default, all cards are collapsed.
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  const toggleExpand = (idx: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <section id="experience" className="cinema-section py-20">
      <div className="container mx-auto px-4">
        <div className="cinema-reveal text-center mb-16">
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

        {/* Unified Vertical Timeline Layout */}
        <div className="max-w-4xl mx-auto relative border-l-2 border-border/80 pl-6 md:pl-10 ml-4 md:ml-auto space-y-12">
          {experiences.map((exp, idx) => {
            const isExpanded = expandedCards[idx];
            return (
              <div key={idx} className="relative cinema-reveal">
                {/* Timeline marker */}
                <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 rounded-full border-4 border-primary bg-background flex items-center justify-center shadow-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                </div>

                {/* Card Container */}
                <div 
                  onClick={() => toggleExpand(idx)}
                  className="cinema-card p-6 md:p-8 hover:border-primary/40 transition-colors duration-300 cursor-pointer group"
                >
                  {/* Company Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/50 pb-5 mb-6">
                    <div className="flex items-center gap-4">
                      {/* Logo Container */}
                      <div className="w-12 h-12 rounded-xl bg-muted/50 border border-border flex items-center justify-center flex-shrink-0">
                        {exp.imageLogo ? (
                          <img src={exp.imageLogo} alt={exp.company} className="w-8 h-8 object-contain" />
                        ) : exp.isBrandLogo ? (
                          <Icon icon={exp.logo} className={`w-8 h-8 ${exp.logoColor}`} />
                        ) : (
                          <Icon icon={exp.logo} className={`w-7 h-7 ${exp.logoColor}`} />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-extrabold text-foreground tracking-tight group-hover:text-primary transition-colors">
                          {exp.company}
                        </h3>
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-0.5">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-xs font-semibold text-primary">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <div className="text-muted-foreground group-hover:text-primary transition-colors">
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </div>
                    </div>
                  </div>

                  {/* Roles List */}
                  <div className="space-y-8">
                    {exp.roles.map((role, rIdx) => (
                      <div key={rIdx} className="relative">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                          <h4 className="text-lg md:text-xl font-bold text-foreground">
                            {role.title}
                          </h4>
                          <span className="text-xs md:text-sm text-muted-foreground italic font-medium">
                            {calculateDuration(role.period)}
                          </span>
                        </div>

                        {/* Collapsible bullet highlights */}
                        <div className={`grid transition-all duration-300 ease-in-out ${
                          isExpanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                        }`}>
                          <div className="overflow-hidden">
                            <ul className="space-y-2.5">
                              {role.highlights.map((highlight, hIdx) => (
                                <li key={hIdx} className="flex items-start gap-2.5 text-sm sm:text-[15px] text-muted-foreground">
                                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                  <span className="leading-relaxed">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2" onClick={(e) => e.stopPropagation()}>
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
