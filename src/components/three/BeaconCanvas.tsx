"use client";

import { Canvas } from "@react-three/fiber";
import { BeaconScene } from "./BeaconScene";
import { Suspense } from "react";
import * as THREE from "three";

export function BeaconCanvas({
  lowPower,
  colorMode = "dark",
}: {
  lowPower?: boolean;
  colorMode?: "light" | "dark";
}) {
  const bg = colorMode === "light" ? "#f8f5ef" : "#020304";

  return (
    <Canvas
      shadows={!lowPower}
      gl={{
        antialias: !lowPower,
        alpha: false,
        powerPreference: lowPower ? "low-power" : "high-performance",
      }}
      dpr={lowPower ? [1, 1.25] : [1, 2]}
      camera={{ position: [0, 0.4, 12.2], fov: 38, near: 0.1, far: 100 }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = lowPower ? 0.95 : 1.05;
      }}
      style={{ background: bg }}
    >
      <Suspense fallback={null}>
        <BeaconScene lowPower={lowPower} colorMode={colorMode} />
      </Suspense>
    </Canvas>
  );
}