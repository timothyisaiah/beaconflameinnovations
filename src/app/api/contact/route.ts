import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/data/site";

/**
 * Env for local dev: put these in `.env.local` (Next.js does not load arbitrary names like `.env.demo`).
 * Production: set the same variables on the deployment that actually runs this route (e.g. Vercel).
 *
 * - RESEND_API_KEY — from https://resend.com/api-keys
 * - CONTACT_TO_EMAIL — your inbox (where consultation requests arrive)
 * - CONTACT_FROM_EMAIL — verified sender, e.g. "BeaconFlame <hello@yourdomain.com>"
 *   (Resend test: "onboarding@resend.dev" only delivers to your Resend signup email)
 *
 * Static GitHub Pages builds cannot run this file; point the site at a live API via
 * NEXT_PUBLIC_CONTACT_API_URL. CORS below allows browser POSTs from your marketing origin.
 */

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
} as const;

function jsonResponse(body: unknown, init?: { status?: number }) {
  return NextResponse.json(body, {
    status: init?.status ?? 200,
    headers: CORS_HEADERS,
  });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

const LIMITS = {
  name: 200,
  email: 254,
  company: 200,
  projectType: 200,
  projectDescription: 12_000,
} as const;

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Body = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  projectType?: unknown;
  projectDescription?: unknown;
};

function parsePayload(body: Body) {
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const company =
    typeof body.company === "string" ? body.company.trim() : "";
  const projectType =
    typeof body.projectType === "string" ? body.projectType.trim() : "";
  const projectDescription =
    typeof body.projectDescription === "string"
      ? body.projectDescription.trim()
      : "";

  if (!name || name.length > LIMITS.name) {
    return { error: "Name is required or too long." as const };
  }
  if (!email || email.length > LIMITS.email || !emailPattern.test(email)) {
    return { error: "A valid email is required." as const };
  }
  if (!projectType || projectType.length > LIMITS.projectType) {
    return { error: "Project type is required." as const };
  }
  if (
    !projectDescription ||
    projectDescription.length > LIMITS.projectDescription
  ) {
    return {
      error: "Project description is required or too long." as const,
    };
  }
  if (company.length > LIMITS.company) {
    return { error: "Company field is too long." as const };
  }

  return {
    data: { name, email, company, projectType, projectDescription },
  };
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return jsonResponse(
      { error: "Contact email is not configured on the server." },
      { status: 503 },
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!json || typeof json !== "object") {
    return jsonResponse({ error: "Invalid payload." }, { status: 400 });
  }

  const parsed = parsePayload(json as Body);
  if ("error" in parsed) {
    return jsonResponse({ error: parsed.error }, { status: 400 });
  }

  const { name, email, company, projectType, projectDescription } =
    parsed.data;

  const en = escapeHtml(name);
  const ee = escapeHtml(email);
  const ec = escapeHtml(company);
  const ept = escapeHtml(projectType);
  const epd = escapeHtml(projectDescription).replace(/\n/g, "<br/>");

  const html = `
    <h2 style="font-family:system-ui,sans-serif;font-size:1.125rem;">Technical consultation request</h2>
    <table style="font-family:system-ui,sans-serif;font-size:0.9375rem;border-collapse:collapse;">
      <tr><td style="padding:0.35rem 1rem 0.35rem 0;vertical-align:top;color:#555;"><strong>Name</strong></td><td style="padding:0.35rem 0;">${en}</td></tr>
      <tr><td style="padding:0.35rem 1rem 0.35rem 0;vertical-align:top;color:#555;"><strong>Email</strong></td><td style="padding:0.35rem 0;"><a href="mailto:${ee}">${ee}</a></td></tr>
      <tr><td style="padding:0.35rem 1rem 0.35rem 0;vertical-align:top;color:#555;"><strong>Company</strong></td><td style="padding:0.35rem 0;">${ec || "—"}</td></tr>
      <tr><td style="padding:0.35rem 1rem 0.35rem 0;vertical-align:top;color:#555;"><strong>Project type</strong></td><td style="padding:0.35rem 0;">${ept}</td></tr>
    </table>
    <p style="font-family:system-ui,sans-serif;font-size:0.9375rem;margin-top:1rem;"><strong>Description</strong></p>
    <p style="font-family:system-ui,sans-serif;font-size:0.9375rem;line-height:1.5;white-space:pre-wrap;">${epd}</p>
  `.trim();

  const text = [
    `Technical consultation request — ${siteConfig.name}`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "—"}`,
    `Project type: ${projectType}`,
    "",
    "Description:",
    projectDescription,
  ].join("\n");

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `[${siteConfig.name}] Consultation: ${name}`,
    html,
    text,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return jsonResponse(
      { error: "Could not send your message. Please try again later." },
      { status: 502 },
    );
  }

  return jsonResponse({ ok: true });
}
