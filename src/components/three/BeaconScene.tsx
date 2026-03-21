"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { CoreNetwork } from "./CoreNetwork";
import { useScrollProgress } from "@/contexts/ScrollProgressContext";

export function BeaconScene({
  lowPower,
  colorMode = "dark",
}: {
  lowPower?: boolean;
  colorMode?: "light" | "dark";
}) {
  const { progressRef } = useScrollProgress();
  const target = useRef(new THREE.Vector3(0, 0, 0));
  const isLight = colorMode === "light";

  useFrame((state) => {
    const p = progressRef.current;
    const cam = state.camera as THREE.PerspectiveCamera;
    cam.position.z = 9 - p * 3.2;
    cam.position.x = THREE.MathUtils.lerp(
      cam.position.x,
      Math.sin(p * Math.PI * 2) * 0.55,
      0.06
    );
    cam.position.y = THREE.MathUtils.lerp(
      cam.position.y,
      Math.cos(p * Math.PI) * 0.2,
      0.06
    );
    cam.lookAt(target.current);
  });

  const bg = isLight ? "#faf9f6" : "#020203";

  return (
    <>
      <color attach="background" args={[bg]} />
      <ambientLight intensity={isLight ? 0.42 : 0.18} />
      <spotLight
        position={[6, 8, 6]}
        angle={0.35}
        penumbra={0.85}
        intensity={isLight ? 0.75 : 1.15}
        color={isLight ? "#f5eef8" : "#e8dcc8"}
        castShadow={!lowPower}
      />
      <pointLight position={[-4, -2, 4]} intensity={isLight ? 0.45 : 0.9} color="#87158c" />
      <pointLight position={[3, -4, -2]} intensity={isLight ? 0.35 : 0.55} color="#87158c" />

      <Float speed={lowPower ? 0.4 : 0.75} rotationIntensity={0.15} floatIntensity={0.35}>
        <CoreNetwork lowPower={lowPower} colorMode={colorMode} />
      </Float>
    </>
  );
}
