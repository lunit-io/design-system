// Main module for Foundation > Colors

import { PaletteOptions, PaletteColor } from "@mui/material/styles";
import * as base from "./base";
import * as token from "./token";
import { ColorToken } from "./types";
import { ColorTokenValueBySurface } from "./token/types";

export type BaseColor = Record<keyof typeof base.blue, PaletteColor>;
export type GreyColor = Record<keyof typeof base.grey, PaletteColor>;

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    lunit_global?: {
      grey: GreyColor;
      blue: BaseColor;
      green: BaseColor;
      lunit_green: BaseColor;
      lunit_teal: BaseColor;
      magenta: BaseColor;
      orange: BaseColor;
      purple: BaseColor;
      red: BaseColor;
      yellow: BaseColor;
    };
    lunit_token?: ColorToken;
  }

  interface Palette {
    lunit_global: {
      grey: GreyColor;
      blue: BaseColor;
      green: BaseColor;
      lunit_green: BaseColor;
      lunit_teal: BaseColor;
      magenta: BaseColor;
      orange: BaseColor;
      purple: BaseColor;
      red: BaseColor;
      yellow: BaseColor;
    };
    lunit_token: ColorToken;
  }
}

type ColorKey = keyof typeof base;

const createCSSVariables = () => {
  const cssVars: { [name: string]: string } = {};
  for (let color in base) {
    const baseColors = base[color as ColorKey];
    for (let key in baseColors) {
      if (baseColors.hasOwnProperty(key)) {
        const varName = `--${color}_${key}`;
        cssVars[varName] = baseColors[Number(key) as keyof typeof baseColors];
      }
    }
  }
  return cssVars;
};

