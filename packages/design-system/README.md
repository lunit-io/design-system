# Lunit Design System

## Development

- At `/` location
  - (`npx lerna bootstrap --use-workspaces` : Install lerna. If you haven't installed lerna at this location, you have to excute this command.)
  - `yarn build:design-system` : Build dependencies packages to run for 'design-system'
- At `/packages/design-system` location
  - `yarn storybook` : Runs [storybook](http://localhost:6006) local dev server on http://localhost:6006

## Usage

### Create Story

A story is simply a case in which one component is executable.
You can browse the stories in the UI and see the code behind them in files that end with `.stories.js(jsx)` or `.stories.ts(tsx)`.

```jsx
// Button.stories.js|jsx

import React from "react";

import { Button } from "./Button";

export default {
  /* 👇 The title controls the name shown in the storybook sidebar. */
  title: "Components/Button",
  component: Button,
};

export const Primary = () => <Button primary>Button</Button>;
```

### Documentation

Documentation can be found [Storybook's docs site](https://storybook.js.org/docs/react/writing-stories/introduction).
