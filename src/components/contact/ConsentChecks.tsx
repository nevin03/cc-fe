import type { ReactNode } from "react";

interface CheckboxRowProps {
  id: string;
  required?: boolean;
  children: ReactNode;
}

function CheckboxRow({ id, required, children }: CheckboxRowProps) {
  return (
    <label htmlFor={id} className="flex cursor-pointer select-none items-start gap-3">
      <input
        id={id}
        name={id}
        type="checkbox"
        defaultChecked
        required={required}
        className="mt-1 size-4 shrink-0 rounded border-outline-variant accent-electric-purple"
      />
      <span className="text-body-sm text-on-surface-variant">{children}</span>
    </label>
  );
}

export function ConsentChecks() {
  return (
    <div className="flex flex-col gap-3 pt-2">
      <CheckboxRow id="ndaRequirement">
        <span className="font-semibold text-on-surface">
          Execute Standard Mutual Non-Disclosure Agreement (M-NDA)
        </span>{" "}
        <span className="text-on-surface">
          prior to detailed architectural briefing. We hold all submissions under strict enterprise confidentiality
          protocols.
        </span>
      </CheckboxRow>
      <CheckboxRow id="gdprAgree" required>
        I agree to have Codecat Technologies process this technical brief according to our{" "}
        <a href="#" className="font-semibold text-electric-purple underline hover:text-vivid-magenta">
          Security &amp; Privacy Governance Guidelines
        </a>
        .
      </CheckboxRow>
    </div>
  );
}
