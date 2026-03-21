"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useScrollProgress } from "@/contexts/ScrollProgressContext";
import {
  createFireRampTexture,
  createMattatzFireMaterial,
  updateMattatzFireUniforms,
} from "./mattatzFire";

const _inv = /* @__PURE__ */ new THREE.Matrix4();

export function MattatzFireCore({
  lowPower,
  colorHex,
  position = [0, -1.35, 0],
  scale = [0.52, 2.75, 0.52],
}: {
  lowPower?: boolean;
  colorHex: string;
  position?: [number, number, number];
  scale?: [number, number, number];
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { progressRef } = useScrollProgress();
  const flameColor = useMemo(() => new THREE.Color(colorHex), [colorHex]);

  const texture = useMemo(() => createFireRampTexture(), []);

  const material = useMemo(() => {
    return createMattatzFireMaterial(texture, flameColor, {
      iterations: lowPower ? 12 : 20,
      octives: 3,
    });
  }, [texture, flameColor, lowPower]);

  useEffect(() => {
    return () => {
      texture.dispose();
    };
  }, [texture]);

  useEffect(() => {
    return () => {
      material.dispose();
    };
  }, [material]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    updateMattatzFireUniforms(meshRef.current, clock.elapsedTime, _inv);
    const mat = meshRef.current.material as THREE.ShaderMaterial;
    const p = progressRef.current;
    const expand = THREE.MathUtils.smoothstep(p, 0.18, 0.55);
    mat.uniforms.color.value.copy(flameColor).multiplyScalar(0.82 + expand * 0.58);
  });

  return (
    <mesh ref={meshRef} material={material} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
    </mesh>
  );
}
