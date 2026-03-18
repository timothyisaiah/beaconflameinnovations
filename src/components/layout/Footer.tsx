"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/solutions", label: "Solutions" },
    { href: "/products", label: "Products" },
    { href: "/sustainability", label: "Sustainability" },
  ],
  connect: [
    { href: "/partnerships", label: "Partnerships" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
  ],
};

const socialLinks = [
  { href: "#", label: "LinkedIn", icon: "linkedin" },
  { href: "#", label: "Twitter", icon: "twitter" },
  { href: "#", label: "Instagram", icon: "instagram" },
];

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/assets/long.png"
                alt="Beacon Flame Innovations"
                width={350}
                height={50}
              />
            </Link>
            <p className="text-[#faf8f5]/70 text-sm leading-relaxed max-w-sm">
              Powering innovation across Technology, Fintech, and Agro-business.
              Building a more inclusive and sustainable future.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  className="text-[#faf8f5]/60 hover:text-[#c9a227] transition-colors"
                  aria-label={social.label}
                >
                  <span className="sr-only">{social.label}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-[#faf8f5] mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#faf8f5]/70 hover:text-[#c9a227] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-[#faf8f5] mb-4">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#faf8f5]/70 hover:text-[#c9a227] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-[#faf8f5] mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#faf8f5]/70 hover:text-[#c9a227] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#faf8f5]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#faf8f5]/60">
            © {new Date().getFullYear()} Beacon Flame Innovations Ltd. All rights reserved.
          </p>
          <p className="text-sm text-[#faf8f5]/60">
            Innovation at Scale • Technology-Driven Solutions • Sustainable Growth
          </p>
        </div>
      </div>
    </footer>
  );
}
