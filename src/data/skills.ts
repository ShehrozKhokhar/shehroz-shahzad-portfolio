import { Code2, ShoppingBag, Server, Gauge, Wrench } from "lucide-react";
import type { SkillCategory } from "@/types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "HTML", proficiency: 98 },
      { name: "CSS", proficiency: 96 },
      { name: "JavaScript", proficiency: 95 },
      { name: "TypeScript", proficiency: 92 },
      { name: "React", proficiency: 94 },
      { name: "Next.js", proficiency: 92 },
      { name: "Tailwind CSS", proficiency: 96 },
    ],
  },
  {
    id: "shopify",
    title: "Shopify",
    icon: ShoppingBag,
    skills: [
      { name: "Liquid", proficiency: 97 },
      { name: "Theme Development", proficiency: 96 },
      { name: "Shopify Functions", proficiency: 88 },
      { name: "Metafields", proficiency: 92 },
      { name: "Metaobjects", proficiency: 88 },
      { name: "Shopify CLI", proficiency: 90 },
      { name: "Storefront API", proficiency: 90 },
      { name: "Admin API", proficiency: 87 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", proficiency: 90 },
      { name: "Prisma", proficiency: 85 },
      { name: "REST API", proficiency: 92 },
      { name: "GraphQL", proficiency: 87 },
      { name: "Authentication", proficiency: 85 },
    ],
  },
  {
    id: "performance",
    title: "Performance",
    icon: Gauge,
    skills: [
      { name: "Core Web Vitals", proficiency: 93 },
      { name: "SEO", proficiency: 91 },
      { name: "Accessibility", proficiency: 88 },
      { name: "Google Tag Manager", proficiency: 87 },
      { name: "GA4", proficiency: 86 },
      { name: "Server-side Tracking", proficiency: 82 },
    ],
  },
  {
    id: "tools",
    title: "Developer Tools",
    icon: Wrench,
    skills: [
      { name: "Git", proficiency: 95 },
      { name: "GitHub", proficiency: 95 },
      { name: "Vercel", proficiency: 92 },
      { name: "VS Code", proficiency: 97 },
      { name: "Postman", proficiency: 88 },
      { name: "Figma", proficiency: 80 },
    ],
  },
];
