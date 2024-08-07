import { ColorTokenValueBySurface } from "./types";

export interface TokenComponentColorValue {
  [component: string]: {
    [token: string]: ColorTokenValueBySurface;
  };
}

export const tokenComponentColor: TokenComponentColorValue = {
  btn: {
    btn_primary_bg: {
      light1: "--lunit_teal_30",
      light2: "--lunit_teal_30",
      dark1: "--lunit_teal_40",
      dark2: "--lunit_teal_40",
    },
    btn_secondary_bg: {
      light1: "--grey_10",
      light2: "--grey_0",
      dark1: "--grey_60",
      dark2: "--grey_60",
    },
    btn_error_bg: {
      light1: "--red_30",
      light2: "--red_30",
      dark1: "--red_40",
      dark2: "--red_40",
    },
    btn_primary_border: {
      light1: "--lunit_teal_40",
      light2: "--lunit_teal_40",
      dark1: "--lunit_teal_40",
      dark2: "--lunit_teal_40",
    },
    btn_secondary_border: {
      light1: "--grey_15",
      light2: "--grey_15",
      dark1: "--grey_5",
      dark2: "--grey_5",
    },
    btn_primary_text_1: {
      light1: "--lunit_teal_50",
      light2: "--lunit_teal_50",
      dark1: "--lunit_teal_40",
      dark2: "--lunit_teal_40",
    },
    btn_primary_text_2: {
      light1: "--grey_95",
      light2: "--grey_95",
      dark1: "--grey_95",
      dark2: "--grey_95",
    },
    btn_secondary_text: {
      light1: "--grey_95",
      light2: "--grey_95",
      dark1: "--grey_5",
      dark2: "--grey_5",
    },
    btn_error_text: {
      light1: "--red_40",
      light2: "--red_40",
      dark1: "--red_40",
      dark2: "--red_30",
    },
    btn_selected_primary_bg: {
      light1: "--lunit_teal_80",
      light2: "--lunit_teal_80",
      dark1: "--lunit_teal_10",
      dark2: "--lunit_teal_10",
    },
    btn_selected_primary_text: {
      light1: "--lunit_teal_10",
      light2: "--lunit_teal_10",
      dark1: "--lunit_teal_80",
      dark2: "--lunit_teal_80",
    },
    btn_selected_secondary_bg: {
      light1: "--lunit_teal_10",
      light2: "--lunit_teal_10",
      dark1: "--grey_80",
      dark2: "--grey_80",
    },
    btn_selected_secondary_text: {
      light1: "--lunit_teal_70",
      light2: "--lunit_teal_70",
      dark1: "--lunit_teal_30",
      dark2: "--lunit_teal_30",
    },
    btn_selected_tertiary_bg: {
      light1: "--grey_95",
      light2: "--grey_95",
      dark1: "--grey_0",
      dark2: "--grey_0",
    },
    btn_selected_tertiary_text: {
      light1: "--grey_0",
      light2: "--grey_0",
      dark1: "--grey_100",
      dark2: "--grey_100",
    },
  },
  selectControl: {
    selectcontrol_on: {
      light1: "--lunit_teal_40",
      light2: "--lunit_teal_40",
      dark1: "--lunit_teal_40",
      dark2: "--lunit_teal_40",
    },
    selectcontrol_off: {
      light1: "--grey_40",
      light2: "--grey_40",
      dark1: "--grey_40",
      dark2: "--grey_40",
    },
    selectcontrol_handler: {
      light1: "--grey_0",
      light2: "--grey_0",
      dark1: "--grey_0",
      dark2: "--grey_0",
    },
    selectcontrol_handler_shadow: {
      light1: "rgba(0, 0, 0, 0.4)", // "--grey_100 40%",
      light2: "rgba(0, 0, 0, 0.4)", // "--grey_100 40%",
      dark1: "rgba(0, 0, 0, 0.4)", // "--grey_100 40%",
      dark2: "rgba(0, 0, 0, 0.4)", // "--grey_100 40%",
    },
  },
  textFields: {
    textfield_bg: {
      light1: "--grey_10",
      light2: "--grey_0",
      dark1: "--grey_80",
      dark2: "--grey_70",
    },
    textfield_border_error: {
      light1: "--red_40",
      light2: "--red_40",
      dark1: "--red_40",
      dark2: "--red_40",
    },
  },
  dropdown: {
    dropdown_divider_border: {
      light1: "--grey_15",
      light2: "--grey_15",
      dark1: "--grey_60",
      dark2: "--grey_60",
    },
  },
  dataTable: {
    datatable_border_01: {
      light1: "--grey_20",
      light2: "--grey_30",
      dark1: "--grey_50",
      dark2: "--grey_40",
    },
    datatable_border_02: {
      light1: "--grey_10",
      light2: "--grey_15",
      dark1: "--grey_80",
      dark2: "--grey_60",
    },
    datatable_zebra: {
      light1: "rgba(0, 0, 0, 0.03)", // "--grey_100 3%",
      light2: "rgba(0, 0, 0, 0.03)", // "--grey_100 3%",
      dark1: "rgba(255, 255, 255, 0.03)", // "--grey_0 3%",
      dark2: "rgba(255, 255, 255, 0.03)", // "--grey_0 3%",
    },
  },
  scrollbars: {
    scrollbars_bg: {
      light1: "--grey_20",
      light2: "--grey_20",
      dark1: "--grey_60",
      dark2: "--grey_50",
    },
    scrollbars_hover: {
      light1: "--grey_30",
      light2: "--grey_30",
      dark1: "--grey_50",
      dark2: "--grey_40",
    },
    scrollbars_pressed: {
      light1: "--grey_50",
      light2: "--grey_50",
      dark1: "--grey_30",
      dark2: "--grey_20",
    },
  },
  modal: {
    modal_overlay: {
      light1: "rgba(17, 17, 19, 0.7)", // "--grey_95 70%",
      light2: "rgba(17, 17, 19, 0.7)", // "--grey_95 70%",
      dark1: "rgba(17, 17, 19, 0.7)", // "--grey_95 70%",
      dark2: "rgba(17, 17, 19, 0.7)", // "--grey_95 70%",
    },
  },
  tooltip: {
    tooltip_bg: {
      light1: "--grey_70",
      light2: "--grey_70",
      dark1: "--grey_70",
      dark2: "--grey_70",
    },
    tooltip_text_normal: {
      light1: "--grey_5",
      light2: "--grey_5",
      dark1: "--grey_5",
      dark2: "--grey_5",
    },
    tooltip_text_medium: {
      light1: "--grey_40",
      light2: "--grey_40",
      dark1: "--grey_40",
      dark2: "--grey_40",
    },
  },
  alert: {
    alert_error_bg: {
      light1: "rgba(250, 77, 86, 0.16)", // "--red_40 16%",
      light2: "rgba(250, 77, 86, 0.16)", // "--red_40 16%",
      dark1: "rgba(255, 131, 137, 0.32)", // "--red_30 32%",
      dark2: "rgba(255, 131, 137, 0.32)", // "--red_30 32%",
    },
    alert_error_border: {
      light1: "--red_40",
      light2: "--red_40",
      dark1: "--red_30",
      dark2: "--red_30",
    },
    alert_success_bg: {
      light1: "rgba(36, 161, 72, 0.16)", // "--green_40 16%",
      light2: "rgba(36, 161, 72, 0.16)", // "--green_40 16%",
      dark1: "rgba(66, 190, 101, 0.32)", // "--green_30 32%",
      dark2: "rgba(66, 190, 101, 0.32)", // "--green_30 32%",
    },
    alert_success_border: {
      light1: "--green_30",
      light2: "--green_30",
      dark1: "--green_30",
      dark2: "--green_30",
    },
    alert_info_bg: {
      light1: "rgba(69, 137, 255, 0.16)", // "--blue_40 16%",
      light2: "rgba(69, 137, 255, 0.16)", // "--blue_40 16%",
      dark1: "rgba(120, 169, 255, 0.32)", // "--blue_30 32%",
      dark2: "rgba(120, 169, 255, 0.32)", // "--blue_30 32%",
    },
    alert_info_border: {
      light1: "--blue_40",
      light2: "--blue_40",
      dark1: "--blue_30",
      dark2: "--blue_30",
    },
    alert_warning_bg: {
      light1: "rgba(245, 134, 54, 0.16)", // "--orange_40 16%",
      light2: "rgba(245, 134, 54, 0.16)", // "--orange_40 16%",
      dark1: "rgba(255, 155, 84, 0.32)", // "--orange_30 32%",
      dark2: "rgba(255, 155, 84, 0.32)", // "--orange_30 32%",
    },
    alert_warning_border: {
      light1: "--orange_40",
      light2: "--orange_40",
      dark1: "--orange_30",
      dark2: "--orange_30",
    },
  },
  chip: {
    chip_primary_bg: {
      light1: "--lunit_teal_20",
      light2: "--lunit_teal_20",
      dark1: "--lunit_teal_60",
      dark2: "--lunit_teal_60",
    },
    chip_primary_text: {
      light1: "--lunit_teal_50",
      light2: "--lunit_teal_50",
      dark1: "--lunit_teal_40",
      dark2: "--lunit_teal_40",
    },
    chip_secondary_bg: {
      light1: "--grey_15",
      light2: "--grey_15",
      dark1: "--grey_60",
      dark2: "--grey_60",
    },
    chip_secondary_text: {
      light1: "--grey_40",
      light2: "--grey_40",
      dark1: "--grey_30",
      dark2: "--grey_30",
    },
    chip_error_bg: {
      light1: "--red_20",
      light2: "--red_20",
      dark1: "--red_60",
      dark2: "--red_60",
    },
    chip_error_text: {
      light1: "--red_40",
      light2: "--red_40",
      dark1: "--red_30",
      dark2: "--red_30",
    },
    chip_warning_bg: {
      light1: "--orange_20",
      light2: "--orange_20",
      dark1: "--orange_60",
      dark2: "--orange_60",
    },
    chip_warning_text: {
      light1: "--orange_40",
      light2: "--orange_40",
      dark1: "--orange_30",
      dark2: "--orange_30",
    },
    chip_success_bg: {
      light1: "--green_20",
      light2: "--green_20",
      dark1: "--green_60",
      dark2: "--green_60",
    },
    chip_success_text: {
      light1: "--green_40",
      light2: "--green_40",
      dark1: "--green_30",
      dark2: "--green_30",
    },
  },
};
