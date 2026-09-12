import React from 'react';
import { SpotlightCard } from '../ui/SpotlightCard';
import { DecryptedText } from '../ui/DecryptedText';
import { useStore } from '../../store/useStore';

const steps = [
  {
    num: '01',
    title: 'DISCOVERY & ARCHITECTURE',
    desc: 'Deconstruct brand identity, object physical materiality, and determine optimal WebGL performance budgets.',
    deliverable: 'ART DIRECTION & TECHNICAL SPEC',
    tag: 'PHASE_01',
  },
  {
    num: '02',
    title: 'HIGH-PRECISION CAD & TOPOLOGY',
    desc: 'Retopologize raw CAD/STEP geometry into lightweight, watertight barycentric meshes optimized for browser GPUs.',
    deliverable: 'SUB-100K WATERPROOF MESH',
    tag: 'PHASE_02',
  },
  {
    num: '03',
    title: 'PHOTOMETRIC MATERIAL CALIBRATION',
    desc: 'Author custom GLSL physically based shaders with micro-roughness, anisotropy, clearcoat, and subsurface scattering.',
    deliverable: 'PHYSICAL PBR MATERIALS',
    tag: 'PHASE_03',
  },
  {
    num: '04',
    title: 'SPATIAL INTERACTION & KINEMATICS',
    desc: 'Engineer custom camera trajectories, orbit limits, kinetic scroll triggers, and exploded mechanical states.',
    deliverable: 'INTERACTIVE THREE.JS SCENE',
    tag: 'PHASE_04',
  },
  {
    num: '05',
    title: 'GPU BENCHMARK & MULTI-DEVICE TUNING',
    desc: 'Adaptive DPR scaling, draw-call batching, frustum culling, and memory deallocation for fluid 60FPS across all devices.',
    deliverable: 'LOCKED 60FPS BENCHMARK',
    tag: 'PHASE_05',
  },
  {
    num: '06',
    title: 'SEAMLESS PRODUCTION DEPLOYMENT',
    desc: 'Zero-dependency headless WebGL embed or full-scale immersive exhibition ready for global edge CDN distribution.',
    deliverable: 'DEPLOYED SPATIAL RUNTIME',
    tag: 'PHASE_06',
  },
];

export function ProcessSection() {
  const setCursor = useStore((state) => state.setCursor);
  const resetCursor = useStore((state) => state.resetCursor);

  return (
    <section
      id="experience"
      style={{
        padding: '10rem 6%',
        minHeight: '100vh',
        backgroundColor: '#040407',
        position: 'relative',
        zIndex: 2,
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div style={{ marginBottom: '4.5rem' }}>
        <div className="shimmer-badge" style={{ marginBottom: '1.25rem' }}>
          <span className="status-beacon" />
          <DecryptedText text="METHODOLOGY // 6 STAGES" speed={30} />
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            margin: '0 0 1rem 0',
          }}
          className="text-gradient-chrome"
        >
          THE 6-STEP CONSTRUCTION PIPELINE
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            color: 'var(--color-white-dim)',
            maxWidth: '560px',
            margin: 0,
          }}
        >
          From high-density industrial CAD data to buttery-smooth 60FPS browser execution.
        </p>
      </div>

      {/* 6-Step Roadmap Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {steps.map((step) => (
          <SpotlightCard
            key={step.num}
            spotlightColor="rgba(0, 255, 204, 0.15)"
            style={{
              padding: '2.5rem',
              minHeight: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: 'rgba(8, 8, 14, 0.7)',
              cursor: 'none',
            }}
            onMouseEnter={() => setCursor('explore', step.num)}
            onMouseLeave={resetCursor}
          >
            {/* Top Tag & Number */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '3rem',
                  fontWeight: 800,
                  color: 'rgba(255, 255, 255, 0.12)',
                  lineHeight: 1,
                }}
              >
                {step.num}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  color: '#00ffcc',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  background: 'rgba(0, 255, 204, 0.1)',
                  border: '1px solid rgba(0, 255, 204, 0.25)',
                }}
              >
                {step.tag}
              </span>
            </div>

            {/* Title & Desc */}
            <div style={{ margin: '1.5rem 0' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                  margin: '0 0 0.75rem 0',
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  lineHeight: 1.6,
                  color: 'var(--color-white-dim)',
                  margin: 0,
                }}
              >
                {step.desc}
              </p>
            </div>

            {/* Footer Deliverable */}
            <div
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: '#94a3b8',
              }}
            >
              <span style={{ color: '#00ffcc' }}>✓</span> {step.deliverable}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}

export default ProcessSection;
