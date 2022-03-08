# Lunit Design System Icons

## Installation

@mui/material v5 is required.

```shell
// with npm
npm install @lunit/design-system-icon

// with yarn
yarn add @lunit/design-system-icon
```

## Usage

Icons in this package is using [SvgIcon](https://mui.com/components/icons/#svgicon) wrapper.

```ts
import AdjustIcon from "@lunit/design-system-icon/Adjust";
// or
import { Adjust } from "@lunit/design-system-icon";

<AdjustIcon />
<AdjustIcon color="primary" /> // You can use any of SvgIcon props
```

## Icons

Other icons in the design system are in progress.

- Adjust
- Analyze
- Brightness
- Invert
- Pan
- Redo
- Reset
- Setting
- Undo
- ZoomIn
- ZoomOut

## Backlog

- [ ] Add all the design system icons
- [ ] Support all the variants(outlined, filled, two-tone)
- [ ] Export SVGs directly
- [ ] Automated regression test with the Figma project

## Support

*SangYeob Yu(syyu@lunit.io)*
