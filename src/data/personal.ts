import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFiverr, SiUpwork } from "react-icons/si";
import type { SocialLink, Stat } from "@/types";

export const PERSONAL = {
  name: "Shehroz Shahzad",
  role: "Shopify Developer & Full Stack Engineer",
  headline: "Building High-Performance Shopify Stores & Modern Web Applications",
  headlineHighlight: "Shopify Stores",
  subheadline:
    "Shopify Developer specialising in custom themes, Shopify Functions, app integrations, performance optimisation, and modern web development using Next.js and TypeScript.",
  bio: [
    "I'm a Shopify and Full Stack Developer who helps ambitious ecommerce brands and startups ship fast, reliable, and beautifully crafted web experiences.",
    "My work spans custom Shopify theme development, Shopify Functions, storefront and admin API integrations, and full-stack applications built with Next.js and TypeScript.",
    "I care about scalability, maintainability, and performance as much as visual polish — every project is built to load fast, rank well, and hold up as it grows.",
  ],
  philosophy:
    "Good engineering is invisible: fast pages, clean code, and stores that keep converting long after launch day.",
  trustBadges: [
    "Shopify Development",
    "Next.js",
    "TypeScript",
    "Performance",
    "SEO",
    "CRO",
  ],
} as const;

export const STATS: Stat[] = [
  { id: "projects", label: "Projects Delivered", value: 100, suffix: "+" },
  { id: "clients", label: "International Clients", value: 40, suffix: "+" },
  { id: "years", label: "Years of Experience", value: 6, suffix: "+" },
  { id: "satisfaction", label: "Client Satisfaction", value: 98, suffix: "%" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/ShehrozKhokhar/", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shehrozshahzad", icon: FaLinkedin },
  { label: "Fiverr", href: "https://www.fiverr.com/s/LdaDR4o", icon: SiFiverr },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/shehrozshahzad",
    icon: SiUpwork,
  },
  { label: "Email", href: "mailto:shehroz.shahzad.khokhar@gmail.com", icon: Mail },
];
