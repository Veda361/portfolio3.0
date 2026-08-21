import gsap from 'gsap';
import { prefersReducedMotion } from './config';

/**
 * Utility to execute word-by-word or line-by-line GSAP text reveal
 */
export const revealText = (
  element: HTMLElement | string,
  options: { delay?: number; duration?: number; stagger?: number } = {}
) => {
  if (prefersReducedMotion()) return;

  const { delay = 0, duration = 0.8, stagger = 0.08 } = options;

  gsap.fromTo(
    element,
    { opacity: 0, y: 24, filter: 'blur(4px)' },
    {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration,
      stagger,
      delay,
      ease: 'power3.out',
    }
  );
};
