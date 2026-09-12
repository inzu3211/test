import React from 'react';
import { MagneticButton } from '../ui/MagneticButton';
import { TechnicalLabel, RevealText } from '../Typography';
import { Mail } from 'lucide-react';
import useStore from '../../store/useStore';

export function Footer() {
  const setCursor = useStore((state) => state.setCursor);
  const resetCursor = useStore((state) => state.resetCursor);

  return (
    <footer
      id="contact"
      style={{
        position: 'relative',
        zIndex: 10,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '6rem 3rem 3rem 3rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        backgroundColor: 'rgba(2, 2, 5, 0.92)',
        backdropFilter: 'blur(20px)',
      }}
    >
      {/* Top Telemetry */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '1.5rem', fontFamily: 'var(--font-mono, monospace)', fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ height: '8px', width: '8px', borderRadius: '50%', backgroundColor: '#00ffcc', boxShadow: '0 0 8px #00ffcc' }} />
          <span style={{ color: '#00ffcc' }}>TERMINAL ACTIVE</span>
        </div>
        <span>INZU SENSEI ARCHITECTURE</span>
        <span>STATUS: OPEN FOR SELECT COMMISSIONS</span>
      </div>

      {/* Center Giant Action CTA */}
      <div style={{ margin: 'auto 0', padding: '4rem 0', maxWidth: '880px' }}>
        <div style={{ marginBottom: '1rem' }}>
          <TechnicalLabel color="#00ffcc">[ INITIATE SPATIAL PROJECT ]</TechnicalLabel>
        </div>
        <RevealText>
          <h2
            style={{
              fontFamily: 'var(--font-display, "Space Grotesk")',
              fontSize: 'clamp(2.5rem, 6.5vw, 6.5rem)',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              color: '#ffffff',
              margin: '0.5rem 0 1rem 0',
              lineHeight: 0.95,
            }}
          >
            HAVE SOMETHING WORTH EXPLORING?
          </h2>
        </RevealText>
        <p
          style={{
            fontFamily: 'var(--font-display, "Space Grotesk")',
            fontSize: 'clamp(1.5rem, 3.2vw, 3rem)',
            color: 'rgba(255, 255, 255, 0.5)',
            fontWeight: 500,
            textTransform: 'uppercase',
            marginBottom: '3rem',
          }}
        >
          LET’S BUILD IT IN 3D.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.5rem' }}>
          <MagneticButton
            as="a"
            href="mailto:inzusensei2@gmail.com"
            cursorLabel="EMAIL"
            style={{
              borderColor: 'rgba(0, 255, 204, 0.4)',
              backgroundColor: 'rgba(0, 255, 204, 0.1)',
              color: '#00ffcc',
              fontSize: '13px',
              padding: '1rem 2.5rem',
            }}
          >
            <Mail size={16} />
            <span>START A PROJECT</span>
          </MagneticButton>

          <a
            href="mailto:inzusensei2@gmail.com"
            onMouseEnter={() => setCursor('explore', 'COPY')}
            onMouseLeave={resetCursor}
            style={{
              fontFamily: 'var(--font-mono, monospace)',
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.75)',
              textDecoration: 'underline',
              textUnderlineOffset: '8px',
              cursor: 'none',
              transition: 'color 0.2s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = '#00ffcc')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
          >
            inzusensei2@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom Footer Info & Copyright */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '2rem', fontFamily: 'var(--font-mono, monospace)', fontSize: '11px', color: 'rgba(255, 255, 255, 0.4)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontFamily: 'var(--font-display, "Space Grotesk")', fontSize: '1.25rem', fontWeight: 700, letterSpacing: '0.12em', color: '#ffffff' }}>
            INZU
          </span>
          <span>//</span>
          <span>EXPERIENCE COMPLETE</span>
        </div>

        <div style={{ textAlign: 'right' }}>
          <div>DESIGNED FOR SOTD // ZERO RUNTIME LATENCY</div>
          <div style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.3)', marginTop: '2px' }}>
            SESSION CLOSED // ALL RIGHTS RESERVED © 2026
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
