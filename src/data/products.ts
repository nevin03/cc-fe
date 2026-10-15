import type { Stat } from "@/types";

export interface ProductMeter {
  label: string;
  value: string;
  valueClassName: string;
  /** Renders a progress bar when set, otherwise a sparkline. */
  percent?: number;
  barClassName?: string;
}

export interface Product {
  id: string;
  name: string;
  tier: string;
  icon: string;
  iconClassName: string;
  cornerClassName: string;
  badge: { label: string; tone: "coral" | "amber" };
  description: string;
  meter: ProductMeter;
  stats: Stat[];
  features: string[];
  cta: string;
}

const purpleIcon = "from-electric-purple to-vivid-magenta";

export const products: Product[] = [
  {
    id: "cloud-engine",
    name: "Codecat Cloud Engine",
    tier: "INFRASTRUCTURE TIER",
    icon: "cloud_sync",
    iconClassName: purpleIcon,
    cornerClassName: "from-radiant-coral/20 to-electric-amber/20",
    badge: { label: "v3.4 LATEST", tone: "coral" },
    description:
      "Autonomous container orchestration and multi-cloud mesh routing with an automated 40% compute optimization engine tailored for high-scale microservices.",
    meter: { label: "Multi-Cloud Mesh Latency", value: "1.2ms (p99)", valueClassName: "text-radiant-coral", percent: 88 },
    stats: [
      { value: "40%", label: "Cost Reduction", accent: "primary" },
      { value: "0-Downtime", label: "Mesh Rolling", accent: "coral" },
      { value: "100k+", label: "Pods Managed", accent: "purple" },
    ],
    features: [
      "Dynamic spot & reserved instance auto-balancer",
      "Zero-trust eBPF-powered cross-cluster communication",
      "Native integration with Terraform, Pulumi, and ArgoCD",
    ],
    cta: "Deploy Engine",
  },
  {
    id: "neuralops",
    name: "Codecat NeuralOps",
    tier: "INTELLIGENCE PLATFORM",
    icon: "psychology",
    iconClassName: "from-vivid-magenta to-radiant-coral",
    cornerClassName: "from-vivid-magenta/20 to-radiant-coral/20",
    badge: { label: "v2.8 PROD", tone: "amber" },
    description:
      "Enterprise Machine Learning pipeline automation, telemetry monitoring, automated statistical drift detection, and high-throughput model inference serving.",
    meter: { label: "Inference Drift Metric Realtime", value: "0.004 Delta", valueClassName: "text-vivid-magenta" },
    stats: [
      { value: "14ms", label: "Inference Latency", accent: "primary" },
      { value: "99.8%", label: "Model Accuracy", accent: "magenta" },
      { value: "Auto", label: "Drift Fallback", accent: "amber" },
    ],
    features: [
      "Distributed model training pipeline with spot recovery",
      "Feature store synchronization with sub-second TTL",
      "Native compatibility with PyTorch, vLLM, and ONNX",
    ],
    cta: "Spin Up Cluster",
  },
  {
    id: "securecore",
    name: "Codecat SecureCore",
    tier: "SECURITY & COMPLIANCE",
    icon: "shield_lock",
    iconClassName: "from-electric-purple to-secondary",
    cornerClassName: "from-electric-purple/20 to-radiant-coral/20",
    badge: { label: "FIPS 140-3", tone: "amber" },
    description:
      "Zero-trust API gateway, continuous automated compliance verification, hardware-backed cryptographic key rotation, and real-time perimeter threat intelligence.",
    meter: {
      label: "Posture Verification Score",
      value: "100% Compliant",
      valueClassName: "text-radiant-coral",
      percent: 100,
      barClassName: "from-electric-purple via-radiant-coral to-electric-amber",
    },
    stats: [
      { value: "0.4ms", label: "Auth Overhead", accent: "primary" },
      { value: "256-bit", label: "Post-Quantum", accent: "coral" },
      { value: "Instant", label: "Key Revocation", accent: "purple" },
    ],
    features: [
      "Dynamic mTLS generation and hardware TPM rotation",
      "Automated SOC 2, HIPAA, and GDPR report generation",
      "Distributed rate-limiting and DDoS mitigation proxy",
    ],
    cta: "Secure Endpoint",
  },
  {
    id: "datastream",
    name: "Codecat DataStream",
    tier: "EVENT PIPELINES",
    icon: "dynamic_feed",
    iconClassName: purpleIcon,
    cornerClassName: "from-electric-amber/20 to-radiant-coral/20",
    badge: { label: "HIGH THROUGHPUT", tone: "coral" },
    description:
      "Ultra-low latency event streaming engine processing over 5 Million events per second per cluster node with strictly deterministic sub-millisecond p99 latency guarantees.",
    meter: { label: "Sustained Cluster Throughput", value: "5.82M ev/sec", valueClassName: "text-radiant-coral", percent: 94 },
    stats: [
      { value: "<0.8ms", label: "p99 Latency", accent: "primary" },
      { value: "Zero-Copy", label: "Direct Memory", accent: "magenta" },
      { value: "Exactly-1", label: "Semantic Guarantee", accent: "purple" },
    ],
    features: [
      "Drop-in Apache Kafka and Pulsar protocol replacement",
      "Tiered cloud cold-storage offloading with zero indexing lag",
      "Stateful stream processing with dynamic sliding windows",
    ],
    cta: "Launch Stream Node",
  },
];
