'use client';

import React, { useRef, useEffect, useState } from 'react';
import { isTouchDevice, prefersReducedMotion } from '@/lib/animations';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  strength = 12,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (isTouchDevice() || prefersReducedMotion() || window.innerWidth < 768) {
      setIsDisabled(true);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDisabled || !buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (e.clientX - centerX) / (rect.width / 2);
    const distanceY = (e.clientY - centerY) / (rect.height / 2);

    const moveX = distanceX * strength;
    const moveY = distanceY * strength;

    buttonRef.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0px)`;
  };

  const handleMouseLeave = () => {
    if (isDisabled || !buttonRef.current) return;
    buttonRef.current.style.transform = 'translate3d(0px, 0px, 0px)';
  };

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </div>
  );
};
