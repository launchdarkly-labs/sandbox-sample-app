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
    
## Deploy on Vercel

You will need to request access to the LaucnhDarkly Vercel account, talk to eng leadership about this.

To deploy to staging:

```bash
vercel deploy --target=staging
```

To deploy to the production:

```bash
vercel
```

## Github Actions

We have two github actions, `Ping site` and `Find flag code references`. We ping both urls every 15 minutes to create flag evals in our sandbox. Similarly, the coderefs job is run once a day and on every push so that the sandbox has up-to-date coderefs.

## Future work

Any PRs to make this a more authentic use-case for LaunchDarkly are very welcome!
