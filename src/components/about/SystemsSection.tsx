'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { SectionReveal } from '@/components/animations/SectionReveal';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { prefersReducedMotion, isTouchDevice } from '@/lib/animations';
import { Cpu, Zap, Globe, Layers } from 'lucide-react';

const System3DCanvas = dynamic(
  () => import('./three/System3DCanvas').then((mod) => mod.System3DCanvas),
  { ssr: false }
);

type StageType = 'ai' | 'software' | 'hardware' | 'convergence';

export const SystemsSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<StageType>('ai');
  const [isMobileOrReduced, setIsMobileOrReduced] = useState(false);

  useEffect(() => {
    if (isTouchDevice() || prefersReducedMotion() || window.innerWidth < 768) {
      setIsMobileOrReduced(true);
    }
  }, []);

  const stages: {
    id: StageType;
    number: string;
    title: string;
    tag: string;
    icon: typeof Cpu;
    description: string;
    details: string[];
    accentColor: string;
  }[] = [
    {
      id: 'ai',
      number: '01',
      title: 'AI / ML Intelligence',
      tag: 'MACHINE LEARNING PIPELINES',
      icon: Cpu,
      description: 'Machine learning models, natural language processing, computer vision pipelines, and low-latency inference engines.',
      details: ['PyTorch / Scikit-learn', 'NLP & Matching Vectors', 'Cyber Incident Analysis'],
      accentColor: 'text-accent border-accent/40 bg-accent/10',
    },
    {
      id: 'software',
      number: '02',
      title: 'Full-Stack Software Platforms',
      tag: 'SCALABLE ARCHITECTURE',
      icon: Zap,
      description: 'High-throughput REST & WebSocket APIs, microservices, relational database schemas, and responsive web clients.',
      details: ['FastAPI / Node.js', 'PostgreSQL / WebSockets', 'Next.js & React UIs'],
      accentColor: 'text-accent-secondary border-accent-secondary/40 bg-accent-secondary/10',
    },
    {
      id: 'hardware',
      number: '03',
      title: 'Connected Edge Hardware',
      tag: 'EMBEDDED IoT & TinyML',
      icon: Globe,
      description: 'Microcontroller firmware, embedded sensor telemetry arrays, TinyML edge models, and physical computing integration.',
      details: ['Arduino / ESP32 Firmware', 'TinyML Edge Models', 'Sensor Telemetry Arrays'],
      accentColor: 'text-emerald-400 border-emerald-400/40 bg-emerald-400/10',
    },
    {
      id: 'convergence',
      number: '04',
      title: 'Intelligent Systems Convergence',
      tag: 'UNIFIED ARCHITECTURE',
      icon: Layers,
      description: 'The seamless convergence of AI models, full-stack software architectures, and connected physical hardware into unified intelligent experiences.',
      details: ['End-to-End Edge-to-Cloud', 'Real-Time Telemetry & Action', 'Continuous Intelligence'],
      accentColor: 'text-cyan-300 border-cyan-300/40 bg-cyan-300/10',
    },
  ];

  const currentStageObj = stages.find((s) => s.id === activeStage) || stages[0];

  return (
    <section id="systems" className="py-32 px-6 sm:px-8 lg:px-12 border-t border-white/5 relative bg-spotlight">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          
          {/* Section Header */}
          <div className="flex items-center space-x-3 mb-6 text-xs font-mono text-muted tracking-widest uppercase">
            <span className="text-accent font-semibold">03 / DOMAIN ARCHITECTURE & CONVERGENCE</span>
            <span className="w-12 h-[1px] bg-white/10" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                AI ── SOFTWARE ── HARDWARE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent-secondary">
                  CONVERGENCE.
                </span>
              </h2>
            </div>
            <p className="text-muted text-sm max-w-md font-sans">
              Moving from raw machine learning models through high-throughput software layers down to connected edge hardware.
            </p>
          </div>

          {/* Interactive Domain Stage Filter Switcher */}
          <div className="flex flex-wrap items-center gap-3 mb-12 border-b border-white/10 pb-6">
            {stages.map((stage) => {
              const isSelected = activeStage === stage.id;
              const IconComponent = stage.icon;

              return (
                <MagneticButton key={stage.id} strength={8}>
                  <button
                    onClick={() => setActiveStage(stage.id)}
                    className={`flex items-center space-x-2.5 px-5 py-2.5 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-300 ${
                      isSelected
                        ? 'bg-foreground text-background font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                        : 'glass-panel text-muted hover:text-foreground border border-white/10 hover:border-white/30'
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${isSelected ? 'text-background' : 'text-accent'}`} />
                    <span>STAGE {stage.number} {"//"} {stage.id.toUpperCase()}</span>
                  </button>
                </MagneticButton>
              );
            })}
          </div>

          {/* Interactive Stage Showcase Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: 3D Stage Viewport / 2D Fallback */}
            <div className="lg:col-span-6">
              <div className="editorial-card p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between min-h-[360px] lg:min-h-[440px] border border-white/15 bg-[#0a0a0a]">
                <div className="absolute -inset-10 bg-gradient-to-tr from-accent/15 via-accent-secondary/10 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none" />

                <div className="flex items-center justify-between text-xs font-mono text-muted border-b border-white/10 pb-4 relative z-10">
                  <span className="text-accent font-semibold">STAGE {currentStageObj.number} VIEWPORT</span>
                  <span className="text-foreground">{currentStageObj.tag}</span>
                </div>

                {!isMobileOrReduced ? (
                  <div className="w-full h-full relative my-auto">
                    <System3DCanvas stageId={activeStage} />
                  </div>
                ) : (
                  <div className="my-auto py-10 text-center space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-2xl border border-accent/40 bg-accent/10 flex items-center justify-center text-accent font-display text-2xl font-bold">
                      {currentStageObj.number}
                    </div>
                    <p className="font-mono text-xs text-muted uppercase tracking-wider">
                      {currentStageObj.title}
                    </p>
                  </div>
                )}

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono relative z-10">
                  <span className="text-muted">DOMAIN METAPHOR:</span>
                  <span className="text-accent font-semibold">{currentStageObj.id.toUpperCase()} SYSTEM</span>
                </div>
              </div>
            </div>

            {/* Right Column: Active Stage Narrative & Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1 rounded-full border text-xs font-mono uppercase tracking-wider border-white/10 bg-surface">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-foreground font-semibold">STAGE {currentStageObj.number} {"//"} {currentStageObj.tag}</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                {currentStageObj.title}
              </h3>

              <p className="text-muted text-base leading-relaxed font-sans font-normal">
                {currentStageObj.description}
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono text-accent tracking-widest uppercase block">
                  KEY DOMAIN CAPABILITIES
                </span>
                {currentStageObj.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-xs font-mono text-foreground/90 bg-surface/80 p-3.5 rounded-xl border border-white/5">
                    <span className="text-accent font-bold">0{idx + 1} {"//"}</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </SectionReveal>
      </div>
    </section>
  );
};
