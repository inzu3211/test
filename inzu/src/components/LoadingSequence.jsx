import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useStore } from '../store/useStore';

export function LoadingSequence() {
  const containerRef = useRef(null);
  const silhouetteRef = useRef(null);
  const loadingProgress = useStore((state) => state.loadingProgress);
  const setLoadingProgress = useStore((state) => state.setLoadingProgress);
  const setHeroRevealed = useStore((state) => state.setHeroRevealed);
  const setIntroComplete = useStore((state) => state.setIntroComplete);
  
  const [message, setMessage] = useState('SYSTEM INITIALIZING');
  const [isReady, setIsReady] = useState(false);

  // Auto-progress simulation for smooth opening sequence
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 12 + 8;
      if (current >= 100) {
        current = 100;
        setLoadingProgress(100);
        clearInterval(interval);
      } else {
        setLoadingProgress(current);
      }
    }, 180);

    return () => clearInterval(interval);
  }, [setLoadingProgress]);

  // Handle stage messages and silhouette reveal
  useEffect(() => {
    if (loadingProgress >= 100) {
      setMessage('EXPERIENCE READY');
      setIsReady(true);

      // Fade in silhouette highlight
      if (silhouetteRef.current) {
        gsap.to(silhouetteRef.current, { opacity: 0.9, scale: 1.02, duration: 0.8 });
      }

      const tl = gsap.timeline({
        onComplete: () => {
          setHeroRevealed();
          setTimeout(() => {
            setIntroComplete();
          }, 300);
        },
      });

      tl.to(containerRef.current, {
        y: '-100%',
        duration: 1.3,
        ease: 'power3.inOut',
        delay: 0.6,
      });
    } else if (loadingProgress >= 80) {
      setMessage('SYNCHRONIZING LIGHT / 3D WORLD');
      if (silhouetteRef.current) {
        gsap.to(silhouetteRef.current, { opacity: 0.7, duration: 0.6 });
      }
    } else if (loadingProgress >= 60) {
      setMessage('CALIBRATING COUTURE MATERIAL');
      if (silhouetteRef.current) {
        gsap.to(silhouetteRef.current, { opacity: 0.45, duration: 0.6 });
      }
    } else if (loadingProgress >= 40) {
      setMessage('OBJECT DETECTED / LOADING GEOMETRY');
      if (silhouetteRef.current) {
        gsap.to(silhouetteRef.current, { opacity: 0.25, duration: 0.6 });
      }
    } else if (loadingProgress >= 20) {
      setMessage('INZU LAB / ACCESS GRANTED');
      if (silhouetteRef.current) {
        gsap.to(silhouetteRef.current, { opacity: 0.1, duration: 0.6 });
      }
    } else {
      setMessage('SYSTEM INITIALIZING');
    }
  }, [loadingProgress, setHeroRevealed, setIntroComplete]);

  const formattedProgress = Math.floor(loadingProgress).toString().padStart(3, '0') + '%';

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 'var(--z-loading, 50)',
        backgroundColor: '#030303',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'var(--font-mono)',
        color: isReady ? '#00ffcc' : '#e0e0e0',
        transition: 'color 0.4s ease',
        overflow: 'hidden',
        pointerEvents: isReady ? 'none' : 'auto',
      }}
    >
      {/* Emerging silhouette from darkness (Prompt 05) */}
      <div
        ref={silhouetteRef}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(280px, 35vw, 480px)',
          height: 'clamp(380px, 50vh, 680px)',
          opacity: 0,
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          filter: 'drop-shadow(0 0 25px rgba(255,255,255,0.15))',
        }}
      >
        <img
          src="/inzu-character.png"
          alt="Celestial Couture Silhouette"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 80%)',
          }}
        />
      </div>

      {/* Center status message */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          fontSize: '11px',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          padding: '0.6rem 1.4rem',
          border: isReady ? '1px solid #00ffcc' : '1px solid rgba(255,255,255,0.08)',
          backgroundColor: 'rgba(5, 5, 5, 0.75)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          transition: 'border-color 0.4s ease',
        }}
      >
        {message}
      </div>

      {/* Bottom telemetry */}
      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '2.5rem',
          fontSize: '11px',
          color: '#888',
          letterSpacing: '0.15em',
        }}
      >
        <span>CALIBRATION / </span>
        <span style={{ color: isReady ? '#00ffcc' : 'white' }}>{formattedProgress}</span>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          right: '2.5rem',
          fontSize: '11px',
          color: '#444',
          letterSpacing: '0.2em',
        }}
      >
        INZU ARCHITECTURE / 2026
      </div>

      {/* Progress track */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '2px',
          backgroundColor: '#0a0a0a',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${loadingProgress}%`,
            backgroundColor: isReady ? '#00ffcc' : '#ffffff',
            boxShadow: isReady ? '0 0 10px #00ffcc' : '0 0 8px rgba(255,255,255,0.3)',
            transition: 'width 0.2s ease, background-color 0.4s ease',
          }}
        />
      </div>
    </div>
  );
}
