import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { cn } from "@/utils/cn";

interface ProjectOrbitCardProps {
  project: Project;
  alwaysExpanded?: boolean;
  className?: string;
}

export function ProjectOrbitCard({
  project,
  alwaysExpanded = false,
  className,
}: ProjectOrbitCardProps) {
  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{ backfaceVisibility: "hidden" }}
      className={cn(
        "group glass glow-border relative block h-full w-full overflow-hidden rounded-2xl",
        className,
      )}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.title} — desktop and mobile preview`}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 260px, 75vw"
        />
      ) : (
        <PlaceholderImage
          label={`Add combined desktop + mobile screenshot: ${project.slug}.jpg`}
          aspect="square"
          className="h-full w-full rounded-2xl border-0"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      <div
        className={cn(
          "absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5 transition-transform duration-300",
          alwaysExpanded
            ? "translate-y-0"
            : "translate-y-[calc(100%-3.75rem)] group-hover:translate-y-0 group-focus-visible:translate-y-0",
        )}
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-accent-green">
          {project.category}
        </span>
        <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
        <p
          className={cn(
            "text-sm text-white/80 transition-opacity duration-300",
            alwaysExpanded
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100",
          )}
        >
          {project.description}
        </p>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white">
          Visit live site
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </a>
  );
}
