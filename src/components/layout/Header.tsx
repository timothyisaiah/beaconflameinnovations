"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/site";
import { ImageMark } from "@/components/layout/ImageMark";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border-subtle)] bg-[var(--header-bg)] backdrop-blur-md">
      <nav
        className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6"
        aria-label="Primary"
      >
        <span className="hidden md:inline-flex">
          <ImageMark />
        </span>
        <span className="md:hidden">
          <ImageMark compact />
        </span>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const active = isActivePath(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-sm font-medium transition-colors duration-300 relative",
                  active
                    ? "text-[#87158c] font-semibold after:absolute after:left-0 after:-bottom-1 after:right-0 after:h-0.5 after:rounded-full after:bg-[#87158c]"
                    : "text-[var(--muted)] hover:text-[#87158c]",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={cn(
              "px-5 py-2.5 rounded-full font-semibold transition-colors duration-300",
              isActivePath(pathname, "/contact")
                ? "bg-[#87158c] text-white ring-2 ring-[#87158c] ring-offset-2 ring-offset-[var(--background)]"
                : "bg-[#87158c] text-white hover:bg-[var(--brand-hover)]",
            )}
          >
            Engage
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[var(--foreground)]"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--background)] border-t border-[var(--border-subtle)]"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => {
                const active = isActivePath(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "font-medium transition-colors",
                      active
                        ? "text-[#87158c] font-semibold border-l-2 border-[#87158c] pl-3 -ml-3"
                        : "text-[var(--foreground)]/90 hover:text-[#87158c]",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "mt-2 px-5 py-3 rounded-full bg-[#87158c] text-white font-semibold text-center transition-colors",
                  isActivePath(pathname, "/contact") &&
                    "ring-2 ring-[#87158c] ring-offset-2 ring-offset-[var(--background)]",
                )}
              >
                Engage
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
