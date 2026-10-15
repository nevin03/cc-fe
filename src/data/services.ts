import type { ServiceGlyph } from "@/components/services/ServiceIcon";

// Services page content: offerings, KPIs, core practices, and engagement tiers.

export interface ServiceOffering {
  icon: ServiceGlyph;
  title: string;
  description: string;
}

export const serviceOfferings: ServiceOffering[] = [
  {
    icon: "product",
    title: "Product Development",
    description: "From discovery and strategy to launch, we shape ideas into market-ready products built to scale.",
  },
  {
    icon: "web",
    title: "Web App Development",
    description: "Fast, secure, and responsive web applications engineered on modern, maintainable architecture.",
  },
  {
    icon: "desktop",
    title: "Desktop App Development",
    description: "Reliable cross-platform desktop software for Windows, macOS, and Linux with native performance.",
  },
  {
    icon: "mobile",
    title: "Mobile App Development",
    description: "Intuitive iOS and Android apps that deliver seamless experiences on every device.",
  },
  {
    icon: "ai",
    title: "Artificial Intelligence",
    description: "Practical AI and machine learning solutions that automate workflows and unlock insight from data.",
  },
  {
    icon: "blockchain",
    title: "Blockchain Development",
    description: "Secure, transparent blockchain solutions, from smart contracts to decentralized applications.",
  },
  {
    icon: "marketing",
    title: "Digital Marketing",
    description: "Data-driven campaigns, SEO, and brand strategy that grow your reach and convert your audience.",
  },
];

export const serviceKpis = [
  { code: "01 / DISPATCH", value: "72 Hours", label: "Pod Deployment Time" },
  { code: "02 / COMPLIANCE", value: "100%", label: "Zero-Downtime Guarantee" },
  { code: "03 / TALENT", value: "Staff+ Only", label: "Principal Engineers" },
  { code: "04 / AUDIT", value: "ISO & SOC2", label: "Certified Security Posture" },
];

export interface Practice {
  code: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export const practices: Practice[] = [
  {
    code: "MOD-01",
    icon: "architecture",
    title: "Custom Software Architecture",
    description:
      "High-concurrency distributed systems built with Go, Rust, and TypeScript. Engineered for sub-millisecond serialization and mission-critical throughput.",
    tags: ["Go Runtime", "Rust FFI", "gRPC"],
  },
  {
    code: "MOD-02",
    icon: "cloud_sync",
    title: "Cloud Migration & Modernization",
    description:
      "Legacy monolith decomposition, AWS & GCP Kubernetes adoption, and multi-terabyte zero-downtime database cutovers with rollback validation.",
    tags: ["EKS / GKE", "CDC Streaming", "Envoy"],
  },
  {
    code: "MOD-03",
    icon: "psychology",
    title: "Enterprise AI Integration",
    description:
      "Private LLM orchestration, enterprise RAG systems over isolated data lakes, and custom vector search infrastructure with strict zero-leakage guards.",
    tags: ["LangGraph", "Qdrant/Pinecone", "vLLM"],
  },
  {
    code: "MOD-04",
    icon: "terminal",
    title: "DevOps & SRE Transformation",
    description:
      "Infrastructure-as-Code via Terraform/OpenTofu, declarative GitOps pipelines, telemetry integration, and automated incident response runbooks.",
    tags: ["Terraform", "ArgoCD", "Prometheus"],
  },
  {
    code: "MOD-05",
    icon: "verified_user",
    title: "Cybersecurity & Compliance",
    description:
      "SOC 2 Type II and ISO 27001 readiness architectures, automated shift-left vulnerability pipelines, cryptographic verification, and adversarial pen-testing.",
    tags: ["SOC 2 Type II", "ISO 27001", "Zero-Trust"],
  },
  {
    code: "MOD-06",
    icon: "group_work",
    title: "Embedded Engineering Pods",
    description:
      "Autonomous, cross-functional pods consisting of Lead Architects, Senior Staff engineers, and DevOps specialists embedded directly into internal client teams.",
    tags: ["Staff+ Leads", "Full Alignment", "Co-Repo PRs"],
  },
];

export interface EngagementTier {
  tier: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export const engagementTiers: EngagementTier[] = [
  {
    tier: "TIER 01 • MILESTONE",
    icon: "contract",
    title: "Fixed-Scope Delivery",
    description:
      "Guaranteed outcomes for well-defined architectural projects, system modernizations, and greenfield module developments.",
    features: [
      "Rigorous PRD and technical specs upfront",
      "Firm delivery calendar & SLA commitments",
      "Zero budget-creep risk with milestone gates",
    ],
    cta: "Request Scoping Template",
  },
  {
    tier: "TIER 02 • INTEGRATED",
    icon: "dynamic_feed",
    title: "Dedicated Engineering Pods",
    description:
      "Autonomous cross-functional pods working directly in your version control and daily standups. High velocity, full alignment.",
    features: [
      "Staff Architect, 2-4 Senior Engineers, SRE",
      "Seamless integration in Slack, Jira, and GitHub",
      "Flexible scaling up or down with 30-day notice",
    ],
    cta: "Deploy a Pod",
    featured: true,
  },
  {
    tier: "TIER 03 • ADVISORY",
    icon: "workspace_premium",
    title: "CTO Advisory & Review",
    description:
      "High-level strategic guidance for C-suite leaders navigating systemic re-platforming, M&A tech diligence, or AI roadmap shifts.",
    features: [
      "Bi-weekly executive architectural reviews",
      "Comprehensive tech debt & risk scoring",
      "Direct access to Codecat Distinguished Fellows",
    ],
    cta: "Schedule Advisory Briefing",
  },
];

