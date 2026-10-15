export type Accent = "purple" | "magenta" | "coral" | "amber" | "primary";

export interface LinkItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
  accent?: Accent;
}

export interface Option {
  value: string;
  label: string;
}
