import React from 'react';
import { EffectComposer, Bloom, Noise, ChromaticAberration, Vignette } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';
import useStore from '../store/useStore';

export function PostProcessing() {
  const qualityLevel = useStore((state) => state.qualityLevel || 'high');

  if (qualityLevel === 'low') return null;

  return (
    <EffectComposer multisampling={0}>
      <Bloom intensity={0.8} luminanceThreshold={0.85} luminanceSmoothing={0.2} mipmapBlur />
      
      {qualityLevel !== 'medium' && (
        <>
          <ChromaticAberration offset={new THREE.Vector2(0.001, 0.001)} />
          <Noise premultiply blendFunction={BlendFunction.OVERLAY} opacity={0.035} />
        </>
      )}
      
      <Vignette eskil={false} offset={0.15} darkness={1.1} />
    </EffectComposer>
  );
}
