# Lunit Design System Logo

This package provides logos used in the Lunit projects.

## Development

- `yarn dev`: Generates logo components and builds the logos.
- `yarn storybook`: Running the storybook.

## Installation

Install the package in your project directory with:

```sh
// with npm
npm install @lunit/design-system-logo

// with yarn
yarn add @lunit/design-system-logo
```

## Usage

We recommend that you use path imports(option 1). It can avoid pulling in unused modules.

```tsx
// option 1 size: 11.7k (gzipped: 4.6k)
import Lunit from '@lunit/design-system-logo/Lunit'
// option 2 size: 578.1k (gzipped: 87.1k)
import { Lunit } from '@lunit/design-system-logo'

const Logo = () => (
<Lunit style={{ height: '20px' }} /> // only svg file
)

export default Logo
````
