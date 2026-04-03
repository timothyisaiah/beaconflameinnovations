/**
 * Solutions page content — edit here to update copy without touching layout.
 */

export type SolutionBlockContent = {
  id: string;
  title: string;
  /** Buyer-facing problem statement */
  problem: string;
  /** How we design and ship the system */
  approach: string;
  /** Concrete scenarios */
  useCases: string[];
  /** Engineering / delivery reality */
  deliveryNotes: string;
  /** Business and technical outcome */
  outcome: string;
};

export type PrincipleContent = {
  title: string;
  description: string;
};

export const solutionsPageMeta = {
  title: "Solutions",
  description:
    "Production-ready systems for AI automation, fraud and risk, embedded finance, internal platforms, and product infrastructure—engineered for security, APIs, and scale.",
};

export const solutionsHero = {
  eyebrow: "Solutions",
  headline: "Production systems—not slide decks.",
  supporting:
    "We design, build, and operate software that runs in real environments: measurable latency, clear failure modes, and ownership through launch and iteration. Outcomes are system-level—reliability, throughput, and defensible risk posture—not generic digital transformation.",
};

export const solutionsOverview = {
  headline: "Depth over breadth",
  intro:
    "Beacon Flame Innovations partners with technical leaders who need execution, not abstraction. Each engagement is scoped around a concrete system boundary—data contracts, service ownership, and operational runbooks—not a laundry list of technologies.",
  highlights: [
    {
      title: "Systems, not projects",
      description:
        "Architecture, delivery, and observability planned as one program so releases don’t erode the foundation.",
    },
    {
      title: "Aligned to your risk profile",
      description:
        "Security, compliance, and fraud constraints are modeled early—not bolted on after production pain.",
    },
    {
      title: "Measurable delivery",
      description:
        "Success criteria tie to production metrics: availability, precision/recall, cost per transaction, or time-to-recover.",
    },
  ],
};

