// Main module for Foundation > Colors

import { PaletteOptions, PaletteColor } from "@mui/material/styles";
import * as base from "./base";

export type BaseColor = Record<keyof typeof base.blue, PaletteColor>;
export type GreyColor = Record<keyof typeof base.grey, PaletteColor>;

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    lunit: {
      grey: GreyColor;
      blue: BaseColor;
      green: BaseColor;
      lunitGreen: BaseColor;
      lunitTeal: BaseColor;
      magenta: BaseColor;
      orange: BaseColor;
      red: BaseColor;
      yellow: BaseColor;
    };
  }

  interface Palette {
    lunit: {
      grey: GreyColor;
      blue: BaseColor;
      green: BaseColor;
      lunitGreen: BaseColor;
      lunitTeal: BaseColor;
      magenta: BaseColor;
      orange: BaseColor;
      red: BaseColor;
      yellow: BaseColor;
    };
  }
}

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

export const createColorCssBaseline = () => {
  return {
    ":root": {
      ...createCSSVariables(),
    },
  };
};

const lunitColors: PaletteOptions["lunit"] = ((): PaletteOptions["lunit"] => {
  const ret: any = {};
  for (const colorKey in base) {
    if (
      Object.prototype.hasOwnProperty.call(base, colorKey) &&
      base[`${colorKey}Text` as ColorKey]
    ) {
      const baseColors = base[colorKey as ColorKey];
      const textColors = base[`${colorKey}Text` as ColorKey];
      ret[colorKey] = {};
      for (const key in baseColors) {
        if (Object.prototype.hasOwnProperty.call(baseColors, key)) {
          const color = baseColors[Number(key) as keyof typeof baseColors];
          const textColor = textColors[Number(key) as keyof typeof textColors];
          ret[colorKey][Number(key)] = {
            light: color,
            main: color,
            dark: color,
            contrastText: textColor,
          };
        }
      }
    }
  }
  return ret;
})();

const paletteOptions = {
  // @todo define palette options
  lunit: lunitColors,
};

console.log(paletteOptions);

export default paletteOptions;
