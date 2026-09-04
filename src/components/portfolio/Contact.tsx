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

interface SocialLinkItem {
  id: string;
  icon: string;
  href: string;
  label: string;
}

const SocialLinkWithPreview = ({ social }: { social: SocialLinkItem }) => {
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="cinema-card flex w-full h-full flex-col items-center gap-2 rounded-xl p-4 transition-colors hover:border-primary/50 relative z-10 bg-background/50 backdrop-blur-sm group"
      aria-label={social.label}
    >
      <div className="flex items-center justify-center">
        <Icon icon={social.icon} className="w-6 h-6 text-foreground/80 group-hover:text-primary transition-colors" />
      </div>
      <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center mt-1">
        {social.label}
      </span>
    </a>
  );
};

export default Contact;

