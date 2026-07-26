import Link from "next/link";
import { NAV_LINKS } from "@/constants/navigation";
import { SERVICES } from "@/data/services";
import { SOCIAL_LINKS, PERSONAL } from "@/data/personal";
import { Container } from "@/components/ui/Container";
import { BackToTopButton } from "./BackToTopButton";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold text-foreground">{PERSONAL.name}</p>
          <p className="mt-3 max-w-xs text-sm text-muted">{PERSONAL.subheadline}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted">
            Quick Links
          </h3>
          <ul className="mt-4 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.sectionId}>
                <Link href={link.href} className="text-sm text-muted hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted">
            Services
          </h3>
          <ul className="mt-4 flex flex-col gap-2">
            {SERVICES.slice(0, 5).map((service) => (
              <li key={service.id}>
                <span className="text-sm text-muted">{service.title}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted">
            Connect
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {social.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 sm:flex-row">
        <p className="text-xs text-muted">
          &copy; {year} {PERSONAL.name}. All rights reserved.
        </p>
        <BackToTopButton />
      </Container>
    </footer>
  );
}
