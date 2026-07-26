import { ImageIcon } from "lucide-react";
import { cn } from "@/utils/cn";

interface PlaceholderImageProps {
  label: string;
  className?: string;
  aspect?: "square" | "video" | "wide";
}

const aspectClasses: Record<NonNullable<PlaceholderImageProps["aspect"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  wide: "aspect-[16/7]",
};

/**
 * Stand-in for a real screenshot/photo until one is provided.
 * Swap for `next/image` with a real `src` once the asset exists —
 * keep the same className/aspect usage at the call site.
 */
export function PlaceholderImage({
  label,
  className,
  aspect = "video",
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={`Placeholder image: ${label}`}
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-gradient-brand-faint text-center",
        aspectClasses[aspect],
        className,
      )}
    >
      <ImageIcon className="h-8 w-8 text-muted" aria-hidden="true" />
      <span className="px-4 text-xs text-muted">{label}</span>
    </div>
  );
}
