import { AlertProps as BaseAlertProps } from '@mui/material';

interface AlertProps extends Omit<BaseAlertProps, "onClose"> {}

interface ToastPropsWithAction extends AlertProps {
  actionButtonText: string
  actionButtonHandler: () => void
}

interface BaseToast extends AlertProps {
  actionButtonText?: never
  actionButtonHandler?: never
}

export type ToastProps = BaseToast | ToastPropsWithAction
