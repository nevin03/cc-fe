"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui";

interface FaqAccordionProps {
  items: { question: string; answer: string }[];
}

/** Single-open accordion. */
export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="divide-y divide-surface-container-low">
      {items.map(({ question, answer }, index) => {
        const open = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        return (
          <div key={question} className="py-5">
            <button
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? null : index)}
              className="group flex w-full items-center justify-between gap-4 text-left"
            >
              <h3 className="text-title-md font-bold text-on-surface transition-colors group-hover:text-electric-purple">
                {question}
              </h3>
              <Icon
                name="expand_more"
                className={cn(
                  "shrink-0 text-outline transition-transform duration-200 group-hover:text-vivid-magenta",
                  open && "rotate-180",
                )}
              />
            </button>
            <div id={panelId} role="region" hidden={!open} className="mt-3 pr-6">
              <p className="text-body-md leading-relaxed text-on-surface-variant">{answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
