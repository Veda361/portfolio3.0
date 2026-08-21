'use client';

import * as React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  BazaarioVisual,
  AiInterviewVisual,
  ExpenditureVisual,
  HackmateVisual,
  AiDefenceVisual,
  TinyMLVisual,
} from './ProjectVisuals';

interface Project3DCanvasProps {
  activeProjectId: string;
  isHovered?: boolean;
  className?: string;
}

export const Project3DCanvas: React.FC<Project3DCanvasProps> = ({
  activeProjectId,
  isHovered = false,
  className = '',
}) => {
  const renderVisual = () => {
    switch (activeProjectId) {
      case 'bazaario':
        return <BazaarioVisual isHovered={isHovered} />;
      case 'ai-interview-platform':
        return <AiInterviewVisual isHovered={isHovered} />;
      case 'personal-expenditure-tracker':
        return <ExpenditureVisual isHovered={isHovered} />;
      case 'hackmate':
        return <HackmateVisual isHovered={isHovered} />;
      case 'ai-cyber-defence':
        return <AiDefenceVisual isHovered={isHovered} />;
      case 'tinyml-smart-device':
        return <TinyMLVisual isHovered={isHovered} />;
      default:
        return <BazaarioVisual isHovered={isHovered} />;
    }
  };

  return (
    <div className={`relative w-full h-full min-h-[320px] lg:min-h-[420px] ${className}`} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        <Suspense fallback={null}>{renderVisual()}</Suspense>
      </Canvas>
    </div>
  );
};
