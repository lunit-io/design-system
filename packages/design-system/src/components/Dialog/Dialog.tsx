import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Close } from "@lunit/design-system-icons";

import { DialogAction } from "./components/DialogAction";
import {
  StyledBackdrop,
  StyledDialog,
  StyledDialogContent,
  StyledDialogTitle,
  StyledDialogTitleIconWrapper,
} from "./Dialog.styled";
import Button from "../Button";
import Typography from "../Typography";

import type { SxProps } from "@mui/material/styles";
import type { TypographyProps } from "@mui/material";

export interface DialogBase {
  isOpen: boolean;
  onClose(): void;
  type?: "passive" | "action"; // default passive
  nonModal?: boolean; // default false
  title: string;
  titleIcon?: React.ReactNode;
  titleVariant?: TypographyProps["variant"];
  children: React.ReactNode;
  actions?: React.ReactNode;
  enableBackButtonClose?: boolean; // only for passive dialog
  enableBackdropClose?: boolean;
  size?: "small" | "medium"; // default "small"
  sx?: SxProps;
  style?: React.CSSProperties;
  className?: string;
}

export interface PassiveDialogType extends DialogBase {
  type: "passive";
  actions?: undefined;
  enableBackButtonClose?: true;
  enableBackdropClose?: true;
}
export interface ActionDialogType extends DialogBase {
  type: "action";
  actions: React.ReactNode;
  enableBackButtonClose?: false;
  enableBackdropClose?: boolean;
}

export interface PassiveModalProps extends PassiveDialogType {
  nonModal?: false;
}
export interface ActionModalProps extends ActionDialogType {
  nonModal?: false;
}
export type ModalProps = PassiveModalProps | ActionModalProps;

export interface PassiveNonModalProps extends PassiveDialogType {
  nonModal?: true;
}
export interface ActionNonModalProps extends ActionDialogType {
  nonModal?: true;
  enableBackdropClose?: false;
}
export type NonModalProps = PassiveNonModalProps | ActionNonModalProps;

export type DialogProps = ModalProps | NonModalProps;

function Dialog(props: DialogProps) {
  const { isOpen, type, nonModal = false, onClose } = props;

  const isActionModal = type === "action" && !nonModal;
  const isPassiveModal = type === "passive" && !nonModal;
  const isActionNonModal = type === "action" && nonModal;

  function handleBackdropClose(e: React.MouseEvent<HTMLDivElement>) {
    const isClosable =
      isPassiveModal || (isActionModal && props.enableBackdropClose);

    if (!isClosable) return;
    if (e.target !== e.currentTarget) return;

    onClose();
  }

  useEffect(() => {
    const isClosable = isOpen && isPassiveModal;
    if (!isClosable) return;

    function handleEscClose(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    function handleBackButtonClose(event: KeyboardEvent) {
      if (event.key === "Backspace") onClose();
    }

    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("keydown", handleBackButtonClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("keydown", handleBackButtonClose);
    };
  }, [isOpen, isPassiveModal, onClose]);

  if (!isOpen) return null;
  return createPortal(
    nonModal ? (
      <DialogBase dialogProps={{ ...props }} />
    ) : (
      <StyledBackdrop
        onClick={handleBackdropClose}
        data-testid="dialog-backdrop"
      >
        <DialogBase dialogProps={{ ...props }} />
      </StyledBackdrop>
    ),

    document.body
  );
}

function DialogBase({ dialogProps }: { dialogProps: DialogBase }) {
  const {
    nonModal = false,
    onClose,
    title,
    titleIcon,
    titleVariant = "headline5",
    children,
    actions,
    type,
    size = "small",
    sx,
    style,
    className,
  } = dialogProps;

  return (
    <StyledDialog
      role="dialog"
      aria-labelledby="dialog-title"
      size={size}
      nonModal={nonModal}
      type={type}
      sx={{
        ...sx,
      }}
      style={style}
      className={`dialog elevation2 ${className ?? ""}`}
    >
      <StyledDialogTitle id="dialog-title" className="dialog-title-wrapper">
        {titleIcon && (
          <StyledDialogTitleIconWrapper className="dialog-title-icon">
            {titleIcon}
          </StyledDialogTitleIconWrapper>
        )}
        <Typography
          component="h2"
          id="dialog-title-text"
          variant={titleVariant}
        >
          {title}
        </Typography>
        {type === "passive" && (
          <Button
            id="dialog-title-close-button"
            data-testid="dialog-title-close-button"
            kind="ghost"
            color="secondary"
            icon={<Close />}
            onClick={onClose}
            sx={{
              marginRight: 0,
              marginLeft: "auto",
            }}
          />
        )}
      </StyledDialogTitle>
      <StyledDialogContent id="dialog-content">{children}</StyledDialogContent>
      {type === "action" && actions !== null ? (
        // `actions !== null` is used to not render DialogAction when actions is undefined
        // There was a case when actions is undefined, but DialogAction is rendered with null children
        <DialogAction>{actions}</DialogAction>
      ) : null}
    </StyledDialog>
  );
}

export default Dialog;
