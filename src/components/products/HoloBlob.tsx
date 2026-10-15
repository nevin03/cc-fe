"use client";

import { useEffect, useRef } from "react";
import {
  IcosahedronGeometry,
  Mesh,
  PerspectiveCamera,
  Scene,
  ShaderMaterial,
  WebGLRenderer,
} from "three";
import { cn } from "@/lib/cn";
import { fragmentShader, vertexShader } from "./holoBlobShaders";

const GEOMETRY_DETAIL = 48;
const MAX_PIXEL_RATIO = 2;

/** Morphing holographic blob rendered with Three.js; pauses off-screen and for reduced motion. */
export default function HoloBlob({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, MAX_PIXEL_RATIO));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const scene = new Scene();
    const camera = new PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.z = 4.2;

    const geometry = new IcosahedronGeometry(1, GEOMETRY_DETAIL);
    const material = new ShaderMaterial({ vertexShader, fragmentShader, uniforms: { uTime: { value: 0 } } });
    const blob = new Mesh(geometry, material);
    scene.add(blob);

    const resize = () => {
      const { clientWidth: width, clientHeight: height } = container;
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resize();

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = performance.now();
    let frame = 0;
    let visible = true;

    const render = () => {
      const time = (performance.now() - start) / 1000;
      material.uniforms.uTime.value = time;
      blob.rotation.y = time * 0.12;
      blob.rotation.x = Math.sin(time * 0.2) * 0.2;
      renderer.render(scene, camera);
    };

    const loop = () => {
      render();
      if (visible && !reducedMotion) frame = requestAnimationFrame(loop);
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (!visible || reducedMotion) render();
    });
    resizeObserver.observe(container);

    // Only animate while on screen.
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(frame);
      if (visible) loop();
    });
    visibilityObserver.observe(container);

    loop();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={containerRef} aria-hidden="true" className={cn("[&>canvas]:block [&>canvas]:size-full", className)} />;
}
