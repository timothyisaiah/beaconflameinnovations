import Link from "next/link";
import { ImageMark } from "@/components/layout/ImageMark";
import { Container } from "@/components/ds/Container";
import { siteConfig } from "@/data/site";

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/solutions", label: "Solutions" },
    { href: "/process", label: "Process" },
    { href: "/partnerships", label: "Partnerships" },
  ],
  connect: [{ href: "/contact", label: "Contact" }],
  legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
  ],
};

const socialLinks = [
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Twitter" },
];

const linkClass =
  "text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)] focus:outline-none focus-visible:rounded-sm focus-visible:text-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]";

export function Footer() {
  return (
    <footer
      className="border-t border-[var(--border)] bg-[var(--footer-bg)] text-[var(--foreground)]"
      role="contentinfo"
    >
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <ImageMark size="lg" className="mb-5" />
            <p className="max-w-md text-sm leading-relaxed text-[var(--muted)]">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} className={linkClass}>
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold tracking-wide text-[var(--foreground)]">
              Company
            </p>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold tracking-wide text-[var(--foreground)]">
              Connect
            </p>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold tracking-wide text-[var(--foreground)]">
              Legal
            </p>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 md:flex-row">
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
          </p>
          <p className="text-sm text-[var(--muted)]">
            Production systems · Architecture · Measurable delivery
          </p>
        </div>
      </Container>
    </footer>
  );
}
