"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectOrbitCard } from "@/components/cards/ProjectOrbitCard";
import { cn } from "@/utils/cn";

const TOTAL = PROJECTS.length;
const CARD_WIDTH = 220;
const CARD_HEIGHT = 320;
const STEP = 230;

function getOffset(index: number, active: number) {
  let diff = index - active;
  if (diff > TOTAL / 2) diff -= TOTAL;
  if (diff < -TOTAL / 2) diff += TOTAL;
  return diff;
}

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((i) => (i + 1) % TOTAL);
  const prev = () => setActiveIndex((i) => (i - 1 + TOTAL) % TOTAL);

  return (
    <section id="projects" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Real Shopify stores, live in production"
          description="A selection of ecommerce stores I've built and shipped on Shopify. Browse through them below, or swipe on mobile."
        />
      </Container>

      <div className="relative mt-12 hidden h-[400px] items-center justify-center md:flex">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous project"
          className="glass glass-hover absolute left-4 z-30 rounded-full p-3 text-foreground sm:left-10"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next project"
          className="glass glass-hover absolute right-4 z-30 rounded-full p-3 text-foreground sm:right-10"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="relative h-full w-full overflow-hidden">
          <div className="absolute inset-0" style={{ perspective: 1600 }}>
            {PROJECTS.map((project, index) => {
              const offset = getOffset(index, activeIndex);
              const distance = Math.abs(offset);
              const isActive = offset === 0;

              if (distance > 1) return null;

              return (
                <motion.div
                  key={project.id}
                  className="absolute left-1/2 top-1/2"
                  style={{ width: CARD_WIDTH, height: CARD_HEIGHT, zIndex: 10 - distance }}
                  animate={{
                    x: `calc(-50% + ${offset * STEP}px)`,
                    y: "-50%",
                    scale: isActive ? 1 : 0.8,
                    opacity: isActive ? 1 : 0.45,
                    rotateY: offset * -24,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 30 }}
                >
                  <div
                    className={cn("h-full w-full", !isActive && "pointer-events-none")}
                    onClick={() => !isActive && setActiveIndex(index)}
                  >
                    <ProjectOrbitCard project={project} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>

      <div className="mt-8 hidden flex-col items-center gap-4 md:flex">
        <p className="font-display text-lg font-semibold text-foreground">
          {PROJECTS[activeIndex].title}
        </p>
        <div className="flex items-center gap-2">
          {PROJECTS.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${project.title}`}
              aria-current={index === activeIndex}
              className={cn(
                "h-2 w-2 rounded-full transition-all duration-300",
                index === activeIndex ? "w-6 bg-accent-green" : "bg-border",
              )}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:hidden">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="w-[75vw] flex-shrink-0 snap-center"
            style={{ height: 420 }}
          >
            <ProjectOrbitCard project={project} alwaysExpanded />
          </div>
        ))}
      </div>
    </section>
  );
}
