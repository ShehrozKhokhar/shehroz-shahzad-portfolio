import { ShoppingBag, Zap, Rocket, LifeBuoy, Globe } from "lucide-react";
import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "shopify-store-development",
    number: "01",
    title: "Shopify Store Development",
    description:
      "Custom Shopify stores built from scratch, or existing themes rebuilt for a brand that's outgrown its template.",
    features: [
      "Custom theme design & development",
      "Theme customisation & Online Store 2.0 sections",
      "Platform-to-Shopify migration",
      "Shopify CLI & Liquid architecture",
    ],
    icon: ShoppingBag,
  },
  {
    id: "shopify-functions-integrations",
    number: "02",
    title: "Shopify Functions & App Integrations",
    description:
      "Merchandising and checkout logic Shopify can't do natively, plus integrations that connect your store to the rest of your stack.",
    features: [
      "Custom Shopify Functions (discounts, shipping, checkout)",
      "Third-party & custom app integration",
      "Storefront and Admin API development",
      "Payment, CRM, and ERP API integration",
    ],
    icon: Zap,
  },
  {
    id: "performance-seo",
    number: "03",
    title: "Performance & SEO Optimisation",
    description:
      "Audits and fixes that target Core Web Vitals and search visibility — faster stores that rank and convert better.",
    features: [
      "Core Web Vitals audits & fixes",
      "Technical & on-page SEO",
      "Image and script optimisation",
      "Structured data & metadata",
    ],
    icon: Rocket,
  },
  {
    id: "nextjs-applications",
    number: "04",
    title: "Next.js Web Applications",
    description:
      "Full stack web applications and marketing sites built with Next.js, TypeScript, and modern tooling beyond Shopify.",
    features: [
      "Custom web apps & landing pages",
      "TypeScript & React development",
      "API integration & authentication",
      "Vercel deployment & CI/CD",
    ],
    icon: Globe,
  },
  {
    id: "ongoing-support",
    number: "05",
    title: "Ongoing Support & Maintenance",
    description:
      "Retainer-based support to keep your store or app updated, monitored, and running smoothly long after launch.",
    features: [
      "Bug fixes & store-breaking issue triage",
      "Ongoing monitoring & updates",
      "Priority support for active clients",
      "Small feature requests & iteration",
    ],
    icon: LifeBuoy,
  },
];
