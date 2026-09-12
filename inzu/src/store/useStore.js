import { create } from 'zustand';
import soundFx from '../utils/audio';

export const useStore = create((set, get) => ({
  // ─── Loading ───
  isLoaded: false,
  loadingProgress: 0,
  loadingStage: 'INITIALIZING INZU LAB',
  setLoadingProgress: (progress) => set({ loadingProgress: progress }),
  setLoadingStage: (stage) => set({ loadingStage: stage }),
  setLoaded: () => set({ isLoaded: true }),

  // ─── Scene ───
  currentSection: 'hero',
  setCurrentSection: (section) => set({ currentSection: section }),

  // ─── Character ───
  characterMode: 'beauty', // beauty | mesh | iridescence | scan | void | data
  setCharacterMode: (mode) => {
    if (get().soundEnabled) soundFx.playSwitch();
    set({ characterMode: mode });
  },
  inspectionActive: false,
  setInspectionActive: (active) => {
    if (get().soundEnabled) soundFx.playScan();
    set({ inspectionActive: active });
  },

  // ─── Outfit Switcher (Blazer / 1890 Victorian Shirt) ───
  activeOutfit: 'blazer',
  setActiveOutfit: (outfit) => {
    if (get().soundEnabled) soundFx.playSwitch();
    set({ activeOutfit: outfit });
  },

  // ─── 3D Hotspots ───
  activeHotspot: null,
  setActiveHotspot: (hotspot) => {
    if (get().soundEnabled && hotspot) soundFx.playChime(0.05);
    set({ activeHotspot: hotspot });
  },

  // ─── Cursor ───
  cursorVariant: 'default', // default | inspect | explore | enter | navigate | wait | scanning
  cursorLabel: '',
  setCursor: (variant, label = '') => set({ cursorVariant: variant, cursorLabel: label }),
  resetCursor: () => set({ cursorVariant: 'default', cursorLabel: '' }),

  // ─── Quality ───
  qualityLevel: 'high', // ultra | high | medium | low
  setQualityLevel: (level) => set({ qualityLevel: level }),

  // ─── Sound ───
  soundEnabled: false,
  toggleSound: () =>
    set((s) => {
      const next = !s.soundEnabled;
      if (next) soundFx.playChime();
      return { soundEnabled: next };
    }),

  // ─── Scroll ───
  scrollProgress: 0,
  setScrollProgress: (progress) => set({ scrollProgress: progress }),

  // ─── Orbit ───
  orbitProgress: 0,
  setOrbitProgress: (progress) => set({ orbitProgress: progress }),

  // ─── Hero Visibility ───
  heroVisible: true,
  setHeroVisible: (visible) => set({ heroVisible: visible }),

  // ─── Hero Reveal ───
  heroRevealed: false,
  setHeroRevealed: () => set({ heroRevealed: true }),
  introComplete: false,
  setIntroComplete: () => set({ introComplete: true }),
}));

export default useStore;
