# Lunit Design System Icons

## User Guide

https://design-system-icons.d.lunit.io/

## Developer Guide

### Figma

Lunit Design System Figma: https://www.figma.com/file/ygzUKBGrGxEYzkhUwoOC3U/Lunit-Design-System?node-id=4604%3A96681

You can multi-select icons to export with [Select Layers plugin](https://www.figma.com/community/plugin/799648692768237063/Select-Layers).

You need [SVG Export plugin](https://www.figma.com/community/plugin/814345141907543603/SVG-Export) to export SVGs with proper settings.

- `<svg>` tag must not have any dimensions(width, height) to support `fontSize` props.
- Any elements inside `<svg>` (like `<path>`) must not have own `fill` to support `color` props.

### Build & Publish

Webpack will detect all `src/**/index.ts` and use them as entry.

You should move to `dist` after builds and run `npm publish --access public`.

### Roadmap

- [x] Export [SvgIcon](https://mui.com/components/icons/#svgicon) wrapped components
- [x] Publish Storybook docs
- [ ] Add all the design system icons
- [ ] Support all the variants(outlined, filled, two-tone)
- [ ] Export SVGs directly
- [ ] Automated visual test with the Figma project

## Support

*SangYeob Yu(syyu@lunit.io)*
