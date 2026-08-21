'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere, Line, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

// 1. Bazaario (01): Floating Commerce Core & Data Flow Rings
export const BazaarioVisual: React.FC<{ isHovered?: boolean }> = ({ isHovered = false }) => {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * (isHovered ? 0.8 : 0.3);
    }
    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.4;
      ringRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        {/* Central Core */}
        <mesh>
          <icosahedronGeometry args={[1.2, 1]} />
          <MeshWobbleMaterial
            color="#3b82f6"
            wireframe
            factor={0.4}
            speed={1.5}
            emissive="#1d4ed8"
            emissiveIntensity={0.6}
          />
        </mesh>

        {/* Orbiting Commerce Ring */}
        <mesh ref={ringRef}>
          <torusGeometry args={[2.2, 0.04, 16, 100]} />
          <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={0.8} />
        </mesh>

        {/* Floating Transaction Nodes */}
        {[0, 1, 2, 3].map((i) => {
          const angle = (i / 4) * Math.PI * 2;
          const radius = 2.2;
          return (
            <mesh key={i} position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}>
              <boxGeometry args={[0.25, 0.25, 0.25]} />
              <meshStandardMaterial color="#93c5fd" emissive="#3b82f6" emissiveIntensity={1} />
            </mesh>
          );
        })}
      </Float>
    </group>
  );
};

// 2. AI Interview Platform (02): Conversational Neural Waveform Ring
export const AiInterviewVisual: React.FC<{ isHovered?: boolean }> = ({ isHovered = false }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * (isHovered ? 0.7 : 0.35);
      groupRef.current.rotation.z += delta * 0.2;
    }
  });

  const points: [number, number, number][] = [];
  const total = 32;
  for (let i = 0; i <= total; i++) {
    const angle = (i / total) * Math.PI * 2;
    const r = 2.0 + Math.sin(i * 0.8) * 0.3;
    points.push([Math.cos(angle) * r, Math.sin(angle) * r, 0]);
  }

  return (
    <group ref={groupRef}>
      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.9}>
        {/* Central Audio / Speech Processing Sphere */}
        <Sphere args={[0.9, 32, 32]}>
          <meshStandardMaterial
            color="#8b5cf6"
            wireframe
            emissive="#7c3aed"
            emissiveIntensity={0.7}
          />
        </Sphere>

        {/* Waveform Ring */}
        <Line points={points} color="#c084fc" lineWidth={2} />

        {/* Neural Nodes */}
        {[0, 1, 2, 3, 4, 5].map((idx) => {
          const a = (idx / 6) * Math.PI * 2;
          return (
            <mesh key={idx} position={[Math.cos(a) * 2.2, Math.sin(a) * 2.2, 0]}>
              <sphereGeometry args={[0.12, 16, 16]} />
              <meshStandardMaterial color="#e9d5ff" emissive="#a855f7" emissiveIntensity={1} />
            </mesh>
          );
        })}
      </Float>
    </group>
  );
};

// 3. Personal Expenditure Tracker (03): Financial Analytics Bar Matrix
export const ExpenditureVisual: React.FC<{ isHovered?: boolean }> = ({ isHovered = false }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * (isHovered ? 0.6 : 0.25);
    }
  });

  const barHeights = [0.8, 1.4, 2.0, 1.2, 1.8];

  return (
    <group ref={groupRef}>
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
        {/* Bar Vector Matrix */}
        <group position={[-1.2, -0.6, 0]}>
          {barHeights.map((h, i) => (
            <mesh key={i} position={[i * 0.6, h / 2, 0]}>
              <boxGeometry args={[0.3, h, 0.3]} />
              <meshStandardMaterial
                color="#38bdf8"
                emissive="#0284c7"
                emissiveIntensity={0.8}
                wireframe
              />
            </mesh>
          ))}
        </group>

        {/* Surrounding Financial Flow Orbit */}
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.0, 0.03, 16, 80]} />
          <meshStandardMaterial color="#7dd3fc" emissive="#0369a1" emissiveIntensity={0.9} />
        </mesh>
      </Float>
    </group>
  );
};

