# Storybook Config

This file contains templates and examples for setting up Storybook in a Stencil project.

To use these, run `npx sb init` in your Stencil project and compare and replace the contents of this
directory as appropriate.

## Install

Initialize Storybook via `npx sb init` (it will infer Web Components)

```javascript
npx sb init
```

Delete Storybook default stories that have been placed in `src/stories` and run `npm run format`.

Install helper packages:

```
npm i typescript @storybook/addon-postcss @storybook/addons @storybook/theming @storybook/addon-a11y @storybook/addon-storysource -D
```

### Scripts

Replace the default Storybook scripts with the following scripts:

```
"dev": "npm run sb.dev.watch",
"sb.dev": "npm run sb.wait && start-storybook -p 6006",
"sb.dev.watch": "concurrently -c \"magenta,blue,green\" \"npm:wca.custom-elements\" \"npm:build.watch\" \"npm:sb.dev\"",
"sb.prod": "npm run sb.wait && NODE_ENV=production build-storybook -o storybook-static",
"sb.build.prod": "concurrently -c \"magenta,blue,green\" \"npm:wca.custom-elements\" \"npm:build\" \"npm:sb.prod\"",
"sb.wait": "wait-on dist/esm/loader.js .storybook/custom-elements.json",
"wca.custom-elements": "wca analyze src --format json --outFile .storybook/custom-elements.json"
```

## Configure

### Main

Replace the default `main.js` of `npx sb init` with the version [here](main.js).

### Preview

Replace the default `preview.js` of `npx sb init` with the version [here](preview.js).

### Custom Theme

Add [custom-theme.js](custom-theme.js) to your project and update:

- Validate Tokens
- Add/Update Logo to [stories/assets](stories/assets)
- Update Token Values in `create`
- Add the [manager](manager.js) file
