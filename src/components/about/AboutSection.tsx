'use client';

import React, { useEffect, useRef } from 'react';
import { profileData } from '@/data/profile';
import { SectionReveal } from '@/components/animations/SectionReveal';
import { prefersReducedMotion } from '@/lib/animations';
import gsap from 'gsap';

export const AboutSection: React.FC = () => {
  const statementRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !statementRef.current) return;

    const el = statementRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 40, filter: 'blur(8px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section id="about" className="py-32 px-6 sm:px-8 lg:px-12 border-t border-white/5 relative bg-spotlight">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          {/* Section Header Tag */}
          <div className="flex items-center space-x-3 mb-10 text-xs font-mono text-muted tracking-widest uppercase">
            <span className="text-accent font-semibold">02 / PHILOSOPHY & INTERSECTION</span>
            <span className="w-12 h-[1px] bg-white/10" />
          </div>

          {/* Large Editorial Statement */}
          <h2
            ref={statementRef}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-12"
          >
            I BUILD INTELLIGENT SYSTEMS AT THE INTERSECTION OF <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent-secondary">
              AI, SOFTWARE & HARDWARE.
            </span>
          </h2>

          {/* Story Narrative & Availability */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
            <div className="lg:col-span-8 space-y-4 text-muted text-base sm:text-lg leading-relaxed font-sans font-normal">
              <p>{profileData.bio}</p>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-between p-6 rounded-2xl editorial-card space-y-4">
              <span className="font-mono text-xs text-muted tracking-wider uppercase">CURRENT AVAILABILITY</span>
              <div className="flex items-center space-x-2 text-sm font-mono text-foreground">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{profileData.availability}</span>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
