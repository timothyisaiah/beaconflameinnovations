/**
 * About page copy — edit here to update bios, origin story, and credibility claims.
 * CTA target lives in `src/components/home/landing/placeholders.ts` (`CONTACT_PATH`).
 */

export const aboutHero = {
  eyebrow: "About",
  title: "A technical partner for systems that have to work",
  lead:
    "BeaconFlame Innovations exists to close the gap between ambitious roadmaps and software that survives real users, real load, and real operations. We work with founders shipping their first production stack and with enterprise teams modernizing platforms—always with the same bar: clarity, reliability, and delivery you can audit.",
  supporting:
    "Built for global collaboration. Engineering-led, documentation-backed, and allergic to hype without execution.",
} as const;

export const aboutOrigin = {
  eyebrow: "Origin",
  title: "Why we started",
  /** Problem observed in the market — concrete, not slogan */
  problemParas: [
    "Across startups and enterprises, we kept seeing the same failure mode: initiatives that looked successful in demos but broke under ownership, scale, or compliance. Teams were sold “AI transformation” and given brittle glue code. Product roadmaps prioritized visible features while core workflows stayed opaque, untested, or impossible to operate.",
    "Buyers had no shortage of vendors promising speed. What they lacked was a partner who would name trade-offs early, design for production constraints, and stay accountable through handover—not disappear after the workshop.",
  ],
  /** Why the company exists now */
  whyNowParas: [
    "BeaconFlame Innovations was founded to do that work deliberately: to build and evolve systems where the hard parts—boundaries, data flows, security posture, and operability—are treated as first-class, not leftovers for “phase two.”",
    "That is the work organizations need as AI, agents, and embedded finance move from experiments to regulated, customer-facing surfaces. The window for credible execution is narrow; we exist to help teams use it well.",
  ],
} as const;

export const aboutPrinciples = {
  eyebrow: "Philosophy",
  title: "How we think about building",
  description:
    "Operating principles we apply to every engagement—whether we are designing an architecture review or shipping a multi-service platform.",
  items: [
    {
      title: "Production over prototypes",
      body:
        "We optimize for what runs under load, with real data and real operators—not what impresses in a sandbox. Demos are useful; deployable systems are the product.",
    },
    {
      title: "Systems over surface-level features",
      body:
        "Features sit on top of contracts, data models, and failure modes. We design the spine first so the roadmap doesn’t collapse when you add the next integration or region.",
    },
    {
      title: "Execution over hype",
      body:
        "We are candid about what is proven, what is experimental, and what your team must own. Roadmaps are tied to measurable milestones—not narrative arcs.",
    },
    {
      title: "Scalability, reliability, and clarity",
      body:
        "Performance and resilience are designed in, not bolted on. Documentation and observability are part of delivery—because software you cannot explain is software you cannot trust.",
    },
  ],
} as const;

export const aboutCredibility = {
  eyebrow: "Credibility",
  title: "What technical buyers can verify",
  description:
    "We are comfortable with diligence-style conversations: architecture, security posture, delivery methodology, and how we hand work back to your team.",
  columns: [
    {
      title: "Experience domains",
      bullets: [
        "Software engineering and platform modernization",
        "AI systems, agents, and workflow automation—where they earn their place",
        "Data platforms, analytics, and integration-heavy programs",
        "Digital transformation with governance and operational realism",
      ],
    },
    {
      title: "Types of systems we build",
      bullets: [
        "API-first services and event-driven pipelines",
        "Cloud-native infrastructure with cost and reliability guardrails",
        "Analytics and decision-support surfaces with clear lineage",
        "Secure integration layers for partners and regulated workflows",
      ],
    },
    {
      title: "Engineering mindset",
      bullets: [
        "Explicit trade-offs: latency vs. consistency, build vs. buy, risk vs. speed",
        "Testing and release discipline appropriate to blast radius",
        "Threat-aware design—not security as a late-stage checklist",
      ],
    },
    {
      title: "Delivery philosophy",
      bullets: [
        "Milestones tied to working software and observable outcomes",
        "Documentation and handover as deliverables, not afterthoughts",
        "Communication that works for executives and engineers in the same thread",
      ],
    },
  ],
} as const;

/** Replace with real names, photos, and bios when ready */
export const aboutTeam = {
  eyebrow: "Team",
  title: "Who you work with",
  description:
    "A small, senior-led practice—structured so you interact directly with people who build and own technical decisions. Details below are placeholders until public bios are finalized.",
  members: [
    {
      name: "Name to be announced",
      title: "Founder & principal engineering lead",
      bio:
        "Sets technical direction, owns architecture decisions, and stays engaged through delivery and handover. Background in production systems and cross-functional programs.",
      disciplines: ["Systems architecture", "Delivery leadership", "Security-aware design"],
    },
    {
      name: "Name to be announced",
      title: "Product & program lead",
      bio:
        "Aligns scope to outcomes, translates constraints into roadmaps, and keeps stakeholders aligned without diluting engineering rigor.",
      disciplines: ["Program structure", "Stakeholder communication", "Roadmap trade-offs"],
    },
    {
      name: "Vetted specialists",
      title: "Extended delivery network",
      bio:
        "For larger programs we bring in vetted specialists (e.g. ML, data engineering, DevOps) under the same delivery standards and documentation bar.",
      disciplines: ["Domain expertise", "Consistent delivery model"],
    },
  ],
} as const;

export const aboutCta = {
  title: "Discuss fit and constraints",
  body:
    "If you are evaluating a build, a modernization, or an AI-enabled workflow that must hold up in production, we will give you a direct technical conversation—scope, risks, and a realistic path forward.",
  buttonLabel: "Book a Technical Consultation",
  href: "/contact" as const,
} as const;
