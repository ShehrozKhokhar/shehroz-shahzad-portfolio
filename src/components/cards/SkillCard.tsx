import type { SkillCategory } from "@/types";
import { GlassCard } from "@/components/ui/GlassCard";

interface SkillCardProps {
  category: SkillCategory;
}

export function SkillCard({ category }: SkillCardProps) {
  const Icon = category.icon;
  return (
    <GlassCard as="article" className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand-soft">
          <Icon className="h-5 w-5 text-accent-green" aria-hidden="true" />
        </div>
        <h3 className="font-display text-xl font-bold text-foreground">
          {category.title}
        </h3>
      </div>
      <ul className="flex flex-col gap-3">
        {category.skills.map((skill) => (
          <li key={skill.name}>
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span className="text-foreground">{skill.name}</span>
              <span className="text-muted">{skill.proficiency}%</span>
            </div>
            <div
              className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2"
              role="progressbar"
              aria-valuenow={skill.proficiency}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${skill.name} proficiency`}
            >
              <div
                className="h-full rounded-full bg-gradient-brand"
                style={{ width: `${skill.proficiency}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}
