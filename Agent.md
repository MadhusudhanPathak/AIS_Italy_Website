# AI Safety Italia Website - Agent Configuration

## Overview
This document describes the AI Safety Italia Website project and provides guidance for AI agents working with the codebase.

## Project Information
- **Name**: AI Safety Italia Website
- **Purpose**: A modern, minimal static website for AI Safety Italia - built with Eleventy and Tailwind CSS
- **Technology Stack**: Eleventy, Tailwind CSS, PostCSS, JavaScript
- **Repository**: AIS Italy Website
- **Features**: Dark/light mode toggle, structured content management, responsive design

## Architecture
- **Static Site Generator**: Eleventy (11ty)
- **Styling**: Tailwind CSS with custom CSS
- **Templating**: Nunjucks (`.njk`)
- **Content**: Markdown (`.md`) and YAML (`.yaml`)

## Directory Structure
```
AIS Italy Website/
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
│   └── utils/              # Utility files
├── .eleventy.js           # Eleventy configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── vercel.json            # Vercel deployment config
├── package.json
├── ModificationGuide.md   # Content modification guide for non-technical users
└── README.md
```

## Key Files and Their Purpose
- `.eleventy.js`: Configuration for the Eleventy static site generator (loads content from root data directory)
- `tailwind.config.js`: Configuration for Tailwind CSS
- `src/data/site.js`: Site-wide configuration (name, description, navigation, etc.)
- `src/data/team.js`: Team member information
- `src/data/content.js`: Loads content from root data directory
- `data/*.yaml`: Content data files for each page section
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

## Theme System
- **Dark/Light Mode**: Implemented with CSS variables and JavaScript
- **Theme Toggle**: Button in header next to Join button
- **Persistence**: Theme preference saved in localStorage
- **Background Images**: Different images for home page banner in each theme

## Best Practices for Modifications
1. Maintain accessibility standards (ARIA labels, semantic HTML)
2. Follow existing code style and naming conventions
3. Ensure responsive design works across devices
4. Validate data inputs and handle errors gracefully
5. Update documentation when making significant changes
6. Test changes locally before committing
7. Maintain separation between content (YAML) and presentation (CSS/HTML)

## Common Tasks
- **Add a new page**: Create a new `.md` file in `src/content/` and add corresponding YAML in `data/`
- **Update navigation**: Modify `src/data/site.js`
- **Change site colors**: Update CSS variables in `src/assets/css/style.css` and `tailwind.config.js`
- **Add team member**: Update `src/data/team.js`
- **Modify content**: Edit appropriate YAML file in root `data/` directory

## Important Notes
- The site uses Nunjucks templating engine
- Custom CSS extends Tailwind classes with CSS variables for theming
- Data validation is implemented in data files
- Mobile-first responsive design approach
- Accessibility features include skip links and proper ARIA attributes
- Content is separated from code for easier editing by non-technical users