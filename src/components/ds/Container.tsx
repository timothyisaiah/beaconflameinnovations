import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  /** Narrower readable column for long-form */
  size?: "default" | "narrow" | "wide";
};

const maxWidth: Record<NonNullable<ContainerProps["size"]>, string> = {
  narrow: "max-w-3xl",
  default: "max-w-[var(--container-max)]",
  wide: "max-w-[90rem]",
};

/**
 * Horizontal padding + max width aligned to the design system grid.
 */
export function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-[var(--container-padding)]",
        maxWidth[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
