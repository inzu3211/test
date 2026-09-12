import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import useStore from '../store/useStore';

// ──── Eye Configuration ────
const EYE_SPACING = 0.055;        // Distance between eyes (half-width)
const EYE_Y = 0.02;              // Vertical position on head
const EYE_Z = 0.155;             // Forward position (front of head)
const EYE_RADIUS = 0.022;        // Sclera (white) radius
const IRIS_RADIUS = 0.014;       // Iris radius
const PUPIL_RADIUS = 0.008;      // Pupil radius
const PUPIL_SHIFT_MAX = 0.008;   // Max pupil displacement from cursor
const EYE_GLOW_INTENSITY = 2.5;  // Emissive glow strength
const EYE_LIGHT_INTENSITY = 0.4; // Point light per eye
const EYE_TRACK_LERP = 0.08;     // Eye cursor tracking speed (faster than head)
const HEAD_TRACK_LERP = 0.03;    // Head tracking speed (subtler now)

// Blink timing
const BLINK_DURATION = 0.12;     // Seconds for a single blink
const BLINK_INTERVAL_MIN = 2.5;  // Min seconds between blinks
const BLINK_INTERVAL_MAX = 6.0;  // Max seconds between blinks

function Eye({ side, pointerRef }) {
  const eyeGroupRef = useRef();
  const irisRef = useRef();
  const pupilRef = useRef();
  const lightRef = useRef();
  const scleraRef = useRef();

  // Blink state
  const blinkState = useRef({
    nextBlink: Math.random() * 3 + 1,
    isBlinking: false,
    blinkStart: 0,
  });

  const xSign = side === 'left' ? -1 : 1;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const pointer = pointerRef.current;

    // ── Pupil tracks cursor ──
    if (pupilRef.current) {
      const targetX = pointer.x * PUPIL_SHIFT_MAX * 0.8;
      const targetY = pointer.y * PUPIL_SHIFT_MAX * 0.5;
      pupilRef.current.position.x = THREE.MathUtils.lerp(
        pupilRef.current.position.x, targetX, EYE_TRACK_LERP
      );
      pupilRef.current.position.y = THREE.MathUtils.lerp(
        pupilRef.current.position.y, targetY, EYE_TRACK_LERP
      );
    }

    // ── Iris tracks cursor (slightly less range than pupil) ──
    if (irisRef.current) {
      const targetX = pointer.x * PUPIL_SHIFT_MAX * 0.5;
      const targetY = pointer.y * PUPIL_SHIFT_MAX * 0.3;
      irisRef.current.position.x = THREE.MathUtils.lerp(
        irisRef.current.position.x, targetX, EYE_TRACK_LERP * 0.8
      );
      irisRef.current.position.y = THREE.MathUtils.lerp(
        irisRef.current.position.y, targetY, EYE_TRACK_LERP * 0.8
      );
    }

    // ── Glow pulsation ──
    if (lightRef.current) {
      lightRef.current.intensity = EYE_LIGHT_INTENSITY + Math.sin(t * 2.5 + xSign) * 0.1;
    }

    // ── Blink system ──
    const bs = blinkState.current;
    if (!bs.isBlinking && t > bs.nextBlink) {
      bs.isBlinking = true;
      bs.blinkStart = t;
    }

    if (bs.isBlinking) {
      const blinkProgress = (t - bs.blinkStart) / BLINK_DURATION;
      if (blinkProgress >= 1) {
        // Blink complete
        bs.isBlinking = false;
        bs.nextBlink = t + BLINK_INTERVAL_MIN + Math.random() * (BLINK_INTERVAL_MAX - BLINK_INTERVAL_MIN);
        if (eyeGroupRef.current) eyeGroupRef.current.scale.y = 1;
      } else {
        // Blink animation: squash Y (close → open)
        const squash = 1 - Math.sin(blinkProgress * Math.PI) * 0.9;
        if (eyeGroupRef.current) eyeGroupRef.current.scale.y = squash;
      }
    }
  });

  return (
    <group
      ref={eyeGroupRef}
      position={[xSign * EYE_SPACING, EYE_Y, EYE_Z]}
    >
      {/* Sclera (white of eye) with subtle glow */}
      <mesh ref={scleraRef}>
        <sphereGeometry args={[EYE_RADIUS, 24, 24]} />
        <meshStandardMaterial
          color="#e8e4e0"
          emissive="#c8c4c0"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.05}
        />
      </mesh>

      {/* Iris — glowing ring */}
      <mesh ref={irisRef} position={[0, 0, EYE_RADIUS * 0.4]}>
        <sphereGeometry args={[IRIS_RADIUS, 20, 20]} />
        <meshStandardMaterial
          color="#8899bb"
          emissive="#6688cc"
          emissiveIntensity={EYE_GLOW_INTENSITY}
          roughness={0.1}
          metalness={0.3}
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* Pupil — dark center that moves with cursor */}
      <mesh ref={pupilRef} position={[0, 0, EYE_RADIUS * 0.6]}>
        <sphereGeometry args={[PUPIL_RADIUS, 16, 16]} />
        <meshStandardMaterial
          color="#050505"
          emissive="#000000"
          roughness={0.0}
          metalness={0.8}
        />
      </mesh>

      {/* Eye glow light — casts subtle illumination on the face */}
      <pointLight
        ref={lightRef}
        position={[0, 0, EYE_RADIUS * 1.5]}
        intensity={EYE_LIGHT_INTENSITY}
        color="#8899cc"
        distance={0.5}
        decay={2}
      />
    </group>
  );
}

