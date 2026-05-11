import type { Skill } from "@/data/skills";
import { Icon } from "@iconify/react";
import { allSkills, skillCategories } from "@/data/skills";

const Skills = () => {
  const coreStackNames = [
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Python",
    "C#",
    "AWS",
    "Docker",
    "PostgreSQL",
    "GitHub",
    "Burp Suite",
    "Kali Linux",
    "Firebase",
  ];

  const coreStack = coreStackNames
    .map(name => allSkills.find(skill => skill.name === name))
    .filter(Boolean) as Skill[];

  return (
    <section id="skills" className="cinema-section">
      <div className="container mx-auto px-4">
        <div className="cinema-reveal text-center mb-16">
          <span className="cinema-kicker mb-4">
            Expertise
          </span>
          <h2 className="cinema-title mb-4">
            Technologies & Tools
          </h2>
          <p className="cinema-subtitle">
            Scannable stack, grouped by what I actually use in product and security work.
          </p>
        </div>

        <div className="cinema-card cinema-reveal mb-16 rounded-3xl p-6 md:p-8" style={{ ["--reveal-delay" as string]: "90ms" }}>
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-foreground">Core stack</h3>
              <p className="text-sm text-muted-foreground">The tools that show up most often in my work.</p>
            </div>
            <div className="cinema-meta">12 highlighted</div>
          </div>

          <div className="cinema-stagger flex flex-wrap gap-3">
            {coreStack.map((skill) => (
              <div
                key={skill.name}
                className="inline-flex items-center gap-3 rounded-full border border-border bg-background px-4 py-2.5 transition-colors hover:border-primary/50 hover:bg-primary/5"
              >
                <Icon icon={skill.icon} className="h-5 w-5" />
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="cinema-stagger grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="cinema-card p-6 transition-colors hover:border-primary/30"
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
