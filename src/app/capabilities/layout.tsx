import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Solutions",
  description: `Solutions and production systems—${siteConfig.name}. This URL redirects to /solutions.`,
  alternates: {
    canonical: "/solutions",
  },
};

export default function CapabilitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
