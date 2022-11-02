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

export type ChipThumbnail = "logo" | "avatar" | React.ReactElement;

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
