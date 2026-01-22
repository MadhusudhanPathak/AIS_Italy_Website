Icons and image assets

This folder contains vector illustrations and small thumbnail variants used across the site.

Files:

- `illustration-1.svg`, `illustration-2.svg`, `illustration-3.svg` — full-size SVG illustrations.
- `thumb-illustration-1.svg`, `thumb-illustration-2.svg`, `thumb-illustration-3.svg` — small SVG thumbnails for lists/cards.

Generating PNG/WebP thumbnails

If you want PNG or WebP thumbnails, use ImageMagick or `sharp` (Node). Example ImageMagick commands:

```powershell
# PNG
magick convert src/assets/img/illustration-1.svg -thumbnail 400x250 -background transparent -resize 400x250 src/assets/img/illustration-1.thumb.png

# WEBP
magick convert src/assets/img/illustration-1.svg -thumbnail 400x250 -background transparent -resize 400x250 src/assets/img/illustration-1.thumb.webp
```

Example using `sharp` (Node):

```js
const sharp = require('sharp');
sharp('src/assets/img/illustration-1.svg')
  .resize(400, 250)
  .webp({ quality: 80 })
  .toFile('src/assets/img/illustration-1.thumb.webp');
```

Usage

- Use full SVGs for hero / large panels.
- Use the `thumb-*.svg` for lightweight inline thumbnails.
- If you need PNG/WebP, generate with the commands above and commit to source.
