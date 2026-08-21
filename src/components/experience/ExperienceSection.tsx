'use client';

import React, { useState, useRef } from 'react';
import { experienceData } from '@/data/experience';
import { SectionReveal } from '@/components/animations/SectionReveal';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Cpu, Globe, Zap, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';

export const ExperienceSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(experienceData[0].id);
  const timelineRef = useRef<HTMLDivElement>(null);

  const getStageMeta = (index: number) => {
    switch (index) {
      case 0:
        return {
          phase: "PHASE 03",
          tag: "AI/ML + IoT INTELLIGENT SYSTEMS",
          icon: Cpu,
          accentColor: "text-accent border-accent/40 bg-accent/10",
        };
      case 1:
        return {
          phase: "PHASE 02",
          tag: "ML & FULL-STACK PLATFORMS",
          icon: Zap,
          accentColor: "text-accent-secondary border-accent-secondary/40 bg-accent-secondary/10",
        };
      default:
        return {
          phase: "PHASE 01",
          tag: "FULL-STACK FOUNDATION",
          icon: Globe,
          accentColor: "text-blue-400 border-blue-400/40 bg-blue-400/10",
        };
    }
  };

  const handleSelect = (id: string) => {
    setSelectedId(id);
    if (timelineRef.current) {
      gsap.fromTo(
        `.experience-card-${id}`,
        { opacity: 0.8, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
  };

  return (
    <section id="experience" className="py-32 px-6 sm:px-8 lg:px-12 border-t border-white/5 relative bg-spotlight">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          
          {/* Section Header */}
          <div className="flex items-center space-x-3 mb-6 text-xs font-mono text-muted tracking-widest uppercase">
            <span className="text-accent font-semibold">06 / EVOLUTION MATRIX</span>
            <span className="w-12 h-[1px] bg-white/10" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                ENGINEERING JOURNEY <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent-secondary">
                  2023 ── 2026
                </span>
              </h2>
            </div>
            <p className="text-muted text-sm max-w-md font-sans">
              Evolutionary trajectory from full-stack web architectures to machine learning pipelines and connected edge IoT platforms.
            </p>
          </div>

          {/* Interactive Timeline Phase Switcher / Filter Pills */}
          <div className="flex flex-wrap items-center gap-3 mb-12 border-b border-white/10 pb-6">
            {experienceData.map((item, idx) => {
              const isSelected = selectedId === item.id;
              const meta = getStageMeta(idx);
              const IconComp = meta.icon;

              return (
                <MagneticButton key={item.id} strength={8}>
                  <button
                    onClick={() => handleSelect(item.id)}
                    className={`flex items-center space-x-2.5 px-5 py-2.5 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-300 ${
                      isSelected
                        ? 'bg-foreground text-background font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                        : 'glass-panel text-muted hover:text-foreground border border-white/10 hover:border-white/30'
                    }`}
                  >
                    <IconComp className={`w-3.5 h-3.5 ${isSelected ? 'text-background' : 'text-accent'}`} />
                    <span>{item.startDate} – {item.endDate}</span>
                  </button>
                </MagneticButton>
              );
            })}
          </div>

          {/* Vertical Interactive Timeline Stack */}
          <div ref={timelineRef} className="relative space-y-12 pl-6 sm:pl-10 border-l border-white/10">
            {experienceData.map((item, idx) => {
              const isSelected = selectedId === item.id;
              const meta = getStageMeta(idx);
              const IconComponent = meta.icon;

              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className={`experience-card-${item.id} relative cursor-pointer group transition-all duration-500`}
                >
                  {/* Glowing Node Marker on Left Line */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${
                      isSelected
                        ? 'bg-accent border-white text-background shadow-[0_0_20px_#00f0ff] scale-110'
                        : 'bg-[#080808] border-white/20 text-muted group-hover:border-accent group-hover:scale-105'
                    }`}
                  >
                    <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>

                  {/* Main Timeline Card Container */}
                  <div
                    className={`editorial-card p-8 sm:p-10 rounded-3xl transition-all duration-500 ${
                      isSelected
                        ? 'border-accent/50 bg-[#121212] shadow-[0_10px_40px_rgba(0,0,0,0.6)]'
                        : 'border-white/10 hover:border-white/25 opacity-85 hover:opacity-100'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${meta.accentColor}`}>
                            {meta.phase} {"//"} {meta.tag}
                          </span>
                        </div>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground group-hover:text-white transition-colors">
                          {item.role}
                        </h3>
                        <p className="font-mono text-xs text-muted mt-1 tracking-wider uppercase">
                          {item.organization}
                        </p>
                      </div>

                      <div className="font-display font-bold text-2xl sm:text-4xl text-white/20 group-hover:text-accent/40 transition-colors">
                        {item.startDate} – {item.endDate}
                      </div>
                    </div>

                    <p className="text-muted text-base leading-relaxed font-sans font-normal mb-6">
                      {item.description}
                    </p>

                    {/* Key Contributions & Achievements */}
                    {item.achievements && (
                      <div className="space-y-3 mb-6 bg-surface/60 p-5 rounded-2xl border border-white/5">
                        <span className="text-xs font-mono text-accent tracking-widest uppercase block mb-1">
                          KEY ACHIEVEMENTS & MILESTONES
                        </span>
                        {item.achievements.map((achievement, achievementIdx) => (
                          <div key={achievementIdx} className="flex items-start space-x-3 text-xs sm:text-sm font-sans text-foreground/90">
                            <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Technology Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`text-xs font-mono px-3 py-1 rounded-full border transition-colors ${
                            isSelected
                              ? 'bg-accent/10 border-accent/30 text-accent'
                              : 'bg-background border-white/5 text-muted'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </SectionReveal>
      </div>
    </section>
  );
};
