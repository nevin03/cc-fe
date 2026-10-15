/** Header design tokens (white bar, Stitch light-screen navigation styling). */
export const headerStyles = {
  height: "h-20",
  shell: "bg-white border-surface-container-highest/60 shadow-[0_2px_12px_rgba(80,3,192,0.04)]",
  // Solid blue wordmark matching the cat logo (rendered via bg-clip-text, so the colour comes from the background).
  brand: "bg-[#2563EB] font-extrabold",
  link: "text-body-md text-on-surface-variant hover:text-electric-purple",
  active: "text-title-md text-electric-purple border-b-2 border-electric-purple pb-0.5",
  toggle: "text-electric-purple hover:bg-surface-container",
  panel: "bg-white border-surface-container-highest/60",
} as const;

/** Overrides while the header floats over the dark Home, About, and Services sections (black bar on Services): fully transparent, white text. */
export const headerOverlayStyles = {
  shell: "bg-transparent border-transparent shadow-none",
  /** Solid black bar variant (Services). */
  solidShell: "bg-black",
  brand: "bg-white font-extrabold",
  link: "text-body-md text-white/80 hover:text-white",
  active: "text-title-md text-white border-b-2 border-white pb-0.5",
  toggle: "text-white hover:bg-white/10",
} as const;
