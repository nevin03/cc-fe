import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui";
import { partners } from "@/data/partners";

/** Monochrome brand marks from the Simple Icons CDN, tinted to the site's text colour. */
const iconUrl = (slug: string) => `https://cdn.simpleicons.org/${slug}/1d1a28`;

/** Partners & collaborations: a logo grid on white. */
export function PartnersSection() {
  return (
    <section aria-label="Partners and collaborations" className="w-full bg-white py-16 lg:py-20">
      <Container className="flex flex-col items-center gap-12">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-[28px] font-medium leading-[1.2] tracking-tight text-on-surface md:whitespace-nowrap md:text-[44px]">
            Built alongside the platforms we trust
          </h2>
        </Reveal>

        {/* Wrapping rows centre an incomplete last row instead of leaving empty cells. */}
        <ul className="flex w-full flex-wrap justify-center">
          {partners.map(({ name, icon }, index) => (
            <Reveal
              key={name}
              as="li"
              index={index}
              y={20}
              className="-mt-px -ml-px flex h-28 basis-1/2 items-center justify-center gap-3 border border-black/5 bg-white px-4 opacity-70 grayscale transition hover:opacity-100 sm:basis-1/3 lg:h-32 lg:basis-1/6"
            >
              {icon ? (
                <>
                  {/* Remote SVG logos; next/image adds nothing for tiny vector marks. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={iconUrl(icon)} alt="" width={28} height={28} loading="lazy" className="size-7" />
                  <span className="text-[17px] font-semibold tracking-tight text-on-surface">{name}</span>
                </>
              ) : (
                <span className="text-center text-[18px] font-bold leading-tight tracking-tight text-on-surface">{name}</span>
              )}
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
