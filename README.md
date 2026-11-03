This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to self-host and optimize the Instrument Sans and Newsreader web fonts.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy to GitHub Pages

The site ships as a fully static Next.js export (`output: "export"`), built and published by
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push to `main`.

Because this is a GitHub Pages *project* site, it is served from a subpath
(`https://<owner>.github.io/<repository>/`). `next.config.ts` reads the subpath from
`NEXT_PUBLIC_BASE_PATH`; the workflow derives it from the repository name, and local
production builds fall back to `/peyman-resume`. Local `npm run dev` runs without a prefix.

Enable it once in the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

To reproduce the deployed build locally:

```bash
NEXT_PUBLIC_BASE_PATH=/peyman-resume npm run build
npm run preview   # serves out/ on http://localhost:3000
```

