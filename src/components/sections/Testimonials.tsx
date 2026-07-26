"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { cn } from "@/utils/cn";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((current) => (current + 1) % TESTIMONIALS.length);
  const prev = () =>
    setIndex((current) => (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="testimonials" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say"
          description="Feedback from the founders and teams I've worked with."
        />

        <div className="mt-10 flex flex-col gap-6 sm:hidden">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="mx-auto mt-10 hidden max-w-2xl sm:block">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={TESTIMONIALS[index].id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <TestimonialCard testimonial={TESTIMONIALS[index]} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="glass glass-hover rounded-full p-2 text-muted hover:text-foreground"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Select testimonial">
              {TESTIMONIALS.map((testimonial, dotIndex) => (
                <button
                  key={testimonial.id}
                  type="button"
                  role="tab"
                  aria-selected={dotIndex === index}
                  aria-label={`Show testimonial from ${testimonial.name}`}
                  onClick={() => setIndex(dotIndex)}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all",
                    dotIndex === index ? "w-6 bg-accent-green" : "bg-border",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="glass glass-hover rounded-full p-2 text-muted hover:text-foreground"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