export const solutionBlocks: SolutionBlockContent[] = [
  {
    id: "ai-systems",
    title: "AI Systems & Automation",
    problem:
      "Teams need AI that survives contact with production: versioning, evaluation, guardrails, and human-in-the-loop workflows—not one-off prompts wrapped in a UI.",
    approach:
      "We define clear system boundaries: retrieval and feature pipelines, model serving interfaces, evaluation harnesses, and escalation paths. Orchestration is explicit; failure modes are designed, not discovered in incidents.",
    useCases: [
      "Document-heavy workflows with extraction, classification, and audit trails",
      "Agent-style automations with tool APIs, policy checks, and kill switches",
      "Operational copilots grounded in your data with access control and logging",
    ],
    deliveryNotes:
      "Typical stack patterns include API-first services, queue-backed workers, structured logging, and offline/online evaluation against labeled sets—integrated with your CI and release process.",
    outcome:
      "Faster cycle time on high-touch processes with defensible automation: fewer manual errors, clearer accountability, and a path to improve models without destabilizing production.",
  },
  {
    id: "fraud-risk",
    title: "Fraud Detection & Risk Systems",
    problem:
      "Fraud and abuse move faster than quarterly roadmap cycles. Rule-only systems miss nuance; black-box scores frustrate auditors and operations.",
    approach:
      "We combine event pipelines, rules engines, and model-assisted scoring with explainable tiers and case-management hooks. Decisions are logged end-to-end; overrides and appeals are first-class flows.",
    useCases: [
      "Real-time scoring on payments, onboarding, or high-value transfers",
      "Device and behavioral signals fused with business rules and watchlists",
      "Investigation tooling: queues, notes, and reproducible decision snapshots",
    ],
    deliveryNotes:
      "Delivery emphasizes idempotent ingestion, backtesting on historical fraud labels, shadow mode before enforcement, and dashboards for precision/recall and operational load.",
    outcome:
      "Lower loss rates and chargebacks with faster investigations—without trapping the business in a model nobody can explain or tune.",
  },
  {
    id: "fintech-embedded",
    title: "Fintech Platforms & Embedded Finance",
    problem:
      "Launching financial products means more than an app: ledger integrity, reconciliation, partner APIs, and regulatory expectations must hold under growth and edge cases.",
    approach:
      "We model money movement as explicit state machines and APIs: accounts, balances, settlements, and idempotent payment intents. Partner and bank integrations sit behind stable internal contracts.",
    useCases: [
      "Wallet, ledger, and settlement flows with audit-ready history",
      "Embedded lending or BNPL with eligibility, servicing hooks, and disclosures",
      "Merchant or agent networks with tiered permissions and limits",
    ],
    deliveryNotes:
      "Implementation is API-first (REST/GraphQL + webhooks), with strong typing, reconciliation jobs, and runbooks for partner incidents and partial outages.",
    outcome:
      "Ship financial features with operational confidence: fewer reconciliation fires, clearer path to scale, and interfaces your partners can integrate without constant firefighting.",
  },
  {
    id: "internal-ops",
    title: "Internal Operations Platforms",
    problem:
      "Spreadsheets and ad hoc tools don’t scale with headcount. Operations teams need a single place to run workflows with permissions, history, and integrations to core systems.",
    approach:
      "We build role-aware internal products: workflow engines or stateful case management, integrations via APIs and events, and reporting that matches how leadership actually measures throughput.",
    useCases: [
      "KYC/ops queues with SLAs, escalations, and external data providers",
      "Inventory, logistics, or field coordination with mobile and offline-tolerant patterns",
      "Finance and rev-ops tooling with approvals, exports, and controls",
    ],
    deliveryNotes:
      "Frontends are accessible and fast; backends emphasize tenancy, audit logs, and batch vs. real-time boundaries. Deployments fit your environment (cloud or hybrid) with clear backup and restore expectations.",
    outcome:
      "Higher throughput per operator, fewer manual errors, and exec visibility into bottlenecks—without buying a one-size ERP that never fits.",
  },
  {
    id: "product-engineering",
    title: "Product Engineering & Infrastructure",
    problem:
      "Product velocity stalls when infrastructure is brittle: deploy fear, mystery latency, and “who owns this service?” during incidents.",
    approach:
      "We treat platform work as product work: service boundaries, observability, CI/CD, and cost controls are designed alongside feature roadmaps. Developer experience and on-call sustainability are requirements, not afterthoughts.",
    useCases: [
      "Greenfield services or modularizing a monolith behind clear APIs",
      "Performance and cost tuning with tracing, profiling, and load testing",
      "Hardening release pipelines: environments, feature flags, rollback paths",
    ],
    deliveryNotes:
      "Work is incremental—strangler patterns, contract tests, and SLOs per critical path. Documentation and runbooks ship with the code.",
    outcome:
      "Teams ship with confidence: shorter lead times, predictable incidents, and infrastructure bills aligned with actual usage.",
  },
];

export const technicalPrinciples: PrincipleContent[] = [
  {
    title: "Secure-by-design",
    description:
      "Threat modeling, least-privilege access, secrets hygiene, and encryption expectations are part of the first architecture pass—not a late audit checklist.",
  },
  {
    title: "API-first architecture",
    description:
      "Services expose stable contracts for clients and partners; internal boundaries stay explicit so teams can evolve implementations without silent coupling.",
  },
  {
    title: "Scalability from day one",
    description:
      "We separate hot paths, use horizontal scaling patterns where they matter, and avoid premature complexity—while keeping data models and partitions compatible with growth.",
  },
  {
    title: "Reliability, observability, maintainability",
    description:
      "SLOs, metrics, tracing, and structured logs are built in. On-call runbooks and ownership are clear so systems stay understandable as they grow.",
  },
];

export const solutionsCta = {
  headline: "Ready to scope a system, not a slide?",
  supporting:
    "Bring a concrete problem domain—we’ll map architecture options, delivery phases, and what “done” means in production.",
  ctaLabel: "Book a Technical Consultation",
  ctaHref: "/contact",
};
