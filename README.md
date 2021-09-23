# Stencil Helpers

Stencil helpers are a set of project upgrades and additions to Stencil's components tool.

## Steps to Scaffold Project

These steps assume you've scaffolded a Stencil project elsewhere.

1. `npm init stencil`
2. Update the contents of the generated `.gitignore` with the `.gitignore` of this project
3. Create an `.nvmrc` file and set your node version. Add this check to `scripts` in `package.json`:
    ```
    "preinstall": "npx check-node-version --node $(cat .nvmrc)"
    ```
4. Remove default `readme.md` and replace with project-specific `README.md`
5. Namespace your package name in `package.json`
6. Evaluate and include [Stencil extras](https://stenciljs.com/docs/config-extras) in your `stencil.config.js` file
7. Add Global CSS:
   - Add Global stylesheet `src/assets/css/index.css`
   - If desisred, create a directory structure for stylesheets via `@import` rules in `index.css` (handled by postcss)
   - Update `stencil.config.js` for global css:
    ```javascript
    globalStyle: 'src/assets/css/index.css'
    ```
8. Add and Configure [PostCSS](templates/postcss/README.md)
9. Configure [Tokens](templates/tokens/README.md)
10. Configure Code Style and [Formatting](templates/formatting)















8. Evaluate starter components in `./components` for use (consider `frog-grid` to start). Remove default `src/components/my-component` and rebuild with `npm run build`
9. Initialize Storybook via `npx sb init`, select custom > web-components. See `.storbyook` here for config updates.
10. Add utility JS packages: `classnames`, `concurrently`, `lit-html`, `wait-on`, `web-component-analyzer`. 
11. Add formatting packages:  `eslint`, `eslint-config-prettier`, `eslint-plugin-react`, `prettier`, `svgo`.
12. See `/configs` here for config examples.
13. Configure scripts for local dev! Move stories, update `package.json`:
     ```javascript
     "preinstall": "npx check-node-version --node $(cat .nvmrc)",
     "predeploy": "npm run sb.build.prod",
     "deploy.storybook": "storybook-to-ghpages",
     "dev": "npm run sb.dev.watch",
     "format": "concurrently -c \"#00a7e1,#e3b121\" \"npm:format.tokens\" \"npm:format.code\"",

     "format.svg": "concurrently -c \"#00a7e1,#e3b121,#e97135\" \"npm:format.svg.bgImage\" \"npm:format.svg.outline\" \"npm:format.svg.solid\"",
     "format.svg.icons": "svgo -f ./src/global/assets/icons --config=./svgo.default.yaml",
     "format.tokens": "style-dictionary build --config tokens/style-dictionary.config.json",

     "sb.dev": "npm run sb.wait && start-storybook -p 6006",
     "sb.dev.watch": "concurrently -c \"#00a7e1,#e3b121,#e97135\" \"npm:wca.custom-elements\" \"npm:build.watch\" \"npm:sb.dev\"",
     "sb.prod": "npm run sb.wait && NODE_ENV=production build-storybook -o storybook-static",
     "sb.build.prod": "concurrently -c \"#00a7e1,#e3b121,#e97135\" \"npm:wca.custom-elements\" \"npm:build\" \"npm:sb.prod\"",
     "sb.wait": "wait-on dist/esm/loader.js .storybook/custom-elements.json",
     "wca.custom-elements": "wca analyze src --format json --outFile .storybook/custom-elements.json"
     ```
14. Run `npx sort-package-json` to sort the scripts we've added with Stencil's defaults.
15. Evaluate and add code from this project in `/templates`.
16. Update root npm scripts.
17. Update to make sure `dist/` assets are installed.
18. Scaffold Theme where this will be used.
