import React, { useState } from 'react';
import { SpotlightCard } from '../ui/SpotlightCard';
import { DecryptedText } from '../ui/DecryptedText';
import { useStore } from '../../store/useStore';

const categories = [
  {
    name: 'LUXURY TIMEPIECES',
    code: 'DOM/01',
    detail: 'Micro-mechanical tourbillons, sapphire crystal light refraction, ceramic bezel finishes, and dual-axis escapement simulations.',
    tech: 'PHYSICAL_OPTICS',
    badge: 'PBR 4K',
    tags: ['HOROLOGY', 'REFRACTION', 'GEAR TRAIN'],
  },
  {
    name: 'AUTOMOTIVE & MOBILITY',
    code: 'DOM/02',
    detail: 'Multi-layer clearcoat reflections, aerodynamic surface normals, custom interior trim configurators, and rim physics.',
    tech: 'SURFACE_CURVATURE',
    badge: 'AERODYNAMIC',
    tags: ['METALLIC FLAKE', 'CURVATURE', 'CFD STREAM'],
  },
  {
    name: 'COUTURE & DIGITAL WEAR',
    code: 'DOM/03',
    detail: 'Dynamic cloth draping, weighted silk harmonics, woven jacquard microstructures, and low-gravity physical oscillations.',
    tech: 'VERLET_CLOTH',
    badge: 'FABRIC ENGINE',
    tags: ['CLOTH PHYSICS', 'SUBSURFACE', 'TAILORING'],
  },
  {
    name: 'CONSUMER TECHNOLOGY',
    code: 'DOM/04',
    detail: 'Anodized CNC aluminum housings, exploded internal assemblies, tactile button kinematics, and optical lens raytracing.',
    tech: 'PRECISION_CAD',
    badge: 'EXPLODED CAD',
    tags: ['INTERNAL CAD', 'ANODIZATION', 'ASSEMBLY'],
  },
  {
    name: 'SPATIAL ARCHITECTURE',
    code: 'DOM/05',
    detail: 'Architectural scale walkthroughs, dynamic sun studies, volumetric global illumination, and spatial audio integration.',
    tech: 'VOXEL_IBL',
    badge: 'SPATIAL 3D',
    tags: ['SUN ANGLE', 'BRUTALISM', 'VOLUMETRICS'],
  },
  {
    name: 'HIGH-END FURNITURE',
    code: 'DOM/06',
    detail: 'Tactile aniline leather grain, architectural joinery, specular brushed bronze, and ambient studio light staging.',
    tech: 'MATERIAL_PBR',
    badge: 'STUDIO LIGHT',
    tags: ['LEATHER GRAIN', 'JOINERY', 'ARCHITECTURAL'],
  },
  {
    name: 'BESPOKE PACKAGING',
    code: 'DOM/07',
    detail: 'Hot-stamp metallic foil stamping, embossed paper micro-relief, unboxing kinematics, and magnetic clasp interactions.',
    tech: 'TACTILE_PRINT',
    badge: 'TACTILE',
    tags: ['FOIL REFLECTION', 'EMBOSSING', 'UNBOXING'],
  },
  {
    name: 'MUSEUM COLLECTIBLES',
    code: 'DOM/08',
    detail: 'Photogrammetric physical reconstruction, microscopic patina aging, holographic material shaders, and archival metadata.',
    tech: 'DIGITAL_TWIN',
    badge: 'ARCHIVAL',
    tags: ['PHOTOGRAMMETRY', 'PATINA', 'MUSEUM 3D'],
  },
];

export function ServiceSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const setCursor = useStore((state) => state.setCursor);
  const resetCursor = useStore((state) => state.resetCursor);

  return (
    <section
      id="services"
      style={{
        minHeight: '100vh',
        padding: '10rem 6%',
        position: 'relative',
        zIndex: 2,
        backgroundColor: '#040407',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div style={{ marginBottom: '4rem' }}>
        <div className="shimmer-badge" style={{ marginBottom: '1.25rem' }}>
          <span className="status-beacon" />
          <DecryptedText text="CAPABILITIES // DOMAIN OF INZU" speed={30} />
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
          WHAT CAN BECOME INTERACTIVE?
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
          We translate physical craft into digital objects that retain their material weight, precision optics, and emotional presence.
        </p>
      </div>

      {/* 8-Card Bento Matrix */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {categories.map((cat, i) => {
          const isSelected = activeCategory === i;
          return (
            <SpotlightCard
              key={cat.name}
              spotlightColor="rgba(0, 255, 204, 0.16)"
              borderColor={isSelected ? '#00ffcc' : 'rgba(255, 255, 255, 0.15)'}
              onMouseEnter={() => {
                setActiveCategory(i);
                setCursor('explore', cat.name);
              }}
              onMouseLeave={resetCursor}
              style={{
                padding: '2rem',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: isSelected ? 'rgba(12, 12, 20, 0.9)' : 'rgba(8, 8, 12, 0.65)',
                cursor: 'none',
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: isSelected ? '#00ffcc' : 'var(--color-white-ghost)',
                  }}
                >
                  {cat.code}
                </span>

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    color: isSelected ? '#00ffcc' : 'var(--color-white-dim)',
                    padding: '2px 7px',
                    borderRadius: '4px',
                    background: isSelected ? 'rgba(0, 255, 204, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                    border: `1px solid ${isSelected ? 'rgba(0, 255, 204, 0.3)' : 'rgba(255, 255, 255, 0.08)'}`,
                  }}
                >
                  {cat.badge}
                </span>
              </div>

              {/* Title & Detail */}
              <div style={{ margin: '1.5rem 0' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: isSelected ? '#ffffff' : 'var(--color-white-dim)',
                    margin: '0 0 0.75rem 0',
                    letterSpacing: '-0.02em',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {cat.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    lineHeight: 1.6,
                    color: isSelected ? '#cbd5e1' : '#71717a',
                    margin: 0,
                    transition: 'color 0.2s ease',
                  }}
                >
                  {cat.detail}
                </p>
              </div>

              {/* Tag Chips Footer */}
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '8px',
                      letterSpacing: '0.08em',
                      color: isSelected ? '#00ffcc' : '#64748b',
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      padding: '2px 6px',
                      borderRadius: '3px',
                      border: '1px solid rgba(255, 255, 255, 0.04)',
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}

export default ServiceSection;
