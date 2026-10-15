export interface IntegrationNode {
  icon: string;
  title: string;
  detail: string;
}

export const ingestNodes: IntegrationNode[] = [
  { icon: "cloud", title: "AWS Integration", detail: "EKS / IAM / S3 Wire" },
  { icon: "cloud_queue", title: "Microsoft Azure", detail: "AKS / Entra ID Gateway" },
  { icon: "hub", title: "Google Cloud", detail: "GKE / BigQuery Pipeline" },
];

export const runtimeNodes: IntegrationNode[] = [
  { icon: "deployed_code", title: "Kubernetes Core", detail: "Vanilla / OpenShift / Rancher" },
  { icon: "memory", title: "Edge Nodes", detail: "Wasm / ARM64 Microclusters" },
  { icon: "terminal", title: "CI/CD Tooling", detail: "GitHub Actions / GitLab CI" },
];

export interface MatrixRow {
  feature: string;
  /** `null` = not available on the standard tier. */
  standard: string | null;
  enterprise: string;
  exclusive: boolean;
}

export const comparisonRows: MatrixRow[] = [
  {
    feature: "Multi-Cloud Routing & Failover",
    standard: "Up to 2 Regions",
    enterprise: "Unlimited Global Regions",
    exclusive: false,
  },
  {
    feature: "Sustained Event Ingestion",
    standard: "500,000 events/sec",
    enterprise: "5,000,000+ events/sec",
    exclusive: false,
  },
  {
    feature: "Cryptographic Hardware Key Rotation (HSM)",
    standard: "Software-based Vault Only",
    enterprise: "Dedicated FIPS 140-3 Cloud HSM",
    exclusive: true,
  },
  {
    feature: "Automated AI Model Drift Rollback",
    standard: "Manual Rollback Alerts",
    enterprise: "Autonomous Multi-Tier Drift Rollback",
    exclusive: true,
  },
  {
    feature: "Service Level Agreement (SLA)",
    standard: "99.9% Uptime Guarantee",
    enterprise: "99.999% Financially-Backed SLA",
    exclusive: false,
  },
  {
    feature: "Dedicated Site Reliability Engineer (SRE)",
    standard: null,
    enterprise: "Included (15m P1 Escalation)",
    exclusive: true,
  },
  {
    feature: "VPC Peering & Air-Gapped Deployments",
    standard: null,
    enterprise: "Full Air-Gapped Bare-Metal Support",
    exclusive: true,
  },
];

export const sandboxPerks = ["Full REST & gRPC API", "30-Day Enterprise Trial", "Automated Deprovisioning"];
