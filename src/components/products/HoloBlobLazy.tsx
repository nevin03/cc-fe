"use client";

import dynamic from "next/dynamic";

/** Loads Three.js only in the browser, after the page has rendered. */
export const HoloBlobLazy = dynamic(() => import("./HoloBlob"), { ssr: false });
