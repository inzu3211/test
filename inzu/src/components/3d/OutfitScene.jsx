import React, { useRef, useState, useMemo, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';
import useStore from '../../store/useStore';

// Preload all 4 composite 3D models
try {
  useGLTF.preload('/models/head.glb');
  useGLTF.preload('/models/shirt.glb');
  useGLTF.preload('/models/pants.glb');
  useGLTF.preload('/models/shoes.glb');
} catch (e) {
  console.warn('GLTF Preload warning:', e);
}

// ─── TOP-LEVEL TUNING CONSTANTS (Exposed for easy refinement) ───
export const HEAD_TRANSFORM = {
  position: [0, 1.35, 0.04],
  rotation: [0, 0, 0],
  scale: [0.0031, 0.0031, 0.0031],
};

export const SHIRT_TRANSFORM = {
  position: [0, 0.38, 0],
  rotation: [0, 0, 0],
  scale: [0.0155, 0.0155, 0.0155],
};

export const PANTS_TRANSFORM = {
  position: [0, -0.42, -0.02],
  rotation: [0, 0, 0],
  scale: [0.92, 0.92, 0.92],
};

export const SHOES_LEFT_TRANSFORM = {
  position: [-0.22, -1.02, 0.04],
  rotation: [0, 0.08, 0],
  scale: [0.42, 0.42, 0.42],
};

export const SHOES_RIGHT_TRANSFORM = {
  position: [0.22, -1.02, 0.04],
  rotation: [0, -0.08, 0],
  scale: [-0.42, 0.42, 0.42],
};

// Internal model assembly
function CompositeGarment({ showHelpers = false, scrollProgress = 0 }) {
  const groupRef = useRef();
  const headRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const { pointer } = useThree();

  const headGLTF = useGLTF('/models/head.glb');
  const shirtGLTF = useGLTF('/models/shirt.glb');
  const pantsGLTF = useGLTF('/models/pants.glb');
  const shoesGLTF = useGLTF('/models/shoes.glb');

  // Isolated scene clones
  const headScene = useMemo(() => headGLTF.scene.clone(true), [headGLTF]);
  const shirtScene = useMemo(() => shirtGLTF.scene.clone(true), [shirtGLTF]);
  const pantsScene = useMemo(() => pantsGLTF.scene.clone(true), [pantsGLTF]);
  const leftShoeScene = useMemo(() => shoesGLTF.scene.clone(true), [shoesGLTF]);
  const rightShoeScene = useMemo(() => shoesGLTF.scene.clone(true), [shoesGLTF]);

  // Ensure high quality shadows & PBR material properties
  useEffect(() => {
    const tuneMaterials = (scene) => {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          if (child.material) {
            child.material.roughness = Math.min(child.material.roughness || 0.4, 0.38);
            child.material.metalness = Math.max(child.material.metalness || 0, 0.08);
          }
        }
      });
    };

    [headScene, shirtScene, pantsScene, leftShoeScene, rightShoeScene].forEach(tuneMaterials);
  }, [headScene, shirtScene, pantsScene, leftShoeScene, rightShoeScene]);

  // Frame animation: idle auto-rotation blended smoothly with pointer lerp + scroll choreography
  useFrame((_, delta) => {
    if (!groupRef.current) return;

    if (isHovered) {
      // Blend smoothly to pointer rotation
      const targetRotY = pointer.x * Math.PI * 0.65;
      const targetRotX = -pointer.y * Math.PI * 0.15;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.05);
    } else {
      // Idle auto-rotation driven by delta + scroll progress
      const scrollRotOffset = scrollProgress * Math.PI * 2.0;
      groupRef.current.rotation.y += delta * 0.35;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, 0, 0.05);
      groupRef.current.position.y = Math.sin(scrollProgress * Math.PI) * 0.15;
    }

    // Damped head gaze tracking
    if (headRef.current) {
      const targetHeadX = -pointer.y * 0.25;
      const targetHeadY = pointer.x * 0.35;
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, targetHeadX, 0.06);
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetHeadY, 0.06);
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      {/* Dev helper: visual coordinate axes */}
      {showHelpers && <axesHelper args={[2]} />}

      {/* 1. HEAD & CROWN */}
      <group
        ref={headRef}
        position={HEAD_TRANSFORM.position}
        rotation={HEAD_TRANSFORM.rotation}
      >
        <primitive
          object={headScene}
          scale={HEAD_TRANSFORM.scale}
          position={[0, -0.6, 0.05]}
        />
        {/* Sculptural Crystalline Crown Spikes */}
        <group position={[0, 0.45, 0]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.22, 0.02, 16, 32]} />
            <meshPhysicalMaterial color="#c0c8d4" roughness={0.08} metalness={0.85} clearcoat={1} />
          </mesh>
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            return (
              <mesh
                key={`crown-${i}`}
                position={[Math.cos(angle) * 0.22, 0.12, Math.sin(angle) * 0.22]}
                rotation={[0, -angle, Math.PI / 12]}
              >
                <coneGeometry args={[0.025, 0.22 + (i % 2) * 0.1, 4]} />
                <meshPhysicalMaterial color="#d8e0ea" roughness={0.05} metalness={0.95} clearcoat={1} />
              </mesh>
            );
          })}
        </group>
      </group>

      {/* 2. VICTORIAN 1890 SHIRT */}
      <group position={SHIRT_TRANSFORM.position} rotation={SHIRT_TRANSFORM.rotation}>
        <primitive
          object={shirtScene}
          scale={SHIRT_TRANSFORM.scale}
          position={[0, -0.85, 0]}
        />
      </group>

      {/* 3. RAVE / PHAT PANTS */}
      <group position={PANTS_TRANSFORM.position} rotation={PANTS_TRANSFORM.rotation}>
        <primitive
          object={pantsScene}
          scale={PANTS_TRANSFORM.scale}
          position={[0, -0.15, 0]}
        />
      </group>

      {/* 4. DIESEL SNEAKERS (LEFT & RIGHT) */}
      <group position={SHOES_LEFT_TRANSFORM.position} rotation={SHOES_LEFT_TRANSFORM.rotation}>
        <primitive object={leftShoeScene} scale={SHOES_LEFT_TRANSFORM.scale} />
      </group>
      <group position={SHOES_RIGHT_TRANSFORM.position} rotation={SHOES_RIGHT_TRANSFORM.rotation}>
        <primitive object={rightShoeScene} scale={SHOES_RIGHT_TRANSFORM.scale} />
      </group>
    </group>
  );
}

