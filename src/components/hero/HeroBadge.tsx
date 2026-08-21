import React from 'react';

export const HeroBadge: React.FC = () => {
  return (
    <div className="hero-badge inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 text-muted font-mono text-xs tracking-widest uppercase mb-6 bg-surface/50 backdrop-blur-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
      <span>AI / ML ENGINEER • CREATIVE DEVELOPER</span>
    </div>
  );
};
