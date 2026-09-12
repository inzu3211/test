import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useStore } from '../store/useStore';
import { DecryptedText } from './ui/DecryptedText';
import { OriginToggle } from './ui/OriginToggle';
import { ShimmerButton } from './ui/ShimmerButton';
import soundFx from '../utils/audio';

export function HeroUI() {
  const setCharacterMode = useStore((state) => state.setCharacterMode);
  const characterMode = useStore((state) => state.characterMode);
  const setInspectionActive = useStore((state) => state.setInspectionActive);
  const activeHotspot = useStore((state) => state.activeHotspot);
  const setActiveHotspot = useStore((state) => state.setActiveHotspot);
  const soundEnabled = useStore((state) => state.soundEnabled);
  const setCursor = useStore((state) => state.setCursor);
  const resetCursor = useStore((state) => state.resetCursor);
  const introComplete = useStore((state) => state.introComplete);
  const containerRef = useRef(null);

  useEffect(() => {
    if (introComplete && containerRef.current) {
      const els = containerRef.current.querySelectorAll('.animate-in');
      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }
  }, [introComplete]);

  const handleModeChange = (val) => {
    setCharacterMode(val);
    if (val === 'scan') {
      setInspectionActive(true);
    } else {
      setInspectionActive(false);
    }
  };

  const modeOptions = [
    { label: 'SURFACE', value: 'beauty' },
    { label: 'WIREFRAME', value: 'mesh' },
    { label: 'IRIDESCENT', value: 'iridescence' },
    { label: 'SCAN 3D', value: 'scan' },
  ];

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 'var(--z-interface)',
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(1.5rem, 4vw, 3rem)',
      }}
    >
      {/* TOP AREA */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginTop: '3.5rem',
        }}
      >
        {/* Top Left Status Badge (Magic UI / React Bits style) */}
        <div className="animate-in" style={{ opacity: 0, transform: 'translateY(20px)', pointerEvents: 'auto' }}>
          <div className="shimmer-badge">
            <span className="status-beacon" />
            <DecryptedText text="INZU LAB // SPATIAL 3D STUDIO" speed={35} />
          </div>
        </div>

        {/* Top Right Live Telemetry Card (Origin UI / HeroUI style) */}
        <div
          className="animate-in glass-panel"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            padding: '0.6rem 1.1rem',
            borderRadius: '12px',
            backgroundColor: 'rgba(10, 10, 16, 0.65)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
            display: 'none',
          }}
          id="hero-telemetry-pill"
        >
          <div style={{ display: 'flex', gap: '1.4rem', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#94a3b8' }}>
              FPS BUFFER: <strong style={{ color: '#00ffcc' }}>60 FPS LOCKED</strong>
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#94a3b8' }}>
              ENGINE: <strong style={{ color: '#ffffff' }}>WEBGL 2.0 PBR</strong>
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#94a3b8' }}>
              DRAWCALLS: <strong style={{ color: '#8a2be2' }}>14 PASSES</strong>
            </span>
          </div>
        </div>
      </div>

      {/* CENTER LEFT HERO HEADLINE */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '820px' }}>
        <div className="animate-in" style={{ opacity: 0, transform: 'translateY(20px)' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.2em',
              color: '#00ffcc',
              display: 'block',
              marginBottom: '0.8rem',
            }}
          >
            // COUTURE REALTIME ENGINE 2026
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-hero)',
              fontWeight: 800,
              lineHeight: 0.88,
              letterSpacing: '-0.04em',
              margin: 0,
              textShadow: '0 0 40px rgba(0, 255, 204, 0.25)',
            }}
            className="text-gradient-chrome"
          >
            <DecryptedText text="INZU" speed={50} revealDelay={300} />
          </h1>
        </div>

        <div
          className="animate-in"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            marginTop: '1.75rem',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.3rem, 2.6vw, 2.4rem)',
              fontWeight: 600,
              lineHeight: 1.25,
              color: '#f8fafc',
              margin: 0,
              maxWidth: '680px',
            }}
          >
            MAKE PRODUCTS FEEL REAL BEFORE THEY ARRIVE.
          </h2>
        </div>

        <div
          className="animate-in"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            marginTop: '1rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              lineHeight: 1.65,
              color: 'var(--color-white-dim)',
              maxWidth: '500px',
              margin: 0,
            }}
          >
            Ultra-precision spatial 3D twins, procedural shader materials, and cinematic digital exhibitions engineered for brand obsession.
          </p>
        </div>

        {/* Hotspots Active Banner */}
        <div
          className="animate-in"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            marginTop: '1.5rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            pointerEvents: 'auto',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: '#00ffcc',
              backgroundColor: 'rgba(0, 255, 204, 0.1)',
              padding: '4px 10px',
              borderRadius: '6px',
              border: '1px solid rgba(0, 255, 204, 0.25)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00ffcc' }} />
            3 SPATIAL HOTSPOTS // CLICK BEACONS ON MODEL
          </span>
        </div>
      </div>

      {/* BOTTOM ACTION & CONTROLS DOCK */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '1.5rem',
          flexWrap: 'wrap',
        }}
      >
        {/* Bottom Left — Orbit & Hotspot Instruction */}
        <div
          className="animate-in"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: '1px solid rgba(0, 255, 204, 0.3)',
              backgroundColor: 'rgba(0, 255, 204, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              color: '#00ffcc',
              boxShadow: '0 0 12px rgba(0, 255, 204, 0.2)',
            }}
          >
            ↻
          </div>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.15em',
              color: 'var(--color-white-dim)',
            }}
          >
            DRAG TO ORBIT // SCROLL TO EXPAND
          </span>
        </div>

        {/* Bottom Center — Origin UI Segmented Shader Switcher */}
        <div
          className="animate-in"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            pointerEvents: 'auto',
          }}
        >
          <OriginToggle
            options={modeOptions}
            value={characterMode}
            onChange={handleModeChange}
            size="md"
          />
        </div>

        {/* Bottom Right Telemetry */}
        <div
          className="animate-in"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '0.25rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
          }}
        >
          <span style={{ color: 'var(--color-white-ghost)' }}>MODE // {characterMode.toUpperCase()}</span>
          <span style={{ color: 'var(--color-white-dim)' }}>PRECISION // 0.001mm TOLERANCE</span>
          <span style={{ color: '#00ffcc' }}>STATUS // READY FOR EXPLORATION</span>
        </div>
      </div>
      <style>{`
        @media (min-width: 860px) {
          #hero-telemetry-pill {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}

export default HeroUI;

