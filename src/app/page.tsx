import type { Metadata } from "next";
import { ImmersiveHomeClient } from "@/components/home/ImmersiveHomeClient";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Engineering intelligent systems for the long game",
  description:
    "BeaconFlame Innovations is a software engineering and technology consultancy building AI systems, agentic platforms, analytics, and digital solutions—from Kampala to global partners.",
  openGraph: {
    title: `BeaconFlame Innovations | ${siteConfig.tagline}`,
    description:
      "Software engineering, AI systems, agentic AI, analytics, and technology consultancy with world-class execution.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BeaconFlame Innovations",
    description:
      "Engineering-led technology consultancy: AI, platforms, analytics, and strategy.",
  },
};

export default function HomePage() {
  return <ImmersiveHomeClient />;
}
