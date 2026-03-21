"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { brandAssets } from "@/data/brand";

type ImageMarkSize = "sm" | "md" | "lg";

const horizontalSizes: Record<
  ImageMarkSize,
  { width: number; height: number; className: string }
> = {
  sm: { width: 180, height: 32, className: "h-7 w-auto md:h-8" },
  md: { width: 220, height: 38, className: "h-8 w-auto md:h-9" },
  lg: { width: 280, height: 48, className: "h-10 w-auto md:h-11" },
};

export function ImageMark({
  className,
  compact,
  size = "md",
}: {
  className?: string;
  compact?: boolean;
  size?: ImageMarkSize;
}) {
  if (compact) {
    return (
      <Link
        href="/"
        className={cn(
          "inline-flex shrink-0 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#87158c] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
          className
        )}
      >
        <Image
          src={brandAssets.logoMark}
          alt="BeaconFlame Innovations"
          width={40}
          height={40}
          className="h-9 w-9 object-contain"
          priority
        />
      </Link>
    );
  }

  const dim = horizontalSizes[size];

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#87158c] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
        className
      )}
    >
      <Image
        src={brandAssets.logoHorizontalDark}
        alt="BeaconFlame Innovations"
        width={dim.width}
        height={dim.height}
        className={cn(
          dim.className,
          "w-auto max-w-[min(100%,280px)] object-contain object-left"
        )}
        priority
      />
    </Link>
  );
}
