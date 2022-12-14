import {
  AlertColor,
  IconProps,
  AlertProps as MuiAlertProps,
} from "@mui/material";
import { ReactNode } from "react";

export interface AlertIconProps extends IconProps {
  severity?: AlertColor;
}

export interface StyledAlertProps extends MuiAlertProps {
  width?: number;
  title?: string;
  action?: ReactNode;
  children?: ReactNode;
  bottomAction?: ReactNode;
  onClose?: () => void;
}
