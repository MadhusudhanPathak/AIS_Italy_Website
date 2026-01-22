This folder contains the Eleventy source content used to build the site.

Structure overview:

- `_includes/` — reusable Nunjucks templates and components
- `_layouts/` — layout templates (`base.njk`, `page.njk`)
- `_data/` — global data files (`site.js`, `team.js`)
- `assets/` — static assets (CSS, images)
- `pages/` — page Markdown files used as content
- `robots.txt` — robots rules included in build

Notes:

- Keep page content and templates inside `src/` to match Eleventy conventions.
- Use `npm start` to run the Eleventy dev server and `npm run build` for production output.
