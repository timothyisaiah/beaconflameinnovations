import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name} for engineering engagements, AI programs, analytics work, and partnerships.`,
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description:
      "Reach the team for serious business inquiries, partnerships, and consulting engagements.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
