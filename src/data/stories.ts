// Story carousel content (Projects section). Photos are served from Pexels.

export interface Story {
  title: [string, string];
  description: string;
  image: string;
  imageAlt: string;
  /** CSS object-position for the photo crop; defaults to centre. */
  imagePosition?: string;
  href: string;
}

export const stories: Story[] = [
  {
    title: ["Revolutionizing Travel,", "One Journey at a Time."],
    description:
      "Simplifying every step of your journey with one powerful app that brings everything you need to travel together.",
    image: "https://images.pexels.com/photos/6354991/pexels-photo-6354991.jpeg",
    imageAlt: "Black-and-white photo of travellers walking through an airport",
    href: "#",
  },
  {
    title: ["Eliminating Bottlenecks.", "Streamlining Global Logistics."],
    description:
      "Simplifying shipments, cargo operations, and inventory management through smarter, more connected solutions.",
    image: "https://images.pexels.com/photos/20420373/pexels-photo-20420373.jpeg",
    imageAlt: "Container ships moored at the Burchardkai terminal in Hamburg",
    href: "#",
  },
  {
    title: ["Education for All.", "Opportunities Without Limits."],
    description: "Making essential learning resources accessible to everyone, everywhere.",
    image: "https://images.pexels.com/photos/1895114/pexels-photo-1895114.jpeg",
    imageAlt: "A group of young children sitting on the floor, listening",
    imagePosition: "center 85%",
    href: "#",
  },
];
