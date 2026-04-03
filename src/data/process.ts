export type ProcessStep = {
  id: string;
  title: string;
  summary: string;
  whatHappens: string;
  whyItMatters: string;
  deliverables: string[];
  riskAndQuality: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: "discover",
    title: "Discover",
    summary:
      "Clarify outcomes, constraints, and context before a line of production code is written.",
    whatHappens:
      "We align with stakeholders on the problem space, users, success metrics, and operational reality. We map dependencies, data sensitivities, and integration surfaces—so scope reflects how work actually lands in your organization.",
    whyItMatters:
      "Misaligned discovery is the root cause of expensive rework. This phase replaces assumptions with shared understanding and measurable intent.",
    deliverables: [
      "Discovery brief and problem framing",
      "Constraints and assumptions log",
      "Initial themes, risks, and dependency map",
      "Engagement model and communication cadence",
    ],
    riskAndQuality:
      "Surfaces unknowns while change is cheap—reducing the chance of building the wrong system or underestimating integration and governance work.",
  },
  {
    id: "architect",
    title: "Architect",
    summary:
      "Define boundaries, interfaces, and delivery slices that stay coherent as the system grows.",
    whatHappens:
      "We translate discovery into a technical direction: service boundaries, data flows, security posture, deployment topology, and observability expectations. Decisions are documented with clear tradeoffs—not slide-deck optimism.",
    whyItMatters:
      "Architecture is where scalability, security, and operability are won or lost. Getting structure right early protects velocity later.",
    deliverables: [
      "Target architecture and integration model",
      "Key decisions (ADRs) with alternatives considered",
      "Non-functional requirements (security, reliability, performance)",
      "Phased delivery plan aligned to risk reduction",
    ],
    riskAndQuality:
      "Prevents brittle coupling and late surprises in production—so teams can execute with confidence and auditability.",
  },
  {
    id: "build",
    title: "Build",
    summary:
      "Ship in tight loops with engineering discipline—integration, review, and verification baked in.",
    whatHappens:
      "We implement in iterative increments with continuous integration, structured review, and automated checks where they earn their place. Observability and operational hooks are not an afterthought—they ride along with features.",
    whyItMatters:
      "Quality compounds through repetition: small batches, fast feedback, and honest status reduce the distance between intent and running software.",
    deliverables: [
      "Working software in production-oriented environments",
      "Test and quality gates appropriate to the domain",
      "Technical documentation for maintainers",
      "Regular demos and decision logs",
    ],
    riskAndQuality:
      "Catches defects and integration issues early—avoiding a single high-stakes release that carries hidden operational debt.",
  },
  {
    id: "deploy-scale",
    title: "Deploy & Scale",
    summary:
      "Operate safely, measure what matters, and grow capacity without sacrificing stability.",
    whatHappens:
      "We plan and execute releases with rollback paths, monitoring, and clear ownership. We tune performance, capacity, and cost profiles as traffic and data grow—keeping security and compliance in view.",
    whyItMatters:
      "Systems deliver value in production. Mature deployment and scaling practices protect users, revenue, and reputation.",
    deliverables: [
      "Release and rollback runbooks",
      "Monitoring, alerting, and SLO-aligned dashboards",
      "Handover materials and operational ownership model",
      "Scaling and continuity recommendations",
    ],
    riskAndQuality:
      "Reduces outage and data-risk exposure through controlled rollout, visibility, and operational readiness—so growth does not outpace control.",
  },
];

export const deliveryPrinciples = [
  {
    title: "Production-first planning",
    description:
      "We design for how software is actually operated: deployments, incidents, data lifecycle, and ownership—not just feature lists.",
  },
  {
    title: "Clear communication and ownership",
    description:
      "Decisions, tradeoffs, and status are explicit. Roles are unambiguous so executives get clarity and engineers get room to execute.",
  },
  {
    title: "Security and scale considered early",
    description:
      "Threat models, access patterns, and growth paths are part of the conversation from the start—not bolted on after launch.",
  },
  {
    title: "Iterative delivery with technical rigor",
    description:
      "We favor small, verifiable increments with strong engineering practice—so speed does not come at the cost of maintainability.",
  },
] as const;

export const processFaq = [
  {
    question: "How long does each phase take?",
    answer:
      "Duration depends on domain complexity, regulatory context, and team access. We size phases against concrete outcomes—not arbitrary calendars—and communicate timeline risk as we learn.",
  },
  {
    question: "Can we start mid-stream if we already have designs or code?",
    answer:
      "Yes. We begin with a structured assessment of what exists: architecture fit, technical debt, operational readiness, and gaps against your goals—then align the process to your reality.",
  },
  {
    question: "How do you handle changes in scope or priorities?",
    answer:
      "Change is expected. We track impact on milestones, risk, and dependencies, and we document decisions so teams and leadership share the same picture of what shifted and why.",
  },
  {
    question: "What does “done” look like for an engagement?",
    answer:
      "Done means production-ready delivery with agreed handover: documentation, monitoring hooks, and ownership clarity—so your team can operate and evolve the system without heroics.",
  },
  {
    question: "Do you work with both startups and enterprise programs?",
    answer:
      "Yes. We calibrate ceremony and tooling to the context—lean where speed matters, rigorous where auditability and scale demand it—without compromising engineering discipline.",
  },
] as const;
