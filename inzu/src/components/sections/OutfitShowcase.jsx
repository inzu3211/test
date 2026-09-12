import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { OutfitScene } from '../3d/OutfitScene';
import { GlowCard } from '../ui/GlowCard';
import { BorderBeam } from '../ui/BorderBeam';
import { TechnicalLabel } from '../Typography';
import { Layers, Rotate3D, Eye, Maximize2 } from 'lucide-react';
import useStore from '../../store/useStore';

gsap.registerPlugin(ScrollTrigger);

export function OutfitShowcase() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const setCursor = useStore((state) => state.setCursor);
  const resetCursor = useStore((state) => state.resetCursor);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=200%',
        pin: containerRef.current,
        scrub: 0.8,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="outfit-section"
      className="relative z-20 h-[300vh] w-full"
    >
      {/* Pinned Viewport Container */}
      <div
        ref={containerRef}
        className="relative h-screen w-full flex flex-col justify-between px-6 md:px-12 lg:px-20 py-10 overflow-hidden"
      >
        {/* Top Header Overlay */}
        <div className="flex items-start justify-between z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-scan animate-pulse" />
              <TechnicalLabel color="#00ffcc">
                02 // MONARCH ASSEMBLED CHOREOGRAPHY
              </TechnicalLabel>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
              THE CELESTIAL FIGURE
            </h2>
            <p className="font-mono text-xs text-white/50 tracking-wider mt-1">
              SCROLL DRIVEN 360° SPATIAL INSPECTION • HOVER TO GAZE TRACK
            </p>
          </div>

          {/* Real-time Rotation Angle Meter */}
          <div className="hidden md:flex flex-col items-end font-mono text-xs">
            <span className="text-white/40">ORBIT ANGLE</span>
            <span className="text-xl font-bold text-scan">
              {Math.round(scrollProgress * 360)}°
            </span>
            <span className="text-[10px] text-white/40">Y-AXIS CONTINUOUS SCRUB</span>
          </div>
        </div>

        {/* Center 3D Viewport — The 4 Merged Models */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <OutfitScene
            scrollProgress={scrollProgress}
            className="h-full w-full max-w-5xl"
          />
        </div>

        {/* Floating Telemetry HUD Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 z-10 max-w-4xl">
          <GlowCard
            className="p-4 bg-black/50 border-white/10"
            glowColor="rgba(0, 255, 204, 0.2)"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-[10px] text-scan uppercase">HEAD & CROWN</span>
              <Eye size={12} className="text-white/40" />
            </div>
            <div className="font-display text-sm font-semibold text-white">SOULLESS MONARCH</div>
            <div className="font-mono text-[9px] text-white/50 mt-1">Crystalline Crown • GLB 46 MB</div>
          </GlowCard>

          <GlowCard
            className="p-4 bg-black/50 border-white/10"
            glowColor="rgba(57, 18, 255, 0.25)"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-[10px] text-accent uppercase">BODY ENSEMBLE</span>
              <Layers size={12} className="text-white/40" />
            </div>
            <div className="font-display text-sm font-semibold text-white">1890 SHIRT + RAVE PANTS</div>
            <div className="font-mono text-[9px] text-white/50 mt-1">Victorian Drape • Phat Pants GLB</div>
          </GlowCard>

          <GlowCard
            className="p-4 bg-black/50 border-white/10"
            glowColor="rgba(255, 255, 255, 0.2)"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-[10px] text-white/60 uppercase">FOOTWEAR</span>
              <Rotate3D size={12} className="text-white/40" />
            </div>
            <div className="font-display text-sm font-semibold text-white">DIESEL RUNNER WHITE</div>
            <div className="font-mono text-[9px] text-white/50 mt-1">Dual Mirrored • High-poly tread</div>
          </GlowCard>
        </div>

        {/* Bottom Interactive Prompt */}
        <div className="flex items-center justify-between z-10 border-t border-white/10 pt-4 font-mono text-[10px] text-white/40">
          <span>DRAG CURSOR OVER FIGURE TO OVERRIDE ROTATION</span>
          <span className="text-scan">LENIS SYNC // ZERO LATENCY</span>
        </div>
      </div>
    </section>
  );
}

export default OutfitShowcase;
