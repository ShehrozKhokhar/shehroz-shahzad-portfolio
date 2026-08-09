import { ChevronDown } from "lucide-react";
import { FAQS } from "@/data/faqs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SlideUp } from "@/components/animations/SlideUp";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Answers to the questions I get asked most before a project kicks off."
        />

        <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-4">
          {FAQS.map((faq, index) => (
            <SlideUp key={faq.id} delay={index * 0.03}>
              <details className="faq-item glass glass-hover rounded-[24px] px-6 py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-base font-semibold text-foreground sm:text-lg">
                  {faq.question}
                  <ChevronDown
                    className="faq-chevron h-5 w-5 flex-shrink-0 text-accent-green"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-4 text-sm text-muted sm:text-base">{faq.answer}</p>
              </details>
            </SlideUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
