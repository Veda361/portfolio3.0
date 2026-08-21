'use client';

import * as React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  AiDomainVisual,
  SoftwareDomainVisual,
  HardwareDomainVisual,
  ConvergenceDomainVisual,
} from './DomainVisuals';

interface System3DCanvasProps {
  stageId: 'ai' | 'software' | 'hardware' | 'convergence';
  className?: string;
}

export const System3DCanvas: React.FC<System3DCanvasProps> = ({
  stageId,
  className = '',
}) => {
  const renderStageVisual = () => {
    switch (stageId) {
      case 'ai':
        return <AiDomainVisual />;
      case 'software':
        return <SoftwareDomainVisual />;
      case 'hardware':
        return <HardwareDomainVisual />;
      case 'convergence':
        return <ConvergenceDomainVisual />;
      default:
        return <ConvergenceDomainVisual />;
    }
  };

  return (
    <div className={`relative w-full h-full min-h-[300px] sm:min-h-[380px] ${className}`} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        <Suspense fallback={null}>{renderStageVisual()}</Suspense>
      </Canvas>
    </div>
  );
};
