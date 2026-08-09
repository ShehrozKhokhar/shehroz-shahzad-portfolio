import { cn } from "@/utils/cn";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <span className={cn("font-display font-semibold text-foreground", className)}>
      Shehroz S<span className="text-accent-green">.</span>
    </span>
  );
}
