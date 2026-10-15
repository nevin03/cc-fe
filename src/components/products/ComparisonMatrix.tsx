"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { comparisonRows } from "@/data/platform";
import { Container, Icon, SectionHeading } from "@/components/ui";
import { MatrixRow } from "./MatrixRow";
import { Reveal } from "@/components/motion/Reveal";

const modes = [
  { id: "all", label: "All Capabilities" },
  { id: "exclusive", label: "Enterprise Exclusives" },
] as const;

type Mode = (typeof modes)[number]["id"];

const headCell = "px-4 py-4 text-label-md uppercase tracking-wider sm:px-6";

export function ComparisonMatrix() {
  const [mode, setMode] = useState<Mode>("all");

  return (
    <Container as="section" className="py-space-lg">
      <div className="mb-space-lg flex flex-col justify-between gap-space-md md:flex-row md:items-end">
        <SectionHeading
          eyebrowVariant="code"
          eyebrow="TIER MATRIX"
          title="Compare Platform Capabilities"
          description="Detailed breakdown between developer Standard tiers and Mission-Critical Enterprise licenses."
          titleClassName="text-primary"
        />
        <div role="group" aria-label="Highlight rows" className="inline-flex w-fit rounded-lg border border-surface-container-highest/60 bg-surface-container p-1 shadow-sm">
          {modes.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              aria-pressed={mode === id}
              onClick={() => setMode(id)}
              className={cn(
                "rounded-md px-3 py-1.5 text-label-sm",
                mode === id
                  ? "bg-surface-container-lowest font-bold text-electric-purple shadow-sm"
                  : "font-semibold text-on-surface-variant hover:text-electric-purple",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <Reveal className="overflow-hidden rounded-xl border border-surface-container-highest/70 bg-surface-container-lowest shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-surface-container-highest/60 bg-surface-container-low">
                <th scope="col" className={cn(headCell, "w-2/5 text-on-surface")}>Platform Feature</th>
                <th scope="col" className={cn(headCell, "w-[30%] text-on-surface")}>Standard Cloud Tier</th>
                <th scope="col" className={cn(headCell, "w-[30%] border-l border-primary-fixed bg-primary-fixed/30 text-electric-purple")}>
                  <span className="flex items-center gap-1.5 font-bold">
                    <Icon name="verified" className="text-[18px] text-vivid-magenta" />
                    Enterprise Dedicated
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-highest/40 text-body-sm">
              {comparisonRows.map((row) => (
                <MatrixRow key={row.feature} row={row} dimmed={mode === "exclusive" && !row.exclusive} />
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Container>
  );
}
