import React, { useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import useStore from '../store/useStore';

export function CameraController() {
  const { camera } = useThree();
  const orbitProgress = useStore((state) => state.orbitProgress);
  const heroVisible = useStore((state) => state.heroVisible);
  const inspectionActive = useStore((state) => state.inspectionActive);

  const { lookAtTarget, orbitRadius, cameraY } = useMemo(() => {
    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;
    return {
      lookAtTarget: new THREE.Vector3(isDesktop ? 0.45 : 0, 1.45, 0),
      orbitRadius: isDesktop ? 4.9 : 5.4,
      cameraY: 1.65,
    };
  }, []);

  useFrame((state) => {
    const { pointer } = state;

    if (inspectionActive) {
      // Close-up inspection mode
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.15, 0.05);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, 1.5 + pointer.y * 0.15, 0.05);
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, 3.8, 0.05);
      camera.lookAt(lookAtTarget);
      return;
    }

    // Scroll-driven 360° orbit around the character
    const angle = orbitProgress * Math.PI * 1.8; // Smooth 320° arc as user explores
    const orbitX = Math.sin(angle) * orbitRadius + (lookAtTarget.x * 0.4);
    const orbitZ = Math.cos(angle) * orbitRadius;

    const pullBackZ = heroVisible ? 0 : 2.5;
    const pullUpY = heroVisible ? 0 : 1.5;

    // Target position = orbit position + restrained cursor parallax offset
    const targetX = orbitX + pointer.x * 0.22;
    const targetY = cameraY + pointer.y * 0.14 + pullUpY;
    const targetZ = orbitZ + pullBackZ;

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.06);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.06);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.06);

    camera.lookAt(lookAtTarget);
  });

  return null;
}

export default CameraController;
