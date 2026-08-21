import { NavItem } from '@/types';

export const SITE_CONFIG = {
  name: "Dev Sahu Portfolio",
  author: "Dev Sahu",
  title: "Dev Sahu — AI/ML Engineer & Full-Stack Developer",
  description: "Personal portfolio of Dev Sahu, AI/ML Engineer, Full-Stack Developer, and IoT / Intelligent Systems Builder.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://devsahu.dev",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "WORK", href: "#projects" },
  { label: "ABOUT", href: "#about" },
  { label: "SYSTEMS", href: "#systems" },
  { label: "SKILLS", href: "#skills" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
  { label: "RESUME", href: "/resume.pdf" },
];

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};
