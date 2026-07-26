import { Code, Rocket, ShoppingBag, TrendingUp, Layers } from "lucide-react";
import type { ExperienceItem } from "@/types";

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "started-web-dev",
    title: "Started Web Development",
    organization: "Self-taught & freelance projects",
    period: "2019",
    description:
      "Began building websites with HTML, CSS, and JavaScript, taking on small freelance projects to learn the fundamentals of the web.",
    icon: Code,
  },
  {
    id: "became-shopify-dev",
    title: "Became a Shopify Developer",
    organization: "Freelance",
    period: "2020",
    description:
      "Specialised in Shopify theme development and Liquid, building and customising storefronts for small ecommerce brands.",
    icon: ShoppingBag,
  },
  {
    id: "freelance-projects",
    title: "Scaled Freelance Projects",
    organization: "Independent Contractor",
    period: "2021 – 2022",
    description:
      "Took on larger Shopify and web development projects for international clients, building a reputation for reliable, high-quality delivery.",
    icon: Rocket,
  },
  {
    id: "advanced-shopify",
    title: "Advanced Shopify Development",
    organization: "Independent Contractor",
    period: "2023",
    description:
      "Moved into advanced Shopify work: Shopify Functions, custom apps, Storefront and Admin API integrations, and performance optimisation.",
    icon: TrendingUp,
  },
  {
    id: "nextjs-fullstack",
    title: "Next.js Full Stack Development",
    organization: "Independent Contractor",
    period: "2024 – Present",
    description:
      "Expanded into full stack web application development with Next.js, TypeScript, and modern tooling, alongside continued Shopify expertise.",
    icon: Layers,
  },
];
