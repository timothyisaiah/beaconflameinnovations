"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Line } from "@react-three/drei";
import { useScrollProgress } from "@/contexts/ScrollProgressContext";

const NODE_COUNT = 10;

function ringPoint(i: number, r: number, y: number): [number, number, number] {
  const a = (i / NODE_COUNT) * Math.PI * 2;
  return [Math.cos(a) * r, y, Math.sin(a) * r];
}

export function CoreNetwork({
  lowPower,
  colorMode = "dark",
}: {
  lowPower?: boolean;
  colorMode?: "light" | "dark";
}) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const { progressRef } = useScrollProgress();
  const isLight = colorMode === "light";

  const coreSurface = isLight ? "#ece8f0" : "#0a0a0c";
  const wireColor = isLight ? "#c084d4" : "#9d4ba3";
  const nodeEmissive = isLight ? "#87158c" : "#87158c";
  const lineMuted = isLight ? "#b8a4c8" : "#3d4a5c";
  const particleColor = isLight ? "#87158c" : "#c084d4";

  const { nodePositions, linePairs } = useMemo(() => {
    const nodes: [number, number, number][] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push(
        ringPoint(i, 2.35, Math.sin((i / NODE_COUNT) * Math.PI * 2) * 0.25)
      );
    }
    const pairs: [number, number][] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      pairs.push([i, (i + 1) % NODE_COUNT]);
      pairs.push([i, (i + 3) % NODE_COUNT]);
    }
    return { nodePositions: nodes, linePairs: pairs };
  }, []);

  useFrame((state) => {
    const p = progressRef.current;
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.06 + p * Math.PI * 0.85;
      groupRef.current.rotation.x =
        Math.sin(p * Math.PI) * 0.12 + Math.sin(t * 0.2) * 0.03;
    }
    if (coreRef.current) {
      const mat = coreRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = (isLight ? 0.35 : 0.52) + p * (isLight ? 0.15 : 0.28);
      const s = 1 + p * 0.35 + Math.sin(t * 0.4) * 0.02;
      coreRef.current.scale.setScalar(s);
    }
  });

  const particleCount = lowPower ? 0 : 4;

  return (
    <group ref={groupRef}>
      <mesh ref={coreRef} castShadow receiveShadow>
        <torusKnotGeometry args={[1.05, 0.28, 160, 24]} />
        <meshStandardMaterial
          color={coreSurface}
          metalness={isLight ? 0.75 : 0.92}
          roughness={isLight ? 0.28 : 0.22}
          emissive="#87158c"
          emissiveIntensity={isLight ? 0.35 : 0.52}
        />
      </mesh>

      <mesh>
        <torusKnotGeometry args={[1.05, 0.28, 160, 24]} />
        <meshBasicMaterial
          color={wireColor}
          wireframe
          transparent
          opacity={isLight ? 0.18 : 0.12}
        />
      </mesh>

      {nodePositions.map((pos, i) => (
        <mesh key={i} position={pos} castShadow>
          <sphereGeometry args={[lowPower ? 0.11 : 0.13, 16, 16]} />
          <meshStandardMaterial
            color={isLight ? "#f0ecf5" : "#1a1d24"}
            metalness={0.85}
            roughness={0.25}
            emissive={nodeEmissive}
            emissiveIntensity={isLight ? 0.22 : 0.35}
          />
        </mesh>
      ))}

      {linePairs.map(([a, b], i) => (
        <Line
          key={`${a}-${b}-${i}`}
          points={[
            new THREE.Vector3(...nodePositions[a]),
            new THREE.Vector3(...nodePositions[b]),
          ]}
          color={lineMuted}
          lineWidth={lowPower ? 1 : 1.2}
          transparent
          opacity={isLight ? 0.35 : 0.45}
        />
      ))}

      {nodePositions.slice(0, 5).map((pos, i) => (
        <Line
          key={`hub-${i}`}
          points={[new THREE.Vector3(0, 0, 0), new THREE.Vector3(...pos)]}
          color="#87158c"
          lineWidth={lowPower ? 0.8 : 1}
          transparent
          opacity={isLight ? 0.14 : 0.2}
        />
      ))}

      {particleCount > 0 &&
        Array.from({ length: particleCount }).map((_, i) => (
          <mesh
            key={`p-${i}`}
            position={[
              Math.cos(i * 1.7) * 3.2,
              Math.sin(i * 0.9) * 1.1,
              Math.sin(i * 1.7) * 3.2,
            ]}
          >
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshBasicMaterial
              color={particleColor}
              transparent
              opacity={isLight ? 0.28 : 0.35}
            />
          </mesh>
        ))}
    </group>
  );
}
