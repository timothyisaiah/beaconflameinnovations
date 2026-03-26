"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { useScrollProgress } from "@/contexts/ScrollProgressContext";
import {
  createLogoFlameMaterial,
  updateLogoFlameUniforms,
} from "./mattatzFire";

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
  const logoTex = useTexture("/assets/logo-mark.png");

  const material = useMemo(() => {
    return createLogoFlameMaterial(logoTex, {
      intensity: lowPower ? 0.68 : 0.82,
    });
  }, [logoTex, lowPower]);

  useEffect(() => {
    return () => {
      material.dispose();
    };
  }, [material]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const p = progressRef.current;
    const expand = THREE.MathUtils.smoothstep(p, 0.18, 0.55);
    updateLogoFlameUniforms(
      meshRef.current,
      clock.elapsedTime,
      (lowPower ? 0.68 : 0.82) + expand * 0.14
    );
  });

  return (
    <mesh ref={meshRef} material={material} position={position} scale={scale}>
      <planeGeometry args={[1, 1, 1, 1]} />
    </mesh>
  );
}
