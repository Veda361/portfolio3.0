import React from 'react';
import { skillsData } from '@/data/skills';
import { SectionReveal } from '@/components/animations/SectionReveal';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-28 px-6 sm:px-8 lg:px-12 border-t border-white/5 relative">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <div className="flex items-center space-x-3 mb-16 text-xs font-mono text-muted tracking-widest uppercase">
            <span className="text-accent font-semibold">05 / TECHNOLOGY MATRIX</span>
            <span className="w-12 h-[1px] bg-white/10" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((category, idx) => (
              <SectionReveal key={category.title} delay={idx * 0.05}>
                <div className="editorial-card p-6 sm:p-8 rounded-2xl space-y-4">
                  <h3 className="font-mono text-xs font-bold text-accent tracking-widest uppercase pb-3 border-b border-white/10">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="text-xs font-mono text-foreground/90 bg-background/90 px-3 py-1.5 rounded-lg border border-white/5 hover:border-white/20 transition-colors"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
