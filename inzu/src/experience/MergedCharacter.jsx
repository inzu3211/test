import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import useStore from '../store/useStore';

// Preload models
try {
  useGLTF.preload('/models/head.glb');
  useGLTF.preload('/models/shirt.glb');
  useGLTF.preload('/models/pants.glb');
  useGLTF.preload('/models/shoes.glb');
} catch (e) {
  console.warn('Preload warning:', e);
}

export function MergedCharacter(props) {
  const mode = useStore((state) => state.characterMode);

  const groupRef = useRef();
  const headRef = useRef();
  const bodyRef = useRef();

  // Load the 4 composite models
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

  // Apply unified couture materials and view modes across all 4 models
  useEffect(() => {
    const applyModeToScene = (scene, isCrown = false) => {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;

          if (mode === 'mesh') {
            child.material = new THREE.MeshBasicMaterial({
              color: '#38384f',
              wireframe: true,
            });
          } else if (mode === 'void') {
            child.material = new THREE.MeshBasicMaterial({
              color: '#000000',
            });
          } else if (mode === 'scan') {
            child.material = new THREE.MeshBasicMaterial({
              color: '#00ffcc',
              transparent: true,
              opacity: 0.5,
              wireframe: true,
            });
          } else if (mode === 'iridescence' || mode === 'material') {
            child.material = new THREE.MeshPhysicalMaterial({
              color: '#f4f0ec',
              roughness: 0.12,
              metalness: 0.35,
              clearcoat: 1.0,
              clearcoatRoughness: 0.08,
              iridescence: 0.6,
            });
          } else {
            // Default: Luxury Couture White with subtle silver specular sheen
            child.material = new THREE.MeshPhysicalMaterial({
              color: '#eae6e1',
              roughness: 0.28,
              metalness: 0.08,
              clearcoat: 0.65,
              clearcoatRoughness: 0.15,
            });
          }
        }
      });
    };

    if (headScene) applyModeToScene(headScene);
    if (shirtScene) applyModeToScene(shirtScene);
    if (pantsScene) applyModeToScene(pantsScene);
    if (leftShoeScene) applyModeToScene(leftShoeScene);
    if (rightShoeScene) applyModeToScene(rightShoeScene);
  }, [mode, headScene, shirtScene, pantsScene, leftShoeScene, rightShoeScene]);

  // Gentle inertia tracking of mouse cursor & breathing float
  useFrame((state) => {
    const { pointer, clock } = state;
    const elapsedTime = clock.getElapsedTime();

    if (headRef.current) {
      const targetRotX = (-pointer.y * Math.PI) / 7;
      const targetRotY = (pointer.x * Math.PI) / 5;
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, targetRotX, 0.04);
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetRotY, 0.04);
    }

    if (groupRef.current) {
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, pointer.x * 0.15, 0.02);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, pointer.x * 0.06, 0.02);
      groupRef.current.position.y = (props.position?.[1] || 0) + Math.sin(elapsedTime * 1.5) * 0.015;
    }
  });

  return (
    <group ref={groupRef} {...props}>
      {/* ─── 1. HEAD (soulless.glb) + CROWN ─── */}
      <group ref={headRef} position={[0, 1.45, 0]}>
        <primitive
          object={headScene}
          scale={[0.0032, 0.0032, 0.0032]}
          position={[0, -0.6, 0.05]}
        />
        {/* Sculptural Crystalline Crown */}
        <group position={[0, 0.45, 0]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.22, 0.02, 16, 32]} />
            <meshPhysicalMaterial color="#c0c8d4" roughness={0.08} metalness={0.85} clearcoat={1} />
          </mesh>
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            return (
              <mesh
                key={`crown-spike-${i}`}
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

      {/* ─── 2. TORSO / 1890 VICTORIAN SHIRT (shirt.glb) ─── */}
      <group ref={bodyRef} position={[0, 0.38, 0]}>
        <primitive
          object={shirtScene}
          scale={[0.0155, 0.0155, 0.0155]}
          position={[0, -0.85, 0]}
        />
      </group>

      {/* ─── 3. PANTS (pants.glb) ─── */}
      <group position={[0, -0.42, -0.02]}>
        <primitive
          object={pantsScene}
          scale={[0.92, 0.92, 0.92]}
          position={[0, -0.15, 0]}
        />
      </group>

      {/* ─── 4. DIESEL SNEAKERS (shoes.glb) ─── */}
      <group position={[0, -0.98, 0]}>
        {/* Left Shoe */}
        <group position={[-0.22, -0.04, 0.04]} rotation={[0, 0.08, 0]}>
          <primitive object={leftShoeScene} scale={[0.42, 0.42, 0.42]} />
        </group>
        {/* Right Shoe (mirrored) */}
        <group position={[0.22, -0.04, 0.04]} rotation={[0, -0.08, 0]}>
          <primitive object={rightShoeScene} scale={[-0.42, 0.42, 0.42]} />
        </group>
      </group>
    </group>
  );
}

export default MergedCharacter;
