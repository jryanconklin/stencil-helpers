# Scripts

A collection of node scripts to improve the Stencil authoring experience. This directory should be added
to the root of the project at `/scripts`.

## Process SVG

This is a Commander based script designed to base64 SVG images into JSON files. Those JSON files may then
be used by Stencil components or by Style Dictionary for CSS Custom Properties.

This is best used with SVGO for optimization.

### Usage

```
npm install svgo
npm install commander
```

Add to `package.json`:

```json
    "format.svg": "svgo -f ./src/global/assets/icons --config=./svgo.default.yaml",
    "svg": "npm run format.svg & npm run svg.bg & npm run svg.icons",
    "svg.bg": "node scripts/process-svg.js -i src/global/assets/icons/background -t src/tokens/bgImage.json -r bg",
    "svg.icons": "node scripts/process-svg.js -i src/global/assets/icons -s src/components/REPLACE-icon/assets/icons.json -t src/tokens/icons.json -r icons",
```
 
### FUTURE

#### Colorize

Add the option to colorize these with the `-c` flag. Color will allow an array of hex values to be passed to replace
the `currentColor` value in fill or stroke.
