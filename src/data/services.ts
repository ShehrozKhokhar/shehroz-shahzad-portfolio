import {
  ShoppingBag,
  Paintbrush,
  Zap,
  Puzzle,
  LayoutTemplate,
  Rocket,
  Search,
  ArrowRightLeft,
  Bug,
  Wrench,
  Globe,
  Plug,
} from "lucide-react";
import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "custom-shopify-store",
    title: "Custom Shopify Store Development",
    description:
      "End-to-end Shopify stores built from scratch — architecture, theme, and integrations tailored to your brand and sales flow.",
    icon: ShoppingBag,
  },
  {
    id: "theme-customisation",
    title: "Shopify Theme Customisation",
    description:
      "Deep customisation of existing themes: layout changes, custom sections, and pixel-perfect design implementation.",
    icon: Paintbrush,
  },
  {
    id: "shopify-functions",
    title: "Shopify Functions Development",
    description:
      "Custom discount, shipping, and checkout logic built with Shopify Functions for advanced merchandising rules.",
    icon: Zap,
  },
  {
    id: "app-integration",
    title: "Shopify App Integration",
    description:
      "Seamless integration of third-party and custom apps, connecting Shopify to your wider tooling and workflows.",
    icon: Puzzle,
  },
  {
    id: "custom-sections",
    title: "Custom Shopify Sections",
    description:
      "Reusable, merchant-friendly custom sections and blocks built with the Shopify Online Store 2.0 architecture.",
    icon: LayoutTemplate,
  },
  {
    id: "speed-optimisation",
    title: "Shopify Speed Optimisation",
    description:
      "Audits and fixes targeting Core Web Vitals — faster load times that improve conversion and search ranking.",
    icon: Rocket,
  },
  {
    id: "seo-optimisation",
    title: "SEO Optimisation",
    description:
      "Technical and on-page SEO improvements to help your store and content rank and convert organic traffic.",
    icon: Search,
  },
  {
    id: "shopify-migration",
    title: "Shopify Migration",
    description:
      "Safe, structured migrations from other platforms to Shopify, or between Shopify themes, without losing data or SEO equity.",
    icon: ArrowRightLeft,
  },
  {
    id: "bug-fixes",
    title: "Bug Fixes",
    description:
      "Fast, targeted fixes for broken layouts, checkout issues, script conflicts, and other store-breaking bugs.",
    icon: Bug,
  },
  {
    id: "store-maintenance",
    title: "Ongoing Store Maintenance",
    description:
      "Retainer-based support to keep your store updated, monitored, and running smoothly after launch.",
    icon: Wrench,
  },
  {
    id: "nextjs-apps",
    title: "Next.js Web Applications",
    description:
      "Custom web applications and marketing sites built with Next.js, TypeScript, and modern tooling.",
    icon: Globe,
  },
  {
    id: "api-integration",
    title: "API Integration",
    description:
      "Connecting your storefront or application to payment providers, CRMs, ERPs, and other third-party APIs.",
    icon: Plug,
  },
];
