import React from 'react';
import { socialData } from '@/data/social';
import { ArrowUpRight, Mail, Github, Linkedin, FileText } from 'lucide-react';
import { SectionReveal } from '@/components/animations/SectionReveal';
import { MagneticButton } from '@/components/ui/MagneticButton';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 sm:px-8 lg:px-12 border-t border-white/5 relative bg-spotlight">
      <div className="max-w-5xl mx-auto text-left sm:text-center space-y-8">
        <SectionReveal>
          <div className="inline-flex items-center space-x-3 text-xs font-mono text-muted tracking-widest uppercase">
            <span className="text-accent font-semibold">07 / CONCLUSION</span>
            <span className="w-12 h-[1px] bg-white/10" />
          </div>

          {/* Large Editorial Headline */}
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05] mt-4">
            LET&apos;S BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent-secondary">
              SOMETHING INTELLIGENT.
            </span>
          </h2>

          <p className="text-muted text-base sm:text-lg max-w-xl sm:mx-auto font-sans leading-relaxed pt-2">
            Open for engineering opportunities, AI/ML research collaborations, high-throughput software architectures, and hardware projects.
          </p>

          {/* Minimal Action Links Bar */}
          <div className="pt-8 flex flex-wrap items-center justify-start sm:justify-center gap-6">
            {socialData.email && (
              <MagneticButton strength={12}>
                <a
                  href={socialData.email}
                  className="group inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-foreground text-background font-mono text-xs font-bold tracking-wider uppercase hover:bg-white transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4" />
                  <span>EMAIL ME</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </MagneticButton>
            )}

            {socialData.github && (
              <MagneticButton strength={10}>
                <a
                  href={socialData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-4 rounded-full border border-white/15 text-foreground font-mono text-xs tracking-wider uppercase hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  <span>GITHUB</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                </a>
              </MagneticButton>
            )}

            {socialData.linkedin && (
              <MagneticButton strength={10}>
                <a
                  href={socialData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-4 rounded-full border border-white/15 text-foreground font-mono text-xs tracking-wider uppercase hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LINKEDIN</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                </a>
              </MagneticButton>
            )}

            {socialData.resume && (
              <MagneticButton strength={10}>
                <a
                  href={socialData.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-4 rounded-full border border-white/15 text-foreground font-mono text-xs tracking-wider uppercase hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                >
                  <FileText className="w-4 h-4" />
                  <span>RESUME</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                </a>
              </MagneticButton>
            )}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
