'use client';

import React, { useEffect, useRef, useState } from 'react';
import { isTouchDevice, prefersReducedMotion } from '@/lib/animations';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch devices, small viewports, or reduced motion
    if (isTouchDevice() || prefersReducedMotion() || window.innerWidth < 768) {
      setIsDisabled(true);
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('interactive'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const render = () => {
      // Direct DOM update via rAF for 60 FPS interpolation without React state lag
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0px) translate(-50%, -50%)`;
      }

      // Smooth lerp for trailing outer ring
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0px) translate(-50%, -50%)`;
      }

      animId = window.requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    animId = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (isDisabled) return null;

  return (
    <>
      {/* Primary Sharp Cursor Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full bg-accent z-[100] pointer-events-none transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Trailing Outer Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border z-[100] pointer-events-none transition-all duration-300 ease-out ${
          isHovered
            ? 'w-12 h-12 border-accent/60 bg-accent/10 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
            : 'w-8 h-8 border-white/25 bg-transparent'
        } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      />
    </>
  );
};
