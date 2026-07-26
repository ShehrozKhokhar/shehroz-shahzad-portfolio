"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import { PERSONAL } from "@/data/personal";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isScrolled = useScrollPosition(20);
  const activeId = useActiveSection(NAV_LINKS.map((link) => link.sectionId));

  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        isScrolled ? "glass border-b border-border" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link href="#home" className="font-display text-lg font-semibold text-foreground">
          {PERSONAL.name}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.sectionId}>
              <Link
                href={link.href}
                className={cn(
                  "group relative text-sm font-medium transition-colors",
                  activeId === link.sectionId
                    ? "text-accent-green"
                    : "text-muted hover:text-foreground",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-px bg-gradient-brand transition-all duration-300",
                    activeId === link.sectionId ? "w-full" : "w-0 group-hover:w-full",
                  )}
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href="#contact" className="px-5 py-2.5 text-sm">
            Hire Me
          </Button>
        </div>

        <button
          type="button"
          className="glass rounded-lg p-2 text-foreground md:hidden"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((open) => !open)}
        >
          {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="glass overflow-hidden border-t border-border md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.sectionId}>
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      "block rounded-lg px-3 py-3 text-sm font-medium transition-colors",
                      activeId === link.sectionId
                        ? "text-accent-green"
                        : "text-muted hover:text-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Button href="#contact" onClick={closeMobileMenu} className="w-full">
                  Hire Me
                </Button>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
