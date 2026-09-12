import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MagneticButton } from '../ui/MagneticButton';
import { OriginToggle } from '../ui/OriginToggle';
import { ArrowDownRight, Sparkles } from 'lucide-react';
import useStore from '../../store/useStore';

export function Hero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const heroRevealed = useStore((state) => state.heroRevealed);
  const characterMode = useStore((state) => state.characterMode);
  const setCharacterMode = useStore((state) => state.setCharacterMode);
  const setInspectionActive = useStore((state) => state.setInspectionActive);
  const setCursor = useStore((state) => state.setCursor);
  const resetCursor = useStore((state) => state.resetCursor);

  useEffect(() => {
    if (!heroRef.current) return;
    if (!heroRevealed) return;

    const ctx = gsap.context(() => {
      // Kinetic staggered reveal of headline words triggered on hero reveal
      gsap.fromTo(
        '.hero-word',
        { opacity: 0, y: 45, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: 'power3.out',
          delay: 0.1,
        }
      );

      // Staggered reveal for UI telemetry elements
      gsap.fromTo(
        '.hero-meta',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.35,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, [heroRevealed]);

  const handleModeChange = (mode) => {
    setCharacterMode(mode);
    setInspectionActive(mode === 'scan');
  };

  const modeOptions = [
    { label: 'BEAUTY', value: 'beauty' },
    { label: 'WIREFRAME', value: 'mesh' },
    { label: 'IRIDESCENT', value: 'iridescence' },
    { label: 'SCAN 3D', value: 'scan' },
  ];

  const headline = 'MAKE PRODUCTS FEEL REAL BEFORE THEY ARRIVE.';
  const words = headline.split(' ');

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        position: 'relative',
        zIndex: 10,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '7.5rem 3rem 3rem 3rem',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {/* Top Telemetry / Sub-headline Banner */}
      <div
        className="hero-meta"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          paddingBottom: '1.25rem',
          pointerEvents: 'auto',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ height: '8px', width: '8px', borderRadius: '50%', backgroundColor: '#00ffcc', boxShadow: '0 0 8px #00ffcc' }} />
          <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '11px', letterSpacing: '0.22em', color: '#00ffcc', textTransform: 'uppercase' }}>
            EXPERIENCE ENGINE // 2026
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontFamily: 'var(--font-mono, monospace)', fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(255, 255, 255, 0.45)' }}>
          <span>PIPELINE: THREE.JS + GLSL</span>
          <span>LATENCY: 0.001MS</span>
          <span style={{ color: 'rgba(255, 255, 255, 0.75)' }}>COUTURE CAD SYNTHESIS</span>
        </div>
      </div>

      {/* Center Asymmetrical Headline Area (Positioned Left-Center) */}
      <div style={{ maxWidth: '680px', margin: 'auto 0', padding: '2.5rem 0', pointerEvents: 'auto' }}>
        <div
          className="hero-meta"
          style={{
            marginBottom: '1rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: '4px 14px',
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: '10px',
            letterSpacing: '0.15em',
            color: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Sparkles size={12} color="#00ffcc" />
          <span>AWWWARDS SOTD ARCHITECTURE</span>
        </div>

        <h1
          ref={headlineRef}
          style={{
            fontFamily: 'var(--font-display, "Space Grotesk")',
            fontWeight: 800,
            fontSize: 'clamp(2.5rem, 5.8vw, 5.5rem)',
            lineHeight: 0.94,
            letterSpacing: '-0.02em',
            color: '#f2f0ea',
            textTransform: 'uppercase',
            userSelect: 'none',
            margin: '0.5rem 0',
          }}
        >
          {words.map((word, index) => (
            <span
              key={index}
              className="hero-word"
              style={{
                display: 'inline-block',
                marginRight: '0.22em',
                willChange: 'transform, opacity',
                background: index % 3 === 1 ? 'linear-gradient(180deg, #ffffff 20%, #00ffcc 100%)' : 'none',
                WebkitBackgroundClip: index % 3 === 1 ? 'text' : 'none',
                WebkitTextFillColor: index % 3 === 1 ? 'transparent' : 'inherit',
              }}
            >
              {word}
            </span>
          ))}
        </h1>

        <p
          className="hero-meta"
          style={{
            marginTop: '1.75rem',
            maxWidth: '520px',
            fontFamily: 'var(--font-body, "Inter")',
            fontSize: 'clamp(0.95rem, 1.15vw, 1.1rem)',
            lineHeight: 1.65,
            color: 'rgba(242, 240, 234, 0.7)',
            fontWeight: 300,
          }}
        >
          We engineer photorealistic WebGL environments, tactile PBR cloth dynamics, and kinetic 3D digital twins for luxury brands that demand absolute distinction.
        </p>

        {/* CTA Button Group */}
        <div className="hero-meta" style={{ marginTop: '2.25rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
          <MagneticButton
            onClick={() => {
              const el = document.getElementById('statement');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            cursorLabel="EXPLORE"
          >
            <span>DISCOVER PHILOSOPHY</span>
            <ArrowDownRight size={14} />
          </MagneticButton>

          <MagneticButton
            onClick={() => {
              const el = document.getElementById('surface-structure');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            cursorLabel="INSPECT"
            style={{
              borderColor: 'rgba(255, 255, 255, 0.12)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
            }}
          >
            <span>3D DISSECTION LAB</span>
          </MagneticButton>
        </div>
      </div>

      {/* Bottom Controls: Mode Switcher & Telemetry */}
      <div
        className="hero-meta"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '1.25rem',
          pointerEvents: 'auto',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255, 255, 255, 0.5)' }}>
            VIEW MODE //
          </span>
          <OriginToggle
            options={modeOptions}
            value={characterMode}
            onChange={handleModeChange}
            size="md"
          />
        </div>

        <div style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '10px', letterSpacing: '0.14em', color: 'rgba(255, 255, 255, 0.4)', textAlign: 'right' }}>
          <div>INTERPOLATION // GAZE & BREATHING ACTIVE</div>
          <div style={{ color: '#00ffcc', marginTop: '2px' }}>STATUS // REALTIME 60FPS LOCKED</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
