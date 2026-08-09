import Image from "next/image";
import { CLIENT_LOGOS } from "@/data/clients";
import { Container } from "@/components/ui/Container";

export function LogoMarquee() {
  const track = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="border-y border-border py-10" aria-label="Client stores built">
      <Container>
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted">
          Real Shopify stores built &amp; shipped
        </p>
      </Container>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

        <div className="animate-marquee flex w-max items-center gap-16">
          {track.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex h-16 w-40 flex-shrink-0 items-center justify-center rounded-xl bg-white px-4 py-3"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-auto max-h-10 w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
