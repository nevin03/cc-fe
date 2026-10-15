"use client";

import { useState, type FormEvent } from "react";
import { budgetOptions, domainOptions, teamSizeOptions } from "@/data/contact";
import { Button, FormField, Icon, Input, Select, Textarea } from "@/components/ui";
import { ConsentChecks } from "./ConsentChecks";

type Status = "idle" | "sending" | "sent";

const SIMULATED_LATENCY_MS = 1200;

export function IntakeForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    // Replace with a Server Action / API call once the CRM endpoint is available.
    window.setTimeout(() => setStatus("sent"), SIMULATED_LATENCY_MS);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField id="fullName" label="Full Name" markRequired gap="md">
          <Input id="fullName" name="fullName" variant="comfortable" required placeholder="e.g. Elena Rostova" autoComplete="name" />
        </FormField>
        <FormField id="workEmail" label="Corporate Email" markRequired gap="md">
          <Input id="workEmail" name="workEmail" type="email" variant="comfortable" required placeholder="name@organization.com" autoComplete="email" />
        </FormField>
        <FormField id="companyName" label="Company Name" markRequired gap="md">
          <Input id="companyName" name="companyName" variant="comfortable" required placeholder="Global Systems Corp" autoComplete="organization" />
        </FormField>
        <FormField id="teamSize" label="Engineering Team Size" gap="md">
          <Select id="teamSize" name="teamSize" variant="comfortable" options={teamSizeOptions} defaultValue="101-500" />
        </FormField>
        <FormField id="targetService" label="Primary Domain of Interest" markRequired gap="md">
          <Select id="targetService" name="targetService" variant="comfortable" options={domainOptions} required />
        </FormField>
        <FormField id="budgetRange" label="Estimated Project Budget" gap="md">
          <Select id="budgetRange" name="budgetRange" variant="comfortable" options={budgetOptions} defaultValue="100k-250k" />
        </FormField>
      </div>

      <FormField
        id="projectOverview"
        label="Project Overview & Objectives"
        markRequired
        gap="md"
        hint={<span className="font-mono text-code-sm text-outline">Markdown supported</span>}
      >
        <Textarea
          id="projectOverview"
          name="projectOverview"
          variant="comfortable"
          rows={4}
          required
          placeholder="Detail current system constraints, scale requirements (e.g. QPS, data latency), deployment environments, and specific success metrics..."
        />
      </FormField>

      <ConsentChecks />

      {status === "sent" ? (
        <div role="status" className="flex items-center gap-3 rounded-xl border border-surface-glass-border bg-electric-purple-soft p-4">
          <Icon name="check_circle" className="text-vivid-magenta" />
          <div>
            <p className="font-bold text-on-surface">Consultation Brief Received.</p>
            <p className="text-body-sm text-on-surface-variant">
              Lead Solutions Architect assigned. You will receive cryptographic confirmation via email shortly.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-between gap-4 pt-4 sm:flex-row">
          <Button type="submit" size="lg" disabled={status === "sending"} className="w-full gap-3 font-bold tracking-wide shadow-md shadow-electric-purple/20 hover:shadow-lg hover:shadow-vivid-magenta/30 sm:w-auto">
            <span>{status === "sending" ? "Encrypting & Transmitting..." : "Submit Consultation Request"}</span>
            <Icon name={status === "sending" ? "progress_activity" : "arrow_forward"} className={status === "sending" ? "animate-spin text-lg" : "text-lg"} />
          </Button>
          <div className="flex items-center gap-2 font-mono text-code-sm text-on-surface-variant">
            <Icon name="verified_user" className="text-sm text-electric-purple" />
            <span>TLS 1.3 / End-to-End Encrypted</span>
          </div>
        </div>
      )}
    </form>
  );
}
