import React from 'react';
import { LenisProvider } from '@/components/animations/LenisProvider';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { Navbar } from '@/components/navigation/Navbar';
import { HeroSection } from '@/components/hero/HeroSection';
import { AboutSection } from '@/components/about/AboutSection';
import { SystemsSection } from '@/components/about/SystemsSection';
import { ProjectsSection } from '@/components/projects/ProjectsSection';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { ExperienceSection } from '@/components/experience/ExperienceSection';
import { ContactSection } from '@/components/contact/ContactSection';

export default function Home() {
  return (
    <LenisProvider>
      <div className="relative min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-white">
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main className="relative z-20">
          <HeroSection />
          <AboutSection />
          <SystemsSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <footer className="py-12 border-t border-white/5 text-center text-xs font-mono text-muted bg-[#050505] relative z-20">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Dev Sahu. All rights reserved.</p>
            <p className="text-foreground/70">CREATIVE DEVELOPER × AI ENGINEER</p>
          </div>
        </footer>
      </div>
    </LenisProvider>
  );
}
