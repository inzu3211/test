import React from 'react';

/**
 * RetroGrid — Magic UI inspired 3D perspective cyber grid background
 * Adds an infinite vanishing horizon wireframe floor.
 */
export function RetroGrid({ className = '', style = {}, angle = 65 }) {
  return (
    <div className={`retro-grid ${className}`} style={style} aria-hidden="true">
      {/* 3D perspective plane */}
      <div
        className="retro-grid-plane"
        style={{
          transform: `rotateX(${angle}deg)`,
        }}
      />
      {/* Radial fade mask to dissolve into void */}
      <div className="retro-grid-mask" />
    </div>
  );
}

export default RetroGrid;
