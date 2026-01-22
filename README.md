# AI Safety Italia Website

A modern, minimal static website for AI Safety Italia - built with Eleventy and Tailwind CSS.

## Features

- **Modern Responsive Design**: Clean, minimal aesthetic using Tailwind CSS
- **Fast Performance**: Static site generation with Eleventy
- **Easy Deployment**: Configured for Vercel
- **Content Management**: Simple Markdown + YAML structure
- **Component-Based**: Reusable Nunjucks templates
- **SEO Optimized**: Semantic HTML and proper metadata

## Project Structure

```
AI_Safety_Italy_Website/
├── src/
│   ├── _includes/          # Reusable template components
│   ├── _layouts/           # Page layout templates
│   ├── _data/              # Global data files (site config, team, etc.)
│   ├── assets/             # CSS, images, and other static files
│   │   ├── css/
│   │   └── img/
│   ├── pages/              # Page content in Markdown
│   └── robots.txt
├── .eleventy.js            # Eleventy configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── vercel.json             # Vercel deployment config
├── package.json
└── README.md
```

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/AI_Safety_Italy_Website.git
cd AI_Safety_Italy_Website
```

2. Install dependencies
```bash
npm install
```

## Development

To start the development server:
```bash
npm start
```

The site will be available at `http://localhost:8080` with live reload enabled.

## Building

To build for production:
```bash
npm run build
```

Output will be generated in the `_site/` directory.

## Housekeeping

- **Clean build outputs**: `npm run clean` (runs `scripts/clean.ps1`)
- **Format repository**: `npm run format` (uses Prettier)
- **Check formatting**: `npm run format:check`

Files added for consistency:
- `scripts/clean.ps1` — PowerShell cleanup script
- `.editorconfig` — editor settings
- `.prettierrc` — Prettier configuration
 
Note: Nunjucks template files (`.njk`) are intentionally excluded from the automatic Prettier formatting because they require a specific parser. Edit these files manually or add a Nunjucks Prettier plugin if you want them auto-formatted.

## Content Management

### Pages
Edit Markdown files in `src/pages/` to update page content.

### Site Configuration
Update `src/_data/site.js` to change site metadata, navigation, social links, and form URLs.

### Team Members
Update `src/_data/team.js` to manage team member information.

### Styling
- Tailwind CSS: `tailwind.config.js`
- Custom CSS: `src/assets/css/style.css`

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Vercel will automatically build and deploy on push

### Manual Deployment

1. Build: `npm run build`
2. Deploy the `_site/` folder to your hosting provider

## Environment Variables

No environment variables required for MVP. Google Forms URLs are configured in `src/_data/site.js`.

## TODO / Future Enhancements

- [ ] Replace placeholder Google Forms URLs with actual forms
- [ ] Add team member photos
- [ ] Implement search functionality
- [ ] Add blog/news section
- [ ] Set up analytics
- [ ] Add language toggle for Italian/English
- [ ] Create custom 404 page
- [ ] Add sitemap generation

## License

MIT

## Support

For questions or contributions, contact contact@aisafetyitalia.org
