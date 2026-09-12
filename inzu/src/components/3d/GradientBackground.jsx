import React, { Suspense, useMemo } from 'react';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

function StaticGradientFallback() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 65% 35%, #3912ff 0%, #2f0000 50%, #030306 90%)',
        opacity: 0.95,
      }}
    />
  );
}

export function GradientBackground() {
  const { pixelDensity, frameRate } = useMemo(() => {
    if (typeof window === 'undefined') return { pixelDensity: 1, frameRate: 10 };
    const isMobile = window.innerWidth < 768;
    const cores = navigator.hardwareConcurrency || 4;
    const isLowPower = isMobile || cores < 4;
    return {
      pixelDensity: isLowPower ? 0.75 : 1,
      frameRate: isLowPower ? 8 : 10,
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        userSelect: 'none',
      }}
    >
      <Suspense fallback={<StaticGradientFallback />}>
        <ShaderGradientCanvas
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}
        >
          <ShaderGradient
            animate="on"
            axesHelper="off"
            brightness={1.2}
            cAzimuthAngle={188}
            cDistance={14}
            cPolarAngle={25}
            cameraZoom={5}
            color1="#2f0000"
            color2="#3912ff"
            color3="#000000"
            destination="onCanvas"
            embedMode="off"
            envPreset="city"
            format="gif"
            fov={45}
            frameRate={frameRate}
            gizmoHelper="hide"
            grain="on"
            lightType="3d"
            pixelDensity={pixelDensity}
            positionX={-1.4}
            positionY={0}
            positionZ={0}
            range="disabled"
            rangeEnd={16.6}
            rangeStart={0}
            reflection={0.1}
            rotationX={0}
            rotationY={10}
            rotationZ={50}
            shader="defaults"
            type="sphere"
            uAmplitude={1}
            uDensity={1.3}
            uFrequency={5.5}
            uSpeed={0.5}
            uStrength={4}
            uTime={0}
            wireframe={false}
            zoomOut={false}
          />
        </ShaderGradientCanvas>
      </Suspense>

      {/* Atmospheric Vignette Scrim */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          background: 'radial-gradient(circle at 50% 50%, rgba(3, 3, 5, 0.15) 0%, rgba(3, 3, 5, 0.6) 65%, rgba(3, 3, 5, 0.95) 100%)',
        }}
      />
    </div>
  );
}

export default GradientBackground;
