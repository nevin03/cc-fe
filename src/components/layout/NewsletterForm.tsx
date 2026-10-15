"use client";

import { useState, type FormEvent } from "react";
import { Button, Input } from "@/components/ui";

export function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubscribed(true);
  };

  if (subscribed) {
    return <p className="text-body-sm font-semibold text-electric-purple">Thanks — you&apos;re on the list.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-space-xs">
      <label htmlFor="newsletter-email" className="sr-only">
        Work email
      </label>
      <Input
        id="newsletter-email"
        type="email"
        required
        placeholder="corporate@company.com"
        className="border-surface-container-highest/60 bg-surface-container-lowest text-body-sm focus:ring-radiant-coral"
      />
      <Button type="submit" className="rounded-lg px-space-md">
        Subscribe
      </Button>
    </form>
  );
}
