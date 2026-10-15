"use client";

import { useEffect, useRef } from "react";
import { Mesh, OrthographicCamera, PlaneGeometry, Scene, ShaderMaterial, Vector2, WebGLRenderer } from "three";
import { cn } from "@/lib/cn";
import { fragmentShader, vertexShader } from "./genAiSphereShaders";

/** A full-section fragment shader is fill-rate heavy, so cap the pixel ratio lower than the blob's. */
const MAX_PIXEL_RATIO = 1.5;

/** Animated glass sphere backdrop rendered as a full-screen shader; pauses off-screen and for reduced motion. */
export default function GenAiSphere({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new WebGLRenderer({ antialias: false, powerPreference: "low-power" });
    const pixelRatio = Math.min(window.devicePixelRatio, MAX_PIXEL_RATIO);
    renderer.setPixelRatio(pixelRatio);
    container.appendChild(renderer.domElement);

    const scene = new Scene();
    const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geometry = new PlaneGeometry(2, 2);
    const material = new ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: { uTime: { value: 0 }, uResolution: { value: new Vector2(1, 1) } },
    });
    scene.add(new Mesh(geometry, material));

    const resize = () => {
      const { clientWidth: width, clientHeight: height } = container;
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      material.uniforms.uResolution.value.set(width * pixelRatio, height * pixelRatio);
    };
    resize();

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = performance.now();
    let frame = 0;
    let visible = true;

    const render = () => {
      material.uniforms.uTime.value = (performance.now() - start) / 1000;
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
