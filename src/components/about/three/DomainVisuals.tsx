'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere, Line, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

// 1. Stage 01: AI (Neural Intelligence Cluster)
export const AiDomainVisual: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4;
      groupRef.current.rotation.x += delta * 0.15;
    }
  });

  const nodes: [number, number, number][] = [
    [0, 1.4, 0],
    [-1.2, -0.6, 0.4],
    [1.2, -0.6, -0.4],
    [0, 0, 1.1],
  ];

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh>
          <icosahedronGeometry args={[0.9, 1]} />
          <MeshWobbleMaterial color="#3b82f6" wireframe factor={0.4} speed={1.5} emissive="#1d4ed8" emissiveIntensity={0.6} />
        </mesh>
        {nodes.map((pos, i) => (
          <group key={i}>
            <mesh position={pos}>
              <sphereGeometry args={[0.15, 16, 16]} />
              <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={1} />
            </mesh>
            <Line points={[[0, 0, 0], pos]} color="#3b82f6" lineWidth={1.5} />
          </group>
        ))}
      </Float>
    </group>
  );
};

// 2. Stage 02: SOFTWARE (Full-Stack Geometry Flow)
export const SoftwareDomainVisual: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.35;
      groupRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2.2} rotationIntensity={0.4} floatIntensity={0.7}>
        <mesh>
          <octahedronGeometry args={[1.2, 0]} />
          <meshStandardMaterial color="#8b5cf6" wireframe emissive="#6d28d9" emissiveIntensity={0.7} />
        </mesh>
        <mesh rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[2.0, 0.04, 16, 80]} />
          <meshStandardMaterial color="#c084fc" emissive="#a855f7" emissiveIntensity={0.9} />
        </mesh>
      </Float>
    </group>
  );
};

// 3. Stage 03: HARDWARE (Edge Sensor Micro-Chip)
export const HardwareDomainVisual: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.45;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh>
          <boxGeometry args={[1.6, 1.6, 0.2]} />
          <meshStandardMaterial color="#10b981" wireframe emissive="#047857" emissiveIntensity={0.7} />
        </mesh>
        {[-0.8, 0.8].map((x, i) =>
          [-0.8, 0.8].map((y, j) => (
            <mesh key={`${i}-${j}`} position={[x, y, 0.15]}>
              <sphereGeometry args={[0.12, 12, 12]} />
              <meshStandardMaterial color="#34d399" emissive="#059669" emissiveIntensity={1} />
            </mesh>
          ))
        )}
      </Float>
    </group>
  );
};

// 4. Stage 04: CONVERGENCE (Intelligent Systems Core)
export const ConvergenceDomainVisual: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.6;
      groupRef.current.rotation.x += delta * 0.25;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.9}>
        <Sphere args={[1.0, 32, 32]}>
          <MeshWobbleMaterial color="#38bdf8" wireframe factor={0.5} speed={2} emissive="#0284c7" emissiveIntensity={0.9} />
        </Sphere>
        <mesh rotation={[Math.PI / 3, 0, Math.PI / 6]}>
          <torusGeometry args={[2.2, 0.05, 16, 100]} />
          <meshStandardMaterial color="#93c5fd" emissive="#3b82f6" emissiveIntensity={1} />
        </mesh>
      </Float>
    </group>
  );
};
