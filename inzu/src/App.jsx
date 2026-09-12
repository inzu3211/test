import React, { useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { GradientBackground } from './components/3d/GradientBackground';
import { NoiseOverlay } from './components/ui/NoiseOverlay';
import { CustomCursor } from './components/CustomCursor';
import { LoadingSequence } from './components/LoadingSequence';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { StatementSection } from './components/sections/StatementSection';
import { SurfaceToStructure } from './components/sections/SurfaceToStructure';
import { Portfolio } from './components/sections/Portfolio';
import { FeatureBento } from './components/sections/FeatureBento';
import { About } from './components/sections/About';
import { Footer } from './components/sections/Footer';
import { HeroScene } from './experience/HeroScene';
import { initLenis, destroyLenis } from './lib/lenis';
import { useAdaptiveQuality } from './hooks/useAdaptiveQuality';
import useStore from './store/useStore';

export default function App() {
  useAdaptiveQuality();
  const heroRevealed = useStore((state) => state.heroRevealed);
  const heroVisible = useStore((state) => state.heroVisible);
  const setOrbitProgress = useStore((state) => state.setOrbitProgress);

  // Initialize Lenis smooth scroll and drive orbital camera progress
  useEffect(() => {
    const lenis = initLenis();

    const handleScroll = (e) => {
      // Calculate normalized scroll progress through hero & initial sections (0 to 1)
      const maxScroll = window.innerHeight * 2.5;
      const progress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
      setOrbitProgress(progress);
    };

    if (lenis) {
      lenis.on('scroll', handleScroll);
    }

    return () => {
      destroyLenis();
    };
  }, [setOrbitProgress]);

  return (
    <div className="relative min-h-screen w-full bg-[#030305] text-[#f2f0ea] selection:bg-scan selection:text-black overflow-x-hidden">
      {/* ─── 1. BASE BACKGROUND: Animated ShaderGradient ─── */}
      <GradientBackground />

      {/* ─── 2. FILM GRAIN TEXTURE ─── */}
      <NoiseOverlay />

      {/* ─── 3. PRECISION CUSTOM CURSOR ─── */}
      <CustomCursor />

      {/* ─── 4. THEATRICAL BOOT SEQUENCE ─── */}
      <LoadingSequence />

      {/* ─── 5. FLOATING GLASS NAVBAR ─── */}
      <Navbar />

      {/* ─── 6. UNIFIED 3D WEBGL HERO SCENE (Fixed Layer) ─── */}
      <div
        className="fixed inset-0 pointer-events-none z-[4] transition-opacity duration-1000"
        style={{
          opacity: heroRevealed ? (heroVisible ? 1 : 0) : 0,
        }}
      >
        <Canvas
          gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
          dpr={[1, 2]}
          camera={{ position: [0, 1.8, 5.5], fov: 45 }}
          style={{ pointerEvents: 'auto' }}
        >
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </Canvas>
      </div>

      {/* ─── 7. EDITORIAL CONTENT CHOREOGRAPHY ─── */}
      <main className="relative z-10 w-full">
        {/* Hero Section */}
        <Hero />

        {/* 01 — Philosophy Manifesto */}
        <StatementSection />

        {/* 02 — Real-time 3D Volumetric Dissection Chamber */}
        <SurfaceToStructure />

        {/* 03 — Curated Portfolio Bento Grid */}
        <Portfolio />

        {/* 04 — Asymmetric Bento Lab & Capabilities Matrix */}
        <FeatureBento />

        {/* 05 — Studio Philosophy & Standards */}
        <About />

        {/* 06 — Terminal & Direct Contact */}
        <Footer />
      </main>
    </div>
  );
}
