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

        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="cinema-reveal relative" style={{ ["--reveal-delay" as string]: "70ms" }}>
            <div className="cinema-card relative mx-auto aspect-square max-w-md overflow-hidden rounded-3xl">
              <img
                src="/images/avatar.jpg"
                alt={siteConfig.author}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="cinema-stagger mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                <img
                  src="/images/huflit.png"
                  alt="HUFLIT"
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-medium text-foreground">{siteConfig.university}</p>
                  <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{siteConfig.major}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">English Proficiency</p>
                  <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">B1 level</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cinema-card cinema-reveal rounded-3xl p-7 md:p-8" style={{ ["--reveal-delay" as string]: "140ms" }}>
            <h3 className="mb-4 text-2xl font-bold text-foreground">
              Software Engineer with a DevSecOps mindset
            </h3>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              I build scalable backend systems, robust CI/CD pipelines, and high-performance full-stack applications. I focus on clean code, automated deployments, and integrating security early into the development lifecycle.
            </p>
            <div className="grid gap-4 border-y border-border py-5 text-sm md:grid-cols-3">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Current focus</div>
                <div className="mt-1 font-medium text-foreground">DevSecOps</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Academic</div>
                <div className="mt-1 font-medium text-foreground">{siteConfig.university}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Location</div>
                <div className="mt-1 font-medium text-foreground">{siteConfig.location}</div>
              </div>
            </div>
            <div className="pt-6">
              <a href="/about" className="group inline-flex min-w-[190px] items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:border-primary hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <span className="mr-2">Read My Full Journey</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
