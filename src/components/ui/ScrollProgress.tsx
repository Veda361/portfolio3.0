'use client';

import React, { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '@/lib/animations';

export const ScrollProgress: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let ticking = false;

    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0 && barRef.current) {
        const progress = (window.scrollY / scrollHeight) * 100;
        barRef.current.style.transform = `scaleX(${Math.min(Math.max(progress / 100, 0), 1)})`;
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateProgress();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[45] pointer-events-none bg-white/5">
      <div
        ref={barRef}
        className="w-full h-full bg-gradient-to-r from-accent via-cyan-300 to-accent-secondary origin-left transform scale-x-0 transition-transform duration-75 ease-out"
      />
    </div>
  );
};
