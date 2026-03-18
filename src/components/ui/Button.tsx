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
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c9a227]";

  const variants = {
    primary:
      "bg-[#c9a227] text-[#0f172a] hover:bg-[#a8861f] focus:ring-[#c9a227]",
    secondary:
      "bg-[#0f172a] text-[#faf8f5] hover:bg-[#1e293b] focus:ring-[#0f172a]",
    outline:
      "border-2 border-[#c9a227] text-[#c9a227] hover:bg-[#c9a227] hover:text-[#0f172a] focus:ring-[#c9a227]",
    ghost:
      "text-[#c9a227] hover:bg-[#c9a227]/10 focus:ring-[#c9a227]",
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
