"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

const inquiryTypes = [
  "Engineering / platform build",
  "AI systems or agentic workflow program",
  "Analytics / data platform",
  "Advisory / diligence",
  "Partnership discussion",
  "Media / other",
];

const fieldClass =
  "w-full px-4 py-3 rounded-xl border border-[#87158c]/20 bg-white text-[var(--foreground)] placeholder:text-[var(--muted)] dark:border-white/10 dark:bg-[#05060a] dark:text-[#e8ecf4] focus:border-[#87158c]/50 focus:ring-2 focus:ring-[#87158c]/15 outline-none transition-all";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="pt-28">
      <section className="py-16 md:py-20 border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-[#87158c] mb-4">
              Contact
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-semibold text-[var(--foreground)] mb-6 tracking-tight">
              Serious inquiries welcome.
            </h1>
            <p className="text-xl text-[var(--muted)] max-w-2xl leading-relaxed">
              For engagements, partnerships, and advisory discussions—share
              context and we will respond with clarity on fit and next steps.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-[#87158c]/15 bg-white/95 p-8 md:p-10 dark:border-white/[0.08] dark:bg-[#0b0c10]/80"
              >
                <h2 className="text-2xl font-display font-semibold text-[var(--foreground)] mb-8">
                  Send a message
                </h2>

                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[var(--muted)] mb-2"
                    >
                      Full name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className={fieldClass}
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[var(--muted)] mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className={fieldClass}
                      placeholder="you@organization.com"
                      autoComplete="email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-[var(--muted)] mb-2"
                    >
                      Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className={fieldClass}
                      placeholder="Company or institution"
                      autoComplete="organization"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="inquiryType"
                      className="block text-sm font-medium text-[var(--muted)] mb-2"
                    >
                      Inquiry type *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      value={formState.inquiryType}
                      onChange={handleChange}
                      className={fieldClass}
                    >
                      <option value="">Select an option</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[var(--muted)] mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className={`${fieldClass} resize-none`}
                      placeholder="Context, timeline, constraints, outcomes…"
                    />
                  </div>
                </div>

                <div className="mt-10">
                  <Button type="submit" variant="primary" size="lg" className="rounded-full px-10">
                    Submit inquiry
                  </Button>
                </div>
              </form>
            </AnimatedSection>

            <AnimatedSection>
              <div className="space-y-10">
                <div>
                  <h2 className="text-2xl font-display font-semibold text-[var(--foreground)] mb-6">
                    Direct channels
                  </h2>
                  <p className="text-[var(--muted)] leading-relaxed">
                    Headquarters in Kampala, Uganda—delivery and communication
                    aligned to global enterprise expectations.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#87158c]/10 flex items-center justify-center flex-shrink-0 border border-[#87158c]/20">
                      <svg
                        className="w-5 h-5 text-[#87158c]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--foreground)]">Location</h3>
                      <p className="text-[var(--muted)]">Kampala, Uganda</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#87158c]/10 flex items-center justify-center flex-shrink-0 border border-[#87158c]/20">
                      <svg
                        className="w-5 h-5 text-[#87158c]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--foreground)]">Email</h3>
                      <a
                        href="mailto:contact@beaconflameinnovations.com"
                        className="text-[#87158c] hover:underline"
                      >
                        contact@beaconflameinnovations.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
