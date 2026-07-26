import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}

export function GlassCard({ children, className, as = "div" }: GlassCardProps) {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "glass glass-hover glow-border rounded-2xl p-6 sm:p-8",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
