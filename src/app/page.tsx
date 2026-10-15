import { AboutSection } from "@/components/about/AboutSection";
// import { CareersSection } from "@/components/careers/CareersSection";
// import { ContactSection } from "@/components/contact/ContactSection";
import { HeroVideo } from "@/components/home/HeroVideo";
import { InsightsSection } from "@/components/insights/InsightsSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { StoryCarousel } from "@/components/projects/StoryCarousel";
import { PartnersSection } from "@/components/partners/PartnersSection";
import { ProductsSection } from "@/components/products/ProductsSection";
import { GenAiSection } from "@/components/services/GenAiSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { SectionAnchor } from "@/components/ui";
import { SECTIONS, siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="w-full overflow-x-clip bg-surface">
        <SectionAnchor
          id={SECTIONS.home}
          label="Home"
          className="relative min-h-dvh overflow-hidden bg-black"
        >
          {/* Swap for the API video URL when available, e.g. <HeroVideo src={video.url} poster={video.poster} /> */}
          <div className="absolute inset-0">
            <HeroVideo src={siteConfig.heroVideo} fallbackSrc={siteConfig.heroVideoFallback} />
          </div>
        </SectionAnchor>

        <SectionAnchor id={SECTIONS.projects} label="Projects">
          <StoryCarousel />
        </SectionAnchor>

        <SectionAnchor id={SECTIONS.about} label="About">
          <AboutSection />
        </SectionAnchor>

        <SectionAnchor id={SECTIONS.products} label="Products">
          <ProductsSection />
        </SectionAnchor>

        <SectionAnchor id={SECTIONS.services} label="Services">
          <ServicesSection />
        </SectionAnchor>

        <SectionAnchor id={SECTIONS.insights} label="Insights">
          <InsightsSection />
        </SectionAnchor>

        <GenAiSection />

        <PartnersSection />

        {/* Careers and Contact are hidden for now; restore these and their imports to bring them back.
        <SectionAnchor id={SECTIONS.careers} label="Careers">
          <CareersSection />
        </SectionAnchor>

        <SectionAnchor id={SECTIONS.contact} label="Contact Us">
          <ContactSection />
        </SectionAnchor>
        */}
      </main>
      <SiteFooter />
    </>
  );
}
