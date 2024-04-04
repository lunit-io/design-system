import React from "react";
import { styled } from "@mui/material/styles";

import type { SxProps } from "@mui/material/styles";

export interface DialogContentProps {
  children: React.ReactNode;
  sx?: SxProps;
  style?: React.CSSProperties;
}

const StyledDialogContent = styled("div")(({ theme }) => ({
  ...theme.typography.body2_14_regular,
  flex: "1 1 auto",
  overflowY: "scroll",
}));

export function DialogContent(props: DialogContentProps) {
  const { children, sx, style } = props;

  return (
    <StyledDialogContent id="dialog-content" sx={sx} style={style}>
      {children}
    </StyledDialogContent>
  );
}

export default DialogContent;
