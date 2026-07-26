import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address"),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  budget: z.string().trim().min(1, "Please select a budget range"),
  projectType: z.string().trim().min(1, "Please select a project type"),
  message: z.string().trim().min(20, "Please add a few more details (min. 20 characters)").max(2000),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;

export const BUDGET_OPTIONS = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000+",
] as const;

export const PROJECT_TYPE_OPTIONS = [
  "New Shopify Store",
  "Shopify Theme/Feature Work",
  "Next.js Web App",
  "Performance/SEO Audit",
  "Ongoing Maintenance",
  "Other",
] as const;
