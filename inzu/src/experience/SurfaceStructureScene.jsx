import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function SurfaceStructureScene({ progress = 0 }) {
  const groupRef = useRef();
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  const roughness = THREE.MathUtils.lerp(0.2, 0.8, progress);
  const metalness = THREE.MathUtils.lerp(0.1, 0.0, progress);
  const clearcoat = THREE.MathUtils.lerp(0.8, 0.0, progress);
  const opacity = THREE.MathUtils.lerp(1, 0.3, progress);
  const isWireframe = progress > 0.5;

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[1.5, 4]} />
        <meshPhysicalMaterial 
          color={isWireframe ? "#333333" : "#e8e4e0"} 
          roughness={roughness} 
          metalness={metalness} 
          clearcoat={clearcoat} 
          transparent 
          opacity={opacity}
          wireframe={isWireframe}
        />
      </mesh>
      
      {isWireframe && (
        <mesh scale={[1.02, 1.02, 1.02]}>
          <icosahedronGeometry args={[1.5, 4]} />
          <meshBasicMaterial color="#555555" wireframe transparent opacity={0.5} />
        </mesh>
      )}
    </group>
  );
}
