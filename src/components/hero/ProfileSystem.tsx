'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { prefersReducedMotion, isTouchDevice } from '@/lib/animations';
import gsap from 'gsap';

interface ProfileSystemProps {
  imagePath?: string;
  className?: string;
}

export const ProfileSystem: React.FC<ProfileSystemProps> = ({
  imagePath = '/images/dev-sahu-profile.webp',
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // Subtle 3D Pointer Depth Interaction
  useEffect(() => {
    if (prefersReducedMotion() || isTouchDevice() || !imageRef.current || !containerRef.current) return;

    const img = imageRef.current;
    const glow = glowRef.current;

    const xTo = gsap.quickTo(img, 'x', { duration: 0.6, ease: 'power2.out' });
    const yTo = gsap.quickTo(img, 'y', { duration: 0.6, ease: 'power2.out' });
    const rotTo = gsap.quickTo(img, 'rotate', { duration: 0.6, ease: 'power2.out' });

    const glowXTo = glow ? gsap.quickTo(glow, 'x', { duration: 0.8, ease: 'power2.out' }) : null;
    const glowYTo = glow ? gsap.quickTo(glow, 'y', { duration: 0.8, ease: 'power2.out' }) : null;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX / innerWidth - 0.5);
      const normY = (e.clientY / innerHeight - 0.5);

      xTo(normX * 24);  // 12px max shift
      yTo(normY * 20);  // 10px max shift
      rotTo(normX * 2); // 1deg tilt

      if (glowXTo && glowYTo) {
        glowXTo(normX * 35);
        glowYTo(normY * 35);
      }
    };

    const handleMouseLeave = () => {
      gsap.to(img, { x: 0, y: 0, rotate: 0, duration: 0.8, ease: 'power3.out' });
      if (glow) gsap.to(glow, { x: 0, y: 0, duration: 0.8, ease: 'power3.out' });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}
    >
      {/* Soft Ambient Radial Backdrop Aura */}
      <div
        ref={glowRef}
        className="absolute -inset-12 bg-gradient-to-tr from-accent/20 via-blue-500/15 to-accent-secondary/15 rounded-full blur-3xl opacity-80 transition-opacity duration-700 pointer-events-none z-0"
      />

      {/* Organic Edge-Blended Portrait Wrapper (No Card Borders) */}
      <div
        ref={imageRef}
        className="relative w-[260px] h-[340px] sm:w-[320px] sm:h-[420px] lg:w-[380px] lg:h-[490px] overflow-hidden z-10"
        style={{
          maskImage: 'radial-gradient(ellipse at center, black 55%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 55%, transparent 95%)',
        }}
      >
        {!hasError ? (
          <Image
            src={imagePath}
            alt="Dev Sahu — AI/ML Engineer & Full-Stack Developer"
            fill
            priority
            sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 380px"
            className="object-cover object-center filter contrast-[1.08] brightness-[0.96] transition-all duration-700 ease-out"
            onError={() => setHasError(true)}
          />
        ) : (
          /* Organic Fallback */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-surface text-center rounded-3xl border border-white/10">
            <span className="font-display text-4xl font-bold text-accent mb-2">DS</span>
            <span className="font-mono text-xs text-muted">DEV SAHU</span>
          </div>
        )}

        {/* Soft Vignette Bottom Shadow for Seamless Text Integration */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60" />
      </div>
    </div>
  );
};
