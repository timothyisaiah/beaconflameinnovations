import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Request a technical consultation with ${siteConfig.name}—engineering-led response for founders and enterprise teams. Not a generic sales funnel.`,
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description:
      "Talk to an engineer about your system. Technical consultation, fast response, and exploratory first conversations.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
