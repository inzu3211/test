import React, { useState } from 'react';
import { SpotlightCard } from '../ui/SpotlightCard';
import { BorderBeam } from '../ui/BorderBeam';
import { DecryptedText } from '../ui/DecryptedText';
import { useStore } from '../../store/useStore';
import soundFx from '../../utils/audio';

const stages = [
  {
    num: '01',
    title: 'SEE IT.',
    subtitle: 'Immediate Visual Engagement',
    desc: 'Static e-commerce renders convey only one perspective. A real product is volumetric, tactile, and continuous in physical space.',
    metric: '94% of visitors prefer interactive models over multi-angle photo carousels.',
  },
  {
    num: '02',
    title: 'ROTATE IT.',
    subtitle: 'Kinematic Freedom',
    desc: 'Give the client full orbital agency. When users can tilt, zoom, and orbit an object, their mental barrier to purchase diminishes instantly.',
    metric: 'Zero blind spots. True 360-degree inspection eliminates hesitation.',
  },
  {
    num: '03',
    title: 'UNDERSTAND IT.',
    subtitle: 'Deep Technical Comprehension',
    desc: 'Peel back the surface. Reveal exploded view mechanics, internal architectures, and physical material specifications in real time.',
    metric: '68% reduction in product return rates when customer explored in 3D prior to purchase.',
  },
  {
    num: '04',
    title: 'REMEMBER IT.',
    subtitle: 'Emotional Memory & Brand Status',
    desc: 'Products that invite tactile digital interaction live in memory far longer than passive marketing scrolls. It transforms a brochure into an exhibition.',
    metric: '3.8x increase in brand recall compared to standard digital agency portfolios.',
  },
];

export function ProblemSection() {
  const [activeStage, setActiveStage] = useState(0);
  const setCursor = useStore((state) => state.setCursor);
  const resetCursor = useStore((state) => state.resetCursor);

  const current = stages[activeStage];

  return (
    <section
      id="problem"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '8rem 6%',
        position: 'relative',
        backgroundColor: '#040407',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Header Badge */}
      <div style={{ marginBottom: '3rem' }}>
        <div className="shimmer-badge" style={{ marginBottom: '1.25rem' }}>
          <span className="status-beacon" />
          <DecryptedText text="PARADIGM SHIFT // THE PROBLEM" speed={30} />
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4.5vw, 4.2rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            margin: 0,
          }}
          className="text-gradient-chrome"
        >
          STATIC PRODUCTS HAVE LIMITS.
        </h2>
      </div>

      {/* Main Split Comparison Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '2.5rem',
          alignItems: 'center',
        }}
      >
        {/* Left Interactive Stages Column (col 7) */}
        <div style={{ gridColumn: 'span 7' }} className="problem-col-left">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {stages.map((stage, idx) => {
              const isActive = activeStage === idx;
              return (
                <div
                  key={stage.num}
                  onClick={() => {
                    if (useStore.getState().soundEnabled) soundFx.playClick(0.06);
                    setActiveStage(idx);
                  }}
                  onMouseEnter={() => {
                    if (useStore.getState().soundEnabled) soundFx.playHover(0.02);
                    setCursor('enter', stage.title);
                  }}
                  onMouseLeave={resetCursor}
                  style={{
                    padding: '1.5rem 2rem',
                    borderRadius: '14px',
                    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.04)' : 'transparent',
                    border: isActive ? '1px solid rgba(0, 255, 204, 0.35)' : '1px solid rgba(255, 255, 255, 0.05)',
                    cursor: 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '13px',
                          color: isActive ? '#00ffcc' : 'var(--color-white-ghost)',
                          fontWeight: 600,
                        }}
                      >
                        {stage.num}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
                          fontWeight: 700,
                          color: isActive ? '#ffffff' : 'var(--color-white-dim)',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {stage.title}
                      </span>
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        color: isActive ? '#00ffcc' : '#444',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {isActive ? 'ACTIVE STEP' : 'SELECT'}
                    </span>
                  </div>

                  {isActive && (
                    <div style={{ marginTop: '1rem', paddingLeft: '2.5rem' }}>
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '14px',
                          lineHeight: 1.6,
                          color: 'var(--color-white-dim)',
                          margin: '0 0 1rem 0',
                        }}
                      >
                        {stage.desc}
                      </p>
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          color: '#00ffcc',
                          backgroundColor: 'rgba(0, 255, 204, 0.08)',
                          padding: '0.4rem 0.8rem',
                          borderRadius: '6px',
                          border: '1px solid rgba(0, 255, 204, 0.2)',
                        }}
                      >
                        <span>✦</span> {stage.metric}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Volumetric Simulation HUD (col 5) */}
        <div style={{ gridColumn: 'span 5' }} className="problem-col-right">
          <SpotlightCard
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '440px',
              backgroundColor: 'rgba(10, 10, 18, 0.9)',
              position: 'relative',
            }}
          >
            <BorderBeam colorFrom="#00ffcc" colorTo="#7928ca" duration={10} />

            {/* HUD Top Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#00ffcc' }}>
                TELEMETRY // STAGE_{current.num}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span className="status-beacon" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-white-dim)' }}>
                  ORBIT SIMULATION
                </span>
              </div>
            </div>

            {/* Radar / Geometric Rings Center Visual */}
            <div
              style={{
                margin: '3rem auto',
                width: '180px',
                height: '180px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  border: '1px dashed rgba(0, 255, 204, 0.4)',
                  animation: 'radar-spin 20s linear infinite',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: '20px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: '45px',
                  borderRadius: '50%',
                  border: '1px solid rgba(121, 40, 202, 0.5)',
                }}
              />

              {/* Center Core Indicator */}
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  border: '1px solid #00ffcc',
                  backgroundColor: 'rgba(0, 255, 204, 0.1)',
                  boxShadow: '0 0 15px rgba(0, 255, 204, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: '#ffffff',
                }}
              >
                3D
              </div>
            </div>

            {/* HUD Foot */}
            <div
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: 'var(--color-white-dim)',
              }}
            >
              <span>AZIMUTH: 180.00°</span>
              <span>ELEVATION: 45.00°</span>
              <span style={{ color: '#00ffcc' }}>VOLUMETRIC OK</span>
            </div>
          </SpotlightCard>
        </div>
      </div>

      <style>{`
        @keyframes radar-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 900px) {
          .problem-col-left, .problem-col-right {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}

export default ProblemSection;
