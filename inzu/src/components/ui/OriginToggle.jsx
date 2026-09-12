import React from 'react';
import { useStore } from '../../store/useStore';
import soundFx from '../../utils/audio';

/**
 * OriginToggle — Origin UI / Radix inspired tactical segmented control
 * Seamless pill slider with glowing active state, sound feedback, and cursor integration.
 */
export function OriginToggle({
  options = [],
  value,
  onChange,
  size = 'md', // sm | md | lg
  className = '',
  style = {},
}) {
  const setCursor = useStore((state) => state.setCursor);
  const resetCursor = useStore((state) => state.resetCursor);
  const soundEnabled = useStore((state) => state.soundEnabled);

  const handleSelect = (val, label) => {
    if (val !== value) {
      if (soundEnabled) soundFx.playSwitch(0.06);
      onChange?.(val);
    }
  };

  const padY = size === 'sm' ? '0.35rem' : size === 'lg' ? '0.65rem' : '0.45rem';
  const padX = size === 'sm' ? '0.75rem' : size === 'lg' ? '1.35rem' : '1rem';
  const fontSize = size === 'sm' ? '9px' : size === 'lg' ? '11px' : '10px';

  return (
    <div
      className={`origin-toggle-container ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '3px',
        borderRadius: '9999px',
        backgroundColor: 'rgba(10, 10, 16, 0.75)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.05)',
        position: 'relative',
        userSelect: 'none',
        ...style,
      }}
    >
      {options.map((opt) => {
        const isSelected = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => handleSelect(opt.value, opt.label)}
            onMouseEnter={() => {
              if (soundEnabled) soundFx.playHover(0.02);
              setCursor('navigate', opt.label);
            }}
            onMouseLeave={resetCursor}
            style={{
              position: 'relative',
              padding: `${padY} ${padX}`,
              borderRadius: '9999px',
              fontFamily: 'var(--font-mono)',
              fontSize: fontSize,
              fontWeight: isSelected ? 600 : 400,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: isSelected ? '#ffffff' : 'var(--color-white-dim)',
              backgroundColor: isSelected ? 'rgba(0, 255, 204, 0.15)' : 'transparent',
              border: isSelected ? '1px solid rgba(0, 255, 204, 0.4)' : '1px solid transparent',
              boxShadow: isSelected ? '0 0 16px rgba(0, 255, 204, 0.25)' : 'none',
              transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              whiteSpace: 'nowrap',
            }}
          >
            {opt.icon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{opt.icon}</span>}
            <span>{opt.label}</span>
            {isSelected && (
              <span
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: '#00ffcc',
                  boxShadow: '0 0 6px #00ffcc',
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

export default OriginToggle;
