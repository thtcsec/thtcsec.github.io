import { Mail, MapPin, GraduationCap, Github, Linkedin, Facebook, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/config";

const Contact = () => {
  const contactItems = [
    {
      icon: Mail,
      title: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: MapPin,
      title: "Location",
      value: siteConfig.location,
      href: "",
    },
    {
      icon: GraduationCap,
      title: "University",
      value: siteConfig.university,
      href: "https://huflit.edu.vn/",
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn", color: "hover:text-[#0A66C2]" },
    { icon: Github, href: siteConfig.social.github, label: "GitHub", color: "hover:text-foreground" },
    { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook", color: "hover:text-[#1877F2]" },
    {
      icon: () => (
        <img src="/images/threads.png" alt="Threads" className="w-6 h-6 object-contain" />
      ),
      href: siteConfig.social.threads,
      label: "Threads",
      color: ""
    },
    {
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      href: siteConfig.social.instagram,
      label: "Instagram",
      color: "hover:text-[#E4405F]"
    },
    { icon: MessageCircle, href: siteConfig.social.discord, label: "Discord", color: "hover:text-[#5865F2]" },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for opportunities or collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactItems.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-foreground">{item.title}</h4>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Connect With Me</h3>
            <p className="text-muted-foreground mb-6">
              Find me on these platforms
            </p>

            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group ${social.color}`}
                  aria-label={social.label}
                >
                  {typeof social.icon === 'function' ? (
                    <social.icon />
                  ) : (
                    <social.icon size={24} className="text-muted-foreground group-hover:text-inherit transition-colors" />
                  )}
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>

            {/* Additional Links */}
            <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <p className="text-sm text-muted-foreground mb-3">
                🎯 Also find me on:
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={siteConfig.social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full bg-card text-xs font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  LeetCode
                </a>
                <a
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full bg-card text-xs font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  TikTok
                </a>
                <a
                  href={siteConfig.social.gdg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full bg-card text-xs font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  GDG Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
