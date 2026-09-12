import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import useStore from '../store/useStore';

export function ScanEffect() {
  const mode = useStore((state) => state.characterMode);
  const inspectionActive = useStore((state) => state.inspectionActive);
  const scanRef = useRef();
  const matRef = useRef();

  useFrame(({ clock }) => {
    if (scanRef.current) {
      const t = clock.getElapsedTime();
      scanRef.current.position.y = 1.75 + Math.sin(t * 2) * 1.75; // 0 to 3.5
    }
    if (matRef.current) {
      matRef.current.opacity = 0.5 + Math.sin(clock.getElapsedTime() * 10) * 0.3;
    }
  });

  if (mode !== 'scan') return null;

  const htmlStyle = {
    fontFamily: 'var(--font-mono, monospace)',
    fontSize: '10px',
    color: '#00ffcc',
    letterSpacing: '0.15em',
    pointerEvents: 'none'
  };

  return (
    <group visible={inspectionActive || mode === 'scan'}>
      <mesh ref={scanRef} position={[0, 0, 0]}>
        <planeGeometry args={[3, 0.02]} />
        <meshBasicMaterial ref={matRef} color="#00ffcc" transparent opacity={0.8} depthWrite={false} />
      </mesh>
      
      {[0.5, 1.2, 1.9, 2.6, 3.3].map((y, i) => (
        <mesh key={`grid-${i}`} position={[0, y, 0]}>
          <planeGeometry args={[3, 0.005]} />
          <meshBasicMaterial color="#00ffcc" transparent opacity={0.1} />
        </mesh>
      ))}

      <Html position={[1.5, 3.2, 0]} center style={htmlStyle}>SILHOUETTE</Html>
      <Html position={[-1.5, 2.6, 0]} center style={htmlStyle}>FORM</Html>
      <Html position={[1.5, 1.8, 0]} center style={htmlStyle}>FABRIC</Html>
      <Html position={[-1.5, 1.2, 0]} center style={htmlStyle}>MATERIAL</Html>
      <Html position={[1.5, 0.5, 0]} center style={htmlStyle}>GEOMETRY</Html>
    </group>
  );
}
