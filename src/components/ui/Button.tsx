import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";

type Variant = "primary" | "secondary" | "ghost";

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary: "glass-tint text-foreground hover:-translate-y-0.5",
  secondary: "glass glass-hover text-foreground hover:-translate-y-0.5",
  ghost: "text-foreground hover:text-accent-green",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";

interface LinkButtonProps
  extends BaseProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href"> {
  href: string;
}

export function Button({
  href,
  variant = "primary",
  children,
  className,
  icon,
  ...rest
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(baseClasses, variantClasses[variant], className)}
      {...rest}
    >
      {children}
      {icon}
    </Link>
  );
}

interface ButtonElProps
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {}

export function ButtonEl({
  variant = "primary",
  children,
  className,
  icon,
  ...rest
}: ButtonElProps) {
  return (
    <button
      className={cn(baseClasses, variantClasses[variant], className)}
      {...rest}
    >
      {children}
      {icon}
    </button>
  );
}
