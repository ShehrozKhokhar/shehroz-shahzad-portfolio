import { SERVICES } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Shopify development services"
          description="From a brand-new Shopify store to Shopify Functions, migrations, and Next.js web apps — here's where I add the most value as a freelance Shopify developer."
        />

        <StaggerGroup className="mt-10 flex flex-col gap-6">
          {SERVICES.map((service) => (
            <StaggerItem key={service.id}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
