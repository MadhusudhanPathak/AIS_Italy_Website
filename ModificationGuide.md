# Content & Design Modification Guide for AIS Italy Website

## Introduction

Welcome to the AIS Italy Website Modification Guide! This document is designed to help users edit website content and design safely and effectively without affecting the underlying functionality.

The website has been restructured with a **design token system** that separates content, design, and code. This means you can update both content AND visual design without touching any code!

## Two Types of Modifications

### 1. Content Changes (Non-Technical)

For updating text, headings, images, and page content - use the `/data` directory.

### 2. Design Changes (Non-Technical)

For updating colors, fonts, spacing, and visual styles - use the `/src/design` directory.

## Part 1: Content Modifications

### The Data Directory

All content lives in the `/data` directory at the root of the project:

- `home.yaml` - Homepage content
- `about.yaml` - About Us page content
- `events.yaml` - Events & News page content
- `activities.yaml` - Activities page content
- `community.yaml` - Community page content
- `faq.yaml` - FAQ page content
- `contact.yaml` - Contact page content
- `global.yaml` - Shared content (navigation, footer, social links)

### File Format

We use YAML format - it's human-readable and uses simple indentation.

### Common Content Tasks

#### Updating Homepage Text

1. Open `data/home.yaml`
2. Find the section (e.g., `hero:`, `mission:`, `features:`)
3. Update the text after colons
4. Save the file

#### Adding a New Event

1. Open `data/events.yaml`
2. Find `upcoming_events:` section
3. Add a new item following the existing structure
4. Increment the `id` number
5. Save the file

#### Changing Navigation Links

1. Open `data/global.yaml`
2. Find `navigation:` section
3. Update `name` or `url` fields
4. Save the file

#### Modifying FAQ Questions

1. Open `data/faq.yaml`
2. Find `categories:` section
3. Locate the question and update `question` or `answer`
4. Save the file

## Part 2: Design Modifications

### The Design Directory

All design tokens live in `/src/design` directory:

```
src/design/
├── design.yaml        # Main settings
├── colors.yaml        # Colors
├── themes.yaml        # Light/Dark themes
├── typography.yaml    # Fonts & text styles
├── spacing.yaml       # Margins & paddings
├── components.yaml    # Component styles
├── layout.yaml        # Layout settings
└── README.md          # Design documentation
```

### Changing Brand Colors

**File**: `src/design/colors.yaml`

```yaml
# Change these values to update brand colors
brand:
  primary: '#3b82f6' # Main brand color (blue)
  primaryDark: '#1e40af' # Darker variant
  secondary: '#10b981' # Secondary color (emerald)
  accent: '#6d28d9' # Accent color (purple)
```

**What changes**: Buttons, links, accents, gradients across the entire site

### Changing Theme Colors

**File**: `src/design/themes.yaml`

```yaml
# Light theme
light:
  css:
    --bg-primary: '#ffffff' # Background
    --text-primary: '#111827' # Text color
    --border-default: '#e5e7eb' # Border color

# Dark theme
dark:
  css:
    --bg-primary: '#0f1727' # Dark background
    --text-primary: '#f9fafb' # Light text
    --border-default: '#334155' # Dark border
```

**What changes**: Background, text, and border colors for light/dark modes

### Changing Fonts

**File**: `src/design/typography.yaml`

```yaml
fontFamilies:
  sans:
    stack:
      - "'Inter'" # Your chosen font
      - 'system-ui'
      - 'sans-serif'
  display:
    stack:
      - "'Poppins'" # Heading font
      - 'system-ui'
      - 'sans-serif'
```

**What changes**: All text across the website

### Changing Font Sizes

**File**: `src/design/typography.yaml`

```yaml
fontSizes:
  h1:
    value: '2.5rem' # Heading 1 size
    weight: 700 # Boldness
  body:
    value: '1rem' # Body text size
```

**What changes**: Text sizes throughout the site

### Changing Spacing & Padding

**File**: `src/design/spacing.yaml`

```yaml
# Section spacing
padding:
  section:
    top: "4rem"      # Top padding for sections
    bottom: "4rem"   # Bottom padding for sections

# Card padding
padding:
  card:
    default: "1.5rem"  # Card padding
```

**What changes**: Spacing between sections, inside cards, buttons, etc.

### Changing Button Styles

**File**: `src/design/components.yaml`

```yaml
buttons:
  primary:
    background: 'linear-gradient(to right, var(--accent), var(--safety-blue))'
    padding:
      x: '1.5rem' # Horizontal padding
      y: '0.75rem' # Vertical padding
    borderRadius: 'md'
```

**What changes**: All primary buttons across the site

### Changing Border Radius

