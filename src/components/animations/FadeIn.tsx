"use client";

import type { ReactNode } from "react";
import { fadeIn } from "@/constants/animations";
import { ScrollReveal } from "./ScrollReveal";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeIn({ children, className, delay }: FadeInProps) {
  return (
    <ScrollReveal variants={fadeIn} className={className} delay={delay}>
      {children}
    </ScrollReveal>
  );
}
