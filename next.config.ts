import type { NextConfig } from "next";

/** Legacy multi-page URLs now live as sections of the single-page site. */
const sectionRedirects = [
  ["/about", "about"],
  ["/products", "products"],
  ["/services", "services"],
  ["/projects", "projects"],
  ["/contact-us", "contact"],
] as const;

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Stock photography served straight from Pexels (story carousel).
    remotePatterns: [{ protocol: "https", hostname: "images.pexels.com", port: "", pathname: "/photos/**", search: "" }],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return sectionRedirects.map(([source, id]) => ({ source, destination: `/#${id}`, permanent: true }));
  },
};

export default nextConfig;
