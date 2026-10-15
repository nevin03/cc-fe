"use client";

import { useState, type FormEvent } from "react";
import { practiceOptions, timelineOptions } from "@/data/services-delivery";
import { Button, FormField, Icon, Input, Select, Textarea } from "@/components/ui";

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div role="status" className="flex flex-col items-center justify-center gap-space-sm p-space-lg text-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-radiant-coral-soft text-radiant-coral">
          <Icon name="check_circle" className="text-[28px]" />
        </span>
        <h3 className="text-headline-sm font-bold text-on-surface">Session Request Queued</h3>
        <p className="max-w-md text-body-md text-on-surface-variant">
          A Lead Architect has been assigned to review your parameters. A calendar invitation and preliminary NDA have
          been sent to your inbox.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-space-md">
      <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
        <FormField id="consult-name" label="Full Name">
          <Input id="consult-name" name="name" required placeholder="Alexander Wright" autoComplete="name" />
        </FormField>
        <FormField id="consult-email" label="Work Email">
          <Input id="consult-email" name="email" type="email" required placeholder="a.wright@enterprise.com" autoComplete="email" />
        </FormField>
      </div>
      <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
        <FormField id="consult-practice" label="Primary Practice Needed">
          <Select id="consult-practice" name="practice" options={practiceOptions} />
        </FormField>
        <FormField id="consult-timeline" label="Target Delivery Timeline">
          <Select id="consult-timeline" name="timeline" options={timelineOptions} />
        </FormField>
      </div>
      <FormField id="consult-overview" label="System Architecture & Challenge Overview">
        <Textarea
          id="consult-overview"
          name="overview"
          rows={3}
          placeholder="Briefly describe your current technology stack, scale targets, or cloud migration bottlenecks..."
        />
      </FormField>
      <div className="flex flex-col-reverse items-start justify-between gap-space-sm pt-space-xs sm:flex-row sm:items-center">
        <span className="font-mono text-code-sm text-outline">Response SLA: Guaranteed &lt; 24h</span>
        <Button type="submit">Confirm Architect Session</Button>
      </div>
    </form>
  );
}
