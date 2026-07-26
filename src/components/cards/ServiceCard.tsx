import type { Service } from "@/types";
import { GlassCard } from "@/components/ui/GlassCard";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <GlassCard
      as="article"
      className="flex h-full flex-col gap-4 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand-soft">
        <Icon className="h-6 w-6 text-accent-green" aria-hidden="true" />
      </div>
      <h3 className="font-display text-lg font-semibold text-foreground">
        {service.title}
      </h3>
      <p className="text-sm text-muted">{service.description}</p>
    </GlassCard>
  );
}
