"use client";

import { Canvas } from "@react-three/fiber";
import { BeaconScene } from "./BeaconScene";
import { Suspense } from "react";

export function BeaconCanvas({
  lowPower,
  colorMode = "dark",
}: {
  lowPower?: boolean;
  colorMode?: "light" | "dark";
}) {
  const bg = colorMode === "light" ? "#faf9f6" : "#020203";

  return (
    <Canvas
      shadows={!lowPower}
      gl={{
        antialias: !lowPower,
        alpha: false,
        powerPreference: lowPower ? "low-power" : "high-performance",
      }}
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 9], fov: 42, near: 0.1, far: 100 }}
      style={{ background: bg }}
    >
      <Suspense fallback={null}>
        <BeaconScene lowPower={lowPower} colorMode={colorMode} />
      </Suspense>
    </Canvas>
  );
}
