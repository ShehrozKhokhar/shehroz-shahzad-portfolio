import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "glass inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-medium text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
