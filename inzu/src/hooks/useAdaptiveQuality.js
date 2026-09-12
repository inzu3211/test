import { useEffect } from 'react'
import { useStore } from '../store/useStore'

export function useAdaptiveQuality() {
  const setQualityLevel = useStore((s) => s.setQualityLevel)
  const qualityLevel = useStore((s) => s.qualityLevel)

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')

    if (!gl) {
      setQualityLevel('low')
      return
    }

    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
    const renderer = debugInfo
      ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
      : ''

    const isMobile = /Mobi|Android/i.test(navigator.userAgent)
    const isLowEnd = /Intel|SwiftShader|llvmpipe/i.test(renderer)
    const cores = navigator.hardwareConcurrency || 2

    if (isMobile || (isLowEnd && cores <= 4)) {
      setQualityLevel('low')
    } else if (isLowEnd || cores <= 4) {
      setQualityLevel('medium')
    } else if (cores >= 8) {
      setQualityLevel('ultra')
    } else {
      setQualityLevel('high')
    }

    canvas.remove()
  }, [setQualityLevel])

  return qualityLevel
}

export function getQualitySettings(level) {
  const settings = {
    ultra: {
      dpr: [1.5, 2],
      postProcessing: true,
      bloom: true,
      grain: true,
      particles: 500,
      geometryDetail: 64,
    },
    high: {
      dpr: [1, 2],
      postProcessing: true,
      bloom: true,
      grain: true,
      particles: 300,
      geometryDetail: 48,
    },
    medium: {
      dpr: [1, 1.5],
      postProcessing: true,
      bloom: true,
      grain: false,
      particles: 150,
      geometryDetail: 32,
    },
    low: {
      dpr: [0.75, 1],
      postProcessing: false,
      bloom: false,
      grain: false,
      particles: 50,
      geometryDetail: 16,
    },
  }
  return settings[level] || settings.high
}
