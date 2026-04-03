"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { INNER_PAGE_HERO_TOP_CLASS } from "@/lib/inner-page-layout";
import { cn } from "@/lib/utils";

/**
 * Capabilities URL retained for bookmarks; static export has no server redirects.
 */
export default function CapabilitiesRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/solutions");
  }, [router]);

  return (
    <div
      className={cn(
        "mx-auto max-w-lg px-[var(--container-padding)] text-center",
        INNER_PAGE_HERO_TOP_CLASS,
        "pb-[var(--section-y-lg)]",
      )}
    >
      <p className="text-[var(--foreground-secondary)]">
        This page has moved to{" "}
        <Link href="/solutions" className="ds-link font-medium">
          Solutions
        </Link>
        . Redirecting…
      </p>
    </div>
  );
}
