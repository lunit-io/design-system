// Main module for Foundation > Colors

import { PaletteOptions, PaletteColor } from "@mui/material/styles";
import * as base from "./base";

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

export const createColorCssBaseline = () => {
  return {
    ":root": {
      ...createCSSVariables(),
    },
    ".base00 *": {
      "--bg_02": `var(${tokenCoreColor.bg_02.base00})`,
      "--bg_03": `var(${tokenCoreColor.bg_03.base00})`,
      "--text_primary": `var(${tokenCoreColor.text_primary.base00})`,
      "--text_normal": `var(${tokenCoreColor.text_normal.base00})`,
      "--text_medium": `var(${tokenCoreColor.text_medium.base00})`,
      "--text_light": `var(${tokenCoreColor.text_light.base00})`,
      "--text_error": `var(${tokenCoreColor.text_error.base00})`,
      "--text_sucess": `var(${tokenCoreColor.text_sucess.base00})`,
      "--text_warning": `var(${tokenCoreColor.text_warning.base00})`,
      "--text_info": `var(${tokenCoreColor.text_info.base00})`,
      "--link_primary": `var(${tokenCoreColor.link_primary.base00})`,
      "--link_hover": `var(${tokenCoreColor.link_hover.base00})`,
      "--link_visited": `var(${tokenCoreColor.link_visited.base00})`,
      "--icon_primary": `var(${tokenCoreColor.icon_primary.base00})`,
      "--icon_normal": `var(${tokenCoreColor.icon_normal.base00})`,
      "--icon_medium": `var(${tokenCoreColor.icon_medium.base00})`,
      "--icon_light": `var(${tokenCoreColor.icon_light.base00})`,
      "--icon_error_01": `var(${tokenCoreColor.icon_error_01.base00})`,
      "--icon_sucess_01": `var(${tokenCoreColor.icon_sucess_01.base00})`,
      "--icon_warning_01": `var(${tokenCoreColor.icon_warning_01.base00})`,
      "--icon_info_01": `var(${tokenCoreColor.icon_info_01.base00})`,
      "--icon_error_02": `var(${tokenCoreColor.icon_error_02.base00})`,
      "--icon_sucess_02": `var(${tokenCoreColor.icon_sucess_02.base00})`,
      "--icon_warning_02": `var(${tokenCoreColor.icon_warning_02.base00})`,
      "--icon_info_02": `var(${tokenCoreColor.icon_info_02.base00})`,
      "--hover": `var(${tokenCoreColor.hover.base00})`,
      "--focused": `var(${tokenCoreColor.focused.base00})`,
      "--shadow_01": `var(${tokenCoreColor.shadow_01.base00})`,
      "--shadow_02": `var(${tokenCoreColor.shadow_02.base00})`,
      "--shadow_03": `var(${tokenCoreColor.shadow_03.base00})`,
      "--shadow_04": `var(${tokenCoreColor.shadow_04.base00})`,

      "--btn_contained_primary_bg": `var(${tokenComponentColor.btn.btn_contained_primary_bg.base00})`,
      "--btn_contained_primary_text": `var(${tokenComponentColor.btn.btn_contained_primary_text.base00})`,
      "--btn_contained_secondary_bg": `var(${tokenComponentColor.btn.btn_contained_secondary_bg.base00})`,
      "--btn_contained_secondary_text": `var(${tokenComponentColor.btn.btn_contained_secondary_text.base00})`,
      "--btn_contained_error_bg": `var(${tokenComponentColor.btn.btn_contained_error_bg.base00})`,
      "--btn_contained_error_text": `var(${tokenComponentColor.btn.btn_contained_error_text.base00})`,
      "--btn_outlined_primary_border": `var(${tokenComponentColor.btn.btn_outlined_primary_border.base00})`,
      "--btn_outlined_primary_text": `var(${tokenComponentColor.btn.btn_outlined_primary_text.base00})`,
      "--btn_ghost_primary_text": `var(${tokenComponentColor.btn.btn_ghost_primary_text.base00})`,
      "--btn_ghost_secondary_text": `var(${tokenComponentColor.btn.btn_ghost_secondary_text.base00})`,
      "--btn_ghost_error_text": `var(${tokenComponentColor.btn.btn_ghost_error_text.base00})`,
      "--selectcontrol_on": `var(${tokenComponentColor.selectControl.selectcontrol_on.base00})`,
      "--selectcontrol_off": `var(${tokenComponentColor.selectControl.selectcontrol_off.base00})`,
      "--selectcontrol_handler": `var(${tokenComponentColor.selectControl.selectcontrol_handler.base00})`,
      "--selectcontrol_handler_shadow": `var(${tokenComponentColor.selectControl.selectcontrol_handler_shadow.base00})`,
      "--textfield_bg": `var(${tokenComponentColor.textFields.textfield_bg.base00})`,
      "--textfield_border_error": `var(${tokenComponentColor.textFields.textfield_border_error.base00})`,
      "--dropdown_option_selected": `var(${tokenComponentColor.dropdown.dropdown_option_selected.base00})`,
      "--dropdown_option_activatied": `var(${tokenComponentColor.dropdown.dropdown_option_activatied.base00})`,
      "--dropdown_divider_border": `var(${tokenComponentColor.dropdown.dropdown_divider_border.base00})`,
      "--datatable_cell_selected": `var(${tokenComponentColor.dataTable.datatable_cell_selected.base00})`,
      "--datatable_border_01": `var(${tokenComponentColor.dataTable.datatable_border_01.base00})`,
      "--datatable_border_02": `var(${tokenComponentColor.dataTable.datatable_border_02.base00})`,
      "--scrollbars_bg": `var(${tokenComponentColor.scrollbars.scrollbars_bg.base00})`,
      "--scrollbars_hover": `var(${tokenComponentColor.scrollbars.scrollbars_hover.base00})`,
      "--scrollbars_pressed": `var(${tokenComponentColor.scrollbars.scrollbars_pressed.base00})`,
      "--modal_overlay": `var(${tokenComponentColor.modal.modal_overlay.base00})`,
      "--tooltip_bg": `var(${tokenComponentColor.tooltip.tooltip_bg.base00})`,
      "--tooltip_text_normal": `var(${tokenComponentColor.tooltip.tooltip_text_normal.base00})`,
      "--tooltip_text_medium": `var(${tokenComponentColor.tooltip.tooltip_text_medium.base00})`,
      "--alert_error_bg": `var(${tokenComponentColor.alert.alert_error_bg.base00})`,
      "--alert_error_border": `var(${tokenComponentColor.alert.alert_info_border.base00})`,
      "--alert_success_bg": `var(${tokenComponentColor.alert.alert_success_bg.base00})`,
      "--alert_success_border": `var(${tokenComponentColor.alert.alert_success_border.base00})`,
      "--alert_info_bg": `var(${tokenComponentColor.alert.alert_info_bg.base00})`,
      "--alert_info_border": `var(${tokenComponentColor.alert.alert_info_border.base00})`,
      "--alert_warning_bg": `var(${tokenComponentColor.alert.alert_warning_bg.base00})`,
      "--alert_warning_border": `var(${tokenComponentColor.alert.alert_warning_border.base00})`,
      "--chip_primary_bg": `var(${tokenComponentColor.chip.chip_primary_bg.base00})`,
      "--chip_primary_icon": `var(${tokenComponentColor.chip.chip_primary_icon.base00})`,
      "--chip_secondary_bg": `var(${tokenComponentColor.chip.chip_secondary_bg.base00})`,
      "--chip_secondary_icon": `var(${tokenComponentColor.chip.chip_secondary_icon.base00})`,
      "--chip_error_bg": `var(${tokenComponentColor.chip.chip_error_bg.base00})`,
      "--chip_error_icon": `var(${tokenComponentColor.chip.chip_error_icon.base00})`,
      "--chip_warning_bg": `var(${tokenComponentColor.chip.chip_warning_bg.base00})`,
      "--chip_warning_icon": `var(${tokenComponentColor.chip.chip_warning_icon.base00})`,
      "--chip_success_bg": `var(${tokenComponentColor.chip.chip_success_bg.base00})`,
      "--chip_success_icon": `var(${tokenComponentColor.chip.chip_success_icon.base00})`,
      "--chip_outlined_primary_border": `var(${tokenComponentColor.chip.chip_outlined_primary_border.base00})`,
      "--chip_outlined_primary_text": `var(${tokenComponentColor.chip.chip_outlined_primary_text.base00})`,
      "--chip_outlined_secondary_border": `var(${tokenComponentColor.chip.chip_outlined_secondary_border.base00})`,
      "--chip_outlined_secondary_text": `var(${tokenComponentColor.chip.chip_outlined_secondary_text.base00})`,
      "--chip_outlined_warning_border": `var(${tokenComponentColor.chip.chip_outlined_warning_border.base00})`,
      "--chip_outlined_warning_text": `var(${tokenComponentColor.chip.chip_outlined_warning_text.base00})`,
      "--chip_outlined_error_border": `var(${tokenComponentColor.chip.chip_outlined_error_border.base00})`,
      "--chip_outlined_error_text": `var(${tokenComponentColor.chip.chip_outlined_error_text.base00})`,
      "--chip_outlined_success_border": `var(${tokenComponentColor.chip.chip_outlined_success_border.base00})`,
      "--chip_outlined_success_text": `var(${tokenComponentColor.chip.chip_outlined_success_text.base00})`,
    },
    ".base80 *": {
      "--bg_02": `var(${tokenCoreColor.bg_02.base80})`,
      "--bg_03": `var(${tokenCoreColor.bg_03.base80})`,
      "--text_primary": `var(${tokenCoreColor.text_primary.base80})`,
      "--text_normal": `var(${tokenCoreColor.text_normal.base80})`,
      "--text_medium": `var(${tokenCoreColor.text_medium.base80})`,
      "--text_light": `var(${tokenCoreColor.text_light.base80})`,
      "--text_error": `var(${tokenCoreColor.text_error.base80})`,
      "--text_sucess": `var(${tokenCoreColor.text_sucess.base80})`,
      "--text_warning": `var(${tokenCoreColor.text_warning.base80})`,
      "--text_info": `var(${tokenCoreColor.text_info.base80})`,
      "--link_primary": `var(${tokenCoreColor.link_primary.base80})`,
      "--link_hover": `var(${tokenCoreColor.link_hover.base80})`,
      "--link_visited": `var(${tokenCoreColor.link_visited.base80})`,
      "--icon_primary": `var(${tokenCoreColor.icon_primary.base80})`,
      "--icon_normal": `var(${tokenCoreColor.icon_normal.base80})`,
      "--icon_medium": `var(${tokenCoreColor.icon_medium.base80})`,
      "--icon_light": `var(${tokenCoreColor.icon_light.base80})`,
      "--icon_error_01": `var(${tokenCoreColor.icon_error_01.base80})`,
      "--icon_sucess_01": `var(${tokenCoreColor.icon_sucess_01.base80})`,
      "--icon_warning_01": `var(${tokenCoreColor.icon_warning_01.base80})`,
      "--icon_info_01": `var(${tokenCoreColor.icon_info_01.base80})`,
      "--icon_error_02": `var(${tokenCoreColor.icon_error_02.base80})`,
      "--icon_sucess_02": `var(${tokenCoreColor.icon_sucess_02.base80})`,
      "--icon_warning_02": `var(${tokenCoreColor.icon_warning_02.base80})`,
      "--icon_info_02": `var(${tokenCoreColor.icon_info_02.base80})`,
      "--hover": `var(${tokenCoreColor.hover.base80})`,
      "--focused": `var(${tokenCoreColor.focused.base80})`,
      "--shadow_01": `var(${tokenCoreColor.shadow_01.base80})`,
      "--shadow_02": `var(${tokenCoreColor.shadow_02.base80})`,
      "--shadow_03": `var(${tokenCoreColor.shadow_03.base80})`,
      "--shadow_04": `var(${tokenCoreColor.shadow_04.base80})`,

      "--btn_contained_primary_bg": `var(${tokenComponentColor.btn.btn_contained_primary_bg.base80})`,
      "--btn_contained_primary_text": `var(${tokenComponentColor.btn.btn_contained_primary_text.base80})`,
      "--btn_contained_secondary_bg": `var(${tokenComponentColor.btn.btn_contained_secondary_bg.base80})`,
      "--btn_contained_secondary_text": `var(${tokenComponentColor.btn.btn_contained_secondary_text.base80})`,
      "--btn_contained_error_bg": `var(${tokenComponentColor.btn.btn_contained_error_bg.base80})`,
      "--btn_contained_error_text": `var(${tokenComponentColor.btn.btn_contained_error_text.base80})`,
      "--btn_outlined_primary_border": `var(${tokenComponentColor.btn.btn_outlined_primary_border.base80})`,
      "--btn_outlined_primary_text": `var(${tokenComponentColor.btn.btn_outlined_primary_text.base80})`,
      "--btn_ghost_primary_text": `var(${tokenComponentColor.btn.btn_ghost_primary_text.base80})`,
      "--btn_ghost_secondary_text": `var(${tokenComponentColor.btn.btn_ghost_secondary_text.base80})`,
      "--btn_ghost_error_text": `var(${tokenComponentColor.btn.btn_ghost_error_text.base80})`,
      "--selectcontrol_on": `var(${tokenComponentColor.selectControl.selectcontrol_on.base80})`,
      "--selectcontrol_off": `var(${tokenComponentColor.selectControl.selectcontrol_off.base80})`,
      "--selectcontrol_handler": `var(${tokenComponentColor.selectControl.selectcontrol_handler.base80})`,
      "--selectcontrol_handler_shadow": `var(${tokenComponentColor.selectControl.selectcontrol_handler_shadow.base80})`,
      "--textfield_bg": `var(${tokenComponentColor.textFields.textfield_bg.base80})`,
      "--textfield_border_error": `var(${tokenComponentColor.textFields.textfield_border_error.base80})`,
      "--dropdown_option_selected": `var(${tokenComponentColor.dropdown.dropdown_option_selected.base80})`,
      "--dropdown_option_activatied": `var(${tokenComponentColor.dropdown.dropdown_option_activatied.base80})`,
      "--dropdown_divider_border": `var(${tokenComponentColor.dropdown.dropdown_divider_border.base80})`,
      "--datatable_cell_selected": `var(${tokenComponentColor.dataTable.datatable_cell_selected.base80})`,
      "--datatable_border_01": `var(${tokenComponentColor.dataTable.datatable_border_01.base80})`,
      "--datatable_border_02": `var(${tokenComponentColor.dataTable.datatable_border_02.base80})`,
      "--scrollbars_bg": `var(${tokenComponentColor.scrollbars.scrollbars_bg.base80})`,
      "--scrollbars_hover": `var(${tokenComponentColor.scrollbars.scrollbars_hover.base80})`,
      "--scrollbars_pressed": `var(${tokenComponentColor.scrollbars.scrollbars_pressed.base80})`,
      "--modal_overlay": `var(${tokenComponentColor.modal.modal_overlay.base80})`,
      "--tooltip_bg": `var(${tokenComponentColor.tooltip.tooltip_bg.base80})`,
      "--tooltip_text_normal": `var(${tokenComponentColor.tooltip.tooltip_text_normal.base80})`,
      "--tooltip_text_medium": `var(${tokenComponentColor.tooltip.tooltip_text_medium.base80})`,
      "--alert_error_bg": `var(${tokenComponentColor.alert.alert_error_bg.base80})`,
      "--alert_error_border": `var(${tokenComponentColor.alert.alert_info_border.base80})`,
      "--alert_success_bg": `var(${tokenComponentColor.alert.alert_success_bg.base80})`,
      "--alert_success_border": `var(${tokenComponentColor.alert.alert_success_border.base80})`,
      "--alert_info_bg": `var(${tokenComponentColor.alert.alert_info_bg.base80})`,
      "--alert_info_border": `var(${tokenComponentColor.alert.alert_info_border.base80})`,
      "--alert_warning_bg": `var(${tokenComponentColor.alert.alert_warning_bg.base80})`,
      "--alert_warning_border": `var(${tokenComponentColor.alert.alert_warning_border.base80})`,
      "--chip_primary_bg": `var(${tokenComponentColor.chip.chip_primary_bg.base80})`,
      "--chip_primary_icon": `var(${tokenComponentColor.chip.chip_primary_icon.base80})`,
      "--chip_secondary_bg": `var(${tokenComponentColor.chip.chip_secondary_bg.base80})`,
      "--chip_secondary_icon": `var(${tokenComponentColor.chip.chip_secondary_icon.base80})`,
      "--chip_error_bg": `var(${tokenComponentColor.chip.chip_error_bg.base80})`,
      "--chip_error_icon": `var(${tokenComponentColor.chip.chip_error_icon.base80})`,
      "--chip_warning_bg": `var(${tokenComponentColor.chip.chip_warning_bg.base80})`,
      "--chip_warning_icon": `var(${tokenComponentColor.chip.chip_warning_icon.base80})`,
      "--chip_success_bg": `var(${tokenComponentColor.chip.chip_success_bg.base80})`,
      "--chip_success_icon": `var(${tokenComponentColor.chip.chip_success_icon.base80})`,
      "--chip_outlined_primary_border": `var(${tokenComponentColor.chip.chip_outlined_primary_border.base80})`,
      "--chip_outlined_primary_text": `var(${tokenComponentColor.chip.chip_outlined_primary_text.base80})`,
      "--chip_outlined_secondary_border": `var(${tokenComponentColor.chip.chip_outlined_secondary_border.base80})`,
      "--chip_outlined_secondary_text": `var(${tokenComponentColor.chip.chip_outlined_secondary_text.base80})`,
      "--chip_outlined_warning_border": `var(${tokenComponentColor.chip.chip_outlined_warning_border.base80})`,
      "--chip_outlined_warning_text": `var(${tokenComponentColor.chip.chip_outlined_warning_text.base80})`,
      "--chip_outlined_error_border": `var(${tokenComponentColor.chip.chip_outlined_error_border.base80})`,
      "--chip_outlined_error_text": `var(${tokenComponentColor.chip.chip_outlined_error_text.base80})`,
      "--chip_outlined_success_border": `var(${tokenComponentColor.chip.chip_outlined_success_border.base80})`,
      "--chip_outlined_success_text": `var(${tokenComponentColor.chip.chip_outlined_success_text.base80})`,
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

const tokenCoreColor = {
  bg_02: {
    base00: "--grey-0",
    base10: "--grey-0",
    base70: "--grey-70",
    base80: "--grey-70",
    base85: "--grey-70",
    base90: "--grey-70",
  },
  bg_03: {
    base00: "--grey-0",
    base10: "--grey-0",
    base70: "--grey-85",
    base80: "--grey-85",
    base85: "--grey-85",
    base90: "--grey-85",
  },
  text_primary: {
    base00: "--lunitTeal-50",
    base10: "--lunitTeal-50",
    base70: "--lunitTeal-40",
    base80: "--lunitTeal-40",
    base85: "--lunitTeal-40",
    base90: "--lunitTeal-40",
  },
  text_normal: {
    base00: "--grey-95",
    base10: "--grey-95",
    base70: "--grey-5",
    base80: "--grey-5",
    base85: "--grey-5",
    base90: "--grey-5",
  },
  text_medium: {
    base00: "--grey-60",
    base10: "--grey-60",
    base70: "--grey-30",
    base80: "--grey-40",
    base85: "--grey-40",
    base90: "--grey-40",
  },
  text_light: {
    base00: "--grey-40",
    base10: "--grey-40",
    base70: "--grey-40",
    base80: "--grey-50",
    base85: "--grey-50",
    base90: "--grey-50",
  },
  text_error: {
    base00: "--red-40",
    base10: "--red-40",
    base70: "--red-30",
    base80: "--red-30",
    base85: "--red-40",
    base90: "--red-40",
  },
  text_sucess: {
    base00: "--green-40",
    base10: "--green-40",
    base70: "--green-30",
    base80: "--green-30",
    base85: "--green-40",
    base90: "--green-40",
  },
  text_warning: {
    base00: "--orange-40",
    base10: "--orange-40",
    base70: "--orange-30",
    base80: "--orange-30",
    base85: "--orange-40",
    base90: "--orange-40",
  },
  text_info: {
    base00: "--blue-40",
    base10: "--blue-40",
    base70: "--blue-30",
    base80: "--blue-30",
    base85: "--blue-40",
    base90: "--blue-40",
  },
  link_primary: {
    base00: "--blue-40",
    base10: "--blue-40",
    base70: "--blue-30",
    base80: "--blue-30",
    base85: "--blue-40",
    base90: "--blue-40",
  },
  link_hover: {
    base00: "--blue-50",
    base10: "--blue-50",
    base70: "--blue-40",
    base80: "--blue-40",
    base85: "--blue-50",
    base90: "--blue-50",
  },
  link_visited: {
    base00: "--purple-50",
    base10: "--purple-50",
    base70: "--purple-40",
    base80: "--purple-40",
    base85: "--purple-50",
    base90: "--purple-50",
  },
  icon_primary: {
    base00: "--lunitTeal-50",
    base10: "--lunitTeal-50",
    base70: "--lunitTeal-40",
    base80: "--lunitTeal-40",
    base85: "--lunitTeal-40",
    base90: "--lunitTeal-40",
  },
  icon_normal: {
    base00: "--grey-95",
    base10: "--grey-95",
    base70: "--grey-5",
    base80: "--grey-5",
    base85: "--grey-5",
    base90: "--grey-5",
  },
  icon_medium: {
    base00: "--grey-60",
    base10: "--grey-60",
    base70: "--grey-40",
    base80: "--grey-40",
    base85: "--grey-40",
    base90: "--grey-40",
  },
  icon_light: {
    base00: "--grey-40",
    base10: "--grey-40",
    base70: "--grey-50",
    base80: "--grey-50",
    base85: "--grey-50",
    base90: "--grey-50",
  },
  icon_error_01: {
    base00: "--red-40",
    base10: "--red-40",
    base70: "--red-30",
    base80: "--red-30",
    base85: "--red-40",
    base90: "--red-40",
  },
  icon_sucess_01: {
    base00: "--green-40",
    base10: "--green-40",
    base70: "--green-30",
    base80: "--green-30",
    base85: "--green-40",
    base90: "--green-40",
  },
  icon_warning_01: {
    base00: "--orange-40",
    base10: "--orange-40",
    base70: "--orange-30",
    base80: "--orange-30",
    base85: "--orange-40",
    base90: "--orange-40",
  },
  icon_info_01: {
    base00: "--blue-40",
    base10: "--blue-40",
    base70: "--blue-30",
    base80: "--blue-30",
    base85: "--blue-40",
    base90: "--blue-40",
  },
  icon_error_02: {
    base00: "--red-40",
    base10: "--red-40",
    base70: "--red-30",
    base80: "--red-30",
    base85: "--red-30",
    base90: "--red-30",
  },
  icon_sucess_02: {
    base00: "--green-40",
    base10: "--green-40",
    base70: "--green-30",
    base80: "--green-30",
    base85: "--green-30",
    base90: "--green-30",
  },
  icon_warning_02: {
    base00: "--orange-40",
    base10: "--orange-40",
    base70: "--orange-30",
    base80: "--orange-30",
    base85: "--orange-30",
    base90: "--orange-30",
  },
  icon_info_02: {
    base00: "--blue-40",
    base10: "--blue-40",
    base70: "--blue-30",
    base80: "--blue-30",
    base85: "--blue-30",
    base90: "--blue-30",
  },
  hover: {
    // TODO: opcity 관련 값은 다음에 정리
    base00: "--grey-80",
    base10: "--grey-80",
    base70: "--grey-80",
    base80: "--grey-80",
    base85: "--grey-80",
    base90: "--grey-80",
  },
  focused: {
    base00: "--lunitTeal-40",
    base10: "--lunitTeal-40",
    base70: "--lunitTeal-40",
    base80: "--lunitTeal-40",
    base85: "--lunitTeal-40",
    base90: "--lunitTeal-40",
  },
  shadow_01: {
    base00: "--grey-80",
    base10: "--grey-80",
    base70: "--grey-80",
    base80: "--grey-80",
    base85: "--grey-80",
    base90: "--grey-80",
  },
  shadow_02: {
    base00: "--grey-80",
    base10: "--grey-80",
    base70: "--grey-80",
    base80: "--grey-80",
    base85: "--grey-80",
    base90: "--grey-80",
  },
  shadow_03: {
    base00: "--grey-80",
    base10: "--grey-80",
    base70: "--grey-80",
    base80: "--grey-80",
    base85: "--grey-80",
    base90: "--grey-80",
  },
  shadow_04: {
    base00: "--grey-80",
    base10: "--grey-80",
    base70: "--grey-80",
    base80: "--grey-80",
    base85: "--grey-80",
    base90: "--grey-80",
  },
};
const tokenComponentColor = {
  btn: {
    btn_contained_primary_bg: {
      base00: "--lunitTeal-40",
      base10: "--lunitTeal-40",
      base70: "--lunitTeal-40",
      base80: "--lunitTeal-40",
      base85: "--lunitTeal-40",
      base90: "--lunitTeal-40",
    },
    btn_contained_primary_text: {
      base00: "--grey-95",
      base10: "--grey-95",
      base70: "--grey-95",
      base80: "--grey-95",
      base85: "--grey-95",
      base90: "--grey-95",
    },
    btn_contained_secondary_bg: {
      base00: "--grey-60",
      base10: "--grey-60",
      base70: "--grey-60",
      base80: "--grey-60",
      base85: "--grey-60",
      base90: "--grey-60",
    },
    btn_contained_secondary_text: {
      base00: "--grey-95",
      base10: "--grey-95",
      base70: "--grey-5",
      base80: "--grey-5",
      base85: "--grey-5",
      base90: "--grey-5",
    },
    btn_contained_error_bg: {
      base00: "--red-40",
      base10: "--red-40",
      base70: "--red-40",
      base80: "--red-40",
      base85: "--red-40",
      base90: "--red-40",
    },
    btn_contained_error_text: {
      base00: "--grey-95",
      base10: "--grey-95",
      base70: "--grey-95",
      base80: "--grey-95",
      base85: "--grey-95",
      base90: "--grey-95",
    },
    btn_outlined_primary_border: {
      base00: "--lunitTeal-50",
      base10: "--lunitTeal-50",
      base70: "--lunitTeal-40",
      base80: "--lunitTeal-40",
      base85: "--lunitTeal-40",
      base90: "--lunitTeal-40",
    },
    btn_outlined_primary_text: {
      base00: "--lunitTeal-50",
      base10: "--lunitTeal-50",
      base70: "--lunitTeal-40",
      base80: "--lunitTeal-40",
      base85: "--lunitTeal-40",
      base90: "--lunitTeal-40",
    },
    btn_ghost_primary_text: {
      base00: "--lunitTeal-50",
      base10: "--lunitTeal-50",
      base70: "--lunitTeal-40",
      base80: "--lunitTeal-40",
      base85: "--lunitTeal-40",
      base90: "--lunitTeal-40",
    },
    btn_ghost_secondary_text: {
      base00: "--grey-60",
      base10: "--grey-60",
      base70: "--grey-5",
      base80: "--grey-5",
      base85: "--grey-5",
      base90: "--grey-5",
    },
    btn_ghost_error_text: {
      base00: "--red-40",
      base10: "--red-40",
      base70: "--red-40",
      base80: "--red-40",
      base85: "--red-40",
      base90: "--red-40",
    },
  },
  selectControl: {
    selectcontrol_on: {
      base00: "--lunitTeal-40",
      base10: "--lunitTeal-40",
      base70: "--lunitTeal-40",
      base80: "--lunitTeal-40",
      base85: "--lunitTeal-40",
      base90: "--lunitTeal-40",
    },
    selectcontrol_off: {
      base00: "--grey-40",
      base10: "--grey-40",
      base70: "--grey-40",
      base80: "--grey-40",
      base85: "--grey-40",
      base90: "--grey-40",
    },
    selectcontrol_handler: {
      base00: "--grey-0",
      base10: "--grey-0",
      base70: "--grey-0",
      base80: "--grey-0",
      base85: "--grey-0",
      base90: "--grey-0",
    },
    selectcontrol_handler_shadow: {
      //TODO: opacity 확인
      base00: "--grey-100 5%",
      base10: "--grey-100 5%",
      base70: "--grey-100 5%",
      base80: "--grey-100 5%",
      base85: "--grey-100 5%",
      base90: "--grey-100 5%",
    },
  },
  textFields: {
    textfield_bg: {
      base00: "--grey-10",
      base10: "--grey-00",
      base70: "--grey-75",
      base80: "--grey-70",
      base85: "--grey-75",
      base90: "--grey-80",
    },
    textfield_border_error: {
      base00: "--red-40",
      base10: "--red-40",
      base70: "--red-40",
      base80: "--red-40",
      base85: "--red-40",
      base90: "--red-40",
    },
  },
  dropdown: {
    dropdown_option_selected: {
      base00: "--lunitTeal-10",
      base10: "--lunitTeal-10",
      base70: "--lunitTeal-80",
      base80: "--lunitTeal-80",
      base85: "--lunitTeal-80",
      base90: "--lunitTeal-80",
    },
    dropdown_option_activatied: {
      base00: "--lunitTeal-10",
      base10: "--lunitTeal-10",
      base70: "--lunitTeal-80",
      base80: "--lunitTeal-80",
      base85: "--lunitTeal-80",
      base90: "--lunitTeal-80",
    },
    dropdown_divider_border: {
      base00: "--grey-15",
      base10: "--grey-15",
      base70: "--grey-60",
      base80: "--grey-60",
      base85: "--grey-60",
      base90: "--grey-60",
    },
  },
  dataTable: {
    datatable_cell_selected: {
      base00: "--lunitTeal-10",
      base10: "--lunitTeal-10",
      base70: "--lunitTeal-80",
      base80: "--lunitTeal-80",
      base85: "--lunitTeal-80",
      base90: "--lunitTeal-80",
    },
    datatable_border_01: {
      base00: "--grey-20",
      base10: "--grey-30",
      base70: "--grey-40",
      base80: "--grey-50",
      base85: "--grey-50",
      base90: "--grey-50",
    },
    datatable_border_02: {
      base00: "--grey-10",
      base10: "--grey-15",
      base70: "--grey-60",
      base80: "--grey-75",
      base85: "--grey-75",
      base90: "--grey-80",
    },
  },
  scrollbars: {
    scrollbars_bg: {
      base00: "--grey-20",
      base10: "--grey-20",
      base70: "--grey-50",
      base80: "--grey-50",
      base85: "--grey-60",
      base90: "--grey-60",
    },
    scrollbars_hover: {
      base00: "--grey-30",
      base10: "--grey-30",
      base70: "--grey-40",
      base80: "--grey-40",
      base85: "--grey-50",
      base90: "--grey-50",
    },
    scrollbars_pressed: {
      base00: "--grey-50",
      base10: "--grey-50",
      base70: "--grey-20",
      base80: "--grey-20",
      base85: "--grey-30",
      base90: "--grey-30",
    },
  },
  modal: {
    modal_overlay: {
      base00: "--op_overlay",
      base10: "--op_overlay",
      base70: "--op_overlay",
      base80: "--op_overlay",
      base85: "--op_overlay",
      base90: "--op_overlay",
    },
  },
  tooltip: {
    tooltip_bg: {
      base00: "--grey-70",
      base10: "--grey-70",
      base70: "--grey-70",
      base80: "--grey-70",
      base85: "--grey-70",
      base90: "--grey-70",
    },
    tooltip_text_normal: {
      base00: "--grey-5",
      base10: "--grey-5",
      base70: "--grey-5",
      base80: "--grey-5",
      base85: "--grey-5",
      base90: "--grey-5",
    },
    tooltip_text_medium: {
      base00: "--grey-40",
      base10: "--grey-40",
      base70: "--grey-40",
      base80: "--grey-40",
      base85: "--grey-40",
      base90: "--grey-40",
    },
  },
  alert: {
    alert_error_bg: {
      base00: "--red-40 16%",
      base10: "--red-40 16%",
      base70: "--red-40 16%",
      base80: "--red-40 16%",
      base85: "--red-40 16%",
      base90: "--red-40 16%",
    },
    alert_error_border: {
      base00: "--red-40",
      base10: "--red-40",
      base70: "--red-30",
      base80: "--red-30",
      base85: "--red-30",
      base90: "--red-30",
    },
    alert_success_bg: {
      base00: "--green-40 16%",
      base10: "--green-40 16%",
      base70: "--green-40 16%",
      base80: "--green-40 16%",
      base85: "--green-40 16%",
      base90: "--green-40 16%",
    },
    alert_success_border: {
      base00: "--green-40",
      base10: "--green-40",
      base70: "--green-30",
      base80: "--green-30",
      base85: "--green-30",
      base90: "--green-30",
    },
    alert_info_bg: {
      base00: "--blue-40 16%",
      base10: "--blue-40 16%",
      base70: "--blue-40 16%",
      base80: "--blue-40 16%",
      base85: "--blue-40 16%",
      base90: "--blue-40 16%",
    },
    alert_info_border: {
      base00: "--blue-40",
      base10: "--blue-40",
      base70: "--blue-30",
      base80: "--blue-30",
      base85: "--blue-30",
      base90: "--blue-30",
    },
    alert_warning_bg: {
      base00: "--orange-40 16%",
      base10: "--orange-40 16%",
      base70: "--orange-40 16%",
      base80: "--orange-40 16%",
      base85: "--orange-40 16%",
      base90: "--orange-40 16%",
    },
    alert_warning_border: {
      base00: "--orange-40",
      base10: "--orange-40",
      base70: "--orange-30",
      base80: "--orange-30",
      base85: "--orange-30",
      base90: "--orange-30",
    },
  },
  chip: {
    chip_primary_bg: {
      base00: "--lunitTeal-20",
      base10: "--lunitTeal-20",
      base70: "--lunitTeal-60",
      base80: "--lunitTeal-60",
      base85: "--lunitTeal-60",
      base90: "--lunitTeal-60",
    },
    chip_primary_icon: {
      base00: "--lunitTeal-50",
      base10: "--lunitTeal-50",
      base70: "--lunitTeal-50",
      base80: "--lunitTeal-50",
      base85: "--lunitTeal-50",
      base90: "--lunitTeal-50",
    },
    chip_secondary_bg: {
      base00: "--grey-60",
      base10: "--grey-60",
      base70: "--grey-60",
      base80: "--grey-60",
      base85: "--grey-60",
      base90: "--grey-60",
    },
    chip_secondary_icon: {
      base00: "--grey-40",
      base10: "--grey-40",
      base70: "--grey-40",
      base80: "--grey-40",
      base85: "--grey-40",
      base90: "--grey-40",
    },
    chip_error_bg: {
      base00: "--red-20",
      base10: "--red-20",
      base70: "--red-60",
      base80: "--red-60",
      base85: "--red-60",
      base90: "--red-60",
    },
    chip_error_icon: {
      base00: "--red-40",
      base10: "--red-40",
      base70: "--red-40",
      base80: "--red-40",
      base85: "--red-40",
      base90: "--red-40",
    },
    chip_warning_bg: {
      base00: "--orange-20",
      base10: "--orange-20",
      base70: "--orange-60",
      base80: "--orange-60",
      base85: "--orange-60",
      base90: "--orange-60",
    },
    chip_warning_icon: {
      base00: "--orange-40",
      base10: "--orange-40",
      base70: "--orange-30",
      base80: "--orange-30",
      base85: "--orange-30",
      base90: "--orange-30",
    },
    chip_success_bg: {
      base00: "--green-20",
      base10: "--green-20",
      base70: "--green-60",
      base80: "--green-60",
      base85: "--green-60",
      base90: "--green-60",
    },
    chip_success_icon: {
      base00: "--green-40",
      base10: "--green-40",
      base70: "--green-30",
      base80: "--green-30",
      base85: "--green-30",
      base90: "--green-30",
    },
    chip_outlined_primary_border: {
      base00: "--lunitTeal-40",
      base10: "--lunitTeal-40",
      base70: "--lunitTeal-40",
      base80: "--lunitTeal-40",
      base85: "--lunitTeal-40",
      base90: "--lunitTeal-40",
    },
    chip_outlined_primary_text: {
      base00: "--lunitTeal-50",
      base10: "--lunitTeal-50",
      base70: "--lunitTeal-40",
      base80: "--lunitTeal-40",
      base85: "--lunitTeal-40",
      base90: "--lunitTeal-40",
    },
    chip_outlined_secondary_border: {
      base00: "--grey-40",
      base10: "--grey-40",
      base70: "--grey-40",
      base80: "--grey-40",
      base85: "--grey-40",
      base90: "--grey-40",
    },
    chip_outlined_secondary_text: {
      base00: "--grey-40",
      base10: "--grey-40",
      base70: "--grey-30",
      base80: "--grey-30",
      base85: "--grey-30",
      base90: "--grey-30",
    },
    chip_outlined_warning_border: {
      base00: "--orange-40",
      base10: "--orange-40",
      base70: "--orange-40",
      base80: "--orange-40",
      base85: "--orange-40",
      base90: "--orange-40",
    },
    chip_outlined_warning_text: {
      base00: "--orange-40",
      base10: "--orange-40",
      base70: "--orange-30",
      base80: "--orange-30",
      base85: "--orange-30",
      base90: "--orange-30",
    },
    chip_outlined_error_border: {
      base00: "--red-40",
      base10: "--red-40",
      base70: "--red-40",
      base80: "--red-40",
      base85: "--red-40",
      base90: "--red-40",
    },
    chip_outlined_error_text: {
      base00: "--red-40",
      base10: "--red-40",
      base70: "--red-30",
      base80: "--red-30",
      base85: "--red-30",
      base90: "--red-30",
    },
    chip_outlined_success_border: {
      base00: "--green-40",
      base10: "--green-40",
      base70: "--green-40",
      base80: "--green-40",
      base85: "--green-40",
      base90: "--green-40",
    },
    chip_outlined_success_text: {
      base00: "--green-40",
      base10: "--green-40",
      base70: "--green-30",
      base80: "--green-30",
      base85: "--green-30",
      base90: "--green-30",
    },
  },
};
