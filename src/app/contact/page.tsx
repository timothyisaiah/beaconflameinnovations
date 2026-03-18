"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

const inquiryTypes = [
  "General Inquiry",
  "Partnership Opportunity",
  "Product / Solution Inquiry",
  "Investment Inquiry",
  "Media / Press",
];

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
    // Form submission logic - ready for API integration
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
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-[#c9a227] font-medium tracking-widest uppercase text-sm mb-4">
              Contact
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-[#faf8f5] mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-[#faf8f5]/80 max-w-2xl">
              Have a question or want to explore a partnership? We&apos;d love to
              hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <AnimatedSection>
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 md:p-10 border border-[#f5f0e8] shadow-sm"
              >
                <h2 className="text-2xl font-display font-bold text-[#0f172a] mb-6">
                  Send a Message
                </h2>

                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#0f172a] mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#e5e0d8] focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#0f172a] mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#e5e0d8] focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none transition-all"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-[#0f172a] mb-2"
                    >
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#e5e0d8] focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none transition-all"
                      placeholder="Your organization"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="inquiryType"
                      className="block text-sm font-medium text-[#0f172a] mb-2"
                    >
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      value={formState.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#e5e0d8] focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none transition-all bg-white"
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
                      className="block text-sm font-medium text-[#0f172a] mb-2"
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
                      className="w-full px-4 py-3 rounded-lg border border-[#e5e0d8] focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <Button type="submit" variant="primary" size="lg">
                    Send Message
                  </Button>
                </div>
              </form>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-display font-bold text-[#0f172a] mb-6">
                    Contact Information
                  </h2>
                  <p className="text-[#1e293b]/80 leading-relaxed">
                    For business inquiries, partnership discussions, or general
                    questions, reach out through the form or the details below.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#c9a227]/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-[#c9a227]"
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
                      <h3 className="font-semibold text-[#0f172a]">Location</h3>
                      <p className="text-[#1e293b]/80">
                        Headquarters • Global Operations
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#c9a227]/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-[#c9a227]"
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
                      <h3 className="font-semibold text-[#0f172a]">Email</h3>
                      <a
                        href="mailto:contact@beaconflameinnovations.com"
                        className="text-[#c9a227] hover:underline"
                      >
                        contact@beaconflameinnovations.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-[#e5e0d8]">
                  <h3 className="font-semibold text-[#0f172a] mb-4">
                    Connect With Us
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-[#1e293b]/70 hover:text-[#c9a227] transition-colors"
                      aria-label="LinkedIn"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="#"
                      className="text-[#1e293b]/70 hover:text-[#c9a227] transition-colors"
                      aria-label="Twitter"
                    >
                      Twitter
                    </a>
                    <a
                      href="#"
                      className="text-[#1e293b]/70 hover:text-[#c9a227] transition-colors"
                      aria-label="Instagram"
                    >
                      Instagram
                    </a>
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
