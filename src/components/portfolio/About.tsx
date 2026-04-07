import { siteConfig } from "@/data/config";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Professional Background
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about technology, security, and building innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Avatar */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
            <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border border-border bg-card">
              <img
                src="/images/avatar.jpg"
                alt={siteConfig.author}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border">
                <img
                  src="/images/huflit.png"
                  alt="HUFLIT"
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-medium text-foreground">{siteConfig.university}</p>
                  <p className="text-xs text-muted-foreground">{siteConfig.major}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">English Proficiency</p>
                  <p className="text-xs text-muted-foreground">B1 Level</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Cybersecurity Enthusiast & Developer
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I'm a cybersecurity enthusiast and developer currently pursuing my degree in Information Technology at HUFLIT.
              With a strong passion for both security and development, I love exploring the intersection of these fields.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I would love to expand my knowledge and contribute to the tech community through innovative projects and continuous learning.
              Currently focusing on DevSecOps practices and building secure, scalable applications.
            </p>
            <div className="pt-4">
              <a href="/about" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 min-w-[180px] hover:border-primary group">
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
