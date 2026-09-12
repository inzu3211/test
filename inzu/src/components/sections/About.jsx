import React from 'react';
import { GlowCard } from '../ui/GlowCard';
import { TechnicalLabel, RevealText } from '../Typography';
import { Code2, Globe2, Compass } from 'lucide-react';
import useStore from '../../store/useStore';

export function About() {
  const setCursor = useStore((state) => state.setCursor);
  const resetCursor = useStore((state) => state.resetCursor);

  const pillars = [
    {
      num: '01',
      title: 'OBSESSED WITH DETAIL',
      body: 'Every micro-polygon, grazing Fresnel curve, and shadow falloff is calibrated to mirror physical materiality.',
    },
    {
      num: '02',
      title: 'TECHNICAL + CREATIVE',
      body: 'Creative direction harmonized with hardcore GLSL shader optimization and single-batch rendering pipelines.',
    },
    {
      num: '03',
      title: 'PRODUCTS DESERVE INTERACTION',
      body: 'Flat photography flattens desire. When visitors explore an object in spatial 3D, memorability increases tenfold.',
    },
    {
      num: '04',
      title: 'THE WEB IS A CANVAS',
      body: 'We refuse cookie-cutter agency templates. We design custom virtual universes tailored to individual brand mythologies.',
    },
  ];

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        zIndex: 10,
        minHeight: '100vh',
        padding: '7rem 3rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        backgroundColor: 'rgba(3, 3, 6, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '4rem', maxWidth: '780px' }}>
        <div style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ height: '8px', width: '8px', borderRadius: '50%', backgroundColor: '#00ffcc', boxShadow: '0 0 8px #00ffcc' }} />
          <TechnicalLabel color="#00ffcc">
            05 // STUDIO PHILOSOPHY & CRAFT
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
              color: '#f2f0ea',
              margin: '0.5rem 0',
            }}
          >
            WHO BUILDS THIS?
          </h2>
        </RevealText>
        <p
          style={{
            marginTop: '1.5rem',
            fontFamily: 'var(--font-body, "Inter")',
            fontSize: 'clamp(1rem, 1.25vw, 1.25rem)',
            lineHeight: 1.65,
            color: 'rgba(242, 240, 234, 0.7)',
            fontWeight: 300,
            maxWidth: '620px',
          }}
        >
          INZU is an independent creative development practice at the intersection of haute couture, computational geometry, and experimental WebGL storytelling.
        </p>
      </div>

      {/* 4 Pillars Bento Layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3.5rem',
        }}
      >
        {pillars.map((pillar) => (
          <GlowCard
            key={pillar.num}
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '260px',
              borderRadius: '20px',
              backgroundColor: 'rgba(10, 10, 16, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(24px)',
            }}
            spotlightColor="rgba(57, 18, 255, 0.3)"
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '1.75rem', fontWeight: 800, color: '#00ffcc' }}>
                {pillar.num}
              </span>
              <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '10px', color: 'rgba(255, 255, 255, 0.4)', textTransform: 'uppercase', letterSpacing: '0.14em' }}>
                INZU PILLAR
              </span>
            </div>

            <div style={{ margin: 'auto 0' }}>
              <h3 style={{ fontFamily: 'var(--font-display, "Space Grotesk")', fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                {pillar.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-body, "Inter")', fontSize: '13px', lineHeight: 1.6, color: 'rgba(242, 240, 234, 0.65)', margin: 0 }}>
                {pillar.body}
              </p>
            </div>

            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.75rem', fontFamily: 'var(--font-mono, monospace)', fontSize: '9px', color: 'rgba(255, 255, 255, 0.4)', display: 'flex', justifyContent: 'space-between' }}>
              <span>PRINCIPLE VERIFIED</span>
              <span style={{ color: '#00ffcc' }}>ACTIVE DOCTRINE</span>
            </div>
          </GlowCard>
        ))}
      </div>

      {/* Capabilities Matrix */}
      <div
        style={{
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          backgroundColor: 'rgba(6, 6, 12, 0.8)',
          backdropFilter: 'blur(24px)',
          padding: '3rem',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Code2 size={16} color="#00ffcc" />
              <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '11px', color: '#ffffff', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.12em' }}>
                ENGINEERING
              </span>
            </div>
            <ul style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '11px', color: 'rgba(255, 255, 255, 0.6)', listStyle: 'none', padding: 0, margin: 0, lineHeight: 2.2 }}>
              <li>• THREE.JS & REACT THREE FIBER</li>
              <li>• CUSTOM GLSL / VERTEX SHADERS</li>
              <li>• LENIS EXPONENTIAL INERTIA</li>
              <li>• GSAP SCROLLTRIGGER ENGINE</li>
              <li>• DRACO CAD RETOPOLOGY</li>
            </ul>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Compass size={16} color="#3912ff" />
              <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '11px', color: '#ffffff', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.12em' }}>
                3D ART DIRECTION
              </span>
            </div>
            <ul style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '11px', color: 'rgba(255, 255, 255, 0.6)', listStyle: 'none', padding: 0, margin: 0, lineHeight: 2.2 }}>
              <li>• HAUTE COUTURE CLOTH PHYSICS</li>
              <li>• PBR MATERIAL TEXTURE CRAFT</li>
              <li>• CINEMATIC 3-POINT RIGGING</li>
              <li>• SPATIAL AUDIO SCULPTING</li>
              <li>• EXPERIMENTAL TYPOGRAPHY</li>
            </ul>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Globe2 size={16} color="#ff0055" />
              <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '11px', color: '#ffffff', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.12em' }}>
                DEPLOYMENT
              </span>
            </div>
            <ul style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '11px', color: 'rgba(255, 255, 255, 0.6)', listStyle: 'none', padding: 0, margin: 0, lineHeight: 2.2 }}>
              <li>• 60–120 FPS GUARANTEE</li>
              <li>• ADAPTIVE MOBILE DPR DETECTION</li>
              <li>• ZERO DEPENDENCY BLOAT</li>
              <li>• GLOBAL ASSET CDN STREAMING</li>
              <li>• AWWWARDS SOTD READY</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
