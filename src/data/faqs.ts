export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    id: "cost",
    question: "How much does a custom Shopify store cost?",
    answer:
      "It depends on scope — a theme customisation project starts smaller than a full custom Shopify store build with Shopify Functions and app integrations. Share your requirements via the contact form and I'll give you a clear, fixed-scope quote before any work begins.",
  },
  {
    id: "timeline",
    question: "How long does a Shopify development project take?",
    answer:
      "A theme customisation typically takes 1-3 weeks. A full custom Shopify store build, including Shopify Functions or complex app integrations, usually runs 4-8 weeks depending on scope. I'll give you a realistic timeline upfront and keep you updated throughout.",
  },
  {
    id: "existing-theme",
    question: "Do you only build custom themes, or work with existing ones?",
    answer:
      "Both. As a freelance Shopify developer, I regularly customise existing Online Store 2.0 themes with new sections, layout changes, and performance fixes, as well as building fully custom Shopify themes from scratch when a brand has outgrown its template.",
  },
  {
    id: "migration",
    question: "Can you migrate my store to Shopify from another platform?",
    answer:
      "Yes. I handle Shopify migrations with a full URL redirect strategy and structured data rebuild so you keep your SEO rankings and don't lose organic traffic during the switch.",
  },
  {
    id: "beyond-shopify",
    question: "Do you build anything outside of Shopify?",
    answer:
      "Yes — alongside Shopify development, I build full stack web applications, landing pages, and dashboards as a Next.js developer using TypeScript, React, and modern tooling deployed on Vercel.",
  },
  {
    id: "support",
    question: "Do you offer support after the store goes live?",
    answer:
      "Yes. I offer ongoing retainer-based support for bug fixes, monitoring, and small feature requests, so your Shopify store keeps running smoothly long after launch.",
  },
];
