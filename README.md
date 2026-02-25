# AI Safety Italia Website

A modern, minimal static website for AI Safety Italia - built with Eleventy, Tailwind CSS, and a comprehensive design token system.

## Features

- **Design Token System**: All colors, fonts, spacing, and styles controlled via YAML files
- **Dark/Light Themes**: Fully configurable theme system with CSS variables
- **Modern Responsive Design**: Clean, minimal aesthetic using Tailwind CSS
- **Fast Performance**: Static site generation with Eleventy
- **Easy Deployment**: Configured for Vercel
- **Content Management**: Simple Markdown + YAML structure
- **Component-Based**: Reusable Nunjucks templates
- **SEO Optimized**: Semantic HTML and proper metadata
- **Accessibility Focused**: Proper ARIA attributes and keyboard navigation

## Table of Contents

- [Quick Start](#quick-start)
- [Installation](#installation)
- [Development](#development)
- [Building](#building)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Content Management](#content-management)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
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

**Windows Note:** You might need to adjust PowerShell execution policy:

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## Development

Start the development server:

```bash
npm start
```

This will:

- Start a local server at `http://localhost:8080`
- Enable live reload
- Watch for CSS and design token changes

## Building

Build for production:

```bash
npm run build
```

Output will be in the `_site/` directory.

## Project Structure

```
AI_Safety_Italy_Website/
├── data/                   # Content data files (YAML)
│   ├── home.yaml
│   ├── about.yaml
│   ├── events.yaml
│   └── ...
├── src/
│   ├── components/         # Reusable template components
│   ├── layouts/            # Page layout templates
│   ├── data/               # Site config, team, etc.
│   ├── content/            # Page content (Markdown)
│   ├── design/             # Design tokens (YAML) ⭐
│   │   ├── design.yaml
│   │   ├── colors.yaml
│   │   ├── themes.yaml
│   │   ├── typography.yaml
│   │   ├── spacing.yaml
│   │   ├── components.yaml
│   │   └── layout.yaml
│   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   ├── img/
│   │   └── fonts/
│   └── utils/              # Utility functions
├── .eleventy.js            # Eleventy configuration
├── tailwind.config.js      # Tailwind CSS (uses design tokens)
├── postcss.config.js       # PostCSS configuration
├── vercel.json             # Vercel deployment config
├── package.json
├── ModificationGuide.md    # Content/design editing guide
└── README.md
```

## Design System

The website uses a comprehensive **design token system** that allows you to control all visual aspects through YAML files in `src/design/`.

### Design Token Files

| File              | Purpose           | Example                             |
| ----------------- | ----------------- | ----------------------------------- |
| `design.yaml`     | Main settings     | Border radius, shadows, transitions |
| `colors.yaml`     | Color palette     | Brand colors, semantic colors       |
| `themes.yaml`     | Light/Dark themes | Theme colors, toggle icons          |
| `typography.yaml` | Fonts & text      | Font families, sizes, weights       |
| `spacing.yaml`    | Layout spacing    | Margins, paddings, gaps             |
| `components.yaml` | Component styles  | Buttons, cards, navigation          |
| `layout.yaml`     | Layout config     | Grids, breakpoints, animations      |

### Quick Design Changes

#### Change Brand Colors

Edit `src/design/colors.yaml`:

```yaml
brand:
  primary: '#3b82f6' # Primary color
  primaryDark: '#1e40af' # Darker variant
  secondary: '#10b981' # Secondary color
  accent: '#6d28d9' # Accent color
```

#### Change Fonts

Edit `src/design/typography.yaml`:

```yaml
fontFamilies:
  sans:
    stack:
      - "'Inter'"
      - 'system-ui'
      - 'sans-serif'
```

#### Change Spacing

Edit `src/design/spacing.yaml`:

```yaml
padding:
  section:
    top: '4rem'
    bottom: '4rem'
```

#### Change Theme Colors

Edit `src/design/themes.yaml`:

```yaml
light:
  css:
    --bg-primary: '#ffffff'
    --text-primary: '#111827'
dark:
  css:
    --bg-primary: '#0f1727'
    --text-primary: '#f9fafb'
```

For complete design system documentation, see `src/design/README.md`.

## Content Management

### For Non-Technical Users

For instructions on safely editing content and design, see our [Content Modification Guide](ModificationGuide.md).

**Content Files** (`/data`):

- `home.yaml` - Homepage content
- `about.yaml` - About page content
- `events.yaml` - Events page content
- `community.yaml` - Community page content
- `faq.yaml` - FAQ content
- `contact.yaml` - Contact page content
- `global.yaml` - Navigation, footer, social links

**Design Files** (`/src/design`):

- All visual styles (colors, fonts, spacing, etc.)

### For Technical Users

- **Edit pages**: `src/content/` (Markdown)
- **Update content**: `/data/` (YAML)
- **Update design**: `src/design/` (YAML)
- **Site config**: `src/data/site.js`
- **Team info**: `src/data/team.js`
- **Components**: `src/components/`
- **Layouts**: `src/layouts/`

## Housekeeping

```bash
# Clean build outputs
npm run clean

# Format repository
npm run format

# Check formatting
npm run format:check

# Lint JavaScript
npm run lint
```

**Configuration files:**

- `.editorconfig` — Editor settings
- `.prettierrc` — Prettier configuration

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Vercel will automatically build and deploy on push

### Manual Deployment

1. Build: `npm run build`
2. Deploy the `_site/` folder to your hosting

## Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Environment Variables

No environment variables required. Google Forms URLs are configured in `src/data/site.js`.

## Technology Stack

- **Static Site Generator**: Eleventy (11ty)
- **CSS Framework**: Tailwind CSS
- **PostCSS**: CSS processing
- **Templating**: Nunjucks
- **Design Tokens**: YAML-based system
- **Deployment**: Vercel

## License

MIT

## Support

For questions or contributions, contact: aisafetyitalia@gmail.com

## Documentation

- [Agent Configuration](Agent.md) - Technical documentation for AI agents
- [Modification Guide](ModificationGuide.md) - Content and design editing guide
- [Design System Docs](src/design/README.md) - Design token documentation
