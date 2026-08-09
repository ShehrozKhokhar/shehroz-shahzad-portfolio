import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/types";
import { GlassCard } from "@/components/ui/GlassCard";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <GlassCard as="article" className="grid grid-cols-1 gap-8 sm:grid-cols-[auto_1fr] sm:gap-10">
      <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-6">
        <span className="font-display text-4xl font-semibold text-border sm:text-5xl">
          {service.number}
        </span>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand-soft">
          <Icon className="h-6 w-6 text-accent-green" aria-hidden="true" />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
          {service.title}
        </h3>
        <p className="text-base text-muted">{service.description}</p>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-green">
            Includes
          </p>
          <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {service.features.map((feature) => (
              <li key={feature} className="flex gap-2 text-sm text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-green" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <a
          href="#projects"
          className="inline-flex items-center gap-1.5 self-start text-sm font-medium text-foreground hover:text-accent-green"
        >
          See my work
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </GlassCard>
  );
}
