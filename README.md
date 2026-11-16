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

The site uses only the details supplied for the portfolio so far. Before presenting it as a finished personal account, update the bracketed prompts in `app/page.tsx` with your own details:

- Add why you joined EIF and what you hoped to learn.
- Add a specific learning moment, milestone, or change in how you approach data.
- Describe your personal contributions to project SD-026 and list its actual deliverables.
- Complete the reflection prompts with your own achievement, challenge, and takeaway.

No fellowship events, individual project contributions, or personal reflections are assumed on your behalf.

## Project structure

- `app/page.tsx` — portfolio sections and editable content.
- `app/globals.css` — visual system, responsive layout, and reduced-motion support.
- `app/layout.tsx` — document metadata and root layout.

The SD-026 case study describes a **synthetic** SaaS dataset. Its metrics are examples from generated data, not real-world benchmarks, and do not establish that engagement causes churn.

## Stack

Next.js, React, TypeScript, Tailwind CSS 4, and Lucide icons.
