import { siteConfig } from "@/config/site";
import { contactDetails, footerColumns, legalLinks, offices, socialLinks } from "@/data/footer";
import { Container, Icon } from "@/components/ui";
import { FooterColumn } from "./FooterColumn";
import { SocialIcon } from "./SocialIcon";

const headingClasses = "text-label-md uppercase tracking-wider text-white";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-white/10 bg-black">
      <Container className="py-space-xl">
        <div className="mb-space-xl grid grid-cols-1 gap-space-lg sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <FooterColumn {...footerColumns[0]} />
          </div>

          <div className="flex flex-col gap-space-sm lg:col-span-3">
            <h4 className={headingClasses}>Contact</h4>
            <ul className="flex flex-col gap-space-sm">
              {contactDetails.map(({ icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-start gap-2.5"
                  >
                    <Icon name={icon} filled className="mt-0.5 text-lg text-white/60 group-hover:text-white" />
                    <span className="flex flex-col">
                      <span className="text-[11px] uppercase tracking-wider text-white/55">{label}</span>
                      <span className="text-body-sm text-white/70 transition-colors group-hover:text-white">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-space-sm lg:col-span-3">
            <h4 className={headingClasses}>Our Offices</h4>
            <ul className="flex flex-col gap-space-md">
              {offices.map(({ city, lines }) => (
                <li key={city} className="flex items-start gap-2.5">
                  <Icon name="location_on" filled className="mt-0.5 text-lg text-white/50" />
                  <address className="flex flex-col not-italic">
                    <span className="text-body-sm font-semibold text-white/85">{city}</span>
                    {lines.map((line) => (
                      <span key={line} className="text-body-sm leading-relaxed text-white/60">
                        {line}
                      </span>
                    ))}
                  </address>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-space-sm lg:col-span-3">
            <h4 className={headingClasses}>Follow Us</h4>
            <ul className="flex flex-nowrap items-center gap-2.5">
              {socialLinks.map(({ network, label, href }) => (
                <li key={network}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white"
                  >
                    <SocialIcon network={network} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-space-md border-t border-white/10 pt-space-lg text-body-sm text-white/50 md:flex-row">
          <span className="font-mono text-code-sm">© 2025 {siteConfig.name}. All rights reserved.</span>
          <ul className="flex flex-wrap items-center justify-center gap-space-md">
            {legalLinks.map((label) => (
              <li key={label} className="cursor-pointer transition-colors hover:text-white">
                {label}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
