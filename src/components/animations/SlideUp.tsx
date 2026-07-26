"use client";

import type { ReactNode } from "react";
import { fadeInUp } from "@/constants/animations";
import { ScrollReveal } from "./ScrollReveal";

interface SlideUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function SlideUp({ children, className, delay }: SlideUpProps) {
  return (
    <ScrollReveal variants={fadeInUp} className={className} delay={delay}>
      {children}
    </ScrollReveal>
  );
}
