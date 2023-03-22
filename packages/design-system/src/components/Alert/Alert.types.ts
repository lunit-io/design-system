import { AlertProps as MuiAlertProps } from "@mui/material";
import { ReactNode } from "react";

export interface AlertProps extends MuiAlertProps {
  title?: string;
  action?: ReactNode;
  children: ReactNode;
  bottomAction?: ReactNode;
  onClose?: () => void;
}
