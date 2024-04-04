import React, { useEffect } from "react";
import { createPortal } from "react-dom";

import { DialogAction } from "./components/DialogAction";
import { StyledBackdrop, StyledDialog } from "./Dialog.styled";

import type { SxProps } from "@mui/material/styles";

export interface DialogPropsBase {
  isOpen: boolean;
  isSmall?: boolean;
  modalType?: "passive" | "action";
  onClose(): void;
  children: React.ReactNode;
  sx?: SxProps;
  style?: React.CSSProperties;
  className?: string;
}

export interface PassiveModalProps extends DialogPropsBase {
  modalType: "passive";
  actions?: undefined;
}

export interface ActionModalProps extends DialogPropsBase {
  modalType: "action";
  actions: React.ReactNode;
  enableBackdropClose?: boolean;
}

export type ModalProps = PassiveModalProps | ActionModalProps;

export interface NonModalProps extends DialogPropsBase {
  modalType?: undefined;
  actions: React.ReactNode;
}

export type DialogProps = ModalProps | NonModalProps;

function Dialog(props: DialogProps) {
  const { isOpen, modalType, onClose } = props;

  const nonModal = !modalType;
  const isActionModal = modalType === "action";
  const isPassiveModal = modalType === "passive";

  function handleBackdropClose(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target !== e.currentTarget) return;
    const enableBackdropClose =
      isPassiveModal || (isActionModal && props.enableBackdropClose);

    if (!enableBackdropClose) return;
    onClose();
  }

  useEffect(() => {
    function handleEscClose(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    function handleBackButtonClose(event: KeyboardEvent) {
      if (event.key === "Backspace") onClose();
    }

    if (isOpen && isPassiveModal) {
      document.addEventListener("keydown", handleEscClose);
      document.addEventListener("keydown", handleBackButtonClose);
    }
    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("keydown", handleBackButtonClose);
    };
  }, [isOpen, isPassiveModal, onClose]);

  if (!isOpen) return null;
  return createPortal(
    nonModal ? (
      <DialogBase dialogProps={{ ...props, isActionModal, nonModal }} />
    ) : (
      <StyledBackdrop
        onClick={handleBackdropClose}
        data-testid="dialog-backdrop"
      >
        <DialogBase dialogProps={{ ...props, isActionModal, nonModal }} />
      </StyledBackdrop>
    ),

    document.body
  );
}

type BaseProps = DialogProps & {
  isActionModal: boolean;
  nonModal: boolean;
};

function DialogBase({ dialogProps }: { dialogProps: BaseProps }) {
  const {
    modalType,
    isSmall = false,
    children,
    actions,
    sx,
    style,
    className,
    isActionModal,
    nonModal,
  } = dialogProps;

  return (
    <StyledDialog
      role="dialog"
      aria-labelledby="dialog-title"
      isSmall={isSmall}
      modalType={modalType}
      sx={{
        ...sx,
      }}
      style={style}
      className={`light1 dialog ${className ?? ""}`}
    >
      {children}
      {(isActionModal || nonModal) && !!actions ? ( // TODO: Action 부분도 unmount 되는 과정이 필요할 때가 있어 dialog props 에 넣지 않고 사용하는 방법 생각해보기. 현재는 node 가 null 이 아닐 때 렌더링 되도록 조건 수정.
        <DialogAction>{actions}</DialogAction>
      ) : null}
    </StyledDialog>
  );
}

export default Dialog;
