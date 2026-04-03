import type { Metadata } from "next";
import { AboutPage } from "@/components/about/AboutPage";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `Why ${siteConfig.name} exists, how we build systems, and why founders and CTOs trust us as a technical partner—production discipline, clarity, and execution.`,
};

export default function AboutRoute() {
  return <AboutPage />;
}
