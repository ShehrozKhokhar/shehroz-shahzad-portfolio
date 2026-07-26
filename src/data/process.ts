import {
  Search,
  ClipboardList,
  Palette,
  Code2,
  FlaskConical,
  Rocket,
  LifeBuoy,
} from "lucide-react";
import type { ProcessStep } from "@/types";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "discovery",
    step: 1,
    title: "Discovery",
    description:
      "Understanding your business, goals, and technical requirements before any design or code begins.",
    icon: Search,
  },
  {
    id: "planning",
    step: 2,
    title: "Planning",
    description:
      "Mapping scope, architecture, and timelines into a clear plan so there are no surprises mid-project.",
    icon: ClipboardList,
  },
  {
    id: "ui-ux",
    step: 3,
    title: "UI/UX",
    description:
      "Translating requirements into wireframes and designs focused on usability and conversion.",
    icon: Palette,
  },
  {
    id: "development",
    step: 4,
    title: "Development",
    description:
      "Building with clean, typed, maintainable code following modern best practices.",
    icon: Code2,
  },
  {
    id: "testing",
    step: 5,
    title: "Testing",
    description:
      "Cross-browser, cross-device, and performance testing before anything goes live.",
    icon: FlaskConical,
  },
  {
    id: "deployment",
    step: 6,
    title: "Deployment",
    description:
      "Careful, staged deployment to production with monitoring in place from day one.",
    icon: Rocket,
  },
  {
    id: "support",
    step: 7,
    title: "Ongoing Support",
    description:
      "Continued maintenance, monitoring, and improvements after launch to keep things running smoothly.",
    icon: LifeBuoy,
  },
];
