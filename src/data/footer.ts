import { ROUTES } from "@/config/site";
import { serviceOfferings } from "@/data/services";

export interface FooterLink {
  label: string;
  href: string;
  badge?: string;
}

export interface FooterColumnData {
  title: string;
  links: FooterLink[];
}

export const footerColumns: FooterColumnData[] = [
  {
    title: "Services",
    links: serviceOfferings.map(({ title }) => ({ label: title, href: ROUTES.services })),
  },
];

const PHONE = "+91 7907351567";
const PHONE_DIGITS = "917907351567";

export const contactDetails = [
  { icon: "call", label: "Phone", value: PHONE, href: `tel:+${PHONE_DIGITS}` },
  { icon: "mail", label: "Email", value: "info@codecattech.com", href: "mailto:info@codecattech.com" },
  { icon: "chat", label: "WhatsApp", value: PHONE, href: `https://wa.me/${PHONE_DIGITS}` },
];

export const offices = [
  { city: "Kannur", lines: ["4/117, First Floor, Global Complex,", "Podikkund, Kannur - 670004"] },
  { city: "Ernakulam", lines: ["60/44, Third Floor, JC Chambers,", "Panampilly Nagar, Ernakulam 682036"] },
];

export const socialLinks = [
  { network: "x", label: "X (Twitter)", href: "https://x.com/codecattech" },
  { network: "facebook", label: "Facebook", href: "https://www.facebook.com/codecattech" },
  { network: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/codecattech/" },
  { network: "instagram", label: "Instagram", href: "https://www.instagram.com/codecattech/" },
] as const;

export type SocialNetwork = (typeof socialLinks)[number]["network"];

export const legalLinks = ["Privacy Policy", "Terms of Service"];
