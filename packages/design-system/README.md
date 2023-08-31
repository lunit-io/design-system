# Lunit Design System

## Development

- At `repository root` location
  - `npm i` : Install node modules and set Nx environment
  - `nx storybook @lunit/design-system` : Runs [storybook](https://storybook.js.org) local dev server on http://localhost:6006

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
