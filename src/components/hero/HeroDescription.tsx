import React from 'react';

export const HeroDescription: React.FC = () => {
  return (
    <div className="hero-desc space-y-6 max-w-xl">
      <p className="text-muted text-base sm:text-lg leading-relaxed font-sans font-normal">
        AI/ML models, high-throughput software architectures, and connected edge hardware engineered into continuous intelligent experiences.
      </p>

      {/* Editorial Role Line (No Template Rectangular Pills) */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-foreground/80 pt-1 tracking-wider uppercase">
        <span className="text-accent font-semibold">AI / ML ENGINEER</span>
        <span className="text-white/20">•</span>
        <span>FULL-STACK DEVELOPER</span>
        <span className="text-white/20">•</span>
        <span>IoT / INTELLIGENT SYSTEMS</span>
      </div>
    </div>
  );
};
