// Careers content. Stitch has no Careers screen; open roles are placeholders to replace.

export interface Role {
  title: string;
  team: string;
  location: string;
  type: string;
  tags: string[];
}

export const openRoles: Role[] = [
  {
    title: "Principal Cloud Architect",
    team: "Cloud Modernization",
    location: "San Francisco / Remote",
    type: "Full-time",
    tags: ["AWS", "Kubernetes", "Terraform"],
  },
  {
    title: "Senior Site Reliability Engineer",
    team: "24/7 Managed NOC",
    location: "London / Hybrid",
    type: "Full-time",
    tags: ["Prometheus", "ArgoCD", "Go"],
  },
  {
    title: "ML Infrastructure Engineer",
    team: "NeuralOps Platform",
    location: "Singapore / Hybrid",
    type: "Full-time",
    tags: ["PyTorch", "vLLM", "Ray"],
  },
  {
    title: "Security Engineer, Zero-Trust",
    team: "SecureCore",
    location: "Remote (Global)",
    type: "Full-time",
    tags: ["mTLS", "HSM", "SOC 2"],
  },
];

export const careersEmail = "careers@codecat.tech";
