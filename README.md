# Shehroz Shahzad — Portfolio

Premium personal portfolio for a Shopify Developer & Full Stack Engineer. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

See `.env.example`. The contact form requires:

- `RESEND_API_KEY` — from [resend.com](https://resend.com/api-keys). Without it, the form will render and validate, but submissions will fail with a clear error until a key is set.
- `CONTACT_EMAIL_TO` — inbox that receives contact form submissions.
- `NEXT_PUBLIC_SITE_URL` — production domain, used in metadata, the sitemap, and robots.txt.

## Replacing Placeholder Content

All editable copy lives in `src/data/*.ts` — no content is hardcoded into components:

- `personal.ts` — name, bio, stats, social links
- `skills.ts`, `services.ts` — skill categories and service offerings
- `projects.ts`, `case-studies.ts` — project and case study write-ups
- `testimonials.ts`, `experience.ts`, `process.ts`

Everywhere a real screenshot or photo is expected, the site currently renders a `PlaceholderImage` (`src/components/ui/PlaceholderImage.tsx`) labelled with the expected filename. Once you have real assets, swap those usages for `next/image` with a real `src`.

## Scripts

```bash
npm run dev     # start dev server
npm run build   # production build
npm run start   # run the production build
npm run lint     # eslint
```

## Notes

- Full Lighthouse 95+/100 scores and the actual contact-form send are best verified against a deployed URL with a real `RESEND_API_KEY` set.
- Individual case-study detail pages, a blog, and other future-scalability items are intentionally not built yet — see the project spec for the full list.
