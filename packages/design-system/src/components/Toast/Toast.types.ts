import { AlertProps as BaseAlertProps } from "@mui/material";

export interface ToastProps
  extends Omit<
    BaseAlertProps,
    | "variant"
    | "slots"
    | "slotProps"
    | "components"
    | "componentsProps"
    | "severity"
  > {
  severity: "success" | "info" | "warning" | "error" | "normal";
}
