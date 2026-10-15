"use client";

import { useEffect, useMemo, useState } from "react";
import { fetchCareers, type Career } from "@/lib/api";
import { Badge, Button, Card, Eyebrow, Icon, Input } from "@/components/ui";
import { cn } from "@/lib/cn";
import { ApplyForm } from "./ApplyForm";

type State = { status: "loading" } | { status: "error" } | { status: "ready"; careers: Career[] };

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

/** Shows "5 years" for bare numbers, otherwise the admin's text as-is. */
const formatExperience = (value: string) => (/^\d+\+?$/.test(value.trim()) ? `${value.trim()} years` : value);

export function CareerList() {
  const [state, setState] = useState<State>({ status: "loading" });
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<number | null>(null);
  const [applyingTo, setApplyingTo] = useState<Career | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchCareers(controller.signal)
      .then((careers) => setState({ status: "ready", careers }))
      .catch((error) => {
        if (!controller.signal.aborted) {
          console.error(error);
          setState({ status: "error" });
        }
      });
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!applyingTo) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setApplyingTo(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [applyingTo]);

  const careers = useMemo(() => {
    if (state.status !== "ready") return [];
    const term = query.trim().toLowerCase();
    if (!term) return state.careers;
    return state.careers.filter((career) =>
      [career.career_name, career.experience, career.roles].some((field) => field.toLowerCase().includes(term)),
    );
  }, [state, query]);

  return (
    <div className="flex flex-col gap-space-lg">
      <div className="flex flex-col justify-between gap-space-md md:flex-row md:items-end">
        <div className="flex flex-col gap-space-xs">
          <Eyebrow>Open roles</Eyebrow>
          <h2 className="flex items-center gap-space-sm text-headline-lg-mobile text-on-surface md:text-headline-lg">
            Current openings
            {state.status === "ready" && (
              <Badge tone="purple" className="text-code-sm">
                {state.careers.length}
              </Badge>
            )}
          </h2>
        </div>
        {state.status === "ready" && state.careers.length > 0 && (
          <div className="relative w-full md:w-80">
            <Icon name="search" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-outline" />
            <Input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search roles"
              aria-label="Search roles"
              className="h-11 bg-surface-container-lowest pl-10"
            />
          </div>
        )}
      </div>

      {state.status === "loading" && (
        <div className="flex flex-col gap-space-sm" aria-busy="true">
          {[0, 1, 2].map((key) => (
            <Card key={key} className="h-[88px] animate-pulse" />
          ))}
        </div>
      )}

      {state.status === "error" && (
        <Card className="flex flex-col items-center gap-space-sm p-space-xl text-center">
          <Icon name="cloud_off" className="text-[36px] text-outline" />
          <p className="text-title-md text-on-surface">We couldn&apos;t load open roles</p>
          <p className="text-body-md text-on-surface-variant">Please refresh the page or try again in a few minutes.</p>
        </Card>
      )}

      {state.status === "ready" && careers.length === 0 && (
        <Card className="flex flex-col items-center gap-space-sm p-space-xl text-center">
          <Icon name="work_off" className="text-[36px] text-outline" />
          <p className="text-title-md text-on-surface">
            {state.careers.length === 0 ? "No open roles right now" : "No roles match your search"}
          </p>
          <p className="text-body-md text-on-surface-variant">
            {state.careers.length === 0
              ? "New positions open regularly. You can still send us an open application."
              : "Try a different keyword."}
          </p>
        </Card>
      )}

      {careers.length > 0 && (
        <ul className="flex flex-col gap-space-sm">
          {careers.map((career) => {
            const open = openId === career.id;
            const detailsId = `career-${career.id}-details`;
            return (
              <Card
                key={career.id}
                as="li"
                className={cn("overflow-hidden transition-all", open ? "border-electric-purple/40 shadow-md" : "hover:border-electric-purple/30 hover:shadow-md")}
              >
                <div className="flex flex-col gap-space-sm p-space-md sm:flex-row sm:items-center sm:justify-between md:px-space-lg">
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : career.id)}
                    aria-expanded={open}
                    aria-controls={detailsId}
                    className="group flex flex-1 flex-col items-start gap-1.5 text-left"
                  >
                    <span className="text-headline-sm text-on-surface transition-colors group-hover:text-electric-purple">
                      {career.career_name}
                    </span>
                    <span className="flex flex-wrap items-center gap-x-space-md gap-y-1 text-body-sm text-on-surface-variant">
                      <span className="flex items-center gap-1">
                        <Icon name="work_history" className="text-[18px] text-electric-purple" />
                        {formatExperience(career.experience)} experience
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="calendar_today" className="text-[18px] text-electric-purple" />
                        Posted {formatDate(career.created_at)}
                      </span>
                    </span>
                  </button>
                  <div className="flex items-center gap-space-sm">
                    <Button
                      variant="soft"
                      size="sm"
                      onClick={() => setOpenId(open ? null : career.id)}
                      aria-expanded={open}
                      aria-controls={detailsId}
                    >
                      {open ? "Hide details" : "View details"}
                      <Icon name="expand_more" className={cn("text-[18px] transition-transform", open && "rotate-180")} />
                    </Button>
                    <Button size="sm" onClick={() => setApplyingTo(career)}>
                      Apply
                    </Button>
                  </div>
                </div>

                {open && (
                  <div id={detailsId} className="border-t border-surface-container-high/60 bg-surface-container-low/50 p-space-md md:px-space-lg">
                    <h3 className="mb-space-xs text-label-md uppercase tracking-wider text-on-surface-variant">About the role</h3>
                    <p className="max-w-3xl whitespace-pre-line text-body-md leading-relaxed text-on-surface">
                      {career.roles || "Details for this role will be shared during the interview process."}
                    </p>
                    <Button className="mt-space-md" onClick={() => setApplyingTo(career)}>
                      Apply for this role
                      <Icon name="arrow_forward" className="text-[18px]" />
                    </Button>
                  </div>
                )}
              </Card>
            );
          })}
        </ul>
      )}

      {applyingTo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Apply for ${applyingTo.career_name}`}
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/50 p-4 backdrop-blur-sm sm:items-center"
          onClick={(event) => event.target === event.currentTarget && setApplyingTo(null)}
        >
          <Card className="w-full max-w-xl shadow-2xl">
            <ApplyForm key={applyingTo.id} career={applyingTo} onClose={() => setApplyingTo(null)} />
          </Card>
        </div>
      )}
    </div>
  );
}
