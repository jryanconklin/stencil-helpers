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
12. Evaluate starter components in `./components` for use (consider `frog-form-control` to start)
13. Replace utility functions in `src/utils` with those from [templates](templates/utils)
14. Remove default `src/components/my-component` and rebuild with `npm run build`
15. Add [Storybook](templates/.storybook/README.md)
16. Run `npx sort-package-json` to sort the scripts we've added with Stencil's defaults.
