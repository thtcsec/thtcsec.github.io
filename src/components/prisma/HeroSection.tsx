import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Facebook, ChevronDown } from "lucide-react";
import { siteConfig, getAcademicProgress } from "@/data/config";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const roles = ["Cybersecurity Enthusiast", "Full-Stack Developer", "Cloud Security", "HUFLIT Student"];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(current.slice(0, displayed.length - 1));
        } else {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const progress = getAcademicProgress();

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      {/* ── Video Background ── */}
      <motion.div style={{ scale: videoScale }} className="absolute inset-0">
        {/* Animated gradient fallback behind video */}
        <div className="absolute inset-0 hero-gradient-bg" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* ── Overlays ── */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="noise-overlay absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

      {/* ── Navbar ── */}
      <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-30">
        <div className="bg-black/60 backdrop-blur-md rounded-b-2xl md:rounded-b-3xl px-5 py-2.5 md:px-10 border-b border-white/[0.06]">
          <ul className="flex items-center gap-4 sm:gap-7 md:gap-12 lg:gap-14">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[10px] sm:text-xs md:text-sm whitespace-nowrap transition-colors duration-300"
                  style={{ color: "rgba(225,224,204,0.7)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#E1E0CC")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(225,224,204,0.7)")}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── Content: left-aligned, bottom-heavy ── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 h-full flex items-end pb-14 sm:pb-16 md:pb-20 px-6 sm:px-10 md:px-16 lg:px-20"
      >
        <div className="max-w-2xl">
          {/* Chip */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 sm:mb-5"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-[10px] sm:text-xs tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name — large but not absurdly giant */}
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-[-0.04em] mb-3 sm:mb-4"
            style={{ color: "#E1E0CC" }}
          >
            Hoàng
            <br />
            Tú<span className="text-primary/40">.</span>
          </motion.h1>

          {/* Typing role */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="h-6 sm:h-7 mb-4 sm:mb-5"
          >
            <span className="font-mono text-primary/60 text-xs sm:text-sm">
              {"// "}
              {displayed}
              <span className="inline-block w-[2px] h-3.5 sm:h-4 bg-primary/50 ml-0.5 animate-pulse" />
            </span>
          </motion.div>

          {/* Short bio */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-primary/40 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-7 max-w-md"
          >
            Building secure systems & breaking insecure ones.
            IT student at HUFLIT · GPA {siteConfig.academic.gpa} · {Math.round(progress)}% to graduation.
          </motion.p>

          {/* CTA + Socials */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-1.5 hover:gap-3 bg-primary rounded-full pl-5 pr-1 py-1 transition-all duration-300"
            >
              <span className="text-black font-medium text-sm">View my work</span>
              <span className="bg-black rounded-full w-9 h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <ArrowRight className="w-4 h-4" style={{ color: "#E1E0CC" }} />
              </span>
            </a>

            <div className="flex items-center gap-2">
              {[
                { icon: Github, href: siteConfig.social.github, label: "GitHub" },
                { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
                { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
                { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-primary/10 hover:border-primary/40"
                  aria-label={label}
                >
                  <Icon className="w-[15px] h-[15px]" style={{ color: "rgba(225,224,204,0.5)" }} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Right side: avatar peek (desktop) ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:block absolute right-16 xl:right-24 bottom-16 z-10"
      >
        <div className="relative">
          <div className="w-48 h-48 xl:w-56 xl:h-56 rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/50">
            <img
              src="/images/avatar.jpg"
              alt={siteConfig.authorEn}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating label */}
          <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-sm border border-white/[0.08]">
            <p className="text-[10px] text-primary/70 font-mono">@thtcsec</p>
          </div>
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#about" className="flex flex-col items-center gap-1 group">
          <span className="text-gray-600 text-[9px] tracking-[0.2em] uppercase group-hover:text-primary/60 transition-colors">
            Scroll
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-gray-600 animate-bounce group-hover:text-primary/60 transition-colors" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
