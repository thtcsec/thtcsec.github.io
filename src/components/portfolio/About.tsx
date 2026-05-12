import { siteConfig } from "@/data/config";

const About = () => {
  return (
    <section id="about" className="cinema-section">
      <div className="container mx-auto px-4">
        <div className="cinema-reveal mb-14 text-center">
          <span className="cinema-kicker mb-4">
            About
          </span>
          <h2 className="cinema-title mb-4">
            Background and operating principles
          </h2>
          <p className="cinema-subtitle">
            Security mindset, product execution, and the engineering decisions behind my work.
          </p>
        </div>

        {/* Compact layout: avatar + info card side by side */}
        <div className="cinema-card cinema-reveal rounded-3xl p-6 md:p-8 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
            {/* Small avatar */}
            <div className="flex-shrink-0">
              <img
                src="/images/avatar.jpg"
                alt={siteConfig.author}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover"
                loading="lazy"
              />
            </div>
            {/* Name + title */}
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                Software Engineer with a DevSecOps mindset
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I build scalable backend systems, robust CI/CD pipelines, and high-performance full-stack applications. I focus on clean code, automated deployments, and integrating security early into the development lifecycle.
              </p>
            </div>
          </div>

          {/* Info grid */}
          <div className="grid gap-4 border-y border-border py-5 text-sm sm:grid-cols-3 mb-5">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Focus</div>
              <div className="mt-1 font-medium text-foreground">Security + Systems</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">University</div>
              <div className="mt-1 font-medium text-foreground">{siteConfig.university} — {siteConfig.major}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Location</div>
              <div className="mt-1 font-medium text-foreground">{siteConfig.location}</div>
            </div>
          </div>

          {/* Bottom row: badges + CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                {siteConfig.university}
              </span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                Cybersecurity
              </span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                Cloud / DevSecOps
              </span>
            </div>
            <a href="/about" className="group inline-flex items-center whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:bg-accent hover:text-accent-foreground">
              <span className="mr-2">Read full journey</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
