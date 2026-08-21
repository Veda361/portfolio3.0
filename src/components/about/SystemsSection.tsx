import React from 'react';
import { SectionReveal } from '@/components/animations/SectionReveal';

export const SystemsSection: React.FC = () => {
  return (
    <section id="systems" className="py-28 px-6 sm:px-8 lg:px-12 border-t border-white/5 relative">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <div className="flex items-center space-x-3 mb-12 text-xs font-mono text-muted tracking-widest uppercase">
            <span className="text-accent font-semibold">03 / DOMAIN ARCHITECTURE</span>
            <span className="w-12 h-[1px] bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="editorial-card p-8 rounded-2xl space-y-4 group">
              <span className="font-mono text-xs text-accent tracking-widest uppercase">STAGE 01</span>
              <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-white transition-colors">
                AI / ML Intelligence
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Machine learning models, natural language processing, computer vision pipelines, and scalable inference systems.
              </p>
            </div>

            <div className="editorial-card p-8 rounded-2xl space-y-4 group">
              <span className="font-mono text-xs text-accent tracking-widest uppercase">STAGE 02</span>
              <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-white transition-colors">
                Full-Stack Platforms
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                High-throughput REST & WebSocket APIs, microservices, relational database schemas, and modern dynamic UIs.
              </p>
            </div>

            <div className="editorial-card p-8 rounded-2xl space-y-4 group">
              <span className="font-mono text-xs text-accent-secondary tracking-widest uppercase">STAGE 03</span>
              <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-white transition-colors">
                Connected Hardware
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Microcontroller firmware, embedded sensor telemetry arrays, TinyML edge models, and hardware-software integration.
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
