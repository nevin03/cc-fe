"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { stories } from "@/data/stories";
import { cn } from "@/lib/cn";

/** Story carousel: inset black banner on a full-width hairline, with serif copy on the left and a photo fading in from the right. */
/** Time each slide stays up before auto-advancing. */
const AUTOPLAY_MS = 2000;

export function StoryCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance; restarting on every index change means a dot click gets a full interval before moving on.
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % stories.length), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [index, paused]);

  return (
    <section
      aria-label="Stories"
      aria-roledescription="carousel"
      // Hovering or focusing inside the carousel pauses autoplay so a slide can be read.
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative w-full overflow-hidden bg-white pt-12 pb-8 lg:pt-16"
    >
      <div className="relative">
        {/* Banner inset from the screen edges, sitting on a hairline that runs out to both sides. */}
        <div className="relative px-4 sm:px-8 lg:px-16">
          <div className="relative">
            {/* Anchored to the banner so it always crosses its middle; the section's overflow clips it at the screen edges. */}
            <div aria-hidden="true" className="absolute -inset-x-[100vw] top-1/2 h-px -translate-y-1/2 bg-black/15" />
            <div className="relative grid min-h-[380px] overflow-hidden bg-black md:min-h-[320px]">
              {/* All slides share one grid cell and crossfade; inactive ones are inert. */}
              {stories.map((story, slide) => (
                <article
                  key={story.title[0]}
                  aria-roledescription="slide"
                  aria-label={`${slide + 1} of ${stories.length}`}
                  aria-hidden={slide !== index}
                  inert={slide !== index}
                  className={cn(
                    "col-start-1 row-start-1 grid grid-cols-1 transition-opacity duration-700 ease-in-out md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.4fr)]",
                    slide === index ? "opacity-100" : "opacity-0",
                  )}
                >
                  {/* Photo: right side on desktop, top on mobile; fades into the black panel. */}
                  <div className="relative h-56 md:order-2 md:h-auto">
                    <Image
                      src={story.image}
                      alt={story.imageAlt}
                      fill
                      sizes="(min-width: 768px) 60vw, 100vw"
                      loading="eager"
                      className="object-cover"
                      style={{ objectPosition: story.imagePosition }}
                    />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent md:bg-gradient-to-r md:from-black md:via-black/30" />
                  </div>

                  <div className="relative flex flex-col justify-center gap-4 px-8 py-8 md:py-8 md:pl-[clamp(2rem,6vw,6rem)] md:pr-6">
                    <h3 className="font-serif text-[30px] leading-[1.15] tracking-tight text-[#f5d9a8] md:text-[34px]">
                      <span className="block">{story.title[0]}</span>
                      <span className="block">{story.title[1]}</span>
                    </h3>
                    <p className="max-w-md font-serif text-[17px] leading-relaxed text-[#f5d9a8]/90">{story.description}</p>
                    {/* Hidden until the story pages exist; restore (and re-import `Icon` from "@/components/ui") and set each story's `href`.
                    <a
                      href={story.href}
                      className="mt-1 inline-flex w-fit items-center gap-2 text-body-md font-semibold uppercase tracking-wide text-[#f08a4b] transition-colors hover:text-[#ffb07a]"
                    >
                      Read the story
                      <Icon name="arrow_outward" className="text-xl" />
                    </a>
                    */}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Dots are the carousel navigation. */}
          <div className="mt-6 flex justify-center gap-2">
            {stories.map((item, dot) => (
              <button
                key={item.title[0]}
                type="button"
                aria-label={`Show story ${dot + 1}`}
                aria-current={dot === index}
                onClick={() => setIndex(dot)}
                className={cn("h-2 rounded-full transition-all", dot === index ? "w-6 bg-on-surface" : "w-2 bg-black/20")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
