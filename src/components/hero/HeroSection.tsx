'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { HeroHeading } from './HeroHeading';
import { HeroDescription } from './HeroDescription';
import { HeroActions } from './HeroActions';
import { ProfileSystem } from './ProfileSystem';
import { ScrollIndicator } from './ScrollIndicator';
import { prefersReducedMotion, isTouchDevice } from '@/lib/animations';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const devTitleRef = useRef<HTMLDivElement>(null);
  const sahuTitleRef = useRef<HTMLDivElement>(null);

  // GSAP Choreographed Opening Sequence & Subtle Pointer Depth
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Step 1: Background & Title Mark Entrance
      tl.fromTo(
        '.hero-name-top',
        { opacity: 0, y: -40, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, delay: 0.1 }
      )
        .fromTo(
          '.hero-profile-container',
          { opacity: 0, scale: 0.92, filter: 'blur(8px)' },
          { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.9, ease: 'power2.out' },
          '-=0.5'
        )
        .fromTo(
          '.hero-name-bottom',
          { opacity: 0, y: 40, filter: 'blur(10px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          '.hero-badge',
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.5 },
          '-=0.4'
        )
        .fromTo(
          '.hero-title-line-1, .hero-title-line-2, .hero-title-line-3',
          { opacity: 0, y: 30, filter: 'blur(6px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, stagger: 0.12 },
          '-=0.4'
        )
        .fromTo(
          '.hero-desc',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          '.hero-actions',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.3'
        )
        .fromTo(
          '.hero-scroll',
          { opacity: 0 },
          { opacity: 1, duration: 0.4 },
          '-=0.2'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Subtle Typographic Parallax on Mouse Move (Desktop Only)
  useLayoutEffect(() => {
    if (prefersReducedMotion() || isTouchDevice() || !devTitleRef.current || !sahuTitleRef.current) return;

    const devEl = devTitleRef.current;
    const sahuEl = sahuTitleRef.current;

    const devXTo = gsap.quickTo(devEl, 'x', { duration: 0.8, ease: 'power2.out' });
    const devYTo = gsap.quickTo(devEl, 'y', { duration: 0.8, ease: 'power2.out' });
    const sahuXTo = gsap.quickTo(sahuEl, 'x', { duration: 0.8, ease: 'power2.out' });
    const sahuYTo = gsap.quickTo(sahuEl, 'y', { duration: 0.8, ease: 'power2.out' });

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX / innerWidth - 0.5);
      const normY = (e.clientY / innerHeight - 0.5);

      devXTo(-normX * 12);
      devYTo(-normY * 12);
      sahuXTo(normX * 16);
      sahuYTo(normY * 16);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[95vh] lg:min-h-screen pt-32 pb-24 flex items-center justify-center overflow-hidden bg-spotlight bg-grain select-none"
    >
      {/* 3D Canvas Mount Point (Phase 4 integration) */}
      <div id="hero-3d-canvas-container" className="absolute inset-0 pointer-events-none z-0" />

      {/* Massive Typographic Backdrop Name Marks */}
      <div
        ref={devTitleRef}
        className="hero-name-top absolute top-16 left-4 sm:left-12 lg:left-20 font-display font-black text-[clamp(4.5rem,16vw,15rem)] leading-none text-white/[0.04] tracking-wider uppercase pointer-events-none z-0"
      >
        DEV
      </div>

      <div
        ref={sahuTitleRef}
        className="hero-name-bottom absolute bottom-16 right-4 sm:right-12 lg:right-20 font-display font-black text-[clamp(4.5rem,16vw,15rem)] leading-none text-white/[0.04] tracking-wider uppercase pointer-events-none z-0 text-right"
      >
        SAHU
      </div>

      {/* Main Container Layout */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Main Column: Editorial Typography & Statement */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 order-2 lg:order-1 relative z-20">
            <HeroHeading />
            <HeroDescription />
            <HeroActions />
          </div>

          {/* Right Column: Organic Edge-Blended Portrait Composition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 hero-profile-container relative z-10">
            <ProfileSystem imagePath="/images/dev-sahu-profile.webp" />
          </div>

        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
};
