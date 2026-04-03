"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/site";
import { ImageMark } from "@/components/layout/ImageMark";
import { cn } from "@/lib/utils";
import { buttonClassName } from "@/lib/button-styles";

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const navLinkClass = (active: boolean) =>
  cn(
    "text-sm font-medium transition-colors duration-200 relative rounded-sm",
    active
      ? "text-[var(--accent)] font-semibold after:absolute after:left-0 after:-bottom-1 after:right-0 after:h-0.5 after:rounded-full after:bg-[var(--accent)]"
      : "text-[var(--muted)] hover:text-[var(--foreground-secondary)]",
  );

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--header-bg)] backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-[var(--container-max)] items-center justify-between gap-6 px-[var(--container-padding)] py-4"
        aria-label="Primary"
      >
        <span className="hidden md:inline-flex">
          <ImageMark />
        </span>
        <span className="md:hidden">
          <ImageMark compact />
        </span>

        <div className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navLinks.map((link) => {
            const active = isActivePath(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={navLinkClass(active)}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={cn(
              buttonClassName("primary", "md"),
              isActivePath(pathname, "/contact") &&
                "ring-2 ring-[var(--accent)] ring-offset-2 ring-offset-[var(--ring-offset)]",
            )}
          >
            Book a technical consultation
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "rounded-md p-2 text-[var(--foreground)]",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]",
            )}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
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
            className="border-t border-[var(--border)] bg-[var(--bg)] md:hidden"
          >
            <div className="flex flex-col gap-4 px-[var(--container-padding)] py-4">
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
                        ? "-ml-3 border-l-2 border-[var(--accent)] pl-3 font-semibold text-[var(--accent)]"
                        : "text-[var(--foreground)]/90 hover:text-[var(--accent)]",
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
                  buttonClassName("primary", "md"),
                  "mt-2 text-center",
                  isActivePath(pathname, "/contact") &&
                    "ring-2 ring-[var(--accent)] ring-offset-2 ring-offset-[var(--ring-offset)]",
                )}
              >
                Book a technical consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
