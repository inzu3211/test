import React from 'react';
import { SpotlightCard } from '../ui/SpotlightCard';
import { BorderBeam } from '../ui/BorderBeam';
import { DecryptedText } from '../ui/DecryptedText';
import { useStore } from '../../store/useStore';

const techStack = [
  'THREE.JS',
  'REACT THREE FIBER',
  'GLSL SHADER PROGRAMMING',
  'GSAP MOTION & SCROLL',
  'LENIS SMOOTH ENGINE',
  'PBR OPTICAL CALIBRATION',
  'TOPOLOGICAL RETOPOLOGY',
  'POSTPROCESSING & BLOOM',
  'PHYSICS SIMULATION',
  'ZUSTAND STATE ENGINE',
];

export function AboutSection() {
  const setCursor = useStore((state) => state.setCursor);
  const resetCursor = useStore((state) => state.resetCursor);

  return (
    <section
      id="about"
      style={{
        padding: '10rem 6%',
        minHeight: '100vh',
        backgroundColor: '#030305',
        position: 'relative',
        zIndex: 2,
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div style={{ marginBottom: '4rem' }}>
        <div className="shimmer-badge" style={{ marginBottom: '1.25rem' }}>
          <span className="status-beacon" />
          <DecryptedText text="PHILOSOPHY // WHO BUILDS THIS" speed={30} />
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
          ENGINEERED FOR OBSESSION.
        </h2>
      </div>

      {/* Bento Grid Architecture */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '1.5rem',
        }}
      >
        {/* Large Manifesto Card (col 8) */}
        <div style={{ gridColumn: 'span 8' }} className="about-col-main">
          <SpotlightCard
            style={{
              padding: '3rem',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: 'rgba(10, 10, 16, 0.85)',
              position: 'relative',
            }}
          >
            <BorderBeam colorFrom="#00ffcc" colorTo="#7928ca" duration={12} />

            <div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: '#00ffcc',
                  letterSpacing: '0.15em',
                  display: 'block',
                  marginBottom: '1rem',
                }}
              >
                // THE INZU MANIFESTO
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
                  fontWeight: 700,
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                  margin: '0 0 1.5rem 0',
                }}
              >
                Products deserve more than a static picture.
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  lineHeight: 1.8,
                  color: 'var(--color-white-dim)',
                  margin: '0 0 1.5rem 0',
                }}
              >
                INZU is an independent creative development practice dedicated exclusively to spatial, realtime 3D digital experiences. Every project starts with a single foundational conviction: when a visitor can explore an object with physical lighting, orbital inspection, and tactile responsive feedback, they stop scanning and start desiring.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  lineHeight: 1.8,
                  color: 'var(--color-white-dim)',
                  margin: 0,
                }}
              >
                We bridge the gulf between industrial product engineering and high-art web design. No bloated templates. No compromises on frame times.
              </p>
            </div>

            {/* Core Tenets */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.5rem',
                marginTop: '3rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '2rem',
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#ffffff', fontWeight: 600 }}>
                  ART DIRECTED REALTIME
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#888', marginTop: '0.25rem' }}>
                  Every shader tuned for emotional weight and visual clarity.
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#00ffcc', fontWeight: 600 }}>
                  ZERO COMPROMISE PERFORMANCE
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#888', marginTop: '0.25rem' }}>
                  Fluid 60FPS across desktop monitors and mobile touchscreens.
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Tech Stack Matrix Card (col 4) */}
        <div style={{ gridColumn: 'span 4' }} className="about-col-side">
          <SpotlightCard
            style={{
              padding: '2.5rem',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: 'rgba(8, 8, 12, 0.75)',
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--color-white-dim)',
                  letterSpacing: '0.15em',
                  display: 'block',
                  marginBottom: '1rem',
                }}
              >
                TECHNICAL WEAPONRY
              </span>
              <h4
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  margin: '0 0 1.5rem 0',
                }}
              >
                PRODUCTION ARSENAL
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {techStack.map((tech) => (
                  <div
                    key={tech}
                    onMouseEnter={() => setCursor('navigate', tech)}
                    onMouseLeave={resetCursor}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      letterSpacing: '0.1em',
                      color: 'var(--color-white-dim)',
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      padding: '0.5rem 0.85rem',
                      borderRadius: '8px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'none',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span>{tech}</span>
                    <span style={{ color: '#00ffcc', fontSize: '10px' }}>✦</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                marginTop: '2rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '1rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: '#666',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>SYS // PRODUCTION READY</span>
              <span style={{ color: '#00ffcc' }}>V2.6</span>
            </div>
          </SpotlightCard>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-col-main, .about-col-side {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}

export default AboutSection;
