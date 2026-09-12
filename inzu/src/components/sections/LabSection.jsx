import React, { useState } from 'react';
import { SpotlightCard } from '../ui/SpotlightCard';
import { DecryptedText } from '../ui/DecryptedText';
import { useStore } from '../../store/useStore';
import soundFx from '../../utils/audio';

const experiments = [
  {
    id: 'EXP-01',
    title: 'CHROMATIC DISPERSION',
    type: 'GLSL / SHADER STUDY',
    description: 'Sub-surface spectral refraction through synthetic crystalline prisms with wavelength dispersion.',
    status: 'REALTIME',
    tag: 'SPECTRAL_01',
    metric: '3 DISPERSION PASSES',
  },
  {
    id: 'EXP-02',
    title: 'BARYCENTRIC TOPOLOGY',
    type: 'PROCEDURAL GEOMETRY',
    description: 'Dynamic wireframe density recalculation in screen-space based on camera grazing angle.',
    status: 'ACTIVE',
    tag: 'TOPOLOGY_04',
    metric: 'VERTEX SHADER CALC',
  },
  {
    id: 'EXP-03',
    title: 'COUTURE FABRIC OSCILLATION',
    type: 'VERTEX DISPLACEMENT',
    description: 'Harmonic wave turbulence simulating weighted silk drape and micro-wrinkles under microgravity.',
    status: 'SIMULATION',
    tag: 'CLOTH_PHYSICS',
    metric: '60 FPS VERLET',
  },
  {
    id: 'EXP-04',
    title: 'VOLUMETRIC FOG VOID',
    type: 'LIGHTING TEST',
    description: 'Raymarched light cones interacting with drifting micro-particulates in deep obsidian space.',
    status: 'EXPERIMENTAL',
    tag: 'VOLUMETRICS',
    metric: 'RAYMARCH STEP 64',
  },
  {
    id: 'EXP-05',
    title: 'CRT RASTER PHOSPHOR',
    type: 'RETRO DIGITAL MEMORY',
    description: 'PS1-era phosphor line artifacts merged with ultra-clean modern render buffers and bloom.',
    status: 'ACTIVE',
    tag: 'ANALOG_HYBRID',
    metric: 'POSTPROCESS PASS',
  },
  {
    id: 'EXP-06',
    title: 'KINETIC SPATIAL TYPE',
    type: 'TYPOGRAPHY ENGINE',
    description: 'Glyph vertices displaced into three-dimensional space via cursor proximity and velocity.',
    status: 'STABLE',
    tag: 'SPATIAL_TYPE',
    metric: 'MOUSE REPEL R50',
  },
];

export function LabSection() {
  const [activeExp, setActiveExp] = useState(0);
  const setCursor = useStore((state) => state.setCursor);
  const resetCursor = useStore((state) => state.resetCursor);

  return (
    <section
      id="lab"
      style={{
        minHeight: '100vh',
        padding: '10rem 6%',
        position: 'relative',
        zIndex: 2,
        backgroundColor: '#030305',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Background ambient lighting */}
      <div className="ambient-glow-violet" style={{ top: '20%', right: '10%' }} />

      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '4.5rem',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        <div>
          <div className="shimmer-badge" style={{ marginBottom: '1.25rem' }}>
            <span className="status-beacon" />
            <DecryptedText text="CHAMBER 04 // RESEARCH & EXPERIMENTATION" speed={30} />
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              margin: 0,
            }}
            className="text-gradient-chrome"
          >
            THE INZU LAB
          </h2>
        </div>

        <div style={{ maxWidth: '380px' }}>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              lineHeight: 1.6,
              color: 'var(--color-white-dim)',
              letterSpacing: '0.05em',
              margin: 0,
            }}
          >
            NON-COMMERCIAL RESEARCH INTO CUSTOM GLSL SHADERS, TOPOLOGY, DIGITAL FABRIC & UNCONVENTIONAL WEBGL INTERACTION PATTERNS.
          </p>
        </div>
      </div>

      {/* Experiments Bento Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {experiments.map((exp, index) => {
          const isActive = activeExp === index;
          return (
            <SpotlightCard
              key={exp.id}
              onClick={() => setActiveExp(index)}
              onMouseEnter={() => setCursor('explore', 'RESEARCH')}
              onMouseLeave={resetCursor}
              spotlightColor="rgba(0, 255, 204, 0.16)"
              borderColor={isActive ? '#00ffcc' : 'rgba(255, 255, 255, 0.1)'}
              style={{
                padding: '2.25rem',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: isActive ? 'rgba(12, 12, 20, 0.95)' : 'rgba(8, 8, 12, 0.65)',
                boxShadow: isActive ? '0 0 30px rgba(0, 255, 204, 0.15)' : 'none',
                cursor: 'none',
              }}
            >
              {/* Top Tag & Status */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: isActive ? '#00ffcc' : 'var(--color-white-ghost)',
                  }}
                >
                  {exp.id} // {exp.tag}
                </span>

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    color: isActive ? '#00ffcc' : '#888',
                    padding: '2px 7px',
                    borderRadius: '4px',
                    background: isActive ? 'rgba(0, 255, 204, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                    border: `1px solid ${isActive ? '#00ffcc' : 'rgba(255, 255, 255, 0.08)'}`,
                  }}
                >
                  {exp.status}
                </span>
              </div>

              {/* Title & Type */}
              <div style={{ margin: '1.5rem 0' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    color: '#888894',
                    letterSpacing: '0.12em',
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  {exp.type}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: isActive ? '#ffffff' : 'var(--color-white-dim)',
                    letterSpacing: '-0.02em',
                    margin: '0 0 0.75rem 0',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {exp.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    lineHeight: 1.6,
                    color: isActive ? '#e2e8f0' : '#71717a',
                    margin: 0,
                  }}
                >
                  {exp.description}
                </p>
              </div>

              {/* Foot Metric */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingTop: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                }}
              >
                <span style={{ color: 'var(--color-white-ghost)' }}>{exp.metric}</span>
                <span style={{ color: isActive ? '#00ffcc' : '#555' }}>
                  {isActive ? '● SHADER ACTIVE' : '○ STANDBY'}
                </span>
              </div>
            </SpotlightCard>
          );
        })}
      </div>

      {/* Bottom Metrics Philosophy Grid */}
      <div
        style={{
          marginTop: '6rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {[
          { metric: '01', title: 'MORE UNDERSTANDING', desc: 'Tangible volume replaces flat speculation.' },
          { metric: '02', title: 'MORE CONFIDENCE', desc: 'Zero blind spots prior to commitment.' },
          { metric: '03', title: 'MORE CURIOSITY', desc: 'Inviting touch triggers emotional desire.' },
          { metric: '04', title: 'LESS DISTANCE', desc: 'Closing the gulf between viewer and object.' },
        ].map((item, idx) => (
          <SpotlightCard
            key={item.metric}
            spotlightColor="rgba(0, 255, 204, 0.12)"
            style={{
              padding: '2rem',
              backgroundColor: 'rgba(6, 6, 10, 0.7)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: idx === 2 ? '#00ffcc' : 'var(--color-white-ghost)',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              METRIC // {item.metric}
            </span>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: idx === 2 ? '#00ffcc' : '#ffffff',
                marginBottom: '0.5rem',
              }}
            >
              {item.title}
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                color: 'var(--color-white-dim)',
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              {item.desc}
            </p>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}

export default LabSection;
