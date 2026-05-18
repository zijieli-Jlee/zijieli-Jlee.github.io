# Zijie Li Personal Website

Industry-oriented personal website built with Astro, React, and Tailwind CSS.

## Development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Content

Most page content lives in `src/lib/data.ts`:

- `personalInfo`
- `workExperience`
- `skills`
- `projects`
- `researchHighlights`
- `education`

Images and CV PDFs are served from the existing `images/` and `data/`
directories. The profile image used by the new Astro site is
`public/profile.jpg`.

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the Astro
site and deploys the `dist/` folder to GitHub Pages.

## Attribution

This redesign is adapted from the MIT-licensed Modern Portfolio Template by
Rishikesh S. The original template license is kept in `LICENSE`.
