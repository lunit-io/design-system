// Main module for Foundation > Colors

import * as base from "./base";

type ColorKey = keyof typeof base;

const createCSSVariables = () => {
  const cssVars: { [name: string]: string } = {};
  for (let color in base) {
    if (base.hasOwnProperty(color)) {
      const baseColors = base[color as ColorKey];
      for (let key in baseColors) {
        if (baseColors.hasOwnProperty(key)) {
          const varName = `--${color}-${key}`;
          cssVars[varName] = baseColors[Number(key) as keyof typeof baseColors];
        }
      }
    }
  }
  return cssVars;
};

export const createColorCSSBaseline = () => {
  return {
    "*": {
      ...createCSSVariables(),
    },
  };
};

const paletteOptions = {
  // @todo define palette options
};

export default paletteOptions;
