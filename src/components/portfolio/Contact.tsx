import { Icon } from "@iconify/react";
import { siteConfig } from "@/data/config";

const Contact = () => {
  const contactItems = [
    {
      icon: "mdi:email",
      title: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: "mdi:map-marker",
      title: "Location",
      value: siteConfig.location,
      href: "",
    },
    {
      icon: "mdi:school",
      title: "University",
      value: siteConfig.university,
      href: "https://huflit.edu.vn/",
    },
  ];

  const socialLinks = [
    { icon: "logos:linkedin-icon", href: siteConfig.social.linkedin, label: "LinkedIn", color: "" },
    { icon: "mdi:github", href: siteConfig.social.github, label: "GitHub", color: "" },
    { icon: "logos:facebook", href: siteConfig.social.facebook, label: "Facebook", color: "" },
    { icon: "simple-icons:threads", href: siteConfig.social.threads, label: "Threads", color: "" },
    { icon: "skill-icons:instagram", href: siteConfig.social.instagram, label: "Instagram", color: "" },
    { icon: "logos:discord-icon", href: siteConfig.social.discord, label: "Discord", color: "" },
    { icon: "simple-icons:leetcode", href: siteConfig.social.leetcode, label: "LeetCode", color: "" },
    { icon: "logos:tiktok-icon", href: siteConfig.social.tiktok, label: "TikTok", color: "" },
    { icon: "logos:google-developers", href: siteConfig.social.gdg, label: "GDG", color: "" },
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
                  <Icon icon={item.icon} className="w-6 h-6" />
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
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group`}
                  aria-label={social.label}
                >
                  <Icon icon={social.icon} className="w-6 h-6" />
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
