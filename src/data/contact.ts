import type { Option } from "@/types";

export const teamSizeOptions: Option[] = [
  { value: "1-20", label: "1 - 20 engineers (Seed / Series A)" },
  { value: "21-100", label: "21 - 100 engineers (Growth Scale)" },
  { value: "101-500", label: "101 - 500 engineers (Enterprise Platform)" },
  { value: "500+", label: "500+ engineers (Global Enterprise)" },
];

export const domainOptions: Option[] = [
  { value: "cloud-arch", label: "Cloud Modernization & Multi-Cloud Ops" },
  { value: "sre-infra", label: "Site Reliability Engineering & NOC Automation" },
  { value: "catops", label: "CatOps Cloud Native Orchestration" },
  { value: "datanexus", label: "DataNexus High-Throughput Pipeline" },
  { value: "security", label: "Zero-Trust & Cyber Security Hardening" },
  { value: "custom", label: "Bespoke Enterprise Systems Engineering" },
];

export const budgetOptions: Option[] = [
  { value: "50k-100k", label: "$50,000 - $100,000" },
  { value: "100k-250k", label: "$100,000 - $250,000" },
  { value: "250k-500k", label: "$250,000 - $500,000" },
  { value: "500k+", label: "$500,000+ (Multi-phase transformation)" },
];

export const inboxes = [
  { email: "enterprise@codecat.tech", purpose: "Architecture, RFP & procurement inquiries" },
  { email: "careers@codecat.tech", purpose: "Senior systems staff, SRE, and researcher roles" },
  { email: "security@codecat.tech", purpose: "PGP key exchanges & compliance reports" },
];

export const engagementWindows = [
  { label: "Advisory Hours", value: "Mon – Fri", detail: "07:00 – 21:00 UTC" },
  { label: "Emergency Response", value: "24 / 7 / 365", detail: "Continuous Rotations" },
];

export interface Office {
  division: string;
  city: string;
  address: [string, string];
  phone: string;
  tag: string;
  timeZone: string;
  zoneLabel: string;
  image: string;
}

export const offices: Office[] = [
  {
    division: "Global Headquarters",
    city: "San Francisco, United States",
    address: ["500 Howard Street, Suite 1400", "San Francisco, CA 94105"],
    phone: "+1 (415) 890-CAT0",
    tag: "HQ Labs",
    timeZone: "America/Los_Angeles",
    zoneLabel: "PST",
    image: "/images/office-sf.png",
  },
  {
    division: "EMEA Technical Center",
    city: "London, United Kingdom",
    address: ["25 Bank Street, Level 28, Canary Wharf", "London, E14 5JP"],
    phone: "+44 20 7946 0912",
    tag: "SRE Center",
    timeZone: "Europe/London",
    zoneLabel: "GMT",
    image: "/images/office-london.png",
  },
  {
    division: "APAC Systems Division",
    city: "Singapore, Marina Bay",
    address: ["8 Marina Boulevard, Tower 1, #19-02", "Singapore 018981"],
    phone: "+65 6715 8820",
    tag: "Data Fabric",
    timeZone: "Asia/Singapore",
    zoneLabel: "SGT",
    image: "/images/office-singapore.png",
  },
];

export const faqs = [
  {
    question: "How does Codecat Technologies handle proprietary IP & preliminary NDAs?",
    answer:
      "We execute mutual non-disclosure agreements prior to reviewing system blueprints or codebase repositories. All intellectual property, architectural designs, and proprietary domain models generated for customized solutions remain 100% the property of the client, backed by explicit IP transfer guarantees in our standard enterprise Master Services Agreement (MSA).",
  },
  {
    question: "What enterprise compliance certifications does your engineering staff maintain?",
    answer:
      "Our infrastructure practices and internal operations adhere strictly to SOC 2 Type II, ISO/IEC 27001:2022, and HIPAA Security Rule specifications. We undergo annual independent third-party penetration testing and continuous automated vulnerability evaluations via our verified ShieldGuard suite.",
  },
  {
    question: "Can we conduct a focused Proof-of-Concept (PoC) or trial engagement before an MSA?",
    answer:
      "Yes. We offer structured 3- to 6-week Architectural Discovery & PoC sprints designed to demonstrate telemetry gains, latency reductions, or security improvements within an isolated sandbox environment, establishing clear return-on-investment benchmarks prior to multi-quarter platform commitment.",
  },
  {
    question: "What does the onboarding timeline look like after formal consultation?",
    answer:
      "Following the initial intake call within 2 hours, a Principal Solutions Architect delivers a preliminary technical proposal within 48 to 72 hours. Subject to legal clearances, dedicated sprint pods can begin co-architecting and code integrations within 5 to 7 business days.",
  },
];
