/**
 * Volumetric fire (mattatz / three.js fire): raymarched procedural flame in a box.
 * Ported from FireShader.js + Fire.js; uses a procedural ramp texture (demo used firetex PNG).
 */
import * as THREE from "three";

export const MATTATZ_FIRE_DEFINES = {
  ITERATIONS: "20",
  OCTIVES: "3",
} as const;

export const mattatzFireVertexShader = /* glsl */ `
  varying vec3 vWorldPos;
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
  }
`;

export const mattatzFireFragmentShader = /* glsl */ `
  uniform vec3 color;
  uniform float time;
  uniform float seed;
  uniform mat4 invModelMatrix;
  uniform vec3 scale;
  uniform vec4 noiseScale;
  uniform float magnitude;
  uniform float lacunarity;
  uniform float gain;
  uniform float coneBase;
  uniform float coneTip;
  uniform sampler2D fireTex;
  varying vec3 vWorldPos;

  vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }
  vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }
  vec4 permute(vec4 x) {
    return mod289(((x * 34.0) + 1.0) * x);
  }
  vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
  }
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3  ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
  }

  float turbulence(vec3 p) {
    float sum = 0.0;
    float freq = 1.0;
    float amp = 1.0;
    for(int i = 0; i < OCTIVES; i++) {
      sum += abs(snoise(p * freq)) * amp;
      freq *= lacunarity;
      amp *= gain;
    }
    return sum;
  }

  vec4 samplerFire(vec3 p, vec4 scale) {
    float radial = sqrt(dot(p.xz, p.xz));
    float h = p.y;
    if(h <= 0.0 || h >= 1.0) return vec4(0.0);
    float rMax = mix(coneTip, coneBase, 1.0 - h);
    if(radial > rMax) return vec4(0.0);
    float radialNorm = radial / max(rMax, 0.0001);
    vec2 st = vec2(radialNorm, h);
    p.y -= (seed + time) * scale.w;
    p *= scale.xyz;
    st.y += sqrt(st.y) * magnitude * turbulence(p);
    if(st.y <= 0.0 || st.y >= 1.0) return vec4(0.0);
    return texture2D(fireTex, st);
  }

  vec3 localize(vec3 p) {
    return (invModelMatrix * vec4(p, 1.0)).xyz;
  }

  void main() {
    vec3 rayPos = vWorldPos;
    vec3 rayDir = normalize(rayPos - cameraPosition);
    float rayLen = 0.0288 * length(scale.xyz);
    vec4 col = vec4(0.0);
    for(int i = 0; i < ITERATIONS; i++) {
      rayPos += rayDir * rayLen;
      vec3 lp = localize(rayPos);
      lp.y += 0.5;
      lp.xz *= 2.0;
      col += samplerFire(lp, noiseScale);
    }
    col.rgb *= color;
    col.a = col.r;
    gl_FragColor = col;
  }
`;

