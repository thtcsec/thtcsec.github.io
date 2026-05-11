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
    { icon: "logos:google-developers", href: siteConfig.social.gdg, label: "Google for Developers", color: "" },
  ];

  return (
    <section id="contact" className="cinema-section">
      <div className="container mx-auto px-4">
        <div className="cinema-reveal mb-16 text-center">
          <span className="cinema-kicker mb-4">
            Contact
          </span>
          <h2 className="cinema-title mb-4">
            Contact and networks
          </h2>
          <p className="cinema-subtitle">
            Reach me for collaborations, engineering opportunities, or security-focused projects.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div className="cinema-stagger space-y-6">
            {contactItems.map((item) => (
              <div
                key={item.title}
                className="cinema-card flex items-start gap-4 p-4 transition-colors hover:border-primary/50"
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

          <div>
            <h3 className="mb-2 text-xl font-bold text-foreground">Connect with me</h3>
            <p className="mb-6 text-muted-foreground">
              Platforms where I share work, experiments, and long-term learning.
            </p>

            <div className="cinema-stagger grid grid-cols-2 gap-4 sm:grid-cols-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cinema-card group flex flex-col items-center gap-2 rounded-xl p-4 transition-colors hover:border-primary/50"
                  aria-label={social.label}
                >
                  <Icon icon={social.icon} className="w-6 h-6" />
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center">
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
