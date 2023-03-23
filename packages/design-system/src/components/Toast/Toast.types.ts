import { AlertProps as BaseAlertProps } from "@mui/material";

export type ToastProps = Omit<
  BaseAlertProps,
  "variant" | "slots" | "slotProps" | "components" | "componentsProps"
>;
