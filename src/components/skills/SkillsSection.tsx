'use client';

import React, { useState } from 'react';
import { skillsData } from '@/data/skills';
import { projectsData } from '@/data/projects';
import { experienceData } from '@/data/experience';
import { SectionReveal } from '@/components/animations/SectionReveal';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ArrowUpRight, Cpu, Code2, Database, Wrench, Globe, CheckCircle2, Layers, Briefcase } from 'lucide-react';

// Comprehensive Factual Technology Relationships & Project Mapping Model
const SKILL_RELATIONSHIPS: Record<string, { relatedTech: string[]; description: string }> = {
  Python: {
    relatedTech: ['FastAPI', 'PyTorch', 'Scikit-learn', 'SQLAlchemy', 'PostgreSQL', 'NLP', 'Computer Vision', 'SQL'],
    description: 'Core backend and AI development language used across ML pipelines, web APIs, and data processing.',
  },
  Java: {
    relatedTech: ['Python', 'SQL', 'Git'],
    description: 'Object-oriented programming language for software engineering foundations, data structures, and system design.',
  },
  JavaScript: {
    relatedTech: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'REST APIs'],
    description: 'Dynamic scripting language powering interactive client-side web interfaces and asynchronous applications.',
  },
  TypeScript: {
    relatedTech: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'GSAP'],
    description: 'Strongly typed superset of JavaScript providing compile-time type safety for complex frontend architectures.',
  },
  SQL: {
    relatedTech: ['PostgreSQL', 'SQLAlchemy', 'Alembic', 'Python', 'FastAPI'],
    description: 'Relational database query language for schema design, transactional queries, and data management.',
  },
  'Machine Learning': {
    relatedTech: ['Scikit-learn', 'PyTorch', 'Python', 'Deep Learning', 'NLP'],
    description: 'Algorithmic modeling domain focused on predictive feature engineering, regression, and pattern classification.',
  },
  'Deep Learning': {
    relatedTech: ['PyTorch', 'TensorFlow', 'Computer Vision', 'NLP', 'TinyML', 'Python'],
    description: 'Neural network architectures for high-dimensional feature learning, image recognition, and edge intelligence.',
  },
  NLP: {
    relatedTech: ['Python', 'Scikit-learn', 'Machine Learning', 'Deep Learning'],
    description: 'Natural Language Processing techniques for text vectorization, sentiment analysis, and intelligent match systems.',
  },
  'Computer Vision': {
    relatedTech: ['PyTorch', 'TensorFlow', 'Deep Learning', 'Python', 'TinyML'],
    description: 'Visual processing models for feature extraction, object detection, image classification, and sensor input analysis.',
  },
  'Scikit-learn': {
    relatedTech: ['Python', 'Machine Learning', 'NLP', 'FastAPI'],
    description: 'Machine learning library for feature extraction, classification, vector matching, and clustering algorithms.',
  },
  TensorFlow: {
    relatedTech: ['Deep Learning', 'PyTorch', 'TinyML', 'Python', 'Computer Vision'],
    description: 'Open-source machine learning framework for training neural models and exporting quantized edge inference assets.',
  },
  PyTorch: {
    relatedTech: ['Python', 'Deep Learning', 'Computer Vision', 'NLP', 'Machine Learning'],
    description: 'Deep learning framework for training neural networks, computer vision models, and telemetry classifiers.',
  },
  React: {
    relatedTech: ['Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
    description: 'Frontend component framework for dynamic interactive user interfaces and responsive web applications.',
  },
  'Next.js': {
    relatedTech: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI'],
    description: 'Full-stack React framework featuring App Router, server-side rendering, and API route architectures.',
  },
  'Tailwind CSS': {
    relatedTech: ['React', 'Next.js', 'TypeScript', 'JavaScript'],
    description: 'Utility-first CSS framework enabling rapid custom styling, responsive layouts, and modern dark-mode visuals.',
  },
  'Framer Motion': {
    relatedTech: ['React', 'Next.js', 'GSAP', 'Tailwind CSS'],
    description: 'Declarative animation library for fluid UI state transitions and gesture-based component interactions.',
  },
  GSAP: {
    relatedTech: ['React', 'Next.js', 'JavaScript', 'Framer Motion'],
    description: 'High-performance JavaScript animation engine powering scroll-driven cinematic reveals and smooth motion.',
  },
  FastAPI: {
    relatedTech: ['Python', 'REST APIs', 'WebSockets', 'PostgreSQL', 'SQLAlchemy'],
    description: 'High-throughput asynchronous backend web framework for ML inference endpoints and WebSocket channels.',
  },
  'REST APIs': {
    relatedTech: ['FastAPI', 'Python', 'WebSockets', 'React', 'PostgreSQL'],
    description: 'Stateless HTTP protocol architectural style for client-server communication and JSON data exchanges.',
  },
  WebSockets: {
    relatedTech: ['FastAPI', 'React', 'Python', 'REST APIs'],
    description: 'Bi-directional real-time communication protocol for instant telemetry streaming and live collaborative features.',
  },
  PostgreSQL: {
    relatedTech: ['FastAPI', 'SQLAlchemy', 'Alembic', 'SQL', 'Python'],
    description: 'Relational database management system for ACID-compliant transactional persistence and analytical queries.',
  },
  Firebase: {
    relatedTech: ['React', 'FastAPI', 'PostgreSQL', 'Vercel'],
    description: 'Cloud backend platform providing real-time database synchronization, asset storage, and client authentication.',
  },
  SQLAlchemy: {
    relatedTech: ['Python', 'FastAPI', 'PostgreSQL', 'Alembic', 'SQL'],
    description: 'Python Object-Relational Mapper (ORM) providing clean database interaction abstraction and SQL generation.',
  },
  Alembic: {
    relatedTech: ['SQLAlchemy', 'PostgreSQL', 'FastAPI', 'Python', 'SQL'],
    description: 'Lightweight database migration tool for SQLAlchemy powering version-controlled relational schema changes.',
  },
  Git: {
    relatedTech: ['GitHub', 'Docker', 'Vercel', 'Railway'],
    description: 'Distributed version control system managing repository history, code branching, and deployment workflows.',
  },
  GitHub: {
    relatedTech: ['Git', 'Vercel', 'Railway', 'Render', 'Docker'],
    description: 'Cloud repository hosting platform for code collaboration, CI/CD automation, and release tracking.',
  },
  Docker: {
    relatedTech: ['Git', 'FastAPI', 'PostgreSQL', 'Render', 'Railway'],
    description: 'Containerization platform isolating software dependencies into portable runtime environments for cloud deployment.',
  },
  Vercel: {
    relatedTech: ['Next.js', 'React', 'Tailwind CSS', 'GitHub'],
    description: 'Global edge hosting platform optimized for serverless Next.js and React frontend web deployments.',
  },
  Railway: {
    relatedTech: ['FastAPI', 'PostgreSQL', 'Docker', 'Python'],
    description: 'Infrastructure platform for deploying backend services, database instances, and full-stack environments.',
  },
  Render: {
    relatedTech: ['FastAPI', 'Python', 'PostgreSQL', 'Docker'],
    description: 'Cloud application platform hosting web services, background workers, and managed databases with automated builds.',
  },
  Arduino: {
    relatedTech: ['ESP32', 'Sensors', 'TinyML', 'IoT'],
    description: 'Microcontroller hardware platform for physical computing, sensor reading, and embedded C/C++ firmware.',
  },
  ESP32: {
    relatedTech: ['Arduino', 'Sensors', 'TinyML', 'IoT'],
    description: '32-bit dual-core microcontroller with integrated Wi-Fi/Bluetooth for low-power edge AI IoT applications.',
  },
  Sensors: {
    relatedTech: ['Arduino', 'ESP32', 'TinyML', 'IoT'],
    description: 'Hardware telemetry transducers measuring physical phenomena including movement, environmental signals, and gestures.',
  },
  TinyML: {
    relatedTech: ['Arduino', 'ESP32', 'Sensors', 'PyTorch', 'IoT'],
    description: 'On-device machine learning inference deployed directly onto memory-constrained microcontrollers.',
  },
  IoT: {
    relatedTech: ['Arduino', 'ESP32', 'Sensors', 'TinyML', 'WebSockets'],
    description: 'Internet of Things network interconnecting physical edge devices, sensor streams, and centralized AI cloud services.',
  },
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeSkill, setActiveSkill] = useState<string | null>('FastAPI');

  const categories = [
    { id: 'ALL', label: 'ALL STACKS', icon: Layers },
    { id: 'AI / ML', label: 'AI / ML', icon: Cpu },
    { id: 'Frontend', label: 'FRONTEND', icon: Code2 },
    { id: 'Backend', label: 'BACKEND', icon: Code2 },
    { id: 'Database', label: 'DATABASE', icon: Database },
    { id: 'Tools & DevOps', label: 'TOOLS', icon: Wrench },
    { id: 'Hardware / IoT', label: 'HARDWARE / IoT', icon: Globe },
  ];

  const filteredData = selectedCategory === 'ALL'
    ? skillsData
    : skillsData.filter((cat) => cat.title === selectedCategory);

  const activeRelationship = activeSkill ? SKILL_RELATIONSHIPS[activeSkill] : null;
  const relatedTechList = activeRelationship ? activeRelationship.relatedTech : [];

  // Dynamic project matching based on authentic data
  const relatedProjectList = activeSkill
    ? projectsData.filter((p) =>
        p.technologies.some(
          (t) => t.toLowerCase().includes(activeSkill.toLowerCase()) || activeSkill.toLowerCase().includes(t.toLowerCase())
        )
      )
    : [];

  // Dynamic experience matching based on authentic data
  const relatedExperienceList = activeSkill
    ? experienceData.filter((e) =>
        e.technologies.some(
          (t) => t.toLowerCase().includes(activeSkill.toLowerCase()) || activeSkill.toLowerCase().includes(t.toLowerCase())
        )
      )
    : [];

  const handleSkillSelect = (skillName: string) => {
    setActiveSkill(skillName);
    // Smooth scroll to detail panel on mobile screens
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      const el = document.getElementById('tech-detail-panel');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  };

  return (
    <section id="skills" className="py-32 px-6 sm:px-8 lg:px-12 border-t border-white/5 relative bg-spotlight">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          
          {/* Section Header */}
          <div className="flex items-center space-x-3 mb-6 text-xs font-mono text-muted tracking-widest uppercase">
            <span className="text-accent font-semibold">05 / ENGINEERING STACK & GRAPH</span>
            <span className="w-12 h-[1px] bg-white/10" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                THE SYSTEMS BEHIND <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent-secondary">
                  THE WORK.
                </span>
              </h2>
            </div>
            <p className="text-muted text-sm max-w-md font-sans">
              Interactive technology graph mapping connections between engineering stacks, backend APIs, machine learning pipelines, deployed projects, and production experience.
            </p>
          </div>

          {/* System Flow Pipeline Bar */}
          <div className="mb-12 p-4 rounded-2xl bg-surface/80 border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-muted">
            <div className="flex items-center space-x-2 text-foreground font-semibold">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>SYSTEM ARCHITECTURE FLOW:</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-[11px] text-foreground/80">
              <span className="bg-background px-2.5 py-1 rounded border border-white/5">DATA PIPELINES</span>
              <span>→</span>
              <span className="bg-background px-2.5 py-1 rounded border border-white/5 text-accent">AI / ML MODELS</span>
              <span>→</span>
              <span className="bg-background px-2.5 py-1 rounded border border-white/5">FASTAPI / BACKEND</span>
              <span>→</span>
              <span className="bg-background px-2.5 py-1 rounded border border-white/5 text-accent-secondary">REACT / UIs</span>
              <span>→</span>
              <span className="bg-background px-2.5 py-1 rounded border border-white/5 text-emerald-400">EDGE HARDWARE</span>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-3 mb-12 border-b border-white/10 pb-6" role="tablist" aria-label="Technology Stack Categories">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const IconComp = cat.icon;

              return (
                <MagneticButton key={cat.id} strength={6}>
                  <button
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      isSelected
                        ? 'bg-foreground text-background font-bold shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                        : 'glass-panel text-muted hover:text-foreground border border-white/10 hover:border-white/30'
                    }`}
                  >
                    <IconComp className={`w-3.5 h-3.5 ${isSelected ? 'text-background' : 'text-accent'}`} />
                    <span>{cat.label}</span>
                  </button>
                </MagneticButton>
              );
            })}
          </div>

          {/* Interactive Technology Field & Detail Panel Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Technology Node Matrix */}
            <div className="lg:col-span-7 space-y-8">
              {filteredData.map((category) => (
                <div key={category.title} className="editorial-card p-6 sm:p-8 rounded-3xl space-y-4">
                  <h3 className="font-mono text-xs font-bold text-accent tracking-widest uppercase pb-3 border-b border-white/10 flex items-center justify-between">
                    <span>{category.title.toUpperCase()}</span>
                    <span className="text-muted/60 text-[10px]">{category.skills.length} TECHNOLOGIES</span>
                  </h3>

                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {category.skills.map((skill) => {
                      const isActive = activeSkill === skill.name;
                      const isRelated = relatedTechList.includes(skill.name);

                      return (
                        <button
                          key={skill.name}
                          type="button"
                          onClick={() => handleSkillSelect(skill.name)}
                          onMouseEnter={() => setActiveSkill(skill.name)}
                          aria-label={`Select ${skill.name}`}
                          className={`text-xs font-mono px-3.5 py-2 rounded-xl border transition-all duration-300 text-left flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                            isActive
                              ? 'bg-accent text-background font-bold border-accent shadow-[0_0_20px_rgba(59,130,246,0.5)] scale-105'
                              : isRelated
                              ? 'bg-accent/15 text-accent border-accent/50 font-semibold'
                              : 'bg-background text-foreground/80 border-white/10 hover:border-white/30 hover:text-white'
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-background' : isRelated ? 'bg-accent' : 'bg-white/20'}`} />
                          <span>{skill.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Technology Relationship Detail Panel */}
            <div id="tech-detail-panel" className="lg:col-span-5 lg:sticky lg:top-28">
              {activeSkill ? (
                <div className="editorial-card p-8 rounded-3xl space-y-6 border border-accent/40 bg-[#0d0d0d] shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <span className="text-[10px] font-mono text-accent tracking-widest uppercase block mb-1">
                        SELECTED TECHNOLOGY
                      </span>
                      <h3 className="font-display text-3xl font-bold text-foreground">
                        {activeSkill}
                      </h3>
                    </div>
                    <span className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                  </div>

                  {activeRelationship ? (
                    <p className="text-muted text-xs sm:text-sm font-sans leading-relaxed">
                      {activeRelationship.description}
                    </p>
                  ) : (
                    <p className="text-muted text-xs sm:text-sm font-sans leading-relaxed">
                      Engineering stack component deployed in production systems and architectural solutions.
                    </p>
                  )}

                  {/* Connected Technologies (Clickable) */}
                  {relatedTechList.length > 0 && (
                    <div className="space-y-3 pt-2">
                      <span className="text-[10px] font-mono text-accent tracking-widest uppercase block">
                        CONNECTED STACK NODES (CLICK TO EXPLORE)
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {relatedTechList.map((tech) => (
                          <button
                            key={tech}
                            type="button"
                            onClick={() => handleSkillSelect(tech)}
                            className="text-xs font-mono text-accent bg-accent/10 hover:bg-accent/20 px-3 py-1 rounded-lg border border-accent/30 hover:border-accent transition-all cursor-pointer text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                          >
                            + {tech}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Experience Milestones Utilizing Tech */}
                  {relatedExperienceList.length > 0 && (
                    <div className="space-y-3 pt-2 border-t border-white/10">
                      <span className="text-[10px] font-mono text-accent-secondary tracking-widest uppercase block">
                        EXPERIENCE MILESTONES
                      </span>
                      <div className="space-y-2">
                        {relatedExperienceList.map((exp) => (
                          <a
                            key={exp.id}
                            href="#experience"
                            className="group flex items-center justify-between p-3 rounded-xl bg-surface/80 border border-white/5 hover:border-white/20 transition-all text-xs font-mono"
                          >
                            <div className="flex items-center space-x-2">
                              <Briefcase className="w-3.5 h-3.5 text-accent-secondary flex-shrink-0" />
                              <div className="truncate">
                                <span className="text-foreground group-hover:text-white font-semibold block">{exp.role}</span>
                                <span className="text-muted text-[10px]">{exp.startDate} – {exp.endDate}</span>
                              </div>
                            </div>
                            <ArrowUpRight className="w-3.5 h-3.5 text-accent-secondary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0 ml-2" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Deployed Projects Utilizing Selected Tech */}
                  {relatedProjectList.length > 0 && (
                    <div className="space-y-3 pt-2 border-t border-white/10">
                      <span className="text-[10px] font-mono text-accent-secondary tracking-widest uppercase block">
                        DEPLOYED PROJECT INTEGRATIONS
                      </span>
                      <div className="space-y-2">
                        {relatedProjectList.map((project) => (
                          <a
                            key={project.id}
                            href={project.liveUrl || project.githubUrl || '#projects'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between p-3 rounded-xl bg-surface/80 border border-white/5 hover:border-white/20 transition-all text-xs font-mono"
                          >
                            <div className="flex items-center space-x-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                              <span className="text-foreground group-hover:text-white font-semibold">{project.title}</span>
                            </div>
                            <ArrowUpRight className="w-3.5 h-3.5 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="editorial-card p-8 rounded-3xl text-center text-muted font-mono text-xs space-y-2">
                  <p>HOVER OR CLICK ANY TECHNOLOGY NODE TO EXPLORE STACK RELATIONSHIPS.</p>
                </div>
              )}
            </div>

          </div>

        </SectionReveal>
      </div>
    </section>
  );
};