const createTokenColorVariables = (surface: keyof ColorTokenValueBySurface) => {
  const cssVars: { [name: string]: string } = {};

  for (let coreToken in token.tokenCoreColor) {
    if (token.tokenCoreColor.hasOwnProperty(coreToken)) {
      const varName = `--${coreToken}`;
      const tokenValue = token.tokenCoreColor[coreToken][surface];
      // 현재 tokenValue는 cssVariable과 rgba 값 2종류가 존재함. 이 종류에 따라서 var 사용 여부를 결정해주기 위해 if문을 추가하였으나,
      // 차후 피그마에서 json 파일을 넘겨준 것을 스크립트화하는 작업이 끝나면 if문 자체가 사라질 예정.
      if (tokenValue.charAt(0) === "-") {
        cssVars[varName] = `var(${tokenValue})`;
      } else {
        cssVars[varName] = `${tokenValue}`;
      }
    }
  }

  for (let componentGroup in token.tokenComponentColor) {
    if (token.tokenComponentColor.hasOwnProperty(componentGroup)) {
      const componentTokens = token.tokenComponentColor[componentGroup];

      let tokenName: keyof typeof componentTokens;
      for (tokenName in componentTokens) {
        if (componentTokens.hasOwnProperty(tokenName)) {
          const varName = `--${tokenName}`;
          const tokenValue = componentTokens[tokenName][surface];
          if (tokenValue.charAt(0) === "-") {
            cssVars[varName] = `var(${tokenValue})`;
          } else {
            cssVars[varName] = `${tokenValue}`;
          }
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
      ...createTokenColorVariables("dark1"),
    },
    ".light1": {
      ...createTokenColorVariables("light1"),
    },
    ".light2": {
      ...createTokenColorVariables("light2"),
    },
    ".dark1": {
      ...createTokenColorVariables("dark1"),
    },
    ".dark2": {
      ...createTokenColorVariables("dark2"),
    },
    ".dark3": {
      ...createTokenColorVariables("dark3"),
    },
    ".dark4": {
      ...createTokenColorVariables("dark4"),
    },
  };
};

// TODO: TextColors 삭제하고 관련된 설정 수정하기
// TODO: opacity 글로벌 팔레트에 추가 여부 확인해서 작업하기
const lunitColors: PaletteOptions["lunit_global"] =
  ((): PaletteOptions["lunit_global"] => {
    const ret: any = {};
    for (const colorKey in base) {
      if (base[`${colorKey}Text` as ColorKey]) {
        const baseColors = base[colorKey as ColorKey];
        const textColors = base[`${colorKey}Text` as ColorKey];
        ret[colorKey] = {};
        for (const key in baseColors) {
          if (baseColors.hasOwnProperty(key)) {
            const color = baseColors[Number(key) as keyof typeof baseColors];
            const textColor =
              textColors[Number(key) as keyof typeof textColors];
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
  primary: {
    main: base.lunit_teal[40], // core.text_primary.dark1
  },
  secondary: {
    main: base.grey[50], // core.text_light.dark1
  },
  error: {
    main: base.red[40], // core.text_error.dark1
  },
  warning: {
    main: base.orange[40], // core.text_warning.dark1
  },
  info: {
    main: base.blue[40], // core.text_info.dark1
  },
  success: {
    main: base.green[40], // core.text_success.dark1
  },
  grey: base.greyForMUI,
  lunit_global: lunitColors,
  lunit_token: {
    core: {
      bg_01: "var(--bg_01)",
      bg_02: "var(--bg_02)",
      bg_03: "var(--bg_03)",
      text_primary: "var(--text_primary)",
      text_normal: "var(--text_normal)",
      text_medium: "var(--text_medium)",
      text_light: "var(--text_light)",
      text_error: "var(--text_error)",
      text_success: "var(--text_success)",
      text_warning: "var(--text_warning)",
      text_info: "var(--text_info)",
      link_primary: "var(--link_primary)",
      link_hover: "var(--link_hover)",
      link_visited: "var(--link_visited)",
      icon_error_02: "var(--icon_error_02)",
      icon_success_02: "var(--icon_success_02)",
      icon_warning_02: "var(--icon_warning_02)",
      icon_info_02: "var(--icon_info_02)",
      hover: "var(--hover)",
      focused: "var(--focused)",
      selected: "var(--selected)",
      shadow_01: "var(--shadow_01)",
      shadow_02: "var(--shadow_02)",
      shadow_03: "var(--shadow_03)",
      shadow_04: "var(--shadow_04)",
    },
    component: {
      btn_primary_bg: "var(--btn_primary_bg)",
      btn_secondary_bg: "var(--btn_secondary_bg)",
      btn_error_bg: "var(--btn_error_bg)",
      btn_primary_border: "var(--btn_primary_border)",
      btn_secondary_border: "var(--btn_secondary_border)",
      btn_primary_text_1: "var(--btn_primary_text_1)",
      btn_primary_text_2: "var(--btn_primary_text_2)",
      btn_secondary_text: "var(--btn_secondary_text)",
      btn_error_text: "var(--btn_error_text)",
      btn_selected_primary_bg: "var(--btn_selected_primary_bg)",
      btn_selected_primary_text: "var(--btn_selected_primary_text)",
      btn_selected_secondary_bg: "var(--btn_selected_secondary_bg)",
      btn_selected_secondary_text: "var(--btn_selected_secondary_text)",
      selectcontrol_on: "var(--selectcontrol_on)",
      selectcontrol_off: "var(--selectcontrol_off)",
      selectcontrol_handler: "var(--selectcontrol_handler)",
      selectcontrol_handler_shadow: "var(--selectcontrol_handler_shadow)",
      textfield_bg: "var(--textfield_bg)",
      textfield_border_error: "var(--textfield_border_error)",
      dropdown_divider_border: "var(--dropdown_divider_border)",
      datatable_border_01: "var(--datatable_border_01)",
      datatable_border_02: "var(--datatable_border_02)",
      datatable_zebra: "var(--datatable_zebra)",
      scrollbars_bg: "var(--scrollbars_bg)",
      scrollbars_hover: "var(--scrollbars_hover)",
      scrollbars_pressed: "var(--scrollbars_pressed)",
      modal_overlay: "var(--modal_overlay)",
      tooltip_bg: "var(--tooltip_bg)",
      tooltip_text_normal: "var(--tooltip_text_normal)",
      tooltip_text_medium: "var(--tooltip_text_medium)",
      alert_error_bg: "var(--alert_error_bg)",
      alert_error_border: "var(--alert_error_border)",
      alert_success_bg: "var(--alert_success_bg)",
      alert_success_border: "var(--alert_success_border)",
      alert_info_bg: "var(--alert_info_bg)",
      alert_info_border: "var(--alert_info_border)",
      alert_warning_bg: "var(--alert_warning_bg)",
      alert_warning_border: "var(--alert_warning_border)",
      chip_primary_bg: "var(--chip_primary_bg)",
      chip_primary_text: "var(--chip_primary_text)",
      chip_secondary_bg: "var(--chip_secondary_bg)",
      chip_secondary_text: "var(--chip_secondary_text)",
      chip_error_bg: "var(--chip_error_bg)",
      chip_error_text: "var(--chip_error_text)",
      chip_warning_bg: "var(--chip_warning_bg)",
      chip_warning_text: "var(--chip_warning_text)",
      chip_success_bg: "var(--chip_success_bg)",
      chip_success_text: "var(--chip_success_text)",
    },
  },
};

export { base };

export default paletteOptions;
