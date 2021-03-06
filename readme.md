### Bitwala coding challenge

I wanted to both solve the assignment and show/discuss how I would structure a project/development process (be it React or React Native) to ensure code quality and best testing practices. I have used similar setup to Bitwala: Typescript, React, Apollo, Graphql. Most libraries functions with both React and React Native. The app includes:

- front page with list of blocks `(url: /)`
- individual block page `(url: /blocks/:height)`
- list of transactions `(url: /transactions)`

Deployed on: http://lasse.tech/bitwala-challenge/ (If some values don't show up, it is likely because it is slow loading)

### Structure

Scaffolding from `create-react-app`. Folder overview:

```
├── components (stateless and reusable components)
│   ├── Button
│   ├── Container
│   ├── Header
│   ├── Heading
│   ├── Layout
│   ├── Link
│   ├── Table
│   │   ├── Table.spec.tsx (unti test)
│   │   ├── Table.stories.tsx (storybook)
│   │   ├── Table.styles.tsx (styled components)
│   │   └── Table.tsx
│   └── TabsMenu
├── containers (stateful components)
│   ├── Block
│   ├── Blocks
│   │   ├── Blocks.spec.tsx (short integration test example)
│   │   └── Blocks.tsx
│   └── Transactions
├── index.tsx
├── mocks (mock API call for integration testing)
│   ├── handlers.tsx
│   └── server.tsx
└── utils (helper functions)
    ├── GlobalStyles.ts
    ├── apolloClient.ts
    ├── formatDate.ts
    ├── mountWithAll.tsx (setup testing environment to resemble app runtime)
    └── theme.ts (shared theme settings, could add dark/light theme if wanted)
```

#### Commands:

- `yarn start` runs the app
- `yarn storybook` runs storybook
- `yarn test` runs the test suite (should be run in CI pipeline as well)
- `yarn lint:fix` runs lint (should be run in CI pipeline as well)

#### Code

- Typescript (v. 4.1.3)
- [Prettier](https://prettier.io/) for code formatting
- [ESLint](https://eslint.org/) for catching bugs and maintain code quality
- [Husky](https://typicode.github.io/husky)/[Lint-staged](https://github.com/okonet/lint-staged) for enforcing ESLint pre-commit

### On testing: Unit test and integration test

Cornerstone of contentious deployment is testing, because it gives the confidence that the code actually work and thus can be push to production without manual testing processes. Structuring our test regime is easy, since stateless components under `/src/components` can be unit tested with small and easy written tests. Stateful containers under `src/containers` should be testing with integration tests where you fully mount the component and mock the API calls. Additionally, I find building stateless components in Storybook a good way to ensure component quality and catch bugs that you won't necessarily catch developing "in the app".

- [React Testing Library](https://testing-library.com/), essentially build for improving integration testing

- mocking API calls with [msw](https://mswjs.io/)

#### Design and workflow

- [Storybook](https://storybook.js.org/) for isolated component development. In practical terms, this means developers can build all the sub components of a given feature, merge them into master and then finally focus on implementing them into the site. This secures, smaller and focused PRs, continuously flow and helps componentize properly. Additionally, storybook can be deployed for designers, product managers and developers to use.
- [Rebass](https://rebassjs.org/) for fast and customizable components
- [Styled Components](https://styled-components.com/)

#### Data

- [Apollo client](https://www.apollographql.com/docs/react/) for React

### Further considerations and notes

- logging and app monitoring can be done via Sentry (both React and React Native)
- can be hosted on a simple CDN since it isn't server side rendered (SSR is however to be preferred e.g. NextJS and hosted on E2C instances)

Disclaimer: There was a lot to talk about but tried to limit it as much as possible and keep it within the scope of this assignment. Questions welcome.

### Screenshot

![Alt text](public/screenshot.jpg?raw=true 'Screenshot')
