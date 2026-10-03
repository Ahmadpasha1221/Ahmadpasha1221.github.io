# Ahmad Pasha — Kinetic Portfolio

A GitHub Pages-ready React + Vite portfolio using a Kinetic Typography / brutalist visual system.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages

1. Create a GitHub repository (for example `portfolio`).
2. Push this project.
3. In GitHub: **Settings → Pages → Build and deployment → GitHub Actions**.
4. Add the Vite deployment workflow below as `.github/workflows/deploy.yml`.

The project already uses `base: "./"` so it works from a repository subpath.

## Deploy workflow

```yaml
name: Deploy Vite site to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

## Content

Resume-derived content is based on Ahmad Pasha Shaik's supplied resume. Spider is presented as a portfolio project based on the supplied project context and should be updated as the public repository evolves.
