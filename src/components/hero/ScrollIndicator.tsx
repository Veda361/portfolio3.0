import React from 'react';

export const ScrollIndicator: React.FC = () => {
  return (
    <div className="hero-scroll absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 z-20 pointer-events-none">
      <span className="font-mono text-[10px] text-muted tracking-widest uppercase">SCROLL</span>
      <div className="w-[1px] h-8 bg-gradient-to-b from-accent to-transparent animate-pulse" />
    </div>
  );
};
