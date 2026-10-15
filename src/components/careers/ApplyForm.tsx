"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { ApiError, CV_ACCEPT, CV_MAX_BYTES, submitApplication, type Career } from "@/lib/api";
import { Button, FormField, Icon, Input } from "@/components/ui";
import { cn } from "@/lib/cn";

interface ApplyFormProps {
  career: Career;
  onClose: () => void;
}

const formatSize = (bytes: number) =>
  bytes < 1024 * 1024 ? `${Math.max(1, Math.round(bytes / 1024))} KB` : `${(bytes / 1024 / 1024).toFixed(1)} MB`;

export function ApplyForm({ career, onClose }: ApplyFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [cvFile, setCvFile] = useState<File | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setCvFile(file);
    setErrors((current) => {
      const next = { ...current };
      delete next.cv;
      if (file && file.size > CV_MAX_BYTES) next.cv = "CV must be 5 MB or smaller.";
      return next;
    });
  };

  const clearFile = () => {
    setCvFile(null);
    if (fileInput.current) fileInput.current.value = "";
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!cvFile) {
      setErrors({ cv: "Please attach your CV." });
      return;
    }
    if (cvFile.size > CV_MAX_BYTES) {
      setErrors({ cv: "CV must be 5 MB or smaller." });
      return;
    }
    const form = new FormData(event.currentTarget);
    form.set("career", String(career.id));
    form.set("cv", cvFile);

    setStatus("sending");
    setErrors({});
    try {
      await submitApplication(form);
      setStatus("sent");
    } catch (error) {
      setErrors(error instanceof ApiError ? error.fieldErrors : { form: "Could not reach the server. Please try again." });
      setStatus("idle");
    }
  };

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col items-center gap-space-sm p-space-xl text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-electric-purple-soft text-electric-purple">
          <Icon name="check_circle" filled className="text-[32px]" />
        </span>
        <h3 className="text-headline-sm text-on-surface">Application submitted</h3>
        <p className="max-w-sm text-body-md text-on-surface-variant">
          Thanks for applying for <strong className="text-on-surface">{career.career_name}</strong>. Our hiring team
          will review your CV and contact you by email.
        </p>
        <Button onClick={onClose} className="mt-space-xs">
          Done
        </Button>
      </div>
    );
  }

  const fieldError = (name: string) =>
    errors[name] && (
      <p className="flex items-center gap-1 text-body-sm text-red-600">
        <Icon name="error" className="text-[16px]" />
        {errors[name]}
      </p>
    );
  const formError = errors.form ?? errors.career ?? errors.detail;

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-start justify-between gap-space-sm border-b border-surface-container-high/60 p-space-lg">
        <div className="flex flex-col gap-1">
          <span className="text-label-md uppercase tracking-wider text-vivid-magenta">Apply for</span>
          <h3 className="text-headline-sm text-on-surface">{career.career_name}</h3>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="flex size-9 shrink-0 items-center justify-center rounded-lg text-on-surface-variant transition-colors hover:bg-surface-container"
        >
          <Icon name="close" />
        </button>
      </div>

      <div className="flex flex-col gap-space-md p-space-lg">
        <FormField id="apply-name" label="Full name" markRequired>
          <Input id="apply-name" name="full_name" required autoComplete="name" maxLength={150} variant="comfortable" placeholder="Jane Doe" />
          {fieldError("full_name")}
        </FormField>
        <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
          <FormField id="apply-email" label="Email" markRequired>
            <Input id="apply-email" name="email" type="email" required autoComplete="email" variant="comfortable" placeholder="jane@example.com" />
            {fieldError("email")}
          </FormField>
          <FormField id="apply-phone" label="Phone">
            <Input id="apply-phone" name="phone" type="tel" autoComplete="tel" maxLength={20} variant="comfortable" placeholder="+1 555 000 0000" />
            {fieldError("phone")}
          </FormField>
        </div>

        <FormField id="apply-cv" label="CV / Resume" markRequired>
          <input ref={fileInput} id="apply-cv" type="file" accept={CV_ACCEPT} onChange={handleFile} className="sr-only" />
          {cvFile ? (
            <div className="flex items-center gap-space-sm rounded-lg border border-surface-container-high bg-surface-container-low p-space-sm">
              <span className="flex size-10 items-center justify-center rounded-lg bg-electric-purple-soft text-electric-purple">
                <Icon name="description" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-body-md font-semibold text-on-surface">{cvFile.name}</p>
                <p className="text-body-sm text-on-surface-variant">{formatSize(cvFile.size)}</p>
              </div>
              <button
                type="button"
                onClick={clearFile}
                aria-label="Remove file"
                className="flex size-8 items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container"
              >
                <Icon name="delete" className="text-[20px]" />
              </button>
            </div>
          ) : (
            <label
              htmlFor="apply-cv"
              className={cn(
                "flex cursor-pointer flex-col items-center gap-1 rounded-lg border-2 border-dashed p-space-lg text-center transition-colors hover:border-electric-purple hover:bg-electric-purple-soft/40",
                errors.cv ? "border-red-400" : "border-surface-container-highest",
              )}
            >
              <Icon name="upload_file" className="text-[32px] text-electric-purple" />
              <span className="text-body-md font-semibold text-on-surface">Click to upload your CV</span>
              <span className="text-body-sm text-on-surface-variant">PDF, DOC or DOCX, up to 5 MB</span>
            </label>
          )}
          {fieldError("cv")}
        </FormField>

        {formError && (
          <p role="alert" className="rounded-lg bg-red-50 p-space-sm text-body-sm text-red-600">
            {formError}
          </p>
        )}
      </div>

      <div className="flex flex-col-reverse gap-space-sm border-t border-surface-container-high/60 p-space-lg sm:flex-row sm:items-center sm:justify-between">
        <p className="text-body-sm text-on-surface-variant">We only use your details to process this application.</p>
        <div className="flex gap-space-sm">
          <Button variant="soft" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Submitting…" : "Submit application"}
          </Button>
        </div>
      </div>
    </form>
  );
}
