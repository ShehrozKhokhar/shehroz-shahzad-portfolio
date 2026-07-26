import { PROCESS_STEPS } from "@/data/process";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";

export function Process() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="How a project comes together"
          description="A clear, structured process from first conversation to ongoing support."
        />

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.id}>
                <GlassCard className="flex h-full flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand-soft">
                      <Icon className="h-5 w-5 text-accent-cyan" aria-hidden="true" />
                    </div>
                    <span className="font-display text-2xl font-semibold text-border">
                      {String(step.step).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted">{step.description}</p>
                </GlassCard>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
