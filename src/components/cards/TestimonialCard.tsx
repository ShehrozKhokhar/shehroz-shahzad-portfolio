import { Star } from "lucide-react";
import type { Testimonial } from "@/types";
import { GlassCard } from "@/components/ui/GlassCard";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <GlassCard as="article" className="flex h-full flex-col gap-5">
      <div className="flex items-center gap-1" aria-label={`Rated ${testimonial.rating} out of 5`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={
              index < testimonial.rating
                ? "h-4 w-4 fill-accent-green text-accent-green"
                : "h-4 w-4 text-border"
            }
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="flex-1 text-sm text-foreground/90">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="flex items-center gap-3 pt-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand text-sm font-semibold text-white">
          {testimonial.avatarInitials}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-xs text-muted">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}
