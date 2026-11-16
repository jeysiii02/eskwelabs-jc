# Beyond the Data — EIF Culmination Portfolio

A responsive editorial portfolio for Jesus Carlos G. Lazaro’s Eskwelabs Innovation Fellowship Cohort 11 culmination.

## Run locally

Requirements: Node.js 20.9 or newer.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Use `pnpm build` to create a production build and `pnpm start` to serve it locally.

## Personalize the portfolio

The current copy is based on the details supplied for Jesus’s EIF experience and SD-026 project. There are no unfinished content prompts in the current site. Update the content arrays and sections in `app/page.tsx` when details change or when adding another verified EIF project.

## Project structure

- `app/page.tsx` — portfolio sections and editable content.
- `app/globals.css` — visual system, responsive layout, and reduced-motion support.
- `app/layout.tsx` — document metadata and root layout.

The SD-026 case study describes a **synthetic** SaaS dataset. Its metrics are examples from generated data, not real-world benchmarks, and do not establish that engagement causes churn.

## Stack

Next.js, React, TypeScript, Tailwind CSS 4, and Lucide icons.
