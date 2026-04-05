"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonClassName, type ButtonVariant, type ButtonSize } from "@/lib/button-styles";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaBusy?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled,
  ariaBusy,
}: ButtonProps) {
  const reducedMotion = useReducedMotion();
  const combinedClassName = buttonClassName(variant, size, className);

  const MotionWrapper = motion.div;
  const hoverScale = reducedMotion ? 1 : 1.02;
  const tapScale = reducedMotion ? 1 : 0.98;

  if (href) {
    return (
      <MotionWrapper whileHover={{ scale: hoverScale }} whileTap={{ scale: tapScale }}>
        <Link href={href} className={combinedClassName}>
          {children}
        </Link>
      </MotionWrapper>
    );
  }

  return (
    <MotionWrapper whileHover={{ scale: hoverScale }} whileTap={{ scale: tapScale }}>
      <button
        type={type}
        onClick={onClick}
        className={combinedClassName}
        disabled={disabled}
        aria-busy={ariaBusy}
      >
        {children}
      </button>
    </MotionWrapper>
  );
}
