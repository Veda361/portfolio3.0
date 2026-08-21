import React from 'react';
import { socialData } from '@/data/social';
import { ArrowRight, ArrowUpRight, Github } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';

export const HeroActions: React.FC = () => {
  return (
    <div className="hero-actions flex flex-wrap items-center gap-6 pt-2">
      {/* Primary Action: VIEW WORK */}
      <MagneticButton strength={10}>
        <a
          href="#projects"
          className="group relative inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-foreground text-background font-mono text-xs font-bold tracking-wider uppercase hover:bg-white transition-all duration-300 transform hover:-translate-y-0.5"
        >
          <span>VIEW WORK</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </MagneticButton>

      {/* Secondary Action: RESUME */}
      <MagneticButton strength={10}>
        <a
          href={socialData.resume || '/resume.pdf'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-7 py-4 rounded-full border border-white/15 text-foreground font-mono text-xs tracking-wider uppercase hover:border-white/40 hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-0.5"
        >
          <span>RESUME</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
        </a>
      </MagneticButton>

      {/* Tertiary Action: GITHUB */}
      {socialData.github && (
        <MagneticButton strength={10}>
          <a
            href={socialData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="inline-flex items-center justify-center p-4 rounded-full border border-white/10 text-muted hover:text-white hover:border-white/30 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Github className="w-4 h-4" />
          </a>
        </MagneticButton>
      )}
    </div>
  );
};
