import type { Metadata } from "next";
import { LandingPage } from "@/components/home/landing/LandingPage";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Production-ready AI systems, fintech platforms, and infrastructure",
  description:
    "BeaconFlame Innovations builds production-ready AI systems, fintech platforms, and scalable digital infrastructure for startups and enterprise teams.",
  openGraph: {
    title: `${siteConfig.name} | AI, fintech, and platform engineering`,
    description:
      "Production-ready AI systems, embedded finance, and scalable infrastructure—engineered for startups and enterprise teams.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description:
      "Production AI, fintech platforms, and scalable infrastructure for serious teams.",
  },
};

export default function HomePage() {
  return <LandingPage />;
}
