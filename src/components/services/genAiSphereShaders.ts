// Full-screen quad shaders for the Gen AI glass sphere backdrop.

export const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

export const fragmentShader = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform vec2 uResolution;
  varying vec2 vUv;

  // --- noise -------------------------------------------------------------
  float hash(vec3 p) {
    p = fract(p * 0.3183099 + 0.1);
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }

  float noise(vec3 x) {
    vec3 i = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(mix(hash(i), hash(i + vec3(1, 0, 0)), f.x), mix(hash(i + vec3(0, 1, 0)), hash(i + vec3(1, 1, 0)), f.x), f.y),
      mix(mix(hash(i + vec3(0, 0, 1)), hash(i + vec3(1, 0, 1)), f.x), mix(hash(i + vec3(0, 1, 1)), hash(i + vec3(1, 1, 1)), f.x), f.y),
      f.z
    );
  }

  float fbm(vec3 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p = p * 2.03 + vec3(1.7, 9.2, 4.1);
      a *= 0.5;
    }
    return v;
  }

  mat3 rotY(float a) { float c = cos(a), s = sin(a); return mat3(c, 0, -s, 0, 1, 0, s, 0, c); }
  mat3 rotX(float a) { float c = cos(a), s = sin(a); return mat3(1, 0, 0, 0, c, s, 0, -s, c); }

  // Blue -> violet -> magenta -> coral, cycling with t.
  vec3 rimPalette(float t) {
    vec3 blue = vec3(0.23, 0.42, 1.0);
    vec3 violet = vec3(0.46, 0.15, 0.92);
    vec3 magenta = vec3(0.85, 0.05, 0.75);
    vec3 coral = vec3(1.0, 0.36, 0.55);
    t = fract(t) * 4.0;
    if (t < 1.0) return mix(blue, violet, t);
    if (t < 2.0) return mix(violet, magenta, t - 1.0);
    if (t < 3.0) return mix(magenta, coral, t - 2.0);
    return mix(coral, blue, t - 3.0);
  }

  void main() {
    vec2 frag = vUv * uResolution;
    float t = uTime;

    // Sphere sits slightly below centre and overflows the section on small screens.
    vec2 center = vec2(0.5 * uResolution.x, 0.46 * uResolution.y);
    float radius = min(uResolution.y * 0.6, uResolution.x * 0.62);
    vec2 p = (frag - center) / radius;
    float d = length(p);
    float angle = atan(p.y, p.x);

    // --- ambient background -------------------------------------------------
    vec2 suv = vUv * vec2(uResolution.x / uResolution.y, 1.0);
    float aspect = uResolution.x / uResolution.y;
    vec3 col = vec3(0.008, 0.003, 0.03);
    float breathe = 0.85 + 0.15 * sin(t * 0.4);
    col += vec3(0.42, 0.02, 0.36) * smoothstep(1.1, 0.0, distance(suv, vec2(0.0, 1.05))) * 0.3 * breathe;
    col += vec3(0.05, 0.1, 0.55) * smoothstep(1.2, 0.0, distance(suv, vec2(aspect, -0.05))) * 0.32 * (1.15 - 0.15 * breathe);

    // --- rim lighting: bright arcs that drift around the edge ---------------
    float sweep = 0.55 + 0.45 * cos(angle - 2.4 + sin(t * 0.25) * 0.6);
    float sweep2 = 0.5 + 0.5 * cos(angle * 2.0 + 0.8 - t * 0.18);
    float rimStrength = 0.2 + 0.8 * pow(sweep, 2.0) + 0.35 * sweep2;
    vec3 rimColor = rimPalette(angle / 6.2831 + 0.62 + t * 0.03);

    // --- sphere body -------------------------------------------------------
    if (d < 1.0) {
      float z = sqrt(1.0 - d * d);
      vec3 n = vec3(p, z);
      float fresnel = pow(1.0 - z, 3.0);

      // Deep indigo glass, lifted toward the top.
      vec3 body = mix(vec3(0.012, 0.006, 0.05), vec3(0.06, 0.03, 0.22), smoothstep(-0.9, 0.9, p.y) * 0.7);
      body *= 0.65 + 0.35 * z;

      // Nebula wisps flowing over the surface.
      vec3 q = rotX(0.35) * rotY(t * 0.06) * n;
      float warp = fbm(q * 1.6 + vec3(0.0, t * 0.05, 0.0));
      float wisps = fbm(q * 3.2 + warp * 1.8 + vec3(t * 0.04, 0.0, -t * 0.03));
      wisps = smoothstep(0.42, 0.85, wisps);
      body += mix(vec3(0.18, 0.12, 0.7), vec3(0.55, 0.12, 0.6), warp) * wisps * 0.2 * (0.4 + 0.6 * fresnel + 0.3 * z);

      // Fine glassy streaks.
      float streak = fbm(vec3(p * 9.0, t * 0.1)) * fbm(q * 7.0);
      body += vec3(0.25, 0.2, 0.75) * smoothstep(0.32, 0.6, streak) * 0.06;

      // Inner rim glow bleeding into the glass.
      body += rimColor * fresnel * rimStrength * 0.6;

      // Soft top specular highlight.
      body += vec3(0.35, 0.3, 0.9) * pow(max(dot(n, normalize(vec3(-0.2, 0.75, 0.6))), 0.0), 18.0) * 0.18;

      float edge = smoothstep(1.0, 0.985, d);
      col = mix(col, body, edge);
    }

    // Crisp rim line plus a faint second line for the glass thickness.
    float px = 1.0 / radius;
    float line = exp(-abs(d - 1.0) / (px * 1.6));
    float inner = exp(-abs(d - 0.975) / (px * 2.5)) * 0.25;
    vec3 whiteHot = mix(rimColor, vec3(1.0, 0.92, 1.0), 0.35 * pow(sweep, 4.0));
    col += whiteHot * (line * 1.4 + inner) * rimStrength;

    // Outer halo.
    float halo = d > 1.0 ? exp(-(d - 1.0) * 9.0) : 0.0;
    float bloom = exp(-abs(d - 1.0) * 26.0);
    col += rimColor * (halo * 0.3 + bloom * 0.3) * rimStrength;

    // Tone map, then film grain against banding.
    col = 1.0 - exp(-col * 1.35);
    float grain = hash(vec3(frag, floor(t * 24.0))) - 0.5;
    col += grain * 0.035;

    gl_FragColor = vec4(col, 1.0);
  }
`;
