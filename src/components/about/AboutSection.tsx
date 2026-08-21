import React from 'react';
import { profileData } from '@/data/profile';
import { SectionReveal } from '@/components/animations/SectionReveal';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-28 px-6 sm:px-8 lg:px-12 border-t border-white/5 relative bg-spotlight">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          {/* Section Header Tag */}
          <div className="flex items-center space-x-3 mb-10 text-xs font-mono text-muted tracking-widest uppercase">
            <span className="text-accent font-semibold">02 / PHILOSOPHY</span>
            <span className="w-12 h-[1px] bg-white/10" />
          </div>

          {/* Large Editorial Statement */}
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-8">
            I BUILD INTELLIGENT SYSTEMS AT THE INTERSECTION OF <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-300 to-accent-secondary">
              AI, SOFTWARE & HARDWARE.
            </span>
          </h2>

          {/* Concise Story Narrative */}
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
