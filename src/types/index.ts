export interface Profile {
  name: string;
  primaryRoles: string[];
  heroStatement: string;
  bio: string;
  location?: string;
  availability?: string;
}

export type ProjectCategory = 'AI / Full Stack' | 'Full Stack / E-Commerce' | 'Full Stack / Finance' | 'AI / Cybersecurity' | 'AI / IoT / Embedded' | string;
export type ProjectStatus = 'Production' | 'Prototype' | 'Research' | 'Experimental' | 'In Development';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  architectureOverview?: string;
  technicalChallenges?: string[];
  plannedCapabilities?: string[];
  completedCapabilities?: string[];
}

export interface SkillItem {
  name: string;
  category: 'Languages' | 'AI / ML' | 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Hardware';
  level?: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  achievements?: string[];
  isPlaceholder?: boolean;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  resume: string;
}

export interface NavItem {
  label: string;
  href: string;
}
