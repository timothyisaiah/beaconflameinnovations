"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--background)] focus:ring-[#87158c]";

  const variants = {
    primary:
      "bg-[#87158c] text-white hover:bg-[#9d2a9f] dark:hover:bg-[#a855c8] focus:ring-[#87158c]",
    secondary:
      "bg-[var(--card)] text-[var(--foreground)] border border-[var(--border-subtle)] hover:bg-[#87158c]/10 focus:ring-[#87158c]",
    outline:
      "border-2 border-[#87158c] text-[#87158c] hover:bg-[#87158c] hover:text-white focus:ring-[#87158c]",
    ghost:
      "text-[#87158c] hover:bg-[#87158c]/10 focus:ring-[#87158c]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const combinedClassName = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  const MotionWrapper = motion.div;

  if (href) {
    return (
      <MotionWrapper whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={combinedClassName}>
          {children}
        </Link>
      </MotionWrapper>
    );
  }

  return (
    <MotionWrapper whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <button type={type} onClick={onClick} className={combinedClassName}>
        {children}
      </button>
    </MotionWrapper>
  );
}
