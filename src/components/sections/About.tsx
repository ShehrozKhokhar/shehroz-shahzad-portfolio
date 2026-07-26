import { PERSONAL, STATS } from "@/data/personal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SlideUp } from "@/components/animations/SlideUp";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="About Me"
          title="Engineering-first, detail-obsessed."
          description="A quick look at how I work and what I focus on."
        />

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <SlideUp className="flex flex-col gap-5">
            {PERSONAL.bio.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-muted sm:text-lg">
                {paragraph}
              </p>
            ))}
            <blockquote className="glass glow-border mt-2 rounded-xl border-l-2 border-l-accent-green p-5 text-sm italic text-foreground/90">
              &ldquo;{PERSONAL.philosophy}&rdquo;
            </blockquote>
          </SlideUp>

          <StaggerGroup className="grid grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <StaggerItem key={stat.id}>
                <GlassCard className="flex flex-col gap-1 text-center">
                  <span className="font-display text-3xl font-semibold text-gradient sm:text-4xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-sm text-muted">{stat.label}</span>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Container>
    </section>
  );
}
