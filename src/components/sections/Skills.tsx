import { SKILL_CATEGORIES } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillCard } from "@/components/cards/SkillCard";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="A modern, full stack toolkit"
          description="From Shopify Liquid to Next.js and performance tooling — the technologies I use to ship reliable, fast products."
        />

        <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category) => (
            <StaggerItem key={category.id}>
              <SkillCard category={category} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
