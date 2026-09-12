import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useStore } from '../store/useStore';

export function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const containerRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);
  const cursorVariant = useStore((state) => state.cursorVariant);
  const cursorLabel = useStore((state) => state.cursorLabel);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches || 'ontouchstart' in window) {
      setIsTouch(true);
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const xTo = gsap.quickTo(dot, 'x', { duration: 0.06, ease: 'none' });
    const yTo = gsap.quickTo(dot, 'y', { duration: 0.06, ease: 'none' });
    const ringXTo = gsap.quickTo(ring, 'x', { duration: 0.3, ease: 'power3.out' });
    const ringYTo = gsap.quickTo(ring, 'y', { duration: 0.3, ease: 'power3.out' });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      ringXTo(e.clientX);
      ringYTo(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (cursorVariant === 'wait') {
      gsap.to(dotRef.current, { scale: 1.5, opacity: 0.5, repeat: -1, yoyo: true, duration: 0.5 });
    } else {
      gsap.killTweensOf(dotRef.current);
      gsap.to(dotRef.current, { scale: 1, opacity: 1, duration: 0.3 });
    }
  }, [cursorVariant]);

  if (isTouch) return null;

  const ringStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: '50%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.3s var(--ease-out), height 0.3s var(--ease-out), border-color 0.3s var(--ease-out), background-color 0.3s var(--ease-out)',
  };

  const getVariantStyles = () => {
    switch (cursorVariant) {
      case 'inspect':
        return { width: '80px', height: '80px', border: '1px solid rgba(255,255,255,0.8)' };
      case 'explore':
        return { width: '70px', height: '70px', border: '1px solid rgba(255,255,255,0.3)', backgroundColor: 'rgba(255,255,255,0.05)' };
      case 'enter':
        return { width: '60px', height: '60px', border: '1px solid rgba(255,255,255,0.5)', backgroundColor: 'rgba(255,255,255,0.1)' };
      case 'navigate':
        return { width: '50px', height: '50px', border: '1px solid rgba(255,255,255,0.3)' };
      case 'scanning':
        return { width: '80px', height: '80px', border: '1px solid #00ffcc' };
      default:
        return { width: '40px', height: '40px', border: '1px solid rgba(255,255,255,0.3)' };
    }
  };

  return (
    <div ref={containerRef} style={{ position: 'fixed', inset: 0, zIndex: 'var(--z-cursor)', pointerEvents: 'none', overflow: 'hidden' }}>
      <div
        ref={ringRef}
        style={{ ...ringStyles, ...getVariantStyles() }}
      >
        {cursorVariant !== 'default' && cursorVariant !== 'wait' && (
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: cursorVariant === 'scanning' ? '#00ffcc' : 'white' }}>
            {cursorLabel || (cursorVariant === 'inspect' ? 'INSPECT' : cursorVariant === 'explore' ? 'EXPLORE' : cursorVariant === 'enter' ? 'ENTER' : cursorVariant === 'scanning' ? 'SCANNING' : '')}
          </span>
        )}
      </div>
      <div
        ref={dotRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          backgroundColor: 'white',
          borderRadius: '50%',
          mixBlendMode: 'difference',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
