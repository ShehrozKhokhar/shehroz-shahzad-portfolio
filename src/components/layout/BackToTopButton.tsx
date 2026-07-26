"use client";

import { ArrowUp } from "lucide-react";

export function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="glass glass-hover inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-muted hover:text-foreground"
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
      Back to top
    </button>
  );
}