// Fallback loader component while 4 GLBs download
function ModelLoader() {
  return (
    <mesh>
      <boxGeometry args={[0.8, 1.8, 0.4]} />
      <meshBasicMaterial color="#3912ff" wireframe opacity={0.3} transparent />
    </mesh>
  );
}

export function OutfitScene({ scrollProgress = 0, className = '' }) {
  const [showHelpers, setShowHelpers] = useState(false);

  return (
    <div className={`relative h-full w-full ${className}`}>
      {/* Dev helper toggle button */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={() => setShowHelpers((prev) => !prev)}
          className="rounded-full border border-white/10 bg-black/50 px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-white/50 backdrop-blur-md hover:border-scan hover:text-scan transition-colors"
        >
          {showHelpers ? 'HIDE AXES' : 'DEV AXES'}
        </button>
      </div>

      <Canvas
        camera={{ position: [0, 0.2, 3.8], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        {/* Cinematic 3-point lighting tied into Shader palette */}
        <ambientLight intensity={0.45} color="#ffffff" />
        <directionalLight position={[4, 5, 4]} intensity={2.2} color="#f0ece8" />
        {/* Rim point light tinted with electric blue (#3912ff) */}
        <pointLight position={[-3, 2, -2]} intensity={2.8} color="#3912ff" />
        {/* Soft fill light tinted with crimson (#2f0000) */}
        <pointLight position={[3, -1, 2]} intensity={0.9} color="#7a1f1f" />

        {/* Environment preset matching Shader background's envPreset="city" */}
        <Environment preset="city" />

        <Suspense fallback={<ModelLoader />}>
          <CompositeGarment
            showHelpers={showHelpers}
            scrollProgress={scrollProgress}
          />
        </Suspense>

        {/* Soft floor reflection shadow catcher */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
          <circleGeometry args={[2.5, 48]} />
          <meshBasicMaterial color="#000000" transparent opacity={0.4} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default OutfitScene;
