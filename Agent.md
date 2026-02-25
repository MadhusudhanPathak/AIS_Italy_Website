# AI Safety Italia Website - Agent Configuration

## Overview

This document describes the AI Safety Italia Website project and provides guidance for AI agents working with the codebase.

## Project Information

- **Name**: AI Safety Italia Website
- **Purpose**: A modern, minimal static website for AI Safety Italia - built with Eleventy and Tailwind CSS
- **Technology Stack**: Eleventy, Tailwind CSS, PostCSS, JavaScript, YAML (design tokens)
- **Repository**: AIS Italy Website
- **Features**: Dark/light mode toggle, design token system, responsive design, content separation

## Architecture

- **Static Site Generator**: Eleventy (11ty)
- **Styling**: Tailwind CSS with custom CSS and design tokens
- **Templating**: Nunjucks (`.njk`)
- **Content**: Markdown (`.md`) and YAML (`.yaml`)
- **Design System**: YAML-based design tokens

## Directory Structure

```
AIS Italy Website/
├── data/                   # Content data files (for non-technical editors)
├── src/
│   ├── components/         # Reusable template components
│   ├── layouts/            # Page layout templates
│   ├── data/               # Global data files (site config, team, etc.)
│   ├── content/            # Page content in Markdown (references data files)
│   ├── design/             # Design tokens (colors, themes, typography, etc.)
│   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   ├── img/
│   │   └── fonts/
│   └── utils/              # Utility files
├── .eleventy.js           # Eleventy configuration
├── tailwind.config.js     # Tailwind CSS configuration (uses design tokens)
├── postcss.config.js      # PostCSS configuration
├── vercel.json            # Vercel deployment config
├── package.json
├── ModificationGuide.md   # Content modification guide for non-technical users
└── README.md
```

## Key Files and Their Purpose

### Configuration Files

- `.eleventy.js`: Configuration for Eleventy (loads content and design tokens)
- `tailwind.config.js`: Configuration for Tailwind CSS (dynamically loads from design tokens)
- `src/data/site.js`: Site-wide configuration (name, description, navigation, etc.)
- `src/data/team.js`: Team member information

### Content Files

- `data/*.yaml`: Content data files for each page section (home, about, events, etc.)

### Design System Files

- `src/design/design.yaml`: Main design configuration and settings
- `src/design/colors.yaml`: Color palette and semantic colors
- `src/design/themes.yaml`: Light and dark theme configurations
- `src/design/typography.yaml`: Fonts, sizes, and text styles
- `src/design/spacing.yaml`: Margins, paddings, and layout spacing
- `src/design/components.yaml`: Component-specific styles
- `src/design/layout.yaml`: Layout configurations and breakpoints
- `src/design/README.md`: Design system documentation

### Template Files

- `src/layouts/base.njk`: Main HTML layout template with theme functionality
- `src/layouts/page.njk`: Page-specific layout wrapper
- `src/components/header.njk`: Site header with theme toggle button
- `src/components/footer.njk`: Site footer component

## Development Workflow

1. **Install Dependencies**: `npm install`
2. **Start Development Server**: `npm start`
3. **Build for Production**: `npm run build`
4. **Clean Build Output**: `npm run clean`

## Content Management

- **For Non-Technical Users**: Edit YAML files in the root `data/` directory
- **For Technical Users**:
  - Add/edit pages in `src/content/` using Markdown
  - Update site data in `src/data/`
  - Create reusable components in `src/components/`
  - Modify layouts in `src/layouts/`

## Design Token System

The website uses a comprehensive design token system that allows you to control all visual aspects through YAML files.

### Changing Colors

Edit `src/design/colors.yaml`:

```yaml
brand:
  primary: '#3b82f6' # Change primary brand color
  primaryDark: '#1e40af' # Darker variant
  secondary: '#10b981' # Secondary color
  accent: '#6d28d9' # Accent color
```

### Changing Themes

Edit `src/design/themes.yaml`:

