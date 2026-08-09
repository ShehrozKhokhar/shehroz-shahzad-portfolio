import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiShopify,
  SiGraphql,
  SiTailwindcss,
  SiPrisma,
  SiFigma,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiNpm,
} from "react-icons/si";
import type { IconComponent } from "@/types";

export interface TechStackItem {
  name: string;
  icon: IconComponent;
  color: string;
}

export const STACK_ROW: TechStackItem[] = [
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
  { name: "Shopify", icon: SiShopify, color: "#95bf47" },
  { name: "GraphQL", icon: SiGraphql, color: "#e10098" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Prisma", icon: SiPrisma, color: "#ffffff" },
];

export const TOOLS_ROW: TechStackItem[] = [
  { name: "Figma", icon: SiFigma, color: "#f24e1e" },
  { name: "Git", icon: SiGit, color: "#f05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Postman", icon: SiPostman, color: "#ff6c37" },
  { name: "Google Analytics", icon: SiGoogleanalytics, color: "#e37400" },
  { name: "Google Tag Manager", icon: SiGoogletagmanager, color: "#4285f4" },
  { name: "npm", icon: SiNpm, color: "#cb3837" },
];