// 4. HackMate (04): Connected Matching Network Cluster
export const HackmateVisual: React.FC<{ isHovered?: boolean }> = ({ isHovered = false }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * (isHovered ? 0.9 : 0.4);
      groupRef.current.rotation.x += delta * 0.2;
    }
  });

  const nodePositions: [number, number, number][] = [
    [0, 1.6, 0],
    [-1.5, -0.8, 0.5],
    [1.5, -0.8, -0.5],
    [0, 0, 1.2],
    [0, 0, -1.2],
  ];

  return (
    <group ref={groupRef}>
      <Float speed={2.2} rotationIntensity={0.5} floatIntensity={0.8}>
        {/* Central Teammate Matching Hub */}
        <mesh position={[0, 0, 0]}>
          <octahedronGeometry args={[0.9, 0]} />
          <meshStandardMaterial color="#60a5fa" emissive="#2563eb" emissiveIntensity={0.9} wireframe />
        </mesh>

        {/* Outer Node Cluster */}
        {nodePositions.map((pos, idx) => (
          <group key={idx}>
            <mesh position={pos}>
              <sphereGeometry args={[0.18, 16, 16]} />
              <meshStandardMaterial color="#93c5fd" emissive="#3b82f6" emissiveIntensity={1} />
            </mesh>
            <Line points={[[0, 0, 0], pos]} color="#60a5fa" lineWidth={1.5} />
          </group>
        ))}
      </Float>
    </group>
  );
};

// 5. AI Defence System (05): Security Telemetry Threat Correlation Core
export const AiDefenceVisual: React.FC<{ isHovered?: boolean }> = ({ isHovered = false }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * (isHovered ? 1.0 : 0.45);
      groupRef.current.rotation.z += delta * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.7} floatIntensity={0.7}>
        {/* Central Threat Intelligence Core */}
        <mesh>
          <dodecahedronGeometry args={[1.1, 0]} />
          <meshStandardMaterial color="#f43f5e" emissive="#be123c" emissiveIntensity={0.8} wireframe />
        </mesh>

        {/* Security Shield Ring */}
        <mesh rotation={[Math.PI / 4, 0, Math.PI / 4]}>
          <torusGeometry args={[2.2, 0.05, 16, 60]} />
          <meshStandardMaterial color="#fb7185" emissive="#e11d48" emissiveIntensity={0.9} />
        </mesh>
      </Float>
    </group>
  );
};

// 6. TinyML Smart Edge Device (06): Embedded Sensor Telemetry Core
export const TinyMLVisual: React.FC<{ isHovered?: boolean }> = ({ isHovered = false }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * (isHovered ? 0.75 : 0.35);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.7}>
        {/* Micro-Chip Board Representation */}
        <mesh>
          <boxGeometry args={[1.8, 1.8, 0.15]} />
          <meshStandardMaterial color="#10b981" emissive="#047857" emissiveIntensity={0.6} wireframe />
        </mesh>

        {/* Central TinyML Engine */}
        <mesh position={[0, 0, 0.15]}>
          <boxGeometry args={[0.8, 0.8, 0.15]} />
          <meshStandardMaterial color="#34d399" emissive="#059669" emissiveIntensity={1} />
        </mesh>

        {/* Edge Sensor Telemetry Nodes */}
        {[-0.9, 0.9].map((x, i) =>
          [-0.9, 0.9].map((y, j) => (
            <mesh key={`${i}-${j}`} position={[x, y, 0.1]}>
              <cylinderGeometry args={[0.1, 0.1, 0.15, 8]} />
              <meshStandardMaterial color="#a7f3d0" emissive="#10b981" emissiveIntensity={1} />
            </mesh>
          ))
        )}
      </Float>
    </group>
  );
};
