# AI Safety Italia Website

A modern, minimal static website for AI Safety Italia - built with Eleventy and Tailwind CSS.

## Features

- **Modern Responsive Design**: Clean, minimal aesthetic using Tailwind CSS
- **Fast Performance**: Static site generation with Eleventy
- **Easy Deployment**: Configured for Vercel
- **Content Management**: Simple Markdown + YAML structure
- **Component-Based**: Reusable Nunjucks templates
- **SEO Optimized**: Semantic HTML and proper metadata
- **Accessibility Focused**: Proper ARIA attributes and keyboard navigation

## Table of Contents

- [Installation](#installation)
- [Development](#development)
- [Building](#building)
- [Project Structure](#project-structure)
- [Content Management](#content-management)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

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

**Note:** If you are on Windows, you might need to adjust your PowerShell execution policy to run npm scripts. You can do this by running the following command in a PowerShell window with administrator privileges:
```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## Development

To start the development server:
```bash
npm start
```

This will start a local server at `http://localhost:8080` with live reload. It will also watch for changes in your CSS files and automatically rebuild them.

## Building

To build the website for production:
```bash
npm run build
```

The output will be generated in the `_site/` directory.

## Project Structure

```
AI_Safety_Italy_Website/
├── data/                   # Content data files (for non-technical editors)
├── src/
│   ├── components/         # Reusable template components
│   ├── layouts/            # Page layout templates
│   ├── data/               # Global data files (site config, team, etc.)
│   ├── content/            # Page content in Markdown (references data files)
│   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   ├── img/
│   │   └── fonts/
│   ├── utils/              # Utility functions
├── .eleventy.js            # Eleventy configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── vercel.json             # Vercel deployment config
├── package.json
├── ModificationGuide.md    # Content modification guide for non-technical users
└── README.md
```

## Content Management

### For Non-Technical Users
For instructions on how to safely edit website content without affecting functionality, please see our [Content Modification Guide](ModificationGuide.md). This guide explains how to update text, headings, links, and other content using the data files in the `/data` directory.

### For Technical Users
- Edit Markdown files in `src/content/` to update page structure and layout (these now reference data files).
- Update data files in `/data/` to modify content (YAML format).
- Update `src/data/site.js` to change site metadata, navigation, social links, and form URLs.
- Update `src/data/team.js` to manage team member information.

### Styling
- Tailwind CSS: `tailwind.config.js`
- Custom CSS: `src/assets/css/style.css`

## Housekeeping

- **Clean build outputs**: `npm run clean`
- **Format repository**: `npm run format` (uses Prettier)
- **Check formatting**: `npm run format:check`
- **Lint JavaScript**: `npm run lint`

Files added for consistency:
- `.editorconfig` — editor settings
- `.prettierrc` — Prettier configuration

Note: Nunjucks template files (`.njk`) are intentionally excluded from the automatic Prettier formatting because they require a specific parser. Edit these files manually or add a Nunjucks Prettier plugin if you want them auto-formatted.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Vercel will automatically build and deploy on push

### Manual Deployment

1. Build: `npm run build`
2. Deploy the `_site/` folder to your hosting provider

## Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to get started.

## Environment Variables

No environment variables required for MVP. Google Forms URLs are configured in `src/data/site.js`.

## License

MIT

## Support

For questions or contributions, contact contact@aisafetyitalia.org