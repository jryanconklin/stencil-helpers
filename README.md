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
4. Add utility JS packages:
   ```
   npm i classnames concurrently lit-html wait-on web-component-analyzer -D
   ```
5. Remove default `readme.md` and replace with project-specific `README.md`
6. Namespace your package name in `package.json`
7. Evaluate and include [Stencil extras](https://stenciljs.com/docs/config-extras) in your `stencil.config.js` file
8. Add Global CSS:
   - Add Global stylesheet `src/assets/css/index.css`
   - If desisred, create a directory structure for stylesheets via `@import` rules in `index.css` (handled by postcss)
   - Update `stencil.config.js` for global css:
    ```javascript
    globalStyle: 'src/assets/css/index.css'
    ```
9. Add and Configure [PostCSS](templates/postcss/README.md)
10. Configure [Tokens](templates/tokens/README.md)
11. Configure Code Style and [Formatting](templates/formatting)
12. Evaluate starter components in `./components` for use (consider `frog-grid` to start). 
13. Remove default `src/components/my-component` and rebuild with `npm run build`.






14. 
15. Initialize Storybook via `npx sb init`, select custom > web-components. See `.storbyook` here for config updates.
 
16. Add formatting packages:  `eslint`, `eslint-config-prettier`, `eslint-plugin-react`, `prettier`, `svgo`.
17. See `/configs` here for config examples.
18. Configure scripts for local dev! Move stories, update `package.json`:
     ```json
     "predeploy": "npm run sb.build.prod",
     "deploy.storybook": "storybook-to-ghpages",
     "dev": "npm run sb.dev.watch",
     "sb.dev": "npm run sb.wait && start-storybook -p 6006",
     "sb.dev.watch": "concurrently -c \"#00a7e1,#e3b121,#e97135\" \"npm:wca.custom-elements\" \"npm:build.watch\" \"npm:sb.dev\"",
     "sb.prod": "npm run sb.wait && NODE_ENV=production build-storybook -o storybook-static",
     "sb.build.prod": "concurrently -c \"#00a7e1,#e3b121,#e97135\" \"npm:wca.custom-elements\" \"npm:build\" \"npm:sb.prod\"",
     "sb.wait": "wait-on dist/esm/loader.js .storybook/custom-elements.json",
     "wca.custom-elements": "wca analyze src --format json --outFile .storybook/custom-elements.json"
     ```
19. Run `npx sort-package-json` to sort the scripts we've added with Stencil's defaults.
20. Evaluate and add code from this project in `/templates`.
21. Update root npm scripts.
22. Update to make sure `dist/` assets are installed.
23. Scaffold Theme where this will be used.
