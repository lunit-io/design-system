// Main module for Foundation > Colors

import { PaletteOptions, PaletteColor } from "@mui/material/styles";
import * as base from "./base";
import * as token from "./token";

export type BaseColor = Record<keyof typeof base.blue, PaletteColor>;
export type GreyColor = Record<keyof typeof base.grey, PaletteColor>;

interface ColorToken {
  core: {
    bg_02: React.CSSProperties["color"];
    bg_03: React.CSSProperties["color"];
    text_primary: React.CSSProperties["color"];
    text_normal: React.CSSProperties["color"];
    text_medium: React.CSSProperties["color"];
    text_light: React.CSSProperties["color"];
    text_error: React.CSSProperties["color"];
    text_sucess: React.CSSProperties["color"];
    text_warning: React.CSSProperties["color"];
    text_info: React.CSSProperties["color"];
    link_primary: React.CSSProperties["color"];
    link_hover: React.CSSProperties["color"];
    link_visited: React.CSSProperties["color"];
    icon_primary: React.CSSProperties["color"];
    icon_normal: React.CSSProperties["color"];
    icon_medium: React.CSSProperties["color"];
    icon_light: React.CSSProperties["color"];
    icon_error_01: React.CSSProperties["color"];
    icon_sucess_01: React.CSSProperties["color"];
    icon_warning_01: React.CSSProperties["color"];
    icon_info_01: React.CSSProperties["color"];
    icon_error_02: React.CSSProperties["color"];
    icon_sucess_02: React.CSSProperties["color"];
    icon_warning_02: React.CSSProperties["color"];
    icon_info_02: React.CSSProperties["color"];
    hover: React.CSSProperties["color"];
    focused: React.CSSProperties["color"];
    shadow_01: React.CSSProperties["color"];
    shadow_02: React.CSSProperties["color"];
    shadow_03: React.CSSProperties["color"];
    shadow_04: React.CSSProperties["color"];
  };
  component: {
    btn_contained_primary_bg: React.CSSProperties["color"];
    btn_contained_primary_text: React.CSSProperties["color"];
    btn_contained_secondary_bg: React.CSSProperties["color"];
    btn_contained_secondary_text: React.CSSProperties["color"];
    btn_contained_error_bg: React.CSSProperties["color"];
    btn_contained_error_text: React.CSSProperties["color"];
    btn_outlined_primary_border: React.CSSProperties["color"];
    btn_outlined_primary_text: React.CSSProperties["color"];
    btn_ghost_primary_text: React.CSSProperties["color"];
    btn_ghost_secondary_text: React.CSSProperties["color"];
    btn_ghost_error_text: React.CSSProperties["color"];
    selectcontrol_on: React.CSSProperties["color"];
    selectcontrol_off: React.CSSProperties["color"];
    selectcontrol_handler: React.CSSProperties["color"];
    selectcontrol_handler_shadow: React.CSSProperties["color"];
    textfield_bg: React.CSSProperties["color"];
    textfield_border_error: React.CSSProperties["color"];
    dropdown_option_selected: React.CSSProperties["color"];
    dropdown_option_activatied: React.CSSProperties["color"];
    dropdown_divider_border: React.CSSProperties["color"];
    datatable_cell_selected: React.CSSProperties["color"];
    datatable_border_01: React.CSSProperties["color"];
    datatable_border_02: React.CSSProperties["color"];
    scrollbars_bg: React.CSSProperties["color"];
    scrollbars_hover: React.CSSProperties["color"];
    scrollbars_pressed: React.CSSProperties["color"];
    modal_overlay: React.CSSProperties["color"];
    tooltip_bg: React.CSSProperties["color"];
    tooltip_text_normal: React.CSSProperties["color"];
    tooltip_text_medium: React.CSSProperties["color"];
    alert_error_bg: React.CSSProperties["color"];
    alert_error_border: React.CSSProperties["color"];
    alert_success_bg: React.CSSProperties["color"];
    alert_success_border: React.CSSProperties["color"];
    alert_info_bg: React.CSSProperties["color"];
    alert_info_border: React.CSSProperties["color"];
    alert_warning_bg: React.CSSProperties["color"];
    alert_warning_border: React.CSSProperties["color"];
    chip_primary_bg: React.CSSProperties["color"];
    chip_primary_icon: React.CSSProperties["color"];
    chip_secondary_bg: React.CSSProperties["color"];
    chip_secondary_icon: React.CSSProperties["color"];
    chip_error_bg: React.CSSProperties["color"];
    chip_error_icon: React.CSSProperties["color"];
    chip_warning_bg: React.CSSProperties["color"];
    chip_warning_icon: React.CSSProperties["color"];
    chip_success_bg: React.CSSProperties["color"];
    chip_success_icon: React.CSSProperties["color"];
    chip_outlined_primary_border: React.CSSProperties["color"];
    chip_outlined_primary_text: React.CSSProperties["color"];
    chip_outlined_secondary_border: React.CSSProperties["color"];
    chip_outlined_secondary_text: React.CSSProperties["color"];
    chip_outlined_warning_border: React.CSSProperties["color"];
    chip_outlined_warning_text: React.CSSProperties["color"];
    chip_outlined_error_border: React.CSSProperties["color"];
    chip_outlined_error_text: React.CSSProperties["color"];
    chip_outlined_success_border: React.CSSProperties["color"];
    chip_outlined_success_text: React.CSSProperties["color"];
  };
}

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    lunit?: {
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
    token?: ColorToken;
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
    token: ColorToken;
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

const createTokenColorVariables = (surface: string) => {
  const cssVars: { [name: string]: string } = {};
  for (let coreToken in token.tokenCoreColor) {
    if (token.tokenCoreColor.hasOwnProperty(coreToken)) {
      const varName = `--${coreToken}`;
      const tokenValue =
        token.tokenCoreColor[coreToken as keyof typeof token.tokenCoreColor];
      cssVars[varName] = `var(${
        tokenValue[surface as keyof typeof tokenValue]
      })`;
    }
  }

  for (let componentGroup in token.tokenComponentColor) {
    if (token.tokenComponentColor.hasOwnProperty(componentGroup)) {
      const componentTokens =
        token.tokenComponentColor[
          componentGroup as keyof typeof token.tokenComponentColor
        ];
      for (let token in componentTokens) {
        if (componentTokens.hasOwnProperty(token)) {
          const varName = `--${token}`;
          const tokenValue =
            componentTokens[token as keyof typeof componentTokens];
          cssVars[varName] = `var(${
            tokenValue[surface as keyof typeof tokenValue]
          })`;
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
    ".base00 *": {
      ...createTokenColorVariables("base00"),
    },
    ".base10 *": {
      ...createTokenColorVariables("base10"),
    },
    ".base70 *": {
      ...createTokenColorVariables("base70"),
    },
    ".base80 *": {
      ...createTokenColorVariables("base80"),
    },
    ".base85 *": {
      ...createTokenColorVariables("base85"),
    },
    ".base90 *": {
      ...createTokenColorVariables("base90"),
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
  token: {
    core: {
      bg_02: "var(--bg_02)",
      bg_03: "var(--bg_03)",
      text_primary: "var(--text_primary)",
      text_normal: "var(--text_normal)",
      text_medium: "var(--text_medium)",
      text_light: "var(--text_light)",
      text_error: "var(--text_error)",
      text_sucess: "var(--text_sucess)",
      text_warning: "var(--text_warning)",
      text_info: "var(--text_info)",
      link_primary: "var(--link_primary)",
      link_hover: "var(--link_hover)",
      link_visited: "var(--link_visited)",
      icon_primary: "var(--icon_primary)",
      icon_normal: "var(--icon_normal)",
      icon_medium: "var(--icon_medium)",
      icon_light: "var(--icon_light)",
      icon_error_01: "var(--icon_error_01)",
      icon_sucess_01: "var(--icon_sucess_01)",
      icon_warning_01: "var(--icon_warning_01)",
      icon_info_01: "var(--icon_info_01)",
      icon_error_02: "var(--icon_error_02)",
      icon_sucess_02: "var(--icon_sucess_02)",
      icon_warning_02: "var(--icon_warning_02)",
      icon_info_02: "var(--icon_info_02)",
      hover: "var(--hover)",
      focused: "var(--focused)",
      shadow_01: "var(--shadow_01)",
      shadow_02: "var(--shadow_02)",
      shadow_03: "var(--shadow_03)",
      shadow_04: "var(--shadow_04)",
    },
    component: {
      btn_contained_primary_bg: "var(--btn_contained_primary_bg)",
      btn_contained_primary_text: "var(--btn_contained_primary_text)",
      btn_contained_secondary_bg: "var(--btn_contained_secondary_bg)",
      btn_contained_secondary_text: "var(--btn_contained_secondary_text)",
      btn_contained_error_bg: "var(--btn_contained_error_bg)",
      btn_contained_error_text: "var(--btn_contained_error_text)",
      btn_outlined_primary_border: "var(--btn_outlined_primary_border)",
      btn_outlined_primary_text: "var(--btn_outlined_primary_text)",
      btn_ghost_primary_text: "var(--btn_ghost_primary_text)",
      btn_ghost_secondary_text: "var(--btn_ghost_secondary_text)",
      btn_ghost_error_text: "var(--btn_ghost_error_text)",
      selectcontrol_on: "var(--selectcontrol_on)",
      selectcontrol_off: "var(--selectcontrol_off)",
      selectcontrol_handler: "var(--selectcontrol_handler)",
      selectcontrol_handler_shadow: "var(--selectcontrol_handler_shadow)",
      textfield_bg: "var(--textfield_bg)",
      textfield_border_error: "var(--textfield_border_error)",
      dropdown_option_selected: "var(--dropdown_option_selected)",
      dropdown_option_activatied: "var(--dropdown_option_activatied)",
      dropdown_divider_border: "var(--dropdown_divider_border)",
      datatable_cell_selected: "var(--datatable_cell_selected)",
      datatable_border_01: "var(--datatable_border_01)",
      datatable_border_02: "var(--datatable_border_02)",
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
      chip_primary_icon: "var(--chip_primary_icon)",
      chip_secondary_bg: "var(--chip_secondary_bg)",
      chip_secondary_icon: "var(--chip_secondary_icon)",
      chip_error_bg: "var(--chip_error_bg)",
      chip_error_icon: "var(--chip_error_icon)",
      chip_warning_bg: "var(--chip_warning_bg)",
      chip_warning_icon: "var(--chip_warning_icon)",
      chip_success_bg: "var(--chip_success_bg)",
      chip_success_icon: "var(--chip_success_icon)",
      chip_outlined_primary_border: "var(--chip_outlined_primary_border)",
      chip_outlined_primary_text: "var(--chip_outlined_primary_text)",
      chip_outlined_secondary_border: "var(--chip_outlined_secondary_border)",
      chip_outlined_secondary_text: "var(--chip_outlined_secondary_text)",
      chip_outlined_warning_border: "var(--chip_outlined_warning_border)",
      chip_outlined_warning_text: "var(--chip_outlined_warning_text)",
      chip_outlined_error_border: "var(--chip_outlined_error_border)",
      chip_outlined_error_text: "var(--chip_outlined_error_text)",
      chip_outlined_success_border: "var(--chip_outlined_success_border)",
      chip_outlined_success_text: "var(--chip_outlined_success_text)",
    },
  },
};

export default paletteOptions;
