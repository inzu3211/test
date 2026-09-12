import React from 'react';

/**
 * Marquee
 * Adapted from Magic UI
 * Smooth infinite ticker with edge fade masks and hover pause.
 */
export function Marquee({
  children,
  speed = 35,
  reverse = false,
  pauseOnHover = true,
  className = '',
  style = {},
}) {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        ...style,
      }}
    >
      <div
        style={{
          display: 'flex',
          width: 'max-content',
          animation: `marquee ${speed}s linear infinite ${reverse ? 'reverse' : 'normal'}`,
          animationPlayState: 'running',
        }}
        onMouseEnter={(e) => {
          if (pauseOnHover) e.currentTarget.style.animationPlayState = 'paused';
        }}
        onMouseLeave={(e) => {
          if (pauseOnHover) e.currentTarget.style.animationPlayState = 'running';
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '3rem', paddingRight: '3rem' }}>
          {children}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '3rem', paddingRight: '3rem' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Marquee;
