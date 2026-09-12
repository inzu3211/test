import React from 'react';
import { GlowCard } from '../ui/GlowCard';
import { AnimatedBorder } from '../ui/AnimatedBorder';
import { BorderBeam } from '../ui/BorderBeam';
import { TechnicalLabel, RevealText } from '../Typography';
import { Cpu, Zap, Sparkles, Orbit, Compass, Eye, Activity } from 'lucide-react';
import useStore from '../../store/useStore';

export function FeatureBento() {
  const setCursor = useStore((state) => state.setCursor);
  const resetCursor = useStore((state) => state.resetCursor);

  return (
    <section
      id="features"
      style={{
        position: 'relative',
        zIndex: 10,
        minHeight: '100vh',
        padding: '7rem 3rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        backgroundColor: 'rgba(3, 3, 6, 0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: '4rem', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem' }}>
        <div>
          <div style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ height: '8px', width: '8px', borderRadius: '50%', backgroundColor: '#00ffcc', boxShadow: '0 0 8px #00ffcc' }} />
            <TechnicalLabel color="#00ffcc">
              04 // THE CAPABILITY MATRIX
            </TechnicalLabel>
          </div>
          <RevealText>
            <h2
              style={{
                fontFamily: 'var(--font-display, "Space Grotesk")',
                fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                color: '#ffffff',
                margin: 0,
              }}
            >
              BENTO LAB ARCHITECTURE
            </h2>
          </RevealText>
        </div>
        <p style={{ maxWidth: '420px', fontFamily: 'var(--font-mono, monospace)', fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', lineHeight: 1.6, margin: 0 }}>
          Proprietary WebGL rendering engine with zero-runtime latency, physically accurate material optics, and cinematic shader choreography.
        </p>
      </div>

      {/* Asymmetric Bento Grid (12 Columns) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '1.5rem',
        }}
      >
        {/* Tile 1: 8 Columns Hero Feature — Digital Twin Materialization */}
        <div style={{ gridColumn: 'span 8', minHeight: '360px', display: 'flex' }}>
          <GlowCard
            style={{
              width: '100%',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRadius: '20px',
              backgroundColor: 'rgba(10, 10, 16, 0.8)',
              border: '1px solid rgba(0, 255, 204, 0.25)',
              backdropFilter: 'blur(24px)',
            }}
            spotlightColor="rgba(0, 255, 204, 0.25)"
          >
            <BorderBeam size={280} duration={12} colorFrom="#00ffcc" colorTo="#3912ff" />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ borderRadius: '9999px', backgroundColor: 'rgba(0, 255, 204, 0.1)', border: '1px solid rgba(0, 255, 204, 0.3)', padding: '2px 10px', fontFamily: 'var(--font-mono, monospace)', fontSize: '10px', color: '#00ffcc' }}>
                  CORE SYSTEM 01
                </span>
                <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '10px', color: 'rgba(255, 255, 255, 0.4)' }}>GLSL / THREE.JS</span>
              </div>
              <Activity size={18} color="#00ffcc" />
            </div>

            <div style={{ margin: '1.5rem 0', maxWidth: '580px' }}>
              <h3 style={{ fontFamily: 'var(--font-display, "Space Grotesk")', fontSize: 'clamp(1.5rem, 2.2vw, 2.25rem)', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                SUBSURFACE OPTICAL SCATTERING
              </h3>
              <p style={{ fontFamily: 'var(--font-body, "Inter")', fontSize: '13px', lineHeight: 1.65, color: 'rgba(242, 240, 234, 0.7)', margin: 0 }}>
                We reconstruct fabric weave, metallic clearcoat refractions, and micro-surface roughness using custom PBR shader pipelines, eliminating the boundary between physical artifact and digital twin.
              </p>
            </div>

            {/* Interactive Telemetry Bar */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1rem', fontFamily: 'var(--font-mono, monospace)', fontSize: '10px' }}>
              <div>
                <span style={{ color: 'rgba(255, 255, 255, 0.4)', display: 'block' }}>DRAW CALLS</span>
                <span style={{ color: '#00ffcc', fontWeight: 700 }}>1 BATCH PASS</span>
              </div>
              <div>
                <span style={{ color: 'rgba(255, 255, 255, 0.4)', display: 'block' }}>SHADOW MAP</span>
                <span style={{ color: '#ffffff', fontWeight: 700 }}>2048 CASCADE</span>
              </div>
              <div>
                <span style={{ color: 'rgba(255, 255, 255, 0.4)', display: 'block' }}>FPS TARGET</span>
                <span style={{ color: '#3912ff', fontWeight: 700 }}>60–120 BUFFER</span>
              </div>
            </div>
          </GlowCard>
        </div>

        {/* Tile 2: 4 Columns Animated Border Card — Kinetic Scroll Physics */}
        <div style={{ gridColumn: 'span 4', minHeight: '360px', display: 'flex' }}>
          <AnimatedBorder
            containerClassName="w-full h-full"
            className="p-8 flex flex-col justify-between h-full w-full"
            duration={9}
            gradient="conic-gradient(from 180deg at 50% 50%, #3912ff 0deg, #00ffcc 180deg, #3912ff 360deg)"
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ borderRadius: '9999px', backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '2px 10px', fontFamily: 'var(--font-mono, monospace)', fontSize: '10px', color: 'rgba(255, 255, 255, 0.7)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                LENIS + GSAP
              </span>
              <Orbit size={18} color="rgba(255, 255, 255, 0.6)" />
            </div>

            <div style={{ margin: '1rem 0' }}>
              <h4 style={{ fontFamily: 'var(--font-display, "Space Grotesk")', fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                INERTIA SCROLL CHOREOGRAPHY
              </h4>
              <p style={{ fontFamily: 'var(--font-body, "Inter")', fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.6, margin: 0 }}>
                Synchronized single-RAF rendering loop combining smooth exponential wheel inertia with GSAP ScrollTrigger scrubbing.
              </p>
            </div>

            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.75rem', fontFamily: 'var(--font-mono, monospace)', fontSize: '10px', color: 'rgba(255, 255, 255, 0.5)', display: 'flex', justifyContent: 'space-between' }}>
              <span>SMOOTH WHEEL: ON</span>
              <span style={{ color: '#00ffcc' }}>ZERO JITTER</span>
            </div>
          </AnimatedBorder>
        </div>

        {/* Tile 3: 4 Columns — Realtime Shader Gradient */}
        <div style={{ gridColumn: 'span 4', minHeight: '300px', display: 'flex' }}>
          <GlowCard
            style={{
              width: '100%',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRadius: '20px',
              backgroundColor: 'rgba(10, 10, 16, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(24px)',
            }}
            spotlightColor="rgba(47, 0, 0, 0.5)"
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '10px', color: '#ff0055' }}>EXPERIMENT 03</span>
              <Compass size={18} color="rgba(255, 255, 255, 0.4)" />
            </div>

            <div style={{ margin: '1rem 0' }}>
              <h4 style={{ fontFamily: 'var(--font-display, "Space Grotesk")', fontSize: '1.3rem', fontWeight: 600, color: '#ffffff', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                CRIMSON VOID GRADIENT
              </h4>
              <p style={{ fontFamily: 'var(--font-body, "Inter")', fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.6, margin: 0 }}>
                Simulated 3D sphere raymarch with film grain noise and harmonic frequency perturbation (#2f0000 / #3912ff / #000000).
              </p>
            </div>

            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.75rem', fontFamily: 'var(--font-mono, monospace)', fontSize: '10px', color: 'rgba(255, 255, 255, 0.4)', display: 'flex', justifyContent: 'space-between' }}>
              <span>U_FREQUENCY: 5.5</span>
              <span style={{ color: '#ffffff' }}>U_SPEED: 0.5</span>
            </div>
          </GlowCard>
        </div>

        {/* Tile 4: 4 Columns — Procedural Cloth Physics */}
        <div style={{ gridColumn: 'span 4', minHeight: '300px', display: 'flex' }}>
          <GlowCard
            style={{
              width: '100%',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRadius: '20px',
              backgroundColor: 'rgba(10, 10, 16, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(24px)',
            }}
            spotlightColor="rgba(57, 18, 255, 0.35)"
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '10px', color: '#00ffcc' }}>PHYSICS 04</span>
              <Zap size={18} color="#00ffcc" />
            </div>

            <div style={{ margin: '1rem 0' }}>
              <h4 style={{ fontFamily: 'var(--font-display, "Space Grotesk")', fontSize: '1.3rem', fontWeight: 600, color: '#ffffff', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                COUTURE DRAPE DYNAMICS
              </h4>
              <p style={{ fontFamily: 'var(--font-body, "Inter")', fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.6, margin: 0 }}>
                Harmonic wave vertex displacement simulating weighted Victorian silk drape under low gravity parameters.
              </p>
            </div>

            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.75rem', fontFamily: 'var(--font-mono, monospace)', fontSize: '10px', color: 'rgba(255, 255, 255, 0.4)', display: 'flex', justifyContent: 'space-between' }}>
              <span>MASS // 0.82KG</span>
              <span style={{ color: '#00ffcc' }}>DAMPING // 0.94</span>
            </div>
          </GlowCard>
        </div>

        {/* Tile 5: 4 Columns — Precision CAD Retopology */}
        <div style={{ gridColumn: 'span 4', minHeight: '300px', display: 'flex' }}>
          <GlowCard
            style={{
              width: '100%',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRadius: '20px',
              backgroundColor: 'rgba(10, 10, 16, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(24px)',
            }}
            spotlightColor="rgba(255, 255, 255, 0.2)"
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '10px', color: 'rgba(255, 255, 255, 0.5)' }}>CAD PIPELINE</span>
              <Eye size={18} color="rgba(255, 255, 255, 0.4)" />
            </div>

            <div style={{ margin: '1rem 0' }}>
              <h4 style={{ fontFamily: 'var(--font-display, "Space Grotesk")', fontSize: '1.3rem', fontWeight: 600, color: '#ffffff', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                PRECISION RETOPOLOGY
              </h4>
              <p style={{ fontFamily: 'var(--font-body, "Inter")', fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.6, margin: 0 }}>
                Micro-geometry decimated into clean quad-dominant topological meshes ready for 120fps mobile WebGL rendering.
              </p>
            </div>

            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.75rem', fontFamily: 'var(--font-mono, monospace)', fontSize: '10px', color: 'rgba(255, 255, 255, 0.4)', display: 'flex', justifyContent: 'space-between' }}>
              <span>DRACO COMPRESSION</span>
              <span style={{ color: '#ffffff' }}>OPTIMIZED</span>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}

export default FeatureBento;
