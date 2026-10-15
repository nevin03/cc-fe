// Services page content: delivery process, case studies, and consultation form.
import type { Option, Stat } from "@/types";

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Deep Audit",
    description:
      "Full-spectrum inspection of your codebase, network topology, telemetry logs, and security controls to isolate bottlenecks and compute leakage.",
    deliverable: "Audit Dossier",
  },
  {
    step: "02",
    title: "Blueprint & Prototyping",
    description:
      "Formal technical specifications, data schemas, API contracts, and an end-to-end interactive proof-of-concept tested under simulated stress.",
    deliverable: "POC Sandbox",
  },
  {
    step: "03",
    title: "Agile Sprints & Tests",
    description:
      "Bi-weekly iterative releases backed by 90%+ code coverage, automated regression gates, security fuzzing, and load test pipelines.",
    deliverable: "Production Candidate",
  },
  {
    step: "04",
    title: "Deploy & 24/7 SLA",
    description:
      "Canary cutover, DNS transition, zero-downtime deployment, coupled with round-the-clock Tier-3 NOC support and automated remediation.",
    deliverable: "Live NOC Monitoring",
  },
];


export interface CaseStudy {
  sector: string;
  period: string;
  title: string;
  summary: string;
  metrics: Stat[];
  author: { name: string; role: string; avatar: string };
}

export const caseStudies: CaseStudy[] = [
  {
    sector: "FINTECH INFRASTRUCTURE",
    period: "Q3 CASE STUDY",
    title: "Global Payment Gateway: Zero-Downtime EKS Re-Architecture",
    summary:
      "Re-engineered a legacy monolithic payments engine handling 45,000 TPS into an isolated Go-based microservice fleet on AWS EKS with multi-region failover.",
    metrics: [
      { value: "-62%", label: "AWS Spend", accent: "purple" },
      { value: "14ms", label: "P99 Latency (was 120ms)", accent: "magenta" },
      { value: "0 Sec", label: "Downtime in Cutover", accent: "coral" },
    ],
    author: { name: "David Vance", role: "EVP of Engineering, PayGrid Global", avatar: "/images/david-vance.jpg" },
  },
  {
    sector: "HEALTHCARE DATA LAKE",
    period: "Q4 CASE STUDY",
    title: "HIPAA-Compliant Enterprise RAG & Diagnostic Pipeline",
    summary:
      "Designed a private, air-gapped vector retrieval pipeline over 800M clinical patient documents using self-hosted LLM clusters with role-based document segmentation.",
    metrics: [
      { value: "8.4x", label: "Query Speedup", accent: "purple" },
      { value: "100%", label: "Audit Compliance", accent: "magenta" },
      { value: "$3.2M", label: "Annual OPEX Saved", accent: "amber" },
    ],
    author: {
      name: "Dr. Elena Rostova",
      role: "Chief Information Officer, Aethel Health",
      avatar: "/images/elena-rostova.jpg",
    },
  },
];

export const consultationPerks = [
  { icon: "security", label: "Standard Mutual NDA Executed Prior to Call" },
  { icon: "schedule", label: "45-Minute Deep Technical Scope Session" },
  { icon: "verified", label: "Deliverable: Custom Engineering Roadmap" },
];

const toOptions = (labels: string[]): Option[] => labels.map((label) => ({ value: label, label }));

export const practiceOptions = toOptions([
  "Custom Software Architecture",
  "Cloud Migration & Modernization",
  "Enterprise AI & LLM Orchestration",
  "DevOps & SRE Transformation",
  "Cybersecurity & Compliance Audit",
  "Dedicated Engineering Pods",
]);

export const timelineOptions = toOptions([
  "Immediate (Within 2 Weeks)",
  "Next Quarter (Q1/Q2)",
  "Strategic Exploration (6+ Months)",
]);
