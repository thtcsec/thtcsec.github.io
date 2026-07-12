import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  MapPin,
  Printer,
  Briefcase,
  GraduationCap,
  Code2,
  Trophy,
  Award,
  ExternalLink,
  Mail,
  Phone
} from "lucide-react";
import { useEffect } from "react";
import ProjectHeader from "@/components/portfolio/ProjectHeader";

const ResumePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-20 px-4 md:px-8 print:p-0 print:bg-white print:text-black font-sans selection:bg-primary/30 overflow-x-hidden">
      {/* Main Navigation - Hidden in Print */}
      <div className="print:hidden">
        <ProjectHeader backLink="/" backLabel="Home" />
      </div>

      {/* Web Page Header Intro Section - Hidden in Print */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 print:hidden animate-fade-in">
        <div>
          <span className="cinema-kicker mb-3">Resume</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-primary">
            Curriculum Vitae
          </h1>
          <p className="text-muted-foreground mt-2 max-w-xl">
            My professional journey, academic background, and technical skillset.
          </p>
        </div>
        <Button onClick={handlePrint} size="lg" className="gap-2 shadow-lg hover:scale-105 transition-transform shrink-0">
          <Printer size={18} />
          Save as PDF / Print
        </Button>
      </div>

      {/* CV Sheet Block */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 print:flex print:flex-col print:gap-5 print:max-w-full print:m-0 print:p-0">

        {/* Left Column (Contact, Skills, Education, Awards) */}
        <div className="lg:col-span-1 space-y-8 print:space-y-5 print:w-full">

          {/* Personal Card & Contacts */}
          <div className="glass bg-card/40 border border-border/50 rounded-2xl p-6 shadow-sm hover:border-primary/20 transition-all duration-300 print:bg-transparent print:border-none print:shadow-none print:p-0 print:rounded-none">
            {/* Header info in print */}
            <div className="hidden print:block mb-4">
              <h1 className="text-2xl font-bold uppercase tracking-wider text-black">Trịnh Hoàng Tú</h1>
              <p className="text-sm font-medium text-neutral-600">Cybersecurity Student & Software Engineer</p>
            </div>

            {/* Info lists */}
            <div className="space-y-4 print:space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary print:text-black print:border-b print:border-black/20 print:pb-1">Info & Links</h2>

              <div className="space-y-3 print:space-y-1.5 text-sm">
                <div className="flex items-center gap-3 text-muted-foreground print:text-neutral-800">
                  <MapPin size={16} className="text-primary print:text-black shrink-0" />
                  <span>Ho Chi Minh City, Vietnam</span>
                </div>

                <a
                  href="https://github.com/thtcsec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors print:text-neutral-800"
                >
                  <Github size={16} className="text-primary print:text-black shrink-0" />
                  <span className="hover:underline">github.com/thtcsec</span>
                  <ExternalLink size={12} className="opacity-50 print:hidden" />
                </a>

                <a
                  href="https://linkedin.com/in/thtcsec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors print:text-neutral-800"
                >
                  <Linkedin size={16} className="text-primary print:text-black shrink-0" />
                  <span className="hover:underline">linkedin.com/in/thtcsec</span>
                  <ExternalLink size={12} className="opacity-50 print:hidden" />
                </a>
              </div>
            </div>
          </div>

          {/* Technical Skills Card */}
          <div className="glass bg-card/40 border border-border/50 rounded-2xl p-6 shadow-sm hover:border-primary/20 transition-all duration-300 print:bg-transparent print:border-none print:shadow-none print:p-0 print:rounded-none">
            <div className="flex items-center gap-2 mb-4 text-foreground print:text-black print:border-b print:border-black/20 print:pb-1 print:mb-2">
              <Code2 size={18} className="text-primary print:text-black" />
              <h2 className="text-lg font-bold tracking-tight print:text-sm print:uppercase print:tracking-wider">Technical Skills</h2>
            </div>

            <div className="space-y-4 print:space-y-2">
              {[
                { category: "Backend", skills: "ASP.NET Core, Node.js, REST APIs, SignalR, Java" },
                { category: "Frontend", skills: "React, TypeScript, Vite, Tailwind CSS" },
                { category: "Cloud / DevOps", skills: "Docker, Nginx, AWS, GCP, Terraform" },
                { category: "Databases", skills: "MSSQL, PostgreSQL, Firebase, Supabase" },
                { category: "Security", skills: "Suricata IDS, Wazuh, SOC/SOAR workflows, JWT" }
              ].map((item, idx) => (
                <div key={idx} className="space-y-1.5 print:space-y-0.5 text-sm">
                  <div className="font-semibold text-foreground print:text-black">{item.category}</div>
                  <div className="flex flex-wrap gap-1.5 print:block print:text-neutral-700">
                    {/* On web, show as pill badges */}
                    <span className="print:hidden flex flex-wrap gap-1.5">
                      {item.skills.split(", ").map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 text-xs rounded bg-muted/60 border border-border/80 text-foreground/80 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </span>
                    {/* On print, show as simple list text */}
                    <span className="hidden print:inline text-neutral-800 text-[13px]">{item.skills}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Card */}
          <div className="glass bg-card/40 border border-border/50 rounded-2xl p-6 shadow-sm hover:border-primary/20 transition-all duration-300 print:bg-transparent print:border-none print:shadow-none print:p-0 print:rounded-none">
            <div className="flex items-center gap-2 mb-4 text-foreground print:text-black print:border-b print:border-black/20 print:pb-1 print:mb-2">
              <GraduationCap size={18} className="text-primary print:text-black" />
              <h2 className="text-lg font-bold tracking-tight print:text-sm print:uppercase print:tracking-wider">Education</h2>
            </div>

            <div className="space-y-4 print:space-y-3">
              {/* HUFLIT */}
              <div className="relative">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="font-bold text-foreground print:text-black text-sm md:text-base leading-snug">HUFLIT</h3>
                  <span className="text-[11px] font-semibold text-muted-foreground print:text-neutral-600">2023 – 2027 (Expected)</span>
                </div>
                <div className="text-xs text-muted-foreground print:text-neutral-800 italic mb-1.5">
                  Bachelor of Cybersecurity | GPA: 3.50/4.0
                </div>
              </div>

              {/* Tsinghua University */}
              <div className="relative">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="font-bold text-foreground print:text-black text-sm md:text-base leading-snug">Tsinghua University</h3>
                  <span className="text-[11px] font-semibold text-muted-foreground print:text-neutral-600">Mar – May 2026</span>
                </div>
                <div className="text-xs text-muted-foreground print:text-neutral-800 italic mb-1.5">
                  AI & Innovation Digital Economy - Certificate Program (Completed)
                </div>
                <p className="text-xs text-muted-foreground print:text-neutral-700 leading-relaxed print:text-[12px]">
                  Completed specialized certificate coursework on AI, digital economics, and led team in developing cloud & security proof-of-concepts.
                </p>
              </div>
            </div>
          </div>

          {/* Awards Card */}
          <div className="glass bg-card/40 border border-border/50 rounded-2xl p-6 shadow-sm hover:border-primary/20 transition-all duration-300 print:bg-transparent print:border-none print:shadow-none print:p-0 print:rounded-none">
            <div className="flex items-center gap-2 mb-4 text-foreground print:text-black print:border-b print:border-black/20 print:pb-1 print:mb-2">
              <Trophy size={18} className="text-primary print:text-black" />
              <h2 className="text-lg font-bold tracking-tight print:text-sm print:uppercase print:tracking-wider">Awards</h2>
            </div>

            <ul className="space-y-2.5 text-xs text-muted-foreground print:text-neutral-800 list-disc pl-4 leading-relaxed print:text-[12px] print:space-y-1">
              <li>
                <strong className="text-foreground print:text-black">Ranked 2nd</strong> – MUGVN & MongoDB Mini Hackathon 2026 (Team Vector404)
              </li>
              <li>
                <strong className="text-foreground print:text-black">Top 10 Finalist</strong> – VinUniversity Datathon "The Gridbreaker" 2026 (Team: GenCore - Outperformed 500+ teams & 2,000 contestants)
              </li>
              <li>
                <strong className="text-foreground print:text-black">2nd Runner Up</strong> – GenAI Express Demo Day GDG On Campus SGU 2026
              </li>
              <li>
                <strong className="text-foreground print:text-black">Winner</strong> – HSU Vibe Coding Talents 2025
              </li>
              <li>
                Awarded "Outstanding Student of the Year 2023" by Bu Dang District
              </li>
            </ul>
          </div>

        </div>

        {/* Right Column (Summary, Work Experience, Projects, Certificates) */}
        <div className="lg:col-span-2 space-y-8 print:space-y-5 print:w-full">

          {/* Professional Summary */}
          <div className="glass bg-card/40 border border-border/50 rounded-2xl p-6 shadow-sm hover:border-primary/20 transition-all duration-300 print:bg-transparent print:border-none print:shadow-none print:p-0 print:rounded-none">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary print:text-black print:border-b print:border-black/20 print:pb-1 print:mb-2">Professional Summary</h2>
            <p className="text-sm md:text-[15px] leading-relaxed text-muted-foreground print:text-neutral-800 text-justify">
              Third-year Cybersecurity student specializing in <strong className="text-foreground dark:text-white print:text-black">C# Backend</strong>, <strong className="text-foreground dark:text-white print:text-black">Fullstack development</strong>, <strong className="text-foreground dark:text-white print:text-black">Software Engineering</strong>, and <strong className="text-foreground dark:text-white print:text-black">DevOps</strong>. Focus on building secure systems using <strong className="text-foreground dark:text-white print:text-black">ASP.NET Core</strong>, optimizing cloud deployments, and automating security integrations. Passionate about understanding how real-world systems are designed and operated with practical trade-offs between performance, reliability, and security constraints.
            </p>
          </div>

          {/* Work Experience */}
          <div className="glass bg-card/40 border border-border/50 rounded-2xl p-6 shadow-sm hover:border-primary/20 transition-all duration-300 print:bg-transparent print:border-none print:shadow-none print:p-0 print:rounded-none">
            <div className="flex items-center gap-2 mb-6 text-foreground print:text-black print:border-b print:border-black/20 print:pb-1 print:mb-3">
              <Briefcase size={18} className="text-primary print:text-black" />
              <h2 className="text-lg font-bold tracking-tight print:text-sm print:uppercase print:tracking-wider">Work Experience</h2>
            </div>

            <div className="relative border-l border-border/70 ml-2 pl-6 space-y-8 print:border-l print:border-black/20 print:ml-2 print:pl-4 print:space-y-4">
              {/* Grab */}
              <div className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full border border-primary bg-background shadow-sm print:bg-black print:border-black" />

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-foreground print:text-black">
                      Software Engineer (Backend) Intern
                    </h3>
                    <div className="text-sm text-primary font-semibold print:text-neutral-900">
                      Grab
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground print:text-neutral-700 italic font-medium">
                    Incoming | On-site
                  </div>
                </div>

                <ul className="list-disc pl-4 space-y-1.5 text-xs md:text-sm text-muted-foreground print:text-neutral-800 leading-relaxed print:text-[13px] print:space-y-0.5">
                  <li>Preparing to join Grab's regional engineering teams to design and develop high-performance, scalable backend services.</li>
                  <li>Collaborating with cross-functional teams to build robust APIs, microservices, and optimize cloud-native deployments.</li>
                </ul>

                <div className="mt-3 flex flex-wrap gap-1.5 print:hidden">
                  {["Java", "Docker", "Kubernetes", "Microservices", "REST APIs", "SQL"].map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[10px] rounded bg-muted text-muted-foreground border border-border/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Next Step Technology */}
              <div className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full border border-primary bg-background shadow-sm print:bg-black print:border-black" />

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-foreground print:text-black">
                      Cloud & AI Infrastructure Research Intern
                    </h3>
                    <div className="text-sm text-primary font-semibold print:text-neutral-900">
                      Next Step Technology Solutions
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground print:text-neutral-700 italic font-medium">
                    Jun 2026 – Present | Hybrid
                  </div>
                </div>

                <ul className="list-disc pl-4 space-y-1.5 text-xs md:text-sm text-muted-foreground print:text-neutral-800 leading-relaxed print:text-[13px] print:space-y-0.5">
                  <li>Research and prototype serverless integration pipelines using Cloudflare Workers, D1, R2, Vectorize, and Workers AI.</li>
                  <li>Design RAG-based knowledge retrieval workflows for internal documentation and cloud/security use cases.</li>
                  <li>Explore multi-tenant storage patterns, API routing strategies, and event-driven orchestration using Redis Streams.</li>
                  <li>Document cloud architecture options and technical trade-offs for Cloudflare-based solution proposals.</li>
                </ul>

                <div className="mt-3 flex flex-wrap gap-1.5 print:hidden">
                  {["Cloudflare Workers", "Cloudflare D1", "Cloudflare R2", "Cloudflare Vectorize", "Workers AI", "Redis Streams", "Serverless", "RAG"].map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[10px] rounded bg-muted text-muted-foreground border border-border/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* MVV Telecom */}
              <div className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full border border-primary bg-background shadow-sm print:bg-black print:border-black" />

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-foreground print:text-black">
                      Software Engineer
                    </h3>
                    <div className="text-sm text-primary font-semibold print:text-neutral-900">
                      MVV Telecom
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground print:text-neutral-700 italic font-medium">
                    Dec 2025 – Apr 2026 | Can Tho (Remote)
                  </div>
                </div>

                <ul className="list-disc pl-4 space-y-1.5 text-xs md:text-sm text-muted-foreground print:text-neutral-800 leading-relaxed print:text-[13px] print:space-y-0.5">
                  <li>Delivered real-time event monitoring features for multi-camera systems, improving system observability, security, and resource allocation in production environments.</li>
                  <li>Integrated AI inference services into the system to support automated detection and event generation workflows.</li>
                  <li>Configured system processing pipelines with controlled frame rates to balance detection accuracy and infrastructure resource usage.</li>
                  <li>Monitored system resource usage (CPU, GPU, memory) and adjusted processing configurations to optimize stability.</li>
                  <li>Deployed containerized services in a production-like environment using Docker and Nginx reverse proxy architecture.</li>
                </ul>

                <div className="mt-3 flex flex-wrap gap-1.5 print:hidden">
                  {["React", "TypeScript", "ASP.NET Core", "Python", "Docker", "Nginx", "SignalR", "Suricata", "Wazuh"].map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[10px] rounded bg-muted text-muted-foreground border border-border/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Selected Projects */}
          <div className="glass bg-card/40 border border-border/50 rounded-2xl p-6 shadow-sm hover:border-primary/20 transition-all duration-300 print:bg-transparent print:border-none print:shadow-none print:p-0 print:rounded-none">
            <div className="flex items-center gap-2 mb-6 text-foreground print:text-black print:border-b print:border-black/20 print:pb-1 print:mb-3">
              <Code2 size={18} className="text-primary print:text-black" />
              <h2 className="text-lg font-bold tracking-tight print:text-sm print:uppercase print:tracking-wider">Selected Projects</h2>
            </div>

            <div className="space-y-5 print:space-y-4">
              {/* CTSmartCam */}
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-sm md:text-base text-foreground print:text-black">
                    CTSmartCam – AI Camera Surveillance System
                  </h3>
                  <span className="text-xs text-muted-foreground print:text-neutral-600">Fullstack Developer</span>
                </div>
                <div className="text-[11px] text-primary print:text-neutral-900 font-medium">
                  React, TypeScript, ASP.NET Core (C#), Python, Docker, Nginx, Suricata, Wazuh
                </div>
                <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground print:text-neutral-800 leading-relaxed print:text-[12px] print:space-y-0.5">
                  <li>Built an AI-powered surveillance platform using event-driven microservices and Redis Streams.</li>
                  <li>Configured smart video processing pipelines via frame-rate gating and CPU/GPU resource isolation.</li>
                  <li>Orchestrated 10+ containerized services, monitoring 1-6 cameras concurrently with live alerts.</li>
                </ul>
              </div>

              {/* LMS */}
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-sm md:text-base text-foreground print:text-black">
                    toanvotruongtoan.com – AI-Powered LMS
                  </h3>
                  <span className="text-xs text-muted-foreground print:text-neutral-600">Fullstack & DevOps</span>
                </div>
                <div className="text-[11px] text-primary print:text-neutral-900 font-medium">
                  React, Vite, TypeScript, Supabase, PostgreSQL, Vercel
                </div>
                <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground print:text-neutral-800 leading-relaxed print:text-[12px] print:space-y-0.5">
                  <li>Architected and launched an LMS hosting concurrent classroom-scale student traffic.</li>
                  <li>Secured APIs with serverless Edge Functions, rate-limiting, and PostgreSQL Row-Level Security.</li>
                </ul>
              </div>

              {/* Multi-Cloud SOAR */}
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-sm md:text-base text-foreground print:text-black">
                    Multi-Cloud Serverless SOAR Platform
                  </h3>
                  <span className="text-xs text-muted-foreground print:text-neutral-600">DevOps & Cloud Security</span>
                </div>
                <div className="text-[11px] text-primary print:text-neutral-900 font-medium">
                  AWS, GCP, Terraform, Python, Serverless, Cloud Workflows, Step Functions, Cloud Run, ECS Fargate
                </div>
                <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground print:text-neutral-800 leading-relaxed print:text-[12px] print:space-y-0.5">
                  <li>Designed and implemented event-driven incident response pipelines using AWS GuardDuty, EventBridge, GCP Security Command Center, and Eventarc.</li>
                  <li>Automated containment workflows (IAM privilege revocation, network blocks, disk snapshots) via Step Functions and Cloud Workflows.</li>
                  <li>Provisioned full infrastructure using Terraform with modular multi-environment deployment.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div className="glass bg-card/40 border border-border/50 rounded-2xl p-6 shadow-sm hover:border-primary/20 transition-all duration-300 print:bg-transparent print:border-none print:shadow-none print:p-0 print:rounded-none">
            <div className="flex items-center gap-2 mb-4 text-foreground print:text-black print:border-b print:border-black/20 print:pb-1 print:mb-2">
              <Award size={18} className="text-primary print:text-black" />
              <h2 className="text-lg font-bold tracking-tight print:text-sm print:uppercase print:tracking-wider">Certificates</h2>
            </div>

            <ul className="space-y-2 text-xs text-muted-foreground print:text-neutral-800 print:text-[12px] print:space-y-1">
              {[
                { name: "Google Cloud Computing Foundations – Google Cloud", date: "Feb 2026", link: "https://www.credly.com/badges/ad399ad3-8827-4b99-8221-8fd248047d4a/linked_in?t=tarma7" },
                { name: "DevOps Track – Google Cloud x Hack2Skill", date: "Jan 2026", link: "https://certificate.hack2skill.com/user/academy2devops/2025H2S10GENAI-DE300881" },
                { name: "Networking Track – Google Cloud x Hack2Skill", date: "Jan 2026", link: "https://certificate.hack2skill.com/user/academy2networking/2025H2S10GENAI-NE300623" },
                { name: "Foundations of Cybersecurity – Google x Coursera", date: "May 2025", link: "https://www.coursera.org/verify/XP102V7M0CQC" },
                { name: "Google AI – Google", date: "Feb 2026", link: "https://coursera.org/share/c7724fa55611f8ebb8c0340ddb9664aa" }
              ].map((cert, idx) => (
                <li key={idx} className="flex justify-between items-center gap-4">
                  <span className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-semibold text-foreground print:text-black">{cert.name}</span>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 text-primary hover:underline font-medium text-[10px] print:hidden"
                    >
                      Verify <ExternalLink size={8} />
                    </a>
                  </span>
                  <span className="text-[10px] italic text-muted-foreground print:text-neutral-600 shrink-0 font-medium">{cert.date}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>

      {/* Web Footer - Hidden in Print */}
      <div className="max-w-6xl mx-auto mt-12 text-center pb-8 print:hidden animate-fade-in">
        <p className="text-muted-foreground text-xs">
          Click the "Save as PDF" button above to generate a high-quality resume optimized for paper.
        </p>
      </div>
    </div>
  );
};

export default ResumePage;
