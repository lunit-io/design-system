import React from "react";
import { styled } from "@mui/material/styles";

interface DialogActionProps {
  children: React.ReactNode;
  justifyContent?: React.CSSProperties["justifyContent"];
  sx?: React.CSSProperties;
}

const StyledDialogActions = styled("div")({
  display: "flex",
  flex: "0 0 auto",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: 12,
});

export function DialogAction(props: DialogActionProps) {
  const { children, justifyContent, sx } = props;

  return (
    <StyledDialogActions
      id="dialog-action"
      data-testid="dialog-action"
      className="dialog-action"
      sx={{
        justifyContent,
        ...sx,
      }}
    >
      {children}
    </StyledDialogActions>
  );
}

export default DialogAction;
