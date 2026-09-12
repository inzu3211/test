import React, { useRef, useState } from 'react';
import { useStore } from '../../store/useStore';
import soundFx from '../../utils/audio';

/**
 * SpotlightCard
 * Adapted from Aceternity UI, 21st.dev & React Bits
 * High-performance radial spotlight card with 3D perspective tilt, glare sheen, and sound feedback.
 */
export function SpotlightCard({
  children,
  className = '',
  style = {},
  spotlightColor = 'rgba(0, 255, 204, 0.12)',
  borderColor = 'rgba(0, 255, 204, 0.4)',
  radius = 360,
  enableTilt = true,
  onClick,
  onMouseEnter,
  onMouseLeave,
  ...props
}) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const soundEnabled = useStore((state) => state.soundEnabled);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });

    if (enableTilt) {
      // Calculate rotation between -6 and +6 degrees
      const rotX = ((y / rect.height) - 0.5) * -8;
      const rotY = ((x / rect.width) - 0.5) * 8;
      setTilt({ x: rotX, y: rotY });
    }
  };

  const handleFocus = () => setOpacity(1);
  const handleBlur = () => {
    setOpacity(0);
    setTilt({ x: 0, y: 0 });
  };

  const handleCardMouseEnter = (e) => {
    setOpacity(1);
    if (soundEnabled) soundFx.playHover(0.025);
    if (onMouseEnter) onMouseEnter(e);
  };

  const handleCardMouseLeave = (e) => {
    setOpacity(0);
    setTilt({ x: 0, y: 0 });
    if (onMouseLeave) onMouseLeave(e);
  };

  const handleCardClick = (e) => {
    if (soundEnabled) soundFx.playClick(0.08);
    if (onClick) onClick(e);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={handleCardClick}
      className={`glass-panel card-perspective-wrap ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'rgba(8, 8, 14, 0.75)',
        border: '1px solid rgba(255, 255, 255, 0.07)',
        borderRadius: '16px',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        transform: enableTilt && opacity > 0
          ? `perspective(1000px) rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg) translateZ(6px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
        transition: opacity > 0
          ? 'transform 0.12s ease-out, border-color 0.25s ease'
          : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease',
        willChange: 'transform',
        ...style,
      }}
      {...props}
    >
      {/* Background dynamic radial spotlight */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity,
          transition: 'opacity 0.35s ease',
          background: `radial-gradient(${radius}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 75%)`,
          zIndex: 0,
        }}
      />

      {/* Border dynamic highlight spotlight */}
      <div
        style={{
          position: 'absolute',
          inset: -1,
          borderRadius: 'inherit',
          pointerEvents: 'none',
          opacity,
          transition: 'opacity 0.35s ease',
          border: '1px solid transparent',
          background: `radial-gradient(${radius * 0.7}px circle at ${position.x}px ${position.y}px, ${borderColor}, transparent 80%) border-box`,
          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
          zIndex: 1,
        }}
      />

      {/* Subtle Glare Sheen Reflection */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: opacity * 0.2,
          background: `radial-gradient(ellipse at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.4) 0%, transparent 60%)`,
          zIndex: 1,
          transition: 'opacity 0.2s ease',
        }}
      />

      {/* Card Content */}
      <div style={{ position: 'relative', zIndex: 2, height: '100%' }}>
        {children}
      </div>
    </div>
  );
}

export default SpotlightCard;

