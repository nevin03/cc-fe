export const siteConfig = {
  name: "Codecat Technologies",
  description:
    "Engineering enterprise-grade cloud architecture, mission-critical infrastructure, and high-assurance technical ecosystems for modern global operations.",
  /**
   * Temporary hero video (Pixabay #8246, medium) until the API provides one.
   * Uses the CDN URL — pixabay.com/videos/download/... links block embedding.
   */
  /** HLS stream (generated from the MP4 with ffmpeg into public/videos/hls). */
  heroVideo: "/videos/hls/promo.m3u8",
  /** Played when the browser cannot stream HLS. */
  heroVideoFallback: "/videos/codecat-tech-promo.mp4",
} as const;

/** Single-page sections, in scroll order. Ids double as URL hashes. */
export const SECTIONS = {
  home: "home",
  about: "about",
  products: "products",
  services: "services",
  insights: "insights",
  projects: "projects",
  careers: "careers",
  contact: "contact",
} as const;

export type SectionId = (typeof SECTIONS)[keyof typeof SECTIONS];

/** Hash link to a section; the leading `/` keeps it working from other routes (e.g. 404). */
export const sectionHref = (id: SectionId | "consultation") => `/#${id}`;

export const ROUTES = {
  home: sectionHref(SECTIONS.home),
  about: sectionHref(SECTIONS.about),
  products: sectionHref(SECTIONS.products),
  services: sectionHref(SECTIONS.services),
  projects: sectionHref(SECTIONS.projects),
  careers: "/careers",
  genAi: "/gen-ai",
  contact: sectionHref(SECTIONS.contact),
  consultation: sectionHref("consultation"),
} as const;

export const mainNav: { label: string; id: SectionId }[] = [
  { label: "Home", id: SECTIONS.home },
  { label: "About", id: SECTIONS.about },
  { label: "Products", id: SECTIONS.products },
  { label: "Services", id: SECTIONS.services },
  { label: "Insights", id: SECTIONS.insights },
  // Hidden for now; the section still renders on the page.
  // { label: "Projects", id: SECTIONS.projects },
  // Hidden for now, along with their sections on the page.
  // { label: "Careers", id: SECTIONS.careers },
  // { label: "Contact Us", id: SECTIONS.contact },
];

/** Nav links to standalone pages, shown after the section links. */
export const pageNav: { label: string; href: string }[] = [{ label: "Careers", href: ROUTES.careers }];
