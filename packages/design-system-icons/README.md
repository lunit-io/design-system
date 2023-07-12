# Lunit Design System Icons

[![npm (scoped)](https://img.shields.io/npm/v/@lunit/design-system-icons)](https://www.npmjs.com/package/@lunit/design-system-icons)

## User Guide

https://design-system-icons.d.lunit.io/

## Developer Guide

### Figma

Lunit Design System Figma: https://www.figma.com/file/l2f0f9phsDwoz4sRr9kYXx/Lunit_Foundation?node-id=12135%3A6326&t=UkUMrZ7Wwkj92Wy6-1

You can multi-select icons to export with [Select Layers plugin](https://www.figma.com/community/plugin/799648692768237063/Select-Layers).

You need [SVG Export plugin](https://www.figma.com/community/plugin/814345141907543603/SVG-Export) to export SVGs with proper settings.

- `<svg>` tag must not have any dimensions(width, height) to support `fontSize` props.
- Any elements inside `<svg>` (like `<path>`) must not have own `fill` to support `color` props.

### Build & Publish

At repository root, the `nx build @lunit/design-system-icons` command generates components and stores them in `generated/**/index.tsx` files. These files are then used as entry points by Webpack.

You can publish the package with `cd packages/design-system-icons && npm publish --access public`.

### Roadmap

- [x] Export [SvgIcon](https://mui.com/components/icons/#svgicon) wrapped components
- [x] Publish Storybook docs
- [x] Add all the design system icons
- [x] Support basic variants(outlined, filled)
- [ ] Support two-tone variant
- [ ] Export SVGs directly
- [ ] Automated visual test with the Figma project

## Support

*SangYeob Yu(syyu@lunit.io)*
