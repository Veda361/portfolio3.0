'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { projectsData } from '@/data/projects';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { SectionReveal } from '@/components/animations/SectionReveal';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import { prefersReducedMotion, isTouchDevice } from '@/lib/animations';

// Dynamic lazy import of 3D Canvas with ssr: false for optimal performance
const Project3DCanvas = dynamic(
  () => import('./three/Project3DCanvas').then((mod) => mod.Project3DCanvas),
  { ssr: false }
);

export const ProjectsSection: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<string>(projectsData[0].id);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [isMobileOrReduced, setIsMobileOrReduced] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // Check device capabilities on mount
  useEffect(() => {
    setHasMounted(true);
    if (isTouchDevice() || prefersReducedMotion() || window.innerWidth < 768) {
      setIsMobileOrReduced(true);
    }
  }, []);

  // IntersectionObserver to sync active 3D system object on scroll
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    projectsData.forEach((project) => {
      const el = document.getElementById(`project-card-${project.id}`);
      if (el) {
        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveProjectId(project.id);
              }
            });
          },
          { threshold: 0.4, rootMargin: '-10% 0px -30% 0px' }
        );
        obs.observe(el);
        observers.push(obs);
      }
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const activeIndex = projectsData.findIndex((p) => p.id === activeProjectId);
  const activeProject = projectsData[activeIndex] || projectsData[0];

  const fallback2D = (
    <div className="my-auto py-12 text-center space-y-4">
      <div className="w-20 h-20 mx-auto rounded-2xl border border-accent/40 bg-accent/10 flex items-center justify-center text-accent font-display text-2xl font-bold">
        0{activeIndex + 1}
      </div>
      <p className="font-mono text-xs text-muted uppercase tracking-wider">
        {activeProject.title}
      </p>
    </div>
  );

  return (
    <section id="projects" className="py-32 px-6 sm:px-8 lg:px-12 border-t border-white/5 relative bg-spotlight">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          
          {/* Section Header */}
          <div className="flex items-center space-x-3 mb-6 text-xs font-mono text-muted tracking-widest uppercase">
            <span className="text-accent font-semibold">04 / PROJECT LAB</span>
            <span className="w-12 h-[1px] bg-white/10" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                SYSTEMS I&apos;VE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent-secondary">
                  ENGINEERED.
                </span>
              </h2>
            </div>
            <div className="flex items-center space-x-4 text-xs font-mono text-muted border border-white/10 px-4 py-2 rounded-full bg-surface/80">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>ACTIVE SYSTEM: {String(activeIndex + 1).padStart(2, '0')} / {String(projectsData.length).padStart(2, '0')}</span>
            </div>
          </div>

          {/* Interactive Project Lab Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Sticky 3D Lab Viewport */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 z-20">
              <div
                onMouseEnter={() => setHoveredProjectId(activeProjectId)}
                onMouseLeave={() => setHoveredProjectId(null)}
                className="editorial-card p-6 sm:p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between min-h-[380px] lg:min-h-[460px] border border-white/15 bg-[#0a0a0a]"
              >
                {/* 3D Lab Backdrop Glow */}
                <div className="absolute -inset-10 bg-gradient-to-tr from-accent/15 via-blue-500/10 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none" />

                {/* Top Viewport Header */}
                <div className="flex items-center justify-between text-xs font-mono text-muted border-b border-white/10 pb-4 relative z-10">
                  <span className="text-accent font-semibold">3D SYSTEM VIEWPORT</span>
                  <span className="text-foreground/80">{activeProject.category.toUpperCase()}</span>
                </div>

                {/* 3D Scene Viewport or 2D Glass Fallback */}
                {hasMounted && !isMobileOrReduced ? (
                  <ErrorBoundary fallback={fallback2D}>
                    <div className="w-full h-full relative my-auto">
                      <Project3DCanvas
                        activeProjectId={activeProjectId}
                        isHovered={hoveredProjectId === activeProjectId}
                      />
                    </div>
                  </ErrorBoundary>
                ) : (
                  fallback2D
                )}

                {/* Bottom Viewport Info Bar */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono relative z-10">
                  <span className="text-muted">STATUS:</span>
                  <span className="text-accent font-semibold">{activeProject.status.toUpperCase()}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Project Story Cards */}
            <div className="lg:col-span-7 space-y-16">
              {projectsData.map((project, index) => {
                const formattedNum = String(index + 1).padStart(2, '0');
                const isCurrentActive = activeProjectId === project.id;
                const targetUrl = project.liveUrl || project.githubUrl;

                return (
                  <div
                    key={project.id}
                    id={`project-card-${project.id}`}
                    onMouseEnter={() => setHoveredProjectId(project.id)}
                    onMouseLeave={() => setHoveredProjectId(null)}
                    className={`editorial-card p-8 sm:p-10 rounded-3xl transition-all duration-500 relative ${
                      isCurrentActive
                        ? 'border-accent/40 bg-[#121212] shadow-[0_10px_35px_rgba(0,0,0,0.6)]'
                        : 'border-white/10 opacity-80 hover:opacity-100 hover:border-white/20'
                    }`}
                  >
                    <div className="space-y-6">
                      
                      {/* Top Bar: Large Index Number & Status */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <div className="flex items-baseline space-x-3">
                          <span className={`font-display font-bold text-4xl sm:text-5xl transition-colors duration-300 ${
                            isCurrentActive ? 'text-accent' : 'text-white/20'
                          }`}>
                            {formattedNum}
                          </span>
                          <span className="text-xs font-mono text-accent uppercase tracking-wider">
                            {project.category}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-muted border border-white/10 px-3 py-1 rounded-full bg-background">
                          {project.status.toUpperCase()}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted text-base leading-relaxed font-sans font-normal">
                        {project.description}
                      </p>

                      {/* Architecture Pipeline if present */}
                      {project.architectureOverview && (
                        <div className="p-4 rounded-2xl bg-surface/90 border border-white/5 text-xs font-mono text-muted">
                          <span className="text-accent font-semibold block mb-1">ARCHITECTURE PIPELINE:</span>
                          {project.architectureOverview}
                        </div>
                      )}

                      {/* Compact Editorial Technology Line */}
                      <div className="pt-2">
                        <span className="text-[10px] font-mono text-muted tracking-widest uppercase block mb-2">
                          TECHNOLOGY STACK
                        </span>
                        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-foreground/90">
                          {project.technologies.slice(0, 5).map((tech, idx) => (
                            <React.Fragment key={tech}>
                              {idx > 0 && <span className="text-white/20">•</span>}
                              <span className="bg-background px-2.5 py-1 rounded-md border border-white/5">
                                {tech}
                              </span>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>

                      {/* Live Platform CTA Button */}
                      <div className="pt-4 flex items-center justify-between border-t border-white/10">
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
                );
              })}
            </div>

          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
