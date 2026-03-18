import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Beacon Flame Innovations Ltd | Powering Innovation Across Industries",
    template: "%s | Beacon Flame Innovations",
  },
  description:
    "A multi-sector innovation company operating at the intersection of Technology, Financial Technology, and Agro-business. Innovation at scale.",
  keywords: [
    "innovation",
    "fintech",
    "agro-business",
    "technology",
    "sustainable agriculture",
    "financial inclusion",
  ],
  openGraph: {
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
