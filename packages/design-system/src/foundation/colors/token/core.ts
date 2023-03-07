import { ColorTokenValueBySurface } from "./types";

export interface TokenCoreColorValue {
  [token: string]: ColorTokenValueBySurface;
}

export const tokenCoreColor: TokenCoreColorValue = {
  bg_01: {
    light1: "--grey-0",
    light2: "--grey-10",
    dark1: "--grey-90",
    dark2: "--grey-85",
    dark3: "--grey-80",
    dark4: "--grey-70",
  },
  bg_02: {
    light1: "--grey-0",
    light2: "--grey-0",
    dark1: "--grey-70",
    dark2: "--grey-70",
    dark3: "--grey-70",
    dark4: "--grey-70",
  },
  bg_03: {
    light1: "--grey-0",
    light2: "--grey-0",
    dark1: "--grey-85",
    dark2: "--grey-85",
    dark3: "--grey-85",
    dark4: "--grey-85",
  },
  text_primary: {
    light1: "--lunitTeal-50",
    light2: "--lunitTeal-50",
    dark1: "--lunitTeal-40",
    dark2: "--lunitTeal-40",
    dark3: "--lunitTeal-40",
    dark4: "--lunitTeal-40",
  },
  text_normal: {
    light1: "--grey-95",
    light2: "--grey-95",
    dark1: "--grey-5",
    dark2: "--grey-5",
    dark3: "--grey-5",
    dark4: "--grey-5",
  },
  text_medium: {
    light1: "--grey-60",
    light2: "--grey-60",
    dark1: "--grey-40",
    dark2: "--grey-40",
    dark3: "--grey-40",
    dark4: "--grey-30",
  },
  text_light: {
    light1: "--grey-40",
    light2: "--grey-40",
    dark1: "--grey-50",
    dark2: "--grey-50",
    dark3: "--grey-50",
    dark4: "--grey-40",
  },
  text_error: {
    light1: "--red-40",
    light2: "--red-40",
    dark1: "--red-40",
    dark2: "--red-40",
    dark3: "--red-30",
    dark4: "--red-30",
  },
  text_success: {
    // TODO: sucess -> success 로 바뀌었으니 코드 내 사용되는 부분 확인해서 업데이트. 개발자들에게도 공지할것.
    light1: "--green-40",
    light2: "--green-40",
    dark1: "--green-40",
    dark2: "--green-40",
    dark3: "--green-30",
    dark4: "--green-30",
  },
  text_warning: {
    light1: "--orange-40",
    light2: "--orange-40",
    dark1: "--orange-40",
    dark2: "--orange-40",
    dark3: "--orange-30",
    dark4: "--orange-30",
  },
  text_info: {
    light1: "--blue-40",
    light2: "--blue-40",
    dark1: "--blue-40",
    dark2: "--blue-40",
    dark3: "--blue-30",
    dark4: "--blue-30",
  },
  link_primary: {
    light1: "--blue-40",
    light2: "--blue-40",
    dark1: "--blue-40",
    dark2: "--blue-40",
    dark3: "--blue-30",
    dark4: "--blue-30",
  },
  link_hover: {
    light1: "--blue-50",
    light2: "--blue-50",
    dark1: "--blue-50",
    dark2: "--blue-50",
    dark3: "--blue-40",
    dark4: "--blue-40",
  },
  link_visited: {
    light1: "--purple-50",
    light2: "--purple-50",
    dark1: "--purple-50",
    dark2: "--purple-50",
    dark3: "--purple-40",
    dark4: "--purple-40",
  },
  icon_error_02: {
    light1: "--red-40",
    light2: "--red-40",
    dark1: "--red-30",
    dark2: "--red-30",
    dark3: "--red-30",
    dark4: "--red-30",
  },
  icon_success_02: {
    // TODO: sucess -> success 로 바뀌었으니 코드 내 사용되는 부분 확인해서 업데이트. 개발자들에게도 공지할것.
    light1: "--green-40",
    light2: "--green-40",
    dark1: "--green-30",
    dark2: "--green-30",
    dark3: "--green-30",
    dark4: "--green-30",
  },
  icon_warning_02: {
    light1: "--orange-40",
    light2: "--orange-40",
    dark1: "--orange-30",
    dark2: "--orange-30",
    dark3: "--orange-30",
    dark4: "--orange-30",
  },
  icon_info_02: {
    light1: "--blue-40",
    light2: "--blue-40",
    dark1: "--blue-30",
    dark2: "--blue-30",
    dark3: "--blue-30",
    dark4: "--blue-30",
  },
  hover: {
    // TODO: 알파값 적용 코드는 일단 하드코딩. 나중에 수정할것
    light1: "rgba(0, 0, 0, 0.1)", // grey_100 10%
    light2: "rgba(0, 0, 0, 0.1)", // grey_100 10%
    dark1: "rgba(0, 0, 0, 0.1)", // grey_100 10%
    dark2: "rgba(0, 0, 0, 0.1)", // grey_100 10%
    dark3: "rgba(0, 0, 0, 0.1)", // grey_100 10%
    dark4: "rgba(0, 0, 0, 0.1)", // grey_100 10%
  },
  focused: {
    light1: "--lunitTeal-40",
    light2: "--lunitTeal-40",
    dark1: "--lunitTeal-40",
    dark2: "--lunitTeal-40",
    dark3: "--lunitTeal-40",
    dark4: "--lunitTeal-40",
  },
  selected: {
    light1: "--lunitTeal-10",
    light2: "--lunitTeal-10",
    dark1: "--lunitTeal-80",
    dark2: "--lunitTeal-80",
    dark3: "--lunitTeal-80",
    dark4: "--lunitTeal-80",
  },
  shadow_01: {
    light1: "rgba(0, 0, 0, 0.12)", // "--grey-100 12%",
    light2: "rgba(0, 0, 0, 0.12)", // "--grey-100 12%",
    dark4: "rgba(0, 0, 0, 0.32)", // "--grey-100 32%",
    dark3: "rgba(0, 0, 0, 0.32)", // "--grey-100 32%",
    dark2: "rgba(0, 0, 0, 0.32)", // "--grey-100 32%",
    dark1: "rgba(0, 0, 0, 0.32)", // "--grey-100 32%",
  },
  shadow_02: {
    light1: "rgba(0, 0, 0, 0.18)", // "--grey-100 18%",
    light2: "rgba(0, 0, 0, 0.18)", // "--grey-100 18%",
    dark4: "rgba(0, 0, 0, 0.4)", // "--grey-100 40%",
    dark3: "rgba(0, 0, 0, 0.4)", // "--grey-100 40%",
    dark2: "rgba(0, 0, 0, 0.4)", // "--grey-100 40%",
    dark1: "rgba(0, 0, 0, 0.4)", // "--grey-100 40%",
  },
  shadow_03: {
    light1: "rgba(0, 0, 0, 0.12)", // "--grey-100 12%",
    light2: "rgba(0, 0, 0, 0.12)", // "--grey-100 12%",
    dark4: "rgba(0, 0, 0, 0.36)", // "--grey-100 36%",
    dark3: "rgba(0, 0, 0, 0.36)", // "--grey-100 36%",
    dark2: "rgba(0, 0, 0, 0.36)", // "--grey-100 36%",
    dark1: "rgba(0, 0, 0, 0.36)", // "--grey-100 36%",
  },
  shadow_04: {
    light1: "rgba(0, 0, 0, 0.18)", // "--grey-100 18%",
    light2: "rgba(0, 0, 0, 0.18)", // "--grey-100 18%",
    dark4: "rgba(0, 0, 0, 0.48)", // "--grey-100 48%",
    dark3: "rgba(0, 0, 0, 0.48)", // "--grey-100 48%",
    dark2: "rgba(0, 0, 0, 0.48)", // "--grey-100 48%",
    dark1: "rgba(0, 0, 0, 0.48)", // "--grey-100 48%",
  },
};
