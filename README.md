# Stencil Helpers

Stencil helpers are a set of project upgrades and additions to Stencil's components tool.

## Steps to Scaffold Project

These steps assume you've scaffolded a Stencil project elsewhere.

1. `npm init stencil`
2. Remove default `readme.md` and replace with project-specific `README.md`.
3. Namespace your package name in `package.json`.
4. Configure Global CSS:
   - Add Global CSS Styling at `src/globals/css/index.css` and update stencil config for global css:
    ```javascript
    globalStyle: 'src/global/css/index.css'
    ```
   - Add Reset CSS Styling at `src/globals/css/base/_reset.css` and via `npm i modern-css-reset -D` and update stencil config for component css.
    ```javascript
    injectGlobalPaths: ['node_modules/modern-css-reset/dist/reset.min.css', 'src/global/css/base/_reset.css']
    ```
5. Configure Jest Testing for Components:
    ```
    npm install --save-dev @types/jest@26.0.21 jest@26.6.3 jest-cli@26.6.3 @types/puppeteer@5.4.3 puppeteer@5.5.0
    ``` 
6. Evaluate starter components in `./components` for use (consider `frog-grid` to start). Remove default `src/components/my-component` and rebuild with `npm run build`
7. Initialize Storybook via `npx sb init`, select custom > web-components. See `.storbyook` here for config updates.
8. Add utility JS packages: `classnames`, `concurrently`, `lit-html`, `wait-on`, `web-component-analyzer`. 
9. Add formatting packages:  `eslint`, `eslint-config-prettier`, `eslint-plugin-react`, `prettier`, `svgo`.
10. See `/configs` here for config examples.
11. Configure scripts for local dev! Move stories, update `package.json`:
     ```javascript
     "preinstall": "npx check-node-version --node $(cat .nvmrc)",
     "predeploy": "npm run sb.build.prod",
     "deploy.storybook": "storybook-to-ghpages",
     "dev": "npm run sb.dev.watch",
     "format": "concurrently -c \"#00a7e1,#e3b121\" \"npm:format.tokens\" \"npm:format.code\"",
     "format.code": "eslint src --fix && prettier --write .",
     "format.svg": "concurrently -c \"#00a7e1,#e3b121,#e97135\" \"npm:format.svg.bgImage\" \"npm:format.svg.outline\" \"npm:format.svg.solid\"",
     "format.svg.icons": "svgo -f ./src/global/assets/icons --config=./svgo.default.yaml",
     "format.tokens": "style-dictionary build --config tokens/style-dictionary.config.json",
     "lint": "eslint src --fix && prettier --check .",
     "sb.dev": "npm run sb.wait && start-storybook -p 6006",
     "sb.dev.watch": "concurrently -c \"#00a7e1,#e3b121,#e97135\" \"npm:wca.custom-elements\" \"npm:build.watch\" \"npm:sb.dev\"",
     "sb.prod": "npm run sb.wait && NODE_ENV=production build-storybook -o storybook-static",
     "sb.build.prod": "concurrently -c \"#00a7e1,#e3b121,#e97135\" \"npm:wca.custom-elements\" \"npm:build\" \"npm:sb.prod\"",
     "sb.wait": "wait-on dist/esm/loader.js .storybook/custom-elements.json",
     "wca.custom-elements": "wca analyze src --format json --outFile .storybook/custom-elements.json"
     ```
12. Run `npx sort-package-json` to sort the scripts we've added with Stencil's defaults.
13. Evaluate and add code from this project in `/templates`.
14. Update root npm scripts.
15. Update to make sure `dist/` assets are installed.
16. Scaffold Theme where this will be used.
