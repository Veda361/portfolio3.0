import React from 'react';

export const HeroHeading: React.FC = () => {
  return (
    <div className="space-y-6">
      
      {/* Category Identifier */}
      <div className="hero-badge flex items-center space-x-3 text-xs font-mono text-muted tracking-widest uppercase">
        <span className="text-accent font-semibold">01 / CREATIVE SYSTEMS ARCHITECT</span>
        <span className="w-12 h-[1px] bg-white/10" />
      </div>

      {/* Main Fluid Display Headline */}
      <h1 className="hero-title font-display font-bold tracking-tight text-foreground leading-[1.02] text-[clamp(2.5rem,6vw,5.5rem)]">
        <span className="block hero-title-line-1">I BUILD</span>
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-accent hero-title-line-2">
          INTELLIGENT
        </span>
        <span className="block text-foreground/90 hero-title-line-3">
          SYSTEMS.
        </span>
      </h1>

    </div>
  );
};
