import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function RevealText({ children, delay = 0, duration = 0.8, as: Component = 'div', className = '', style = {} }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(textRef.current, {
            y: 0,
            duration,
            delay,
            ease: 'power3.out',
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [delay, duration]);

  return (
    <Component ref={containerRef} className={className} style={{ overflow: 'hidden', ...style }}>
      <div ref={textRef} style={{ transform: 'translateY(100%)' }}>
        {children}
      </div>
    </Component>
  );
}

export function StaggerText({ text, delay = 0, staggerDelay = 0.03, as: Component = 'div', className = '', style = {} }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const chars = containerRef.current.querySelectorAll('span');
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(chars, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: staggerDelay,
            delay,
            ease: 'power2.out',
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [delay, staggerDelay]);

  return (
    <Component ref={containerRef} className={className} style={style}>
      {text.split('').map((char, i) => (
        <span key={i} style={{ display: 'inline-block', opacity: 0, transform: 'translateY(30px)', whiteSpace: char === ' ' ? 'pre' : 'normal' }}>
          {char}
        </span>
      ))}
    </Component>
  );
}

export function GlitchText({ children, active = true, className = '', style = {} }) {
  const textRef = useRef(null);

  useEffect(() => {
    if (!active || !textRef.current) return;

    const glitch = () => {
      if (!textRef.current) return;
      const xOffset = (Math.random() - 0.5) * 2;
      const opacity = 0.8 + Math.random() * 0.2;
      
      gsap.set(textRef.current, { x: xOffset, opacity });
      
      setTimeout(() => {
        if (textRef.current) {
          gsap.set(textRef.current, { x: 0, opacity: 1 });
        }
      }, 50);

      const nextGlitch = Math.random() * 3000 + 500;
      setTimeout(glitch, nextGlitch);
    };

    const timer = setTimeout(glitch, 1000);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <span ref={textRef} className={className} style={{ display: 'inline-block', ...style }}>
      {children}
    </span>
  );
}

export function TechnicalLabel({ children, color = 'var(--color-technical)', className = '', style = {} }) {
  return (
    <span className={`text-technical ${className}`} style={{ color, ...style }}>
      {children}
    </span>
  );
}
