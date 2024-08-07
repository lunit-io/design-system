import { ColorTokenValueBySurface } from "./types";

export interface TokenCoreColorValue {
  [token: string]: ColorTokenValueBySurface;
}

export const tokenCoreColor: TokenCoreColorValue = {
  bg_01: {
    light1: "--grey_0",
    light2: "--grey_10",
    dark1: "--grey_90",
    dark2: "--grey_75",
  },
  bg_02: {
    light1: "--grey_0",
    light2: "--grey_0",
    dark1: "--grey_70",
    dark2: "--grey_70",
  },
  bg_03: {
    light1: "--grey_0",
    light2: "--grey_0",
    dark1: "--grey_85",
    dark2: "--grey_85",
  },
  layer_01: {
    light1: "--grey_5",
    light2: "--grey_5",
    dark1: "--grey_80",
    dark2: "--grey_80",
  },
  text_primary: {
    light1: "--lunit_teal_50",
    light2: "--lunit_teal_50",
    dark1: "--lunit_teal_40",
    dark2: "--lunit_teal_40",
  },
  text_normal: {
    light1: "--grey_95",
    light2: "--grey_95",
    dark1: "--grey_5",
    dark2: "--grey_5",
  },
  text_medium: {
    light1: "--grey_60",
    light2: "--grey_60",
    dark1: "--grey_30",
    dark2: "--grey_30",
  },
  text_light: {
    light1: "--grey_40",
    light2: "--grey_40",
    dark1: "--grey_50",
    dark2: "--grey_50",
  },
  text_error: {
    light1: "--red_40",
    light2: "--red_40",
    dark1: "--red_40",
    dark2: "--red_30",
  },
  text_success: {
    light1: "--green_40",
    light2: "--green_40",
    dark1: "--green_40",
    dark2: "--green_30",
  },
  text_warning: {
    light1: "--orange_40",
    light2: "--orange_40",
    dark1: "--orange_40",
    dark2: "--orange_30",
  },
  text_info: {
    light1: "--blue_40",
    light2: "--blue_40",
    dark1: "--blue_40",
    dark2: "--blue_30",
  },
  link_primary: {
    light1: "--blue_40",
    light2: "--blue_40",
    dark1: "--blue_30",
    dark2: "--blue_30",
  },
  link_hover: {
    light1: "--blue_50",
    light2: "--blue_50",
    dark1: "--blue_40",
    dark2: "--blue_40",
  },
  link_visited: {
    light1: "--purple_50",
    light2: "--purple_50",
    dark1: "--purple_40",
    dark2: "--purple_40",
  },
  icon_error_02: {
    light1: "--red_40",
    light2: "--red_40",
    dark1: "--red_30",
    dark2: "--red_30",
  },
  icon_success_02: {
    light1: "--green_40",
    light2: "--green_40",
    dark1: "--green_30",
    dark2: "--green_30",
  },
  icon_warning_02: {
    light1: "--orange_40",
    light2: "--orange_40",
    dark1: "--orange_30",
    dark2: "--orange_30",
  },
  icon_info_02: {
    light1: "--blue_40",
    light2: "--blue_40",
    dark1: "--blue_30",
    dark2: "--blue_30",
  },
  hover: {
    // TODO: 알파값 적용 코드는 일단 하드코딩. 나중에 수정할것
    light1: "rgba(0, 0, 0, 0.12)", // "--grey_100 12%",
    light2: "rgba(0, 0, 0, 0.12)", // "--grey_100 12%",
    dark1: "rgba(255, 255, 255, 0.12)", // "--grey_0 12%",
    dark2: "rgba(255, 255, 255, 0.12)", // "--grey_0 12%",
  },
  focused: {
    light1: "--lunit_teal_40",
    light2: "--lunit_teal_40",
    dark1: "--lunit_teal_40",
    dark2: "--lunit_teal_40",
  },
  selected: {
    light1: "--lunit_teal_10",
    light2: "--lunit_teal_10",
    dark1: "--lunit_teal_80",
    dark2: "--lunit_teal_80",
  },
  shadow_01: {
    light1: "rgba(0, 0, 0, 0.12)", // "--grey_100 12%",
    light2: "rgba(0, 0, 0, 0.12)", // "--grey_100 12%",
    dark1: "rgba(0, 0, 0, 0.32)", // "--grey_100 32%",
    dark2: "rgba(0, 0, 0, 0.32)", // "--grey_100 32%",
  },
  shadow_02: {
    light1: "rgba(0, 0, 0, 0.18)", // "--grey_100 18%",
    light2: "rgba(0, 0, 0, 0.18)", // "--grey_100 18%",
    dark1: "rgba(0, 0, 0, 0.4)", // "--grey_100 40%",
    dark2: "rgba(0, 0, 0, 0.4)", // "--grey_100 40%",
  },
  shadow_03: {
    light1: "rgba(0, 0, 0, 0.12)", // "--grey_100 12%",
    light2: "rgba(0, 0, 0, 0.12)", // "--grey_100 12%",
    dark1: "rgba(0, 0, 0, 0.36)", // "--grey_100 36%",
    dark2: "rgba(0, 0, 0, 0.36)", // "--grey_100 36%",
  },
  shadow_04: {
    light1: "rgba(0, 0, 0, 0.18)", // "--grey_100 18%",
    light2: "rgba(0, 0, 0, 0.18)", // "--grey_100 18%",
    dark1: "rgba(0, 0, 0, 0.48)", // "--grey_100 48%",
    dark2: "rgba(0, 0, 0, 0.48)", // "--grey_100 48%",
  },
  border_light: {
    light1: "rgba(0, 0, 0, 0.12)", // "--grey_100 12%",
    light2: "rgba(0, 0, 0, 0.12)", // "--grey_100 12%",
    dark1: "rgba(255, 255, 255, 0.12)", // "--grey_0 12%",
    dark2: "rgba(255, 255, 255, 0.12)", // "--grey_0 12%",
  },
  border_medium: {
    light1: "rgba(0, 0, 0, 0.24)", // "--grey_100 24%",
    light2: "rgba(0, 0, 0, 0.24)", // "--grey_100 24%",
    dark1: "rgba(255, 255, 255, 0.24)", // "--grey_0 24%",
    dark2: "rgba(255, 255, 255, 0.24)", // "--grey_0 24%",
  },
};
