import { STACK_ROW, TOOLS_ROW, type TechStackItem } from "@/data/techStack";
import { cn } from "@/utils/cn";

export function TechStackMarquee() {
  return (
    <section className="border-y border-border py-10" aria-label="Tools and technologies I use">
      <div className="relative flex flex-col gap-4 overflow-hidden">
        <MarqueeRow items={STACK_ROW} direction="left" />
        <MarqueeRow items={TOOLS_ROW} direction="right" />

        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: TechStackItem[];
  direction: "left" | "right";
}) {
  const track = [...items, ...items];

  return (
    <div
      className={cn(
        "flex w-max items-center gap-4",
        direction === "left" ? "animate-marquee" : "animate-marquee-reverse",
      )}
    >
      {track.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={`${item.name}-${index}`}
            className="glass flex flex-shrink-0 items-center gap-2.5 rounded-full px-5 py-2.5"
          >
            <Icon className="h-5 w-5 flex-shrink-0" style={{ color: item.color }} aria-hidden="true" />
            <span className="whitespace-nowrap text-sm font-medium text-foreground">
              {item.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
