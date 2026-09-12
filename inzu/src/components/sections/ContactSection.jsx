import React, { useState } from 'react';
import { SpotlightCard } from '../ui/SpotlightCard';
import { ShimmerButton } from '../ui/ShimmerButton';
import { BorderBeam } from '../ui/BorderBeam';
import { DecryptedText } from '../ui/DecryptedText';
import { useStore } from '../../store/useStore';
import soundFx from '../../utils/audio';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const setCursor = useStore((state) => state.setCursor);
  const resetCursor = useStore((state) => state.resetCursor);
  const soundEnabled = useStore((state) => state.soundEnabled);

  const email = 'inzusensei2@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    if (soundEnabled) soundFx.playChime(0.12);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#030305',
        position: 'relative',
        padding: '10rem 6% 6rem 6%',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Background ambient glow */}
      <div className="ambient-glow-cyan" style={{ top: '25%', left: '50%', transform: 'translateX(-50%)' }} />

      {/* Header Pill */}
      <div className="shimmer-badge" style={{ marginBottom: '2rem' }}>
        <span className="status-beacon" />
        <DecryptedText text="INITIATE CONTACT // Q1-Q2 COMMISSIONS" speed={30} />
      </div>

      <div style={{ textAlign: 'center', maxWidth: '860px', marginBottom: '3.5rem' }}>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 6.5vw, 6.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            margin: '0 0 1rem 0',
            lineHeight: 1.05,
          }}
          className="text-gradient-chrome"
        >
          HAVE SOMETHING WORTH EXPLORING?
        </h2>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            margin: '0 0 1.5rem 0',
          }}
          className="text-gradient-cyan"
        >
          LET'S BUILD IT IN REALTIME 3D.
        </div>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            lineHeight: 1.7,
            color: 'var(--color-white-dim)',
            maxWidth: '540px',
            margin: '0 auto',
          }}
        >
          Available for bespoke 3D web applications, luxury product configurators, digital brand exhibitions, and custom WebGL shaders.
        </p>
      </div>

      {/* Center Interactive Contact Terminal Card */}
      <SpotlightCard
        style={{
          width: '100%',
          maxWidth: '680px',
          padding: '3rem 2.5rem',
          backgroundColor: 'rgba(8, 8, 14, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '24px',
          boxShadow: '0 30px 70px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 255, 204, 0.12)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
          marginBottom: '5rem',
          position: 'relative',
        }}
      >
        <BorderBeam colorFrom="#00ffcc" colorTo="#7928ca" duration={10} />

        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#00ffcc', letterSpacing: '0.15em' }}>
          DIRECT TRANSMISSION CHANNEL
        </span>

        {/* Copy Email Button Pill */}
        <div
          onClick={handleCopy}
          onMouseEnter={() => setCursor('enter', 'COPY EMAIL')}
          onMouseLeave={resetCursor}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem 2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: copied ? '1px solid #00ffcc' : '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '9999px',
            cursor: 'none',
            transition: 'all 0.3s ease',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(1rem, 1.8vw, 1.4rem)',
              color: copied ? '#00ffcc' : '#ffffff',
              letterSpacing: '0.05em',
            }}
          >
            {email}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              padding: '3px 8px',
              borderRadius: '9999px',
              backgroundColor: copied ? '#00ffcc' : 'rgba(255, 255, 255, 0.1)',
              color: copied ? '#030303' : '#ffffff',
              fontWeight: 600,
              transition: 'all 0.2s ease',
            }}
          >
            {copied ? 'COPIED!' : 'CLICK TO COPY'}
          </span>
        </div>

        {/* Action Button */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href={`mailto:${email}?subject=Project%20Inquiry%20—%20INZU%203D%20Studio`} style={{ textDecoration: 'none' }}>
            <ShimmerButton variant="primary" cursorLabel="MAIL">
              LAUNCH EMAIL CLIENT ↗
            </ShimmerButton>
          </a>

          <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <ShimmerButton variant="outline" cursorLabel="EXTERNAL">
              GITHUB ARTIFACTS
            </ShimmerButton>
          </a>
        </div>
      </SpotlightCard>

      {/* Footer System Telemetry */}
      <div
        style={{
          width: '100%',
          maxWidth: '1080px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--color-white-ghost)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: '#ffffff', fontWeight: 700, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }}>
            INZU
          </span>
          <span>// ALL ASSETS CRAFTED IN REALTIME 3D</span>
        </div>

        <div style={{ display: 'flex', gap: '2rem' }}>
          <span>LATENCY: 14MS</span>
          <span>DPR: [1, 2]</span>
          <span style={{ color: '#00ffcc' }}>ONLINE // 2026</span>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
