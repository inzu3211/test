import React, { useEffect } from 'react';
import { useStore } from '../../store/useStore';
import { ShimmerButton } from './ShimmerButton';

/**
 * ProjectModal / Inspection HUD Drawer
 * Adapted from shadcn/ui dialog and Cult UI drawer patterns.
 * High-tech inspection modal with telemetry stats, shaders, and interactive triggers.
 */
export function ProjectModal({ project, isOpen, onClose }) {
  const setCursor = useStore((state) => state.setCursor);
  const resetCursor = useStore((state) => state.resetCursor);
  const setCharacterMode = useStore((state) => state.setCharacterMode);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 'var(--z-modal)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        backgroundColor: 'rgba(3, 3, 5, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        animation: 'fade-in 0.3s ease',
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '720px',
          backgroundColor: 'rgba(10, 10, 16, 0.95)',
          border: '1px solid rgba(0, 255, 204, 0.35)',
          borderRadius: '20px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(0, 255, 204, 0.15)',
          padding: '2.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: '#00ffcc',
                padding: '3px 8px',
                borderRadius: '4px',
                background: 'rgba(0, 255, 204, 0.1)',
                border: '1px solid rgba(0, 255, 204, 0.3)',
              }}
            >
              {project.id || 'INSP/01'}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-white-dim)', letterSpacing: '0.1em' }}>
              OBJECT TELEMETRY // REALTIME
            </span>
          </div>

          <button
            onClick={onClose}
            onMouseEnter={() => setCursor('enter', 'CLOSE')}
            onMouseLeave={resetCursor}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'none',
              transition: 'background 0.2s ease',
            }}
          >
            ✕
          </button>
        </div>

        {/* Title & Category */}
        <div style={{ marginBottom: '1.5rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#888894', letterSpacing: '0.15em' }}>
            {project.category || 'DIGITAL ARTIFACT'}
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 700,
              margin: '0.3rem 0 1rem 0',
              color: '#ffffff',
              letterSpacing: '-0.02em',
            }}
          >
            {project.title}
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              lineHeight: 1.6,
              color: 'var(--color-white-dim)',
              margin: 0,
            }}
          >
            {project.description ||
              'High-fidelity interactive 3D inspection twin engineered with physical material response, raymarched lighting, and optimized geometry.'}
          </p>
        </div>

        {/* Technical Specification Matrix */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            margin: '2rem 0',
            padding: '1.25rem',
            borderRadius: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#666677' }}>TRIANGLES</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: '#ffffff', fontWeight: 600, marginTop: '2px' }}>
              {project.triangles || '142,560'}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#666677' }}>MATERIAL SHADER</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: '#00ffcc', fontWeight: 600, marginTop: '2px' }}>
              {project.shader || 'PBR ANISOTROPIC'}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#666677' }}>PIPELINE</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: '#ffffff', fontWeight: 600, marginTop: '2px' }}>
              {project.tech || 'WEBGL 2.0 / R3F'}
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <ShimmerButton
            variant="cyan"
            cursorLabel="INSPECT"
            onClick={() => {
              setCharacterMode('scan');
              onClose();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            LAUNCH ORBIT INSPECTION
          </ShimmerButton>

          <ShimmerButton
            variant="outline"
            cursorLabel="TOGGLE"
            onClick={() => {
              setCharacterMode('mesh');
              onClose();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            VIEW TOPOLOGY WIREFRAME
          </ShimmerButton>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

export default ProjectModal;
