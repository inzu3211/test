import React from 'react';

export function AnimatedBorder({
  children,
  className = '',
  containerClassName = '',
  borderWidth = 1.5,
  duration = 8,
  gradient = 'conic-gradient(from 0deg at 50% 50%, #00ffcc 0deg, #3912ff 120deg, #2f0000 240deg, #00ffcc 360deg)',
  ...props
}) {
  return (
    <div
      className={`relative p-[1.5px] overflow-hidden rounded-2xl ${containerClassName}`}
      {...props}
    >
      {/* Continuously Rotating Conic Gradient Beam */}
      <div
        className="absolute inset-[-100%] animate-[spin_8s_linear_infinite]"
        style={{
          background: gradient,
          animationDuration: `${duration}s`,
        }}
      />

      {/* Masked Content Container */}
      <div className={`relative rounded-2xl bg-black/85 backdrop-blur-2xl ${className}`}>
        {children}
      </div>
    </div>
  );
}

export default AnimatedBorder;
