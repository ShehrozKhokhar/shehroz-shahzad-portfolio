import { Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/personal";
import { SITE_CONFIG } from "@/constants/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ContactForm } from "@/components/forms/ContactForm";
import { SlideUp } from "@/components/animations/SlideUp";

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          description="Tell me about your project and I'll get back to you within one business day."
        />

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <SlideUp className="lg:col-span-2">
            <GlassCard className="flex h-full flex-col gap-6">
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Get in touch
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Prefer email or another platform? Reach me directly below.
                </p>
              </div>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-accent-green hover:underline"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {SITE_CONFIG.email}
              </a>

              <div className="flex flex-col gap-3 border-t border-border pt-4">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {social.label}
                    </a>
                  );
                })}
              </div>
            </GlassCard>
          </SlideUp>

          <SlideUp delay={0.1} className="lg:col-span-3">
            <GlassCard>
              <ContactForm />
            </GlassCard>
          </SlideUp>
        </div>
      </Container>
    </section>
  );
}
