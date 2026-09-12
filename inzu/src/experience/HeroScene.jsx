import React, { useMemo } from 'react';
import { Character } from './Character';
import { ScanEffect } from './ScanEffect';
import { DataOverlay } from './DataOverlay';
import { Lighting } from './Lighting';
import { CameraController } from './CameraController';
import { PostProcessing } from './PostProcessing';
import { Particles } from './Particles';
import { Hotspots } from './Hotspots';
import useStore from '../store/useStore';

export function HeroScene() {
  const setCursor = useStore((state) => state.setCursor);
  const resetCursor = useStore((state) => state.resetCursor);

  const charPosition = useMemo(() => {
    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;
    return isDesktop ? [0.65, -0.45, 0] : [0, -0.45, 0];
  }, []);

  return (
    <>
      <CameraController />
      <Lighting />

      <Character
        position={charPosition}
        onPointerOver={() => setCursor('inspect', 'INSPECT')}
        onPointerOut={() => resetCursor()}
      />

      <Hotspots />
      <ScanEffect />
      <DataOverlay />
      <Particles />
      <PostProcessing />

      {/* Ground plane reflection */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <circleGeometry args={[10, 64]} />
        <meshStandardMaterial
          color="#050508"
          roughness={0.88}
          metalness={0.15}
          transparent
          opacity={0.5}
        />
      </mesh>
    </>
  );
}

export default HeroScene;
