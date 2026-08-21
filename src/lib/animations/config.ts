/**
 * Centralized Animation Configuration & Motion System
 */

export const MOTION_DURATIONS = {
  micro: 0.25,      // Button hover, micro feedback
  ui: 0.4,          // Menu toggles, modal open
  section: 0.8,     // Section reveals, card entrances
  cinematic: 1.2,   // Hero title sequences
};

export const MOTION_EASINGS = {
  powerOut: "power3.out",
  powerInOut: "power3.inOut",
  backOut: "back.out(1.4)",
  customSmooth: "cubic-bezier(0.16, 1, 0.3, 1)",
};

export const Z_INDEX = {
  background: 0,
  canvas3d: 10,
  content: 20,
  stickyNav: 40,
  progress: 45,
  mobileMenu: 50,
  modal: 60,
  cursor: 100,
};

export const isBrowser = (): boolean => {
  return typeof window !== "undefined";
};

export const isTouchDevice = (): boolean => {
  if (!isBrowser()) return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

export const prefersReducedMotion = (): boolean => {
  if (!isBrowser()) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};
