// 1. TODO: 만들기

// 1) icon 설치 시에 아래와 같은 오류가 뜸
// > webpack ver5 아니면 발생하는 이슈 > 버전 확인
// https://stackoverflow.com/questions/70637257/storybook-error-when-using-webpack5-with-next-js-app-typescript
// > learna의 workspace 설정 자체가 잘못되었을 수도 있음
// lunit-icon과 lunit-logo가 같이 설치되어야 chip 작업 완료 가능

// 2) Storybook에 어떻게 넣어줄지 생각해보자~
// 피그마와 되도록 동일하게 넣어주는 게 좋을 듯

// 3) color 적용하기

// 2. TODO: 생각해야 하는 것들
// 만든 후에는 다른 라이브러리 참고해보기
// handleClick보다는 clickable이, handleDelete보다는 removable이 나을 수도 있음

/**
 * 칩 컴포넌트는 배경색에 제한이 없으며, 아래 baseClass는 피그마 참고하면 됨
 * https://www.figma.com/file/cvCwvrIV9Xo1iOLcbvD904/Components_Lunit-Design?node-id=8115%3A243152
 * baseClass를 지정하지 않았을 경우 default는 base85 - 개발자 임의로 설정
 * color를 지정하지 않았을 경우 default는 primary - 개발자 임의로 설정
 */

export type ChipBaseClass =
  | "base00"
  | "base10"
  | "base70"
  | "base80"
  | "base85"
  | "base90";

export type ChipColor =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "success";

export type ChipThumbnail = "logo" | "avatar" | JSX.Element;

export interface BaseChipProps {
  text: string;
  clickable: boolean;
  color?: ChipColor;
  baseClass?: ChipBaseClass;
}
export interface ContainedChipProps extends BaseChipProps {
  clickable: true;
  onClick: () => void;
  onDelete?: () => void;
  thumbnail?: ChipThumbnail;
}

export interface OutlinedChipProps extends BaseChipProps {
  clickable: false;
}

export type ChipProps = ContainedChipProps | OutlinedChipProps;
