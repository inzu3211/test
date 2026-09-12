import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useStore } from '../store/useStore';

gsap.registerPlugin(ScrollTrigger);

export function ScrollContainer({ children }) {
  const setScrollProgress = useStore((state) => state.setScrollProgress);
  const setOrbitProgress = useStore((state) => state.setOrbitProgress);
  const setHeroVisible = useStore((state) => state.setHeroVisible);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      syncTouch: true,
    });

    lenis.on('scroll', (e) => {
      ScrollTrigger.update();
      setScrollProgress(e.progress);
    });

    // ScrollTrigger for the hero-spacer orbit zone
    ScrollTrigger.create({
      trigger: '#hero-spacer',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        // self.progress goes 0→1 as the hero-spacer scrolls through
        setOrbitProgress(self.progress);
      },
      onLeave: () => setHeroVisible(false),
      onEnterBack: () => setHeroVisible(true),
    });

    const update = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      ScrollTrigger.getAll().forEach((st) => st.kill());
      lenis.destroy();
    };
  }, [setScrollProgress, setOrbitProgress, setHeroVisible]);

  return (
    <div id="scroll-content" style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      {children}
    </div>
  );
}
