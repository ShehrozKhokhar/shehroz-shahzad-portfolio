"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectOrbitCard } from "@/components/cards/ProjectOrbitCard";
import { cn } from "@/utils/cn";

const TOTAL = PROJECTS.length;
// Duplicate each project so the wheel has enough panels to feel like a dense,
// continuous circle (matching a denser reference carousel) instead of a sparse
// 5-sided polygon where neighbours sit almost edge-on.
const SLOTS = TOTAL * 2;
const ANGLE_STEP = 360 / SLOTS;
const CARD_WIDTH = 260;
const CARD_HEIGHT = 380;
const RADIUS = CARD_WIDTH / 2 / Math.tan(Math.PI / SLOTS) + 140;

export function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });
  // A half-turn (180deg) cycles through every unique project exactly once,
  // since each project occupies two opposite slots on the wheel.
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 180]);

  const [activeIndex, setActiveIndex] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const raw = Math.round(value * TOTAL);
    setActiveIndex(((raw % TOTAL) + TOTAL) % TOTAL);
  });

  return (
    <section id="projects" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Real Shopify stores, live in production"
          description="A selection of ecommerce stores I've built and shipped on Shopify. Scroll to rotate through them on desktop, or swipe through the list on mobile."
        />
      </Container>

      <div
        ref={trackRef}
        className="relative mt-10 hidden md:block"
        style={{ height: `${TOTAL * 40}vh` }}
      >
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
          <div
            className="relative"
            style={{ perspective: 1800, width: CARD_WIDTH, height: CARD_HEIGHT }}
          >
            <motion.div
              className="absolute inset-0"
              style={{ transformStyle: "preserve-3d", rotateY }}
            >
              {Array.from({ length: SLOTS }).map((_, slot) => {
                const project = PROJECTS[slot % TOTAL];
                return (
                  <div
                    key={slot}
                    className="absolute inset-0"
                    style={{
                      transform: `rotateY(${slot * ANGLE_STEP}deg) translateZ(${RADIUS}px)`,
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <ProjectOrbitCard project={project} tabIndex={slot >= TOTAL ? -1 : undefined} />
                  </div>
                );
              })}
            </motion.div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <p className="font-display text-lg font-semibold text-foreground">
              {PROJECTS[activeIndex].title}
            </p>
            <div className="flex items-center gap-2">
              {PROJECTS.map((project, index) => (
                <span
                  key={project.id}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all duration-300",
                    index === activeIndex ? "w-6 bg-accent-green" : "bg-border",
                  )}
                />
              ))}
            </div>
          </div>
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
