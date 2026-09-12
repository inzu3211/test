import React, { useRef, useState } from 'react';

export function GlowCard({
  children,
  className = '',
  spotlightColor = 'rgba(57, 18, 255, 0.3)',
  borderColor = 'rgba(255, 255, 255, 0.1)',
  borderGlowColor = 'rgba(0, 255, 204, 0.35)',
  style = {},
  onClick,
  ...props
}) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: -1000, y: -1000 });
      }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl border bg-black/40 backdrop-blur-xl transition-all duration-[300ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.01] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8),0_0_30px_-10px_rgba(0,255,204,0.15)] ${className}`}
      style={{
        borderColor: isHovered ? borderGlowColor : borderColor,
        ...style,
      }}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 65%)`,
        }}
      />

      {/* Subtle border highlight line following cursor */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          border: '1px solid transparent',
          background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 255, 204, 0.4), transparent 60%) border-box`,
          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Inner Content */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}

export default GlowCard;
