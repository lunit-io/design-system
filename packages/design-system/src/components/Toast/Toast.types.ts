import { AlertProps } from '@mui/material';

interface ToastPropsWithAction extends AlertProps {
  actionButtonText: string
  onClose: () => void
  actionButtonHandler: () => void
}

interface BaseToast extends AlertProps {
  actionButtonText?: never
  onClose?: never
  actionButtonHandler?: never
}

export type ToastProps = BaseToast | ToastPropsWithAction
