"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectOrbitCard } from "@/components/cards/ProjectOrbitCard";
import { cn } from "@/utils/cn";

const CARD_WIDTH = 240;
const CARD_HEIGHT = 340;
const RADIUS = 360;

export function Projects() {
  const total = PROJECTS.length;
  const angleStep = 360 / total;

  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const [activeIndex, setActiveIndex] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const raw = Math.round((value * 360) / angleStep);
    setActiveIndex(((raw % total) + total) % total);
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

      <div className="mt-10 overflow-hidden border-y border-border py-3" aria-hidden="true">
        <div className="animate-marquee flex w-max items-center gap-10 [animation-duration:24s]">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-10 font-display text-2xl font-semibold uppercase tracking-wide text-transparent sm:text-3xl"
              style={{ WebkitTextStroke: "1px var(--color-border)" }}
            >
              Featured Projects
              <span className="text-accent-green" style={{ WebkitTextStroke: "0" }}>
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>

      <div ref={trackRef} className="relative mt-8 hidden md:block" style={{ height: `${total * 32}vh` }}>
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
          <div
            className="relative"
            style={{ perspective: 1400, width: CARD_WIDTH, height: CARD_HEIGHT }}
          >
            <motion.div
              className="absolute inset-0"
              style={{ transformStyle: "preserve-3d", rotateY }}
            >
              {PROJECTS.map((project, index) => (
                <div
                  key={project.id}
                  className="absolute inset-0"
                  style={{
                    transform: `rotateY(${index * angleStep}deg) translateZ(${RADIUS}px)`,
                    backfaceVisibility: "hidden",
                  }}
                >
                  <ProjectOrbitCard project={project} />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4">
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
