import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RevealText } from '../Typography';
import { SpotlightCard } from '../ui/SpotlightCard';
import { LampHeader } from '../ui/LampHeader';
import { NumberTicker } from '../ui/NumberTicker';
import { DecryptedText } from '../ui/DecryptedText';

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  {
    numeric: true,
    prefix: '+',
    val: 340,
    suffix: '%',
    label: 'ENGAGEMENT DEPTH',
    desc: 'Visitors inspect interactive 3D assets 3.4x longer than static 2D imagery.',
  },
  {
    numeric: true,
    prefix: '',
    val: 60,
    suffix: ' FPS',
    label: 'ZERO-LATENCY BUFFER',
    desc: 'Hardware-accelerated WebGL pipeline tailored for desktop and mobile.',
  },
  {
    numeric: false,
    display: '1:1',
    label: 'PHYSICAL ACCURACY',
    desc: 'Photometric PBR textures calibrated to physical real-world studio lights.',
  },
];

export function StatementSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 30%',
      end: 'bottom 20%',
      animation: gsap.to(sectionRef.current, { opacity: 0.98, ease: 'power2.inOut' }),
      scrub: true,
    });
  }, []);

  return (
    <section
      id="statement"
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8rem 6%',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#030305',
      }}
    >
      {/* Background ambient lighting (Aceternity / Magic UI glow) */}
      <div className="ambient-glow-cyan" style={{ top: '15%', left: '15%' }} />
      <div className="ambient-glow-violet" style={{ bottom: '15%', right: '15%' }} />

      {/* Volumetric Lamp Header (Aceternity UI) */}
      <LampHeader glowColor="#00ffcc">
        <div className="shimmer-badge" style={{ marginBottom: '2.5rem' }}>
          <span className="status-beacon" />
          <DecryptedText text="MANIFESTO // 01" speed={30} />
        </div>

        <div style={{ textAlign: 'center', maxWidth: '1080px', marginBottom: '2rem' }}>
          <RevealText duration={1.2}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 6.5vw, 6.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                margin: 0,
              }}
              className="text-gradient-chrome"
            >
              WEBSITES SHOULD BE EXPLORED.
            </h2>
          </RevealText>

          <RevealText duration={1.2} delay={0.2}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 6.5vw, 6.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                margin: '0.5rem 0 0 0',
              }}
              className="text-gradient-cyan"
            >
              NOT JUST SCROLLED.
            </h2>
          </RevealText>

          <div style={{ marginTop: '2rem', maxWidth: '640px', margin: '2rem auto 0 auto' }}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 1.2vw, 1.25rem)',
                lineHeight: 1.75,
                color: 'var(--color-white-dim)',
              }}
            >
              Flat grids and static PNGs conceal the craftsmanship of true design. INZU crafts spatial web experiences that invite touch, rotation, and micro-discovery.
            </p>
          </div>
        </div>
      </LampHeader>

      {/* Impact Metric Cards with Magic UI NumberTicker */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          width: '100%',
          maxWidth: '1080px',
          position: 'relative',
          zIndex: 2,
          marginTop: '2rem',
        }}
      >
        {metrics.map((m, i) => (
          <SpotlightCard
            key={i}
            spotlightColor="rgba(0, 255, 204, 0.16)"
            borderColor="rgba(0, 255, 204, 0.45)"
            enableTilt={true}
            style={{ padding: '2.25rem' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1,
                  textShadow: '0 0 20px rgba(0, 255, 204, 0.25)',
                }}
              >
                {m.numeric ? (
                  <NumberTicker
                    value={m.val}
                    prefix={m.prefix}
                    suffix={m.suffix}
                    delay={i * 150}
                  />
                ) : (
                  m.display
                )}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  color: '#00ffcc',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  background: 'rgba(0, 255, 204, 0.1)',
                  border: '1px solid rgba(0, 255, 204, 0.25)',
                }}
              >
                0{i + 1}
              </span>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.12em',
                color: '#e2e8f0',
                marginTop: '1.5rem',
                marginBottom: '0.5rem',
              }}
            >
              {m.label}
            </div>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                lineHeight: 1.6,
                color: 'var(--color-white-dim)',
                margin: 0,
              }}
            >
              {m.desc}
            </p>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}

export default StatementSection;