export function createFireRampTexture(): THREE.DataTexture {
  const w = 64;
  const h = 64;
  const data = new Uint8Array(w * h * 4);
  for (let y = 0; y < h; y++) {
    const v = y / (h - 1);
    for (let x = 0; x < w; x++) {
      const u = x / (w - 1);
      const radial = Math.abs(u - 0.5) * 2;
      const edgeFade = 1.0 - THREE.MathUtils.smoothstep(0.32, 1.0, radial);
      const heat = 1.0 - Math.pow(1.0 - v, 2.1);
      const r = THREE.MathUtils.lerp(0.08, 1.0, heat) * edgeFade;
      const g = THREE.MathUtils.lerp(0.02, 0.92, v) * edgeFade;
      const b = THREE.MathUtils.lerp(0.0, 0.42, v * 0.65) * edgeFade;
      const i = (y * w + x) * 4;
      data[i] = Math.floor(r * 255);
      data[i + 1] = Math.floor(g * 255);
      data[i + 2] = Math.floor(b * 255);
      data[i + 3] = 255;
    }
  }
  const tex = new THREE.DataTexture(data, w, h);
  tex.needsUpdate = true;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearFilter;
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function createMattatzFireMaterial(
  fireTex: THREE.Texture,
  flameColor: THREE.Color,
  options?: { iterations?: number; octives?: number }
): THREE.ShaderMaterial {
  const iterations = String(options?.iterations ?? 20);
  const octives = String(options?.octives ?? 3);
  return new THREE.ShaderMaterial({
    defines: {
      ITERATIONS: iterations,
      OCTIVES: octives,
    },
    uniforms: {
      fireTex: { value: fireTex },
      color: { value: flameColor.clone() },
      time: { value: 0 },
      seed: { value: Math.random() * 19.19 },
      invModelMatrix: { value: new THREE.Matrix4() },
      scale: { value: new THREE.Vector3(1, 1, 1) },
      noiseScale: { value: new THREE.Vector4(1, 2, 1, 0.3) },
      magnitude: { value: 1.3 },
      lacunarity: { value: 2.0 },
      gain: { value: 0.5 },
      coneBase: { value: 1.0 },
      coneTip: { value: 0.07 },
    },
    vertexShader: mattatzFireVertexShader,
    fragmentShader: mattatzFireFragmentShader,
    transparent: true,
    depthWrite: false,
    depthTest: true,
  });
}

export function updateMattatzFireUniforms(
  mesh: THREE.Mesh,
  time: number,
  invModelMatrix: THREE.Matrix4
) {
  const mat = mesh.material as THREE.ShaderMaterial;
  mesh.updateMatrixWorld();
  invModelMatrix.copy(mesh.matrixWorld).invert();
  mat.uniforms.invModelMatrix.value.copy(invModelMatrix);
  mat.uniforms.time.value = time;
  mat.uniforms.scale.value.copy(mesh.scale);
}

/**
 * Logo flame shader: alpha-masked heat distortion + emissive flame.
 * Ported from `animation-tool/src/flame.js`, adapted to Three.js geometry with UVs.
 */
export const logoFlameVertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const logoFlameFragmentShader = /* glsl */ `
  precision mediump float;

  varying vec2 vUv;
  uniform sampler2D uTex;
  uniform float uTime;
  uniform float uIntensity;

  float hash21(vec2 p){
    p = fract(p * vec2(123.34, 345.45));
    p += dot(p, p + 34.345);
    return fract(p.x * p.y);
  }

  float noise(vec2 p){
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash21(i);
    float b = hash21(i + vec2(1.0, 0.0));
    float c = hash21(i + vec2(0.0, 1.0));
    float d = hash21(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  float fbm(vec2 p){
    float v = 0.0;
    float a = 0.5;
    for(int i=0;i<4;i++){
      v += a * noise(p);
      p = p * 2.02 + vec2(13.1, 7.7);
      a *= 0.5;
    }
    return v;
  }

  void main(){
    vec2 imgUv = vUv;
    float I = clamp(uIntensity, 0.0, 1.0);

    vec4 base0 = texture2D(uTex, imgUv);
    float mask0 = base0.a;
    if(mask0 <= 0.001){
      gl_FragColor = vec4(0.0);
      return;
    }

    float bottom = pow(1.0 - imgUv.y, 1.55);

    float n1 = fbm(vec2(imgUv.x * 3.2, imgUv.y * 6.0 - uTime * (0.65 + 1.2 * I)));
    float n2 = fbm(vec2(imgUv.x * 6.0 + 2.0, imgUv.y * 10.0 - uTime * (1.1 + 2.1 * I)));
    float n = mix(n1, n2, 0.5);

    float dy = (n - 0.5) * (0.014 + 0.060 * I) * bottom;
    float dx = (fbm(vec2(imgUv.y * 3.0, imgUv.x * 3.0 + uTime * 0.35)) - 0.5) * (0.004 + 0.014 * I) * bottom;
    vec2 duv = imgUv + vec2(dx, -abs(dy));

    vec4 base = texture2D(uTex, duv);
    float mask = base.a;
    if(mask <= 0.001){
      gl_FragColor = vec4(0.0);
      return;
    }

    float flameNoise = fbm(vec2(imgUv.x * 4.0, imgUv.y * 8.5 - uTime * (0.9 + 1.8 * I)));
    float flame = smoothstep(0.18, 0.88, bottom + (flameNoise - 0.5) * (0.55 + 0.9 * I));
    flame *= smoothstep(0.0, 0.95, 1.0 - imgUv.y);
    flame *= (0.35 + 0.65 * mask);

    vec3 c1 = vec3(1.00, 0.28, 0.05);
    vec3 c2 = vec3(1.00, 0.74, 0.10);
    vec3 c3 = vec3(1.00, 0.98, 0.88);
    float hot = clamp(flameNoise * 1.25, 0.0, 1.0);
    vec3 flameCol = mix(c1, c2, smoothstep(0.0, 0.8, hot));
    flameCol = mix(flameCol, c3, smoothstep(0.72, 1.0, hot));

    float edge = smoothstep(0.10, 0.70, mask) - smoothstep(0.70, 0.98, mask);
    edge = clamp(edge, 0.0, 1.0);

    float burn = flame * (0.30 + 0.85 * I);
    vec3 col = base.rgb * (1.0 - burn * 0.45) + flameCol * burn;

    float glow = (burn * 0.20 + edge * (0.10 + 0.35 * I)) * (0.55 + 0.45 * bottom);
    col += flameCol * glow;

    float outA = clamp(mask + glow * 0.35, 0.0, 1.0);
    gl_FragColor = vec4(col, outA);
  }
`;

export function createLogoFlameMaterial(
  tex: THREE.Texture,
  options?: { intensity?: number }
): THREE.ShaderMaterial {
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.colorSpace = THREE.SRGBColorSpace;

  return new THREE.ShaderMaterial({
    uniforms: {
      uTex: { value: tex },
      uTime: { value: 0 },
      uIntensity: { value: options?.intensity ?? 0.8 },
    },
    vertexShader: logoFlameVertexShader,
    fragmentShader: logoFlameFragmentShader,
    transparent: true,
    depthWrite: false,
    depthTest: true,
    side: THREE.DoubleSide,
  });
}

export function updateLogoFlameUniforms(
  mesh: THREE.Mesh,
  time: number,
  intensity01: number
) {
  const mat = mesh.material as THREE.ShaderMaterial;
  mat.uniforms.uTime.value = time;
  mat.uniforms.uIntensity.value = THREE.MathUtils.clamp(intensity01, 0, 1);
}