```yaml
light:
  css:
    --bg-primary: '#ffffff' # Light mode background
    --text-primary: '#111827' # Light mode text
dark:
  css:
    --bg-primary: '#0f1727' # Dark mode background
    --text-primary: '#f9fafb' # Dark mode text
```

### Changing Typography

Edit `src/design/typography.yaml`:

```yaml
fontFamilies:
  sans:
    stack:
      - "'Inter'"
      - 'system-ui'
      - 'sans-serif'
```

### Changing Spacing

Edit `src/design/spacing.yaml`:

```yaml
padding:
  section:
    top: '4rem' # Section top padding
    bottom: '4rem' # Section bottom padding
```

### Changing Component Styles

Edit `src/design/components.yaml`:

```yaml
buttons:
  primary:
    background: 'linear-gradient(to right, var(--accent), var(--safety-blue))'
    padding:
      x: '1.5rem'
      y: '0.75rem'
```

## Theme System

- **Dark/Light Mode**: Implemented with CSS variables and JavaScript
- **Theme Toggle**: Button in header next to Join button
- **Persistence**: Theme preference saved in localStorage
- **Background Images**: Different images for home page banner in each theme
- **Configuration**: Controlled via `src/design/themes.yaml`

## Best Practices for Modifications

1. **Use Design Tokens**: Always modify design tokens in `src/design/` instead of hardcoding values
2. **Maintain Accessibility**: Ensure ARIA labels, semantic HTML, and color contrast
3. **Follow Code Style**: Maintain existing naming conventions and formatting
4. **Responsive Design**: Test across all device sizes
5. **Validate Data**: Handle errors gracefully in data files
6. **Update Documentation**: Keep docs in sync with changes
7. **Test Locally**: Always test before committing
8. **Separation of Concerns**: Keep content (YAML), design (YAML), and code separate

## Common Tasks

### Change Brand Colors

1. Edit `src/design/colors.yaml`
2. Update `brand.primary` and related colors
3. Rebuild: `npm run build`

### Add a New Page

1. Create a new `.md` file in `src/content/`
2. Add corresponding YAML in `data/`
3. Add navigation link in `src/data/site.js`

### Update Navigation

1. Modify `src/data/site.js`

### Change Fonts

1. Edit `src/design/typography.yaml`
2. Update `fontFamilies` section
3. Rebuild: `npm run build`

### Add Team Member

1. Update `src/data/team.js`

### Modify Content

1. Edit appropriate YAML file in root `data/` directory

### Change Spacing/Padding

1. Edit `src/design/spacing.yaml`
2. Update relevant spacing values
3. Rebuild: `npm run build`

## Important Notes

- The site uses Nunjucks templating engine
- Design tokens are loaded from YAML files and used in Tailwind config
- Custom CSS uses CSS variables populated from design tokens
- Data validation is implemented in data files
- Mobile-first responsive design approach
- Accessibility features include skip links and proper ARIA attributes
- Content is separated from code and design for easier editing
- All visual properties are controlled via YAML files in `src/design/`

## Quick Reference: Design Token Files

| File              | Purpose          | Example Changes                          |
| ----------------- | ---------------- | ---------------------------------------- |
| `colors.yaml`     | Color palette    | Brand colors, semantic colors, gradients |
| `themes.yaml`     | Theme config     | Light/dark mode colors, toggle icons     |
| `typography.yaml` | Fonts & text     | Font families, sizes, heading styles     |
| `spacing.yaml`    | Layout spacing   | Margins, paddings, gaps, containers      |
| `components.yaml` | Component styles | Buttons, cards, navigation, forms        |
| `layout.yaml`     | Layout config    | Grids, breakpoints, animations, z-index  |

## Testing Checklist

- [ ] Design changes reflect across all pages
- [ ] Both light and dark themes work correctly
- [ ] Responsive design works on mobile, tablet, and desktop
- [ ] Color contrast meets accessibility standards
- [ ] All links and interactive elements work
- [ ] Build completes without errors
