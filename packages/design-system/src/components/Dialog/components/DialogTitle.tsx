import React from "react";
import { styled } from "@mui/material/styles";
import { Close } from "@lunit/design-system-icons";

import Button from "../../Button";
import Typography from "../../Typography";

import type { TypographyProps } from "@mui/material";

interface DialogTitleProps {
  title: string;
  icon?: React.ReactNode;
  variant?: TypographyProps["variant"];
  onClose?: () => void;
}

const StyledDialogTitle = styled("header")({
  display: "flex",
  width: "100%",
  flex: "0 0 auto",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "8px",
});

const StyledDialogTitleIconWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  width: "20px",
  height: "20px",
  position: "relative",
  marginBottom: "1px",
});

export function DialogTitle(props: DialogTitleProps) {
  const { variant = "headline5", title, icon, onClose } = props;

  return (
    <StyledDialogTitle id="dialog-title" className="dialog-title-wrapper">
      {icon && (
        <StyledDialogTitleIconWrapper className="dialog-title-icon">
          {icon}
        </StyledDialogTitleIconWrapper>
      )}
      <Typography component="h2" id="dialog-title-text" variant={variant}>
        {title}
      </Typography>
      {onClose && (
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
  );
}

export default DialogTitle;
