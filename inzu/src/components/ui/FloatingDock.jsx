import React, { useEffect, useState } from 'react';
import { useStore } from '../../store/useStore';
import soundFx from '../../utils/audio';

/**
 * FloatingDock
 * Adapted from Aceternity UI & Origin UI
 * Floating dynamic island navigation bar with glassmorphic blur, active indicators, and telemetry.
 */
export function FloatingDock() {
  const setCursor = useStore((state) => state.setCursor);
  const resetCursor = useStore((state) => state.resetCursor);
  const heroRevealed = useStore((state) => state.heroRevealed);
  const soundEnabled = useStore((state) => state.soundEnabled);
  const toggleSound = useStore((state) => state.toggleSound);

  const [activeSection, setActiveSection] = useState('hero');
  const [timeString, setTimeString] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  // Digital clock update
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Track active section and scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      const sections = ['work', 'deconstruction', 'surface-structure', 'services', 'lab', 'experience', 'about', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(id);
            break;
          }
        }
      }
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

  const navItems = [
    { label: 'WORK', id: 'work' },
    { label: '3D ARTIFACTS', id: 'deconstruction' },
    { label: 'DISSECTION', id: 'surface-structure' },
    { label: 'SERVICES', id: 'services' },
    { label: 'LAB', id: 'lab' },
    { label: 'PROCESS', id: 'experience' },
    { label: 'ABOUT', id: 'about' },
    { label: 'CONTACT', id: 'contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: '1.25rem',
        left: 0,
        right: 0,
        zIndex: 'var(--z-navigation)',
        display: 'flex',
        justifyContent: 'center',
        padding: '0 1.25rem',
        pointerEvents: 'none',
        opacity: heroRevealed ? 1 : 0,
        transform: heroRevealed ? 'translateY(0)' : 'translateY(-20px)',
        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div
        className="glass-panel"
        style={{
          pointerEvents: 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          padding: '0.6rem 1.4rem',
          borderRadius: '9999px',
          backgroundColor: isScrolled ? 'rgba(5, 5, 8, 0.82)' : 'rgba(10, 10, 15, 0.65)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: isScrolled
            ? '0 15px 35px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 255, 204, 0.08)'
            : '0 10px 30px rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Brand Beacon */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          onMouseEnter={() => setCursor('enter', 'HOME')}
          onMouseLeave={resetCursor}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            cursor: 'none',
            paddingRight: '0.5rem',
            borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div className="status-beacon" />
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.18em',
              color: '#ffffff',
            }}
          >
            INZU
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              color: '#00ffcc',
              letterSpacing: '0.1em',
              padding: '1px 5px',
              borderRadius: '4px',
              background: 'rgba(0, 255, 204, 0.12)',
              border: '1px solid rgba(0, 255, 204, 0.25)',
            }}
          >
            3D LAB
          </span>
        </div>

        {/* Section Navigation Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
          }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  if (soundEnabled) soundFx.playClick(0.06);
                  scrollTo(item.id);
                }}
                onMouseEnter={() => {
                  if (soundEnabled) soundFx.playHover(0.02);
                  setCursor('navigate', item.label);
                }}
                onMouseLeave={resetCursor}
                style={{
                  position: 'relative',
                  padding: '0.4rem 0.85rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.55)',
                  backgroundColor: isActive ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                  border: isActive ? '1px solid rgba(255, 255, 255, 0.18)' : '1px solid transparent',
                  borderRadius: '9999px',
                  transition: 'all 0.25s ease',
                  cursor: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '12px',
                      height: '2px',
                      borderRadius: '2px',
                      backgroundColor: '#00ffcc',
                      boxShadow: '0 0 6px #00ffcc',
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Real-time Telemetry & Sound Pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
            paddingLeft: '0.5rem',
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: 'var(--color-white-dim)',
              letterSpacing: '0.1em',
              display: 'none',
            }}
            className="desktop-telemetry"
          >
            {timeString}
          </span>

          {/* Sound Toggle Pill & Waveform Visualizer */}
          <button
            onClick={toggleSound}
            onMouseEnter={() => {
              if (soundEnabled) soundFx.playHover(0.02);
              setCursor('enter', soundEnabled ? 'MUTE SFX' : 'ENABLE SFX');
            }}
            onMouseLeave={resetCursor}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.35rem 0.75rem',
              borderRadius: '9999px',
              background: soundEnabled ? 'rgba(0, 255, 204, 0.15)' : 'rgba(255, 255, 255, 0.04)',
              border: soundEnabled ? '1px solid #00ffcc' : '1px solid rgba(255, 255, 255, 0.1)',
              color: soundEnabled ? '#00ffcc' : 'var(--color-white-dim)',
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              letterSpacing: '0.12em',
              cursor: 'none',
              transition: 'all 0.2s ease',
            }}
          >
            <span>{soundEnabled ? 'AUDIO ON' : 'AUDIO OFF'}</span>
            <span className={`audio-equalizer ${soundEnabled ? 'active' : ''}`}>
              <span className="audio-equalizer-bar" style={{ height: soundEnabled ? '6px' : '3px' }} />
              <span className="audio-equalizer-bar" style={{ height: soundEnabled ? '12px' : '5px' }} />
              <span className="audio-equalizer-bar" style={{ height: soundEnabled ? '8px' : '3px' }} />
              <span className="audio-equalizer-bar" style={{ height: soundEnabled ? '10px' : '4px' }} />
            </span>
          </button>
        </div>
      </div>
      <style>{`
        @media (min-width: 900px) {
          .desktop-telemetry {
            display: inline-block !important;
          }
        }
        @media (max-width: 820px) {
          nav {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}

export default FloatingDock;
