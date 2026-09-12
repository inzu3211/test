import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import useStore from '../../store/useStore';

export function MagneticButton({
  children,
  className = '',
  onClick,
  strength = 0.35,
  cursorLabel = 'ENTER',
  as = 'button',
  href,
  ...props
}) {
  const ref = useRef(null);
  const setCursor = useStore((state) => state.setCursor);
  const resetCursor = useStore((state) => state.resetCursor);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth physical spring back to (0,0)
  const springX = useSpring(x, { stiffness: 180, damping: 18 });
  const springY = useSpring(y, { stiffness: 180, damping: 18 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * strength);
    y.set((clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    resetCursor();
  };

  const Component = as === 'a' ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setCursor('enter', cursorLabel)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      href={href}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/5 px-8 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-[#f2f0ea] backdrop-blur-md transition-all duration-[300ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#00ffcc] hover:bg-white hover:text-black hover:shadow-[0_0_35px_rgba(0,255,204,0.4)] ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {/* Inner fluid fill expanding on hover */}
      <span className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-r from-white to-[#e8e4e0] transition-transform duration-[300ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
    </Component>
  );
}

export default MagneticButton;
