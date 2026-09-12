import React from 'react';

/**
 * LampHeader — Aceternity UI inspired volumetric lighting cone
 * Projects a radiant conical neon light beam behind headers.
 */
export function LampHeader({
  children,
  className = '',
  style = {},
  glowColor = '#00ffcc',
}) {
  return (
    <div className={`lamp-container ${className}`} style={style}>
      {/* Radiant Glow Cone */}
      <div
        className="lamp-glow"
        style={{
          background: `conic-gradient(from 180deg at 50% 0%, ${glowColor} 0deg, #8a2be2 180deg, #00f2fe 360deg)`,
        }}
      />
      {/* Sharp Laser Horizontal Emitter */}
      <div
        className="lamp-line"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${glowColor} 50%, transparent 100%)`,
          boxShadow: `0 0 24px ${glowColor}, 0 0 48px ${glowColor}`,
        }}
      />
      {/* Foreground Content */}
      <div style={{ position: 'relative', zIndex: 1, marginTop: '2.5rem', textAlign: 'center' }}>
        {children}
      </div>
    </div>
  );
}

export default LampHeader;
