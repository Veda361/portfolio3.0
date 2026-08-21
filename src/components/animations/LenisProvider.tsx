'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { prefersReducedMotion } from '@/lib/animations';

export const LenisProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    // Connect Lenis scroll ticker to GSAP ticker for seamless ScrollTrigger sync
    const updateGsap = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateGsap);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateGsap);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
