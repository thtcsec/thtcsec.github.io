import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillCategories } from "@/data/skills";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";

const categoryIcons: Record<string, string> = {
  languages: "⌨️",
  frameworks: "⚡",
  tools: "🛠️",
  cybersecurity: "🛡️",
};

const SkillsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="bg-black py-16 sm:py-20 md:py-28 lg:py-36 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-14 md:mb-16 text-center">
          <WordsPullUpMultiStyle
            segments={[
              { text: "Technologies I work with daily.", className: "font-normal" },
            ]}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-2"
          />
          <WordsPullUpMultiStyle
            segments={[
              { text: "From cloud platforms to offensive security tools.", className: "font-normal text-gray-500" },
            ]}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal"
          />
        </div>

        {/* Skills Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{
                delay: catIndex * 0.15,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-[#101010] rounded-2xl p-5 sm:p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-lg sm:text-xl">{categoryIcons[category.id] || "📦"}</span>
                <h3 className="text-sm sm:text-base font-medium" style={{ color: "#E1E0CC" }}>
                  {category.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{
                      delay: catIndex * 0.1 + skillIndex * 0.02,
                      duration: 0.3,
                    }}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-gray-400 text-xs sm:text-sm hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all duration-300 cursor-default"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
