import React from 'react';
import { GlowCard } from '../ui/GlowCard';
import { TechnicalLabel, RevealText } from '../Typography';
import { ArrowUpRight } from 'lucide-react';
import useStore from '../../store/useStore';

const projects = [
  {
    id: '001',
    title: 'HOROLOGY TIMEPIECE',
    category: 'PRECISION WATCHMAKING',
    tech: 'WEBGL 2.0 / PBR SHADERS',
    year: '2026',
    status: 'ACTIVE ARTIFACT',
    desc: 'Micro-mechanical tourbillon assembly with photorealistic anti-reflective sapphire crystal refraction and gear mechanics.',
    gridCol: 'span 8',
  },
  {
    id: '002',
    title: 'AERODYNAMIC CONCEPT',
    category: 'AUTOMOTIVE DIGITAL TWIN',
    tech: 'RAYMARCHED OPTICS',
    year: '2026',
    status: 'COMPLETED',
    desc: 'Carbon composite surface curvature with dynamic environment reflections and grazing Fresnel iridescence.',
    gridCol: 'span 4',
  },
  {
    id: '003',
    title: 'SYNTHETIC MONARCH',
    category: 'HAUTE COUTURE 3D',
    tech: 'PHYSICS CLOTH / DRAPE',
    year: '2026',
    status: 'LIVE EXHIBIT',
    desc: 'The celestial monarch figure merging 1890 Victorian shirt, pleated trousers, and diesel white runners.',
    gridCol: 'span 4',
  },
  {
    id: '004',
    title: 'SPATIAL VOID ARCHITECTURE',
    category: 'BRUTALIST SPATIAL',
    tech: 'VOLUMETRIC FOG PARTICLES',
    year: '2026',
    status: 'RESEARCH LAB',
    desc: 'Unreal-scale monolithic architectural installation with real-time volumetric light scattering and acoustics.',
    gridCol: 'span 8',
  },
  {
    id: '005',
    title: 'NEURAL HARDWARE INTERFACE',
    category: 'CONSUMER TECHNOLOGY',
    tech: 'EXPLODED CAD ASSEMBLY',
    year: '2026',
    status: 'COMMISSIONED',
    desc: 'Exploded internal chassis visualizing titanium heat-pipes, battery cells, and silicon substrate architecture.',
    gridCol: 'span 6',
  },
  {
    id: '006',
    title: 'CRYSTALLINE COLLECTIBLE',
    category: 'DIGITAL MUSEUM PIECE',
    tech: 'REFRACTION DISPERSION',
    year: '2026',
    status: 'VAULT 01',
    desc: 'Limited-edition physical artifact scanned and preserved forever as an interactive 60fps holographic asset.',
    gridCol: 'span 6',
  },
];

export function Portfolio() {
  const setCursor = useStore((state) => state.setCursor);
  const resetCursor = useStore((state) => state.resetCursor);

  return (
    <section
      id="portfolio"
      style={{
        position: 'relative',
        zIndex: 10,
        minHeight: '100vh',
        padding: '7rem 3rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        backgroundColor: 'rgba(3, 3, 6, 0.65)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '4rem', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem' }}>
        <div>
          <div style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ height: '8px', width: '8px', borderRadius: '50%', backgroundColor: '#00ffcc', boxShadow: '0 0 8px #00ffcc' }} />
            <TechnicalLabel color="#00ffcc">
              03 // COMMISSIONED DIGITAL OBJECTS
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
              CURATED ARTIFACTS
            </h2>
          </RevealText>
        </div>
        <div style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
          06 FLAGSHIP EXPERIENCES // INTERACTIVE 3D
        </div>
      </div>

      {/* Structured Balanced Bento Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '1.5rem',
        }}
      >
        {projects.map((item) => (
          <div
            key={item.id}
            style={{
              gridColumn: item.gridCol,
              minHeight: '320px',
              display: 'flex',
            }}
          >
            <GlowCard
              style={{
                width: '100%',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '20px',
                backgroundColor: 'rgba(10, 10, 16, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(24px)',
                cursor: 'none',
              }}
              spotlightColor="rgba(57, 18, 255, 0.35)"
              onMouseEnter={() => setCursor('explore', 'INSPECT')}
              onMouseLeave={resetCursor}
            >
              {/* Top Card Meta */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '12px', fontWeight: 700, color: '#00ffcc' }}>
                    {item.id}
                  </span>
                  <span style={{ height: '12px', width: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
                  <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '10px', color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                    {item.category}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ borderRadius: '9999px', backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '2px 8px', fontFamily: 'var(--font-mono, monospace)', fontSize: '9px', color: 'rgba(255, 255, 255, 0.6)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    {item.year}
                  </span>
                  <div style={{ display: 'flex', height: '28px', width: '28px', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: '1px solid rgba(255, 255, 255, 0.1)', backgroundColor: 'rgba(255, 255, 255, 0.05)', color: 'rgba(255, 255, 255, 0.7)' }}>
                    <ArrowUpRight size={13} />
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <div style={{ margin: 'auto 0', padding: '1rem 0' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display, "Space Grotesk")',
                    fontSize: 'clamp(1.5rem, 2vw, 2.25rem)',
                    fontWeight: 700,
                    color: '#ffffff',
                    textTransform: 'uppercase',
                    letterSpacing: '-0.01em',
                    marginBottom: '0.75rem',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body, "Inter")',
                    fontSize: '13px',
                    lineHeight: 1.6,
                    color: 'rgba(242, 240, 234, 0.65)',
                    margin: 0,
                    maxWidth: '560px',
                  }}
                >
                  {item.desc}
                </p>
              </div>

              {/* Bottom Technical Telemetry */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingTop: '1rem',
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  color: 'rgba(255, 255, 255, 0.4)',
                }}
              >
                <span>{item.tech}</span>
                <span style={{ color: '#00ffcc' }}>{item.status}</span>
              </div>
            </GlowCard>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
