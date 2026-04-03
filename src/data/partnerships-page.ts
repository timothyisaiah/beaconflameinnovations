/**
 * Copy and structure for the Partnerships page (business development).
 */

export const partnershipModelOverview = {
  title: "What partnership means here",
  intro:
    "Partnership is a defined collaboration model—not a logo swap or informal referral. Engagements are scoped to outcomes, governed with clear accountability, and executed with engineering discipline so both sides can plan with confidence.",
  pillars: [
    {
      title: "Explicit scope and roles",
      description:
        "We agree on boundaries, decision rights, and delivery ownership before work accelerates—reducing ambiguity that derails programs.",
    },
    {
      title: "Shared risk, shared upside",
      description:
        "Models align incentives: fixed phases, milestone-based delivery, or advisory retainers—matched to your constraints and the nature of the work.",
    },
    {
      title: "Production-grade delivery",
      description:
        "Senior practitioners lead execution with transparent cadence—so stakeholders see progress in systems, not slide decks.",
    },
  ],
};

export type PartnershipTrackId = "business" | "investor" | "institution";

export const partnershipTracks: {
  id: PartnershipTrackId;
  label: string;
  title: string;
  partnershipType: string;
  weBring: string;
  partnerGains: string;
  examples: string[];
}[] = [
  {
    id: "business",
    label: "Businesses",
    title: "Commercial & product partnerships",
    partnershipType:
      "Co-delivery, embedded engineering, and platform programs for teams that need senior execution without building a permanent bench for every capability.",
    weBring:
      "Architecture leadership, full-stack and AI systems delivery, program governance, and candid tradeoff analysis—so product and engineering leaders stay aligned on what ships and why.",
    partnerGains:
      "Faster time-to-value on roadmaps, de-risked modernization and AI adoption, and a partner who can speak credibly to both executives and engineering teams.",
    examples: [
      "Multi-phase platform build with milestone governance and shared steering",
      "Product or data pipeline co-development with defined interfaces and ownership",
      "Technical spike → roadmap → phased delivery for complex or regulated domains",
    ],
  },
  {
    id: "investor",
    label: "Investors",
    title: "Diligence & portfolio advisory",
    partnershipType:
      "Structured technical diligence, architecture reviews, and post-close advisory for funds and operators evaluating or scaling software-heavy bets.",
    weBring:
      "Deep-dive assessments on architecture, team capability, delivery realism, and AI/agent claims—framed for investment and board decisions, not vendor pitches.",
    partnerGains:
      "Clearer underwriting of technical risk, sharper post-close plans, and a consistent lens across portfolio companies when you need repeatability.",
    examples: [
      "Buy-side technical diligence with findings mapped to deal structure and milestones",
      "Portfolio company diagnostics: delivery, stack, and AI readiness",
      "Board- or IC-ready summaries with explicit risks, assumptions, and options",
    ],
  },
  {
    id: "institution",
    label: "Institutions & ecosystem",
    title: "Public sector, academic, and ecosystem collaboration",
    partnershipType:
      "Programs that require alignment across stakeholders, compliance-aware delivery, and long-horizon coordination—research, civic, or industry consortia.",
    weBring:
      "Stakeholder-ready communication, disciplined execution against requirements, and engineering that respects procurement, privacy, and operational realities.",
    partnerGains:
      "A delivery partner who can bridge policy intent and implementation—without sacrificing maintainability or security posture.",
    examples: [
      "Pilot-to-scale roadmaps with evaluation criteria and handover planning",
      "Shared capability builds with ecosystem or multi-party governance",
      "Open standards–friendly integration layers for legacy and modern systems",
    ],
  },
];

export const collaborationPhases = [
  {
    title: "Discovery",
    description:
      "We clarify goals, constraints, stakeholders, and success measures—so we are solving the right problem before we commit to a model.",
  },
  {
    title: "Alignment",
    description:
      "We propose scope, phases, roles, and commercial structure. You get a candid view of fit, risks, and what “done” means at each step.",
  },
  {
    title: "Execution model",
    description:
      "Delivery runs with defined cadence: milestones, demos, documentation, and escalation paths. Changes go through an explicit change path—not ad hoc drift.",
  },
  {
    title: "Ongoing coordination",
    description:
      "Steering, reporting, and technical governance continue through the engagement—so decisions stay aligned as reality hits the plan.",
  },
];

export const partnershipOutcomes = [
  {
    title: "Clarity before capital and code",
    description:
      "Shared understanding of outcomes, scope, and tradeoffs—so investment in engineering matches business intent.",
  },
  {
    title: "Faster, safer execution",
    description:
      "Senior-led delivery with transparent progress reduces rework and avoids the hidden costs of misaligned teams.",
  },
  {
    title: "Durable systems and relationships",
    description:
      "Architectures and partnership rhythms designed to compound—so the work holds up after the first release.",
  },
  {
    title: "Executive-ready communication",
    description:
      "Reporting that connects technical reality to business and governance audiences—without diluting substance.",
  },
];
