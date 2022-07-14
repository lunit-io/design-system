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

export const createColorCssBaseline = () => {
  return {
    ":root": {
      ...createCSSVariables(),
    },
  };
};

const paletteOptions = {
  // @todo define palette options
  "--background-light-0": "var(--grey-0)",
  "--background-light-10": "var(--grey-10)",
  "--background-dark-70": "var(--grey-70)",
  "--background-dark-80": "var(--grey-80)",
  "--background-dark-85": "var(--grey-85)",
  "--background-dark-90": "var(--grey-90)",

  "--text-normal-light-0": "var(--grey-95)",
  "--text-normal-light-10": "var(--grey-95)",
  "--text-normal-dark-70": "var(--grey-5)",
  "--text-normal-dark-80": "var(--grey-5)",
  "--text-normal-dark-85": "var(--grey-5)",
  "--text-normal-dark-90": "var(--grey-5)",

  "--text-medium-light-0": "var(--grey-60)",
  "--text-medium-light-10": "var(--grey-60)",
  "--text-medium-dark-70": "var(--grey-40)",
  "--text-medium-dark-80": "var(--grey-40)",
  "--text-medium-dark-85": "var(--grey-40)",
  "--text-medium-dark-90": "var(--grey-40)",

  "--text-light-light-0": "var(--grey-40)",
  "--text-light-light-10": "var(--grey-40)",
  "--text-light-dark-70": "var(--grey-50)",
  "--text-light-dark-80": "var(--grey-50)",
  "--text-light-dark-85": "var(--grey-50)",
  "--text-light-dark-90": "var(--grey-50)",

  "--text-disabled-light-0": "var(--grey-20)",
  "--text-disabled-light-10": "var(--grey-20)",
  "--text-disabled-dark-70": "var(--grey-05) * 20%",
  "--text-disabled-dark-80": "var(--grey-05) * 20%",
  "--text-disabled-dark-85": "var(--grey-05) * 20%",
  "--text-disabled-dark-90": "var(--grey-05) * 20%",

  "--text-error-light-0": "var(--red-40)",
  "--text-error-light-10": "var(--red-40)",
  "--text-error-dark-70": "var(--red-30)",
  "--text-error-dark-80": "var(--red-30)",
  "--text-error-dark-85": "var(--red-50)",
  "--text-error-dark-90": "var(--red-50)",

  "--text-link-light-0": "var(--blue-30)",
  "--text-link-light-10": "var(--blue-30)",
  "--text-link-dark-70": "var(--blue-20)",
  "--text-link-dark-80": "var(--blue-20)",
  "--text-link-dark-85": "var(--blue-20)",
  "--text-link-dark-90": "var(--blue-20)",

  "--textfield-01-light-0": "var(--grey-10)",
  "--textfield-01-light-10": "var(--grey-15)",
  "--textfield-01-dark-70": "var(--grey-75)",
  "--textfield-01-dark-80": "var(--grey-75)",
  "--textfield-01-dark-85": "var(--grey-75)",
  "--textfield-01-dark-90": "var(--grey-80)",

  "--textfield-hover-light-0": "var(--grey-50)",
  "--textfield-hover-light-10": "var(--grey-50)",
  "--textfield-hover-dark-70": "var(--grey-50)",
  "--textfield-hover-dark-80": "var(--grey-50)",
  "--textfield-hover-dark-85": "var(--grey-50)",
  "--textfield-hover-dark-90": "var(--grey-50)",

  "--textfield-error-light-0": "var(--red-40)",
  "--textfield-error-light-10": "var(--red-40)",
  "--textfield-error-dark-70": "var(--red-40)",
  "--textfield-error-dark-80": "var(--red-40)",
  "--textfield-error-dark-85": "var(--red-40)",
  "--textfield-error-dark-90": "var(--red-40)",

  "--textfield-div-light-0": "var(--grey-15)",
  "--textfield-div-light-10": "var(--grey-20)",
  "--textfield-div-dark-70": "var(--grey-60)",
  "--textfield-div-dark-80": "var(--grey-60)",
  "--textfield-div-dark-85": "var(--grey-70)",
  "--textfield-div-dark-90": "var(--grey-75)",

  "--button-primary-light-0": "var(--lunit-40)",
  "--button-primary-light-10": "var(--lunit-40)",
  "--button-primary-dark-70": "var(--lunit-40)",
  "--button-primary-dark-80": "var(--lunit-40)",
  "--button-primary-dark-85": "var(--lunit-40)",
  "--button-primary-dark-90": "var(--lunit-40)",

  "--button-primary-hover-light-0": "var(--lunit-50)",
  "--button-primary-hover-light-10": "var(--lunit-50)",
  "--button-primary-hover-dark-70": "var(--lunit-50)",
  "--button-primary-hover-dark-80": "var(--lunit-50)",
  "--button-primary-hover-dark-85": "var(--lunit-50)",
  "--button-primary-hover-dark-90": "var(--lunit-50)",

  "--button-primary-disabled-light-0": "var(--grey-95) * 5%",
  "--button-primary-disabled-light-10": "var(--grey-95) * 5%",
  "--button-primary-disabled-dark-70": "var(--grey-40) * 10%",
  "--button-primary-disabled-dark-80": "var(--grey-40) * 10%",
  "--button-primary-disabled-dark-85": "var(--grey-40) * 10%",
  "--button-primary-disabled-dark-90": "var(--grey-40) * 10%",
};

export default paletteOptions;
