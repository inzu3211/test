import React, { useEffect, useState } from 'react';
import useStore from '../../store/useStore';
import soundFx from '../../utils/audio';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const soundEnabled = useStore((state) => state.soundEnabled);
  const toggleSound = useStore((state) => state.toggleSound);
  const setCursor = useStore((state) => state.setCursor);
  const resetCursor = useStore((state) => state.resetCursor);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'EXPERIENCE', id: 'hero' },
    { label: 'DISSECTION', id: 'surface-structure' },
    { label: 'SELECTED WORKS', id: 'portfolio' },
    { label: 'CAPABILITIES', id: 'features' },
    { label: 'STUDIO', id: 'about' },
    { label: 'CONTACT', id: 'contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.25rem 2.5rem',
        backgroundColor: isScrolled ? 'rgba(3, 3, 6, 0.75)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(24px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Brand Anchor */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onMouseEnter={() => setCursor('enter', 'HOME')}
        onMouseLeave={resetCursor}
        style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'none' }}
      >
        <div style={{ position: 'relative', display: 'flex', height: '10px', width: '10px', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ position: 'absolute', height: '100%', width: '100%', borderRadius: '50%', backgroundColor: '#00ffcc', opacity: 0.75, animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite' }} />
          <span style={{ position: 'relative', height: '8px', width: '8px', borderRadius: '50%', backgroundColor: '#00ffcc' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
          <span style={{ fontFamily: 'var(--font-display, "Space Grotesk")', fontSize: '1.25rem', fontWeight: 700, letterSpacing: '0.15em', color: '#ffffff' }}>
            INZU
          </span>
          <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '9px', letterSpacing: '0.15em', color: '#00ffcc', border: '1px solid rgba(0, 255, 204, 0.3)', backgroundColor: 'rgba(0, 255, 204, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>
            LAB 2026
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem',
          backgroundColor: 'rgba(10, 10, 16, 0.65)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '9999px',
          padding: '4px 10px',
          backdropFilter: 'blur(20px)',
        }}
      >
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => {
              if (soundEnabled) soundFx.playClick(0.06);
              scrollTo(link.id);
            }}
            onMouseEnter={() => {
              if (soundEnabled) soundFx.playHover(0.02);
              setCursor('navigate', link.label);
            }}
            onMouseLeave={resetCursor}
            style={{
              padding: '6px 14px',
              borderRadius: '9999px',
              fontFamily: 'var(--font-mono, monospace)',
              fontSize: '10px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(242, 240, 234, 0.65)',
              transition: 'all 0.2s ease',
              cursor: 'none',
              background: 'transparent',
              border: 'none',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'rgba(242, 240, 234, 0.65)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {link.label}
          </button>
        ))}
      </nav>

      {/* Right Controls: Audio Visualizer Toggle & CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <button
          onClick={toggleSound}
          onMouseEnter={() => setCursor('enter', soundEnabled ? 'MUTE' : 'SOUND')}
          onMouseLeave={resetCursor}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: '6px 14px',
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: '10px',
            letterSpacing: '0.15em',
            color: 'rgba(242, 240, 234, 0.7)',
            backdropFilter: 'blur(10px)',
            cursor: 'none',
            transition: 'all 0.2s ease',
          }}
        >
          <span>{soundEnabled ? 'SFX ON' : 'SFX OFF'}</span>
          <span style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '12px' }}>
            <span style={{ width: '2px', borderRadius: '9999px', backgroundColor: '#00ffcc', height: soundEnabled ? '12px' : '4px', transition: 'height 0.2s' }} />
            <span style={{ width: '2px', borderRadius: '9999px', backgroundColor: '#00ffcc', height: soundEnabled ? '8px' : '4px', transition: 'height 0.2s' }} />
            <span style={{ width: '2px', borderRadius: '9999px', backgroundColor: '#00ffcc', height: soundEnabled ? '12px' : '4px', transition: 'height 0.2s' }} />
          </span>
        </button>

        <button
          onClick={() => scrollTo('contact')}
          onMouseEnter={() => setCursor('enter', 'INITIATE')}
          onMouseLeave={resetCursor}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '9999px',
            border: '1px solid rgba(0, 255, 204, 0.5)',
            backgroundColor: 'rgba(0, 255, 204, 0.1)',
            padding: '6px 18px',
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: '10px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#00ffcc',
            backdropFilter: 'blur(10px)',
            cursor: 'none',
            transition: 'all 0.25s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#00ffcc';
            e.currentTarget.style.color = '#000000';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 204, 0.5)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0, 255, 204, 0.1)';
            e.currentTarget.style.color = '#00ffcc';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          START PROJECT
        </button>
      </div>
    </header>
  );
}

export default Navbar;
