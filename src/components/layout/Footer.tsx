import Link from "next/link";
import { ImageMark } from "@/components/layout/ImageMark";
import { siteConfig } from "@/data/site";

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/capabilities", label: "Capabilities" },
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

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <ImageMark size="lg" className="mb-5" />
            <p className="text-[var(--muted)] text-sm leading-relaxed max-w-md">
              {siteConfig.description}
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-[var(--muted)] hover:text-[#87158c] transition-colors text-sm"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-[var(--foreground)] mb-4 text-sm tracking-wide">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted)] hover:text-[#87158c] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-[var(--foreground)] mb-4 text-sm tracking-wide">
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted)] hover:text-[#87158c] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-[var(--foreground)] mb-4 text-sm tracking-wide">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted)] hover:text-[#87158c] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
          </p>
          <p className="text-sm text-[var(--muted)]">
            Engineering • Intelligence • Strategy 
          </p>
        </div>
      </div>
    </footer>
  );
}
