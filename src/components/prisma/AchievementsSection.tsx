import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Award, Trophy, Users } from "lucide-react";
import { achievements } from "@/data/certificates";
import { communities } from "@/data/communities";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";

interface AnimatedCardProps {
  children: React.ReactNode;
  index: number;
  className?: string;
}

const AnimatedCard = ({ children, index, className = "" }: AnimatedCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.06,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
};

const AchievementsSection = () => {
  return (
    <section id="achievements" className="bg-black relative py-16 sm:py-20 md:py-28 lg:py-36 px-4 sm:px-6 md:px-8">
      <div className="bg-noise absolute inset-0 opacity-[0.1] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-14 md:mb-16 text-center">
          <WordsPullUpMultiStyle
            segments={[
              { text: "Recognition, community, and impact.", className: "font-normal" },
            ]}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-2"
          />
          <WordsPullUpMultiStyle
            segments={[
              { text: "Awards earned. Communities joined. Connections made.", className: "font-normal text-gray-500" },
            ]}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal"
          />
        </div>

        {/* Awards */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <h3 className="text-sm sm:text-base font-medium" style={{ color: "#E1E0CC" }}>
              Awards & Achievements
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {achievements.map((achievement, i) => (
              <AnimatedCard key={achievement.id} index={i} className="group">
                <div className="bg-[#212121] rounded-2xl overflow-hidden h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-36 sm:h-40 overflow-hidden">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#212121] via-transparent to-transparent" />
                  </div>
                  {/* Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col">
                    <p className="text-primary text-[10px] sm:text-xs mb-1">{achievement.issuer}</p>
                    <h4 className="text-sm sm:text-base font-medium mb-2" style={{ color: "#E1E0CC" }}>
                      {achievement.title}
                    </h4>
                    {achievement.description && (
                      <p className="text-gray-400 text-[11px] sm:text-xs line-clamp-2 leading-relaxed">
                        {achievement.description}
                      </p>
                    )}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <div className="text-center mt-6">
            <a
              href="/certificates"
              className="inline-flex items-center gap-1.5 text-primary text-xs sm:text-sm hover:opacity-80 transition-opacity"
            >
              View all certificates & awards
              <ArrowRight className="w-3.5 h-3.5" style={{ transform: "rotate(-45deg)" }} />
            </a>
          </div>
        </div>

        {/* Communities */}
        <div>
          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <h3 className="text-sm sm:text-base font-medium" style={{ color: "#E1E0CC" }}>
              Communities & Ambassadorships
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {communities.map((community, i) => (
              <AnimatedCard key={community.id} index={i} className="group">
                <div className="bg-[#151515] rounded-2xl overflow-hidden h-full flex flex-col border border-white/[0.04] hover:border-primary/20 transition-colors duration-300">
                  {/* Image */}
                  <div className="relative h-32 sm:h-36 overflow-hidden">
                    <img
                      src={community.image}
                      alt={community.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent" />
                  </div>
                  {/* Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col">
                    <h4 className="text-sm sm:text-base font-medium mb-2" style={{ color: "#E1E0CC" }}>
                      {community.title}
                    </h4>
                    <p className="text-gray-400 text-[11px] sm:text-xs line-clamp-2 leading-relaxed mb-3">
                      {community.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {community.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-primary/5 text-primary/70 text-[10px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
