"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Line } from "@react-three/drei";
import { useScrollProgress } from "@/contexts/ScrollProgressContext";
import { MattatzFireCore } from "./MattatzFireCore";

function buildOrbit(
  count: number,
  radius: number,
  yAmp: number,
  zScale = 1,
  phase = 0
): [number, number, number][] {
  return Array.from({ length: count }, (_, i) => {
    const a = (i / count) * Math.PI * 2 + phase;
    return [
      Math.cos(a) * (radius + Math.sin(a * 3.2) * 0.18),
      Math.sin(a * 2.1) * yAmp,
      Math.sin(a) * radius * zScale,
    ];
  });
}

function curveBetween(
  from: [number, number, number],
  to: [number, number, number],
  bendY: number,
  bendZ: number,
  segments: number
) {
  const a = new THREE.Vector3(...from);
  const b = new THREE.Vector3(...to);
  const mid = a.clone().lerp(b, 0.5);
  mid.y += bendY;
  mid.z += bendZ;

  return new THREE.CatmullRomCurve3([a, mid, b], false, "catmullrom", 0.5).getPoints(
    segments
  );
}

export function CoreNetwork({
  lowPower,
  colorMode = "dark",
}: {
  lowPower?: boolean;
  colorMode?: "light" | "dark";
}) {
  const { progressRef } = useScrollProgress();

  const rootRef = useRef<THREE.Group>(null);
  const flameGroupRef = useRef<THREE.Group>(null);
  const planeGroupRef = useRef<THREE.Group>(null);

  const outerArcRef = useRef<THREE.Mesh>(null);
  const midArcRef = useRef<THREE.Mesh>(null);
  const haloArcRef = useRef<THREE.Mesh>(null);
  const floorRingRef = useRef<THREE.Mesh>(null);

  const nodeRefs = useRef<Array<THREE.Mesh | null>>([]);

  const isLight = colorMode === "light";

  // const amber = isLight ? "#c8801d" : "#ffb95f";
  // const cyan = isLight ? "#4d8fff" : "#79d8ff";
  // const ivory = isLight ? "#fff8ef" : "#f6efe5";
  // const graphite = isLight ? "#d9dde5" : "#0d1218";
  // const deepSurface = isLight ? "#f1ede6" : "#07090c";

  const amber = "#c8801d";
  const flamePurple = "#a855f7";
  const flameCoreScale = 1.15;
  const cyan = "#4d8fff";
  const graphite = "#d9dde5";
  const deepSurface = "#f1ede6";

  const detail = lowPower ? 24 : 48;
  const lineSegments = lowPower ? 14 : 26;

  const outerNodes = useMemo(
    () => buildOrbit(lowPower ? 8 : 11, 4.2, 0.55, 0.78, 0.14),
    [lowPower]
  );

  const midNodes = useMemo(
    () => buildOrbit(lowPower ? 5 : 7, 2.8, 0.32, 1, Math.PI / 6),
    [lowPower]
  );

  const spireNodes = useMemo<[number, number, number][]>(
    () => [
      [0, 2.25, 0.2],
      [1.15, 1.35, 0.55],
      [-1.05, 1.1, -0.45],
      [0, -1.85, -0.35],
    ],
    []
  );

  const allNodes = useMemo(
    () => [...outerNodes, ...midNodes, ...spireNodes],
    [outerNodes, midNodes, spireNodes]
  );

  const signalCurves = useMemo(() => {
    const origin: [number, number, number] = [0, 0.25, 0];
    return allNodes.map((node, i) =>
      curveBetween(
        origin,
        node,
        i % 2 === 0 ? 0.65 : -0.15,
        i % 3 === 0 ? 0.3 : -0.15,
        lineSegments
      )
    );
  }, [allNodes, lineSegments]);

  const bridgeCurves = useMemo(() => {
    const curves: THREE.Vector3[][] = [];

    for (let i = 0; i < outerNodes.length; i++) {
      curves.push(
        curveBetween(
          outerNodes[i],
          outerNodes[(i + 2) % outerNodes.length],
          0.35,
          0.1,
          lineSegments
        )
      );
    }

    for (let i = 0; i < midNodes.length; i++) {
      curves.push(
        curveBetween(
          midNodes[i],
          outerNodes[(i * 2) % outerNodes.length],
          0.2,
          -0.1,
          lineSegments
        )
      );
    }

    return curves;
  }, [outerNodes, midNodes, lineSegments]);

  const floorMarker = useMemo<[number, number, number]>(() => {
    const a = 2.35;
    const r = 6.1;
    return [Math.cos(a) * r, -2.78, Math.sin(a) * r];
  }, []);

  const satellitePoints = useMemo(() => {
    if (lowPower) return [];
    return Array.from({ length: 6 }, (_, i) => {
      const a = (i / 6) * Math.PI * 2 + 0.45;
      return [
        Math.cos(a) * 5.35,
        Math.sin(a * 1.7) * 0.9,
        Math.sin(a) * 4.4,
      ] as [number, number, number];
    });
  }, [lowPower]);

  useFrame((state, delta) => {
    const p = progressRef.current;
    const t = state.clock.elapsedTime;

    const awaken = THREE.MathUtils.smoothstep(p, 0, 0.18);
    const expand = THREE.MathUtils.smoothstep(p, 0.18, 0.55);
    const resolve = THREE.MathUtils.smoothstep(p, 0.55, 1);

    if (rootRef.current) {
      rootRef.current.rotation.y = THREE.MathUtils.lerp(
        rootRef.current.rotation.y,
        0.22 + p * 1.55 + state.pointer.x * 0.16,
        0.05
      );
      rootRef.current.rotation.x = THREE.MathUtils.lerp(
        rootRef.current.rotation.x,
        -0.06 + state.pointer.y * 0.1,
        0.05
      );
      rootRef.current.position.y = THREE.MathUtils.lerp(
        rootRef.current.position.y,
        0.12 - resolve * 0.35,
        0.05
      );
      rootRef.current.position.z = THREE.MathUtils.lerp(
        rootRef.current.position.z,
        expand * 0.25,
        0.05
      );

      const s = THREE.MathUtils.lerp(
        rootRef.current.scale.x,
        0.96 + awaken * 0.04 + expand * 0.08,
        0.06
      );
      rootRef.current.scale.setScalar(s);
    }

    if (flameGroupRef.current) {
      flameGroupRef.current.rotation.y += delta * (lowPower ? 0.08 : 0.12);
      flameGroupRef.current.rotation.z = THREE.MathUtils.lerp(
        flameGroupRef.current.rotation.z,
        Math.sin(t * 0.35) * 0.035 + state.pointer.x * 0.03,
        0.04
      );
    }

    if (planeGroupRef.current) {
      planeGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        planeGroupRef.current.rotation.y,
        -0.26 + expand * 0.18 + state.pointer.x * 0.06,
        0.05
      );
      planeGroupRef.current.position.y = THREE.MathUtils.lerp(
        planeGroupRef.current.position.y,
        0.06 - resolve * 0.18,
        0.05
      );
    }

    if (outerArcRef.current) outerArcRef.current.rotation.y += delta * 0.12;
    if (midArcRef.current) midArcRef.current.rotation.z -= delta * 0.15;
    if (haloArcRef.current) haloArcRef.current.rotation.z += delta * 0.05;
    if (floorRingRef.current) floorRingRef.current.rotation.z += delta * 0.012;

    nodeRefs.current.forEach((node, i) => {
      if (!node) return;
      const pulse = 1 + Math.sin(t * 1.8 + i * 0.65) * 0.08;
      const scaleTarget = pulse * (1 + expand * (i % 3 === 0 ? 0.16 : 0.08));
      const s = THREE.MathUtils.lerp(node.scale.x, scaleTarget, 0.14);
      node.scale.setScalar(s);
    });
  });

  return (
    <group ref={rootRef}>
      {/* scene root group */}
      <mesh
        ref={floorRingRef}
        position={[0, -2.8, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <ringGeometry args={[4.8, 7.2, 72]} />
        <meshBasicMaterial
          color={cyan}
          transparent
          opacity={isLight ? 0.05 : 0.08}
        />
      </mesh>

      <mesh position={floorMarker}>
        <sphereGeometry args={[0.08, 14, 14]} />
        <meshBasicMaterial
          color={amber}
          transparent
          opacity={isLight ? 0.7 : 0.95}
        />
      </mesh>

      {/* platform / systems planes */}
      <group ref={planeGroupRef}>
        <mesh position={[0, 0.95, -1.25]} rotation={[0.15, -0.42, 0.05]}>
          <boxGeometry args={[4.1, 0.03, 1.3]} />
          <meshStandardMaterial
            color={graphite}
            emissive={cyan}
            emissiveIntensity={isLight ? 0.03 : 0.12}
            metalness={0.72}
            roughness={0.26}
            transparent
            opacity={isLight ? 0.16 : 0.2}
          />
        </mesh>

        <mesh position={[-1.85, -0.55, 1.1]} rotation={[0.22, 0.56, -0.12]}>
          <boxGeometry args={[2.9, 0.025, 1.05]} />
          <meshStandardMaterial
            color={deepSurface}
            emissive={amber}
            emissiveIntensity={isLight ? 0.02 : 0.08}
            metalness={0.68}
            roughness={0.3}
            transparent
            opacity={isLight ? 0.12 : 0.16}
          />
        </mesh>

        <mesh position={[1.7, 0.2, 1.55]} rotation={[-0.15, 0.22, 0.2]}>
          <boxGeometry args={[2.7, 0.025, 1.15]} />
          <meshStandardMaterial
            color={deepSurface}
            emissive={cyan}
            emissiveIntensity={isLight ? 0.02 : 0.08}
            metalness={0.68}
            roughness={0.3}
            transparent
            opacity={isLight ? 0.1 : 0.14}
          />
        </mesh>
      </group>

      {/* system arcs */}
      <mesh ref={haloArcRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[5.15, 0.018, 16, detail * 3, Math.PI * 1.55]} />
        <meshStandardMaterial
          color={cyan}
          emissive={cyan}
          emissiveIntensity={isLight ? 0.03 : 0.14}
          metalness={0.88}
          roughness={0.24}
          transparent
          opacity={isLight ? 0.18 : 0.24}
        />
      </mesh>

      <mesh ref={outerArcRef} rotation={[Math.PI / 2.7, 0.25, 0]}>
        <torusGeometry args={[3.85, 0.03, 16, detail * 3, Math.PI * 1.7]} />
        <meshStandardMaterial
          color={amber}
          emissive={amber}
          emissiveIntensity={isLight ? 0.08 : 0.28}
          metalness={0.9}
          roughness={0.22}
          transparent
          opacity={isLight ? 0.3 : 0.5}
        />
      </mesh>

      <mesh ref={midArcRef} rotation={[0.98, 0.42, 0.18]}>
        <torusGeometry args={[2.45, 0.026, 16, detail * 3, Math.PI * 1.55]} />
        <meshStandardMaterial
          color={cyan}
          emissive={cyan}
          emissiveIntensity={isLight ? 0.06 : 0.22}
          metalness={0.86}
          roughness={0.24}
          transparent
          opacity={isLight ? 0.22 : 0.34}
        />
      </mesh>

      {/* orchestration curves */}
      {signalCurves.map((points, i) => (
        <Line
          key={`signal-${i}`}
          points={points}
          color={i % 2 === 0 ? amber : cyan}
          lineWidth={lowPower ? 1 : 1.2}
          transparent
          opacity={isLight ? 0.14 : 0.3}
        />
      ))}

      {bridgeCurves.map((points, i) => (
        <Line
          key={`bridge-${i}`}
          points={points}
          color={cyan}
          lineWidth={lowPower ? 0.7 : 1}
          transparent
          opacity={isLight ? 0.08 : 0.16}
        />
      ))}

      {/* beacon flame core — mattatz-style volumetric raymarched fire (see mattatzFire.ts) */}
      <group ref={flameGroupRef}>
        <MattatzFireCore
          lowPower={lowPower}
          colorHex={flamePurple}
          position={[0, 1.70, 0]}
          scale={
            lowPower
              ? [
                  2.48 * flameCoreScale,
                  3.45 * flameCoreScale,
                  2.18 * flameCoreScale,
                ]
              : [
                  4.52 * flameCoreScale,
                  3.75 * flameCoreScale,
                  4.52 * flameCoreScale,
                ]
          }
        />
      </group>

      {/* agent / node layer */}
      {allNodes.map((pos, i) => {
        const isOuter = i < outerNodes.length;
        const isMid = i >= outerNodes.length && i < outerNodes.length + midNodes.length;
        const size = isOuter ? 0.14 : isMid ? 0.11 : 0.12;
        const emissive = i % 2 === 0 ? amber : cyan;

        return (
          <mesh
            key={`node-${i}`}
            ref={(el) => {
              nodeRefs.current[i] = el;
            }}
            position={pos}
            castShadow
          >
            <sphereGeometry args={[size, 16, 16]} />
            <meshStandardMaterial
              color={isLight ? "#ffffff" : "#181d24"}
              metalness={0.8}
              roughness={0.2}
              emissive={emissive}
              emissiveIntensity={isLight ? 0.14 : 0.48}
            />
          </mesh>
        );
      })}

      {/* small satellites */}
      {satellitePoints.map((pos, i) => (
        <mesh key={`sat-${i}`} position={pos}>
          <sphereGeometry args={[0.045, 10, 10]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? amber : cyan}
            transparent
            opacity={isLight ? 0.28 : 0.38}
          />
        </mesh>
      ))}
    </group>
  );
}