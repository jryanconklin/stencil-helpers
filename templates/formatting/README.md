# Formatting

This file covers the packages required to provide code linting and formatting.

As of September 22, 2021 the `@stencil/eslint` package isn't sufficient to provide linting for a build including
Storybook. This will continue to be evaluated. In the meantime, follow the instructions below.

## Installation

```
npm i eslint -D
npm i @typescript-eslint/eslint-plugin -D
npm i @typescript-eslint/parser -D
npm i eslint-plugin-react -D
npm i prettier -D
npm i svgo -D
```

## ESLint

See [ESLint](https://eslint.org/)

Eslint is used to lint JavaScript and TypeScript files. The current version is appropriate for Node 16, but there are
some items to keep track of for resolving dependencies with TypeScript and Stencil.

## Prettier

See [Prettier](https://prettier.io/) for info information.

The Stencil Component builder includes a default `prettier` configuration with out-of-date configuration. 
Copy the `.prettier` config files and add to your project. 

- [Config](.prettierrc.json)
- [Ignore](.prettierignore)

## SVGO

[SVGO](https://github.com/svg/svgo) is an optimizer for SVG files.

There are three configurations offered here depending on your project setup. `svgo.config.default.js` will work for most
cases. If you need to remove and replace `fill` or `stroke` attributes, consider the optional configs here.

## Configure

Add or replace the following configuration files to your project:

- [.eslintrc.js](.eslintrc.js)
- [.eslintignore](.eslintignore)
- [.prettier.json](.prettierrc.json)
- [.prettierignore](.prettierignore)
- [svgo.config.default.js](svgo.config.default.js)
- [tsconfig.eslint.json](tsconfig.eslint.json)
- [tsconfig.json](tsconfig.json)

## Scripts

Add or update the following to your `scripts` in your `package.json` file:

```
"lint": "eslint src --fix && prettier --check .",
"format.code": "eslint src --fix && prettier --write .",
"format.svg": "svgo -f ./src/assets/svg/icons --config=./svgo.config.default.js",
```
