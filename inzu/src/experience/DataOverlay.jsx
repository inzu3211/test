import React from 'react';
import { Html } from '@react-three/drei';
import useStore from '../store/useStore';

export function DataOverlay() {
  const mode = useStore((state) => state.characterMode);

  if (mode !== 'data') return null;

  const labelStyle = {
    fontFamily: 'var(--font-mono, monospace)',
    fontSize: '10px',
    color: '#444',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    pointerEvents: 'none'
  };

  const valueStyle = { color: '#888' };
  const lineStyle = (left) => ({
    width: '30px',
    height: '1px',
    backgroundColor: '#444',
    order: left ? 1 : 0
  });

  return (
    <group>
      <Html position={[-1.5, 3.0, 0]} center>
        <div style={labelStyle}>
          OBJECT / <span style={valueStyle}>INZU-001</span>
          <div style={lineStyle(true)} />
        </div>
      </Html>
      <Html position={[1.5, 3.0, 0]} center>
        <div style={labelStyle}>
          <div style={lineStyle(false)} />
          HEIGHT / <span style={valueStyle}>3.2M</span>
        </div>
      </Html>
      <Html position={[-1.5, 1.8, 0]} center>
        <div style={labelStyle}>
          MATERIAL / <span style={valueStyle}>COUTURE WHITE</span>
          <div style={lineStyle(true)} />
        </div>
      </Html>
      <Html position={[1.5, 1.8, 0]} center>
        <div style={labelStyle}>
          <div style={lineStyle(false)} />
          POLYGONS / <span style={valueStyle}>12,847</span>
        </div>
      </Html>
      <Html position={[-1.5, 0.6, 0]} center>
        <div style={labelStyle}>
          COORD / <span style={valueStyle}>0.00, 0.00, 0.00</span>
          <div style={lineStyle(true)} />
        </div>
      </Html>
      <Html position={[1.5, 0.6, 0]} center>
        <div style={labelStyle}>
          <div style={lineStyle(false)} />
          STATUS / <span style={valueStyle}>ACTIVE</span>
        </div>
      </Html>
    </group>
  );
}
