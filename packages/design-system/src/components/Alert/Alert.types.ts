import { AlertProps as MuiAlertProps } from "@mui/material";
import { ReactNode } from "react";

export interface AlertProps extends MuiAlertProps {
  width?: number;
  title?: string;
  action?: ReactNode;
  children: ReactNode;
  bottomAction?: ReactNode;
  isSnackbar?: boolean;
  onClose?: () => void;
}
