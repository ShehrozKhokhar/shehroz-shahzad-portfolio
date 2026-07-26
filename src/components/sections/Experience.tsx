import { EXPERIENCE } from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SlideUp } from "@/components/animations/SlideUp";

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="How I got here"
          description="A timeline of my growth from first freelance projects to full stack development."
        />

        <div className="relative mx-auto mt-10 max-w-3xl">
          <div
            className="absolute left-5 top-0 h-full w-px bg-[linear-gradient(to_bottom,var(--color-accent-green-bright),var(--color-accent-green),var(--color-accent-green-deep))] sm:left-6"
            aria-hidden="true"
          />

          <ol className="flex flex-col gap-10">
            {EXPERIENCE.map((item, index) => {
              const Icon = item.icon;
              return (
                <SlideUp key={item.id} delay={index * 0.05}>
                  <li className="relative flex gap-6 pl-0">
                    <div className="glass glow-border relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12">
                      <Icon className="h-5 w-5 text-accent-green" aria-hidden="true" />
                    </div>
                    <div className="glass glass-hover flex-1 rounded-2xl p-5">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <span className="text-xs font-medium uppercase tracking-widest text-accent-green">
                          {item.period}
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-muted">{item.organization}</p>
                      <p className="mt-2 text-sm text-muted">{item.description}</p>
                    </div>
                  </li>
                </SlideUp>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
