import type { ElementType } from "react";

export type IconComponent = ElementType;

export interface NavLink {
  label: string;
  href: string;
  sectionId: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconComponent;
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
}

export interface SkillItem {
  name: string;
  proficiency: number; // 0-100
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: IconComponent;
  skills: SkillItem[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  icon: IconComponent;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  company: string;
  category: string;
  description: string;
  features: string[];
  techStack: string[];
  liveUrl: string;
  image: string | null;
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  icon: IconComponent;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: IconComponent;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number; // 1-5
  avatarInitials: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  company?: string;
  budget: string;
  projectType: string;
  message: string;
}
