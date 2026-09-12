import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useStore } from '../../store/useStore';
import { SurfaceStructureScene } from '../../experience/SurfaceStructureScene';
import { SpotlightCard } from '../ui/SpotlightCard';
import { BorderBeam } from '../ui/BorderBeam';
import { OriginToggle } from '../ui/OriginToggle';
import { DecryptedText } from '../ui/DecryptedText';
import soundFx from '../../utils/audio';

export function SurfaceToStructure() {
  const [progress, setProgress] = useState(0.2);
  const setCursor = useStore((state) => state.setCursor);
  const resetCursor = useStore((state) => state.resetCursor);
  const soundEnabled = useStore((state) => state.soundEnabled);

  const presets = [
    { label: 'SURFACE PBR', value: 0.05, desc: 'Full photorealistic physical material' },
    { label: 'HYBRID DISSECTION', value: 0.5, desc: 'Simultaneous texture and wireframe' },
    { label: 'TOPOLOGY MESH', value: 0.95, desc: 'Barycentric geometric polygon wireframe' },
  ];

  return (
    <section
      id="surface-structure"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8rem 6%',
        position: 'relative',
        zIndex: 2,
        backgroundColor: '#030305',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Background radial glow */}
      <div className="ambient-glow-cyan" style={{ top: '30%', left: '50%', transform: 'translateX(-50%)' }} />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem', maxWidth: '780px' }}>
        <div className="shimmer-badge" style={{ marginBottom: '1.25rem' }}>
          <span className="status-beacon" />
          <DecryptedText text="CHAMBER 02 // VOLUMETRIC DISSECTION" speed={30} />
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            margin: '0 0 1rem 0',
          }}
          className="text-gradient-chrome"
        >
          FROM SURFACE TO STRUCTURE.
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.95rem, 1.2vw, 1.15rem)',
            lineHeight: 1.6,
            color: 'var(--color-white-dim)',
            margin: 0,
          }}
        >
          Interactive material deconstruction. Seamlessly morph between photorealistic physical surfaces and raw topological polygon topology.
        </p>
      </div>

      {/* 3D Interactive Object Viewport Card */}
      <SpotlightCard
        style={{
          width: '100%',
          maxWidth: '680px',
          height: 'clamp(320px, 45vh, 460px)',
          position: 'relative',
          marginBottom: '2.5rem',
          backgroundColor: 'rgba(6, 6, 10, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 255, 204, 0.1)',
        }}
      >
        <BorderBeam colorFrom="#00ffcc" colorTo="#7928ca" duration={14} />

        <Canvas
          camera={{ position: [0, 0, 4.2], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          style={{ width: '100%', height: '100%', borderRadius: 'inherit' }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[4, 5, 5]} intensity={2.8} color="#f0ece8" />
          <pointLight position={[-4, -3, -2]} intensity={1.5} color="#00ffcc" />
          <SurfaceStructureScene progress={progress} />
        </Canvas>

        {/* HUD Corner Tech Reticles */}
        <div style={{ position: 'absolute', top: '16px', left: '20px', zIndex: 3 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-white-ghost)' }}>
            INSP // 002 // TOPOLOGY
          </span>
        </div>
        <div style={{ position: 'absolute', top: '16px', right: '20px', zIndex: 3 }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: '#00ffcc',
              backgroundColor: 'rgba(0, 255, 204, 0.1)',
              padding: '2px 8px',
              borderRadius: '4px',
              border: '1px solid rgba(0, 255, 204, 0.25)',
            }}
          >
            REALTIME WEBGL
          </span>
        </div>

        <div style={{ position: 'absolute', bottom: '16px', left: '20px', zIndex: 3 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#888' }}>
            SURFACE: <strong style={{ color: '#ffffff' }}>{100 - Math.round(progress * 100)}%</strong>
          </span>
        </div>
        <div style={{ position: 'absolute', bottom: '16px', right: '20px', zIndex: 3 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#888' }}>
            WIREFRAME: <strong style={{ color: '#00ffcc' }}>{Math.round(progress * 100)}%</strong>
          </span>
        </div>
      </SpotlightCard>

      {/* Preset OriginToggle */}
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
        <OriginToggle
          options={presets.map((p) => ({ label: p.label, value: p.value }))}
          value={presets.reduce((prev, curr) => Math.abs(curr.value - progress) < Math.abs(prev.value - progress) ? curr : prev).value}
          onChange={(val) => setProgress(val)}
          size="md"
        />
      </div>

      {/* Dual Scrub Range Slider */}
      <div
        style={{
          width: '100%',
          maxWidth: '580px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>
          <span style={{ color: progress < 0.5 ? '#ffffff' : 'var(--color-white-ghost)' }}>[ 0.0 // PBR SURFACE ]</span>
          <span style={{ color: progress >= 0.5 ? '#00ffcc' : 'var(--color-white-ghost)' }}>[ 1.0 // WIREFRAME MESH ]</span>
        </div>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={progress}
          onChange={(e) => setProgress(parseFloat(e.target.value))}
          onMouseEnter={() => setCursor('explore', 'SCRUB')}
          onMouseLeave={resetCursor}
          aria-label="Surface to structure material slider"
          style={{
            width: '100%',
            appearance: 'none',
            WebkitAppearance: 'none',
            background: 'transparent',
            cursor: 'none',
          }}
        />

        <style>{`
          input[type=range]::-webkit-slider-runnable-track {
            width: 100%;
            height: 4px;
            border-radius: 2px;
            background: linear-gradient(90deg, rgba(255,255,255,0.2) 0%, #00ffcc 100%);
          }
          input[type=range]::-webkit-slider-thumb {
            appearance: none;
            -webkit-appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #ffffff;
            border: 2px solid #00ffcc;
            box-shadow: 0 0 15px #00ffcc;
            margin-top: -8px;
            cursor: none;
            transition: transform 0.15s ease;
          }
          input[type=range]::-webkit-slider-thumb:hover {
            transform: scale(1.2);
          }
          input[type=range]:focus {
            outline: none;
          }
        `}</style>

        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#00ffcc', letterSpacing: '0.1em' }}>
          CURRENT INTERPOLATION // {Math.round(progress * 100)}%
        </span>
      </div>
    </section>
  );
}

export default SurfaceToStructure;
