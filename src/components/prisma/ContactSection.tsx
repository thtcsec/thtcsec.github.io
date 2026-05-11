import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Mail, MapPin, GraduationCap } from "lucide-react";
import { siteConfig } from "@/data/config";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "GitHub", href: siteConfig.social.github },
  { label: "Facebook", href: siteConfig.social.facebook },
  { label: "Threads", href: siteConfig.social.threads },
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "Discord", href: siteConfig.social.discord },
  { label: "LeetCode", href: siteConfig.social.leetcode },
  { label: "TikTok", href: siteConfig.social.tiktok },
  { label: "Google Dev", href: siteConfig.social.gdg },
];

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="bg-black py-16 sm:py-20 md:py-28 lg:py-36 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-14 md:mb-16 text-center">
          <WordsPullUpMultiStyle
            segments={[
              { text: "Let's connect and build something.", className: "font-normal" },
            ]}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-2"
          />
          <WordsPullUpMultiStyle
            segments={[
              { text: "Open for opportunities and collaborations.", className: "font-normal text-gray-500" },
            ]}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal"
          />
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#101010] rounded-2xl p-6 sm:p-8 md:p-10"
          >
            <h3 className="text-lg sm:text-xl font-medium mb-6 sm:mb-8" style={{ color: "#E1E0CC" }}>
              Get in touch
            </h3>

            <div className="space-y-5 sm:space-y-6 mb-8 sm:mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] sm:text-xs mb-0.5">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm sm:text-base hover:text-primary transition-colors"
                    style={{ color: "#E1E0CC" }}
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] sm:text-xs mb-0.5">Location</p>
                  <p className="text-sm sm:text-base" style={{ color: "#E1E0CC" }}>
                    {siteConfig.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] sm:text-xs mb-0.5">University</p>
                  <p className="text-sm sm:text-base" style={{ color: "#E1E0CC" }}>
                    {siteConfig.university} — {siteConfig.major}
                  </p>
                  <p className="text-gray-500 text-[10px] sm:text-xs mt-0.5">
                    Expected graduation: {siteConfig.academic.expectedGraduation}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex items-center gap-1.5 hover:gap-3 bg-primary rounded-full pl-4 sm:pl-5 pr-1 py-1 transition-all duration-300"
            >
              <span className="text-black font-medium text-sm sm:text-base">
                Send me an email
              </span>
              <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "#E1E0CC" }} />
              </span>
            </a>
          </motion.div>

          {/* Right: Social Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#101010] rounded-2xl p-6 sm:p-8 md:p-10"
          >
            <h3 className="text-lg sm:text-xl font-medium mb-6 sm:mb-8" style={{ color: "#E1E0CC" }}>
              Find me online
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ x: 20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{
                    delay: 0.2 + i * 0.05,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-primary/5 hover:border-primary/20 transition-all duration-300"
                >
                  <span className="text-gray-400 text-sm group-hover:text-primary transition-colors">
                    {social.label}
                  </span>
                  <ArrowRight
                    className="w-3.5 h-3.5 text-gray-600 group-hover:text-primary transition-all duration-300 group-hover:translate-x-0.5"
                    style={{ transform: "rotate(-45deg)" }}
                  />
                </motion.a>
              ))}
            </div>

            {/* GitHub Contributions */}
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/[0.04]">
              <p className="text-gray-500 text-[10px] sm:text-xs mb-3">GitHub Contributions</p>
              <div className="w-full overflow-x-auto">
                <img
                  src="https://ghchart.rshah.org/DEDBC8/thtcsec"
                  alt="GitHub Contributions"
                  className="min-w-[500px] w-full opacity-60 hover:opacity-90 transition-opacity duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
