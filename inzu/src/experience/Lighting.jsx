import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

export function Lighting() {
  const keyLightRef = useRef();
  const fillLightRef = useRef();

  useFrame((state) => {
    const { pointer } = state;

    // Key light subtly follows cursor — creates living, reactive feel
    if (keyLightRef.current) {
      const targetX = pointer.x * 1.5 + 3;
      const targetY = pointer.y * 0.8 + 4.5;
      keyLightRef.current.position.x = THREE.MathUtils.lerp(keyLightRef.current.position.x, targetX, 0.025);
      keyLightRef.current.position.y = THREE.MathUtils.lerp(keyLightRef.current.position.y, targetY, 0.025);
    }

    // Fill light gently counterbalances — opposite side of key
    if (fillLightRef.current) {
      const targetX = -pointer.x * 1.0 - 2.5;
      fillLightRef.current.position.x = THREE.MathUtils.lerp(fillLightRef.current.position.x, targetX, 0.02);
    }
  });

  return (
    <>
      {/* ── Ambient base — soft fill from all directions ── */}
      <ambientLight intensity={0.25} color="#f0ece8" />

      {/* ── Hemisphere light — sky/ground gradient for even studio fill ── */}
      <hemisphereLight
        color="#f5f0eb"       // Sky (warm white)
        groundColor="#1a1a2e" // Ground (deep blue-black)
        intensity={0.35}
      />

      {/* ── Key light — primary, cursor-reactive ── */}
      <spotLight
        ref={keyLightRef}
        position={[3, 4.5, 4]}
        intensity={2.0}
        angle={0.6}
        penumbra={0.9}
        color="#f0ece8"
        castShadow={false}
      />

      {/* ── Fill light — soft opposite side ── */}
      <spotLight
        ref={fillLightRef}
        position={[-3, 3.5, 3]}
        intensity={1.2}
        angle={0.7}
        penumbra={1}
        color="#d8d4e8"
        castShadow={false}
      />

      {/* ── Rim / back light — edge separation from background ── */}
      <pointLight
        position={[0, 3, -4]}
        intensity={1.5}
        color="#8888cc"
        distance={12}
        decay={2}
      />

      {/* ── Under light — fill harsh chin/under-coat shadows ── */}
      <pointLight
        position={[0, -0.3, 2]}
        intensity={0.4}
        color="#e8e4e0"
        distance={5}
        decay={2}
      />

      {/* ── Side accents — adds dimension during orbit ── */}
      <pointLight
        position={[4, 2, -2]}
        intensity={0.6}
        color="#ccbbdd"
        distance={8}
        decay={2}
      />
      <pointLight
        position={[-4, 2, -2]}
        intensity={0.6}
        color="#bbccdd"
        distance={8}
        decay={2}
      />

      {/* Environment map for subtle reflections */}
      <Environment preset="night" environmentIntensity={0.15} />

      {/* Fog — depth and atmosphere */}
      <fog attach="fog" args={['#030303', 10, 30]} />
    </>
  );
}
