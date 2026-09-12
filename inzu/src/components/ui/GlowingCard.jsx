import React, { useRef, useState } from 'react';

export function GlowingCard({
  children,
  className = '',
  glowColor = 'rgba(57, 18, 255, 0.25)',
  borderColor = 'rgba(255, 255, 255, 0.1)',
  borderHoverColor = 'rgba(0, 255, 204, 0.4)',
  style = {},
  ...props
}) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
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
        setMousePos({ x: -500, y: -500 });
      }}
      className={`relative overflow-hidden rounded-2xl border bg-black/40 backdrop-blur-xl transition-all duration-300 ease-out ${className}`}
      style={{
        borderColor: isHovered ? borderHoverColor : borderColor,
        boxShadow: isHovered
          ? '0 10px 40px -10px rgba(0,0,0,0.8), 0 0 30px -5px rgba(0,255,204,0.1)'
          : '0 10px 30px -10px rgba(0,0,0,0.5)',
        ...style,
      }}
      {...props}
    >
      {/* Mouse-following radial glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 60%)`,
        }}
      />
      {/* Inner Content */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
