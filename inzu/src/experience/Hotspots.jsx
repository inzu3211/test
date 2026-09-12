import React from 'react';
import { Html } from '@react-three/drei';
import { useStore } from '../store/useStore';
import soundFx from '../utils/audio';

const HOTSPOT_DATA = [
  {
    id: 'crown',
    position: [0, 2.5, 0],
    label: 'TOPOLOGY CROWN',
    spec: '8-AXIS CRYSTAL TORUS',
    detail: 'Procedural radial lattice with anisotropic clearcoat optics.',
  },
  {
    id: 'chest',
    position: [0, 1.8, 0.22],
    label: 'COUTURE SILHOUETTE',
    spec: 'HAUTE COUTURE 1890',
    detail: 'Physically based white silk weave with subtle Fresnel grazing angle.',
  },
  {
    id: 'drape',
    position: [0.45, 0.6, 0.35],
    label: 'FLOWING TRAIN',
    spec: 'CLOTH PHYSICS HARMONIC',
    detail: 'Gravity-weighted continuous silk spline with micro-harmonics.',
  },
];

export function Hotspots() {
  const activeHotspot = useStore((state) => state.activeHotspot);
  const setActiveHotspot = useStore((state) => state.setActiveHotspot);
  const mode = useStore((state) => state.characterMode);
  const inspectionActive = useStore((state) => state.inspectionActive);
  const setCursor = useStore((state) => state.setCursor);
  const resetCursor = useStore((state) => state.resetCursor);
  const soundEnabled = useStore((state) => state.soundEnabled);

  // Hotspots are only active in scan, data, or inspection states
  if (!inspectionActive && mode !== 'scan' && mode !== 'data') {
    return null;
  }

  return (
    <group>
      {HOTSPOT_DATA.map((spot) => {
        const isActive = activeHotspot === spot.id;
        return (
          <group key={spot.id} position={spot.position}>
            <Html center distanceFactor={8} zIndexRange={[100, 0]}>
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  pointerEvents: 'auto',
                }}
              >
                {/* Pulsing Beacon Dot */}
                <button
                  type="button"
                  onClick={() => {
                    if (isActive) {
                      setActiveHotspot(null);
                    } else {
                      setActiveHotspot(spot.id);
                    }
                  }}
                  onMouseEnter={() => {
                    if (soundEnabled) soundFx.playHover(0.03);
                    setCursor('inspect', spot.label);
                  }}
                  onMouseLeave={resetCursor}
                  className="hotspot-beacon"
                  aria-label={`Inspect ${spot.label}`}
                  style={{
                    backgroundColor: isActive ? '#00ffcc' : 'rgba(0, 255, 204, 0.35)',
                    transform: isActive ? 'scale(1.3)' : 'scale(1)',
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    border: '2px solid #00ffcc',
                    boxShadow: '0 0 10px #00ffcc',
                    cursor: 'none',
                  }}
                />

                {/* Annotation Card */}
                {isActive && (
                  <div
                    style={{
                      position: 'absolute',
                      left: '26px',
                      top: '-14px',
                      width: '210px',
                      padding: '0.75rem 0.9rem',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(5, 5, 10, 0.9)',
                      border: '1px solid rgba(0, 255, 204, 0.4)',
                      backdropFilter: 'blur(20px)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 255, 204, 0.15)',
                      whiteSpace: 'normal',
                      zIndex: 10,
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: '#00ffcc', fontWeight: 600 }}>
                        {spot.label}
                      </span>
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveHotspot(null);
                        }}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '9px',
                          color: '#888',
                          cursor: 'pointer',
                          padding: '0 2px',
                        }}
                      >
                        ✕
                      </span>
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', color: '#94a3b8', marginBottom: '5px' }}>
                      {spot.spec}
                    </div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', lineHeight: 1.4, color: '#f1f5f9', margin: 0 }}>
                      {spot.detail}
                    </p>
                  </div>
                )}
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

export default Hotspots;
