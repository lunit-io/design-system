import paletteOptions from "../colors";
import { createCSSVarNames, createCSSVars } from "./utils";

export const shadows = {
  shadow_00: paletteOptions.token.core.shadow_color_00,
  shadow_01: `0px 4px 8px ${paletteOptions.token.core.shadow_color_01}`,
  shadow_02: `0px 3px 12px ${paletteOptions.token.core.shadow_color_02}`,
  shadow_03: `0px 12px 24px ${paletteOptions.token.core.shadow_color_03}`,
  shadow_04: `0px 12px 44px ${paletteOptions.token.core.shadow_color_04}`,
};

const shadowVars = createCSSVarNames(shadows);

export const elevations = {
  elevation_00: "none",
  elevation_01: `${shadowVars.shadow_01}, ${shadowVars.shadow_02}`,
  elevation_02: `${shadowVars.shadow_03}, ${shadowVars.shadow_04}`,
};

export const elevationOptions = {
  ...shadows,
  ...elevations,
};

export const createElevationCssBaseline = () => {
  return {
    // :root에 모든 theme이 정의되어 있지 않으므로 .base*에서 찾아야 함
    ".base00, .base10, .base70, .base80, .base85, .base90": {
      ...createCSSVars(shadows),
      ...createCSSVars(elevations),
      // `--elevation-shadow`가 정의되지 않아도 `box-shadow: var(--elevation-shadow)` 구문을 해석하려면 필요함
      "--elevation-shadow": "none",
    },
    // Default component styles
    ".MuiPaper-root": {
      "--elevation-shadow": elevationOptions.elevation_02,
    },
    ".MuiDialog-paper": {
      "--elevation-shadow": elevationOptions.elevation_02,
    },
    ".MuiPopover-paper": {
      "--elevation-shadow": elevationOptions.elevation_02,
    },
    // Date Range Picker, Select 등의 Menu element는 MuiMenu-paper에서 상속
    ".MuiMenu-paper": {
      "--elevation-shadow": elevationOptions.elevation_01,
    },
    ".MuiTooltip-tooltip": {
      "--elevation-shadow": elevationOptions.elevation_01,
    },
    ".MuiAlert-root": {
      "--elevation-shadow": elevationOptions.elevation_02,
    },

    // Alternative to Paper `elevation` prop
    ".elevation0, .elevation1, .elevation2": {
      boxShadow: "var(--elevation-shadow)",
    },
    ".elevation3, .elevation4, .elevation5, .elevation6, .elevation7, .elevation8, .elevation9, .elevation10, .elevation11, .elevation12, .elevation13, .elevation14, .elevation15, .elevation16, .elevation17, .elevation18, .elevation19, .elevation20, .elevation21, .elevation22, .elevation23, .elevation24":
      {
        boxShadow: "none",
      },
    ".elevation0": {
      "--elevation-shadow": elevationOptions.elevation_00,
    },
    ".elevation1": {
      "--elevation-shadow": elevationOptions.elevation_01,
    },
    ".elevation2": {
      "--elevation-shadow": elevationOptions.elevation_02,
    },
  };
};
