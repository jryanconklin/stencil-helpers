# PostCSS Configutation

## Packages

- [Stencil PostCSS](https://www.npmjs.com/package/@stencil/postcss) 
- [PostCSS Nested](https://www.npmjs.com/package/postcss-nested)
- [PostCSS Preset Env](https://www.npmjs.com/package/postcss-preset-env)

### Stencil PostCSS

This plugin is used to add PostCSS as a plugin inside of Stencil.

### PostCSS Preset Env

PostCSS Preset Env combines several popular postcss packages allowing you to write modern css and process to a format
most browsers can use. It automatically determines polyfills via an implementation of `autoprefixer` baked in.

The configuration is set to Stage 1 for `custom-media` and `nesting` rules.

### PostCSS Nested

Optional. PostCSS Nested allows you to write Sass-style nesting rules in your `.css` and `.pcss` stylesheets. While 
`postcss-preset-env` contains an implementation of `postcss-nesting`, a package that implements the CSS draft spec for
nesting, it's usage is significantly different from Sass. If you would like to use Sass style nesting over the draft
spec, add this plugin to your configuration.

## Installation

```javascript
npm i @stencil/postcss -D
npm i postcss-nested -D
npm i postcss-preset-env -D
```

## Stencil Config

Update your `stencil.config.js` file:

```javascript
// PostCSS
import { postcss } from '@stencil/postcss';
import postcssNested = require('postcss-nested');
import postcssPresetEnv = require('postcss-preset-env');

export const config: Config = {
  . . .
  plugins: [
    postcss({
      plugins: [
        postcssNested(),
        postcssPresetEnv({
          stage: 1,
        })
      ]
    })
  ]
};
```

NOTE: The following is not working on Node 16 and needs revising for approach on web component resets.

Optionally, `@stencil-postcss` allows you to use `injectGlobalPaths` as a plugin to add stylesheets to every
web component:

```javascript
plugins: [
  postcss({
    plugins: [
      injectGlobalPaths: ['node_modules/modern-css-reset/dist/reset.min.css', 'src/assets/css/base/_reset.css']
    ]
  })
]
```

## Storybook Config

While Stencil adds postcss via the `@stencil-postcss` package, a Storybook configuration will still require a normal
`postcss.config.js` (or equivalent) file. Add `postcss.config.js`:

```javascript
module.exports = {
  plugins: [require('postcss-nested'), require('postcss-preset-env')],
};
```

## CSS Directory

The [CSS directory](css) structure is a starting point for CSS and can be added to `src/assets`. Note that the 
`_variables.css` is expected to be written by the [Tokens](../tokens) approach.

## Editor Configuration

### PhpStorm

- Install the PhpStorm PostCSS [Plugin](https://plugins.jetbrains.com/plugin/8578-postcss)
- Save and Exit Preferences
- Reopen Preferences and navigate to Languages & Frameworks / Style Sheets / Dialects
- Add PostCSS as the dialect for the Stencil directory
