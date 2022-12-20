import { ColorTokenValueBySurface } from "./types";

export interface TokenComponentColorValue {
  [component: string]: {
    [token: string]: ColorTokenValueBySurface;
  };
}

export const tokenComponentColor: TokenComponentColorValue = {
  btn: {
    btn_contained_primary_bg: {
      light1: "--lunitTeal-40",
      light2: "--lunitTeal-40",
      dark1: "--lunitTeal-40",
      dark2: "--lunitTeal-40",
      dark3: "--lunitTeal-40",
      dark4: "--lunitTeal-40",
    },
    btn_contained_primary_text: {
      light1: "--grey-95",
      light2: "--grey-95",
      dark1: "--grey-95",
      dark2: "--grey-95",
      dark3: "--grey-95",
      dark4: "--grey-95",
    },
    btn_contained_secondary_bg: {
      light1: "--grey-60",
      light2: "--grey-60",
      dark1: "--grey-60",
      dark2: "--grey-60",
      dark3: "--grey-60",
      dark4: "--grey-60",
    },
    btn_contained_secondary_text: {
      light1: "--grey-95",
      light2: "--grey-95",
      dark1: "--grey-5",
      dark2: "--grey-5",
      dark3: "--grey-5",
      dark4: "--grey-5",
    },
    btn_contained_error_bg: {
      light1: "--red-40",
      light2: "--red-40",
      dark1: "--red-40",
      dark2: "--red-40",
      dark3: "--red-40",
      dark4: "--red-40",
    },
    btn_contained_error_text: {
      light1: "--grey-95",
      light2: "--grey-95",
      dark1: "--grey-95",
      dark2: "--grey-95",
      dark3: "--grey-95",
      dark4: "--grey-95",
    },
    btn_outlined_primary_border: {
      light1: "--lunitTeal-50",
      light2: "--lunitTeal-50",
      dark1: "--lunitTeal-40",
      dark2: "--lunitTeal-40",
      dark3: "--lunitTeal-40",
      dark4: "--lunitTeal-40",
    },
    btn_outlined_primary_text: {
      light1: "--lunitTeal-50",
      light2: "--lunitTeal-50",
      dark1: "--lunitTeal-40",
      dark2: "--lunitTeal-40",
      dark3: "--lunitTeal-40",
      dark4: "--lunitTeal-40",
    },
    btn_ghost_primary_text: {
      light1: "--lunitTeal-50",
      light2: "--lunitTeal-50",
      dark1: "--lunitTeal-40",
      dark2: "--lunitTeal-40",
      dark3: "--lunitTeal-40",
      dark4: "--lunitTeal-40",
    },
    btn_ghost_secondary_text: {
      light1: "--grey-60",
      light2: "--grey-60",
      dark1: "--grey-5",
      dark2: "--grey-5",
      dark3: "--grey-5",
      dark4: "--grey-5",
    },
    btn_ghost_error_text: {
      light1: "--red-40",
      light2: "--red-40",
      dark1: "--red-40",
      dark2: "--red-40",
      dark3: "--red-30",
      dark4: "--red-30",
    },
  },
  selectControl: {
    selectcontrol_on: {
      light1: "--lunitTeal-40",
      light2: "--lunitTeal-40",
      dark1: "--lunitTeal-40",
      dark2: "--lunitTeal-40",
      dark3: "--lunitTeal-40",
      dark4: "--lunitTeal-40",
    },
    selectcontrol_off: {
      light1: "--grey-40",
      light2: "--grey-40",
      dark1: "--grey-40",
      dark2: "--grey-40",
      dark3: "--grey-40",
      dark4: "--grey-40",
    },
    selectcontrol_handler: {
      light1: "--grey-0",
      light2: "--grey-0",
      dark1: "--grey-0",
      dark2: "--grey-0",
      dark3: "--grey-0",
      dark4: "--grey-0",
    },
    selectcontrol_handler_shadow: {
      //TODO: opacity 확인
      light1: "--grey-100 5%",
      light2: "--grey-100 5%",
      dark1: "--grey-100 5%",
      dark2: "--grey-100 5%",
      dark3: "--grey-100 5%",
      dark4: "--grey-100 5%",
    },
  },
  textFields: {
    textfield_bg: {
      light1: "--grey-10",
      light2: "--grey-00",
      dark1: "--grey-80",
      dark2: "--grey-75",
      dark3: "--grey-70",
      dark4: "--grey-75",
    },
    textfield_border_error: {
      light1: "--red-40",
      light2: "--red-40",
      dark1: "--red-40",
      dark2: "--red-40",
      dark3: "--red-40",
      dark4: "--red-40",
    },
  },
  dropdown: {
    dropdown_option_selected: {
      light1: "--lunitTeal-10",
      light2: "--lunitTeal-10",
      dark1: "--lunitTeal-80",
      dark2: "--lunitTeal-80",
      dark3: "--lunitTeal-80",
      dark4: "--lunitTeal-80",
    },
    dropdown_option_activatied: {
      // TODO: 오타 수정 요청 => activated
      light1: "--lunitTeal-10",
      light2: "--lunitTeal-10",
      dark1: "--lunitTeal-80",
      dark2: "--lunitTeal-80",
      dark3: "--lunitTeal-80",
      dark4: "--lunitTeal-80",
    },
    dropdown_divider_border: {
      light1: "--grey-15",
      light2: "--grey-15",
      dark1: "--grey-60",
      dark2: "--grey-60",
      dark3: "--grey-60",
      dark4: "--grey-60",
    },
  },
  dataTable: {
    datatable_cell_selected: {
      light1: "--lunitTeal-10",
      light2: "--lunitTeal-10",
      dark1: "--lunitTeal-80",
      dark2: "--lunitTeal-80",
      dark3: "--lunitTeal-80",
      dark4: "--lunitTeal-80",
    },
    datatable_border_01: {
      light1: "--grey-20",
      light2: "--grey-30",
      dark1: "--grey-50",
      dark2: "--grey-50",
      dark3: "--grey-50",
      dark4: "--grey-40",
    },
    datatable_border_02: {
      light1: "--grey-10",
      light2: "--grey-15",
      dark1: "--grey-80",
      dark2: "--grey-75",
      dark3: "--grey-75",
      dark4: "--grey-60",
    },
    datatable_zebra: {
      // TODO: opacity 처리
      light1: "--grey-100 3%",
      light2: "--grey-100 3%",
      dark1: "--grey-00 3%",
      dark2: "--grey-00 3%",
      dark3: "--grey-00 3%",
      dark4: "--grey-00 3%",
    },
  },
  scrollbars: {
    scrollbars_bg: {
      light1: "--grey-20",
      light2: "--grey-20",
      dark1: "--grey-60",
      dark2: "--grey-60",
      dark3: "--grey-50",
      dark4: "--grey-50",
    },
    scrollbars_hover: {
      light1: "--grey-30",
      light2: "--grey-30",
      dark1: "--grey-50",
      dark2: "--grey-50",
      dark3: "--grey-40",
      dark4: "--grey-40",
    },
    scrollbars_pressed: {
      light1: "--grey-50",
      light2: "--grey-50",
      dark1: "--grey-30",
      dark2: "--grey-30",
      dark3: "--grey-20",
      dark4: "--grey-20",
    },
  },
  modal: {
    modal_overlay: {
      light1: "--op_overlay/grey-95 70%",
      light2: "--op_overlay/grey-95 70%",
      dark1: "--op_overlay/grey-95 70%",
      dark2: "--op_overlay/grey-95 70%",
      dark3: "--op_overlay/grey-95 70%",
      dark4: "--op_overlay/grey-95 70%",
    },
  },
  tooltip: {
    tooltip_bg: {
      light1: "--grey-70",
      light2: "--grey-70",
      dark1: "--grey-70",
      dark2: "--grey-70",
      dark3: "--grey-70",
      dark4: "--grey-70",
    },
    tooltip_text_normal: {
      light1: "--grey-5",
      light2: "--grey-5",
      dark1: "--grey-5",
      dark2: "--grey-5",
      dark3: "--grey-5",
      dark4: "--grey-5",
    },
    tooltip_text_medium: {
      light1: "--grey-40",
      light2: "--grey-40",
      dark1: "--grey-40",
      dark2: "--grey-40",
      dark3: "--grey-40",
      dark4: "--grey-40",
    },
  },
  alert: {
    alert_error_bg: {
      light1: "--red-40 16%",
      light2: "--red-40 16%",
      dark1: "--red-30 32%",
      dark2: "--red-30 32%",
      dark3: "--red-30 32%",
      dark4: "--red-30 32%",
    },
    alert_error_border: {
      light1: "--red-40",
      light2: "--red-40",
      dark1: "--red-30",
      dark2: "--red-30",
      dark3: "--red-30",
      dark4: "--red-30",
    },
    alert_success_bg: {
      light1: "--green-40 16%",
      light2: "--green-40 16%",
      dark1: "--green-30 32%",
      dark2: "--green-30 32%",
      dark3: "--green-30 32%",
      dark4: "--green-30 32%",
    },
    alert_success_border: {
      light1: "--green-40",
      light2: "--green-40",
      dark1: "--green-30",
      dark2: "--green-30",
      dark3: "--green-30",
      dark4: "--green-30",
    },
    alert_info_bg: {
      light1: "--blue-40 16%",
      light2: "--blue-40 16%",
      dark1: "--blue-30 32%",
      dark2: "--blue-30 32%",
      dark3: "--blue-30 32%",
      dark4: "--blue-30 32%",
    },
    alert_info_border: {
      light1: "--blue-40",
      light2: "--blue-40",
      dark1: "--blue-30",
      dark2: "--blue-30",
      dark3: "--blue-30",
      dark4: "--blue-30",
    },
    alert_warning_bg: {
      light1: "--orange-40 16%",
      light2: "--orange-40 16%",
      dark1: "--orange-30 32%",
      dark2: "--orange-30 32%",
      dark3: "--orange-30 32%",
      dark4: "--orange-30 32%",
    },
    alert_warning_border: {
      light1: "--orange-40",
      light2: "--orange-40",
      dark1: "--orange-30",
      dark2: "--orange-30",
      dark3: "--orange-30",
      dark4: "--orange-30",
    },
  },
  chip: {
    chip_primary_bg: {
      light1: "--lunitTeal-20",
      light2: "--lunitTeal-20",
      dark1: "--lunitTeal-60",
      dark2: "--lunitTeal-60",
      dark3: "--lunitTeal-60",
      dark4: "--lunitTeal-60",
    },
    chip_primary: {
      light1: "--lunitTeal-50",
      light2: "--lunitTeal-50",
      dark1: "--lunitTeal-40",
      dark2: "--lunitTeal-40",
      dark3: "--lunitTeal-40",
      dark4: "--lunitTeal-40",
    },
    chip_secondary_bg: {
      light1: "--grey-15",
      light2: "--grey-15",
      dark1: "--grey-60",
      dark2: "--grey-60",
      dark3: "--grey-60",
      dark4: "--grey-60",
    },
    chip_secondary: {
      light1: "--grey-40",
      light2: "--grey-40",
      dark1: "--grey-30",
      dark2: "--grey-30",
      dark3: "--grey-30",
      dark4: "--grey-30",
    },
    chip_error_bg: {
      light1: "--red-20",
      light2: "--red-20",
      dark1: "--red-60",
      dark2: "--red-60",
      dark3: "--red-60",
      dark4: "--red-60",
    },
    chip_error: {
      light1: "--red-40",
      light2: "--red-40",
      dark1: "--red-30",
      dark2: "--red-30",
      dark3: "--red-30",
      dark4: "--red-30",
    },
    chip_warning_bg: {
      light1: "--orange-20",
      light2: "--orange-20",
      dark1: "--orange-60",
      dark2: "--orange-60",
      dark3: "--orange-60",
      dark4: "--orange-60",
    },
    chip_warning: {
      light1: "--orange-40",
      light2: "--orange-40",
      dark1: "--orange-30",
      dark2: "--orange-30",
      dark3: "--orange-30",
      dark4: "--orange-30",
    },
    chip_success_bg: {
      light1: "--green-20",
      light2: "--green-20",
      dark1: "--green-60",
      dark2: "--green-60",
      dark3: "--green-60",
      dark4: "--green-60",
    },
    chip_success: {
      light1: "--green-40",
      light2: "--green-40",
      dark1: "--green-30",
      dark2: "--green-30",
      dark3: "--green-30",
      dark4: "--green-30",
    },
  },
};
