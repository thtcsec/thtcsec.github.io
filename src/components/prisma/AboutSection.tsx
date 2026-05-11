import { useRef } from "react";
import { useScroll } from "framer-motion";
import { siteConfig, getAcademicProgress, getDaysRemaining } from "@/data/config";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";
import AnimatedLetter from "./AnimatedLetter";

const aboutText =
  "Over the past three years at HUFLIT, I have built multi-cloud SOAR platforms on AWS and GCP, designed AI-powered surveillance systems, created realistic penetration testing labs, and competed in over 18 hackathons across Vietnam and internationally.";

const AboutSection = () => {
  const paragraphRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ["start 0.9", "end 0.3"],
  });

  const chars = aboutText.split("");
  const progress = getAcademicProgress();
  const daysLeft = getDaysRemaining();

  return (
    <section id="about" className="bg-black py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#101010] rounded-2xl px-5 sm:px-8 md:px-12 py-10 sm:py-14 md:py-16 text-center overflow-hidden">
          {/* Label */}
          <p className="text-primary text-[10px] sm:text-xs mb-5 sm:mb-6 tracking-widest uppercase">
            Cybersecurity · Development · AI
          </p>

          {/* Multi-style heading — capped size */}
          <WordsPullUpMultiStyle
            segments={[
              { text: `I am ${siteConfig.authorEn},`, className: "font-normal" },
              { text: "a cybersecurity enthusiast & developer.", className: "italic font-serif" },
              { text: "I build secure systems and ship production apps.", className: "font-normal" },
            ]}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-2xl mx-auto leading-snug mb-8 sm:mb-10"
          />

          {/* Scroll-linked paragraph — proper wrapping */}
          <div
            ref={paragraphRef}
            className="max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed break-words"
            style={{ color: "#DEDBC8", wordBreak: "break-word", overflowWrap: "break-word" }}
          >
            {chars.map((char, i) => (
              <AnimatedLetter
                key={i}
                char={char}
                index={i}
                totalChars={chars.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          {/* Academic Progress */}
          <div className="mt-8 sm:mt-10 max-w-sm mx-auto">
            <div className="flex justify-between text-[10px] sm:text-xs mb-1.5">
              <span className="text-gray-500">Academic Journey — {siteConfig.university}</span>
              <span className="text-primary">{progress}%</span>
            </div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-gray-500 text-[10px] mt-1.5">
              Sem {siteConfig.academic.currentSemester}/{siteConfig.academic.totalSemesters} · GPA {siteConfig.academic.gpa} · {daysLeft} days left
            </p>
          </div>

          {/* Stats */}
          <div className="mt-8 sm:mt-10 grid grid-cols-4 gap-4 max-w-md mx-auto">
            {[
              { value: `${siteConfig.stats.projectsBuilt}+`, label: "Projects" },
              { value: `${siteConfig.stats.technologiesUsed}+`, label: "Tech" },
              { value: "18+", label: "Hackathons" },
              { value: `${siteConfig.stats.gdgEvents}+`, label: "Events" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold" style={{ color: "#E1E0CC" }}>
                  {stat.value}
                </p>
                <p className="text-gray-500 text-[9px] sm:text-[10px] mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
