const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const capabilities = [
  {
    id: "ai-systems",
    title: "AI Systems",
    image: `${assetBase}/assets/cap/ai-systems.webp`,
    summary:
      "Applied AI, model-enabled business systems, and intelligent workflow automation embedded where decisions and throughput matter.",
    points: [
      "Applied AI solutions",
      "AI-powered products",
      "Model-enabled business systems",
      "Intelligent workflow automation",
    ],
  },
  {
    id: "agentic",
    title: "AI Agents & Agentic AI",
    image: `${assetBase}/assets/cap/ai-agents.webp`,
    summary:
      "Autonomous workflows, multi-agent orchestration, and digital workers designed for operations, service, analysis, and decision support.",
    points: [
      "Autonomous workflow systems",
      "Multi-agent orchestration",
      "Digital workers",
      "Agentic process design",
    ],
  },
  {
    id: "engineering",
    title: "Software Engineering",
    image: `${assetBase}/assets/cap/engineering.webp`,
    summary:
      "Platform engineering, modern architecture, and disciplined product delivery across web, mobile, and enterprise systems.",
    points: [
      "Platform engineering",
      "Web and mobile systems",
      "Custom enterprise software",
      "Architecture and delivery",
    ],
  },
  {
    id: "data",
    title: "Data & Analytics",
    image: `${assetBase}/assets/cap/data-analytics.webp`,
    summary:
      "Analytics platforms, BI, pipelines, and product analytics that make operational and strategic signal legible.",
    points: [
      "Analytics platforms and dashboards",
      "Business intelligence systems",
      "Decision support tools",
      "Data pipelines and product analytics",
    ],
  },
  {
    id: "consultancy",
    title: "Technology Consultancy",
    image: `${assetBase}/assets/cap/consultancy.webp`,
    summary:
      "Product strategy, systems design, transformation, advisory, due diligence, and long-range technology planning.",
    points: [
      "Product strategy and systems design",
      "Digital transformation",
      "Engineering advisory",
      "Technical due diligence",
      "Long-term technology planning",
    ],
  },
] as const;

export const expertisePillars = [
  {
    title: "Engineering depth",
    body:
      "Architecture, implementation, and reliability practices shaped by years of shipping complex systems under real constraints.",
  },
  {
    title: "Product maturity",
    body:
      "Roadmaps, delivery cadence, and stakeholder alignment that turn strategy into working software—not slide decks.",
  },
  {
    title: "Analytics discipline",
    body:
      "Measurement design, pipelines, and decision-grade views that connect data work to business outcomes.",
  },
  {
    title: "Strategic guidance",
    body:
      "Honest trade-offs, technical due diligence, and roadmaps calibrated for durability—not quarterly theater.",
  },
] as const;

export const differentiation = [
  {
    title: "Engineering-first",
    body:
      "We lead with build quality, system boundaries, and operational reality—because credibility is earned in production.",
  },
  {
    title: "Globally minded",
    body:
      "Standards, communication, and delivery rhythms aligned with international partners and enterprise expectations.",
  },
  {
    title: "Future-facing",
    body:
      "AI-native patterns where they earn their place—agents, automation, and intelligent platforms with clear ownership.",
  },
  {
    title: "Grounded in execution",
    body:
      "Roadmaps tie to milestones, risks, and measurable outcomes. Strategy without delivery is not the brief.",
  },
  {
    title: "Strategic, not superficial",
    body:
      "We optimize for durable systems and partnerships—designed to compound, not chase novelty for its own sake.",
  },
  {
    title: "Kampala roots, global relevance",
    body:
      "Headquartered in Kampala with a world-class bar for craft, clarity, and engineering discipline.",
  },
] as const;

export const industries = [
  "Finance",
  "Logistics",
  "Agriculture",
  "Health",
  "Commerce",
  "Enterprise operations",
  "Public sector systems",
  "Digital services",
] as const;
