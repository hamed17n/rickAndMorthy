# The Rick and Morty Characters

[Introduction](#introduction)

[Available Scripts](#available-scripts)

[Third party libraries](#third-party-libraries)

[Architecture](#architecture)

---

## Introduction

This project was developed with **React** and **Typescript**. also I used **Tailwindcss** for styling, **React-Query** for caching server data, and **StoryBook** for a demo, document, and test components and fragments.

## Available Scripts

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

[Live Demo](https://hamed17n-rick-and-morthy.netlify.app/)

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn storybook`

Runs Storybook in [http://localhost:6006](http://localhost:6006).
All components and fragments states are available there.

[Live Storybook Demo](https://hamed17n.github.io/rickAndMorthy/)

### `yarn build-storybook`

Builds Storybook for production. It could be deployed as static page.

### `yarn pretty`

Runs prettier over `src` directories.

## Third party libraries

Summary explanation about third-party libraries and why i used them in this project:

### React-Query

`React Query is often described as the missing data-fetching library for React, but in more technical terms, it makes fetching, caching, synchronizing and updating server state in your React applications a breeze.`

I used it for caching data from API. also it helps me for better user experiences, better state handling (loading, error, ...), and data restoration in the application.

[Link to compare with other alternative libraries](https://react-query.tanstack.com/comparison)

Also with some sense of foresight, it could be very useful for application expansion and add some extra features. (mutate and post data, ...)

### Storybook

`Storybook provides a sandbox to build UIs in isolation so you can develop hard-to-reach states and edge cases.`

I used it for developing application components and fragments. also, it can provide us with a very helpful document. and some efficient ways for testing our fragments.

### Tailwindcss

`A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.`

I used the **atomic** CSS class approach for styling. with this approach, we can develop our customize design system and avoid duplicate CSS classes. Also, it gives us nice speed in development.

99 percent of our requirements could be satisfied with this approach. we can use the CSS module for any special styling that can't cover by TailwindCss.

## Architecture

### Folder structure

```
src
|── @types : Any internal and external custom types place here
├── components
|   ├── common: shared component and fragments with test and story
|   ├── characterPage: Character datail page related components
│   └── mainPage: Main (index) page related components
├── constants: Contains any constant data of application
│   ├── apiRoutes: any api routes that application call form giphy
│   ├── appRoutes: application routes for links and redirect purposes
│   ├── errors: error texts
│   └── queryKeys: query keys that react query rely on them. application
├── hooks
│   ├── index: re-export hooks for better developer experience
│   └── [other custom hooks]
├── mocks: mock data that use in tests
├── pages: application pages main components
├── resquests: resquests function for calling API
├── styles: css files
└── utils
    ├── api: instance of axios with custom interceptors and api_key applied here
    └── config: appliction config. some of them read from env file
```

#### Notes

1. they are some `index.ts` files that re-export modules. this approach provides us better development experience and speed.
2. `constants` can give us unification in testing and development. this approach also reduces some typo mistakes in the development
3. Alternatives: they could be several solutions for the directory structure. [See this Link](https://reactjs.org/docs/faq-structure.html)

### Routes and Navigation

React-Router v6 handles navigation in that application. as it's a small application we only have two routes :

1. `/` : main page (index)
2. `:id` : dynamic route that get character id and show the details.

### State Management

as I used **React-Query** in this project if I need any data from queries I can access them with the `getQueryData` method to avoid prop drilling and complexity. also, data mutation is available by `useMutation` hook.

#### Alternatives

we can use redux or redux-toolkit as centralized state managers.
or use react context with an atomic approach.

### Testing

testing of this project done with Jest and testing-library. we have unit and integration tests. also as we use Storybook snapshot and accessibility test can be provided easily with some plugins.
if we need e2e test cypress could be a nice choice.

### Linting

used husky for `pre-commit` and other git hooks.

#### eslint

used default `create-react-app` config. also
config available in: `.eslintrc`

#### prettier

config available in: `.prettierrc.json`

#### commitlint

used `Conventional Commits` rules. [More information](https://www.conventionalcommits.org/en/v1.0.0/)
