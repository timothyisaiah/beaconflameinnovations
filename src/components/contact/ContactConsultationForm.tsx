"use client";

import { useCallback, useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader } from "@/components/ds/Card";
import { cn } from "@/lib/utils";

export const PROJECT_TYPES = [
  "Platform / systems engineering",
  "AI systems or agentic workflows",
  "Analytics or data platform",
  "Advisory or technical diligence",
  "Partnership or co-build",
  "Other",
] as const;

const FORM_HEADING_ID = "contact-consultation-form-heading";

const fieldClass = cn(
  "w-full min-h-[2.75rem] rounded-[var(--radius-lg)] border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-3 text-base text-[var(--foreground)]",
  "placeholder:text-[var(--muted)]",
  "transition-[border-color,box-shadow] duration-200",
  "focus:outline-none focus-visible:border-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]",
);

const labelClass =
  "mb-2 block text-sm font-medium text-[var(--foreground-secondary)]";

function getContactSubmitUrl(): string {
  const base = process.env.NEXT_PUBLIC_CONTACT_API_URL?.trim();
  if (base) return base;
  return "/api/contact";
}

export function ContactConsultationForm() {
  const hintId = useId();
  const statusId = useId();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const data = new FormData(form);
      const payload = {
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        company: String(data.get("company") ?? ""),
        projectType: String(data.get("projectType") ?? ""),
        projectDescription: String(data.get("projectDescription") ?? ""),
      };

      setStatus("submitting");
      setErrorMessage(null);

      try {
        const res = await fetch(getContactSubmitUrl(), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          mode: "cors",
        });
        const body = (await res.json().catch(() => ({}))) as {
          error?: string;
        };

        if (!res.ok) {
          setStatus("error");
          setErrorMessage(
            body.error ??
              "Something went wrong. Please try again or email us directly.",
          );
          return;
        }

        setStatus("success");
        form.reset();
      } catch {
        setStatus("error");
        setErrorMessage(
          "Network error. Check your connection and try again, or email us directly.",
        );
      }
    },
    [],
  );

  return (
    <Card variant="elevated" padding="lg" className="shadow-lg shadow-black/20">
      <CardHeader
        eyebrow="Request"
        title="Technical consultation"
        headingId={FORM_HEADING_ID}
        description="Share enough context for an engineer to assess fit—architecture, constraints, and desired outcomes."
      />
      <form
        id="contact-consultation-form"
        className="mt-8 space-y-6"
        onSubmit={handleSubmit}
        aria-labelledby={FORM_HEADING_ID}
        aria-describedby={
          status === "error" && errorMessage
            ? `${hintId} ${statusId}`
            : hintId
        }
      >
        <p id={hintId} className="sr-only">
          Required fields are marked with an asterisk. We use this information only to
          respond to your inquiry.
        </p>

        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name <span className="text-[var(--accent)]">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
            placeholder="Your name"
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Work email <span className="text-[var(--accent)]">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            className={fieldClass}
            placeholder="you@company.com"
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="contact-company" className={labelClass}>
            Company or team
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            className={fieldClass}
            placeholder="Organization (optional)"
          />
        </div>

        <div>
          <label htmlFor="contact-project-type" className={labelClass}>
            Project type <span className="text-[var(--accent)]">*</span>
          </label>
          <select
            id="contact-project-type"
            name="projectType"
            required
            className={cn(fieldClass, "cursor-pointer appearance-none bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat pr-10")}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%238b95a8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
            }}
            aria-required="true"
            defaultValue=""
          >
            <option value="" disabled>
              Select a project type
            </option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="contact-project-description" className={labelClass}>
            Project description <span className="text-[var(--accent)]">*</span>
          </label>
          <textarea
            id="contact-project-description"
            name="projectDescription"
            required
            rows={6}
            className={cn(fieldClass, "min-h-[9rem] resize-y py-3 leading-relaxed")}
            placeholder="System context, stack, constraints, timeline, and what “good” looks like."
            aria-required="true"
          />
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
            disabled={status === "submitting"}
            ariaBusy={status === "submitting"}
          >
            {status === "submitting"
              ? "Sending…"
              : "Request Technical Consultation"}
          </Button>
          {status === "success" && (
            <p
              className="mt-4 text-sm font-medium text-[var(--foreground-secondary)]"
              role="status"
            >
              Thanks—we received your request and will reply from engineering.
            </p>
          )}
          {status === "error" && errorMessage && (
            <p
              id={statusId}
              className="mt-4 text-sm font-medium text-red-600 dark:text-red-400"
              role="alert"
            >
              {errorMessage}
            </p>
          )}
          <p className="mt-4 text-sm text-[var(--muted)]">
            This is not a marketing funnel—submissions go to engineering leadership for review.
          </p>
        </div>
      </form>
    </Card>
  );
}
