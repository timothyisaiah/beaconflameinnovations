"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
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
  const target = useRef(new THREE.Vector3(0, 0.2, 0));
  const isLight = colorMode === "light";
  const bg = isLight ? "#f8f5ef" : "#020304";

  useFrame((state) => {
    const p = progressRef.current;
    const cam = state.camera as THREE.PerspectiveCamera;

    const intro = THREE.MathUtils.smoothstep(p, 0.0, 0.2);
    const expand = THREE.MathUtils.smoothstep(p, 0.2, 0.58);
    const settle = THREE.MathUtils.smoothstep(p, 0.58, 1.0);

    const desiredX =
      -1.15 + expand * 1.45 + Math.sin(p * Math.PI * 2.1) * 0.18 + state.pointer.x * 0.34;
    const desiredY =
      0.82 - intro * 0.28 - settle * 0.52 + state.pointer.y * 0.18;
    const desiredZ =
      12.2 - intro * 1.9 - expand * 2.15 - settle * 1.1;

    cam.position.x = THREE.MathUtils.lerp(cam.position.x, desiredX, 0.05);
    cam.position.y = THREE.MathUtils.lerp(cam.position.y, desiredY, 0.05);
    cam.position.z = THREE.MathUtils.lerp(cam.position.z, desiredZ, 0.06);

    target.current.x = THREE.MathUtils.lerp(target.current.x, 0.15 - settle * 0.22, 0.05);
    target.current.y = THREE.MathUtils.lerp(target.current.y, 0.18 + expand * 0.22, 0.05);
    target.current.z = THREE.MathUtils.lerp(target.current.z, 0, 0.05);

    cam.lookAt(target.current);
  });

  return (
    <>
      <color attach="background" args={[bg]} />
      <fog attach="fog" args={[bg, isLight ? 18 : 12, 30]} />

      <ambientLight intensity={isLight ? 0.34 : 0.12} />

      <hemisphereLight
        intensity={isLight ? 0.46 : 0.22}
        color={isLight ? "#fff8f0" : "#18212d"}
        groundColor={isLight ? "#d8c9b5" : "#040608"}
      />

      <spotLight
        position={[7, 8, 8]}
        angle={0.34}
        penumbra={0.95}
        intensity={isLight ? 1.1 : 1.9}
        color={isLight ? "#f2c58a" : "#ffb95f"}
        castShadow={!lowPower}
      />

      <pointLight
        position={[-6, 2, 4]}
        intensity={isLight ? 0.38 : 0.95}
        color={isLight ? "#6c9bff" : "#79d8ff"}
      />

      <pointLight
        position={[3, -4, -5]}
        intensity={isLight ? 0.24 : 0.52}
        color={isLight ? "#ffe8cb" : "#ffd39c"}
      />

      <CoreNetwork lowPower={lowPower} colorMode={colorMode} />
    </>
  );
}