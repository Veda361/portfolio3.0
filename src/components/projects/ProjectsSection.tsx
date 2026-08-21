import React from 'react';
import { projectsData } from '@/data/projects';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SectionReveal } from '@/components/animations/SectionReveal';
import { MagneticButton } from '@/components/ui/MagneticButton';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-28 px-6 sm:px-8 lg:px-12 border-t border-white/5 relative bg-spotlight">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          {/* Section Header */}
          <div className="flex items-center space-x-3 mb-16 text-xs font-mono text-muted tracking-widest uppercase">
            <span className="text-accent font-semibold">04 / SELECTED WORKS</span>
            <span className="w-12 h-[1px] bg-white/10" />
          </div>

          {/* Feature Story Project List */}
          <div className="space-y-16">
            {projectsData.map((project, index) => {
              const formattedNum = String(index + 1).padStart(2, '0');
              const targetUrl = project.liveUrl || project.githubUrl;

              return (
                <SectionReveal key={project.id} delay={index * 0.1}>
                  <div className="editorial-card p-8 sm:p-12 rounded-3xl group relative transition-all duration-500 hover:border-white/20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      
                      {/* Large Project Number */}
                      <div className="lg:col-span-3">
                        <span className="font-display font-bold text-4xl sm:text-6xl text-white/20 group-hover:text-accent transition-colors duration-500">
                          {formattedNum}
                        </span>
                        <div className="mt-2 text-xs font-mono text-accent uppercase tracking-wider">
                          {project.category}
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="lg:col-span-9 space-y-6">
                        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                          <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground group-hover:text-white transition-colors">
                            {project.title}
                          </h3>
                          <span className="text-xs font-mono text-muted border border-white/10 px-3 py-1 rounded-full">
                            {project.status.toUpperCase()}
                          </span>
                        </div>

                        <p className="text-muted text-base leading-relaxed font-sans font-normal">
                          {project.description}
                        </p>

                        {/* Architecture / Capabilities Details if present */}
                        {project.architectureOverview && (
                          <div className="p-4 rounded-xl bg-surface/80 border border-white/5 text-xs font-mono text-muted">
                            <span className="text-accent font-semibold block mb-1">ARCHITECTURE PIPELINE:</span>
                            {project.architectureOverview}
                          </div>
                        )}

                        {project.completedCapabilities && (
                          <div className="flex flex-wrap gap-2 text-xs font-mono text-muted">
                            <span className="text-foreground font-semibold">COMPLETED:</span>
                            {project.completedCapabilities.map((cap) => (
                              <span key={cap} className="text-accent bg-accent/10 px-2.5 py-0.5 rounded border border-accent/20">
                                {cap}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Technology Stack Pills */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs font-mono text-muted/90 bg-background px-3 py-1 rounded-full border border-white/5"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Live Platform CTA Button */}
                        <div className="pt-4 flex flex-wrap items-center gap-4">
                          {targetUrl ? (
                            <MagneticButton strength={8}>
                              <a
                                href={targetUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn inline-flex items-center space-x-2.5 px-6 py-3 rounded-full bg-foreground text-background font-mono text-xs font-bold tracking-wider uppercase hover:bg-white transition-all duration-300 transform hover:-translate-y-0.5"
                              >
                                <span>LAUNCH LIVE PLATFORM</span>
                                <ArrowUpRight className="w-4 h-4 text-accent group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                              </a>
                            </MagneticButton>
                          ) : (
                            <span className="inline-flex items-center space-x-2 text-xs font-mono text-muted uppercase">
                              <span>RESEARCH PROTOTYPE</span>
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          )}
                        </div>

                      </div>

                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
