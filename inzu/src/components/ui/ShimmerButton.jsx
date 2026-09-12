import React from 'react';
import { useStore } from '../../store/useStore';

/**
 * ShimmerButton
 * Adapted from Magic UI & 21st.dev
 * Luxury cyber-minimalist button with light shimmer sweep, border glow, and tactile hover.
 */
export function ShimmerButton({
  children,
  onClick,
  variant = 'primary', // primary | outline | ghost
  shimmerColor = 'rgba(0, 255, 204, 0.4)',
  shimmerDuration = '3s',
  borderRadius = '9999px',
  cursorLabel = 'SELECT',
  className = '',
  style = {},
  ...props
}) {
  const setCursor = useStore((state) => state.setCursor);
  const resetCursor = useStore((state) => state.resetCursor);

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(220,225,235,0.85) 100%)',
          color: '#050505',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          boxShadow: '0 0 20px rgba(0, 255, 204, 0.25), inset 0 1px 0 rgba(255,255,255,1)',
        };
      case 'cyan':
        return {
          background: 'linear-gradient(135deg, #00ffcc 0%, #00d2aa 100%)',
          color: '#030303',
          border: '1px solid #00ffcc',
          boxShadow: '0 0 25px rgba(0, 255, 204, 0.4), inset 0 1px 0 rgba(255,255,255,0.6)',
        };
      case 'outline':
        return {
          background: 'rgba(255, 255, 255, 0.03)',
          color: '#ffffff',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
        };
      case 'ghost':
        return {
          background: 'transparent',
          color: 'var(--color-white-dim)',
          border: '1px solid transparent',
        };
      default:
        return {};
    }
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setCursor('enter', cursorLabel)}
      onMouseLeave={resetCursor}
      className={`shimmer-button ${className}`}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.6rem',
        padding: '0.75rem 1.75rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        borderRadius,
        overflow: 'hidden',
        cursor: 'none',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        ...getVariantStyles(),
        ...style,
      }}
      {...props}
    >
      {/* Moving Shimmer Reflection */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `linear-gradient(90deg, transparent 0%, ${shimmerColor} 50%, transparent 100%)`,
          animation: `shimmer ${shimmerDuration} infinite linear`,
          pointerEvents: 'none',
        }}
      />

      {/* Button Content */}
      <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        {children}
      </span>
    </button>
  );
}

export default ShimmerButton;
