# Design Tokens

This folder contains all design tokens that control the visual appearance of the website. Design tokens are stored in YAML files for easy editing and maintenance.

## Quick Start

To change the design of the website, edit the YAML files in this folder. Changes will be automatically applied across the entire site.

## File Structure

```
design/
├── design.yaml        # Main design configuration and settings
├── colors.yaml        # Color palette and semantic colors
├── themes.yaml        # Light and dark theme configurations
├── typography.yaml    # Fonts, sizes, and text styles
├── spacing.yaml       # Margins, paddings, and layout spacing
├── components.yaml    # Component-specific styles
├── layout.yaml        # Layout configurations and breakpoints
└── README.md          # This file
```

## Design Token Files

### `design.yaml` - Main Configuration

Contains global design settings and imports all other design files.

**Key settings:**

- `settings.defaultTheme`: Default theme (light/dark)
- `settings.enableThemeToggle`: Enable/disable theme toggle
- `settings.borderRadius`: Border radius scale
- `settings.shadows`: Shadow definitions
- `settings.transitions`: Animation durations
- `settings.breakpoints`: Responsive breakpoints

### `colors.yaml` - Color Palette

Defines all colors used across the website.

**Sections:**

- `brand`: Brand colors (primary, secondary, accent)
- `semantic`: Action and state colors (info, success, warning, error)
- `custom`: Custom named colors (safety-blue, safety-purple)
- `neutral`: Grayscale colors (neutral-50 to neutral-900)
- `background`: Background colors for light/dark themes
- `text`: Text colors for light/dark themes
- `border`: Border colors for light/dark themes
- `gradients`: Gradient definitions

**Example - Changing brand colors:**

```yaml
brand:
  primary: '#FF5733' # New primary color
  primaryDark: '#C70039' # Darker variant
  secondary: '#900C3F' # Secondary color
  accent: '#581845' # Accent color
```

### `themes.yaml` - Theme Configuration

Defines light and dark theme color schemes.

**Sections:**

- `light`: Light theme CSS variables
- `dark`: Dark theme CSS variables
- `toggle`: Theme toggle settings (icons, storage)
- `backgrounds`: Background images for themes

**Example - Changing dark theme background:**

```yaml
dark:
  css:
    --bg-primary: '#1a1a2e' # New dark background
    --text-primary: '#eaeaea' # New light text
```

### `typography.yaml` - Fonts & Text

Controls all typography settings.

**Sections:**

- `fontFamilies`: Font stacks (sans, display, mono)
- `fontSizes`: Font size scale (xs to 7xl)
- `fontWeights`: Font weight scale (100-900)
- `headings`: Heading styles (h1-h6)
- `body`: Body text styles
- `links`: Link styles
- `utilities`: Text utility classes
- `letterSpacing`: Letter spacing values

**Example - Changing font family:**

```yaml
fontFamilies:
  sans:
    stack:
      - "'Inter'"
      - 'system-ui'
      - 'sans-serif'
  display:
    stack:
      - "'Poppins'"
      - 'system-ui'
      - 'sans-serif'
```

### `spacing.yaml` - Spacing & Layout

Defines spacing scale and layout presets.

**Sections:**

- `base`: Base spacing scale (0-32)
- `padding`: Padding presets for sections, cards, buttons
- `margin`: Margin presets for elements, headings, paragraphs
- `gap`: Gap values for flexbox/grid
- `components`: Component-specific spacing
- `container`: Container max-widths
- `grid`: Grid configuration

**Example - Changing section padding:**

```yaml
padding:
  section:
    top: '6rem' # Increased from 4rem
    bottom: '6rem' # Increased from 4rem
```

### `components.yaml` - Component Styles

Defines styles for reusable components.

**Components:**

- `buttons`: Button variants (primary, secondary, outline)
- `cards`: Card styles (default, elevated, interactive)
- `navigation`: Header and navigation styles
- `hero`: Hero section styles
- `features`: Feature card styles
- `stats`: Statistics display styles
- `footer`: Footer styles
- `forms`: Form input styles
- `badges`: Badge variants
- `alerts`: Alert/notification styles

**Example - Changing button style:**

```yaml
buttons:
  primary:
    background: 'linear-gradient(to right, var(--brand-primary), var(--brand-secondary))'
    padding:
      x: '2rem' # Wider padding
      y: '1rem' # Taller
```

### `layout.yaml` - Layout Configuration

Controls page layouts and structural settings.

**Sections:**

- `page`: Page-level layout
- `container`: Container settings
- `sections`: Section layout presets
- `grid`: Grid system configuration
- `flex`: Flexbox utilities
- `breakpoints`: Responsive breakpoints
- `zIndex`: Z-index scale
- `animations`: Animation settings

**Example - Changing container width:**

```yaml
container:
  maxWidth: '1400px' # Wider container
  padding:
    default: '1.5rem'
```

## Using Design Tokens

### In Templates (Nunjucks)

```nunjucks
{# Access color #}
<div style="color: {{ design.colors.brand.primary }}">

{# Access typography #}
<h1 style="font-size: {{ design.typography.headings.h1.size }}">

{# Access spacing #}
<section style="padding: {{ design.spacing.padding.section.top }}">
```

### In CSS

Design tokens are automatically converted to CSS variables:

```css
/* Use CSS variables */
.button {
  background-color: var(--accent);
  color: var(--text-primary);
  padding: var(--spacing-4);
  box-shadow: var(--shadow);
}
```

### In Tailwind Config

Design tokens are loaded in `tailwind.config.js`:

```javascript
// Colors are available as:
@apply bg-accent text-primary bg-safety-blue;

// Fonts:
@apply font-sans font-display font-mono;

// Sizes:
@apply text-xl text-2xl text-4xl;
```

## Best Practices

1. **Edit YAML files only** - Don't hardcode values in templates or CSS
2. **Use semantic names** - Use `brand.primary` instead of hex codes
3. **Maintain consistency** - Keep related values in the same file
4. **Test both themes** - Always check light and dark mode
5. **Document changes** - Add comments for non-obvious values

## Changing Common Elements

### Change Brand Colors

Edit `colors.yaml`:

```yaml
brand:
  primary: '#YOUR_COLOR'
  primaryDark: '#YOUR_DARKER_COLOR'
```

### Change Fonts

Edit `typography.yaml`:

```yaml
fontFamilies:
  sans:
    stack:
      - "'Your Font'"
      - 'sans-serif'
```

### Change Spacing

Edit `spacing.yaml`:

```yaml
padding:
  section:
    top: '6rem'
    bottom: '6rem'
```

### Change Border Radius

Edit `design.yaml`:

```yaml
settings:
  borderRadius:
    default: '0.5rem'
    lg: '1rem'
```

## Troubleshooting

**Changes not appearing:**

1. Rebuild the site: `npm run build`
2. Clear browser cache
3. Check YAML syntax (use a YAML validator)

**Build errors:**

1. Check YAML indentation (use spaces, not tabs)
2. Ensure all quotes are properly closed
3. Verify file is saved with UTF-8 encoding

## Additional Resources

- [YAML Syntax](https://yaml.org/)
- [Design Tokens W3C Draft](https://trac.w3.org/design-tokens/)
- [Tailwind CSS Configuration](https://tailwindcss.com/docs/configuration)
