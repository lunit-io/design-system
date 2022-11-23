import React from "react";
import { Close, Avatar, LunitLogo } from "@lunit/design-system-icons";
import { StyledOutlinedChip, StyledContainedChip } from "./Chip.styled";
import { commonStyle } from "./consts";

import type {
  OutlinedChipProps,
  ContainedChipProps,
  ChipProps,
} from "./Chip.types";

const OutlinedChip = (props: OutlinedChipProps) => {
  const { label, color, sx } = props;
  return (
    <StyledOutlinedChip
      label={label}
      variant="outlined"
      disabled
      color={color}
      sx={{ ...commonStyle, ...sx }}
    />
  );
};

const ContainedChip = (props: ContainedChipProps) => {
  const { label, onClick, onDelete, thumbnail, color, sx } = props;

  return (
    <StyledContainedChip
      label={label}
      onClick={onClick}
      onDelete={onDelete}
      deleteIcon={<Close />}
      icon={
        thumbnail === "avatar" ? (
          <Avatar variant="filled" color={color} />
        ) : thumbnail === "logo" ? (
          <LunitLogo color={color} />
        ) : thumbnail ? (
          thumbnail
        ) : undefined
      }
      color={color}
      sx={{
        ...commonStyle,
        ...{
          "& span": {
            marginLeft: thumbnail ? "4px" : "8px",
            marginRight: onDelete ? "4px" : "8px",
          },
          "&:hover": {
            backgroundColor: (theme) =>
              !thumbnail && !onDelete
                ? theme.palette.token.core.hover
                : "primary",
            "& svg": {
              color: (theme) =>
                thumbnail || onDelete
                  ? theme.palette.token.core.hover
                  : "primary",
            },
          },
        },
        ...sx,
      }}
    />
  );
};

const Chip = (props: ChipProps) => {
  if (props.style === "outlined") return <OutlinedChip {...props} />;
  return <ContainedChip {...props} />;
};

export default Chip;
