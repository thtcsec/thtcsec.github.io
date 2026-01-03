import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { allSkills, skillCategories } from "@/data/skills";

const Skills = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Create duplicated skills for seamless infinite scroll
  const duplicatedSkills = [...allSkills, ...allSkills];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || isPaused) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5;

    const animate = () => {
      position += speed;
      const itemWidth = 140;
      const totalWidth = allSkills.length * itemWidth;

      if (position >= totalWidth) {
        position = 0;
      }

      carousel.style.transform = `translateX(-${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused]);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Technologies & Tools
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern development tools and technologies
          </p>
        </div>

        {/* Auto-scrolling Carousel */}
        <div
          className="relative mb-16 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

          <div
            ref={carouselRef}
            className="flex gap-6 py-4"
            style={{ width: "fit-content" }}
          >
            {duplicatedSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex-shrink-0 flex flex-col items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 min-w-[120px]"
              >
                <Icon
                  icon={skill.icon}
                  className="w-12 h-12"
                />
                <span className="text-sm font-medium text-foreground">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Categories Grid - Without percentages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-lg font-bold mb-4 text-foreground">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors"
                  >
                    <Icon
                      icon={skill.icon}
                      className="w-5 h-5"
                    />
                    <span className="text-sm text-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
