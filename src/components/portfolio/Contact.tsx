import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { siteConfig } from "@/data/config";

const Contact = () => {
  const socialLinks = [
    { id: "linkedin", icon: "logos:linkedin-icon", href: siteConfig.social.linkedin, label: "LinkedIn" },
    { id: "github", icon: "mdi:github", href: siteConfig.social.github, label: "GitHub" },
    { id: "leetcode", icon: "simple-icons:leetcode", href: siteConfig.social.leetcode, label: "LeetCode" },
    { id: "tiktok", icon: "simple-icons:tiktok", href: siteConfig.social.tiktok, label: "TikTok" },
    { id: "gdg", icon: "simple-icons:google", href: siteConfig.social.gdg, label: "Google for Developers" },
    { id: "aws", icon: "simple-icons:amazonaws", href: siteConfig.social.aws, label: "AWS Skill Builder" },
  ];

  return (
    <section id="contact" className="cinema-section py-20">
      <div className="container mx-auto px-4">
        <div className="cinema-reveal mb-12 text-center">
          <span className="cinema-kicker mb-4">
            Contact
          </span>
          <h2 className="cinema-title mb-4">
            Connect and collaborate
          </h2>
          <p className="cinema-subtitle max-w-xl mx-auto">
            Platforms where I share my codebase repositories, cloud solutions architectures, and long-term learning journeys.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="cinema-stagger grid grid-cols-2 gap-4 sm:grid-cols-3">
            {socialLinks.map((social) => (
              <SocialLinkWithPreview key={social.id} social={social} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLinkWithPreview = ({ social }: { social: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="cinema-card flex w-full h-full flex-col items-center gap-2 rounded-xl p-4 transition-colors hover:border-primary/50 relative z-10 bg-background/50 backdrop-blur-sm"
        aria-label={social.label}
      >
        <div className="flex items-center justify-center">
          <Icon icon={social.icon} className="w-6 h-6" />
        </div>
        <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center mt-1">
          {social.label}
        </span>
      </a>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full mb-3 z-50 w-48 aspect-[3/4] rounded-xl overflow-hidden border border-border shadow-[0_15px_40px_-10px_rgba(var(--primary),0.2)] pointer-events-none bg-muted/80 backdrop-blur-md"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
            <img
              src={`/images/social/${social.id}.png`}
              alt={`${social.label} Preview`}
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                // Fallback to a sleek placeholder if image is missing
                (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxYTFhMWEiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5QcmV2aWV3PC90ZXh0Pjwvc3ZnPg==';
              }}
            />
            <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center">
              <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-primary/20 text-primary rounded-full border border-primary/30 backdrop-blur-md">
                View Profile
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
