/**
 * GLSL for the holographic morphing blob.
 * Vertex: displaces a sphere along its normal with one slow simplex-noise swell and
 * recomputes the normal from neighbouring samples. Fragment: maps the surface angle
 * onto the reference palette, with a glossy highlight and soft fresnel rim.
 */

// 3D simplex noise — Ian McEwan / Ashima Arts (MIT).
const simplexNoise = /* glsl */ `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
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
  vec3 ns = n_ * D.wyz - D.xzx;
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
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}
`;

export const vertexShader = /* glsl */ `
uniform float uTime;
varying vec3 vNormal;
varying vec3 vViewDir;
varying float vNoise;
varying float vStreak;

${simplexNoise}

// One slow, low-frequency swell: a single soft, pillowy lump that gently morphs.
float displacement(vec3 p) {
  return snoise(p * 0.55 + vec3(uTime * 0.1, uTime * 0.08, -uTime * 0.06)) * 0.28;
}

vec3 orthogonal(vec3 v) {
  return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0) : vec3(0.0, -v.z, v.y));
}

void main() {
  vec3 n = normalize(normal);
  float d = displacement(position);
  vec3 displaced = position + n * d;

  // Recompute the normal from two nearby displaced neighbours.
  float eps = 0.01;
  vec3 tangent = orthogonal(n);
  vec3 bitangent = normalize(cross(n, tangent));
  vec3 pt = position + tangent * eps;
  vec3 pb = position + bitangent * eps;
  vec3 dt = pt + normalize(pt) * displacement(pt);
  vec3 db = pb + normalize(pb) * displacement(pb);
  vec3 displacedNormal = normalize(cross(dt - displaced, db - displaced));

  vec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);
  vNormal = normalize(normalMatrix * displacedNormal);
  vViewDir = normalize(-mvPosition.xyz);
  vNoise = d;
  // Second, broad field used only for colour bands, so the silhouette stays smooth.
  vStreak = snoise(position * 0.9 + vec3(0.0, uTime * 0.1, uTime * 0.04));
  gl_Position = projectionMatrix * mvPosition;
}
`;

export const fragmentShader = /* glsl */ `
uniform float uTime;
varying vec3 vNormal;
varying vec3 vViewDir;
varying float vNoise;
varying float vStreak;

// Reference palette: periwinkle/violet base, cyan glints, pink-magenta folds, lavender sheen.
const vec3 VIOLET = vec3(0.49, 0.45, 1.00);
const vec3 PERIWINKLE = vec3(0.60, 0.62, 1.00);
const vec3 CYAN = vec3(0.32, 0.88, 1.00);
const vec3 PINK = vec3(0.93, 0.48, 0.96);
const vec3 LAVENDER = vec3(0.92, 0.90, 1.00);

void main() {
  vec3 n = normalize(vNormal);
  vec3 v = normalize(vViewDir);
  float facing = max(dot(n, v), 0.0);
  float fresnel = pow(1.0 - facing, 2.0);
  float drift = sin(uTime * 0.15) * 0.15;

  // Base: violet in shadow, periwinkle toward the top.
  vec3 color = mix(VIOLET, PERIWINKLE, smoothstep(-0.6, 0.8, n.y));
  // Cyan glints on the left-facing side.
  color = mix(color, CYAN, smoothstep(0.25, 0.95, -n.x * 0.9 + vNoise * 1.2 + vStreak * 0.5 + drift) * 0.8);
  // Pink-magenta pooling in the lower-right folds.
  color = mix(color, PINK, smoothstep(0.15, 0.85, n.x * 0.6 - n.y * 0.7 - vNoise * 1.0 - vStreak * 0.45 - drift) * 0.85);

  // Soft glossy highlight and a lavender sheen at the silhouette.
  vec3 lightDir = normalize(vec3(-0.4, 0.7, 0.6));
  float spec = pow(max(dot(reflect(-lightDir, n), v), 0.0), 28.0);
  color += vec3(spec * 0.22);
  color = mix(color, LAVENDER, fresnel * 0.5);

  gl_FragColor = vec4(color, 1.0);
}
`;
