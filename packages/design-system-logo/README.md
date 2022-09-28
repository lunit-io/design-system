# Lunit Design System Logo

This package provides logos used in the Lunit projects.

## Development

- `yarn dev`: Generates logo components and builds the logos.
- `yarn storybook`: Running the storybook.

## Installation

Install the package in your project directory with:

```sh
npx @lunit/design-system-logo --favicon-path=<path>
```

If you want to save the favicon files, please set the path option.

## Usage

We recommend that you use path imports(**option 1**). It can avoid pulling in unused modules.

```tsx
// option 1 size: 11.7k (gzipped: 4.6k)
import Lunit from "@lunit/design-system-logo/Lunit";
// option 2 size: 578.1k (gzipped: 87.1k)
import { Lunit } from "@lunit/design-system-logo";

const Logo = () => (
  <Lunit style={{ height: "20px" }} /> // only svg file
);

export default Logo;
```

## Favicon

If the public directory exists, The favicon files are saved in the public directory.

```html
// public/index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" sizes="any" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/apple-touch-icon.png" />
    <title>Lunit</title>
  </head>
  <body></body>
</html>
```

If your project uses CRA, insert the code shown above into the HTML file.