export function Character(props) {
  const mode = useStore((state) => state.characterMode);

  const headRef = useRef();
  const bodyRef = useRef();
  const pointerRef = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    const { pointer, clock } = state;
    const elapsedTime = clock.getElapsedTime();

    // Store pointer for eye components
    pointerRef.current = pointer;

    // Head tracking — now subtler since eyes do the heavy lifting
    if (headRef.current) {
      const targetX = (pointer.y * Math.PI) / 6;  // Reduced from /4
      const targetY = (pointer.x * Math.PI) / 6;
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -targetX, HEAD_TRACK_LERP);
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetY, HEAD_TRACK_LERP);
    }

    // Body subtle sway
    if (bodyRef.current) {
      bodyRef.current.position.x = THREE.MathUtils.lerp(
        bodyRef.current.position.x, pointer.x * 0.04, 0.02
      );
      bodyRef.current.rotation.y = THREE.MathUtils.lerp(
        bodyRef.current.rotation.y, pointer.x * 0.015, 0.02
      );
      bodyRef.current.position.y = Math.sin(elapsedTime * 1.2) * 0.002;
    }
  });

  const coatProfile = useMemo(() => {
    const points = [];
    for (let i = 0; i <= 20; i++) {
      const t = i / 20;
      const radius = THREE.MathUtils.lerp(0.24, 1.1, Math.pow(t, 2));
      const y = THREE.MathUtils.lerp(2.5, 0, t);
      points.push(new THREE.Vector2(radius, y));
    }
    return points;
  }, []);

  const getMaterial = () => {
    switch (mode) {
      case 'mesh':
        return <meshBasicMaterial wireframe={true} color="#00ffcc" />;
      case 'iridescence':
        return (
          <meshPhysicalMaterial
            color="#e2e8f0"
            roughness={0.08}
            metalness={0.25}
            clearcoat={1.0}
            clearcoatRoughness={0.05}
            iridescence={1.0}
            iridescenceIOR={1.65}
            iridescenceThicknessRange={[150, 750]}
          />
        );
      case 'scan':
        return (
          <meshStandardMaterial
            color="#021f18"
            emissive="#00ffcc"
            emissiveIntensity={0.65}
            roughness={0.2}
            metalness={0.7}
          />
        );
      case 'void':
        return <meshBasicMaterial color="#020204" />;
      case 'beauty':
      case 'data':
      default:
        return (
          <meshPhysicalMaterial
            color="#f3eee9"
            roughness={0.2}
            metalness={0.08}
            clearcoat={0.9}
            clearcoatRoughness={0.08}
          />
        );
    }
  };

  const crownMat = <meshPhysicalMaterial color="#c0c8d4" roughness={0.1} metalness={0.6} clearcoat={1} transparent opacity={0.85} />;

  return (
    <group {...props} ref={bodyRef}>
      <group ref={headRef} position={[0, 2.95, 0]}>
        {/* Head sphere */}
        <mesh scale={[0.85, 1.1, 0.9]}>
          <sphereGeometry args={[0.18, 32, 32]} />
          {getMaterial()}
        </mesh>

        {/* ──── EYES ──── */}
        <Eye side="left" pointerRef={pointerRef} />
        <Eye side="right" pointerRef={pointerRef} />

        {/* Hair strands */}
        {Array.from({ length: 15 }).map((_, i) => (
          <mesh key={`hair-${i}`} position={[
            (Math.random() - 0.5) * 0.15,
            0.15,
            (Math.random() - 0.5) * 0.15
          ]} rotation={[
            (Math.random() - 0.5) * 0.5,
            Math.random() * Math.PI,
            (Math.random() - 0.5) * 0.5
          ]}>
            <coneGeometry args={[0.02, 0.08 + Math.random() * 0.12, 8]} />
            {getMaterial()}
          </mesh>
        ))}

        {/* Crown */}
        <group position={[0, 0.2, 0]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.15, 0.02, 16, 32]} />
            {crownMat}
          </mesh>
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            return (
              <mesh key={`crown-${i}`} position={[
                Math.cos(angle) * 0.15,
                0.1,
                Math.sin(angle) * 0.15
              ]} rotation={[
                0,
                -angle,
                Math.PI / 12
              ]}>
                <coneGeometry args={[0.02, 0.15 + Math.random() * 0.2, 4]} />
                {crownMat}
              </mesh>
            );
          })}
        </group>
      </group>

      {/* Neck */}
      <mesh position={[0, 2.75, 0]}>
        <cylinderGeometry args={[0.06, 0.08, 0.2, 16]} />
        {getMaterial()}
      </mesh>

      {/* Shoulders */}
      <mesh position={[0, 2.58, 0]} scale={[1, 0.4, 0.6]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        {getMaterial()}
      </mesh>

      {/* Torso */}
      <mesh position={[0, 2.0, 0]}>
        <cylinderGeometry args={[0.25, 0.18, 1.1, 32]} />
        {getMaterial()}
      </mesh>

      {/* Chest plate */}
      <mesh position={[0, 2.5, 0.18]} rotation={[0.2, 0, 0]}>
        <boxGeometry args={[0.4, 0.3, 0.05]} />
        {getMaterial()}
      </mesh>

      {/* Coat / flowing train */}
      <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <latheGeometry args={[coatProfile, 64, 0.3, Math.PI * 2 - 0.6]} />
        {getMaterial()}
      </mesh>

      {/* Coat tail / cape */}
      <mesh position={[0, 0.05, -0.6]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.2, 1.8, 16, 16]} />
        {getMaterial()}
      </mesh>

      {/* Arms */}
      {[-1, 1].map((side) => (
        <group key={`arm-${side}`} position={[side * 0.35, 2.5, 0]} rotation={[0, 0, side * 0.4]}>
          <mesh position={[0, -0.3, 0]}>
            <cylinderGeometry args={[0.06, 0.05, 0.6, 16]} />
            {getMaterial()}
          </mesh>
          <mesh position={[0, -0.6, 0]} rotation={[0.2, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.04, 0.6, 16]} />
            {getMaterial()}
          </mesh>
          <mesh position={[0, -0.9, 0.1]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            {getMaterial()}
          </mesh>
        </group>
      ))}
    </group>
  );
}
