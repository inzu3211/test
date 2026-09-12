import React, { useState } from 'react';
import { SpotlightCard } from '../ui/SpotlightCard';
import { BorderBeam } from '../ui/BorderBeam';
import { ProjectModal } from '../ui/ProjectModal';
import { DecryptedText } from '../ui/DecryptedText';
import { OriginToggle } from '../ui/OriginToggle';
import { useStore } from '../../store/useStore';
import soundFx from '../../utils/audio';

const projects = [
  {
    id: 'OBJ-001',
    title: 'CHRONO OBSIDIAN',
    category: 'TIMEPIECE',
    tech: 'WEBGL 2.0 / PBR',
    status: 'LIVE',
    triangles: '184,200',
    shader: 'SAPPHIRE REFRACTION',
    description: 'Ultra-precision luxury horology configurator with real-time jewel bearing reflections and brushed ceramic bezel physics.',
    featured: true,
  },
  {
    id: 'OBJ-002',
    title: 'AERO CONCEPT V',
    category: 'AUTOMOTIVE',
    tech: 'RAYMARCHING / GLSL',
    status: 'LIVE',
    triangles: '312,400',
    shader: 'CLEARCOAT FLAKE',
    description: 'Aerodynamic surface curvature inspection with anisotropic metallic flakes and interactive wind-tunnel streamlines.',
    featured: false,
  },
  {
    id: 'OBJ-003',
    title: 'SILK DRAPE PROTOCOL',
    category: 'FASHION',
    tech: 'VERLET CLOTH / RAPID',
    status: 'LIVE',
    triangles: '98,600',
    shader: 'SUBSURFACE SCATTER',
    description: 'Dynamic couture cloth oscillation with gravity weighting, weave microstructure, and optical light penetration.',
    featured: false,
  },
  {
    id: 'OBJ-004',
    title: 'NEURAL AUDIO DRIVER',
    category: 'TECHNOLOGY',
    tech: 'CAD EXPLODED / 3D',
    status: 'COMPLETED',
    triangles: '240,150',
    shader: 'ANODIZED TITANIUM',
    description: 'Exploded internal driver geometry revealing neodymium magnet assemblies, copper voice coils, and acoustic damping chambers.',
    featured: true,
  },
  {
    id: 'OBJ-005',
    title: 'MONOLITHIC PAVILION',
    category: 'ARCHITECTURE',
    tech: 'SPATIAL VOXEL / IBL',
    status: 'COMPLETED',
    triangles: '410,000',
    shader: 'VOLUMETRIC FOG',
    description: 'Architectural walkthrough of concrete brutalist geometry under dynamic daylight angle simulation.',
    featured: false,
  },
  {
    id: 'OBJ-006',
    title: 'GENESIS ARTIFACT',
    category: 'COLLECTIBLE',
    tech: 'INTERACTIVE CONFIG',
    status: 'ACTIVE',
    triangles: '165,800',
    shader: 'HOLOGRAPHIC CHROME',
    description: 'Limited-edition digital twin sculpture with holographic interference patterns and museum-grade orbit inspection.',
    featured: false,
  },
];

const categories = ['ALL', 'TIMEPIECE', 'AUTOMOTIVE', 'FASHION', 'TECHNOLOGY', 'ARCHITECTURE'];

export function PortfolioSection() {
  const setCursor = useStore((state) => state.setCursor);
  const resetCursor = useStore((state) => state.resetCursor);

  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="work"
      style={{
        padding: '10rem 6%',
        minHeight: '100vh',
        backgroundColor: '#030305',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* Section Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '3.5rem',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        <div>
          <div className="shimmer-badge" style={{ marginBottom: '1rem' }}>
            <span className="status-beacon" />
            <DecryptedText text="EXHIBITION // WORK" speed={30} />
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
            SELECTED OBJECTS
          </h2>
        </div>

        {/* Filter Pills (Origin UI style) */}
        <div>
          <OriginToggle
            options={categories.map((c) => ({ label: c, value: c }))}
            value={activeFilter}
            onChange={(cat) => setActiveFilter(cat)}
            size="sm"
          />
        </div>
      </div>

      {/* Asymmetric Bento Grid (Aceternity UI style) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '1.5rem',
        }}
      >
        {filteredProjects.map((project, i) => {
          const isWide = project.featured || i === 0 || i === 3;
          return (
            <div
              key={project.id}
              style={{
                gridColumn: isWide ? 'span 8' : 'span 4',
              }}
              className="portfolio-bento-card"
            >
              <SpotlightCard
                spotlightColor="rgba(0, 255, 204, 0.14)"
                borderColor="rgba(0, 255, 204, 0.4)"
                style={{
                  height: '100%',
                  minHeight: isWide ? '380px' : '320px',
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'none',
                }}
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => setCursor('explore', 'INSPECT')}
                onMouseLeave={resetCursor}
              >
                {isWide && <BorderBeam colorFrom="#00ffcc" colorTo="#7928ca" duration={12} />}

                {/* Card Top */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        color: '#00ffcc',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        background: 'rgba(0, 255, 204, 0.1)',
                        border: '1px solid rgba(0, 255, 204, 0.25)',
                      }}
                    >
                      {project.id}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        color: 'var(--color-white-ghost)',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '9px',
                      color: project.status === 'LIVE' ? '#00ffcc' : 'var(--color-white-dim)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    <span
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        backgroundColor: project.status === 'LIVE' ? '#00ffcc' : '#888',
                      }}
                    />
                    {project.status}
                  </span>
                </div>

                {/* Card Center — Title & Details */}
                <div style={{ margin: '2rem 0' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: isWide ? 'clamp(1.8rem, 3vw, 2.6rem)' : '1.6rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      margin: '0 0 0.75rem 0',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      lineHeight: 1.6,
                      color: 'var(--color-white-dim)',
                      maxWidth: isWide ? '540px' : '100%',
                      margin: 0,
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Card Foot — Telemetry Matrix */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    paddingTop: '1rem',
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '9px',
                        color: '#666',
                        display: 'block',
                      }}
                    >
                      TRIANGLES
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: '#ffffff',
                        fontWeight: 500,
                      }}
                    >
                      {project.triangles}
                    </span>
                  </div>

                  <div style={{ textAlign: 'center' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '9px',
                        color: '#666',
                        display: 'block',
                      }}
                    >
                      SHADER PASS
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: '#00ffcc',
                        fontWeight: 500,
                      }}
                    >
                      {project.shader}
                    </span>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        color: '#ffffff',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                      }}
                    >
                      INSPECT →
                    </span>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          );
        })}
      </div>

      {/* Interactive Project Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

      <style>{`
        @media (max-width: 900px) {
          .portfolio-bento-card {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}

export default PortfolioSection;