**File**: `src/design/design.yaml`

```yaml
settings:
  borderRadius:
    sm: '0.25rem' # Small radius
    default: '0.375rem'
    md: '0.5rem' # Medium radius
    lg: '0.75rem' # Large radius
    xl: '1rem' # Extra large
    full: '9999px' # Circle
```

**What changes**: Rounded corners on buttons, cards, inputs

### Changing Shadows

**File**: `src/design/design.yaml`

```yaml
settings:
  shadows:
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
    default: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
```

**What changes**: Drop shadows on cards, buttons, modals

## Step-by-Step Editing Instructions

### 1. Find the Right File

- **Content change**: Go to `/data` directory
- **Design change**: Go to `/src/design` directory
- Open the corresponding YAML file

### 2. Make Your Changes

- Locate the section you want to edit
- Modify values after colons
- Maintain proper indentation (use spaces, not tabs)

### 3. Edit Lists

Lists use hyphens (-):

```yaml
features:
  - id: 1
    emoji: '🎓'
    title: 'Educational Programs'
    description: 'Your description here'
```

### 4. Add New Items

```yaml
features:
  - id: 1
    emoji: '🎓'
    title: 'First Item'
  - id: 2 # New item
    emoji: '🤝'
    title: 'Second Item'
```

### 5. Save and Test

- Save the file
- Run `npm start` to preview locally
- Check that changes appear correctly

## YAML Formatting Rules

### Do's ✅

```yaml
# Use spaces for indentation (2 spaces)
section:
  title: 'My Title'
  items:
    - item 1
    - item 2

# Use quotes for special characters
description: 'This has a colon: in it'
# Comments start with #
```

### Don'ts ❌

```yaml
# Don't use tabs
section:
	title: "Wrong"  # Tab character

# Don't forget space after colon
title:"Missing space"  # Wrong

# Don't forget quotes for special chars
url: https://example.com  # Might break
```

## Safe Characters

**Safe to use without quotes**: Letters, numbers, spaces, basic punctuation

**Need quotes**: `:`, `-`, `#`, `{`, `}`, `[`, `]`, `|`, `>`, `%`, `@`, `*`, `&`, `!`, `<`, `=`, `'`, `"`

Example:

```yaml
# Safe
title: Hello World

# Needs quotes
description: 'Contains: colon & special chars!'
```

## Testing Your Changes

### Before Publishing

1. **Preview locally**: Run `npm start` and visit `http://localhost:8080`
2. **Check affected pages**: Navigate to pages you modified
3. **Verify design**: Ensure colors, fonts, spacing look correct
4. **Test both themes**: Check light and dark modes
5. **Test links**: Click all links
6. **Check mobile**: View on different screen sizes

### Troubleshooting

**Site doesn't load after changes:**

1. Check console for error messages
2. Verify YAML syntax (indentation, colons, quotes)
3. Compare with previous working version

**Content doesn't appear:**

1. Verify field name matches template
2. Check file is in correct location
3. Ensure site rebuilt after changes

**Design doesn't update:**

1. Clear browser cache
2. Rebuild: `npm run build`
3. Check YAML syntax in design file

**Colors look wrong:**

1. Verify hex color format (e.g., `#3b82f6`)
2. Check CSS variable references
3. Test in both light and dark modes

## Warnings: Files Not to Edit

⚠️ **DO NOT EDIT THESE FILES** unless you know what you're doing:

- `/src/layouts/base.njk` - Page layout template
- `/src/layouts/page.njk` - Page wrapper template
- `/src/components/` - Reusable components
- `/src/utils/` - Utility logic
- `.eleventy.js` - Site configuration
- `package.json` - Dependencies
- `tailwind.config.js` - Styling configuration (loads from design tokens automatically)

Editing these files could break the website functionality.

## Quick Reference

### Change Brand Colors

**File**: `src/design/colors.yaml`

```yaml
brand:
  primary: '#YOUR_COLOR'
```

### Change Fonts

**File**: `src/design/typography.yaml`

```yaml
fontFamilies:
  sans:
    stack: ["'Your Font'", 'sans-serif']
```

### Change Spacing

**File**: `src/design/spacing.yaml`

```yaml
padding:
  section:
    top: '6rem'
```

### Update Homepage

**File**: `data/home.yaml`

- Edit hero, features, mission sections

### Update Navigation

**File**: `data/global.yaml`

- Edit navigation section

### Add Event

**File**: `data/events.yaml`

- Add to upcoming_events list

## Support

If you encounter issues:

- Contact the technical team
- Check `src/design/README.md` for design system docs
- Refer to original developers

**Remember**: The system is designed to be safe. Content and design files include validation and fallbacks to prevent breaking the site!
