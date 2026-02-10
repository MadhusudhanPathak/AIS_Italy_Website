This folder contains the Eleventy source content used to build the site.

Structure overview:

- `components/` — reusable Nunjucks templates and components
- `layouts/` — layout templates (`base.njk`, `page.njk`)
- `data/` — global data files (`site.js`, `team.js`)
- `content/` — page Markdown files used as content
- `assets/` — static assets (CSS, images, JS)
- `utils/` — utility functions and helpers
- `robots.txt` — robots rules included in build

Notes:

- Keep page content and templates inside `src/` to match Eleventy conventions.
- Use `npm start` to run the Eleventy dev server and `npm run build` for production output.
