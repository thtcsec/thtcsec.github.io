import HeroSection from "@/components/prisma/HeroSection";
import AboutSection from "@/components/prisma/AboutSection";
import SkillsSection from "@/components/prisma/SkillsSection";
import FeaturesSection from "@/components/prisma/FeaturesSection";
import AchievementsSection from "@/components/prisma/AchievementsSection";
import ContactSection from "@/components/prisma/ContactSection";
import ScrollToTop from "@/components/prisma/ScrollToTop";
import { siteConfig } from "@/data/config";

const PrismaPage = () => {
  return (
    <div className="prisma-page bg-black min-h-screen" style={{ color: "#E1E0CC" }}>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <FeaturesSection />
      <AchievementsSection />
      <ContactSection />
      <ScrollToTop />

      {/* Footer */}
      <footer className="bg-[#080808] border-t border-white/[0.04] py-8 sm:py-10 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Info */}
            <div>
              <p className="text-sm sm:text-base font-medium mb-2" style={{ color: "#E1E0CC" }}>
                {siteConfig.authorEn}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                {siteConfig.bio}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <p className="text-gray-500 text-[10px] sm:text-xs mb-3 tracking-widest uppercase">Navigate</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {["About", "Skills", "Projects", "Achievements", "Contact"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 text-xs sm:text-sm hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Built With */}
            <div>
              <p className="text-gray-500 text-[10px] sm:text-xs mb-3 tracking-widest uppercase">Built with</p>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-white/[0.03] text-gray-500 text-[10px] sm:text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-600 text-[10px] sm:text-xs">
              © {new Date().getFullYear()} {siteConfig.authorEn}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 text-[10px] sm:text-xs hover:text-primary transition-colors">
                GitHub
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 text-[10px] sm:text-xs hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href={`mailto:${siteConfig.email}`} className="text-gray-600 text-[10px] sm:text-xs hover:text-primary transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrismaPage;
